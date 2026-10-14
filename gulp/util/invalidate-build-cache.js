'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

module.exports = function invalidateBuildCache(engineRoot = path.resolve(__dirname, '../..')) {
    const files = [
        'package.json', 'package-lock.json', 'gulp/browserify_prelude.js', 'gulp/tasks/engine.js',
        'gulp/util/create-bundler.js', 'gulp/util/drop-pure-export.js', 'gulp/util/inline-prop.js',
        'gulp/util/transform-source.js', 'gulp/util/utils.js', 'gulp/util/invalidate-build-cache.js',
    ];
    const hash = crypto.createHash('sha256');
    for (const file of files) hash.update(file).update(fs.readFileSync(path.join(engineRoot, file)));
    const version = hash.digest('hex');
    const cacheRoot = path.join(engineRoot, 'bin/.cache');
    const marker = path.join(cacheRoot, '.bingo-build-pipeline');
    if (fs.existsSync(marker) && fs.readFileSync(marker, 'utf8') === version) return;

    function writeAtomic(filename, contents) {
        const temporary = `${filename}.${process.pid}.tmp`;
        fs.writeFileSync(temporary, contents);
        fs.renameSync(temporary, filename);
    }

    function invalidate(directory) {
        for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
            const filename = path.join(directory, entry.name);
            if (entry.isDirectory()) invalidate(filename);
            else if (entry.name === '.excludes' || /^\.excludes-[\w-]+$/.test(entry.name)) {
                // Creator 2.4.14 比较 version/excludes/sourceMaps 决定是否重建。
                // 使 metadata 不匹配，不删除正在被其他平台使用的引擎 JS/Map。
                writeAtomic(filename, JSON.stringify({ version: `bingo-${version}`, excludes: [], sourceMaps: false }));
            } else if (entry.name === '__file_stats__.json') {
                writeAtomic(filename, JSON.stringify({ version: `bingo-${version}`, stats: {} }));
            }
        }
    }
    if (fs.existsSync(cacheRoot)) invalidate(cacheRoot);
    fs.mkdirSync(cacheRoot, { recursive: true });
    // 最后写标记；并行平台只会额外失效缓存，不会先宣布新工具已生效。
    writeAtomic(marker, version);
};
