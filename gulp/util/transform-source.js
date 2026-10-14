'use strict';

const { Transform, PassThrough } = require('stream');
const MagicString = require('magic-string');
const convert = require('convert-source-map');
const { SourceMapConsumer, SourceMapGenerator } = require('source-map');

const COMMENT_ANNOTATION = '/*@__DROP_PURE_EXPORT__*/';

/** Browserify 传入的是字节流，转换必须以整个源码文件为单位。 */
function transformSource(filename, options, editSource) {
    if (!filename.endsWith('.js') && !filename.endsWith('.ts')) return new PassThrough();
    const chunks = [];
    return new Transform({
        transform(chunk, encoding, callback) {
            chunks.push(chunk);
            callback();
        },
        flush(callback) {
            const bytes = Buffer.concat(chunks);
            chunks.length = 0;
            const content = bytes.toString('utf8');
            if (!content.includes(COMMENT_ANNOTATION)) {
                this.push(bytes);
                callback();
                return;
            }
            // 枚举求值、已有 Map 解析可能失败，交给构建流的错误通道。
            try {
                const hasSourceMaps = options && options.sourceMaps === true;
                const previous = hasSourceMaps && convert.fromSource(content);
                const source = previous ? convert.removeComments(content) : content;
                const edited = new MagicString(source);
                editSource(source, edited);
                let output = edited.toString();
                if (output === source) {
                    this.push(bytes);
                    callback();
                    return;
                }
                if (hasSourceMaps) {
                    const sourceName = filename.replace(/\\/g, '/');
                    let map = JSON.parse(edited.generateMap({ file: sourceName, source: sourceName, includeContent: true, hires: true }).toString());
                    if (previous) {
                        const generator = SourceMapGenerator.fromSourceMap(new SourceMapConsumer(map));
                        generator.applySourceMap(new SourceMapConsumer(previous.toObject()), map.sources[0]);
                        map = generator.toJSON();
                    }
                    output += '\n' + convert.fromObject(map).toComment();
                }
                this.push(Buffer.from(output));
                callback();
            } catch (error) {
                callback(error);
            }
        },
        destroy(error, callback) {
            chunks.length = 0;
            callback(error);
        },
    });
}

module.exports = { COMMENT_ANNOTATION, transformSource };
