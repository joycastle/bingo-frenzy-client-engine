(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/canvas/renderers/render-data.js';
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
        var RenderData = function () {
            function RenderData() {
                _classCallCheck(this, RenderData);
                this.vertices = [];
            }
            _createClass(RenderData, [{
                    key: 'dataLength',
                    get: function get() {
                        return this.vertices.length;
                    },
                    set: function set(v) {
                        var old = this.vertices.length;
                        this.vertices.length = v;
                        for (var i = old; i < v; i++) {
                            this.vertices[i] = {
                                x: 0,
                                y: 0,
                                u: 0,
                                v: 0
                            };
                        }
                    }
                }]);
            return RenderData;
        }();
        exports.default = RenderData;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlci1kYXRhLmpzIiwiL1VzZXJzL2dhb3lhbmcvV29ya1NwYWNlL2pveWNhc3RsZS9iaW5nby9jbGllbnQvYmluZ28vZW5naW5lL2NvY29zMmQvY29yZS9yZW5kZXJlci9jYW52YXMvcmVuZGVyZXJzL3JlbmRlci1kYXRhLmpzIl0sIm5hbWVzIjpbIlJlbmRlckRhdGEiLCJ2ZXJ0aWNlcyIsImxlbmd0aCIsInYiLCJvbGQiLCJpIiwieCIsInkiLCJ1Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1FBRUUsSUFBZSxDQUFBLE9BQWYsRUFBZTtBQUFBLFlBQUEsaUJBQUEsQ0FBQSxjQUFBLENBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFESUEsVUFBQUE7WUFDbkIsU0FBQSxVQUFBLEdBQWU7QUFBQSxnQkFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLFVBQUEsRUFBQTtBQUFBLGdCQUNiLEtBQUtDLFFBQUwsR0FBZ0IsRUFBaEIsQ0FEYTtBQUFBOzs7d0NBSUc7QUFBQSx3QkFDZCxPQUFPLEtBQUtBLFFBQUwsQ0FBY0MsTUFBckIsQ0FEYztBQUFBO3NDQUdGQyxHQUFHO0FBQUEsd0JBQ2pCLElBQUlDLEdBQUFBLEdBQU0sS0FBS0gsUUFBTCxDQUFjQyxNQUF4QixDQURpQjtBQUFBLHdCQUVqQixLQUFLRCxRQUFMLENBQWNDLE1BQWQsR0FBdUJDLENBQXZCLENBRmlCO0FBQUEsd0JBR2pCLEtBQUssSUFBSUUsQ0FBQUEsR0FBSUQsR0FBUixDQUFMLENBQWtCQyxDQUFBQSxHQUFJRixDQUF0QixFQUF5QkUsQ0FBQUEsRUFBekIsRUFBOEI7QUFBQSw0QkFDMUIsS0FBS0osUUFBTCxDQUFjSSxDQUFkLElBQW1CO0FBQUEsZ0NBQ2ZDLENBQUFBLEVBQUcsQ0FEWTtBQUFBLGdDQUVmQyxDQUFBQSxFQUFHLENBRlk7QUFBQSxnQ0FHZkMsQ0FBQUEsRUFBRyxDQUhZO0FBQUEsZ0NBSWZMLENBQUFBLEVBQUcsQ0FKWTtBQUFBLDZCQUFuQixDQUQwQjtBQUFBLHlCQUhiO0FBQUE7Ozs7MEJBUkFIOzs7O1FBRUQsUUFBQSxDQUFoQixRQUFBLENBQUEsT0FBZ0IsRUFBaEIsU0FBZ0IsRUFBaEIsUUFBZ0IiLCJmaWxlIjoicmVuZGVyLWRhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlckRhdGEge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xuICB9XG5cbiAgZ2V0IGRhdGFMZW5ndGggKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmVydGljZXMubGVuZ3RoO1xuICB9XG4gIHNldCBkYXRhTGVuZ3RoICh2KSB7XG4gICAgbGV0IG9sZCA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xuICAgIHRoaXMudmVydGljZXMubGVuZ3RoID0gdjtcbiAgICBmb3IgKGxldCBpID0gb2xkOyBpIDwgdjsgaSsrKSB7XG4gICAgICAgIHRoaXMudmVydGljZXNbaV0gPSB7XG4gICAgICAgICAgICB4OiAwLjAsXG4gICAgICAgICAgICB5OiAwLjAsXG4gICAgICAgICAgICB1OiAwLjAsXG4gICAgICAgICAgICB2OiAwLjAsXG4gICAgICAgIH07XG4gICAgfVxuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUmVuZGVyRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZW5kZXJEYXRhKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVuZGVyRGF0YSk7XG5cbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSZW5kZXJEYXRhLCBbe1xuICAgICAgICBrZXk6IFwiZGF0YUxlbmd0aFwiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgICAgICAgdmFyIG9sZCA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5sZW5ndGggPSB2O1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IG9sZDsgaSA8IHY7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMudmVydGljZXNbaV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMC4wLFxuICAgICAgICAgICAgICAgICAgICB1OiAwLjAsXG4gICAgICAgICAgICAgICAgICAgIHY6IDAuMFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUmVuZGVyRGF0YTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVuZGVyRGF0YTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbkpsYm1SbGNpMWtZWFJoTG1weklsMHNJbTVoYldWeklqcGJJbEpsYm1SbGNrUmhkR0VpTENKMlpYSjBhV05sY3lJc0lteGxibWQwYUNJc0luWWlMQ0p2YkdRaUxDSnBJaXdpZUNJc0lua2lMQ0oxSWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPMGxCUTNGQ1FTeFZPMEZCUTI1Q0xEQkNRVUZsTzBGQlFVRTdPMEZCUTJJc1lVRkJTME1zVVVGQlRDeEhRVUZuUWl4RlFVRm9RanRCUVVORU96czdPelJDUVVWcFFqdEJRVU5rTEcxQ1FVRlBMRXRCUVV0QkxGRkJRVXdzUTBGQlkwTXNUVUZCY2tJN1FVRkRTQ3hUT3pCQ1FVTmxReXhETEVWQlFVYzdRVUZEYWtJc1owSkJRVWxETEUxQlFVMHNTMEZCUzBnc1VVRkJUQ3hEUVVGalF5eE5RVUY0UWp0QlFVTkJMR2xDUVVGTFJDeFJRVUZNTEVOQlFXTkRMRTFCUVdRc1IwRkJkVUpETEVOQlFYWkNPMEZCUTBFc2FVSkJRVXNzU1VGQlNVVXNTVUZCU1VRc1IwRkJZaXhGUVVGclFrTXNTVUZCU1VZc1EwRkJkRUlzUlVGQmVVSkZMRWRCUVhwQ0xFVkJRVGhDTzBGQlF6RkNMSEZDUVVGTFNpeFJRVUZNTEVOQlFXTkpMRU5CUVdRc1NVRkJiVUk3UVVGRFprTXNkVUpCUVVjc1IwRkVXVHRCUVVWbVF5eDFRa0ZCUnl4SFFVWlpPMEZCUjJaRExIVkNRVUZITEVkQlNGazdRVUZKWmt3c2RVSkJRVWM3UVVGS1dTeHBRa0ZCYmtJN1FVRk5TRHRCUVVOR096czdPenM3YTBKQmJrSnJRa2dzVlNJc0ltWnBiR1VpT2lKeVpXNWtaWEl0WkdGMFlTNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdVbVZ1WkdWeVJHRjBZU0I3WEc0Z0lHTnZibk4wY25WamRHOXlJQ2dwSUh0Y2JpQWdJQ0IwYUdsekxuWmxjblJwWTJWeklEMGdXMTA3WEc0Z0lIMWNibHh1SUNCblpYUWdaR0YwWVV4bGJtZDBhQ0FvS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NTJaWEowYVdObGN5NXNaVzVuZEdnN1hHNGdJSDFjYmlBZ2MyVjBJR1JoZEdGTVpXNW5kR2dnS0hZcElIdGNiaUFnSUNCc1pYUWdiMnhrSUQwZ2RHaHBjeTUyWlhKMGFXTmxjeTVzWlc1bmRHZzdYRzRnSUNBZ2RHaHBjeTUyWlhKMGFXTmxjeTVzWlc1bmRHZ2dQU0IyTzF4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNCdmJHUTdJR2tnUENCMk95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUyWlhKMGFXTmxjMXRwWFNBOUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhnNklEQXVNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIazZJREF1TUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFU2SURBdU1DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhZNklEQXVNQ3hjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5WEc0Z0lIMWNibjFjYmlKZGZRPT0iXX0=