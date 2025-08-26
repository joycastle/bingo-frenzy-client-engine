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

import { vfmtPosUvTwoColor } from '../../../vertex-format';
import WebglTTFAssembler from './ttf';

export default class WebglOutlineTTFAssembler extends WebglTTFAssembler {
    floatsPerVert = 6;

    get verticesFloats () {
        // return this.verticesCount * this.floatsPerVert;
        return 24;
    }

    initData () {
        let data = this._renderData;
        data.createQuadData(0, this.verticesFloats, this.indicesCount);
    }

    getBuffer() {
        return cc.renderer._handle.getBuffer("mesh", this.getVfmt());
    }

    getVfmt() {
        return vfmtPosUvTwoColor
    }

    updateUVs (comp) {
        let verts = this._renderData.vDatas[0];
        let uv = comp._frame.uv;
        let uvOffset = this.uvOffset;
        let floatsPerVert = this.floatsPerVert;
        for (let i = 0; i < 4; i++) {
            let srcOffset = i * 2;
            let dstOffset = floatsPerVert * i + uvOffset;
            verts[dstOffset] = uv[srcOffset];
            verts[dstOffset + 1] = uv[srcOffset + 1];
        }
    }

    updateColor(comp) {
        let uintVerts = this._renderData.uintVDatas[0];
        if (!uintVerts) return;
        if (comp._gradientColors.length < 1) {
            return;
        }
        let outlineColor = comp._outlineColor._val;
        let floatsPerVert = this.floatsPerVert;
        let colorOffset = this.colorOffset;
        comp._gradientColors.forEach((o) => {
            o._fastSetA(comp.node._color.a);
        });
        let j = 0;
        let colorLength = comp._gradientColors.length;
        for (let i = colorOffset, l = uintVerts.length; i < l; i += floatsPerVert) {
            let c_i = j % colorLength;
            uintVerts[i] = (comp._gradientColors[c_i] || cc.Color.WHITE)._val;
            uintVerts[i + 1] = outlineColor;
            j += 1;
        }
    }
}
