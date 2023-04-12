(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/assembler.js';
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
        var _vertexFormat = require('./webgl/vertex-format');
        var _assemblerPool = require('./assembler-pool');
        var _assemblerPool2 = _interopRequireDefault(_assemblerPool);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var Assembler = function () {
            function Assembler() {
                _classCallCheck(this, Assembler);
                this._extendNative && this._extendNative();
            }
            _createClass(Assembler, [
                {
                    key: 'init',
                    value: function init(renderComp) {
                        this._renderComp = renderComp;
                    }
                },
                {
                    key: 'updateRenderData',
                    value: function updateRenderData(comp) {
                    }
                },
                {
                    key: 'fillBuffers',
                    value: function fillBuffers(comp, renderer) {
                    }
                },
                {
                    key: 'getVfmt',
                    value: function getVfmt() {
                        return _vertexFormat.vfmtPosUvColor;
                    }
                }
            ]);
            return Assembler;
        }();
        exports.default = Assembler;
        Assembler.register = function (renderCompCtor, assembler) {
            renderCompCtor.__assembler__ = assembler;
        };
        Assembler.init = function (renderComp) {
            var renderCompCtor = renderComp.constructor;
            var assemblerCtor = renderCompCtor.__assembler__;
            while (!assemblerCtor) {
                renderCompCtor = renderCompCtor.$super;
                if (!renderCompCtor) {
                    cc.warn('Can not find assembler for render component : [' + cc.js.getClassName(renderComp) + ']');
                    return;
                }
                assemblerCtor = renderCompCtor.__assembler__;
            }
            if (assemblerCtor.getConstructor) {
                assemblerCtor = assemblerCtor.getConstructor(renderComp);
            }
            if (!renderComp._assembler || renderComp._assembler.constructor !== assemblerCtor) {
                var assembler = _assemblerPool2.default.get(assemblerCtor);
                assembler.init(renderComp);
                renderComp._assembler = assembler;
            }
        };
        cc.Assembler = Assembler;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2VtYmxlci5qcyIsIi9Vc2Vycy9nYW95YW5nL1dvcmtTcGFjZS9qb3ljYXN0bGUvYmluZ28vY2xpZW50L2JpbmdvL2VuZ2luZS9jb2NvczJkL2NvcmUvcmVuZGVyZXIvYXNzZW1ibGVyLmpzIl0sIm5hbWVzIjpbIkFzc2VtYmxlciIsIl9leHRlbmROYXRpdmUiLCJyZW5kZXJDb21wIiwiX3JlbmRlckNvbXAiLCJjb21wIiwicmVuZGVyZXIiLCJ2Zm10UG9zVXZDb2xvciIsInJlZ2lzdGVyIiwicmVuZGVyQ29tcEN0b3IiLCJhc3NlbWJsZXIiLCJfX2Fzc2VtYmxlcl9fIiwiaW5pdCIsImNvbnN0cnVjdG9yIiwiYXNzZW1ibGVyQ3RvciIsIiRzdXBlciIsImNjIiwid2FybiIsImpzIiwiZ2V0Q2xhc3NOYW1lIiwiZ2V0Q29uc3RydWN0b3IiLCJfYXNzZW1ibGVyIiwiYXNzZW1ibGVyUG9vbCIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztRQUNBLElBQUEsQ0FBQSxPQUFBLEVBQUE7QUFBQSxZQUFBLGlCQUFBLENBQUEsY0FBQSxDQUFBLFVBQUEsRUFBQSxNQUFBLEVBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFEQSxJQUFBLGFBQUEsR0FBQSxPQUFBLENBQUEsdUJBQUEsQ0FBQTtRQUNBLElBQUEsY0FBQSxHQUFBLE9BQUEsQ0FBQSxrQkFBQSxDQUFBOzs7Ozs7Ozs7O1lBRXFCQSxTQUFBQTtZQUNqQixTQUFBLFNBQUEsR0FBZTtBQUFBLGdCQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsU0FBQSxFQUFBO0FBQUEsZ0JBQ1gsS0FBS0MsYUFBTCxJQUFzQixLQUFLQSxhQUFMLEVBQXRCLENBRFc7QUFBQTs7Ozt5Q0FHVEMsWUFBWTtBQUFBLHdCQUNkLEtBQUtDLFdBQUwsR0FBbUJELFVBQW5CLENBRGM7QUFBQTs7OztxREFJQUUsTUFBTTtBQUFBOzs7O2dEQUdYQSxNQUFNQyxVQUFVO0FBQUE7Ozs7OENBR2xCO0FBQUEsd0JBQ1AsT0FBT0MsYUFBQUEsQ0FBQUEsY0FBUCxDQURPO0FBQUE7Ozs7OzBCQWRNTjtRQW9CckJBLFNBQUFBLENBQVVPLFFBQVZQLEdBQXFCLFVBQVVRLGNBQVYsRUFBMEJDLFNBQTFCLEVBQXFDO0FBQUEsWUFDdERELGNBQUFBLENBQWVFLGFBQWZGLEdBQStCQyxTQUEvQkQsQ0FEc0Q7QUFBQSxTQUExRFI7UUFJQUEsU0FBQUEsQ0FBVVcsSUFBVlgsR0FBaUIsVUFBVUUsVUFBVixFQUFzQjtBQUFBLFlBQ25DLElBQUlNLGNBQUFBLEdBQWlCTixVQUFBQSxDQUFXVSxXQUFoQyxDQURtQztBQUFBLFlBRW5DLElBQUlDLGFBQUFBLEdBQWlCTCxjQUFBQSxDQUFlRSxhQUFwQyxDQUZtQztBQUFBLFlBR25DLE9BQU8sQ0FBQ0csYUFBUixFQUF1QjtBQUFBLGdCQUNuQkwsY0FBQUEsR0FBaUJBLGNBQUFBLENBQWVNLE1BQWhDTixDQURtQjtBQUFBLGdCQUVuQixJQUFJLENBQUNBLGNBQUwsRUFBcUI7QUFBQSxvQkFDakJPLEVBQUFBLENBQUdDLElBQUhELENBQUEsb0RBQTBEQSxFQUFBQSxDQUFHRSxFQUFIRixDQUFNRyxZQUFOSCxDQUFtQmIsVUFBbkJhLENBQTFELEdBQUEsR0FBQUEsRUFEaUI7QUFBQSxvQkFFakIsT0FGaUI7QUFBQSxpQkFGRjtBQUFBLGdCQU1uQkYsYUFBQUEsR0FBaUJMLGNBQUFBLENBQWVFLGFBQWhDRyxDQU5tQjtBQUFBLGFBSFk7QUFBQSxZQVduQyxJQUFJQSxhQUFBQSxDQUFjTSxjQUFsQixFQUFrQztBQUFBLGdCQUM5Qk4sYUFBQUEsR0FBZ0JBLGFBQUFBLENBQWNNLGNBQWROLENBQTZCWCxVQUE3QlcsQ0FBaEJBLENBRDhCO0FBQUEsYUFYQztBQUFBLFlBZW5DLElBQUksQ0FBQ1gsVUFBQUEsQ0FBV2tCLFVBQVosSUFBMEJsQixVQUFBQSxDQUFXa0IsVUFBWGxCLENBQXNCVSxXQUF0QlYsS0FBc0NXLGFBQXBFLEVBQW1GO0FBQUEsZ0JBQy9FLElBQUlKLFNBQUFBLEdBQVlZLGVBQUFBLENBQUFBLE9BQUFBLENBQWNDLEdBQWRELENBQWtCUixhQUFsQlEsQ0FBaEIsQ0FEK0U7QUFBQSxnQkFFL0VaLFNBQUFBLENBQVVFLElBQVZGLENBQWVQLFVBQWZPLEVBRitFO0FBQUEsZ0JBRy9FUCxVQUFBQSxDQUFXa0IsVUFBWGxCLEdBQXdCTyxTQUF4QlAsQ0FIK0U7QUFBQSxhQWZoRDtBQUFBLFNBQXZDRjtRQXNCQWUsRUFBQUEsQ0FBR2YsU0FBSGUsR0FBZWYsU0FBZmUiLCJmaWxlIjoiYXNzZW1ibGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmZtdFBvc1V2Q29sb3IgfSBmcm9tICcuL3dlYmdsL3ZlcnRleC1mb3JtYXQnO1xuaW1wb3J0IGFzc2VtYmxlclBvb2wgZnJvbSAnLi9hc3NlbWJsZXItcG9vbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2VtYmxlciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLl9leHRlbmROYXRpdmUgJiYgdGhpcy5fZXh0ZW5kTmF0aXZlKCk7XG4gICAgfVxuICAgIGluaXQgKHJlbmRlckNvbXApIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyQ29tcCA9IHJlbmRlckNvbXA7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZVJlbmRlckRhdGEgKGNvbXApIHtcbiAgICB9XG5cbiAgICBmaWxsQnVmZmVycyAoY29tcCwgcmVuZGVyZXIpIHtcbiAgICB9XG4gICAgXG4gICAgZ2V0VmZtdCAoKSB7XG4gICAgICAgIHJldHVybiB2Zm10UG9zVXZDb2xvcjtcbiAgICB9XG59XG5cblxuQXNzZW1ibGVyLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHJlbmRlckNvbXBDdG9yLCBhc3NlbWJsZXIpIHtcbiAgICByZW5kZXJDb21wQ3Rvci5fX2Fzc2VtYmxlcl9fID0gYXNzZW1ibGVyO1xufTtcblxuQXNzZW1ibGVyLmluaXQgPSBmdW5jdGlvbiAocmVuZGVyQ29tcCkge1xuICAgIGxldCByZW5kZXJDb21wQ3RvciA9IHJlbmRlckNvbXAuY29uc3RydWN0b3I7XG4gICAgbGV0IGFzc2VtYmxlckN0b3IgPSAgcmVuZGVyQ29tcEN0b3IuX19hc3NlbWJsZXJfXztcbiAgICB3aGlsZSAoIWFzc2VtYmxlckN0b3IpIHtcbiAgICAgICAgcmVuZGVyQ29tcEN0b3IgPSByZW5kZXJDb21wQ3Rvci4kc3VwZXI7XG4gICAgICAgIGlmICghcmVuZGVyQ29tcEN0b3IpIHtcbiAgICAgICAgICAgIGNjLndhcm4oYENhbiBub3QgZmluZCBhc3NlbWJsZXIgZm9yIHJlbmRlciBjb21wb25lbnQgOiBbJHtjYy5qcy5nZXRDbGFzc05hbWUocmVuZGVyQ29tcCl9XWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFzc2VtYmxlckN0b3IgPSAgcmVuZGVyQ29tcEN0b3IuX19hc3NlbWJsZXJfXztcbiAgICB9XG4gICAgaWYgKGFzc2VtYmxlckN0b3IuZ2V0Q29uc3RydWN0b3IpIHtcbiAgICAgICAgYXNzZW1ibGVyQ3RvciA9IGFzc2VtYmxlckN0b3IuZ2V0Q29uc3RydWN0b3IocmVuZGVyQ29tcCk7XG4gICAgfVxuICAgIFxuICAgIGlmICghcmVuZGVyQ29tcC5fYXNzZW1ibGVyIHx8IHJlbmRlckNvbXAuX2Fzc2VtYmxlci5jb25zdHJ1Y3RvciAhPT0gYXNzZW1ibGVyQ3Rvcikge1xuICAgICAgICBsZXQgYXNzZW1ibGVyID0gYXNzZW1ibGVyUG9vbC5nZXQoYXNzZW1ibGVyQ3Rvcik7XG4gICAgICAgIGFzc2VtYmxlci5pbml0KHJlbmRlckNvbXApO1xuICAgICAgICByZW5kZXJDb21wLl9hc3NlbWJsZXIgPSBhc3NlbWJsZXI7XG4gICAgfVxufTtcblxuY2MuQXNzZW1ibGVyID0gQXNzZW1ibGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfdmVydGV4Rm9ybWF0ID0gcmVxdWlyZSgnLi93ZWJnbC92ZXJ0ZXgtZm9ybWF0Jyk7XG5cbnZhciBfYXNzZW1ibGVyUG9vbCA9IHJlcXVpcmUoJy4vYXNzZW1ibGVyLXBvb2wnKTtcblxudmFyIF9hc3NlbWJsZXJQb29sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VtYmxlclBvb2wpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQXNzZW1ibGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFzc2VtYmxlcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFzc2VtYmxlcik7XG5cbiAgICAgICAgdGhpcy5fZXh0ZW5kTmF0aXZlICYmIHRoaXMuX2V4dGVuZE5hdGl2ZSgpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhBc3NlbWJsZXIsIFt7XG4gICAgICAgIGtleTogJ2luaXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChyZW5kZXJDb21wKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJDb21wID0gcmVuZGVyQ29tcDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndXBkYXRlUmVuZGVyRGF0YScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVSZW5kZXJEYXRhKGNvbXApIHt9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdmaWxsQnVmZmVycycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmaWxsQnVmZmVycyhjb21wLCByZW5kZXJlcikge31cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFZmbXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmZtdCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdmVydGV4Rm9ybWF0LnZmbXRQb3NVdkNvbG9yO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEFzc2VtYmxlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQXNzZW1ibGVyO1xuXG5cbkFzc2VtYmxlci5yZWdpc3RlciA9IGZ1bmN0aW9uIChyZW5kZXJDb21wQ3RvciwgYXNzZW1ibGVyKSB7XG4gICAgcmVuZGVyQ29tcEN0b3IuX19hc3NlbWJsZXJfXyA9IGFzc2VtYmxlcjtcbn07XG5cbkFzc2VtYmxlci5pbml0ID0gZnVuY3Rpb24gKHJlbmRlckNvbXApIHtcbiAgICB2YXIgcmVuZGVyQ29tcEN0b3IgPSByZW5kZXJDb21wLmNvbnN0cnVjdG9yO1xuICAgIHZhciBhc3NlbWJsZXJDdG9yID0gcmVuZGVyQ29tcEN0b3IuX19hc3NlbWJsZXJfXztcbiAgICB3aGlsZSAoIWFzc2VtYmxlckN0b3IpIHtcbiAgICAgICAgcmVuZGVyQ29tcEN0b3IgPSByZW5kZXJDb21wQ3Rvci4kc3VwZXI7XG4gICAgICAgIGlmICghcmVuZGVyQ29tcEN0b3IpIHtcbiAgICAgICAgICAgIGNjLndhcm4oJ0NhbiBub3QgZmluZCBhc3NlbWJsZXIgZm9yIHJlbmRlciBjb21wb25lbnQgOiBbJyArIGNjLmpzLmdldENsYXNzTmFtZShyZW5kZXJDb21wKSArICddJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXNzZW1ibGVyQ3RvciA9IHJlbmRlckNvbXBDdG9yLl9fYXNzZW1ibGVyX187XG4gICAgfVxuICAgIGlmIChhc3NlbWJsZXJDdG9yLmdldENvbnN0cnVjdG9yKSB7XG4gICAgICAgIGFzc2VtYmxlckN0b3IgPSBhc3NlbWJsZXJDdG9yLmdldENvbnN0cnVjdG9yKHJlbmRlckNvbXApO1xuICAgIH1cblxuICAgIGlmICghcmVuZGVyQ29tcC5fYXNzZW1ibGVyIHx8IHJlbmRlckNvbXAuX2Fzc2VtYmxlci5jb25zdHJ1Y3RvciAhPT0gYXNzZW1ibGVyQ3Rvcikge1xuICAgICAgICB2YXIgYXNzZW1ibGVyID0gX2Fzc2VtYmxlclBvb2wyLmRlZmF1bHQuZ2V0KGFzc2VtYmxlckN0b3IpO1xuICAgICAgICBhc3NlbWJsZXIuaW5pdChyZW5kZXJDb21wKTtcbiAgICAgICAgcmVuZGVyQ29tcC5fYXNzZW1ibGVyID0gYXNzZW1ibGVyO1xuICAgIH1cbn07XG5cbmNjLkFzc2VtYmxlciA9IEFzc2VtYmxlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1GemMyVnRZbXhsY2k1cWN5SmRMQ0p1WVcxbGN5STZXeUpCYzNObGJXSnNaWElpTENKZlpYaDBaVzVrVG1GMGFYWmxJaXdpY21WdVpHVnlRMjl0Y0NJc0lsOXlaVzVrWlhKRGIyMXdJaXdpWTI5dGNDSXNJbkpsYm1SbGNtVnlJaXdpZG1adGRGQnZjMVYyUTI5c2IzSWlMQ0p5WldkcGMzUmxjaUlzSW5KbGJtUmxja052YlhCRGRHOXlJaXdpWVhOelpXMWliR1Z5SWl3aVgxOWhjM05sYldKc1pYSmZYeUlzSW1sdWFYUWlMQ0pqYjI1emRISjFZM1J2Y2lJc0ltRnpjMlZ0WW14bGNrTjBiM0lpTENJa2MzVndaWElpTENKall5SXNJbmRoY200aUxDSnFjeUlzSW1kbGRFTnNZWE56VG1GdFpTSXNJbWRsZEVOdmJuTjBjblZqZEc5eUlpd2lYMkZ6YzJWdFlteGxjaUlzSW1GemMyVnRZbXhsY2xCdmIyd2lMQ0puWlhRaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenRCUVVGQk96dEJRVU5CT3pzN096czdPenRKUVVWeFFrRXNVenRCUVVOcVFpeDVRa0ZCWlR0QlFVRkJPenRCUVVOWUxHRkJRVXRETEdGQlFVd3NTVUZCYzBJc1MwRkJTMEVzWVVGQlRDeEZRVUYwUWp0QlFVTklPenM3T3paQ1FVTkxReXhWTEVWQlFWazdRVUZEWkN4cFFrRkJTME1zVjBGQlRDeEhRVUZ0UWtRc1ZVRkJia0k3UVVGRFNEczdPM2xEUVVWcFFrVXNTU3hGUVVGTkxFTkJRM1pDT3pzN2IwTkJSVmxCTEVrc1JVRkJUVU1zVVN4RlFVRlZMRU5CUXpWQ096czdhME5CUlZVN1FVRkRVQ3h0UWtGQlQwTXNORUpCUVZBN1FVRkRTRHM3T3pzN08ydENRV2hDWjBKT0xGTTdPenRCUVc5Q2NrSkJMRlZCUVZWUExGRkJRVllzUjBGQmNVSXNWVUZCVlVNc1kwRkJWaXhGUVVFd1FrTXNVMEZCTVVJc1JVRkJjVU03UVVGRGRFUkVMRzFDUVVGbFJTeGhRVUZtTEVkQlFTdENSQ3hUUVVFdlFqdEJRVU5JTEVOQlJrUTdPMEZCU1VGVUxGVkJRVlZYTEVsQlFWWXNSMEZCYVVJc1ZVRkJWVlFzVlVGQlZpeEZRVUZ6UWp0QlFVTnVReXhSUVVGSlRTeHBRa0ZCYVVKT0xGZEJRVmRWTEZkQlFXaERPMEZCUTBFc1VVRkJTVU1zWjBKQlFXbENUQ3hsUVVGbFJTeGhRVUZ3UXp0QlFVTkJMRmRCUVU4c1EwRkJRMGNzWVVGQlVpeEZRVUYxUWp0QlFVTnVRa3dzZVVKQlFXbENRU3hsUVVGbFRTeE5RVUZvUXp0QlFVTkJMRmxCUVVrc1EwRkJRMDRzWTBGQlRDeEZRVUZ4UWp0QlFVTnFRazhzWlVGQlIwTXNTVUZCU0N4eFJFRkJNRVJFTEVkQlFVZEZMRVZCUVVnc1EwRkJUVU1zV1VGQlRpeERRVUZ0UW1oQ0xGVkJRVzVDTEVOQlFURkVPMEZCUTBFN1FVRkRTRHRCUVVORVZ5eDNRa0ZCYVVKTUxHVkJRV1ZGTEdGQlFXaERPMEZCUTBnN1FVRkRSQ3hSUVVGSlJ5eGpRVUZqVFN4alFVRnNRaXhGUVVGclF6dEJRVU01UWs0c2QwSkJRV2RDUVN4alFVRmpUU3hqUVVGa0xFTkJRVFpDYWtJc1ZVRkJOMElzUTBGQmFFSTdRVUZEU0RzN1FVRkZSQ3hSUVVGSkxFTkJRVU5CTEZkQlFWZHJRaXhWUVVGYUxFbEJRVEJDYkVJc1YwRkJWMnRDTEZWQlFWZ3NRMEZCYzBKU0xGZEJRWFJDTEV0QlFYTkRReXhoUVVGd1JTeEZRVUZ0Ump0QlFVTXZSU3haUVVGSlNpeFpRVUZaV1N4M1FrRkJZME1zUjBGQlpDeERRVUZyUWxRc1lVRkJiRUlzUTBGQmFFSTdRVUZEUVVvc2EwSkJRVlZGTEVsQlFWWXNRMEZCWlZRc1ZVRkJaanRCUVVOQlFTeHRRa0ZCVjJ0Q0xGVkJRVmdzUjBGQmQwSllMRk5CUVhoQ08wRkJRMGc3UVVGRFNpeERRWEJDUkRzN1FVRnpRa0ZOTEVkQlFVZG1MRk5CUVVnc1IwRkJaVUVzVTBGQlppSXNJbVpwYkdVaU9pSmhjM05sYldKc1pYSXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCMlptMTBVRzl6VlhaRGIyeHZjaUI5SUdaeWIyMGdKeTR2ZDJWaVoyd3ZkbVZ5ZEdWNExXWnZjbTFoZENjN1hHNXBiWEJ2Y25RZ1lYTnpaVzFpYkdWeVVHOXZiQ0JtY205dElDY3VMMkZ6YzJWdFlteGxjaTF3YjI5c0p6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1FYTnpaVzFpYkdWeUlIdGNiaUFnSUNCamIyNXpkSEoxWTNSdmNpQW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMlY0ZEdWdVpFNWhkR2wyWlNBbUppQjBhR2x6TGw5bGVIUmxibVJPWVhScGRtVW9LVHRjYmlBZ0lDQjlYRzRnSUNBZ2FXNXBkQ0FvY21WdVpHVnlRMjl0Y0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5eVpXNWtaWEpEYjIxd0lEMGdjbVZ1WkdWeVEyOXRjRHRjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnZFhCa1lYUmxVbVZ1WkdWeVJHRjBZU0FvWTI5dGNDa2dlMXh1SUNBZ0lIMWNibHh1SUNBZ0lHWnBiR3hDZFdabVpYSnpJQ2hqYjIxd0xDQnlaVzVrWlhKbGNpa2dlMXh1SUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0JuWlhSV1ptMTBJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhabWJYUlFiM05WZGtOdmJHOXlPMXh1SUNBZ0lIMWNibjFjYmx4dVhHNUJjM05sYldKc1pYSXVjbVZuYVhOMFpYSWdQU0JtZFc1amRHbHZiaUFvY21WdVpHVnlRMjl0Y0VOMGIzSXNJR0Z6YzJWdFlteGxjaWtnZTF4dUlDQWdJSEpsYm1SbGNrTnZiWEJEZEc5eUxsOWZZWE56WlcxaWJHVnlYMThnUFNCaGMzTmxiV0pzWlhJN1hHNTlPMXh1WEc1QmMzTmxiV0pzWlhJdWFXNXBkQ0E5SUdaMWJtTjBhVzl1SUNoeVpXNWtaWEpEYjIxd0tTQjdYRzRnSUNBZ2JHVjBJSEpsYm1SbGNrTnZiWEJEZEc5eUlEMGdjbVZ1WkdWeVEyOXRjQzVqYjI1emRISjFZM1J2Y2p0Y2JpQWdJQ0JzWlhRZ1lYTnpaVzFpYkdWeVEzUnZjaUE5SUNCeVpXNWtaWEpEYjIxd1EzUnZjaTVmWDJGemMyVnRZbXhsY2w5Zk8xeHVJQ0FnSUhkb2FXeGxJQ2doWVhOelpXMWliR1Z5UTNSdmNpa2dlMXh1SUNBZ0lDQWdJQ0J5Wlc1a1pYSkRiMjF3UTNSdmNpQTlJSEpsYm1SbGNrTnZiWEJEZEc5eUxpUnpkWEJsY2p0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0Z5Wlc1a1pYSkRiMjF3UTNSdmNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyTXVkMkZ5YmloZ1EyRnVJRzV2ZENCbWFXNWtJR0Z6YzJWdFlteGxjaUJtYjNJZ2NtVnVaR1Z5SUdOdmJYQnZibVZ1ZENBNklGc2tlMk5qTG1wekxtZGxkRU5zWVhOelRtRnRaU2h5Wlc1a1pYSkRiMjF3S1gxZFlDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1lYTnpaVzFpYkdWeVEzUnZjaUE5SUNCeVpXNWtaWEpEYjIxd1EzUnZjaTVmWDJGemMyVnRZbXhsY2w5Zk8xeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb1lYTnpaVzFpYkdWeVEzUnZjaTVuWlhSRGIyNXpkSEoxWTNSdmNpa2dlMXh1SUNBZ0lDQWdJQ0JoYzNObGJXSnNaWEpEZEc5eUlEMGdZWE56WlcxaWJHVnlRM1J2Y2k1blpYUkRiMjV6ZEhKMVkzUnZjaWh5Wlc1a1pYSkRiMjF3S1R0Y2JpQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ2FXWWdLQ0Z5Wlc1a1pYSkRiMjF3TGw5aGMzTmxiV0pzWlhJZ2ZId2djbVZ1WkdWeVEyOXRjQzVmWVhOelpXMWliR1Z5TG1OdmJuTjBjblZqZEc5eUlDRTlQU0JoYzNObGJXSnNaWEpEZEc5eUtTQjdYRzRnSUNBZ0lDQWdJR3hsZENCaGMzTmxiV0pzWlhJZ1BTQmhjM05sYldKc1pYSlFiMjlzTG1kbGRDaGhjM05sYldKc1pYSkRkRzl5S1R0Y2JpQWdJQ0FnSUNBZ1lYTnpaVzFpYkdWeUxtbHVhWFFvY21WdVpHVnlRMjl0Y0NrN1hHNGdJQ0FnSUNBZ0lISmxibVJsY2tOdmJYQXVYMkZ6YzJWdFlteGxjaUE5SUdGemMyVnRZbXhsY2p0Y2JpQWdJQ0I5WEc1OU8xeHVYRzVqWXk1QmMzTmxiV0pzWlhJZ1BTQkJjM05sYldKc1pYSTdYRzRpWFgwPSJdfQ==