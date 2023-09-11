/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

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

const js = require('../platform/js');
const plistParser = require('../platform/CCSAXParser').plistParser;
const Pipeline = require('./pipeline');
const Texture2D = require('../assets/CCTexture2D');
const loadUuid = require('./uuid-loader');
const fontLoader = require('./font-loader');
const { callInNextTick } = require('../platform/utils');

function loadNothing () {
    return null;
}

function loadJSON (item) {
    if (typeof item.content !== 'string') {
        return new Error('JSON Loader: Input item doesn\'t contain string content');
    }

    try {
        var result = JSON.parse(item.content);
        return result;
    }
    catch (e) {
        return new Error('JSON Loader: Parse json [' + item.id + '] failed : ' + e);
    }
}

function loadImage (item) {
    var loadByDeserializedAsset = (item._owner instanceof cc.Asset);
    if (loadByDeserializedAsset) {
        // already has cc.Asset
        return null;
    }

    var image = item.content;
    if (cc.sys.platform !== cc.sys.FB_PLAYABLE_ADS && !(image instanceof Image)) {
        return new Error('Image Loader: Input item doesn\'t contain Image content');
    } 

    // load cc.Texture2D
    var tex = item.texture || new Texture2D();
    tex._uuid = item.uuid;
    tex.url = item.url;
    tex._setRawAsset(item.rawUrl, false);
    tex._nativeAsset = image;
    return tex;
}

// If audio is loaded by url directly, than this loader will wrap it into a new cc.AudioClip object.
// If audio is loaded by deserialized AudioClip, than this loader will be skipped.
function loadAudioAsAsset (item) {
    var loadByDeserializedAsset = (item._owner instanceof cc.Asset);
    if (loadByDeserializedAsset) {
        // already has cc.Asset
        return null;
    }

    var audioClip = new cc.AudioClip();
    audioClip._setRawAsset(item.rawUrl, false);
    audioClip._nativeAsset = item.content;
    audioClip.url = item.url;
    return audioClip;
}

function loadPlist (item) {
    if (typeof item.content !== 'string') {
        return new Error('Plist Loader: Input item doesn\'t contain string content');
    }
    var result = plistParser.parse(item.content);
    if (result) {
        return result;
    }
    else {
        return new Error('Plist Loader: Parse [' + item.id + '] failed');
    }
}

function loadBinary (item) {
    // Invoke custom handle
    if (item.load) {
        return item.load(item.content);
    }
    else {
        return null;
    }
}

//===============//
// PVR constants //
//===============//
// https://github.com/toji/texture-tester/blob/master/js/webgl-texture-util.js#L424
const PVR_HEADER_LENGTH = 13; // The header length in 32 bit ints.
const PVR_MAGIC = 0x03525650; //0x50565203;

// Offsets into the header array.
const PVR_HEADER_MAGIC = 0;
const PVR_HEADER_FORMAT = 2;
const PVR_HEADER_HEIGHT = 6;
const PVR_HEADER_WIDTH = 7;
const PVR_HEADER_MIPMAPCOUNT = 11;
const PVR_HEADER_METADATA = 12;

function loadPVRTex (item) {
    let buffer = item.content instanceof ArrayBuffer ? item.content : item.content.buffer;
    // Get a view of the arrayBuffer that represents the DDS header.
    let header = new Int32Array(buffer, 0, PVR_HEADER_LENGTH);

    // Do some sanity checks to make sure this is a valid DDS file.
    if(header[PVR_HEADER_MAGIC] != PVR_MAGIC) {
      return new Error("Invalid magic number in PVR header");
    }

    // Gather other basic metrics and a view of the raw the DXT data.
    let width = header[PVR_HEADER_WIDTH];
    let height = header[PVR_HEADER_HEIGHT];
    let dataOffset = header[PVR_HEADER_METADATA] + 52;
    let pvrtcData = new Uint8Array(buffer, dataOffset);

    let pvrAsset = {
        _data: pvrtcData,
        _compressed: true,

        width: width,
        height: height,
    };

    return pvrAsset;
}

//===============//
// ETC constants //
//===============//

const ETC_PKM_HEADER_SIZE = 16;

const ETC_PKM_FORMAT_OFFSET = 6;
const ETC_PKM_ENCODED_WIDTH_OFFSET = 8;
const ETC_PKM_ENCODED_HEIGHT_OFFSET = 10;
const ETC_PKM_WIDTH_OFFSET = 12;
const ETC_PKM_HEIGHT_OFFSET = 14;

const ETC1_RGB_NO_MIPMAPS   = 0;
const ETC2_RGB_NO_MIPMAPS   = 1;
const ETC2_RGBA_NO_MIPMAPS  = 3;


function readBEUint16(header, offset) {
    return (header[offset] << 8) | header[offset+1];
}
function loadPKMTex(item) {
    let buffer = item.content instanceof ArrayBuffer ? item.content : item.content.buffer;
    let header = new Uint8Array(buffer);
    let format = readBEUint16(header, ETC_PKM_FORMAT_OFFSET);
    if (format !== ETC1_RGB_NO_MIPMAPS && format !== ETC2_RGB_NO_MIPMAPS && format !== ETC2_RGBA_NO_MIPMAPS) {
        return new Error("Invalid magic number in ETC header");
    }
    let width = readBEUint16(header, ETC_PKM_WIDTH_OFFSET);
    let height = readBEUint16(header, ETC_PKM_HEIGHT_OFFSET);
    let encodedWidth = readBEUint16(header, ETC_PKM_ENCODED_WIDTH_OFFSET);
    let encodedHeight = readBEUint16(header, ETC_PKM_ENCODED_HEIGHT_OFFSET);
    let etcData = new Uint8Array(buffer, ETC_PKM_HEADER_SIZE);
    let etcAsset = {
        _data: etcData,
        _compressed: true,
        width: width,
        height: height
    };
    return etcAsset;
}

//= ==============//
// ASTC constants //
//= ==============//

// struct astc_header
// {
//  uint8_t magic[4];
//  uint8_t blockdim_x;
//  uint8_t blockdim_y;
//  uint8_t blockdim_z;
//  uint8_t xsize[3]; // x-size = xsize[0] + xsize[1] + xsize[2]
//  uint8_t ysize[3]; // x-size, y-size and z-size are given in texels;
//  uint8_t zsize[3]; // block count is inferred
// };
const ASTC_MAGIC = 0x5CA1AB13;

const ASTC_HEADER_LENGTH = 16; // The header length
const ASTC_HEADER_MAGIC = 4;
const ASTC_HEADER_BLOCKDIM = 3;

const ASTC_HEADER_SIZE_X_BEGIN = 7;
const ASTC_HEADER_SIZE_Y_BEGIN = 10;
const ASTC_HEADER_SIZE_Z_BEGIN = 13;

function getASTCFormat (xdim, ydim) {
    if (xdim === 4) {
        return cc.Texture2D.PixelFormat.RGBA_ASTC_4x4;
    } if (xdim === 5) {
        if (ydim === 4) {
            return cc.Texture2D.PixelFormat.RGBA_ASTC_5x4;
        }
        return cc.Texture2D.PixelFormat.RGBA_ASTC_5x5;
    } if (xdim === 6) {
        if (ydim === 5) {
            return cc.Texture2D.PixelFormat.RGBA_ASTC_6x5;
        }
        return cc.Texture2D.PixelFormat.RGBA_ASTC_6x6;
    } if (xdim === 8) {
        if (ydim === 5) {
            return cc.Texture2D.PixelFormat.RGBA_ASTC_8x5;
        } if (ydim === 6) {
            return cc.Texture2D.PixelFormat.RGBA_ASTC_8x6;
        }
        return cc.Texture2D.PixelFormat.RGBA_ASTC_8x8;
    } if (xdim === 10) {
        if (ydim === 5) {
            return cc.Texture2D.PixelFormat.RGBA_ASTC_10x5;
        } if (ydim === 6) {
            return cc.Texture2D.PixelFormat.RGBA_ASTC_10x6;
        } if (ydim === 8) {
            return cc.Texture2D.PixelFormat.RGBA_ASTC_10x8;
        }
        return cc.Texture2D.PixelFormat.RGBA_ASTC_10x10;
    }
    if (ydim === 10) {
        return cc.Texture2D.PixelFormat.RGBA_ASTC_12x10;
    }
    return cc.Texture2D.PixelFormat.RGBA_ASTC_12x12;
}

function loadASTCTex(item) {
    const buffer = item.content instanceof ArrayBuffer ? item.content : item.content.buffer;
    const header = new Uint8Array(buffer);

    const magicval = header[0] + (header[1] << 8) + (header[2] << 16) + (header[3] << 24);
    if (magicval !== ASTC_MAGIC) {
        return new Error('Invalid magic number in ASTC header');
    }

    const xdim = header[ASTC_HEADER_MAGIC];
    const ydim = header[ASTC_HEADER_MAGIC + 1];
    const zdim = header[ASTC_HEADER_MAGIC + 2];
    if ((xdim < 3 || xdim > 6 || ydim < 3 || ydim > 6 || zdim < 3 || zdim > 6)
        && (xdim < 4 || xdim === 7 || xdim === 9 || xdim === 11 || xdim > 12
            || ydim < 4 || ydim === 7 || ydim === 9 || ydim === 11 || ydim > 12 || zdim !== 1)) {
        return new Error('Invalid block number in ASTC header');
    }

    const format = getASTCFormat(xdim, ydim);

    const xsize = header[ASTC_HEADER_SIZE_X_BEGIN] + (header[ASTC_HEADER_SIZE_X_BEGIN + 1] << 8)
        + (header[ASTC_HEADER_SIZE_X_BEGIN + 2] << 16);
    const ysize = header[ASTC_HEADER_SIZE_Y_BEGIN] + (header[ASTC_HEADER_SIZE_Y_BEGIN + 1] << 8)
        + (header[ASTC_HEADER_SIZE_Y_BEGIN + 2] << 16);
    const zsize = header[ASTC_HEADER_SIZE_Z_BEGIN] + (header[ASTC_HEADER_SIZE_Z_BEGIN + 1] << 8)
        + (header[ASTC_HEADER_SIZE_Z_BEGIN + 2] << 16);

    // buffer = buffer.slice(ASTC_HEADER_LENGTH, buffer.byteLength);
    const astcData = new Uint8Array(buffer, ASTC_HEADER_LENGTH);

    const data = {
        _data: astcData,
        _compressed: true,
        width: xsize,
        height: ysize,
        format: format,
    };

    var tex = new Texture2D();
    tex._uuid = item.uuid;
    tex.url = item.url;
    tex._setRawAsset(item.rawUrl, false);
    tex._nativeAsset = data;
    return tex;
}

var defaultMap = {
    // Images
    'png' : loadImage,
    'jpg' : loadImage,
    'bmp' : loadImage,
    'jpeg' : loadImage,
    'gif' : loadImage,
    'ico' : loadImage,
    'tiff' : loadImage,
    'webp' : loadImage,
    'image' : loadImage,
    'pvr' : loadPVRTex,
    'pkm' : loadPKMTex,
    'astc' : loadASTCTex,

    // Audio
    'mp3' : loadAudioAsAsset,
    'ogg' : loadAudioAsAsset,
    'wav' : loadAudioAsAsset,
    'm4a' : loadAudioAsAsset,

    // json
    'json' : loadJSON,
    'ExportJson' : loadJSON,

    // plist
    'plist' : loadPlist,

    // asset
    'uuid' : loadUuid,
    'prefab' : loadUuid,
    'fire' : loadUuid,
    'scene' : loadUuid,

    // binary
    'binary' : loadBinary,
    'dbbin' : loadBinary,
    'bin' : loadBinary,

    // Font
    'font' : fontLoader.loadFont,
    'eot' : fontLoader.loadFont,
    'ttf' : fontLoader.loadFont,
    'woff' : fontLoader.loadFont,
    'svg' : fontLoader.loadFont,
    'ttc' : fontLoader.loadFont,

    'default' : loadNothing
};

var ID = 'Loader';

/**
 * The loader pipe, it can load several types of files:
 * 1. Images
 * 2. JSON
 * 3. Plist
 * 4. Audio
 * 5. Font
 * 6. Cocos Creator scene
 * It will not interfere with items of unknown type.
 * You can pass custom supported types in the constructor.
 * @class Pipeline.Loader
 */
/**
 * Constructor of Loader, you can pass custom supported types.
 *
 * @method constructor
 * @param {Object} extMap Custom supported types with corresponded handler
 * @example
 *var loader = new Loader({
 *    // This will match all url with `.scene` extension or all url with `scene` type
 *    'scene' : function (url, callback) {}
 *});
 */
var Loader = function (extMap) {
    this.id = ID;
    this.async = true;
    this.pipeline = null;
    this._loadQueue = [];
    this._frameTime = null;     // 一帧时间
    this._logicTime = null;     // 执行 load 逻辑的时间
    this._idleTime = 0;         // 空闲时间
    this._isLoading = false;    // 是否正在处理 loadQueue
    this.extMap = js.mixin(extMap, defaultMap);
};
Loader.ID = ID;

/**
 * Add custom supported types handler or modify existing type handler.
 * @method addHandlers
 * @param {Object} extMap Custom supported types with corresponded handler
 */
Loader.prototype.addHandlers = function (extMap) {
    this.extMap = js.mixin(this.extMap, extMap);
};

Loader.prototype._handleLoadQueue = function () {
    let self = this;
    // 初始化时间
    if (!this._frameTime || !this._logicTime) {
        this._frameTime = 1000 / cc.game.getFrameRate();
        this._logicTime = this._frameTime * cc.macro.LOAD_PERCENT_BY_FRAME;
    }
    if (this._loadQueue.length <= 0) {
        // 如果队列为空
        if (!this._idleTime) {
            this._idleTime = Date.now();
        }
        if (Date.now() - this._idleTime > 5000) {
            // 如果空闲时间超过指定时间，退出
            this._isLoading = false;
        } else {
            // 延迟一帧再处理
            callInNextTick(function() {
                self._handleLoadQueue();
            });
        }
    } else {
        // 队列不为空，执行加载逻辑
        this._idleTime = null;
        let startTime = Date.now();
        while (this._loadQueue.length > 0) {
            var nextOne = this._loadQueue.shift();
            if (!nextOne) {
                break;
            }
            var loadFunc = this.extMap[nextOne.item.type] || this.extMap['default'];
            var syncRet = loadFunc.call(this, nextOne.item, nextOne.callback);
            if (syncRet !== undefined) {
                if (syncRet instanceof Error) {
                    nextOne.callback(syncRet);
                } else {
                    nextOne.callback(null, syncRet);
                }
            }
            // 超过一帧内可执行逻辑的最大时间，跳出循环
            if (Date.now() - startTime > this._logicTime) {
                break;
            }
        }
        const sleepTime = Math.max(0, this._frameTime - (Date.now() - startTime));
        setTimeout(function() {
            self._handleLoadQueue();
        }, sleepTime);
    }
};

Loader.prototype.handle = function (item, callback) {
    if (CC_EDITOR) {
        var loadFunc = this.extMap[item.type] || this.extMap['default'];
        return loadFunc.call(this, item, callback);
    } else {
        this._loadQueue.push({
            item: item,
            callback: callback
        });
        if (this._isLoading) {
            return;
        }
        this._isLoading = true;

        let self = this;
        callInNextTick(function() {
            self._handleLoadQueue();
        });
    }
};

Pipeline.Loader = module.exports = Loader;
