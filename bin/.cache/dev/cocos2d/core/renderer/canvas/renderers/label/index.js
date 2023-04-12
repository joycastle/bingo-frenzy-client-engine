(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/canvas/renderers/label/index.js';
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
        var _assembler = require('../../../assembler');
        var _assembler2 = _interopRequireDefault(_assembler);
        var _CCLabel = require('../../../../components/CCLabel');
        var _CCLabel2 = _interopRequireDefault(_CCLabel);
        var _ttf = require('./ttf');
        var _ttf2 = _interopRequireDefault(_ttf);
        var _bmfont = require('./bmfont');
        var _bmfont2 = _interopRequireDefault(_bmfont);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        var canvasPool = {
            pool: [],
            get: function get() {
                var data = this.pool.pop();
                if (!data) {
                    var canvas = document.createElement('canvas');
                    var context = canvas.getContext('2d');
                    data = {
                        canvas: canvas,
                        context: context
                    };
                }
                return data;
            },
            put: function put(canvas) {
                if (this.pool.length >= 32) {
                    return;
                }
                this.pool.push(canvas);
            }
        };
        _CCLabel2.default._canvasPool = canvasPool;
        _assembler2.default.register(_CCLabel2.default, {
            getConstructor: function getConstructor(label) {
                var ctor = _ttf2.default;
                if (label.font instanceof cc.BitmapFont) {
                    ctor = _bmfont2.default;
                } else if (label.cacheMode === _CCLabel2.default.CacheMode.CHAR) {
                    cc.warn('sorry, canvas mode does not support CHAR mode currently!');
                }
                return ctor;
            },
            TTF: _ttf2.default,
            Bmfont: _bmfont2.default
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiL1VzZXJzL2dhb3lhbmcvV29ya1NwYWNlL2pveWNhc3RsZS9iaW5nby9jbGllbnQvYmluZ28vZW5naW5lL2NvY29zMmQvY29yZS9yZW5kZXJlci9jYW52YXMvcmVuZGVyZXJzL2xhYmVsL2luZGV4LmpzIl0sIm5hbWVzIjpbImNhbnZhc1Bvb2wiLCJwb29sIiwiZ2V0IiwiZGF0YSIsInBvcCIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwicHV0IiwibGVuZ3RoIiwicHVzaCIsIkxhYmVsIiwiX2NhbnZhc1Bvb2wiLCJBc3NlbWJsZXIiLCJyZWdpc3RlciIsImdldENvbnN0cnVjdG9yIiwibGFiZWwiLCJjdG9yIiwiVFRGIiwiZm9udCIsImNjIiwiQml0bWFwRm9udCIsIkJtZm9udCIsImNhY2hlTW9kZSIsIkNhY2hlTW9kZSIsIkNIQVIiLCJ3YXJuIl0sIm1hcHBpbmdzIjoiO0lBeUJBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxXQUFBOzs7O1FBQ0EsT0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBOzs7O0lBQ0EsU0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUE7QUFBQTs7U0FBQTtBQUFBO1FBRkEsSUFBQSxVQUFBLEdBQUEsT0FBQSxDQUFBLG9CQUFBLENBQUE7O1FBQ0EsSUFBQSxRQUFBLEdBQUEsT0FBQSxDQUFBLGdDQUFBLENBQUE7O1FBQ0EsSUFBQSxJQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQTs7UUFDQSxJQUFBLE9BQUEsR0FBQSxPQUFBLENBQUEsVUFBQSxDQUFBOzs7OztRQUVBLElBQUlBLFVBQUFBLEdBQWE7QUFBQSxZQUNiQyxJQUFBQSxFQUFNLEVBRE87QUFBQSxZQUViQyxHQUFBQSxFQUZhLFNBQUEsR0FBQSxHQUVOO0FBQUEsZ0JBQ0gsSUFBSUMsSUFBQUEsR0FBTyxLQUFLRixJQUFMLENBQVVHLEdBQVYsRUFBWCxDQURHO0FBQUEsZ0JBR0gsSUFBSSxDQUFDRCxJQUFMLEVBQVc7QUFBQSxvQkFDUCxJQUFJRSxNQUFBQSxHQUFTQyxRQUFBQSxDQUFTQyxhQUFURCxDQUF1QixRQUF2QkEsQ0FBYixDQURPO0FBQUEsb0JBRVAsSUFBSUUsT0FBQUEsR0FBVUgsTUFBQUEsQ0FBT0ksVUFBUEosQ0FBa0IsSUFBbEJBLENBQWQsQ0FGTztBQUFBLG9CQUdQRixJQUFBQSxHQUFPO0FBQUEsd0JBQ0hFLE1BQUFBLEVBQVFBLE1BREw7QUFBQSx3QkFFSEcsT0FBQUEsRUFBU0EsT0FGTjtBQUFBLHFCQUFQTCxDQUhPO0FBQUEsaUJBSFI7QUFBQSxnQkFZSCxPQUFPQSxJQUFQLENBWkc7QUFBQSxhQUZNO0FBQUEsWUFnQmJPLEdBQUFBLEVBaEJhLFNBQUEsR0FBQSxDQWdCUkwsTUFoQlEsRUFnQkE7QUFBQSxnQkFDVCxJQUFJLEtBQUtKLElBQUwsQ0FBVVUsTUFBVixJQUFvQixFQUF4QixFQUE0QjtBQUFBLG9CQUN4QixPQUR3QjtBQUFBLGlCQURuQjtBQUFBLGdCQUlULEtBQUtWLElBQUwsQ0FBVVcsSUFBVixDQUFlUCxNQUFmLEVBSlM7QUFBQSxhQWhCQTtBQUFBLFNBQWpCO1FBd0JBUSxTQUFBQSxDQUFBQSxPQUFBQSxDQUFNQyxXQUFORCxHQUFvQmIsVUFBcEJhO1FBR0FFLFdBQUFBLENBQUFBLE9BQUFBLENBQVVDLFFBQVZELENBQW1CRixTQUFBQSxDQUFBQSxPQUFuQkUsRUFBMEI7QUFBQSxZQUN0QkUsY0FBQUEsRUFEc0IsU0FBQSxjQUFBLENBQ1BDLEtBRE8sRUFDQTtBQUFBLGdCQUNsQixJQUFJQyxJQUFBQSxHQUFPQyxLQUFBQSxDQUFBQSxPQUFYLENBRGtCO0FBQUEsZ0JBR2xCLElBQUlGLEtBQUFBLENBQU1HLElBQU5ILFlBQXNCSSxFQUFBQSxDQUFHQyxVQUE3QixFQUF5QztBQUFBLG9CQUNyQ0osSUFBQUEsR0FBT0ssUUFBQUEsQ0FBQUEsT0FBUEwsQ0FEcUM7QUFBQSxpQkFBekMsTUFFTyxJQUFJRCxLQUFBQSxDQUFNTyxTQUFOUCxLQUFvQkwsU0FBQUEsQ0FBQUEsT0FBQUEsQ0FBTWEsU0FBTmIsQ0FBZ0JjLElBQXhDLEVBQThDO0FBQUEsb0JBQ2pETCxFQUFBQSxDQUFHTSxJQUFITixDQUFRLDBEQUFSQSxFQURpRDtBQUFBLGlCQUxuQztBQUFBLGdCQVNsQixPQUFPSCxJQUFQLENBVGtCO0FBQUEsYUFEQTtBQUFBLFlBYXRCQyxHQUFBQSxFQUFBQSxLQUFBQSxDQUFBQSxPQWJzQjtBQUFBLFlBY3RCSSxNQUFBQSxFQUFBQSxRQUFBQSxDQUFBQSxPQWRzQjtBQUFBLFNBQTFCVCxFQTlCQTtBQUFBOztRQUNBLFFBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxRQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmltcG9ydCBBc3NlbWJsZXIgZnJvbSAnLi4vLi4vLi4vYXNzZW1ibGVyJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0NDTGFiZWwnO1xuaW1wb3J0IFRURiBmcm9tICcuL3R0Zic7XG5pbXBvcnQgQm1mb250IGZyb20gJy4vYm1mb250JztcblxubGV0IGNhbnZhc1Bvb2wgPSB7XG4gICAgcG9vbDogW10sXG4gICAgZ2V0ICgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnBvb2wucG9wKCk7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgY2FudmFzOiBjYW52YXMsXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSxcbiAgICBwdXQgKGNhbnZhcykge1xuICAgICAgICBpZiAodGhpcy5wb29sLmxlbmd0aCA+PSAzMikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9vbC5wdXNoKGNhbnZhcyk7XG4gICAgfVxufTtcblxuTGFiZWwuX2NhbnZhc1Bvb2wgPSBjYW52YXNQb29sO1xuXG5cbkFzc2VtYmxlci5yZWdpc3RlcihMYWJlbCwge1xuICAgIGdldENvbnN0cnVjdG9yKGxhYmVsKSB7XG4gICAgICAgIGxldCBjdG9yID0gVFRGO1xuICAgICAgICBcbiAgICAgICAgaWYgKGxhYmVsLmZvbnQgaW5zdGFuY2VvZiBjYy5CaXRtYXBGb250KSB7XG4gICAgICAgICAgICBjdG9yID0gQm1mb250O1xuICAgICAgICB9IGVsc2UgaWYgKGxhYmVsLmNhY2hlTW9kZSA9PT0gTGFiZWwuQ2FjaGVNb2RlLkNIQVIpIHtcbiAgICAgICAgICAgIGNjLndhcm4oJ3NvcnJ5LCBjYW52YXMgbW9kZSBkb2VzIG5vdCBzdXBwb3J0IENIQVIgbW9kZSBjdXJyZW50bHkhJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3RvcjtcbiAgICB9LFxuXG4gICAgVFRGLFxuICAgIEJtZm9udFxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2VtYmxlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2VtYmxlcicpO1xuXG52YXIgX2Fzc2VtYmxlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlbWJsZXIpO1xuXG52YXIgX0NDTGFiZWwgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0NDTGFiZWwnKTtcblxudmFyIF9DQ0xhYmVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NDTGFiZWwpO1xuXG52YXIgX3R0ZiA9IHJlcXVpcmUoJy4vdHRmJyk7XG5cbnZhciBfdHRmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R0Zik7XG5cbnZhciBfYm1mb250ID0gcmVxdWlyZSgnLi9ibWZvbnQnKTtcblxudmFyIF9ibWZvbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYm1mb250KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciBjYW52YXNQb29sID0ge1xuICAgIHBvb2w6IFtdLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMucG9vbC5wb3AoKTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBjYW52YXM6IGNhbnZhcyxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSxcbiAgICBwdXQ6IGZ1bmN0aW9uIHB1dChjYW52YXMpIHtcbiAgICAgICAgaWYgKHRoaXMucG9vbC5sZW5ndGggPj0gMzIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvb2wucHVzaChjYW52YXMpO1xuICAgIH1cbn07XG5cbl9DQ0xhYmVsMi5kZWZhdWx0Ll9jYW52YXNQb29sID0gY2FudmFzUG9vbDtcblxuX2Fzc2VtYmxlcjIuZGVmYXVsdC5yZWdpc3RlcihfQ0NMYWJlbDIuZGVmYXVsdCwge1xuICAgIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbiBnZXRDb25zdHJ1Y3RvcihsYWJlbCkge1xuICAgICAgICB2YXIgY3RvciA9IF90dGYyLmRlZmF1bHQ7XG5cbiAgICAgICAgaWYgKGxhYmVsLmZvbnQgaW5zdGFuY2VvZiBjYy5CaXRtYXBGb250KSB7XG4gICAgICAgICAgICBjdG9yID0gX2JtZm9udDIuZGVmYXVsdDtcbiAgICAgICAgfSBlbHNlIGlmIChsYWJlbC5jYWNoZU1vZGUgPT09IF9DQ0xhYmVsMi5kZWZhdWx0LkNhY2hlTW9kZS5DSEFSKSB7XG4gICAgICAgICAgICBjYy53YXJuKCdzb3JyeSwgY2FudmFzIG1vZGUgZG9lcyBub3Qgc3VwcG9ydCBDSEFSIG1vZGUgY3VycmVudGx5IScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGN0b3I7XG4gICAgfSxcblxuXG4gICAgVFRGOiBfdHRmMi5kZWZhdWx0LFxuICAgIEJtZm9udDogX2JtZm9udDIuZGVmYXVsdFxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSW1OaGJuWmhjMUJ2YjJ3aUxDSndiMjlzSWl3aVoyVjBJaXdpWkdGMFlTSXNJbkJ2Y0NJc0ltTmhiblpoY3lJc0ltUnZZM1Z0Wlc1MElpd2lZM0psWVhSbFJXeGxiV1Z1ZENJc0ltTnZiblJsZUhRaUxDSm5aWFJEYjI1MFpYaDBJaXdpY0hWMElpd2liR1Z1WjNSb0lpd2ljSFZ6YUNJc0lreGhZbVZzSWl3aVgyTmhiblpoYzFCdmIyd2lMQ0pCYzNObGJXSnNaWElpTENKeVpXZHBjM1JsY2lJc0ltZGxkRU52Ym5OMGNuVmpkRzl5SWl3aWJHRmlaV3dpTENKamRHOXlJaXdpVkZSR0lpd2labTl1ZENJc0ltTmpJaXdpUW1sMGJXRndSbTl1ZENJc0lrSnRabTl1ZENJc0ltTmhZMmhsVFc5a1pTSXNJa05oWTJobFRXOWtaU0lzSWtOSVFWSWlMQ0ozWVhKdUlsMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFYbENRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenM3TzBGQk5VSkJPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJPRUpCTEVsQlFVbEJMR0ZCUVdFN1FVRkRZa01zVlVGQlRTeEZRVVJQTzBGQlJXSkRMRTlCUm1Fc2FVSkJSVTQ3UVVGRFNDeFpRVUZKUXl4UFFVRlBMRXRCUVV0R0xFbEJRVXdzUTBGQlZVY3NSMEZCVml4RlFVRllPenRCUVVWQkxGbEJRVWtzUTBGQlEwUXNTVUZCVEN4RlFVRlhPMEZCUTFBc1owSkJRVWxGTEZOQlFWTkRMRk5CUVZORExHRkJRVlFzUTBGQmRVSXNVVUZCZGtJc1EwRkJZanRCUVVOQkxHZENRVUZKUXl4VlFVRlZTQ3hQUVVGUFNTeFZRVUZRTEVOQlFXdENMRWxCUVd4Q0xFTkJRV1E3UVVGRFFVNHNiVUpCUVU4N1FVRkRTRVVzZDBKQlFWRkJMRTFCUkV3N1FVRkZTRWNzZVVKQlFWTkJPMEZCUms0c1lVRkJVRHRCUVVsSU96dEJRVVZFTEdWQlFVOU1MRWxCUVZBN1FVRkRTQ3hMUVdaWk8wRkJaMEppVHl4UFFXaENZU3hsUVdkQ1Vrd3NUVUZvUWxFc1JVRm5Ra0U3UVVGRFZDeFpRVUZKTEV0QlFVdEtMRWxCUVV3c1EwRkJWVlVzVFVGQlZpeEpRVUZ2UWl4RlFVRjRRaXhGUVVFMFFqdEJRVU40UWp0QlFVTklPMEZCUTBRc1lVRkJTMVlzU1VGQlRDeERRVUZWVnl4SlFVRldMRU5CUVdWUUxFMUJRV1k3UVVGRFNEdEJRWEpDV1N4RFFVRnFRanM3UVVGM1FrRlJMR3RDUVVGTlF5eFhRVUZPTEVkQlFXOUNaQ3hWUVVGd1FqczdRVUZIUVdVc2IwSkJRVlZETEZGQlFWWXNRMEZCYlVKSUxHbENRVUZ1UWl4RlFVRXdRanRCUVVOMFFra3NhMEpCUkhOQ0xEQkNRVU5RUXl4TFFVUlBMRVZCUTBFN1FVRkRiRUlzV1VGQlNVTXNUMEZCVDBNc1lVRkJXRHM3UVVGRlFTeFpRVUZKUml4TlFVRk5SeXhKUVVGT0xGbEJRWE5DUXl4SFFVRkhReXhWUVVFM1FpeEZRVUY1UXp0QlFVTnlRMG9zYlVKQlFVOUxMR2RDUVVGUU8wRkJRMGdzVTBGR1JDeE5RVVZQTEVsQlFVbE9MRTFCUVUxUExGTkJRVTRzUzBGQmIwSmFMR3RDUVVGTllTeFRRVUZPTEVOQlFXZENReXhKUVVGNFF5eEZRVUU0UXp0QlFVTnFSRXdzWlVGQlIwMHNTVUZCU0N4RFFVRlJMREJFUVVGU08wRkJRMGc3TzBGQlJVUXNaVUZCVDFRc1NVRkJVRHRCUVVOSUxFdEJXSEZDT3pzN1FVRmhkRUpETEhOQ1FXSnpRanRCUVdOMFFrazdRVUZrYzBJc1EwRkJNVUlpTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1SUVOdmNIbHlhV2RvZENBb1l5a2dNakF4T0NCWWFXRnRaVzRnV1dGcWFTQlRiMlowZDJGeVpTQkRieTRzSUV4MFpDNWNibHh1SUdoMGRIQnpPaTh2ZDNkM0xtTnZZMjl6TG1OdmJTOWNibHh1SUZCbGNtMXBjM05wYjI0Z2FYTWdhR1Z5WldKNUlHZHlZVzUwWldRc0lHWnlaV1VnYjJZZ1kyaGhjbWRsTENCMGJ5QmhibmtnY0dWeWMyOXVJRzlpZEdGcGJtbHVaeUJoSUdOdmNIbGNiaUJ2WmlCMGFHbHpJSE52Wm5SM1lYSmxJR0Z1WkNCaGMzTnZZMmxoZEdWa0lHVnVaMmx1WlNCemIzVnlZMlVnWTI5a1pTQW9kR2hsSUZ3aVUyOW1kSGRoY21WY0lpa3NJR0VnYkdsdGFYUmxaQ3hjYmlCM2IzSnNaSGRwWkdVc0lISnZlV0ZzZEhrdFpuSmxaU3dnYm05dUxXRnpjMmxuYm1GaWJHVXNJSEpsZG05allXSnNaU0JoYm1RZ2JtOXVMV1Y0WTJ4MWMybDJaU0JzYVdObGJuTmxYRzRnZEc4Z2RYTmxJRU52WTI5eklFTnlaV0YwYjNJZ2MyOXNaV3g1SUhSdklHUmxkbVZzYjNBZ1oyRnRaWE1nYjI0Z2VXOTFjaUIwWVhKblpYUWdjR3hoZEdadmNtMXpMaUJaYjNVZ2MyaGhiR3hjYmlCdWIzUWdkWE5sSUVOdlkyOXpJRU55WldGMGIzSWdjMjltZEhkaGNtVWdabTl5SUdSbGRtVnNiM0JwYm1jZ2IzUm9aWElnYzI5bWRIZGhjbVVnYjNJZ2RHOXZiSE1nZEdoaGRDZHpYRzRnZFhObFpDQm1iM0lnWkdWMlpXeHZjR2x1WnlCbllXMWxjeTRnV1c5MUlHRnlaU0J1YjNRZ1ozSmhiblJsWkNCMGJ5QndkV0pzYVhOb0xDQmthWE4wY21saWRYUmxMRnh1SUhOMVlteHBZMlZ1YzJVc0lHRnVaQzl2Y2lCelpXeHNJR052Y0dsbGN5QnZaaUJEYjJOdmN5QkRjbVZoZEc5eUxseHVYRzRnVkdobElITnZablIzWVhKbElHOXlJSFJ2YjJ4eklHbHVJSFJvYVhNZ1RHbGpaVzV6WlNCQlozSmxaVzFsYm5RZ1lYSmxJR3hwWTJWdWMyVmtMQ0J1YjNRZ2MyOXNaQzVjYmlCWWFXRnRaVzRnV1dGcWFTQlRiMlowZDJGeVpTQkRieTRzSUV4MFpDNGdjbVZ6WlhKMlpYTWdZV3hzSUhKcFoyaDBjeUJ1YjNRZ1pYaHdjbVZ6YzJ4NUlHZHlZVzUwWldRZ2RHOGdlVzkxTGx4dVhHNGdWRWhGSUZOUFJsUlhRVkpGSUVsVElGQlNUMVpKUkVWRUlGd2lRVk1nU1ZOY0lpd2dWMGxVU0U5VlZDQlhRVkpTUVU1VVdTQlBSaUJCVGxrZ1MwbE9SQ3dnUlZoUVVrVlRVeUJQVWx4dUlFbE5VRXhKUlVRc0lFbE9RMHhWUkVsT1J5QkNWVlFnVGs5VUlFeEpUVWxVUlVRZ1ZFOGdWRWhGSUZkQlVsSkJUbFJKUlZNZ1QwWWdUVVZTUTBoQlRsUkJRa2xNU1ZSWkxGeHVJRVpKVkU1RlUxTWdSazlTSUVFZ1VFRlNWRWxEVlV4QlVpQlFWVkpRVDFORklFRk9SQ0JPVDA1SlRrWlNTVTVIUlUxRlRsUXVJRWxPSUU1UElFVldSVTVVSUZOSVFVeE1JRlJJUlZ4dUlFRlZWRWhQVWxNZ1QxSWdRMDlRV1ZKSlIwaFVJRWhQVEVSRlVsTWdRa1VnVEVsQlFreEZJRVpQVWlCQlRsa2dRMHhCU1Uwc0lFUkJUVUZIUlZNZ1QxSWdUMVJJUlZKY2JpQk1TVUZDU1V4SlZGa3NJRmRJUlZSSVJWSWdTVTRnUVU0Z1FVTlVTVTlPSUU5R0lFTlBUbFJTUVVOVUxDQlVUMUpVSUU5U0lFOVVTRVZTVjBsVFJTd2dRVkpKVTBsT1J5QkdVazlOTEZ4dUlFOVZWQ0JQUmlCUFVpQkpUaUJEVDA1T1JVTlVTVTlPSUZkSlZFZ2dWRWhGSUZOUFJsUlhRVkpGSUU5U0lGUklSU0JWVTBVZ1QxSWdUMVJJUlZJZ1JFVkJURWxPUjFNZ1NVNWNiaUJVU0VVZ1UwOUdWRmRCVWtVdVhHNGdLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2k5Y2JseHVhVzF3YjNKMElFRnpjMlZ0WW14bGNpQm1jbTl0SUNjdUxpOHVMaTh1TGk5aGMzTmxiV0pzWlhJbk8xeHVhVzF3YjNKMElFeGhZbVZzSUdaeWIyMGdKeTR1THk0dUx5NHVMeTR1TDJOdmJYQnZibVZ1ZEhNdlEwTk1ZV0psYkNjN1hHNXBiWEJ2Y25RZ1ZGUkdJR1p5YjIwZ0p5NHZkSFJtSnp0Y2JtbHRjRzl5ZENCQ2JXWnZiblFnWm5KdmJTQW5MaTlpYldadmJuUW5PMXh1WEc1c1pYUWdZMkZ1ZG1GelVHOXZiQ0E5SUh0Y2JpQWdJQ0J3YjI5c09pQmJYU3hjYmlBZ0lDQm5aWFFnS0NrZ2UxeHVJQ0FnSUNBZ0lDQnNaWFFnWkdGMFlTQTlJSFJvYVhNdWNHOXZiQzV3YjNBb0tUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb0lXUmhkR0VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCallXNTJZWE1nUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLRndpWTJGdWRtRnpYQ0lwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUdOdmJuUmxlSFFnUFNCallXNTJZWE11WjJWMFEyOXVkR1Y0ZENoY0lqSmtYQ0lwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdaR0YwWVNBOUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpZVzUyWVhNNklHTmhiblpoY3l4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNTBaWGgwT2lCamIyNTBaWGgwWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWkdGMFlUdGNiaUFnSUNCOUxGeHVJQ0FnSUhCMWRDQW9ZMkZ1ZG1GektTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbkJ2YjJ3dWJHVnVaM1JvSUQ0OUlETXlLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkR2hwY3k1d2IyOXNMbkIxYzJnb1kyRnVkbUZ6S1R0Y2JpQWdJQ0I5WEc1OU8xeHVYRzVNWVdKbGJDNWZZMkZ1ZG1GelVHOXZiQ0E5SUdOaGJuWmhjMUJ2YjJ3N1hHNWNibHh1UVhOelpXMWliR1Z5TG5KbFoybHpkR1Z5S0V4aFltVnNMQ0I3WEc0Z0lDQWdaMlYwUTI5dWMzUnlkV04wYjNJb2JHRmlaV3dwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJR04wYjNJZ1BTQlVWRVk3WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCcFppQW9iR0ZpWld3dVptOXVkQ0JwYm5OMFlXNWpaVzltSUdOakxrSnBkRzFoY0VadmJuUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTjBiM0lnUFNCQ2JXWnZiblE3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2JHRmlaV3d1WTJGamFHVk5iMlJsSUQwOVBTQk1ZV0psYkM1RFlXTm9aVTF2WkdVdVEwaEJVaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMk11ZDJGeWJpZ25jMjl5Y25rc0lHTmhiblpoY3lCdGIyUmxJR1J2WlhNZ2JtOTBJSE4xY0hCdmNuUWdRMGhCVWlCdGIyUmxJR04xY25KbGJuUnNlU0VuS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpkRzl5TzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JVVkVZc1hHNGdJQ0FnUW0xbWIyNTBYRzU5S1RzaVhYMD0iXX0=