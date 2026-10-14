/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

'use strict';

require('../util/invalidate-build-cache')();

const Utils = require('../util/utils');
const createBundler = require('../util/create-bundler');
const Path = require('path');
const Fs = require('fs-extra');

const Source = require('vinyl-source-stream');
const Gulp = require('gulp');
const Buffer = require('vinyl-buffer');
const Sourcemaps = require('gulp-sourcemaps');
const EventStream = require('event-stream');
const Chalk = require('chalk');
const HandleErrors = require('../util/handleErrors');
const Optimizejs = require('gulp-optimize-js');
const { pipeline, Transform } = require('stream');
const { Buffer: NodeBuffer } = require('buffer');
const { SourceMapConsumer, SourceMapGenerator } = require('source-map');

let buildSkipModules = [
    '../../cocos2d/core/platform/deserialize-editor.js',
];

let physicsSkipModules = [
    '../../cocos2d/core/3d/physics/exports/physics-builtin.ts',
    '../../cocos2d/core/3d/physics/exports/physics-cannon.ts',
    '../../cocos2d/core/3d/physics/exports/physics-framework.ts',
    '../../cocos2d/core/3d/physics/framework/assets/physics-material.ts',
    '../../external/cannon/cannon.js',
];

var jsbSkipModules = [
    // modules need to skip in jsb
    '../../extensions/spine/skeleton-cache.js',
    '../../extensions/spine/vertex-effect-delegate.js',
    '../../extensions/spine/lib/spine.js',
    '../../extensions/dragonbones/lib/dragonBones.js',
    '../../extensions/dragonbones/ArmatureCache.js',
    '../../extensions/dragonbones/CCArmatureDisplay.js',
    '../../extensions/dragonbones/CCFactory.js',
    '../../extensions/dragonbones/CCSlot.js',
    '../../extensions/dragonbones/CCTextureData.js',

    // gfx
    '../../cocos2d/renderer/gfx/device.js',
    '../../cocos2d/renderer/gfx/enums.js',
    '../../cocos2d/renderer/gfx/frame-buffer.js',
    '../../cocos2d/renderer/gfx/index-buffer.js',
    '../../cocos2d/renderer/gfx/misc.js',
    '../../cocos2d/renderer/gfx/program.js',
    '../../cocos2d/renderer/gfx/render-buffer.js',
    '../../cocos2d/renderer/gfx/state.js',
    '../../cocos2d/renderer/gfx/texture-2d.js',
    '../../cocos2d/renderer/gfx/texture-cube.js',
    '../../cocos2d/renderer/gfx/texture.js',
    '../../cocos2d/renderer/gfx/vertex-buffer.js',
    '../../cocos2d/renderer/gfx/vertex-format.js',

    // renderer
    '../../cocos2d/renderer/core/base-renderer.js',
    '../../cocos2d/renderer/core/program-lib.js',
    '../../cocos2d/renderer/core/view.js',
    '../../cocos2d/renderer/renderers/forward-renderer.js',
    '../../cocos2d/renderer/scene/camera.js',
    '../../cocos2d/renderer/scene/light.js',
    '../../cocos2d/renderer/scene/scene.js',

    // buffer
    '../../cocos2d/core/renderer/webgl/model-batcher.js',
    '../../cocos2d/core/renderer/webgl/spine-buffer.js',
];
var jsbAliasify = {
    replacements: {
        // '(.*)render-engine(.js)?': require.resolve('../../cocos2d/core/renderer/render-engine.jsb')
    },
    verbose: false
};

const WEBVIEW_REGEXP = /[Ww]eb[Vv]iew/;
function excludedWebView (excludes) {
    return excludes ? excludes.some(item => /.*CCWebView(\.js)?/.test(item)) : false;
}

exports.buildDebugInfos = require('./buildDebugInfos');

function normalizeWebSourceMaps() {
    return new Transform({
        objectMode: true,
        transform(file, encoding, callback) {
            if (!file.path.endsWith('.map')) {
                callback(null, file);
                return;
            }
            // Map 解析/重建失败应使当前构建失败，不输出不匹配的产物。
            try {
                const map = JSON.parse(file.contents.toString('utf8'));
                map.sources = map.sources.map(source => {
                    const sourcePath = source.replace(/\\/g, '/');
                    if (sourcePath === map.file) return sourcePath;
                    const match = sourcePath.match(/(?:^|\/)engine\/(.+)$/);
                    if (match) return `engine/${match[1]}`;
                    const relative = Path.relative(Path.resolve(__dirname, '../..'), Path.resolve(__dirname, '../..', sourcePath)).replace(/\\/g, '/');
                    return relative.startsWith('../') ? sourcePath : `engine/${relative}`;
                });
                map.sourceRoot = '';
                const generatedSource = map.sources.findIndex((source, index) => source === map.file && map.sourcesContent[index] === null);
                if (generatedSource !== -1) {
                    // Browserify 包装只对应生成代码；保留未映射边界，不伪造源码。
                    const consumer = new SourceMapConsumer(map);
                    const generator = new SourceMapGenerator({ file: map.file });
                    consumer.eachMapping(mapping => {
                        const position = { generated: { line: mapping.generatedLine, column: mapping.generatedColumn } };
                        if (mapping.source !== null && mapping.source !== map.file) {
                            position.source = mapping.source;
                            position.original = { line: mapping.originalLine, column: mapping.originalColumn };
                            if (mapping.name !== null) position.name = mapping.name;
                        }
                        generator.addMapping(position);
                    });
                    map.sources.forEach((source, index) => {
                        if (source !== map.file) generator.setSourceContent(source, map.sourcesContent[index]);
                    });
                    Object.assign(map, generator.toJSON());
                    map.sourceRoot = '';
                }
                file.contents = NodeBuffer.from(JSON.stringify(map));
                callback(null, file);
            } catch (error) {
                callback(error);
            }
        },
    });
}

function pipeWebBuild({ streams, outDir, callback, hasSourceMaps }) {
    const destination = Gulp.dest(outDir);
    if (hasSourceMaps) streams.push(normalizeWebSourceMaps());
    streams.push(destination);
    pipeline(streams, callback);
    destination.resume();
    return destination;
}

exports.buildCocosJs = function (sourceFile, outputFile, excludes, opt_macroFlags, callback, createMap) {
    if (typeof opt_macroFlags === 'function') {
        callback = opt_macroFlags;
        opt_macroFlags = null;
    }

    var opts = {
        sourcemaps: createMap !== false
    };
    var outDir = Path.dirname(outputFile);
    var outFile = Path.basename(outputFile);
    var bundler = createBundler(sourceFile, opts);

    buildSkipModules.concat(physicsSkipModules).forEach(function (file) {
        bundler.exclude(require.resolve(file));
    });
    excludes && excludes.forEach(function (file) {
        bundler.exclude(file);
    });

    const streams = [bundler.bundle(), Source(outFile), Buffer()];

    if (createMap) {
        streams.push(Sourcemaps.init({loadMaps: true}));
    }

    streams.push(Utils.uglify('build', Object.assign({ debug: true }, opt_macroFlags)));

    if (createMap) {
        streams.push(Sourcemaps.write('./', {
            sourceRoot: './',
            includeContent: true,
            addComment: true
        }));
    }

    return pipeWebBuild({ streams, outDir, callback, hasSourceMaps: !!createMap });
};

exports.buildCocosJsMin = function (sourceFile, outputFile, excludes, opt_macroFlags, callback, createMap) {
    if (typeof opt_macroFlags === 'function') {
        callback = opt_macroFlags;
        opt_macroFlags = null;
    }

    var opts = {
        sourcemaps: createMap !== false
    };
    var outDir = Path.dirname(outputFile);
    var outFile = Path.basename(outputFile);
    var bundler = createBundler(sourceFile, opts);

    buildSkipModules.concat(physicsSkipModules).forEach(function (file) {
        bundler.exclude(require.resolve(file));
    });
    excludes && excludes.forEach(function (file) {
        bundler.exclude(file);
    });

    bundler.exclude(Path.resolve(__dirname, '../../DebugInfos.json'));

    var Size = null;
    try {
        Size = require('gulp-size');
    } catch (error) {
        Size = null;
    }

    if (Size) {
        var rawSize = Size({ gzip: false, pretty: false, showTotal: false, showFiles: false });
        var zippedSize = Size({ gzip: true, pretty: false, showTotal: false, showFiles: false });
    }

    const streams = [bundler.bundle(), Source(outFile), Buffer()];
    if (createMap) {
        streams.push(Sourcemaps.init({loadMaps: true}));
    }
    streams.push(Utils.uglify('build', opt_macroFlags));

    if (Size) {
        streams.push(rawSize, zippedSize, EventStream.through(null, function () {
            var raw = rawSize.size;
            var zipped = zippedSize.size;
            var percent = ((zipped / raw) * 100).toFixed(2);
            console.log(`Size of ${outputFile}: minimized: ${Chalk.cyan(raw)}B zipped: ${Chalk.cyan(zipped)}B, compression ratio: ${percent}%`);
            this.emit('end');
        }));
    }
    if (createMap) {
        streams.push(Sourcemaps.write('./', {
            sourceRoot: './',
            includeContent: true,
            addComment: true
        }));
    }
    return pipeWebBuild({ streams, outDir, callback, hasSourceMaps: !!createMap });
};

exports.buildPreview = function (sourceFile, outputFile, callback, devMode) {
    var cacheDir = devMode && Path.resolve(Path.dirname(outputFile), '.cache/preview-compile-cache');
    var outFile = Path.basename(outputFile);
    var outDir = Path.dirname(outputFile);

    var bundler = createBundler(sourceFile, {
        cacheDir: cacheDir,
        sourcemaps: !devMode
    });
    // NOTE: no need to exclude physics module for cocos2d-js-preview.js
    var bundler = bundler
        .bundle()
        .on('error', HandleErrors.handler)
        .pipe(HandleErrors())
        .pipe(Source(outFile))
        .pipe(Buffer());
    if (!devMode) {
        bundler = bundler
            .pipe(Sourcemaps.init({loadMaps: true}))
            .pipe(Utils.uglify('preview', {physics_cannon: true}))
            .pipe(Sourcemaps.write('./', {
                sourceRoot: '../',
                includeContent: false,
                addComment: true
            }));
    }
    bundler
        .pipe(Gulp.dest(outDir))
        .on('end', callback);
};

exports.buildJsbPreview = function (sourceFile, outputFile, excludes, callback) {
    var FixJavaScriptCore = require('../util/fix-jsb-javascriptcore');

    var outFile = Path.basename(outputFile);
    var outDir = Path.dirname(outputFile);

    excludes = excludes.concat(jsbSkipModules);

    var bundler = createBundler(sourceFile);
    // NOTE: no need to exclude physics module for cocos2d-jsb-preview.js
    excludes.forEach(function (module) {
        bundler.exclude(require.resolve(module));
    });
    bundler.bundle()
        .on('error', HandleErrors.handler)
        .pipe(HandleErrors())
        .pipe(Source(outFile))
        .pipe(Buffer())
        .pipe(FixJavaScriptCore())
        .pipe(Utils.uglify('preview', { jsb: true, nativeRenderer: true, physics_cannon: true}))
        .pipe(Optimizejs({
            sourceMap: false
        }))
        .pipe(Gulp.dest(outDir))
        .on('end', callback);
};

exports.buildJsb = function (sourceFile, outputFile, excludes, opt_macroFlags, callback, createMap) {
    if (typeof opt_macroFlags === 'function') {
        callback = opt_macroFlags;
        opt_macroFlags = null;
    }

    var opts = {
        sourcemaps: createMap !== false
    };

    let flags = Object.assign({ jsb: true, debug: true }, opt_macroFlags);
    let macro = Utils.getMacros('build', flags);
    let nativeRenderer = macro["CC_NATIVERENDERER"];
    let needHandleWebview = excludedWebView(excludes);

    if (opt_macroFlags && nativeRenderer) {
        opts.aliasifyConfig = jsbAliasify;
    }
    if (needHandleWebview) {
        opts.aliasifyConfig = opts.aliasifyConfig || jsbAliasify;
        // this will replace require call with an empty object
        opts.aliasifyConfig.replacements['.*CCWebView(\.js)?'] = false;
    }

    var FixJavaScriptCore = require('../util/fix-jsb-javascriptcore');

    var outFile = Path.basename(outputFile);
    var outDir = Path.dirname(outputFile);

    var bundler = createBundler(sourceFile, opts);
    buildSkipModules.concat(physicsSkipModules).forEach(function (file) {
        bundler.exclude(require.resolve(file));
    });
    if (nativeRenderer) {
        excludes = excludes.concat(jsbSkipModules);
    }
    excludes.forEach(function (module) {
        bundler.exclude(require.resolve(module));
    });
    bundler.bundle()
        .on('error', HandleErrors.handler)
        .pipe(HandleErrors())
        .pipe(Source(outFile))
        .pipe(Buffer())
        .pipe(FixJavaScriptCore())
        .pipe(Utils.uglify('build', flags))
        .pipe(Optimizejs({
            sourceMap: false
        }))
        .on('data', function (file) {
            if (needHandleWebview) {
                let contents = file.contents.toString();
                if (WEBVIEW_REGEXP.test(contents)) {
                    throw new Error('WebView field still exists in engine');
                }
            }
        })
        .pipe(Gulp.dest(outDir))
        .on('end', callback);
};

exports.buildJsbMin = function (sourceFile, outputFile, excludes, opt_macroFlags, callback, createMap) {
    if (typeof opt_macroFlags === 'function') {
        callback = opt_macroFlags;
        opt_macroFlags = null;
    }

    var opts = {
        sourcemaps: createMap !== false
    };

    let flags = Object.assign({ jsb: true }, opt_macroFlags);
    let macro = Utils.getMacros('build', flags);
    let nativeRenderer = macro["CC_NATIVERENDERER"];
    let needHandleWebview = excludedWebView(excludes);

    if (opt_macroFlags && nativeRenderer) {
        opts.aliasifyConfig = jsbAliasify;
    }
    if (needHandleWebview) {
        opts.aliasifyConfig = opts.aliasifyConfig || jsbAliasify;
        // this will replace require call with an empty object
        opts.aliasifyConfig.replacements['.*CCWebView(\.js)?'] = false;
    }

    var FixJavaScriptCore = require('../util/fix-jsb-javascriptcore');

    var outFile = Path.basename(outputFile);
    var outDir = Path.dirname(outputFile);

    var bundler = createBundler(sourceFile, opts);
    buildSkipModules.concat(physicsSkipModules).forEach(function (file) {
        bundler.exclude(require.resolve(file));
    });
    if (nativeRenderer) {
        excludes = excludes.concat(jsbSkipModules);
    }
    excludes.forEach(function (module) {
        bundler.exclude(require.resolve(module));
    });

    bundler.exclude(Path.resolve(__dirname, '../../DebugInfos.json'));

    bundler.bundle()
        .on('error', HandleErrors.handler)
        .pipe(HandleErrors())
        .pipe(Source(outFile))
        .pipe(Buffer())
        .pipe(FixJavaScriptCore())
        .pipe(Utils.uglify('build', flags))
        .pipe(Optimizejs({
            sourceMap: false
        }))
        .on('data', function (file) {
            if (needHandleWebview) {
                let contents = file.contents.toString();
                if (WEBVIEW_REGEXP.test(contents)) {
                    throw new Error('WebView field still exists in engine');
                }
            }
        })
        .pipe(Gulp.dest(outDir))
        .on('end', callback);
};

exports.buildRuntime = function (sourceFile, outputFile, excludes, opt_macroFlags, callback, createMap) {
    if (typeof opt_macroFlags === 'function') {
        callback = opt_macroFlags;
        opt_macroFlags = null;
    }

    var opts = {
        sourcemaps: createMap !== false
    };

    let flags = Object.assign({ jsb: false, runtime: true, debug: true }, opt_macroFlags);
    let macro = Utils.getMacros('build', flags);
    let nativeRenderer = macro["CC_NATIVERENDERER"];

    if (opt_macroFlags && nativeRenderer) {
        opts.aliasifyConfig = jsbAliasify;
    }

    var FixJavaScriptCore = require('../util/fix-jsb-javascriptcore');

    var outFile = Path.basename(outputFile);
    var outDir = Path.dirname(outputFile);

    var bundler = createBundler(sourceFile, opts);
    buildSkipModules.concat(physicsSkipModules).forEach(function (file) {
        bundler.exclude(require.resolve(file));
    });
    excludes.forEach(function (module) {
        bundler.exclude(require.resolve(module));
    });

    bundler.bundle()
        .on('error', HandleErrors.handler)
        .pipe(HandleErrors())
        .pipe(Source(outFile))
        .pipe(Buffer())
        .pipe(FixJavaScriptCore())
        .pipe(Utils.uglify('build', flags))
        .pipe(Optimizejs({
            sourceMap: false
        }))
        .pipe(Gulp.dest(outDir))
        .on('end', callback);
};

exports.buildRuntimeMin = function (sourceFile, outputFile, excludes, opt_macroFlags, callback, createMap) {
    if (typeof opt_macroFlags === 'function') {
        callback = opt_macroFlags;
        opt_macroFlags = null;
    }

    var opts = {
        sourcemaps: createMap !== false
    };

    let flags = Object.assign({ jsb: false, runtime: true }, opt_macroFlags);
    let macro = Utils.getMacros('build', flags);
    let nativeRenderer = macro["CC_NATIVERENDERER"];

    if (opt_macroFlags && nativeRenderer) {
        opts.aliasifyConfig = jsbAliasify;
    }
    
    var FixJavaScriptCore = require('../util/fix-jsb-javascriptcore');

    var outFile = Path.basename(outputFile);
    var outDir = Path.dirname(outputFile);

    var bundler = createBundler(sourceFile, opts);
    buildSkipModules.concat(physicsSkipModules).forEach(function (file) {
        bundler.exclude(require.resolve(file));
    });
    excludes.forEach(function (module) {
        bundler.exclude(require.resolve(module));
    });

    bundler.exclude(Path.resolve(__dirname, '../../DebugInfos.json'));

    bundler.bundle()
        .on('error', HandleErrors.handler)
        .pipe(HandleErrors())
        .pipe(Source(outFile))
        .pipe(Buffer())
        .pipe(FixJavaScriptCore())
        .pipe(Utils.uglify('build', flags))
        .pipe(Optimizejs({
            sourceMap: false
        }))
        .pipe(Gulp.dest(outDir))
        .on('end', callback);
};

exports.excludeAllDepends = function (excludedModules) {
    let modules = Fs.readJsonSync(Path.join(__dirname, '../../modules.json'));
    if (modules && modules.length > 0) {
        function _excludeMudules (muduleName) {
            if (excMudules[muduleName]) {
                return;
            }
            for (let module of modules) {
                if (module.name === muduleName) {
                    excMudules[muduleName] = module;
                    break;
                }
            }

            modules.forEach(module => {
                if (module.dependencies && module.dependencies.indexOf(muduleName) !== -1) {
                    _excludeMudules(module.name);
                }
            });
        }

        // exclude all mudules
        let excMudules = Object.create(null);

        excludedModules.forEach(_excludeMudules);

        let excludes = [];
        for (let key in excMudules) {
            let module = excMudules[key];
            if (module.entries) {
                module.entries.forEach(function (file) {
                    let path = Path.join(__dirname, '..', '..', file);
                    if (excludes.indexOf(path) === -1) {
                        excludes.push(path);
                    }
                });
            }
        }
        return excludes;
    }
    else {
        return [];
    }
};

exports.jsbSkipModules = jsbSkipModules;
