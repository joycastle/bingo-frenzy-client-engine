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

 import BmfontAssembler from '../../../../utils/label/bmfont';
 import { vfmtPosUvTwoColor } from '../../../vertex-format';

 let _dataOffset = 0;

 const COLOR_INDEX = [2, 3, 0, 1];

 export default class WebglColorBmfontAssembler extends BmfontAssembler {
     floatsPerVert = 6;

     initData () {
         this._renderData.createFlexData(0, 4, 6, this.getVfmt());
     }

     updateColor (comp) {
         let uintVerts = this._renderData.uintVDatas[0];
         if (!uintVerts) return;
         const color = comp.node.color;
         let outlineColor = (comp._borderColor || cc.Color.BLACK)._val;
         let floatsPerVert = this.floatsPerVert;
         let colorOffset = this.colorOffset;
         if (comp._gradient) {
             comp._gradientColors.forEach((o) => {
                 o._fastSetA(color.getA());
             });
             let j = 0;
             for (let i = colorOffset, l = uintVerts.length; i < l; i += floatsPerVert) {
                 let c_i = j % 4;
                 uintVerts[i] = comp._gradientColors[COLOR_INDEX[c_i]]._val;
                 uintVerts[i + 1] = outlineColor;
                 j += 1;
             }
         } else {
             for (let i = colorOffset, l = uintVerts.length; i < l; i += floatsPerVert) {
                 uintVerts[i] = color._val;
                 uintVerts[i + 1] = outlineColor;
             }
         }
     }

     getBuffer() {
         return cc.renderer._handle.getBuffer("mesh", this.getVfmt());
     }

     getVfmt() {
         return vfmtPosUvTwoColor
     }

     _reserveQuads (comp, count) {
         let verticesCount = count * 4;
         let indicesCount = count * 6;

         let flexBuffer = this._renderData._flexBuffer;
         flexBuffer.reserve(verticesCount, indicesCount);
         flexBuffer.used(verticesCount, indicesCount);

         let iData = this._renderData.iDatas[0];

         for (let i = 0, vid = 0, l = indicesCount; i < l; i += 6, vid += 4) {
             iData[i] = vid;
             iData[i + 1] = vid + 1;
             iData[i + 2] = vid + 2;
             iData[i + 3] = vid + 1;
             iData[i + 4] = vid + 3;
             iData[i + 5] = vid + 2;
         }

         _dataOffset = 0;
     }

     _quadsUpdated (comp) {
         _dataOffset = 0;

         let flexBuffer = this._renderData._flexBuffer;
         flexBuffer.used(this.verticesCount, this.indicesCount);
     }

     _getColor(comp, i) {
         if (comp._gradient && i !== undefined) {
             return comp._gradientColors[COLOR_INDEX[i]]._val;
         } else {
             return comp.node._color._val;
         }
     }

     _getOutlineColor(comp) {
         return (comp._borderColor || cc.Color.BLACK)._val;
     }

     appendQuad (comp, texture, rect, rotated, x, y, scale) {
         let renderData = this._renderData;
         let verts = renderData.vDatas[0],
             uintVerts = renderData.uintVDatas[0];

         this.verticesCount += 4;
         this.indicesCount = this.verticesCount / 2 * 3;

         let texw = texture.width,
             texh = texture.height,
             rectWidth = rect.width,
             rectHeight = rect.height,
             outlineColor = this._getOutlineColor(comp);

         let l, b, r, t;
         let floatsPerVert = this.floatsPerVert;
         // uvs
         let uvDataOffset = _dataOffset + this.uvOffset;
         if (!rotated) {
             l = (rect.x) / texw;
             r = (rect.x + rectWidth) / texw;
             b = (rect.y + rectHeight) / texh;
             t = (rect.y) / texh;

             verts[uvDataOffset] = l;
             verts[uvDataOffset + 1] = b;
             uvDataOffset += floatsPerVert;
             verts[uvDataOffset] = r;
             verts[uvDataOffset + 1] = b;
             uvDataOffset += floatsPerVert;
             verts[uvDataOffset] = l;
             verts[uvDataOffset + 1] = t;
             uvDataOffset += floatsPerVert;
             verts[uvDataOffset] = r;
             verts[uvDataOffset + 1] = t;
         } else {
             l = (rect.x) / texw;
             r = (rect.x + rectHeight) / texw;
             b = (rect.y + rectWidth) / texh;
             t = (rect.y) / texh;

             verts[uvDataOffset] = l;
             verts[uvDataOffset + 1] = t;
             uvDataOffset += floatsPerVert;
             verts[uvDataOffset] = l;
             verts[uvDataOffset + 1] = b;
             uvDataOffset += floatsPerVert;
             verts[uvDataOffset] = r;
             verts[uvDataOffset + 1] = t;
             uvDataOffset += floatsPerVert;
             verts[uvDataOffset] = r;
             verts[uvDataOffset + 1] = b;
         }


         // positions
         l = x;
         r = x + rectWidth * scale;
         b = y - rectHeight * scale;
         t = y;

         this.appendVerts(comp, _dataOffset, l, r, b, t);

         // colors
         let colorOffset = _dataOffset + this.colorOffset;
         for (let i = 0; i < 4; i++) {
             uintVerts[colorOffset] = this._getColor(comp, i);
             uintVerts[colorOffset + 1] = outlineColor;
             colorOffset += floatsPerVert;
         }

         _dataOffset += this.floatsPerVert * 4;
     }

     appendVerts (comp, offset, l, r, b, t) {
         let local = this._local;
         let floatsPerVert = this.floatsPerVert;

         local[offset] = l;
         local[offset + 1] = b;

         offset += floatsPerVert;
         local[offset] = r;
         local[offset + 1] = b;

         offset += floatsPerVert;
         local[offset] = l;
         local[offset + 1] = t;

         offset += floatsPerVert;
         local[offset] = r;
         local[offset + 1] = t;
     }

     updateWorldVerts (comp) {
         let node = comp.node;

         let matrix = node._worldMatrix;
         let matrixm = matrix.m,
             a = matrixm[0], b = matrixm[1], c = matrixm[4], d = matrixm[5],
             tx = matrixm[12], ty = matrixm[13];

         let local = this._local;
         let world = this._renderData.vDatas[0];
         let floatsPerVert = this.floatsPerVert;
         for (let offset = 0; offset < local.length; offset += floatsPerVert) {
             let x = local[offset];
             let y = local[offset + 1];
             world[offset] = x * a + y * c + tx;
             world[offset+1] = x * b + y * d + ty;
         }
     }
 }
