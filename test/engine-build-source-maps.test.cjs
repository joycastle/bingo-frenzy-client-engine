const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const { pipeline } = require('node:stream/promises');
const { Readable, Writable } = require('node:stream');
const dropPureExport = require('../gulp/util/drop-pure-export');
const inlineProp = require('../gulp/util/inline-prop');
const convert = require('convert-source-map');
const { SourceMapConsumer } = require('source-map');

async function transform(source, factory, options = {}) {
    const input = Buffer.from(source);
    const chunks = [];
    for (let index = 0; index < input.length; index += options.chunkSize || input.length) {
        chunks.push(input.subarray(index, index + (options.chunkSize || input.length)));
    }
    const output = [];
    await pipeline(Readable.from(chunks), factory('/tmp/engine-probe.ts', { sourceMaps: options.sourceMaps === true }), new Writable({
        write(chunk, encoding, callback) { output.push(chunk); callback(); },
    }));
    return Buffer.concat(output).toString();
}

test('常量声明与引用跨块时仍一致，UTF-8 字符不损坏', async () => {
    const source = '/*@__DROP_PURE_EXPORT__*/\nconst WIDTH = 1;\nconst text = "中文🎮";\nconsole.log(WIDTH);\n';
    const expected = await transform(source, inlineProp.inlineConst);
    assert.match(expected, /console\.log\(1\)/);
    for (const chunkSize of [1, 7, 20]) {
        assert.equal(await transform(source, inlineProp.inlineConst, { chunkSize }), expected);
    }
});

test('export 标记和枚举跨块不改变转换结果', async () => {
    const source = '/*@__DROP_PURE_EXPORT__*/\nexport const Kind = { Value: 2 };\nconsole.log(Kind.Value);\n';
    const expectedDrop = await transform(source, dropPureExport);
    const expected = await transform(expectedDrop, inlineProp.inlineEnum);
    assert.match(expected, /console\.log\(2\)/);
    const dropped = await transform(source, dropPureExport, { chunkSize: 1 });
    assert.equal(dropped, expectedDrop);
    assert.equal(await transform(dropped, inlineProp.inlineEnum, { chunkSize: 1 }), expected);
});

test('空文件、非脚本和没有转换的源码保持原样', async () => {
    assert.equal(await transform('', inlineProp.inlineConst), '');
    assert.equal(await transform('console.log("中文");', inlineProp.inlineConst, { chunkSize: 1, sourceMaps: true }), 'console.log("中文");');
    const output = [];
    await pipeline(Readable.from([Buffer.from('/*@__DROP_PURE_EXPORT__*/中文')]), inlineProp.inlineConst('data.json'), new Writable({
        write(chunk, encoding, callback) { output.push(chunk); callback(); },
    }));
    assert.equal(Buffer.concat(output).toString(), '/*@__DROP_PURE_EXPORT__*/中文');
});

test('非法枚举通过流错误结束，不吞掉构建失败', async () => {
    await assert.rejects(transform('/*@__DROP_PURE_EXPORT__*/\nvar Kind = { Value: unknownValue };\nKind.Value;', inlineProp.inlineEnum, { chunkSize: 1 }), /Failed to inline/);
});

test('连续源码转换的 Map 保留原始文本与精确列号', async () => {
    const source = '/*@__DROP_PURE_EXPORT__*/\nexport const Kind = { Value: 2 };\nconst WIDTH = 1;\nglobalThis.result = [Kind.Value, WIDTH]; throw new Error("中文");\n';
    let output = await transform(source, dropPureExport, { sourceMaps: true, chunkSize: 7 });
    output = await transform(output, inlineProp.inlineConst, { sourceMaps: true, chunkSize: 9 });
    output = await transform(output, inlineProp.inlineEnum, { sourceMaps: true, chunkSize: 11 });
    const map = convert.fromSource(output);
    assert.ok(map, '转换必须提供 Map');
    const consumer = new SourceMapConsumer(map.toObject());
    const line = output.split('\n').findIndex(line => line.includes('throw new Error'));
    const original = consumer.originalPositionFor({ line: line + 1, column: output.split('\n')[line].indexOf('new Error') });
    assert.equal(original.line, 4);
    assert.equal(original.column, source.split('\n')[3].indexOf('new Error'));
    assert.equal(consumer.sourceContentFor(original.source), source);
});

test('Browserify 与 Babel 完整链路保留原始 TS 及真实错误位置', async t => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'engine-map-chain-'));
    t.after(() => fs.rmSync(root, { recursive: true, force: true }));
    const filename = path.join(root, 'Probe.ts');
    const source = '/*@__DROP_PURE_EXPORT__*/\nexport const enum Kind { Value = 2 }\nconst WIDTH = 1;\nglobalThis.__probe = () => { const values = [WIDTH, Kind.Value]; throw new Error("中文"); };\n';
    fs.writeFileSync(filename, source);
    const bundler = require('../gulp/util/create-bundler')(filename, { sourcemaps: true });
    const output = await new Promise((resolve, reject) => bundler.bundle((error, bytes) => error ? reject(error) : resolve(bytes.toString())));
    const map = convert.fromSource(output);
    assert.ok(map);
    const consumer = new SourceMapConsumer(map.toObject());
    const context = vm.createContext({});
    vm.runInContext(output, context, { filename: path.join(root, 'bundle.js') });
    let error;
    try { vm.runInContext('globalThis.__probe()', context); } catch (caught) { error = caught; }
    assert.ok(error);
    const position = /bundle\.js:(\d+):(\d+)/.exec(error.stack);
    assert.ok(position);
    const original = consumer.originalPositionFor({ line: Number(position[1]), column: Number(position[2]) - 1 });
    assert.equal(original.line, 4);
    assert.equal(original.column, source.split('\n')[3].indexOf('new Error'));
    assert.equal(consumer.sourceContentFor(original.source), source);
});

test('工具代码变化使 Creator 引擎缓存失效，内容相同不重复失效', t => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'engine-pipeline-cache-'));
    t.after(() => fs.rmSync(root, { recursive: true, force: true }));
    fs.cpSync(path.join(__dirname, '../gulp'), path.join(root, 'gulp'), { recursive: true });
    for (const file of ['package.json', 'package-lock.json']) fs.copyFileSync(path.join(__dirname, '..', file), path.join(root, file));
    const directory = path.join(root, 'bin/.cache/web-mobile');
    fs.mkdirSync(directory, { recursive: true });
    const metadata = path.join(directory, '.excludes-min');
    const engineFile = path.join(directory, 'cocos2d-js-min.js');
    const options = JSON.stringify({ version: '2.4.14', excludes: [], sourceMaps: true });
    fs.writeFileSync(metadata, options);
    fs.writeFileSync(engineFile, 'cached engine');
    const temporary = path.join(directory, '.excludes-min.other.tmp');
    fs.writeFileSync(temporary, 'another process temporary file');
    const invalidate = require('../gulp/util/invalidate-build-cache');
    invalidate(root);
    assert.notEqual(JSON.parse(fs.readFileSync(metadata)).version, '2.4.14');
    assert.equal(fs.readFileSync(engineFile, 'utf8'), 'cached engine');
    assert.equal(fs.readFileSync(temporary, 'utf8'), 'another process temporary file');
    // 模拟 Creator 已按新工具重新生成缓存。
    fs.writeFileSync(metadata, options);
    invalidate(root);
    assert.equal(fs.readFileSync(metadata, 'utf8'), options);
    const transform = path.join(root, 'gulp/util/inline-prop.js');
    fs.appendFileSync(transform, '\n// changed build tool\n');
    invalidate(root);
    assert.notEqual(JSON.parse(fs.readFileSync(metadata)).version, '2.4.14');
});

test('Web 构建源码转换失败时回调一次并结束', async t => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'engine-build-error-'));
    t.after(() => fs.rmSync(root, { recursive: true, force: true }));
    const filename = path.join(root, 'Invalid.js');
    fs.writeFileSync(filename, '/*@__DROP_PURE_EXPORT__*/\nexport const Kind = { Value: unknownValue };\nconsole.log(Kind.Value);');
    const build = require('../gulp/tasks/engine');
    let calls = 0;
    const error = await new Promise(resolve => {
        build.buildCocosJsMin(filename, path.join(root, 'engine.js'), [], {}, failure => { calls++; resolve(failure); }, false);
    });
    assert.match(error.message, /Failed to inline/);
    await new Promise(resolve => setImmediate(resolve));
    assert.equal(calls, 1);
});

for (const method of ['buildCocosJs', 'buildCocosJsMin']) {
    test(`${method} 输出已整理的配对 Map，保留源码与真实异常位置`, async t => {
        const root = fs.mkdtempSync(path.join(os.tmpdir(), 'engine-final-map-'));
        t.after(() => fs.rmSync(root, { recursive: true, force: true }));
        const filename = path.join(root, 'Probe.ts');
        const source = '/*@__DROP_PURE_EXPORT__*/\nexport const enum Kind { Value = 2 }\nconst WIDTH = 1;\nglobalThis.__probe = () => { const values = [WIDTH, Kind.Value]; throw new Error("中文"); };\n';
        fs.writeFileSync(filename, source);
        const outputPath = path.join(root, 'output/engine.js');
        const build = require('../gulp/tasks/engine');
        await new Promise((resolve, reject) => build[method](filename, outputPath, [], {}, error => error ? reject(error) : resolve(), true));
        const output = fs.readFileSync(outputPath, 'utf8');
        assert.match(output, /sourceMappingURL=engine\.js\.map/);
        const map = JSON.parse(fs.readFileSync(outputPath + '.map', 'utf8'));
        assert.equal(map.sourceRoot, '');
        assert.ok(map.sources.includes('engine/gulp/browserify_prelude.js'));
        assert.ok(map.sourcesContent.every(content => typeof content === 'string'));
        const context = vm.createContext({});
        vm.runInContext(output, context, { filename: outputPath });
        let error;
        try { vm.runInContext('globalThis.__probe()', context); } catch (caught) { error = caught; }
        const position = /engine\.js:(\d+):(\d+)/.exec(error.stack);
        const consumer = new SourceMapConsumer(map);
        const original = consumer.originalPositionFor({ line: Number(position[1]), column: Number(position[2]) - 1 });
        assert.equal(original.line, 4);
        assert.equal(original.column, source.split('\n')[3].indexOf('new Error'));
        assert.equal(consumer.sourceContentFor(original.source), source);
    });
}
