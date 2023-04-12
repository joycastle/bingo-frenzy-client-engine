(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/core/input-assembler.js';
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
        var _gfx = require('../gfx');
        var _gfx2 = _interopRequireDefault(_gfx);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var InputAssembler = function () {
            function InputAssembler(vb, ib) {
                var pt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _gfx2.default.PT_TRIANGLES;
                _classCallCheck(this, InputAssembler);
                this._vertexBuffer = vb;
                this._indexBuffer = ib;
                this._primitiveType = pt;
                this._start = 0;
                this._count = -1;
            }
            _createClass(InputAssembler, [{
                    key: 'count',
                    get: function get() {
                        if (this._count !== -1) {
                            return this._count;
                        }
                        if (this._indexBuffer) {
                            return this._indexBuffer.count;
                        }
                        if (this._vertexBuffer) {
                            return this._vertexBuffer.count;
                        }
                        return 0;
                    }
                }]);
            return InputAssembler;
        }();
        exports.default = InputAssembler;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LWFzc2VtYmxlci5qcyIsIi9Vc2Vycy9TaGFyZWQvYmluZ29fZnJlbnp5L2VuZ2luZS9jb2NvczJkL3JlbmRlcmVyL2NvcmUvaW5wdXQtYXNzZW1ibGVyLmpzIl0sIm5hbWVzIjpbIklucHV0QXNzZW1ibGVyIiwidmIiLCJpYiIsInB0IiwiZ2Z4IiwiUFRfVFJJQU5HTEVTIiwiX3ZlcnRleEJ1ZmZlciIsIl9pbmRleEJ1ZmZlciIsIl9wcmltaXRpdmVUeXBlIiwiX3N0YXJ0IiwiX2NvdW50IiwiY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRUEsSUFBQSxJQUFBLEdBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQTs7Ozs7Ozs7OztZQUVxQkEsY0FBQUE7WUFDbkIsU0FBQSxjQUFBLENBQVlDLEVBQVosRUFBZ0JDLEVBQWhCLEVBQTJDO0FBQUEsZ0JBQUEsSUFBdkJDLEVBQUFBLEdBQXVCLFNBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsR0FBbEJDLEtBQUFBLENBQUFBLE9BQUFBLENBQUlDLFlBQWMsQ0FBQTtBQUFBLGdCQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsY0FBQSxFQUFBO0FBQUEsZ0JBQ3pDLEtBQUtDLGFBQUwsR0FBcUJMLEVBQXJCLENBRHlDO0FBQUEsZ0JBRXpDLEtBQUtNLFlBQUwsR0FBb0JMLEVBQXBCLENBRnlDO0FBQUEsZ0JBR3pDLEtBQUtNLGNBQUwsR0FBc0JMLEVBQXRCLENBSHlDO0FBQUEsZ0JBSXpDLEtBQUtNLE1BQUwsR0FBYyxDQUFkLENBSnlDO0FBQUEsZ0JBS3pDLEtBQUtDLE1BQUwsR0FBYyxDQUFDLENBQWYsQ0FMeUM7QUFBQTs7O3dDQWMvQjtBQUFBLHdCQUNWLElBQUksS0FBS0EsTUFBTCxLQUFnQixDQUFDLENBQXJCLEVBQXdCO0FBQUEsNEJBQ3RCLE9BQU8sS0FBS0EsTUFBWixDQURzQjtBQUFBLHlCQURkO0FBQUEsd0JBS1YsSUFBSSxLQUFLSCxZQUFULEVBQXVCO0FBQUEsNEJBQ3JCLE9BQU8sS0FBS0EsWUFBTCxDQUFrQkksS0FBekIsQ0FEcUI7QUFBQSx5QkFMYjtBQUFBLHdCQVNWLElBQUksS0FBS0wsYUFBVCxFQUF3QjtBQUFBLDRCQUN0QixPQUFPLEtBQUtBLGFBQUwsQ0FBbUJLLEtBQTFCLENBRHNCO0FBQUEseUJBVGQ7QUFBQSx3QkFhVixPQUFPLENBQVAsQ0FiVTtBQUFBOzs7OzBCQWZPWDs7Ozs7OztZQUNuQixRQUFBLENBQTJDLFFBQUEsQ0FBQSxPQUEzQyxFQUEyQyxTQUEzQyxFQUEyQyxRQUEzQyIsImZpbGUiOiJpbnB1dC1hc3NlbWJsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuaW1wb3J0IGdmeCBmcm9tICcuLi9nZngnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dEFzc2VtYmxlciB7XG4gIGNvbnN0cnVjdG9yKHZiLCBpYiwgcHQgPSBnZnguUFRfVFJJQU5HTEVTKSB7XG4gICAgdGhpcy5fdmVydGV4QnVmZmVyID0gdmI7XG4gICAgdGhpcy5faW5kZXhCdWZmZXIgPSBpYjtcbiAgICB0aGlzLl9wcmltaXRpdmVUeXBlID0gcHQ7XG4gICAgdGhpcy5fc3RhcnQgPSAwO1xuICAgIHRoaXMuX2NvdW50ID0gLTE7XG5cbiAgICAvLyBUT0RPOiBpbnN0YW5jaW5nIGRhdGFcbiAgICAvLyB0aGlzLl9zdHJlYW0gPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBjb3VudCBUaGUgbnVtYmVyIG9mIGluZGljZXMgb3IgdmVydGljZXMgdG8gZGlzcGF0Y2ggaW4gdGhlIGRyYXcgY2FsbC5cbiAgICovXG4gIGdldCBjb3VudCgpIHtcbiAgICBpZiAodGhpcy5fY291bnQgIT09IC0xKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY291bnQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luZGV4QnVmZmVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5kZXhCdWZmZXIuY291bnQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3ZlcnRleEJ1ZmZlcikge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZlcnRleEJ1ZmZlci5jb3VudDtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfVxufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTsgLy8gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbnZhciBfZ2Z4ID0gcmVxdWlyZSgnLi4vZ2Z4Jyk7XG5cbnZhciBfZ2Z4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dmeCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBJbnB1dEFzc2VtYmxlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSW5wdXRBc3NlbWJsZXIodmIsIGliKSB7XG4gICAgdmFyIHB0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBfZ2Z4Mi5kZWZhdWx0LlBUX1RSSUFOR0xFUztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dEFzc2VtYmxlcik7XG5cbiAgICB0aGlzLl92ZXJ0ZXhCdWZmZXIgPSB2YjtcbiAgICB0aGlzLl9pbmRleEJ1ZmZlciA9IGliO1xuICAgIHRoaXMuX3ByaW1pdGl2ZVR5cGUgPSBwdDtcbiAgICB0aGlzLl9zdGFydCA9IDA7XG4gICAgdGhpcy5fY291bnQgPSAtMTtcblxuICAgIC8vIFRPRE86IGluc3RhbmNpbmcgZGF0YVxuICAgIC8vIHRoaXMuX3N0cmVhbSA9IDA7XG4gIH1cblxuICAvKipcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgaW5kaWNlcyBvciB2ZXJ0aWNlcyB0byBkaXNwYXRjaCBpbiB0aGUgZHJhdyBjYWxsLlxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhJbnB1dEFzc2VtYmxlciwgW3tcbiAgICBrZXk6ICdjb3VudCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5fY291bnQgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3VudDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2luZGV4QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRleEJ1ZmZlci5jb3VudDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3ZlcnRleEJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmVydGV4QnVmZmVyLmNvdW50O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW5wdXRBc3NlbWJsZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IElucHV0QXNzZW1ibGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1Y0hWMExXRnpjMlZ0WW14bGNpNXFjeUpkTENKdVlXMWxjeUk2V3lKSmJuQjFkRUZ6YzJWdFlteGxjaUlzSW5aaUlpd2lhV0lpTENKd2RDSXNJbWRtZUNJc0lsQlVYMVJTU1VGT1IweEZVeUlzSWw5MlpYSjBaWGhDZFdabVpYSWlMQ0pmYVc1a1pYaENkV1ptWlhJaUxDSmZjSEpwYldsMGFYWmxWSGx3WlNJc0lsOXpkR0Z5ZENJc0lsOWpiM1Z1ZENJc0ltTnZkVzUwSWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08zRnFRa0ZCUVRzN1FVRkZRVHM3T3pzN096czdTVUZGY1VKQkxHTTdRVUZEYmtJc01FSkJRVmxETEVWQlFWb3NSVUZCWjBKRExFVkJRV2hDTEVWQlFUSkRPMEZCUVVFc1VVRkJka0pETEVWQlFYVkNMSFZGUVVGc1FrTXNZMEZCU1VNc1dVRkJZenM3UVVGQlFUczdRVUZEZWtNc1UwRkJTME1zWVVGQlRDeEhRVUZ4UWt3c1JVRkJja0k3UVVGRFFTeFRRVUZMVFN4WlFVRk1MRWRCUVc5Q1RDeEZRVUZ3UWp0QlFVTkJMRk5CUVV0TkxHTkJRVXdzUjBGQmMwSk1MRVZCUVhSQ08wRkJRMEVzVTBGQlMwMHNUVUZCVEN4SFFVRmpMRU5CUVdRN1FVRkRRU3hUUVVGTFF5eE5RVUZNTEVkQlFXTXNRMEZCUXl4RFFVRm1PenRCUVVWQk8wRkJRMEU3UVVGRFJEczdRVUZGUkRzN096czdPenQzUWtGSFdUdEJRVU5XTEZWQlFVa3NTMEZCUzBFc1RVRkJUQ3hMUVVGblFpeERRVUZETEVOQlFYSkNMRVZCUVhkQ08wRkJRM1JDTEdWQlFVOHNTMEZCUzBFc1RVRkJXanRCUVVORU96dEJRVVZFTEZWQlFVa3NTMEZCUzBnc1dVRkJWQ3hGUVVGMVFqdEJRVU55UWl4bFFVRlBMRXRCUVV0QkxGbEJRVXdzUTBGQmEwSkpMRXRCUVhwQ08wRkJRMFE3TzBGQlJVUXNWVUZCU1N4TFFVRkxUQ3hoUVVGVUxFVkJRWGRDTzBGQlEzUkNMR1ZCUVU4c1MwRkJTMEVzWVVGQlRDeERRVUZ0UWtzc1MwRkJNVUk3UVVGRFJEczdRVUZGUkN4aFFVRlBMRU5CUVZBN1FVRkRSRHM3T3pzN08ydENRVGRDYTBKWUxHTWlMQ0ptYVd4bElqb2lhVzV3ZFhRdFlYTnpaVzFpYkdWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1EyOXdlWEpwWjJoMElDaGpLU0F5TURFM0xUSXdNVGdnV0dsaGJXVnVJRmxoYW1rZ1UyOW1kSGRoY21VZ1EyOHVMQ0JNZEdRdVhHNWNibWx0Y0c5eWRDQm5abmdnWm5KdmJTQW5MaTR2WjJaNEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1NXNXdkWFJCYzNObGJXSnNaWElnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWgyWWl3Z2FXSXNJSEIwSUQwZ1oyWjRMbEJVWDFSU1NVRk9SMHhGVXlrZ2UxeHVJQ0FnSUhSb2FYTXVYM1psY25SbGVFSjFabVpsY2lBOUlIWmlPMXh1SUNBZ0lIUm9hWE11WDJsdVpHVjRRblZtWm1WeUlEMGdhV0k3WEc0Z0lDQWdkR2hwY3k1ZmNISnBiV2wwYVhabFZIbHdaU0E5SUhCME8xeHVJQ0FnSUhSb2FYTXVYM04wWVhKMElEMGdNRHRjYmlBZ0lDQjBhR2x6TGw5amIzVnVkQ0E5SUMweE8xeHVYRzRnSUNBZ0x5OGdWRTlFVHpvZ2FXNXpkR0Z1WTJsdVp5QmtZWFJoWEc0Z0lDQWdMeThnZEdocGN5NWZjM1J5WldGdElEMGdNRHRjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCQWNISnZjR1Z5ZEhrZ2UwNTFiV0psY24wZ1kyOTFiblFnVkdobElHNTFiV0psY2lCdlppQnBibVJwWTJWeklHOXlJSFpsY25ScFkyVnpJSFJ2SUdScGMzQmhkR05vSUdsdUlIUm9aU0JrY21GM0lHTmhiR3d1WEc0Z0lDQXFMMXh1SUNCblpYUWdZMjkxYm5Rb0tTQjdYRzRnSUNBZ2FXWWdLSFJvYVhNdVgyTnZkVzUwSUNFOVBTQXRNU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVgyTnZkVzUwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbDlwYm1SbGVFSjFabVpsY2lrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMmx1WkdWNFFuVm1abVZ5TG1OdmRXNTBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gwYUdsekxsOTJaWEowWlhoQ2RXWm1aWElwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxsOTJaWEowWlhoQ2RXWm1aWEl1WTI5MWJuUTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SURBN1hHNGdJSDFjYm4waVhYMD0iXX0=