(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/webgl/assemblers/label/2d/letter.js';
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
        Object.defineProperty(exports, '__esModule', { value: true });
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _get = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined;
                } else {
                    return get(parent, property, receiver);
                }
            } else if ('value' in desc) {
                return desc.value;
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined;
                }
                return getter.call(receiver);
            }
        };
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            }
            return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
        }
        function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
                throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var js = require('../../../../../platform/js');
        var WebglBmfontAssembler = require('./bmfont');
        var LetterFontAssembler = require('../../../../utils/label/letter-font');
        var WHITE = cc.color(255, 255, 255, 255);
        var WebglLetterFontAssembler = function (_LetterFontAssembler) {
            _inherits(WebglLetterFontAssembler, _LetterFontAssembler);
            function WebglLetterFontAssembler() {
                _classCallCheck(this, WebglLetterFontAssembler);
                return _possibleConstructorReturn(this, (WebglLetterFontAssembler.__proto__ || Object.getPrototypeOf(WebglLetterFontAssembler)).apply(this, arguments));
            }
            _createClass(WebglLetterFontAssembler, [
                {
                    key: 'createData',
                    value: function createData(comp) {
                        return comp.requestRenderData();
                    }
                },
                {
                    key: '_getColor',
                    value: function _getColor(comp) {
                        WHITE._fastSetA(comp.node._color.a);
                        return WHITE._val;
                    }
                },
                {
                    key: 'updateColor',
                    value: function updateColor(comp) {
                        var color = this._getColor(comp);
                        _get(WebglLetterFontAssembler.prototype.__proto__ || Object.getPrototypeOf(WebglLetterFontAssembler.prototype), 'updateColor', this).call(this, comp, color);
                    }
                }
            ]);
            return WebglLetterFontAssembler;
        }(LetterFontAssembler);
        exports.default = WebglLetterFontAssembler;
        module.exports = exports['default'];
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldHRlci5qcyIsIi9Vc2Vycy9TaGFyZWQvYmluZ29fZnJlbnp5L2VuZ2luZS9jb2NvczJkL2NvcmUvcmVuZGVyZXIvd2ViZ2wvYXNzZW1ibGVycy9sYWJlbC8yZC9sZXR0ZXIuanMiXSwibmFtZXMiOlsianMiLCJyZXF1aXJlIiwiV2ViZ2xCbWZvbnRBc3NlbWJsZXIiLCJMZXR0ZXJGb250QXNzZW1ibGVyIiwiV0hJVEUiLCJjYyIsImNvbG9yIiwiV2ViZ2xMZXR0ZXJGb250QXNzZW1ibGVyIiwiY29tcCIsInJlcXVlc3RSZW5kZXJEYXRhIiwiX2Zhc3RTZXRBIiwibm9kZSIsIl9jb2xvciIsImEiLCJfdmFsIiwiX2dldENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUF5QkEsSUFBTUEsRUFBQUEsR0FBS0MsT0FBQUEsQ0FBUSw0QkFBUkEsQ0FBWDtRQUNBLElBQU1DLG9CQUFBQSxHQUF1QkQsT0FBQUEsQ0FBUSxVQUFSQSxDQUE3QjtRQUNBLElBQU1FLG1CQUFBQSxHQUFzQkYsT0FBQUEsQ0FBUSxxQ0FBUkEsQ0FBNUI7UUFDQSxJQUFNRyxLQUFBQSxHQUFRQyxFQUFBQSxDQUFHQyxLQUFIRCxDQUFTLEdBQVRBLEVBQWMsR0FBZEEsRUFBbUIsR0FBbkJBLEVBQXdCLEdBQXhCQSxDQUFkO1lBRXFCRSx3QkFBQUE7Ozs7Ozs7OzsrQ0FDTEMsTUFBTTtBQUFBLHdCQUNkLE9BQU9BLElBQUFBLENBQUtDLGlCQUFMRCxFQUFQLENBRGM7QUFBQTs7Ozs4Q0FJUEEsTUFBTTtBQUFBLHdCQUNiSixLQUFBQSxDQUFNTSxTQUFOTixDQUFnQkksSUFBQUEsQ0FBS0csSUFBTEgsQ0FBVUksTUFBVkosQ0FBaUJLLENBQWpDVCxFQURhO0FBQUEsd0JBRWIsT0FBT0EsS0FBQUEsQ0FBTVUsSUFBYixDQUZhO0FBQUE7Ozs7Z0RBS0pOLE1BQU07QUFBQSx3QkFDZixJQUFJRixLQUFBQSxHQUFRLEtBQUtTLFNBQUwsQ0FBZVAsSUFBZixDQUFaLENBRGU7QUFBQSx3QkFHZixJQUFBLENBQUEsd0JBQUEsQ0FBQSxTQUFBLENBQUEsU0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsd0JBQUEsQ0FBQSxTQUFBLENBQUEsRUFBQSxhQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsQ0FBQSxJQUFBLEVBQWtCQSxJQUFsQixFQUF3QkYsS0FBeEIsRUFIZTtBQUFBOzs7O1VBVitCSDswQkFBakNJOzs7OztXQTlCckI7QUFBQTs7V0FBQTtBQUFBIiwiZmlsZSI6ImxldHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNvbnN0IGpzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vcGxhdGZvcm0vanMnKTtcbmNvbnN0IFdlYmdsQm1mb250QXNzZW1ibGVyID0gcmVxdWlyZSgnLi9ibWZvbnQnKTtcbmNvbnN0IExldHRlckZvbnRBc3NlbWJsZXIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi91dGlscy9sYWJlbC9sZXR0ZXItZm9udCcpO1xuY29uc3QgV0hJVEUgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJnbExldHRlckZvbnRBc3NlbWJsZXIgZXh0ZW5kcyBMZXR0ZXJGb250QXNzZW1ibGVyIHtcbiAgICBjcmVhdGVEYXRhIChjb21wKSB7XG4gICAgICAgIHJldHVybiBjb21wLnJlcXVlc3RSZW5kZXJEYXRhKCk7XG4gICAgfVxuXG4gICAgX2dldENvbG9yIChjb21wKSB7XG4gICAgICAgIFdISVRFLl9mYXN0U2V0QShjb21wLm5vZGUuX2NvbG9yLmEpO1xuICAgICAgICByZXR1cm4gV0hJVEUuX3ZhbDtcbiAgICB9XG5cbiAgICB1cGRhdGVDb2xvciAoY29tcCkge1xuICAgICAgICBsZXQgY29sb3IgPSB0aGlzLl9nZXRDb2xvcihjb21wKTtcblxuICAgICAgICBzdXBlci51cGRhdGVDb2xvcihjb21wLCBjb2xvcik7XG4gICAgfVxufVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpOyB9IH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciBqcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL3BsYXRmb3JtL2pzJyk7XG52YXIgV2ViZ2xCbWZvbnRBc3NlbWJsZXIgPSByZXF1aXJlKCcuL2JtZm9udCcpO1xudmFyIExldHRlckZvbnRBc3NlbWJsZXIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi91dGlscy9sYWJlbC9sZXR0ZXItZm9udCcpO1xudmFyIFdISVRFID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcblxudmFyIFdlYmdsTGV0dGVyRm9udEFzc2VtYmxlciA9IGZ1bmN0aW9uIChfTGV0dGVyRm9udEFzc2VtYmxlcikge1xuICAgIF9pbmhlcml0cyhXZWJnbExldHRlckZvbnRBc3NlbWJsZXIsIF9MZXR0ZXJGb250QXNzZW1ibGVyKTtcblxuICAgIGZ1bmN0aW9uIFdlYmdsTGV0dGVyRm9udEFzc2VtYmxlcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdlYmdsTGV0dGVyRm9udEFzc2VtYmxlcik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChXZWJnbExldHRlckZvbnRBc3NlbWJsZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihXZWJnbExldHRlckZvbnRBc3NlbWJsZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoV2ViZ2xMZXR0ZXJGb250QXNzZW1ibGVyLCBbe1xuICAgICAgICBrZXk6ICdjcmVhdGVEYXRhJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZURhdGEoY29tcCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXAucmVxdWVzdFJlbmRlckRhdGEoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnX2dldENvbG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRDb2xvcihjb21wKSB7XG4gICAgICAgICAgICBXSElURS5fZmFzdFNldEEoY29tcC5ub2RlLl9jb2xvci5hKTtcbiAgICAgICAgICAgIHJldHVybiBXSElURS5fdmFsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1cGRhdGVDb2xvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVDb2xvcihjb21wKSB7XG4gICAgICAgICAgICB2YXIgY29sb3IgPSB0aGlzLl9nZXRDb2xvcihjb21wKTtcblxuICAgICAgICAgICAgX2dldChXZWJnbExldHRlckZvbnRBc3NlbWJsZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoV2ViZ2xMZXR0ZXJGb250QXNzZW1ibGVyLnByb3RvdHlwZSksICd1cGRhdGVDb2xvcicsIHRoaXMpLmNhbGwodGhpcywgY29tcCwgY29sb3IpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFdlYmdsTGV0dGVyRm9udEFzc2VtYmxlcjtcbn0oTGV0dGVyRm9udEFzc2VtYmxlcik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFdlYmdsTGV0dGVyRm9udEFzc2VtYmxlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW14bGRIUmxjaTVxY3lKZExDSnVZVzFsY3lJNld5SnFjeUlzSW5KbGNYVnBjbVVpTENKWFpXSm5iRUp0Wm05dWRFRnpjMlZ0WW14bGNpSXNJa3hsZEhSbGNrWnZiblJCYzNObGJXSnNaWElpTENKWFNFbFVSU0lzSW1Oaklpd2lZMjlzYjNJaUxDSlhaV0puYkV4bGRIUmxja1p2Ym5SQmMzTmxiV0pzWlhJaUxDSmpiMjF3SWl3aWNtVnhkV1Z6ZEZKbGJtUmxja1JoZEdFaUxDSmZabUZ6ZEZObGRFRWlMQ0p1YjJSbElpd2lYMk52Ykc5eUlpd2lZU0lzSWw5MllXd2lMQ0pmWjJWMFEyOXNiM0lpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN1FVRkJRVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRWGxDUVN4SlFVRk5RU3hMUVVGTFF5eFJRVUZSTERSQ1FVRlNMRU5CUVZnN1FVRkRRU3hKUVVGTlF5eDFRa0ZCZFVKRUxGRkJRVkVzVlVGQlVpeERRVUUzUWp0QlFVTkJMRWxCUVUxRkxITkNRVUZ6UWtZc1VVRkJVU3h4UTBGQlVpeERRVUUxUWp0QlFVTkJMRWxCUVUxSExGRkJRVkZETEVkQlFVZERMRXRCUVVnc1EwRkJVeXhIUVVGVUxFVkJRV01zUjBGQlpDeEZRVUZ0UWl4SFFVRnVRaXhGUVVGM1FpeEhRVUY0UWl4RFFVRmtPenRKUVVWeFFrTXNkMEk3T3pzN096czdPenM3TzIxRFFVTk1ReXhKTEVWQlFVMDdRVUZEWkN4dFFrRkJUMEVzUzBGQlMwTXNhVUpCUVV3c1JVRkJVRHRCUVVOSU96czdhME5CUlZWRUxFa3NSVUZCVFR0QlFVTmlTaXhyUWtGQlRVMHNVMEZCVGl4RFFVRm5Ra1lzUzBGQlMwY3NTVUZCVEN4RFFVRlZReXhOUVVGV0xFTkJRV2xDUXl4RFFVRnFRenRCUVVOQkxHMUNRVUZQVkN4TlFVRk5WU3hKUVVGaU8wRkJRMGc3T3p0dlEwRkZXVTRzU1N4RlFVRk5PMEZCUTJZc1owSkJRVWxHTEZGQlFWRXNTMEZCUzFNc1UwRkJUQ3hEUVVGbFVDeEpRVUZtTEVOQlFWbzdPMEZCUlVFc05FcEJRV3RDUVN4SlFVRnNRaXhGUVVGM1FrWXNTMEZCZUVJN1FVRkRTRHM3T3p0RlFXUnBSRWdzYlVJN08ydENRVUZxUTBrc2QwSWlMQ0ptYVd4bElqb2liR1YwZEdWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpcGNiaUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVGN0TWpBeE9DQllhV0Z0Wlc0Z1dXRnFhU0JUYjJaMGQyRnlaU0JEYnk0c0lFeDBaQzVjYmx4dUlHaDBkSEJ6T2k4dmQzZDNMbU52WTI5ekxtTnZiUzljYmx4dUlGQmxjbTFwYzNOcGIyNGdhWE1nYUdWeVpXSjVJR2R5WVc1MFpXUXNJR1p5WldVZ2IyWWdZMmhoY21kbExDQjBieUJoYm5rZ2NHVnljMjl1SUc5aWRHRnBibWx1WnlCaElHTnZjSGxjYmlCdlppQjBhR2x6SUhOdlpuUjNZWEpsSUdGdVpDQmhjM052WTJsaGRHVmtJR1Z1WjJsdVpTQnpiM1Z5WTJVZ1kyOWtaU0FvZEdobElGd2lVMjltZEhkaGNtVmNJaWtzSUdFZ2JHbHRhWFJsWkN4Y2JpQjNiM0pzWkhkcFpHVXNJSEp2ZVdGc2RIa3RabkpsWlN3Z2JtOXVMV0Z6YzJsbmJtRmliR1VzSUhKbGRtOWpZV0pzWlNCaGJtUWdibTl1TFdWNFkyeDFjMmwyWlNCc2FXTmxibk5sWEc0Z2RHOGdkWE5sSUVOdlkyOXpJRU55WldGMGIzSWdjMjlzWld4NUlIUnZJR1JsZG1Wc2IzQWdaMkZ0WlhNZ2IyNGdlVzkxY2lCMFlYSm5aWFFnY0d4aGRHWnZjbTF6TGlCWmIzVWdjMmhoYkd4Y2JpQnViM1FnZFhObElFTnZZMjl6SUVOeVpXRjBiM0lnYzI5bWRIZGhjbVVnWm05eUlHUmxkbVZzYjNCcGJtY2diM1JvWlhJZ2MyOW1kSGRoY21VZ2IzSWdkRzl2YkhNZ2RHaGhkQ2R6WEc0Z2RYTmxaQ0JtYjNJZ1pHVjJaV3h2Y0dsdVp5Qm5ZVzFsY3k0Z1dXOTFJR0Z5WlNCdWIzUWdaM0poYm5SbFpDQjBieUJ3ZFdKc2FYTm9MQ0JrYVhOMGNtbGlkWFJsTEZ4dUlITjFZbXhwWTJWdWMyVXNJR0Z1WkM5dmNpQnpaV3hzSUdOdmNHbGxjeUJ2WmlCRGIyTnZjeUJEY21WaGRHOXlMbHh1WEc0Z1ZHaGxJSE52Wm5SM1lYSmxJRzl5SUhSdmIyeHpJR2x1SUhSb2FYTWdUR2xqWlc1elpTQkJaM0psWlcxbGJuUWdZWEpsSUd4cFkyVnVjMlZrTENCdWIzUWdjMjlzWkM1Y2JpQllhV0Z0Wlc0Z1dXRnFhU0JUYjJaMGQyRnlaU0JEYnk0c0lFeDBaQzRnY21WelpYSjJaWE1nWVd4c0lISnBaMmgwY3lCdWIzUWdaWGh3Y21WemMyeDVJR2R5WVc1MFpXUWdkRzhnZVc5MUxseHVYRzRnVkVoRklGTlBSbFJYUVZKRklFbFRJRkJTVDFaSlJFVkVJRndpUVZNZ1NWTmNJaXdnVjBsVVNFOVZWQ0JYUVZKU1FVNVVXU0JQUmlCQlRsa2dTMGxPUkN3Z1JWaFFVa1ZUVXlCUFVseHVJRWxOVUV4SlJVUXNJRWxPUTB4VlJFbE9SeUJDVlZRZ1RrOVVJRXhKVFVsVVJVUWdWRThnVkVoRklGZEJVbEpCVGxSSlJWTWdUMFlnVFVWU1EwaEJUbFJCUWtsTVNWUlpMRnh1SUVaSlZFNUZVMU1nUms5U0lFRWdVRUZTVkVsRFZVeEJVaUJRVlZKUVQxTkZJRUZPUkNCT1QwNUpUa1pTU1U1SFJVMUZUbFF1SUVsT0lFNVBJRVZXUlU1VUlGTklRVXhNSUZSSVJWeHVJRUZWVkVoUFVsTWdUMUlnUTA5UVdWSkpSMGhVSUVoUFRFUkZVbE1nUWtVZ1RFbEJRa3hGSUVaUFVpQkJUbGtnUTB4QlNVMHNJRVJCVFVGSFJWTWdUMUlnVDFSSVJWSmNiaUJNU1VGQ1NVeEpWRmtzSUZkSVJWUklSVklnU1U0Z1FVNGdRVU5VU1U5T0lFOUdJRU5QVGxSU1FVTlVMQ0JVVDFKVUlFOVNJRTlVU0VWU1YwbFRSU3dnUVZKSlUwbE9SeUJHVWs5TkxGeHVJRTlWVkNCUFJpQlBVaUJKVGlCRFQwNU9SVU5VU1U5T0lGZEpWRWdnVkVoRklGTlBSbFJYUVZKRklFOVNJRlJJUlNCVlUwVWdUMUlnVDFSSVJWSWdSRVZCVEVsT1IxTWdTVTVjYmlCVVNFVWdVMDlHVkZkQlVrVXVYRzRnS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpOWNibHh1WTI5dWMzUWdhbk1nUFNCeVpYRjFhWEpsS0NjdUxpOHVMaTh1TGk4dUxpOHVMaTl3YkdGMFptOXliUzlxY3ljcE8xeHVZMjl1YzNRZ1YyVmlaMnhDYldadmJuUkJjM05sYldKc1pYSWdQU0J5WlhGMWFYSmxLQ2N1TDJKdFptOXVkQ2NwTzF4dVkyOXVjM1FnVEdWMGRHVnlSbTl1ZEVGemMyVnRZbXhsY2lBOUlISmxjWFZwY21Vb0p5NHVMeTR1THk0dUx5NHVMM1YwYVd4ekwyeGhZbVZzTDJ4bGRIUmxjaTFtYjI1MEp5azdYRzVqYjI1emRDQlhTRWxVUlNBOUlHTmpMbU52Ykc5eUtESTFOU3dnTWpVMUxDQXlOVFVzSURJMU5TazdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGZGxZbWRzVEdWMGRHVnlSbTl1ZEVGemMyVnRZbXhsY2lCbGVIUmxibVJ6SUV4bGRIUmxja1p2Ym5SQmMzTmxiV0pzWlhJZ2UxeHVJQ0FnSUdOeVpXRjBaVVJoZEdFZ0tHTnZiWEFwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOdmJYQXVjbVZ4ZFdWemRGSmxibVJsY2tSaGRHRW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQmZaMlYwUTI5c2IzSWdLR052YlhBcElIdGNiaUFnSUNBZ0lDQWdWMGhKVkVVdVgyWmhjM1JUWlhSQktHTnZiWEF1Ym05a1pTNWZZMjlzYjNJdVlTazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQlhTRWxVUlM1ZmRtRnNPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIVndaR0YwWlVOdmJHOXlJQ2hqYjIxd0tTQjdYRzRnSUNBZ0lDQWdJR3hsZENCamIyeHZjaUE5SUhSb2FYTXVYMmRsZEVOdmJHOXlLR052YlhBcE8xeHVYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuVndaR0YwWlVOdmJHOXlLR052YlhBc0lHTnZiRzl5S1R0Y2JpQWdJQ0I5WEc1OVhHNWNiaUpkZlE9PSJdfQ==