(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/core/technique.js';
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
        var _config = require('../config');
        var _config2 = _interopRequireDefault(_config);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var _genID = 0;
        var Technique = function () {
            function Technique(stages, passes) {
                var layer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                _classCallCheck(this, Technique);
                this._id = _genID++;
                this._stages = stages;
                this._stageIDs = _config2.default.stageIDs(stages);
                this._passes = passes;
                this._layer = layer;
            }
            _createClass(Technique, [
                {
                    key: 'setStages',
                    value: function setStages(stages) {
                        this._stageIDs = _config2.default.stageIDs(stages);
                    }
                },
                {
                    key: 'clone',
                    value: function clone() {
                        var passes = [];
                        for (var i = 0; i < this._passes.length; i++) {
                            passes.push(this._passes[i].clone());
                        }
                        return new Technique(this._stages, passes, this._layer);
                    }
                },
                {
                    key: 'passes',
                    get: function get() {
                        return this._passes;
                    }
                },
                {
                    key: 'stageIDs',
                    get: function get() {
                        return this._stageIDs;
                    }
                }
            ]);
            return Technique;
        }();
        exports.default = Technique;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlY2huaXF1ZS5qcyIsIi9Vc2Vycy9TaGFyZWQvYmluZ29fZnJlbnp5L2VuZ2luZS9jb2NvczJkL3JlbmRlcmVyL2NvcmUvdGVjaG5pcXVlLmpzIl0sIm5hbWVzIjpbIl9nZW5JRCIsIlRlY2huaXF1ZSIsInN0YWdlcyIsInBhc3NlcyIsImxheWVyIiwiX2lkIiwiX3N0YWdlcyIsIl9zdGFnZUlEcyIsImNvbmZpZyIsInN0YWdlSURzIiwiX3Bhc3NlcyIsIl9sYXllciIsImkiLCJsZW5ndGgiLCJwdXNoIiwiY2xvbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLFdBQUEsQ0FBQTs7Ozs7Ozs7OztRQUVBLElBQUlBLE1BQUFBLEdBQVMsQ0FBYjtZQUVxQkMsU0FBQUE7WUFNbkIsU0FBQSxTQUFBLENBQVlDLE1BQVosRUFBb0JDLE1BQXBCLEVBQXVDO0FBQUEsZ0JBQUEsSUFBWEMsS0FBQUEsR0FBVyxTQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsR0FBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUgsQ0FBRyxDQUFBO0FBQUEsZ0JBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxTQUFBLEVBQUE7QUFBQSxnQkFDckMsS0FBS0MsR0FBTCxHQUFXTCxNQUFBQSxFQUFYLENBRHFDO0FBQUEsZ0JBRXJDLEtBQUtNLE9BQUwsR0FBZUosTUFBZixDQUZxQztBQUFBLGdCQUdyQyxLQUFLSyxTQUFMLEdBQWlCQyxRQUFBQSxDQUFBQSxPQUFBQSxDQUFPQyxRQUFQRCxDQUFnQk4sTUFBaEJNLENBQWpCLENBSHFDO0FBQUEsZ0JBSXJDLEtBQUtFLE9BQUwsR0FBZVAsTUFBZixDQUpxQztBQUFBLGdCQUtyQyxLQUFLUSxNQUFMLEdBQWNQLEtBQWQsQ0FMcUM7QUFBQTs7Ozs4Q0FTN0JGLFFBQVE7QUFBQSx3QkFDaEIsS0FBS0ssU0FBTCxHQUFpQkMsUUFBQUEsQ0FBQUEsT0FBQUEsQ0FBT0MsUUFBUEQsQ0FBZ0JOLE1BQWhCTSxDQUFqQixDQURnQjtBQUFBOzs7OzRDQVlUO0FBQUEsd0JBQ1AsSUFBSUwsTUFBQUEsR0FBUyxFQUFiLENBRE87QUFBQSx3QkFFUCxLQUFLLElBQUlTLENBQUFBLEdBQUksQ0FBUixDQUFMLENBQWdCQSxDQUFBQSxHQUFJLEtBQUtGLE9BQUwsQ0FBYUcsTUFBakMsRUFBeUNELENBQUFBLEVBQXpDLEVBQThDO0FBQUEsNEJBQzVDVCxNQUFBQSxDQUFPVyxJQUFQWCxDQUFZLEtBQUtPLE9BQUwsQ0FBYUUsQ0FBYixFQUFnQkcsS0FBaEIsRUFBWlosRUFENEM7QUFBQSx5QkFGdkM7QUFBQSx3QkFLUCxPQUFPLElBQUlGLFNBQUosQ0FBYyxLQUFLSyxPQUFuQixFQUE0QkgsTUFBNUIsRUFBb0MsS0FBS1EsTUFBekMsQ0FBUCxDQUxPO0FBQUE7Ozs7d0NBUkk7QUFBQSx3QkFDWCxPQUFPLEtBQUtELE9BQVosQ0FEVztBQUFBOzs7O3dDQUlFO0FBQUEsd0JBQ2IsT0FBTyxLQUFLSCxTQUFaLENBRGE7QUFBQTs7Ozs7MEJBdkJJTjs7Ozs7O1FBRnJCLGlCQUFBLENBQUEsa0JBQUEsQ0FBQSxVQUFBLEVBQUEsWUFBQTtBQUFBLDREQUFBO0FBQUEsU0FBQSIsImZpbGUiOiJ0ZWNobmlxdWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuXG5sZXQgX2dlbklEID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVjaG5pcXVlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHN0YWdlc1xuICAgKiBAcGFyYW0ge0FycmF5fSBwYXNzZXNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGxheWVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzdGFnZXMsIHBhc3NlcywgbGF5ZXIgPSAwKSB7XG4gICAgdGhpcy5faWQgPSBfZ2VuSUQrKztcbiAgICB0aGlzLl9zdGFnZXMgPSBzdGFnZXM7XG4gICAgdGhpcy5fc3RhZ2VJRHMgPSBjb25maWcuc3RhZ2VJRHMoc3RhZ2VzKTtcbiAgICB0aGlzLl9wYXNzZXMgPSBwYXNzZXM7XG4gICAgdGhpcy5fbGF5ZXIgPSBsYXllcjtcbiAgICAvLyBUT0RPOiB0aGlzLl92ZXJzaW9uID0gJ3dlYmdsJyBvciAnd2ViZ2wyJyAvLyA/Pz8/XG4gIH1cblxuICBzZXRTdGFnZXMoc3RhZ2VzKSB7XG4gICAgdGhpcy5fc3RhZ2VJRHMgPSBjb25maWcuc3RhZ2VJRHMoc3RhZ2VzKTtcbiAgfVxuXG4gIGdldCBwYXNzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bhc3NlcztcbiAgfVxuXG4gIGdldCBzdGFnZUlEcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhZ2VJRHM7XG4gIH1cblxuICBjbG9uZSAoKSB7XG4gICAgbGV0IHBhc3NlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwYXNzZXMucHVzaCh0aGlzLl9wYXNzZXNbaV0uY2xvbmUoKSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVGVjaG5pcXVlKHRoaXMuX3N0YWdlcywgcGFzc2VzLCB0aGlzLl9sYXllcik7XG4gIH1cbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7IC8vIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG52YXIgX2NvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xuXG52YXIgX2NvbmZpZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb25maWcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgX2dlbklEID0gMDtcblxudmFyIFRlY2huaXF1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHN0YWdlc1xuICAgKiBAcGFyYW0ge0FycmF5fSBwYXNzZXNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGxheWVyXG4gICAqL1xuICBmdW5jdGlvbiBUZWNobmlxdWUoc3RhZ2VzLCBwYXNzZXMpIHtcbiAgICB2YXIgbGF5ZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDA7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVjaG5pcXVlKTtcblxuICAgIHRoaXMuX2lkID0gX2dlbklEKys7XG4gICAgdGhpcy5fc3RhZ2VzID0gc3RhZ2VzO1xuICAgIHRoaXMuX3N0YWdlSURzID0gX2NvbmZpZzIuZGVmYXVsdC5zdGFnZUlEcyhzdGFnZXMpO1xuICAgIHRoaXMuX3Bhc3NlcyA9IHBhc3NlcztcbiAgICB0aGlzLl9sYXllciA9IGxheWVyO1xuICAgIC8vIFRPRE86IHRoaXMuX3ZlcnNpb24gPSAnd2ViZ2wnIG9yICd3ZWJnbDInIC8vID8/Pz9cbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUZWNobmlxdWUsIFt7XG4gICAga2V5OiAnc2V0U3RhZ2VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U3RhZ2VzKHN0YWdlcykge1xuICAgICAgdGhpcy5fc3RhZ2VJRHMgPSBfY29uZmlnMi5kZWZhdWx0LnN0YWdlSURzKHN0YWdlcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xvbmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICAgIHZhciBwYXNzZXMgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fcGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBhc3Nlcy5wdXNoKHRoaXMuX3Bhc3Nlc1tpXS5jbG9uZSgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgVGVjaG5pcXVlKHRoaXMuX3N0YWdlcywgcGFzc2VzLCB0aGlzLl9sYXllcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncGFzc2VzJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wYXNzZXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RhZ2VJRHMnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YWdlSURzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUZWNobmlxdWU7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRlY2huaXF1ZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5SbFkyaHVhWEYxWlM1cWN5SmRMQ0p1WVcxbGN5STZXeUpmWjJWdVNVUWlMQ0pVWldOb2JtbHhkV1VpTENKemRHRm5aWE1pTENKd1lYTnpaWE1pTENKc1lYbGxjaUlzSWw5cFpDSXNJbDl6ZEdGblpYTWlMQ0pmYzNSaFoyVkpSSE1pTENKamIyNW1hV2NpTENKemRHRm5aVWxFY3lJc0lsOXdZWE56WlhNaUxDSmZiR0Y1WlhJaUxDSnBJaXdpYkdWdVozUm9JaXdpY0hWemFDSXNJbU5zYjI1bElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPM0ZxUWtGQlFUczdRVUZGUVRzN096czdPenM3UVVGRlFTeEpRVUZKUVN4VFFVRlRMRU5CUVdJN08wbEJSWEZDUXl4VE8wRkJRMjVDT3pzN096dEJRVXRCTEhGQ1FVRlpReXhOUVVGYUxFVkJRVzlDUXl4TlFVRndRaXhGUVVGMVF6dEJRVUZCTEZGQlFWaERMRXRCUVZjc2RVVkJRVWdzUTBGQlJ6czdRVUZCUVRzN1FVRkRja01zVTBGQlMwTXNSMEZCVEN4SFFVRlhUQ3hSUVVGWU8wRkJRMEVzVTBGQlMwMHNUMEZCVEN4SFFVRmxTaXhOUVVGbU8wRkJRMEVzVTBGQlMwc3NVMEZCVEN4SFFVRnBRa01zYVVKQlFVOURMRkZCUVZBc1EwRkJaMEpRTEUxQlFXaENMRU5CUVdwQ08wRkJRMEVzVTBGQlMxRXNUMEZCVEN4SFFVRmxVQ3hOUVVGbU8wRkJRMEVzVTBGQlMxRXNUVUZCVEN4SFFVRmpVQ3hMUVVGa08wRkJRMEU3UVVGRFJEczdPenM0UWtGRlUwWXNUU3hGUVVGUk8wRkJRMmhDTEZkQlFVdExMRk5CUVV3c1IwRkJhVUpETEdsQ1FVRlBReXhSUVVGUUxFTkJRV2RDVUN4TlFVRm9RaXhEUVVGcVFqdEJRVU5FT3pzN05FSkJWVkU3UVVGRFVDeFZRVUZKUXl4VFFVRlRMRVZCUVdJN1FVRkRRU3hYUVVGTExFbEJRVWxUTEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNTeExRVUZMUml4UFFVRk1MRU5CUVdGSExFMUJRV3BETEVWQlFYbERSQ3hIUVVGNlF5eEZRVUU0UXp0QlFVTTFRMVFzWlVGQlQxY3NTVUZCVUN4RFFVRlpMRXRCUVV0S0xFOUJRVXdzUTBGQllVVXNRMEZCWWl4RlFVRm5Ra2NzUzBGQmFFSXNSVUZCV2p0QlFVTkVPMEZCUTBRc1lVRkJUeXhKUVVGSlpDeFRRVUZLTEVOQlFXTXNTMEZCUzBzc1QwRkJia0lzUlVGQk5FSklMRTFCUVRWQ0xFVkJRVzlETEV0QlFVdFJMRTFCUVhwRExFTkJRVkE3UVVGRFJEczdPM2RDUVdSWk8wRkJRMWdzWVVGQlR5eExRVUZMUkN4UFFVRmFPMEZCUTBRN096dDNRa0ZGWXp0QlFVTmlMR0ZCUVU4c1MwRkJTMGdzVTBGQldqdEJRVU5FT3pzN096czdhMEpCZWtKclFrNHNVeUlzSW1acGJHVWlPaUowWldOb2JtbHhkV1V1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVGN0TWpBeE9DQllhV0Z0Wlc0Z1dXRnFhU0JUYjJaMGQyRnlaU0JEYnk0c0lFeDBaQzVjYmx4dWFXMXdiM0owSUdOdmJtWnBaeUJtY205dElDY3VMaTlqYjI1bWFXY25PMXh1WEc1c1pYUWdYMmRsYmtsRUlEMGdNRHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdWR1ZqYUc1cGNYVmxJSHRjYmlBZ0x5b3FYRzRnSUNBcUlFQndZWEpoYlNCN1FYSnlZWGw5SUhOMFlXZGxjMXh1SUNBZ0tpQkFjR0Z5WVcwZ2UwRnljbUY1ZlNCd1lYTnpaWE5jYmlBZ0lDb2dRSEJoY21GdElIdE9kVzFpWlhKOUlHeGhlV1Z5WEc0Z0lDQXFMMXh1SUNCamIyNXpkSEoxWTNSdmNpaHpkR0ZuWlhNc0lIQmhjM05sY3l3Z2JHRjVaWElnUFNBd0tTQjdYRzRnSUNBZ2RHaHBjeTVmYVdRZ1BTQmZaMlZ1U1VRckt6dGNiaUFnSUNCMGFHbHpMbDl6ZEdGblpYTWdQU0J6ZEdGblpYTTdYRzRnSUNBZ2RHaHBjeTVmYzNSaFoyVkpSSE1nUFNCamIyNW1hV2N1YzNSaFoyVkpSSE1vYzNSaFoyVnpLVHRjYmlBZ0lDQjBhR2x6TGw5d1lYTnpaWE1nUFNCd1lYTnpaWE03WEc0Z0lDQWdkR2hwY3k1ZmJHRjVaWElnUFNCc1lYbGxjanRjYmlBZ0lDQXZMeUJVVDBSUE9pQjBhR2x6TGw5MlpYSnphVzl1SUQwZ0ozZGxZbWRzSnlCdmNpQW5kMlZpWjJ3eUp5QXZMeUEvUHo4L1hHNGdJSDFjYmx4dUlDQnpaWFJUZEdGblpYTW9jM1JoWjJWektTQjdYRzRnSUNBZ2RHaHBjeTVmYzNSaFoyVkpSSE1nUFNCamIyNW1hV2N1YzNSaFoyVkpSSE1vYzNSaFoyVnpLVHRjYmlBZ2ZWeHVYRzRnSUdkbGRDQndZWE56WlhNb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYM0JoYzNObGN6dGNiaUFnZlZ4dVhHNGdJR2RsZENCemRHRm5aVWxFY3lncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWZjM1JoWjJWSlJITTdYRzRnSUgxY2JseHVJQ0JqYkc5dVpTQW9LU0I3WEc0Z0lDQWdiR1YwSUhCaGMzTmxjeUE5SUZ0ZE8xeHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTVmY0dGemMyVnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNCd1lYTnpaWE11Y0hWemFDaDBhR2x6TGw5d1lYTnpaWE5iYVYwdVkyeHZibVVvS1NrN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQnVaWGNnVkdWamFHNXBjWFZsS0hSb2FYTXVYM04wWVdkbGN5d2djR0Z6YzJWekxDQjBhR2x6TGw5c1lYbGxjaWs3WEc0Z0lIMWNibjBpWFgwPSJdfQ==