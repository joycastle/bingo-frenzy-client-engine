(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/extensions/dragonbones/CCTextureData.js';
    var __require = nodeEnv ? function (request) {
        return require(request);
    } : function (request) {
        return __quick_compile__.require(request, __filename);
    };
    function __define(exports, require, module) {
        if (!nodeEnv) {
            __quick_compile__.registerModule(__filename, module);
        }
                'use strict';
        dragonBones.CCTextureAtlasData = cc.Class({
            extends: dragonBones.TextureAtlasData,
            name: 'dragonBones.CCTextureAtlasData',
            properties: {
                _renderTexture: {
                    default: null,
                    serializable: false
                },
                renderTexture: {
                    get: function get() {
                        return this._renderTexture;
                    },
                    set: function set(value) {
                        this._renderTexture = value;
                        if (value) {
                            for (var k in this.textures) {
                                var textureData = this.textures[k];
                                if (!textureData.spriteFrame) {
                                    var rect = null;
                                    if (textureData.rotated) {
                                        rect = cc.rect(textureData.region.x, textureData.region.y, textureData.region.height, textureData.region.width);
                                    } else {
                                        rect = cc.rect(textureData.region.x, textureData.region.y, textureData.region.width, textureData.region.height);
                                    }
                                    var offset = cc.v2(0, 0);
                                    var size = cc.size(rect.width, rect.height);
                                    textureData.spriteFrame = new cc.SpriteFrame();
                                    textureData.spriteFrame.setTexture(value, rect, false, offset, size);
                                }
                            }
                        } else {
                            for (var _k in this.textures) {
                                var _textureData = this.textures[_k];
                                _textureData.spriteFrame = null;
                            }
                        }
                    }
                }
            },
            statics: {
                toString: function toString() {
                    return '[class dragonBones.CCTextureAtlasData]';
                }
            },
            _onClear: function _onClear() {
                dragonBones.TextureAtlasData.prototype._onClear.call(this);
                this.renderTexture = null;
            },
            createTexture: function createTexture() {
                return dragonBones.BaseObject.borrowObject(dragonBones.CCTextureData);
            }
        });
        dragonBones.CCTextureData = cc.Class({
            extends: dragonBones.TextureData,
            name: 'dragonBones.CCTextureData',
            properties: {
                spriteFrame: {
                    default: null,
                    serializable: false
                }
            },
            statics: {
                toString: function toString() {
                    return '[class dragonBones.CCTextureData]';
                }
            },
            _onClear: function _onClear() {
                dragonBones.TextureData.prototype._onClear.call(this);
                this.spriteFrame = null;
            }
        });
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDVGV4dHVyZURhdGEuanMiLCIvVXNlcnMvZ2FveWFuZy9Xb3JrU3BhY2Uvam95Y2FzdGxlL2JpbmdvL2NsaWVudC9iaW5nby9lbmdpbmUvZXh0ZW5zaW9ucy9kcmFnb25ib25lcy9DQ1RleHR1cmVEYXRhLmpzIl0sIm5hbWVzIjpbImRyYWdvbkJvbmVzIiwiQ0NUZXh0dXJlQXRsYXNEYXRhIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJUZXh0dXJlQXRsYXNEYXRhIiwibmFtZSIsInByb3BlcnRpZXMiLCJfcmVuZGVyVGV4dHVyZSIsImRlZmF1bHQiLCJzZXJpYWxpemFibGUiLCJyZW5kZXJUZXh0dXJlIiwiZ2V0Iiwic2V0IiwidmFsdWUiLCJrIiwidGV4dHVyZXMiLCJ0ZXh0dXJlRGF0YSIsInNwcml0ZUZyYW1lIiwicmVjdCIsInJvdGF0ZWQiLCJyZWdpb24iLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwib2Zmc2V0IiwidjIiLCJzaXplIiwiU3ByaXRlRnJhbWUiLCJzZXRUZXh0dXJlIiwic3RhdGljcyIsInRvU3RyaW5nIiwiX29uQ2xlYXIiLCJwcm90b3R5cGUiLCJjYWxsIiwiY3JlYXRlVGV4dHVyZSIsIkJhc2VPYmplY3QiLCJib3Jyb3dPYmplY3QiLCJDQ1RleHR1cmVEYXRhIiwiVGV4dHVyZURhdGEiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFBLE9BQUEsR0FBQSxPQUFBLE9BQUEsS0FBQSxXQUFBLElBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQTs7Ozs7Ozs7Ozs7OztRQXlCQUEsV0FBQUEsQ0FBWUMsa0JBQVpELEdBQWlDRSxFQUFBQSxDQUFHQyxLQUFIRCxDQUFTO0FBQUEsWUFDdENFLE9BQUFBLEVBQVNKLFdBQUFBLENBQVlLLGdCQURpQjtBQUFBLFlBRXRDQyxJQUFBQSxFQUFNLGdDQUZnQztBQUFBLFlBSXRDQyxVQUFBQSxFQUFZO0FBQUEsZ0JBQ1JDLGNBQUFBLEVBQWdCO0FBQUEsb0JBQ1pDLE9BQUFBLEVBQVMsSUFERztBQUFBLG9C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KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTYgQ2h1a29uZyBUZWNobm9sb2dpZXMgSW5jLlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5kcmFnb25Cb25lcy5DQ1RleHR1cmVBdGxhc0RhdGEgPSBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogZHJhZ29uQm9uZXMuVGV4dHVyZUF0bGFzRGF0YSxcbiAgICBuYW1lOiBcImRyYWdvbkJvbmVzLkNDVGV4dHVyZUF0bGFzRGF0YVwiLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfcmVuZGVyVGV4dHVyZToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICByZW5kZXJUZXh0dXJlOiB7XG4gICAgICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJUZXh0dXJlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJUZXh0dXJlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgaW4gdGhpcy50ZXh0dXJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHR1cmVEYXRhID0gdGhpcy50ZXh0dXJlc1trXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGV4dHVyZURhdGEuc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVjdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHR1cmVEYXRhLnJvdGF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjdCA9IGNjLnJlY3QodGV4dHVyZURhdGEucmVnaW9uLngsIHRleHR1cmVEYXRhLnJlZ2lvbi55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZURhdGEucmVnaW9uLmhlaWdodCwgdGV4dHVyZURhdGEucmVnaW9uLndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWN0ID0gY2MucmVjdCh0ZXh0dXJlRGF0YS5yZWdpb24ueCwgdGV4dHVyZURhdGEucmVnaW9uLnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlRGF0YS5yZWdpb24ud2lkdGgsIHRleHR1cmVEYXRhLnJlZ2lvbi5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gY2MudjIoMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNpemUgPSBjYy5zaXplKHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlRGF0YS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmVEYXRhLnNwcml0ZUZyYW1lLnNldFRleHR1cmUodmFsdWUsIHJlY3QsIGZhbHNlLCBvZmZzZXQsIHNpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLnRleHR1cmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZURhdGEgPSB0aGlzLnRleHR1cmVzW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZURhdGEuc3ByaXRlRnJhbWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJbY2xhc3MgZHJhZ29uQm9uZXMuQ0NUZXh0dXJlQXRsYXNEYXRhXVwiO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9vbkNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRyYWdvbkJvbmVzLlRleHR1cmVBdGxhc0RhdGEucHJvdG90eXBlLl9vbkNsZWFyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyVGV4dHVyZSA9IG51bGw7XG4gICAgfSxcblxuICAgIGNyZWF0ZVRleHR1cmUgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGRyYWdvbkJvbmVzLkJhc2VPYmplY3QuYm9ycm93T2JqZWN0KGRyYWdvbkJvbmVzLkNDVGV4dHVyZURhdGEpO1xuICAgIH1cblxuXG59KTtcblxuZHJhZ29uQm9uZXMuQ0NUZXh0dXJlRGF0YSA9IGNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBkcmFnb25Cb25lcy5UZXh0dXJlRGF0YSxcbiAgICBuYW1lOiBcImRyYWdvbkJvbmVzLkNDVGV4dHVyZURhdGFcIixcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3ByaXRlRnJhbWU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICBzZXJpYWxpemFibGU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHN0YXRpY3M6IHtcbiAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcIltjbGFzcyBkcmFnb25Cb25lcy5DQ1RleHR1cmVEYXRhXVwiO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9vbkNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRyYWdvbkJvbmVzLlRleHR1cmVEYXRhLnByb3RvdHlwZS5fb25DbGVhci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICB9XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxNiBDaHVrb25nIFRlY2hub2xvZ2llcyBJbmMuXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwOi8vd3d3LmNvY29zMmQteC5vcmdcblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmRyYWdvbkJvbmVzLkNDVGV4dHVyZUF0bGFzRGF0YSA9IGNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBkcmFnb25Cb25lcy5UZXh0dXJlQXRsYXNEYXRhLFxuICAgIG5hbWU6IFwiZHJhZ29uQm9uZXMuQ0NUZXh0dXJlQXRsYXNEYXRhXCIsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIF9yZW5kZXJUZXh0dXJlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgc2VyaWFsaXphYmxlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlbmRlclRleHR1cmU6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJUZXh0dXJlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyVGV4dHVyZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrIGluIHRoaXMudGV4dHVyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0dXJlRGF0YSA9IHRoaXMudGV4dHVyZXNba107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRleHR1cmVEYXRhLnNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlRGF0YS5yb3RhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY3QgPSBjYy5yZWN0KHRleHR1cmVEYXRhLnJlZ2lvbi54LCB0ZXh0dXJlRGF0YS5yZWdpb24ueSwgdGV4dHVyZURhdGEucmVnaW9uLmhlaWdodCwgdGV4dHVyZURhdGEucmVnaW9uLndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWN0ID0gY2MucmVjdCh0ZXh0dXJlRGF0YS5yZWdpb24ueCwgdGV4dHVyZURhdGEucmVnaW9uLnksIHRleHR1cmVEYXRhLnJlZ2lvbi53aWR0aCwgdGV4dHVyZURhdGEucmVnaW9uLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBjYy52MigwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2l6ZSA9IGNjLnNpemUocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmVEYXRhLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZURhdGEuc3ByaXRlRnJhbWUuc2V0VGV4dHVyZSh2YWx1ZSwgcmVjdCwgZmFsc2UsIG9mZnNldCwgc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfayBpbiB0aGlzLnRleHR1cmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3RleHR1cmVEYXRhID0gdGhpcy50ZXh0dXJlc1tfa107XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGV4dHVyZURhdGEuc3ByaXRlRnJhbWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXRpY3M6IHtcbiAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiW2NsYXNzIGRyYWdvbkJvbmVzLkNDVGV4dHVyZUF0bGFzRGF0YV1cIjtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfb25DbGVhcjogZnVuY3Rpb24gX29uQ2xlYXIoKSB7XG4gICAgICAgIGRyYWdvbkJvbmVzLlRleHR1cmVBdGxhc0RhdGEucHJvdG90eXBlLl9vbkNsZWFyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyVGV4dHVyZSA9IG51bGw7XG4gICAgfSxcblxuICAgIGNyZWF0ZVRleHR1cmU6IGZ1bmN0aW9uIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgICAgIHJldHVybiBkcmFnb25Cb25lcy5CYXNlT2JqZWN0LmJvcnJvd09iamVjdChkcmFnb25Cb25lcy5DQ1RleHR1cmVEYXRhKTtcbiAgICB9XG5cbn0pO1xuXG5kcmFnb25Cb25lcy5DQ1RleHR1cmVEYXRhID0gY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGRyYWdvbkJvbmVzLlRleHR1cmVEYXRhLFxuICAgIG5hbWU6IFwiZHJhZ29uQm9uZXMuQ0NUZXh0dXJlRGF0YVwiLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzcHJpdGVGcmFtZToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgICAgIHJldHVybiBcIltjbGFzcyBkcmFnb25Cb25lcy5DQ1RleHR1cmVEYXRhXVwiO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9vbkNsZWFyOiBmdW5jdGlvbiBfb25DbGVhcigpIHtcbiAgICAgICAgZHJhZ29uQm9uZXMuVGV4dHVyZURhdGEucHJvdG90eXBlLl9vbkNsZWFyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuc3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtORFZHVjRkSFZ5WlVSaGRHRXVhbk1pWFN3aWJtRnRaWE1pT2xzaVpISmhaMjl1UW05dVpYTWlMQ0pEUTFSbGVIUjFjbVZCZEd4aGMwUmhkR0VpTENKall5SXNJa05zWVhOeklpd2laWGgwWlc1a2N5SXNJbFJsZUhSMWNtVkJkR3hoYzBSaGRHRWlMQ0p1WVcxbElpd2ljSEp2Y0dWeWRHbGxjeUlzSWw5eVpXNWtaWEpVWlhoMGRYSmxJaXdpWkdWbVlYVnNkQ0lzSW5ObGNtbGhiR2w2WVdKc1pTSXNJbkpsYm1SbGNsUmxlSFIxY21VaUxDSm5aWFFpTENKelpYUWlMQ0oyWVd4MVpTSXNJbXNpTENKMFpYaDBkWEpsY3lJc0luUmxlSFIxY21WRVlYUmhJaXdpYzNCeWFYUmxSbkpoYldVaUxDSnlaV04wSWl3aWNtOTBZWFJsWkNJc0luSmxaMmx2YmlJc0luZ2lMQ0o1SWl3aWFHVnBaMmgwSWl3aWQybGtkR2dpTENKdlptWnpaWFFpTENKMk1pSXNJbk5wZW1VaUxDSlRjSEpwZEdWR2NtRnRaU0lzSW5ObGRGUmxlSFIxY21VaUxDSnpkR0YwYVdOeklpd2lkRzlUZEhKcGJtY2lMQ0pmYjI1RGJHVmhjaUlzSW5CeWIzUnZkSGx3WlNJc0ltTmhiR3dpTENKamNtVmhkR1ZVWlhoMGRYSmxJaXdpUW1GelpVOWlhbVZqZENJc0ltSnZjbkp2ZDA5aWFtVmpkQ0lzSWtORFZHVjRkSFZ5WlVSaGRHRWlMQ0pVWlhoMGRYSmxSR0YwWVNKZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFYbENRVUVzV1VGQldVTXNhMEpCUVZvc1IwRkJhVU5ETEVkQlFVZERMRXRCUVVnc1EwRkJVenRCUVVOMFEwTXNZVUZCVTBvc1dVRkJXVXNzWjBKQlJHbENPMEZCUlhSRFF5eFZRVUZOTEdkRFFVWm5RenM3UVVGSmRFTkRMR2RDUVVGWk8wRkJRMUpETEhkQ1FVRm5RanRCUVVOYVF5eHhRa0ZCVXl4SlFVUkhPMEZCUlZwRExEQkNRVUZqTzBGQlJrWXNVMEZFVWpzN1FVRk5Va01zZFVKQlFXVTdRVUZEV0VNc1pVRkVWeXhwUWtGRFNqdEJRVU5JTEhWQ1FVRlBMRXRCUVV0S0xHTkJRVm83UVVGRFNDeGhRVWhWTzBGQlNWaExMR1ZCU2xjc1pVRkpUa01zUzBGS1RTeEZRVWxETzBGQlExSXNjVUpCUVV0T0xHTkJRVXdzUjBGQmMwSk5MRXRCUVhSQ08wRkJRMEVzYjBKQlFVbEJMRXRCUVVvc1JVRkJWenRCUVVOUUxIbENRVUZMTEVsQlFVbERMRU5CUVZRc1NVRkJZeXhMUVVGTFF5eFJRVUZ1UWl4RlFVRTJRanRCUVVONlFpdzBRa0ZCU1VNc1kwRkJZeXhMUVVGTFJDeFJRVUZNTEVOQlFXTkVMRU5CUVdRc1EwRkJiRUk3UVVGRFFTdzBRa0ZCU1N4RFFVRkRSU3haUVVGWlF5eFhRVUZxUWl4RlFVRTRRanRCUVVNeFFpeG5RMEZCU1VNc1QwRkJUeXhKUVVGWU8wRkJRMEVzWjBOQlFVbEdMRmxCUVZsSExFOUJRV2hDTEVWQlFYbENPMEZCUTNKQ1JDeDFRMEZCVDJwQ0xFZEJRVWRwUWl4SlFVRklMRU5CUVZGR0xGbEJRVmxKTEUxQlFWb3NRMEZCYlVKRExFTkJRVE5DTEVWQlFUaENUQ3haUVVGWlNTeE5RVUZhTEVOQlFXMUNSU3hEUVVGcVJDeEZRVU5JVGl4WlFVRlpTU3hOUVVGYUxFTkJRVzFDUnl4TlFVUm9RaXhGUVVOM1FsQXNXVUZCV1Vrc1RVRkJXaXhEUVVGdFFra3NTMEZFTTBNc1EwRkJVRHRCUVVWSUxEWkNRVWhFTEUxQlIwODdRVUZEU0U0c2RVTkJRVTlxUWl4SFFVRkhhVUlzU1VGQlNDeERRVUZSUml4WlFVRlpTU3hOUVVGYUxFTkJRVzFDUXl4RFFVRXpRaXhGUVVFNFFrd3NXVUZCV1Vrc1RVRkJXaXhEUVVGdFFrVXNRMEZCYWtRc1JVRkRTRTRzV1VGQldVa3NUVUZCV2l4RFFVRnRRa2tzUzBGRWFFSXNSVUZEZFVKU0xGbEJRVmxKTEUxQlFWb3NRMEZCYlVKSExFMUJSREZETEVOQlFWQTdRVUZGU0R0QlFVTkVMR2REUVVGSlJTeFRRVUZUZUVJc1IwRkJSM2xDTEVWQlFVZ3NRMEZCVFN4RFFVRk9MRVZCUVZNc1EwRkJWQ3hEUVVGaU8wRkJRMEVzWjBOQlFVbERMRTlCUVU4eFFpeEhRVUZITUVJc1NVRkJTQ3hEUVVGUlZDeExRVUZMVFN4TFFVRmlMRVZCUVc5Q1RpeExRVUZMU3l4TlFVRjZRaXhEUVVGWU8wRkJRMEZRTEhkRFFVRlpReXhYUVVGYUxFZEJRVEJDTEVsQlFVbG9RaXhIUVVGSE1rSXNWMEZCVUN4RlFVRXhRanRCUVVOQldpeDNRMEZCV1VNc1YwRkJXaXhEUVVGM1Fsa3NWVUZCZUVJc1EwRkJiVU5vUWl4TFFVRnVReXhGUVVFd1Ewc3NTVUZCTVVNc1JVRkJaMFFzUzBGQmFFUXNSVUZCZFVSUExFMUJRWFpFTEVWQlFTdEVSU3hKUVVFdlJEdEJRVU5JTzBGQlEwbzdRVUZEU2l4cFFrRnNRa1FzVFVGclFrODdRVUZEU0N4NVFrRkJTeXhKUVVGSllpeEZRVUZVTEVsQlFXTXNTMEZCUzBNc1VVRkJia0lzUlVGQk5rSTdRVUZEZWtJc05FSkJRVWxETEdWQlFXTXNTMEZCUzBRc1VVRkJUQ3hEUVVGalJDeEZRVUZrTEVOQlFXeENPMEZCUTBGRkxIRkRRVUZaUXl4WFFVRmFMRWRCUVRCQ0xFbEJRVEZDTzBGQlEwZzdRVUZEU2p0QlFVVktPMEZCTDBKVk8wRkJUbEFzUzBGS01FSTdPMEZCTmtOMFEyRXNZVUZCVXp0QlFVTk1ReXhyUWtGQlZTeHZRa0ZCV1R0QlFVTnNRaXh0UWtGQlR5eDNRMEZCVUR0QlFVTklPMEZCU0Vrc1MwRTNRelpDT3p0QlFXMUVkRU5ETEdOQlFWVXNiMEpCUVZrN1FVRkRiRUpxUXl4dlFrRkJXVXNzWjBKQlFWb3NRMEZCTmtJMlFpeFRRVUUzUWl4RFFVRjFRMFFzVVVGQmRrTXNRMEZCWjBSRkxFbEJRV2hFTEVOQlFYRkVMRWxCUVhKRU8wRkJRMEVzWVVGQlMzaENMR0ZCUVV3c1IwRkJjVUlzU1VGQmNrSTdRVUZEU0N4TFFYUkVjVU03TzBGQmQwUjBRM2xDTEcxQ1FVRm5RaXg1UWtGQlZ6dEJRVU4yUWl4bFFVRlBjRU1zV1VGQldYRkRMRlZCUVZvc1EwRkJkVUpETEZsQlFYWkNMRU5CUVc5RGRFTXNXVUZCV1hWRExHRkJRV2hFTEVOQlFWQTdRVUZEU0RzN1FVRXhSSEZETEVOQlFWUXNRMEZCYWtNN08wRkJLMFJCZGtNc1dVRkJXWFZETEdGQlFWb3NSMEZCTkVKeVF5eEhRVUZIUXl4TFFVRklMRU5CUVZNN1FVRkRha05ETEdGQlFWTktMRmxCUVZsM1F5eFhRVVJaTzBGQlJXcERiRU1zVlVGQlRTd3lRa0ZHTWtJN08wRkJTV3BEUXl4blFrRkJXVHRCUVVOU1Z5eHhRa0ZCWVR0QlFVTlVWQ3h4UWtGQlV5eEpRVVJCTzBGQlJWUkRMREJDUVVGak8wRkJSa3c3UVVGRVRDeExRVXB4UWpzN1FVRlhha054UWl4aFFVRlRPMEZCUTB4RExHdENRVUZWTEc5Q1FVRlpPMEZCUTJ4Q0xHMUNRVUZQTEcxRFFVRlFPMEZCUTBnN1FVRklTU3hMUVZoM1FqczdRVUZwUW1wRFF5eGpRVUZWTEc5Q1FVRlpPMEZCUTJ4Q2FrTXNiMEpCUVZsM1F5eFhRVUZhTEVOQlFYZENUaXhUUVVGNFFpeERRVUZyUTBRc1VVRkJiRU1zUTBGQk1rTkZMRWxCUVRORExFTkJRV2RFTEVsQlFXaEVPMEZCUTBFc1lVRkJTMnBDTEZkQlFVd3NSMEZCYlVJc1NVRkJia0k3UVVGRFNEdEJRWEJDWjBNc1EwRkJWQ3hEUVVFMVFpSXNJbVpwYkdVaU9pSkRRMVJsZUhSMWNtVkVZWFJoTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQkRiM0I1Y21sbmFIUWdLR01wSURJd01UWWdRMmgxYTI5dVp5QlVaV05vYm05c2IyZHBaWE1nU1c1akxseHVJRU52Y0hseWFXZG9kQ0FvWXlrZ01qQXhOeTB5TURFNElGaHBZVzFsYmlCWllXcHBJRk52Wm5SM1lYSmxJRU52TGl3Z1RIUmtMbHh1WEc0Z2FIUjBjRG92TDNkM2R5NWpiMk52Y3pKa0xYZ3ViM0puWEc1Y2JpQlFaWEp0YVhOemFXOXVJR2x6SUdobGNtVmllU0JuY21GdWRHVmtMQ0JtY21WbElHOW1JR05vWVhKblpTd2dkRzhnWVc1NUlIQmxjbk52YmlCdlluUmhhVzVwYm1jZ1lTQmpiM0I1WEc0Z2IyWWdkR2hwY3lCemIyWjBkMkZ5WlNCaGJtUWdZWE56YjJOcFlYUmxaQ0JrYjJOMWJXVnVkR0YwYVc5dUlHWnBiR1Z6SUNoMGFHVWdYQ0pUYjJaMGQyRnlaVndpS1N3Z2RHOGdaR1ZoYkZ4dUlHbHVJSFJvWlNCVGIyWjBkMkZ5WlNCM2FYUm9iM1YwSUhKbGMzUnlhV04wYVc5dUxDQnBibU5zZFdScGJtY2dkMmwwYUc5MWRDQnNhVzFwZEdGMGFXOXVJSFJvWlNCeWFXZG9kSE5jYmlCMGJ5QjFjMlVzSUdOdmNIa3NJRzF2WkdsbWVTd2diV1Z5WjJVc0lIQjFZbXhwYzJnc0lHUnBjM1J5YVdKMWRHVXNJSE4xWW14cFkyVnVjMlVzSUdGdVpDOXZjaUJ6Wld4c1hHNGdZMjl3YVdWeklHOW1JSFJvWlNCVGIyWjBkMkZ5WlN3Z1lXNWtJSFJ2SUhCbGNtMXBkQ0J3WlhKemIyNXpJSFJ2SUhkb2IyMGdkR2hsSUZOdlpuUjNZWEpsSUdselhHNGdablZ5Ym1semFHVmtJSFJ2SUdSdklITnZMQ0J6ZFdKcVpXTjBJSFJ2SUhSb1pTQm1iMnhzYjNkcGJtY2dZMjl1WkdsMGFXOXVjenBjYmx4dUlGUm9aU0JoWW05MlpTQmpiM0I1Y21sbmFIUWdibTkwYVdObElHRnVaQ0IwYUdseklIQmxjbTFwYzNOcGIyNGdibTkwYVdObElITm9ZV3hzSUdKbElHbHVZMngxWkdWa0lHbHVYRzRnWVd4c0lHTnZjR2xsY3lCdmNpQnpkV0p6ZEdGdWRHbGhiQ0J3YjNKMGFXOXVjeUJ2WmlCMGFHVWdVMjltZEhkaGNtVXVYRzVjYmlCVVNFVWdVMDlHVkZkQlVrVWdTVk1nVUZKUFZrbEVSVVFnWENKQlV5QkpVMXdpTENCWFNWUklUMVZVSUZkQlVsSkJUbFJaSUU5R0lFRk9XU0JMU1U1RUxDQkZXRkJTUlZOVElFOVNYRzRnU1UxUVRFbEZSQ3dnU1U1RFRGVkVTVTVISUVKVlZDQk9UMVFnVEVsTlNWUkZSQ0JVVHlCVVNFVWdWMEZTVWtGT1ZFbEZVeUJQUmlCTlJWSkRTRUZPVkVGQ1NVeEpWRmtzWEc0Z1JrbFVUa1ZUVXlCR1QxSWdRU0JRUVZKVVNVTlZURUZTSUZCVlVsQlBVMFVnUVU1RUlFNVBUa2xPUmxKSlRrZEZUVVZPVkM0Z1NVNGdUazhnUlZaRlRsUWdVMGhCVEV3Z1ZFaEZYRzRnUVZWVVNFOVNVeUJQVWlCRFQxQlpVa2xIU0ZRZ1NFOU1SRVZTVXlCQ1JTQk1TVUZDVEVVZ1JrOVNJRUZPV1NCRFRFRkpUU3dnUkVGTlFVZEZVeUJQVWlCUFZFaEZVbHh1SUV4SlFVSkpURWxVV1N3Z1YwaEZWRWhGVWlCSlRpQkJUaUJCUTFSSlQwNGdUMFlnUTA5T1ZGSkJRMVFzSUZSUFVsUWdUMUlnVDFSSVJWSlhTVk5GTENCQlVrbFRTVTVISUVaU1QwMHNYRzRnVDFWVUlFOUdJRTlTSUVsT0lFTlBUazVGUTFSSlQwNGdWMGxVU0NCVVNFVWdVMDlHVkZkQlVrVWdUMUlnVkVoRklGVlRSU0JQVWlCUFZFaEZVaUJFUlVGTVNVNUhVeUJKVGx4dUlGUklSU0JUVDBaVVYwRlNSUzVjYmlBcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FMMXh1WEc1a2NtRm5iMjVDYjI1bGN5NURRMVJsZUhSMWNtVkJkR3hoYzBSaGRHRWdQU0JqWXk1RGJHRnpjeWg3WEc0Z0lDQWdaWGgwWlc1a2N6b2daSEpoWjI5dVFtOXVaWE11VkdWNGRIVnlaVUYwYkdGelJHRjBZU3hjYmlBZ0lDQnVZVzFsT2lCY0ltUnlZV2R2YmtKdmJtVnpMa05EVkdWNGRIVnlaVUYwYkdGelJHRjBZVndpTEZ4dVhHNGdJQ0FnY0hKdmNHVnlkR2xsY3pvZ2UxeHVJQ0FnSUNBZ0lDQmZjbVZ1WkdWeVZHVjRkSFZ5WlRvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWkdWbVlYVnNkRG9nYm5Wc2JDeGNiaUFnSUNBZ0lDQWdJQ0FnSUhObGNtbGhiR2w2WVdKc1pUb2dabUZzYzJWY2JpQWdJQ0FnSUNBZ2ZTeGNibHh1SUNBZ0lDQWdJQ0J5Wlc1a1pYSlVaWGgwZFhKbE9pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCblpYUWdLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxsOXlaVzVrWlhKVVpYaDBkWEpsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lITmxkQ0FvZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOXlaVzVrWlhKVVpYaDBkWEpsSUQwZ2RtRnNkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3NnYVc0Z2RHaHBjeTUwWlhoMGRYSmxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElIUmxlSFIxY21WRVlYUmhJRDBnZEdocGN5NTBaWGgwZFhKbGMxdHJYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaGRHVjRkSFZ5WlVSaGRHRXVjM0J5YVhSbFJuSmhiV1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnY21WamRDQTlJRzUxYkd3N1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSbGVIUjFjbVZFWVhSaExuSnZkR0YwWldRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVmpkQ0E5SUdOakxuSmxZM1FvZEdWNGRIVnlaVVJoZEdFdWNtVm5hVzl1TG5nc0lIUmxlSFIxY21WRVlYUmhMbkpsWjJsdmJpNTVMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdWNGRIVnlaVVJoZEdFdWNtVm5hVzl1TG1obGFXZG9kQ3dnZEdWNGRIVnlaVVJoZEdFdWNtVm5hVzl1TG5kcFpIUm9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WldOMElEMGdZMk11Y21WamRDaDBaWGgwZFhKbFJHRjBZUzV5WldkcGIyNHVlQ3dnZEdWNGRIVnlaVVJoZEdFdWNtVm5hVzl1TG5rc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBaWGgwZFhKbFJHRjBZUzV5WldkcGIyNHVkMmxrZEdnc0lIUmxlSFIxY21WRVlYUmhMbkpsWjJsdmJpNW9aV2xuYUhRcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdiMlptYzJWMElEMGdZMk11ZGpJb01Dd2dNQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSE5wZW1VZ1BTQmpZeTV6YVhwbEtISmxZM1F1ZDJsa2RHZ3NJSEpsWTNRdWFHVnBaMmgwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBaWGgwZFhKbFJHRjBZUzV6Y0hKcGRHVkdjbUZ0WlNBOUlHNWxkeUJqWXk1VGNISnBkR1ZHY21GdFpTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSbGVIUjFjbVZFWVhSaExuTndjbWwwWlVaeVlXMWxMbk5sZEZSbGVIUjFjbVVvZG1Gc2RXVXNJSEpsWTNRc0lHWmhiSE5sTENCdlptWnpaWFFzSUhOcGVtVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoc1pYUWdheUJwYmlCMGFHbHpMblJsZUhSMWNtVnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2RHVjRkSFZ5WlVSaGRHRWdQU0IwYUdsekxuUmxlSFIxY21WelcydGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR1Y0ZEhWeVpVUmhkR0V1YzNCeWFYUmxSbkpoYldVZ1BTQnVkV3hzTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzVjYmlBZ0lDQnpkR0YwYVdOek9pQjdYRzRnSUNBZ0lDQWdJSFJ2VTNSeWFXNW5PaUJtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdYQ0piWTJ4aGMzTWdaSEpoWjI5dVFtOXVaWE11UTBOVVpYaDBkWEpsUVhSc1lYTkVZWFJoWFZ3aU8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lGOXZia05zWldGeU9pQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUdSeVlXZHZia0p2Ym1WekxsUmxlSFIxY21WQmRHeGhjMFJoZEdFdWNISnZkRzkwZVhCbExsOXZia05zWldGeUxtTmhiR3dvZEdocGN5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNtVnVaR1Z5VkdWNGRIVnlaU0E5SUc1MWJHdzdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lHTnlaV0YwWlZSbGVIUjFjbVVnT2lCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHUnlZV2R2YmtKdmJtVnpMa0poYzJWUFltcGxZM1F1WW05eWNtOTNUMkpxWldOMEtHUnlZV2R2YmtKdmJtVnpMa05EVkdWNGRIVnlaVVJoZEdFcE8xeHVJQ0FnSUgxY2JseHVYRzU5S1R0Y2JseHVaSEpoWjI5dVFtOXVaWE11UTBOVVpYaDBkWEpsUkdGMFlTQTlJR05qTGtOc1lYTnpLSHRjYmlBZ0lDQmxlSFJsYm1Sek9pQmtjbUZuYjI1Q2IyNWxjeTVVWlhoMGRYSmxSR0YwWVN4Y2JpQWdJQ0J1WVcxbE9pQmNJbVJ5WVdkdmJrSnZibVZ6TGtORFZHVjRkSFZ5WlVSaGRHRmNJaXhjYmx4dUlDQWdJSEJ5YjNCbGNuUnBaWE02SUh0Y2JpQWdJQ0FnSUNBZ2MzQnlhWFJsUm5KaGJXVTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxabUYxYkhRNklHNTFiR3dzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpaWEpwWVd4cGVtRmliR1U2SUdaaGJITmxYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdmU3hjYmx4dUlDQWdJSE4wWVhScFkzTTZJSHRjYmlBZ0lDQWdJQ0FnZEc5VGRISnBibWM2SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJjSWx0amJHRnpjeUJrY21GbmIyNUNiMjVsY3k1RFExUmxlSFIxY21WRVlYUmhYVndpTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlN4Y2JseHVJQ0FnSUY5dmJrTnNaV0Z5T2lCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJR1J5WVdkdmJrSnZibVZ6TGxSbGVIUjFjbVZFWVhSaExuQnliM1J2ZEhsd1pTNWZiMjVEYkdWaGNpNWpZV3hzS0hSb2FYTXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTndjbWwwWlVaeVlXMWxJRDBnYm5Wc2JEdGNiaUFnSUNCOVhHNTlLVHRjYmlKZGZRPT0iXX0=