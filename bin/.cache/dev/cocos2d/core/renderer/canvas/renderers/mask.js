(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/canvas/renderers/mask.js';
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
        exports.default = undefined;
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
        var _assembler = require('../../assembler');
        var _assembler2 = _interopRequireDefault(_assembler);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
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
        var Mask = require('../../../components/CCMask');
        var graphicsHandler = require('./graphics');
        var CanvasMaskAssembler = function (_Assembler) {
            _inherits(CanvasMaskAssembler, _Assembler);
            function CanvasMaskAssembler() {
                _classCallCheck(this, CanvasMaskAssembler);
                return _possibleConstructorReturn(this, (CanvasMaskAssembler.__proto__ || Object.getPrototypeOf(CanvasMaskAssembler)).apply(this, arguments));
            }
            _createClass(CanvasMaskAssembler, [
                {
                    key: 'draw',
                    value: function draw(ctx, mask) {
                        ctx.save();
                        mask._graphics._assembler.draw(ctx, mask._graphics);
                        ctx.clip();
                    }
                },
                {
                    key: 'postDraw',
                    value: function postDraw(ctx, mask) {
                        ctx.restore();
                    }
                }
            ]);
            return CanvasMaskAssembler;
        }(_assembler2.default);
        exports.default = CanvasMaskAssembler;
        _assembler2.default.register(Mask, CanvasMaskAssembler);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc2suanMiLCIvVXNlcnMvU2hhcmVkL2JpbmdvX2ZyZW56eS9lbmdpbmUvY29jb3MyZC9jb3JlL3JlbmRlcmVyL2NhbnZhcy9yZW5kZXJlcnMvbWFzay5qcyJdLCJuYW1lcyI6WyJNYXNrIiwicmVxdWlyZSIsImdyYXBoaWNzSGFuZGxlciIsIkNhbnZhc01hc2tBc3NlbWJsZXIiLCJjdHgiLCJtYXNrIiwic2F2ZSIsIl9ncmFwaGljcyIsIl9hc3NlbWJsZXIiLCJkcmF3IiwiY2xpcCIsInJlc3RvcmUiLCJBc3NlbWJsZXIiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUEyQkEsSUFBQSxVQUFBLEdBQUEsT0FBQSxDQUFBLGlCQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFGQSxJQUFNQSxJQUFBQSxHQUFPQyxPQUFBQSxDQUFRLDRCQUFSQSxDQUFiO1FBQ0EsSUFBTUMsZUFBQUEsR0FBa0JELE9BQUFBLENBQVEsWUFBUkEsQ0FBeEI7WUFHcUJFLG1CQUFBQTs7Ozs7Ozs7O3lDQUNYQyxLQUFLQyxNQUFNO0FBQUEsd0JBQ2JELEdBQUFBLENBQUlFLElBQUpGLEdBRGE7QUFBQSx3QkFJYkMsSUFBQUEsQ0FBS0UsU0FBTEYsQ0FBZUcsVUFBZkgsQ0FBMEJJLElBQTFCSixDQUErQkQsR0FBL0JDLEVBQW9DQSxJQUFBQSxDQUFLRSxTQUF6Q0YsRUFKYTtBQUFBLHdCQU1iRCxHQUFBQSxDQUFJTSxJQUFKTixHQU5hO0FBQUE7Ozs7NkNBU1BBLEtBQUtDLE1BQU07QUFBQSx3QkFDakJELEdBQUFBLENBQUlPLE9BQUpQLEdBRGlCO0FBQUE7Ozs7VUFWd0JRLFdBQUFBLENBQUFBOzBCQUE1QlQ7UUFlckJTLFdBQUFBLENBQUFBLE9BQUFBLENBQVVDLFFBQVZELENBQW1CWixJQUFuQlksRUFBeUJULG1CQUF6QlMiLCJmaWxlIjoibWFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBNYXNrID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tcG9uZW50cy9DQ01hc2snKTtcbmNvbnN0IGdyYXBoaWNzSGFuZGxlciA9IHJlcXVpcmUoJy4vZ3JhcGhpY3MnKTtcbmltcG9ydCBBc3NlbWJsZXIgZnJvbSAnLi4vLi4vYXNzZW1ibGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzTWFza0Fzc2VtYmxlciBleHRlbmRzIEFzc2VtYmxlciB7XG4gICAgZHJhdyAoY3R4LCBtYXNrKSB7XG4gICAgICAgIGN0eC5zYXZlKCk7XG5cbiAgICAgICAgLy8gZHJhdyBzdGVuY2lsXG4gICAgICAgIG1hc2suX2dyYXBoaWNzLl9hc3NlbWJsZXIuZHJhdyhjdHgsIG1hc2suX2dyYXBoaWNzKTtcblxuICAgICAgICBjdHguY2xpcCgpO1xuICAgIH1cblxuICAgIHBvc3REcmF3IChjdHgsIG1hc2spIHtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG59XG5cbkFzc2VtYmxlci5yZWdpc3RlcihNYXNrLCBDYW52YXNNYXNrQXNzZW1ibGVyKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2Fzc2VtYmxlciA9IHJlcXVpcmUoJy4uLy4uL2Fzc2VtYmxlcicpO1xuXG52YXIgX2Fzc2VtYmxlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlbWJsZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIgTWFzayA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbXBvbmVudHMvQ0NNYXNrJyk7XG52YXIgZ3JhcGhpY3NIYW5kbGVyID0gcmVxdWlyZSgnLi9ncmFwaGljcycpO1xuXG52YXIgQ2FudmFzTWFza0Fzc2VtYmxlciA9IGZ1bmN0aW9uIChfQXNzZW1ibGVyKSB7XG4gICAgX2luaGVyaXRzKENhbnZhc01hc2tBc3NlbWJsZXIsIF9Bc3NlbWJsZXIpO1xuXG4gICAgZnVuY3Rpb24gQ2FudmFzTWFza0Fzc2VtYmxlcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhbnZhc01hc2tBc3NlbWJsZXIpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ2FudmFzTWFza0Fzc2VtYmxlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENhbnZhc01hc2tBc3NlbWJsZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2FudmFzTWFza0Fzc2VtYmxlciwgW3tcbiAgICAgICAga2V5OiAnZHJhdycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkcmF3KGN0eCwgbWFzaykge1xuICAgICAgICAgICAgY3R4LnNhdmUoKTtcblxuICAgICAgICAgICAgLy8gZHJhdyBzdGVuY2lsXG4gICAgICAgICAgICBtYXNrLl9ncmFwaGljcy5fYXNzZW1ibGVyLmRyYXcoY3R4LCBtYXNrLl9ncmFwaGljcyk7XG5cbiAgICAgICAgICAgIGN0eC5jbGlwKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Bvc3REcmF3JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBvc3REcmF3KGN0eCwgbWFzaykge1xuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDYW52YXNNYXNrQXNzZW1ibGVyO1xufShfYXNzZW1ibGVyMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ2FudmFzTWFza0Fzc2VtYmxlcjtcblxuXG5fYXNzZW1ibGVyMi5kZWZhdWx0LnJlZ2lzdGVyKE1hc2ssIENhbnZhc01hc2tBc3NlbWJsZXIpO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTFoYzJzdWFuTWlYU3dpYm1GdFpYTWlPbHNpVFdGemF5SXNJbkpsY1hWcGNtVWlMQ0puY21Gd2FHbGpjMGhoYm1Sc1pYSWlMQ0pEWVc1MllYTk5ZWE5yUVhOelpXMWliR1Z5SWl3aVkzUjRJaXdpYldGemF5SXNJbk5oZG1VaUxDSmZaM0poY0docFkzTWlMQ0pmWVhOelpXMWliR1Z5SWl3aVpISmhkeUlzSW1Oc2FYQWlMQ0p5WlhOMGIzSmxJaXdpUVhOelpXMWliR1Z5SWl3aWNtVm5hWE4wWlhJaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenRCUVRKQ1FUczdPenM3T3pzN096czdPMEZCTTBKQk96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQmVVSkJMRWxCUVUxQkxFOUJRVTlETEZGQlFWRXNORUpCUVZJc1EwRkJZanRCUVVOQkxFbEJRVTFETEd0Q1FVRnJRa1FzVVVGQlVTeFpRVUZTTEVOQlFYaENPenRKUVVkeFFrVXNiVUk3T3pzN096czdPenM3T3paQ1FVTllReXhITEVWQlFVdERMRWtzUlVGQlRUdEJRVU5pUkN4blFrRkJTVVVzU1VGQlNqczdRVUZGUVR0QlFVTkJSQ3hwUWtGQlMwVXNVMEZCVEN4RFFVRmxReXhWUVVGbUxFTkJRVEJDUXl4SlFVRXhRaXhEUVVFclFrd3NSMEZCTDBJc1JVRkJiME5ETEV0QlFVdEZMRk5CUVhwRE96dEJRVVZCU0N4blFrRkJTVTBzU1VGQlNqdEJRVU5JT3pzN2FVTkJSVk5PTEVjc1JVRkJTME1zU1N4RlFVRk5PMEZCUTJwQ1JDeG5Ra0ZCU1U4c1QwRkJTanRCUVVOSU96czdPMFZCV2pSRFF5eHRRanM3YTBKQlFUVkNWQ3h0UWpzN08wRkJaWEpDVXl4dlFrRkJWVU1zVVVGQlZpeERRVUZ0UW1Jc1NVRkJia0lzUlVGQmVVSkhMRzFDUVVGNlFpSXNJbVpwYkdVaU9pSnRZWE5yTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQkRiM0I1Y21sbmFIUWdLR01wSURJd01UZ2dXR2xoYldWdUlGbGhhbWtnVTI5bWRIZGhjbVVnUTI4dUxDQk1kR1F1WEc1Y2JpQm9kSFJ3Y3pvdkwzZDNkeTVqYjJOdmN5NWpiMjB2WEc1Y2JpQlFaWEp0YVhOemFXOXVJR2x6SUdobGNtVmllU0JuY21GdWRHVmtMQ0JtY21WbElHOW1JR05vWVhKblpTd2dkRzhnWVc1NUlIQmxjbk52YmlCdlluUmhhVzVwYm1jZ1lTQmpiM0I1WEc0Z2IyWWdkR2hwY3lCemIyWjBkMkZ5WlNCaGJtUWdZWE56YjJOcFlYUmxaQ0JsYm1kcGJtVWdjMjkxY21ObElHTnZaR1VnS0hSb1pTQmNJbE52Wm5SM1lYSmxYQ0lwTENCaElHeHBiV2wwWldRc1hHNGdkMjl5YkdSM2FXUmxMQ0J5YjNsaGJIUjVMV1p5WldVc0lHNXZiaTFoYzNOcFoyNWhZbXhsTENCeVpYWnZZMkZpYkdVZ1lXNWtJRzV2YmkxbGVHTnNkWE5wZG1VZ2JHbGpaVzV6WlZ4dUlIUnZJSFZ6WlNCRGIyTnZjeUJEY21WaGRHOXlJSE52YkdWc2VTQjBieUJrWlhabGJHOXdJR2RoYldWeklHOXVJSGx2ZFhJZ2RHRnlaMlYwSUhCc1lYUm1iM0p0Y3k0Z1dXOTFJSE5vWVd4c1hHNGdibTkwSUhWelpTQkRiMk52Y3lCRGNtVmhkRzl5SUhOdlpuUjNZWEpsSUdadmNpQmtaWFpsYkc5d2FXNW5JRzkwYUdWeUlITnZablIzWVhKbElHOXlJSFJ2YjJ4eklIUm9ZWFFuYzF4dUlIVnpaV1FnWm05eUlHUmxkbVZzYjNCcGJtY2daMkZ0WlhNdUlGbHZkU0JoY21VZ2JtOTBJR2R5WVc1MFpXUWdkRzhnY0hWaWJHbHphQ3dnWkdsemRISnBZblYwWlN4Y2JpQnpkV0pzYVdObGJuTmxMQ0JoYm1RdmIzSWdjMlZzYkNCamIzQnBaWE1nYjJZZ1EyOWpiM01nUTNKbFlYUnZjaTVjYmx4dUlGUm9aU0J6YjJaMGQyRnlaU0J2Y2lCMGIyOXNjeUJwYmlCMGFHbHpJRXhwWTJWdWMyVWdRV2R5WldWdFpXNTBJR0Z5WlNCc2FXTmxibk5sWkN3Z2JtOTBJSE52YkdRdVhHNGdXR2xoYldWdUlGbGhhbWtnVTI5bWRIZGhjbVVnUTI4dUxDQk1kR1F1SUhKbGMyVnlkbVZ6SUdGc2JDQnlhV2RvZEhNZ2JtOTBJR1Y0Y0hKbGMzTnNlU0JuY21GdWRHVmtJSFJ2SUhsdmRTNWNibHh1SUZSSVJTQlRUMFpVVjBGU1JTQkpVeUJRVWs5V1NVUkZSQ0JjSWtGVElFbFRYQ0lzSUZkSlZFaFBWVlFnVjBGU1VrRk9WRmtnVDBZZ1FVNVpJRXRKVGtRc0lFVllVRkpGVTFNZ1QxSmNiaUJKVFZCTVNVVkVMQ0JKVGtOTVZVUkpUa2NnUWxWVUlFNVBWQ0JNU1UxSlZFVkVJRlJQSUZSSVJTQlhRVkpTUVU1VVNVVlRJRTlHSUUxRlVrTklRVTVVUVVKSlRFbFVXU3hjYmlCR1NWUk9SVk5USUVaUFVpQkJJRkJCVWxSSlExVk1RVklnVUZWU1VFOVRSU0JCVGtRZ1RrOU9TVTVHVWtsT1IwVk5SVTVVTGlCSlRpQk9UeUJGVmtWT1ZDQlRTRUZNVENCVVNFVmNiaUJCVlZSSVQxSlRJRTlTSUVOUFVGbFNTVWRJVkNCSVQweEVSVkpUSUVKRklFeEpRVUpNUlNCR1QxSWdRVTVaSUVOTVFVbE5MQ0JFUVUxQlIwVlRJRTlTSUU5VVNFVlNYRzRnVEVsQlFrbE1TVlJaTENCWFNFVlVTRVZTSUVsT0lFRk9JRUZEVkVsUFRpQlBSaUJEVDA1VVVrRkRWQ3dnVkU5U1ZDQlBVaUJQVkVoRlVsZEpVMFVzSUVGU1NWTkpUa2NnUmxKUFRTeGNiaUJQVlZRZ1QwWWdUMUlnU1U0Z1EwOU9Ua1ZEVkVsUFRpQlhTVlJJSUZSSVJTQlRUMFpVVjBGU1JTQlBVaUJVU0VVZ1ZWTkZJRTlTSUU5VVNFVlNJRVJGUVV4SlRrZFRJRWxPWEc0Z1ZFaEZJRk5QUmxSWFFWSkZMbHh1SUNvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3ZYRzVjYm1OdmJuTjBJRTFoYzJzZ1BTQnlaWEYxYVhKbEtDY3VMaTh1TGk4dUxpOWpiMjF3YjI1bGJuUnpMME5EVFdGemF5Y3BPMXh1WTI5dWMzUWdaM0poY0docFkzTklZVzVrYkdWeUlEMGdjbVZ4ZFdseVpTZ25MaTluY21Gd2FHbGpjeWNwTzF4dWFXMXdiM0owSUVGemMyVnRZbXhsY2lCbWNtOXRJQ2N1TGk4dUxpOWhjM05sYldKc1pYSW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QkRZVzUyWVhOTllYTnJRWE56WlcxaWJHVnlJR1Y0ZEdWdVpITWdRWE56WlcxaWJHVnlJSHRjYmlBZ0lDQmtjbUYzSUNoamRIZ3NJRzFoYzJzcElIdGNiaUFnSUNBZ0lDQWdZM1I0TG5OaGRtVW9LVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QmtjbUYzSUhOMFpXNWphV3hjYmlBZ0lDQWdJQ0FnYldGemF5NWZaM0poY0docFkzTXVYMkZ6YzJWdFlteGxjaTVrY21GM0tHTjBlQ3dnYldGemF5NWZaM0poY0docFkzTXBPMXh1WEc0Z0lDQWdJQ0FnSUdOMGVDNWpiR2x3S0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY0c5emRFUnlZWGNnS0dOMGVDd2diV0Z6YXlrZ2UxeHVJQ0FnSUNBZ0lDQmpkSGd1Y21WemRHOXlaU2dwTzF4dUlDQWdJSDFjYm4xY2JseHVRWE56WlcxaWJHVnlMbkpsWjJsemRHVnlLRTFoYzJzc0lFTmhiblpoYzAxaGMydEJjM05sYldKc1pYSXBPMXh1SWwxOSJdfQ==