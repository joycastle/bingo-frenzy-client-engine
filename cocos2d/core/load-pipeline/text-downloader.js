/****************************************************************************
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

var urlAppendTimestamp = require('./utils').urlAppendTimestamp;

function loadWithBackoff (item, callback, attempt = 0, maxRetries = 5) {
    var url = item.url;
    url = urlAppendTimestamp(url);

    var xhr = cc.loader.getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            } else {
                handleXhrError();
            }
        } else {
            handleXhrError();
        }
    };
    xhr.onerror = handleXhrError;
    xhr.ontimeout = handleXhrError;
    xhr.send(null);

    function handleXhrError() {
        if (attempt < maxRetries) {
            setTimeout(function () {
                loadWithBackoff(item, callback, attempt + 1, maxRetries);
            }, Math.min(Math.pow(2, attempt++) * 500, 10000));
        } else {
            callback({status:xhr.status, errorMessage:errInfo + '(error)'});
        }
    }
};

module.exports = loadWithBackoff;
