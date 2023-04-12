(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/utils/pool.js';
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
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var Pool = function () {
            function Pool() {
                _classCallCheck(this, Pool);
                this.enabled = false;
                this.count = 0;
                this.maxSize = 1024;
            }
            _createClass(Pool, [
                {
                    key: 'get',
                    value: function get() {
                    }
                },
                {
                    key: 'put',
                    value: function put() {
                    }
                },
                {
                    key: 'clear',
                    value: function clear() {
                    }
                }
            ]);
            return Pool;
        }();
        exports.default = Pool;
        cc.pool = {};
        Pool.register = function (name, pool) {
            cc.pool[name] = pool;
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvb2wuanMiLCIvVXNlcnMvU2hhcmVkL2JpbmdvX2ZyZW56eS9lbmdpbmUvY29jb3MyZC9jb3JlL3V0aWxzL3Bvb2wuanMiXSwibmFtZXMiOlsiUG9vbCIsImVuYWJsZWQiLCJjb3VudCIsIm1heFNpemUiLCJjYyIsInBvb2wiLCJyZWdpc3RlciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUNxQkEsSUFBQUE7OztxQkFDakJDLFVBQVU7cUJBQ1ZDLFFBQVE7cUJBQ1JDLFVBQVU7Ozs7OzBDQUVIO0FBQUE7Ozs7MENBR0E7QUFBQTs7Ozs0Q0FHRTtBQUFBOzs7OzswQkFYUUg7UUFnQnJCSSxFQUFBQSxDQUFHQyxJQUFIRCxHQUFVLEVBQVZBO1FBRUFKLElBQUFBLENBQUtNLFFBQUxOLEdBQWdCLFVBQVVPLElBQVYsRUFBZ0JGLElBQWhCLEVBQXNCO0FBQUEsWUFDbENELEVBQUFBLENBQUdDLElBQUhELENBQVFHLElBQVJILElBQWdCQyxJQUFoQkQsQ0FEa0M7QUFBQSxTQUF0Q0o7Ozs7UUFqQmMsUUFBQSxpQkFBQSxXQUFBLFVBQUE7V0FFQTtBQUFBOztXQUFBO0FBQUEiLCJmaWxlIjoicG9vbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9vbCB7XG4gICAgZW5hYmxlZCA9IGZhbHNlO1xuICAgIGNvdW50ID0gMDtcbiAgICBtYXhTaXplID0gMTAyNDtcblxuICAgIGdldCAoKSB7XG5cbiAgICB9XG4gICAgcHV0ICgpIHtcblxuICAgIH1cbiAgICBjbGVhciAoKSB7XG5cbiAgICB9XG59XG5cbmNjLnBvb2wgPSB7fTtcblxuUG9vbC5yZWdpc3RlciA9IGZ1bmN0aW9uIChuYW1lLCBwb29sKSB7XG4gICAgY2MucG9vbFtuYW1lXSA9IHBvb2w7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUG9vbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQb29sKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9vbCk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICB0aGlzLm1heFNpemUgPSAxMDI0O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhQb29sLCBbe1xuICAgICAgICBrZXk6IFwiZ2V0XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoKSB7fVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInB1dFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHV0KCkge31cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJjbGVhclwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoKSB7fVxuICAgIH1dKTtcblxuICAgIHJldHVybiBQb29sO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQb29sO1xuXG5cbmNjLnBvb2wgPSB7fTtcblxuUG9vbC5yZWdpc3RlciA9IGZ1bmN0aW9uIChuYW1lLCBwb29sKSB7XG4gICAgY2MucG9vbFtuYW1lXSA9IHBvb2w7XG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluQnZiMnd1YW5NaVhTd2libUZ0WlhNaU9sc2lVRzl2YkNJc0ltVnVZV0pzWldRaUxDSmpiM1Z1ZENJc0ltMWhlRk5wZW1VaUxDSmpZeUlzSW5CdmIyd2lMQ0p5WldkcGMzUmxjaUlzSW01aGJXVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN1NVRkRjVUpCTEVrN096czdZVUZEYWtKRExFOHNSMEZCVlN4TE8yRkJRMVpETEVzc1IwRkJVU3hETzJGQlExSkRMRThzUjBGQlZTeEpPenM3T3pzNFFrRkZTQ3hEUVVWT096czdPRUpCUTAwc1EwRkZUanM3TzJkRFFVTlJMRU5CUlZJN096czdPenRyUWtGaVowSklMRWs3T3p0QlFXZENja0pKTEVkQlFVZERMRWxCUVVnc1IwRkJWU3hGUVVGV096dEJRVVZCVEN4TFFVRkxUU3hSUVVGTUxFZEJRV2RDTEZWQlFWVkRMRWxCUVZZc1JVRkJaMEpHTEVsQlFXaENMRVZCUVhOQ08wRkJRMnhEUkN4UFFVRkhReXhKUVVGSUxFTkJRVkZGTEVsQlFWSXNTVUZCWjBKR0xFbEJRV2hDTzBGQlEwZ3NRMEZHUkNJc0ltWnBiR1VpT2lKd2IyOXNMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJRYjI5c0lIdGNiaUFnSUNCbGJtRmliR1ZrSUQwZ1ptRnNjMlU3WEc0Z0lDQWdZMjkxYm5RZ1BTQXdPMXh1SUNBZ0lHMWhlRk5wZW1VZ1BTQXhNREkwTzF4dVhHNGdJQ0FnWjJWMElDZ3BJSHRjYmx4dUlDQWdJSDFjYmlBZ0lDQndkWFFnS0NrZ2UxeHVYRzRnSUNBZ2ZWeHVJQ0FnSUdOc1pXRnlJQ2dwSUh0Y2JseHVJQ0FnSUgxY2JuMWNibHh1WTJNdWNHOXZiQ0E5SUh0OU8xeHVYRzVRYjI5c0xuSmxaMmx6ZEdWeUlEMGdablZ1WTNScGIyNGdLRzVoYldVc0lIQnZiMndwSUh0Y2JpQWdJQ0JqWXk1d2IyOXNXMjVoYldWZElEMGdjRzl2YkR0Y2JuMWNiaUpkZlE9PSJdfQ==