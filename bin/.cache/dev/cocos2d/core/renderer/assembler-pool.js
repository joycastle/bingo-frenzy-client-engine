(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/assembler-pool.js';
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
        var _pool3 = require('../utils/pool');
        var _pool4 = _interopRequireDefault(_pool3);
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
        var _assemblerId = 0;
        function getAssemblerId(assemblerCtor) {
            if (!Object.getOwnPropertyDescriptor(assemblerCtor, '__assemblerId__')) {
                assemblerCtor.__assemblerId__ = ++_assemblerId;
            }
            return assemblerCtor.__assemblerId__;
        }
        var AssemblerPool = function (_Pool) {
            _inherits(AssemblerPool, _Pool);
            function AssemblerPool() {
                var _ref;
                var _temp, _this, _ret;
                _classCallCheck(this, AssemblerPool);
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }
                return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AssemblerPool.__proto__ || Object.getPrototypeOf(AssemblerPool)).call.apply(_ref, [this].concat(args))), _this), _this._pool = {}, _temp), _possibleConstructorReturn(_this, _ret);
            }
            _createClass(AssemblerPool, [
                {
                    key: 'put',
                    value: function put(assembler) {
                        if (!assembler)
                            return;
                        if (!this.enabled) {
                            if (CC_JSB && CC_NATIVERENDERER) {
                                assembler.destroy && assembler.destroy();
                            }
                            return;
                        }
                        var id = getAssemblerId(assembler.constructor);
                        var pool = this._pool;
                        if (!pool[id]) {
                            pool[id] = [];
                        }
                        if (this.count > this.maxSize)
                            return;
                        this._clean(assembler);
                        pool[id].push(assembler);
                        this.count++;
                    }
                },
                {
                    key: 'get',
                    value: function get(assemblerCtor) {
                        var assembler = void 0;
                        if (this.enabled) {
                            var _pool = this._pool;
                            var id = getAssemblerId(assemblerCtor);
                            assembler = _pool[id] && _pool[id].pop();
                        }
                        if (!assembler) {
                            assembler = new assemblerCtor();
                        } else {
                            this.count--;
                        }
                        return assembler;
                    }
                },
                {
                    key: 'clear',
                    value: function clear() {
                        if (CC_JSB && CC_NATIVERENDERER) {
                            var _pool2 = this._pool;
                            for (var name in _pool2) {
                                var assemblers = _pool2[name];
                                if (!assemblers)
                                    continue;
                                for (var i = 0; i < assemblers.length; i++) {
                                    assemblers[i].destroy && assemblers[i].destroy();
                                }
                            }
                        }
                        this._pool = {};
                        this.count = 0;
                    }
                },
                {
                    key: '_clean',
                    value: function _clean(assembler) {
                        if (CC_JSB && CC_NATIVERENDERER) {
                            assembler.reset();
                        }
                        assembler._renderComp = null;
                    }
                }
            ]);
            return AssemblerPool;
        }(_pool4.default);
        var pool = new AssemblerPool();
        _pool4.default.register('assembler', pool);
        exports.default = pool;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2VtYmxlci1wb29sLmpzIiwiL1VzZXJzL1NoYXJlZC9iaW5nb19mcmVuenkvZW5naW5lL2NvY29zMmQvY29yZS9yZW5kZXJlci9hc3NlbWJsZXItcG9vbC5qcyJdLCJuYW1lcyI6WyJfYXNzZW1ibGVySWQiLCJnZXRBc3NlbWJsZXJJZCIsImFzc2VtYmxlckN0b3IiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfX2Fzc2VtYmxlcklkX18iLCJBc3NlbWJsZXJQb29sIiwiX3Bvb2wiLCJhc3NlbWJsZXIiLCJlbmFibGVkIiwiQ0NfSlNCIiwiQ0NfTkFUSVZFUkVOREVSRVIiLCJkZXN0cm95IiwiaWQiLCJjb25zdHJ1Y3RvciIsInBvb2wiLCJjb3VudCIsIm1heFNpemUiLCJfY2xlYW4iLCJwdXNoIiwicG9wIiwibmFtZSIsImFzc2VtYmxlcnMiLCJpIiwibGVuZ3RoIiwicmVzZXQiLCJfcmVuZGVyQ29tcCIsIlBvb2wiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztRQUFBLE9BQUEsaUJBQUEsQ0FBQSxPQUFBLENBQUEsT0FBQSxFQUFBLFVBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBQUEsSUFBQSxNQUFBLEdBQUEsT0FBQSxDQUFBLGVBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUVBLElBQUlBLFlBQUFBLEdBQWUsQ0FBbkI7UUFFQSxTQUFTQyxjQUFULENBQXlCQyxhQUF6QixFQUF3QztBQUFBLFlBQ3BDLElBQUksQ0FBQ0MsTUFBQUEsQ0FBT0Msd0JBQVBELENBQWdDRCxhQUFoQ0MsRUFBK0MsaUJBQS9DQSxDQUFMLEVBQXdFO0FBQUEsZ0JBQ3BFRCxhQUFBQSxDQUFjRyxlQUFkSCxHQUFnQyxFQUFFRixZQUFsQ0UsQ0FEb0U7QUFBQSxhQURwQztBQUFBLFlBSXBDLE9BQU9BLGFBQUFBLENBQWNHLGVBQXJCLENBSm9DO0FBQUE7WUFZbENDLGFBQUFBOzs7Ozs7Ozs7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QUFBQSx5QkFEbEI7QUFBQSx3QkFJZkEsU0FBQUEsQ0FBVWtCLFdBQVZsQixHQUF3QixJQUF4QkEsQ0FKZTtBQUFBOzs7O1VBM0RLbUIsTUFBQUEsQ0FBQUE7UUFtRTVCLElBQUlaLElBQUFBLEdBQU8sSUFBSVQsYUFBSixFQUFYO1FBQ0FxQixNQUFBQSxDQUFBQSxPQUFBQSxDQUFLQyxRQUFMRCxDQUFjLFdBQWRBLEVBQTJCWixJQUEzQlk7MEJBQ2VaIiwiZmlsZSI6ImFzc2VtYmxlci1wb29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvb2wgZnJvbSAnLi4vdXRpbHMvcG9vbCc7XG5cbmxldCBfYXNzZW1ibGVySWQgPSAwO1xuXG5mdW5jdGlvbiBnZXRBc3NlbWJsZXJJZCAoYXNzZW1ibGVyQ3Rvcikge1xuICAgIGlmICghT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhc3NlbWJsZXJDdG9yLCAnX19hc3NlbWJsZXJJZF9fJykpIHtcbiAgICAgICAgYXNzZW1ibGVyQ3Rvci5fX2Fzc2VtYmxlcklkX18gPSArK19hc3NlbWJsZXJJZDtcbiAgICB9XG4gICAgcmV0dXJuIGFzc2VtYmxlckN0b3IuX19hc3NlbWJsZXJJZF9fO1xufVxuXG4vKipcbiAqIHtcbiAqICAgYXNzZW1ibGVyX2N0b3JfaWQ6IFtdXG4gKiB9XG4gKi9cbmNsYXNzIEFzc2VtYmxlclBvb2wgZXh0ZW5kcyBQb29sIHtcbiAgICBfcG9vbCA9IHt9O1xuXG4gICAgcHV0IChhc3NlbWJsZXIpIHtcbiAgICAgICAgaWYgKCFhc3NlbWJsZXIpIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGlmIChDQ19KU0IgJiYgQ0NfTkFUSVZFUkVOREVSRVIpIHtcbiAgICAgICAgICAgICAgICBhc3NlbWJsZXIuZGVzdHJveSAmJiBhc3NlbWJsZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlkID0gZ2V0QXNzZW1ibGVySWQoYXNzZW1ibGVyLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgbGV0IHBvb2wgPSB0aGlzLl9wb29sO1xuICAgICAgICBpZiAoIXBvb2xbaWRdKSB7XG4gICAgICAgICAgICBwb29sW2lkXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvdW50ID4gdGhpcy5tYXhTaXplKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5fY2xlYW4oYXNzZW1ibGVyKTtcbiAgICAgICAgcG9vbFtpZF0ucHVzaChhc3NlbWJsZXIpO1xuICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgfVxuXG4gICAgZ2V0IChhc3NlbWJsZXJDdG9yKSB7XG4gICAgICAgIGxldCBhc3NlbWJsZXI7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICBsZXQgcG9vbCA9IHRoaXMuX3Bvb2w7XG4gICAgICAgICAgICBsZXQgaWQgPSBnZXRBc3NlbWJsZXJJZChhc3NlbWJsZXJDdG9yKTtcbiAgICAgICAgICAgIGFzc2VtYmxlciA9IHBvb2xbaWRdICYmIHBvb2xbaWRdLnBvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhc3NlbWJsZXIpIHtcbiAgICAgICAgICAgIGFzc2VtYmxlciA9IG5ldyBhc3NlbWJsZXJDdG9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50LS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFzc2VtYmxlcjtcbiAgICB9XG5cbiAgICBjbGVhciAoKSB7XG4gICAgICAgIGlmIChDQ19KU0IgJiYgQ0NfTkFUSVZFUkVOREVSRVIpIHtcbiAgICAgICAgICAgIGxldCBwb29sID0gdGhpcy5fcG9vbDtcbiAgICAgICAgICAgIGZvciAobGV0IG5hbWUgaW4gcG9vbCkge1xuICAgICAgICAgICAgICAgIGxldCBhc3NlbWJsZXJzID0gcG9vbFtuYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoIWFzc2VtYmxlcnMpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NlbWJsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2VtYmxlcnNbaV0uZGVzdHJveSAmJiBhc3NlbWJsZXJzW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3Bvb2wgPSB7fTtcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgfVxuXG4gICAgX2NsZWFuIChhc3NlbWJsZXIpIHtcbiAgICAgICAgaWYgKENDX0pTQiAmJiBDQ19OQVRJVkVSRU5ERVJFUikge1xuICAgICAgICAgICAgYXNzZW1ibGVyLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYXNzZW1ibGVyLl9yZW5kZXJDb21wID0gbnVsbDtcbiAgICB9XG59XG5cbmxldCBwb29sID0gbmV3IEFzc2VtYmxlclBvb2woKTtcblBvb2wucmVnaXN0ZXIoJ2Fzc2VtYmxlcicsIHBvb2wpO1xuZXhwb3J0IGRlZmF1bHQgcG9vbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3Bvb2wzID0gcmVxdWlyZSgnLi4vdXRpbHMvcG9vbCcpO1xuXG52YXIgX3Bvb2w0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9vbDMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfYXNzZW1ibGVySWQgPSAwO1xuXG5mdW5jdGlvbiBnZXRBc3NlbWJsZXJJZChhc3NlbWJsZXJDdG9yKSB7XG4gICAgaWYgKCFPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGFzc2VtYmxlckN0b3IsICdfX2Fzc2VtYmxlcklkX18nKSkge1xuICAgICAgICBhc3NlbWJsZXJDdG9yLl9fYXNzZW1ibGVySWRfXyA9ICsrX2Fzc2VtYmxlcklkO1xuICAgIH1cbiAgICByZXR1cm4gYXNzZW1ibGVyQ3Rvci5fX2Fzc2VtYmxlcklkX187XG59XG5cbi8qKlxuICoge1xuICogICBhc3NlbWJsZXJfY3Rvcl9pZDogW11cbiAqIH1cbiAqL1xuXG52YXIgQXNzZW1ibGVyUG9vbCA9IGZ1bmN0aW9uIChfUG9vbCkge1xuICAgIF9pbmhlcml0cyhBc3NlbWJsZXJQb29sLCBfUG9vbCk7XG5cbiAgICBmdW5jdGlvbiBBc3NlbWJsZXJQb29sKCkge1xuICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBc3NlbWJsZXJQb29sKTtcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBBc3NlbWJsZXJQb29sLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXNzZW1ibGVyUG9vbCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLl9wb29sID0ge30sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhBc3NlbWJsZXJQb29sLCBbe1xuICAgICAgICBrZXk6ICdwdXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHV0KGFzc2VtYmxlcikge1xuICAgICAgICAgICAgaWYgKCFhc3NlbWJsZXIpIHJldHVybjtcbiAgICAgICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKENDX0pTQiAmJiBDQ19OQVRJVkVSRU5ERVJFUikge1xuICAgICAgICAgICAgICAgICAgICBhc3NlbWJsZXIuZGVzdHJveSAmJiBhc3NlbWJsZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpZCA9IGdldEFzc2VtYmxlcklkKGFzc2VtYmxlci5jb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICB2YXIgcG9vbCA9IHRoaXMuX3Bvb2w7XG4gICAgICAgICAgICBpZiAoIXBvb2xbaWRdKSB7XG4gICAgICAgICAgICAgICAgcG9vbFtpZF0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50ID4gdGhpcy5tYXhTaXplKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuX2NsZWFuKGFzc2VtYmxlcik7XG4gICAgICAgICAgICBwb29sW2lkXS5wdXNoKGFzc2VtYmxlcik7XG4gICAgICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoYXNzZW1ibGVyQ3Rvcikge1xuICAgICAgICAgICAgdmFyIGFzc2VtYmxlciA9IHZvaWQgMDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHZhciBfcG9vbCA9IHRoaXMuX3Bvb2w7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gZ2V0QXNzZW1ibGVySWQoYXNzZW1ibGVyQ3Rvcik7XG4gICAgICAgICAgICAgICAgYXNzZW1ibGVyID0gX3Bvb2xbaWRdICYmIF9wb29sW2lkXS5wb3AoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFhc3NlbWJsZXIpIHtcbiAgICAgICAgICAgICAgICBhc3NlbWJsZXIgPSBuZXcgYXNzZW1ibGVyQ3RvcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50LS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXNzZW1ibGVyO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjbGVhcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgICAgIGlmIChDQ19KU0IgJiYgQ0NfTkFUSVZFUkVOREVSRVIpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3Bvb2wyID0gdGhpcy5fcG9vbDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIF9wb29sMikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXNzZW1ibGVycyA9IF9wb29sMltuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhc3NlbWJsZXJzKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFzc2VtYmxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2VtYmxlcnNbaV0uZGVzdHJveSAmJiBhc3NlbWJsZXJzW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fcG9vbCA9IHt9O1xuICAgICAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ19jbGVhbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY2xlYW4oYXNzZW1ibGVyKSB7XG4gICAgICAgICAgICBpZiAoQ0NfSlNCICYmIENDX05BVElWRVJFTkRFUkVSKSB7XG4gICAgICAgICAgICAgICAgYXNzZW1ibGVyLnJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhc3NlbWJsZXIuX3JlbmRlckNvbXAgPSBudWxsO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEFzc2VtYmxlclBvb2w7XG59KF9wb29sNC5kZWZhdWx0KTtcblxudmFyIHBvb2wgPSBuZXcgQXNzZW1ibGVyUG9vbCgpO1xuX3Bvb2w0LmRlZmF1bHQucmVnaXN0ZXIoJ2Fzc2VtYmxlcicsIHBvb2wpO1xuZXhwb3J0cy5kZWZhdWx0ID0gcG9vbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1GemMyVnRZbXhsY2kxd2IyOXNMbXB6SWwwc0ltNWhiV1Z6SWpwYklsOWhjM05sYldKc1pYSkpaQ0lzSW1kbGRFRnpjMlZ0WW14bGNrbGtJaXdpWVhOelpXMWliR1Z5UTNSdmNpSXNJazlpYW1WamRDSXNJbWRsZEU5M2JsQnliM0JsY25SNVJHVnpZM0pwY0hSdmNpSXNJbDlmWVhOelpXMWliR1Z5U1dSZlh5SXNJa0Z6YzJWdFlteGxjbEJ2YjJ3aUxDSmZjRzl2YkNJc0ltRnpjMlZ0WW14bGNpSXNJbVZ1WVdKc1pXUWlMQ0pEUTE5S1UwSWlMQ0pEUTE5T1FWUkpWa1ZTUlU1RVJWSkZVaUlzSW1SbGMzUnliM2tpTENKcFpDSXNJbU52Ym5OMGNuVmpkRzl5SWl3aWNHOXZiQ0lzSW1OdmRXNTBJaXdpYldGNFUybDZaU0lzSWw5amJHVmhiaUlzSW5CMWMyZ2lMQ0p3YjNBaUxDSnVZVzFsSWl3aVlYTnpaVzFpYkdWeWN5SXNJbWtpTENKc1pXNW5kR2dpTENKeVpYTmxkQ0lzSWw5eVpXNWtaWEpEYjIxd0lpd2lVRzl2YkNJc0luSmxaMmx6ZEdWeUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenRCUVVGQk96czdPenM3T3pzN096czdRVUZGUVN4SlFVRkpRU3hsUVVGbExFTkJRVzVDT3p0QlFVVkJMRk5CUVZORExHTkJRVlFzUTBGQmVVSkRMR0ZCUVhwQ0xFVkJRWGRETzBGQlEzQkRMRkZCUVVrc1EwRkJRME1zVDBGQlQwTXNkMEpCUVZBc1EwRkJaME5HTEdGQlFXaERMRVZCUVN0RExHbENRVUV2UXl4RFFVRk1MRVZCUVhkRk8wRkJRM0JGUVN4elFrRkJZMGNzWlVGQlpDeEhRVUZuUXl4RlFVRkZUQ3haUVVGc1F6dEJRVU5JTzBGQlEwUXNWMEZCVDBVc1kwRkJZMGNzWlVGQmNrSTdRVUZEU0RzN1FVRkZSRHM3T3pzN08wbEJTMDFETEdFN096czdPenM3T3pzN096czdPM2ROUVVOR1F5eExMRWRCUVZFc1JUczdPenM3TkVKQlJVaERMRk1zUlVGQlZ6dEJRVU5hTEdkQ1FVRkpMRU5CUVVOQkxGTkJRVXdzUlVGQlowSTdRVUZEYUVJc1owSkJRVWtzUTBGQlF5eExRVUZMUXl4UFFVRldMRVZCUVcxQ08wRkJRMllzYjBKQlFVbERMRlZCUVZWRExHbENRVUZrTEVWQlFXbERPMEZCUXpkQ1NDdzRRa0ZCVlVrc1QwRkJWaXhKUVVGeFFrb3NWVUZCVlVrc1QwRkJWaXhGUVVGeVFqdEJRVU5JTzBGQlEwUTdRVUZEU0RzN1FVRkZSQ3huUWtGQlNVTXNTMEZCUzFvc1pVRkJaVThzVlVGQlZVMHNWMEZCZWtJc1EwRkJWRHRCUVVOQkxHZENRVUZKUXl4UFFVRlBMRXRCUVV0U0xFdEJRV2hDTzBGQlEwRXNaMEpCUVVrc1EwRkJRMUVzUzBGQlMwWXNSVUZCVEN4RFFVRk1MRVZCUVdVN1FVRkRXRVVzY1VKQlFVdEdMRVZCUVV3c1NVRkJWeXhGUVVGWU8wRkJRMGc3UVVGRFJDeG5Ra0ZCU1N4TFFVRkxSeXhMUVVGTUxFZEJRV0VzUzBGQlMwTXNUMEZCZEVJc1JVRkJLMEk3TzBGQlJTOUNMR2xDUVVGTFF5eE5RVUZNTEVOQlFWbFdMRk5CUVZvN1FVRkRRVThzYVVKQlFVdEdMRVZCUVV3c1JVRkJVMDBzU1VGQlZDeERRVUZqV0N4VFFVRmtPMEZCUTBFc2FVSkJRVXRSTEV0QlFVdzdRVUZEU0RzN096UkNRVVZKWkN4aExFVkJRV1U3UVVGRGFFSXNaMEpCUVVsTkxHdENRVUZLT3p0QlFVVkJMR2RDUVVGSkxFdEJRVXRETEU5QlFWUXNSVUZCYTBJN1FVRkRaQ3h2UWtGQlNVMHNVVUZCVHl4TFFVRkxVaXhMUVVGb1FqdEJRVU5CTEc5Q1FVRkpUU3hMUVVGTFdpeGxRVUZsUXl4aFFVRm1MRU5CUVZRN1FVRkRRVTBzTkVKQlFWbFBMRTFCUVV0R0xFVkJRVXdzUzBGQldVVXNUVUZCUzBZc1JVRkJUQ3hGUVVGVFR5eEhRVUZVTEVWQlFYaENPMEZCUTBnN08wRkJSVVFzWjBKQlFVa3NRMEZCUTFvc1UwRkJUQ3hGUVVGblFqdEJRVU5hUVN3MFFrRkJXU3hKUVVGSlRpeGhRVUZLTEVWQlFWbzdRVUZEU0N4aFFVWkVMRTFCUjBzN1FVRkRSQ3h4UWtGQlMyTXNTMEZCVER0QlFVTklPMEZCUTBRc2JVSkJRVTlTTEZOQlFWQTdRVUZEU0RzN08yZERRVVZSTzBGQlEwd3NaMEpCUVVsRkxGVkJRVlZETEdsQ1FVRmtMRVZCUVdsRE8wRkJRemRDTEc5Q1FVRkpTU3hUUVVGUExFdEJRVXRTTEV0QlFXaENPMEZCUTBFc2NVSkJRVXNzU1VGQlNXTXNTVUZCVkN4SlFVRnBRazRzVFVGQmFrSXNSVUZCZFVJN1FVRkRia0lzZDBKQlFVbFBMR0ZCUVdGUUxFOUJRVXROTEVsQlFVd3NRMEZCYWtJN1FVRkRRU3gzUWtGQlNTeERRVUZEUXl4VlFVRk1MRVZCUVdsQ096dEJRVVZxUWl4NVFrRkJTeXhKUVVGSlF5eEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWxFTEZkQlFWZEZMRTFCUVM5Q0xFVkJRWFZEUkN4SFFVRjJReXhGUVVFMFF6dEJRVU40UTBRc2JVTkJRVmRETEVOQlFWZ3NSVUZCWTFnc1QwRkJaQ3hKUVVGNVFsVXNWMEZCVjBNc1EwRkJXQ3hGUVVGaldDeFBRVUZrTEVWQlFYcENPMEZCUTBnN1FVRkRTanRCUVVOS096dEJRVVZFTEdsQ1FVRkxUQ3hMUVVGTUxFZEJRV0VzUlVGQllqdEJRVU5CTEdsQ1FVRkxVeXhMUVVGTUxFZEJRV0VzUTBGQllqdEJRVU5JT3pzN0swSkJSVTlTTEZNc1JVRkJWenRCUVVObUxHZENRVUZKUlN4VlFVRlZReXhwUWtGQlpDeEZRVUZwUXp0QlFVTTNRa2dzTUVKQlFWVnBRaXhMUVVGV08wRkJRMGc3UVVGRFJHcENMSE5DUVVGVmEwSXNWMEZCVml4SFFVRjNRaXhKUVVGNFFqdEJRVU5JT3pzN08wVkJhRVYxUWtNc1l6czdRVUZ0UlRWQ0xFbEJRVWxhTEU5QlFVOHNTVUZCU1ZRc1lVRkJTaXhGUVVGWU8wRkJRMEZ4UWl4bFFVRkxReXhSUVVGTUxFTkJRV01zVjBGQlpDeEZRVUV5UW1Jc1NVRkJNMEk3YTBKQlEyVkJMRWtpTENKbWFXeGxJam9pWVhOelpXMWliR1Z5TFhCdmIyd3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVUc5dmJDQm1jbTl0SUNjdUxpOTFkR2xzY3k5d2IyOXNKenRjYmx4dWJHVjBJRjloYzNObGJXSnNaWEpKWkNBOUlEQTdYRzVjYm1aMWJtTjBhVzl1SUdkbGRFRnpjMlZ0WW14bGNrbGtJQ2hoYzNObGJXSnNaWEpEZEc5eUtTQjdYRzRnSUNBZ2FXWWdLQ0ZQWW1wbFkzUXVaMlYwVDNkdVVISnZjR1Z5ZEhsRVpYTmpjbWx3ZEc5eUtHRnpjMlZ0WW14bGNrTjBiM0lzSUNkZlgyRnpjMlZ0WW14bGNrbGtYMThuS1NrZ2UxeHVJQ0FnSUNBZ0lDQmhjM05sYldKc1pYSkRkRzl5TGw5ZllYTnpaVzFpYkdWeVNXUmZYeUE5SUNzclgyRnpjMlZ0WW14bGNrbGtPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnWVhOelpXMWliR1Z5UTNSdmNpNWZYMkZ6YzJWdFlteGxja2xrWDE4N1hHNTlYRzVjYmk4cUtseHVJQ29nZTF4dUlDb2dJQ0JoYzNObGJXSnNaWEpmWTNSdmNsOXBaRG9nVzExY2JpQXFJSDFjYmlBcUwxeHVZMnhoYzNNZ1FYTnpaVzFpYkdWeVVHOXZiQ0JsZUhSbGJtUnpJRkJ2YjJ3Z2UxeHVJQ0FnSUY5d2IyOXNJRDBnZTMwN1hHNWNiaUFnSUNCd2RYUWdLR0Z6YzJWdFlteGxjaWtnZTF4dUlDQWdJQ0FnSUNCcFppQW9JV0Z6YzJWdFlteGxjaWtnY21WMGRYSnVPMXh1SUNBZ0lDQWdJQ0JwWmlBb0lYUm9hWE11Wlc1aFlteGxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0VORFgwcFRRaUFtSmlCRFExOU9RVlJKVmtWU1JVNUVSVkpGVWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnpjMlZ0WW14bGNpNWtaWE4wY205NUlDWW1JR0Z6YzJWdFlteGxjaTVrWlhOMGNtOTVLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnNaWFFnYVdRZ1BTQm5aWFJCYzNObGJXSnNaWEpKWkNoaGMzTmxiV0pzWlhJdVkyOXVjM1J5ZFdOMGIzSXBPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2NHOXZiQ0E5SUhSb2FYTXVYM0J2YjJ3N1hHNGdJQ0FnSUNBZ0lHbG1JQ2doY0c5dmJGdHBaRjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJ2YjJ4YmFXUmRJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVZMjkxYm5RZ1BpQjBhR2x6TG0xaGVGTnBlbVVwSUhKbGRIVnlianRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbDlqYkdWaGJpaGhjM05sYldKc1pYSXBPMXh1SUNBZ0lDQWdJQ0J3YjI5c1cybGtYUzV3ZFhOb0tHRnpjMlZ0WW14bGNpazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVkyOTFiblFyS3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JuWlhRZ0tHRnpjMlZ0WW14bGNrTjBiM0lwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJR0Z6YzJWdFlteGxjanRjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG1WdVlXSnNaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCd2IyOXNJRDBnZEdocGN5NWZjRzl2YkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCcFpDQTlJR2RsZEVGemMyVnRZbXhsY2tsa0tHRnpjMlZ0WW14bGNrTjBiM0lwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZWE56WlcxaWJHVnlJRDBnY0c5dmJGdHBaRjBnSmlZZ2NHOXZiRnRwWkYwdWNHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnBaaUFvSVdGemMyVnRZbXhsY2lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWVhOelpXMWliR1Z5SUQwZ2JtVjNJR0Z6YzJWdFlteGxja04wYjNJb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZMjkxYm5RdExUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZWE56WlcxaWJHVnlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHTnNaV0Z5SUNncElIdGNiaUFnSUNBZ0lDQWdhV1lnS0VORFgwcFRRaUFtSmlCRFExOU9RVlJKVmtWU1JVNUVSVkpGVWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElIQnZiMndnUFNCMGFHbHpMbDl3YjI5c08xeHVJQ0FnSUNBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYm1GdFpTQnBiaUJ3YjI5c0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUdGemMyVnRZbXhsY25NZ1BTQndiMjlzVzI1aGJXVmRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaFlYTnpaVzFpYkdWeWN5a2dZMjl1ZEdsdWRXVTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUdGemMyVnRZbXhsY25NdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lYTnpaVzFpYkdWeWMxdHBYUzVrWlhOMGNtOTVJQ1ltSUdGemMyVnRZbXhsY25OYmFWMHVaR1Z6ZEhKdmVTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnZEdocGN5NWZjRzl2YkNBOUlIdDlPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtTnZkVzUwSUQwZ01EdGNiaUFnSUNCOVhHNWNiaUFnSUNCZlkyeGxZVzRnS0dGemMyVnRZbXhsY2lrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvUTBOZlNsTkNJQ1ltSUVORFgwNUJWRWxXUlZKRlRrUkZVa1ZTS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoYzNObGJXSnNaWEl1Y21WelpYUW9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCaGMzTmxiV0pzWlhJdVgzSmxibVJsY2tOdmJYQWdQU0J1ZFd4c08xeHVJQ0FnSUgxY2JuMWNibHh1YkdWMElIQnZiMndnUFNCdVpYY2dRWE56WlcxaWJHVnlVRzl2YkNncE8xeHVVRzl2YkM1eVpXZHBjM1JsY2lnbllYTnpaVzFpYkdWeUp5d2djRzl2YkNrN1hHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCd2IyOXNPMXh1SWwxOSJdfQ==