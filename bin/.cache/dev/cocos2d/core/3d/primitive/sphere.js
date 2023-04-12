(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/3d/primitive/sphere.js';
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
        exports.default = function () {
            var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var segments = opts.segments !== undefined ? opts.segments : 32;
            var positions = [];
            var normals = [];
            var uvs = [];
            var indices = [];
            var minPos = _vmath.vec3.create(-radius, -radius, -radius);
            var maxPos = _vmath.vec3.create(radius, radius, radius);
            var boundingRadius = radius;
            for (var lat = 0; lat <= segments; ++lat) {
                var theta = lat * Math.PI / segments;
                var sinTheta = Math.sin(theta);
                var cosTheta = -Math.cos(theta);
                for (var lon = 0; lon <= segments; ++lon) {
                    var phi = lon * 2 * Math.PI / segments - Math.PI / 2;
                    var sinPhi = Math.sin(phi);
                    var cosPhi = Math.cos(phi);
                    var x = sinPhi * sinTheta;
                    var y = cosTheta;
                    var z = cosPhi * sinTheta;
                    var u = lon / segments;
                    var v = lat / segments;
                    positions.push(x * radius, y * radius, z * radius);
                    normals.push(x, y, z);
                    uvs.push(u, v);
                    if (lat < segments && lon < segments) {
                        var seg1 = segments + 1;
                        var a = seg1 * lat + lon;
                        var b = seg1 * (lat + 1) + lon;
                        var c = seg1 * (lat + 1) + lon + 1;
                        var d = seg1 * lat + lon + 1;
                        indices.push(a, d, b);
                        indices.push(d, c, b);
                    }
                }
            }
            return new _vertexData2.default(positions, normals, uvs, indices, minPos, maxPos, boundingRadius);
        };
        var _vmath = require('../../vmath');
        var _vertexData = require('./vertex-data');
        var _vertexData2 = _interopRequireDefault(_vertexData);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaGVyZS5qcyIsIi9Vc2Vycy9TaGFyZWQvYmluZ29fZnJlbnp5L2VuZ2luZS9jb2NvczJkL2NvcmUvM2QvcHJpbWl0aXZlL3NwaGVyZS5qcyJdLCJuYW1lcyI6WyJvcHRzIiwic2VnbWVudHMiLCJ1bmRlZmluZWQiLCJyYWRpdXMiLCJwb3NpdGlvbnMiLCJub3JtYWxzIiwidXZzIiwiaW5kaWNlcyIsIm1pblBvcyIsInZlYzMiLCJjcmVhdGUiLCJtYXhQb3MiLCJib3VuZGluZ1JhZGl1cyIsImxhdCIsInRoZXRhIiwiTWF0aCIsIlBJIiwic2luVGhldGEiLCJzaW4iLCJjb3NUaGV0YSIsImNvcyIsImxvbiIsInBoaSIsInNpblBoaSIsImNvc1BoaSIsIngiLCJ5IiwieiIsInUiLCJ2IiwicHVzaCIsInNlZzEiLCJhIiwiYiIsImMiLCJkIiwiVmVydGV4RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFVZSxPQUFtQyxPQUFBLENBQUEsT0FBQSxDQUFuQztRQUFtQyxVQUFBLE9BQUEsRUFBQTtBQUFBLFFBQUEsT0FBQSxpQkFBQSxDQUFBLE9BQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQSxDQUFBLENBQUE7QUFBQTtJQUNqQ0EsU0FBS0MsUUFBTEQsQ0FBa0JFLE9BQWxCRixFQUE4QkEsT0FBOUJBLEVBQW1DQyxNQUFuQ0QsRUFBZjtBQUFBOztTQUFBO0FBQUEsUUFYRjtBQUFBLHNFQUFBO0FBQUEsMEJBVWUsWUFBbUM7QUFBQSxZQUFBLElBQXpCRyxNQUFBQSxHQUF5QixTQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsR0FBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLEdBQWhCLEdBQWdCLENBQUE7QUFBQSxZQUFBLElBQVhILElBQUFBLEdBQVcsU0FBQSxDQUFBLE1BQUEsR0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLEdBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFKLEVBQUksQ0FBQTtB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Q0FXRTtBQUFBO0lBR0EsSUFBQSxPQUFBLEVBQUE7QUFBQSx3REFBQTtBQUFBLEtBQUEsTUFHQTtBQUFBLFFBQ0EsaUJBQUEsQ0FBQSxrQkFBQSxDQUFBLFVBQUEsRUFBQSxZQUFBO0FBQUEsWUFDQSxRQUFBLENBQUEsUUFBQSxDQUFBLE9BQUEsRUFBQSxTQUFBLEVBQUEsUUFBQSxFQURBO0FBQUEsU0FBQSxFQURBO0FBQUEiLCJmaWxlIjoic3BoZXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyB2ZWMzIH0gZnJvbSAnLi4vLi4vdm1hdGgnO1xuaW1wb3J0IFZlcnRleERhdGEgZnJvbSAnLi92ZXJ0ZXgtZGF0YSc7XG5cbi8qKlxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZGl1c1xuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLnNlZ21lbnRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyYWRpdXMgPSAwLjUsIG9wdHMgPSB7fSkge1xuICBsZXQgc2VnbWVudHMgPSBvcHRzLnNlZ21lbnRzICE9PSB1bmRlZmluZWQgPyBvcHRzLnNlZ21lbnRzIDogMzI7XG5cbiAgLy8gbGF0ID09PSBsYXRpdHVkZVxuICAvLyBsb24gPT09IGxvbmdpdHVkZVxuXG4gIGxldCBwb3NpdGlvbnMgPSBbXTtcbiAgbGV0IG5vcm1hbHMgPSBbXTtcbiAgbGV0IHV2cyA9IFtdO1xuICBsZXQgaW5kaWNlcyA9IFtdO1xuICBsZXQgbWluUG9zID0gdmVjMy5jcmVhdGUoLXJhZGl1cywgLXJhZGl1cywgLXJhZGl1cyk7XG4gIGxldCBtYXhQb3MgPSB2ZWMzLmNyZWF0ZShyYWRpdXMsIHJhZGl1cywgcmFkaXVzKTtcbiAgbGV0IGJvdW5kaW5nUmFkaXVzID0gcmFkaXVzO1xuXG4gIGZvciAobGV0IGxhdCA9IDA7IGxhdCA8PSBzZWdtZW50czsgKytsYXQpIHtcbiAgICBsZXQgdGhldGEgPSBsYXQgKiBNYXRoLlBJIC8gc2VnbWVudHM7XG4gICAgbGV0IHNpblRoZXRhID0gTWF0aC5zaW4odGhldGEpO1xuICAgIGxldCBjb3NUaGV0YSA9IC1NYXRoLmNvcyh0aGV0YSk7XG5cbiAgICBmb3IgKGxldCBsb24gPSAwOyBsb24gPD0gc2VnbWVudHM7ICsrbG9uKSB7XG4gICAgICBsZXQgcGhpID0gbG9uICogMiAqIE1hdGguUEkgLyBzZWdtZW50cyAtIE1hdGguUEkgLyAyLjA7XG4gICAgICBsZXQgc2luUGhpID0gTWF0aC5zaW4ocGhpKTtcbiAgICAgIGxldCBjb3NQaGkgPSBNYXRoLmNvcyhwaGkpO1xuXG4gICAgICBsZXQgeCA9IHNpblBoaSAqIHNpblRoZXRhO1xuICAgICAgbGV0IHkgPSBjb3NUaGV0YTtcbiAgICAgIGxldCB6ID0gY29zUGhpICogc2luVGhldGE7XG4gICAgICBsZXQgdSA9IGxvbiAvIHNlZ21lbnRzO1xuICAgICAgbGV0IHYgPSBsYXQgLyBzZWdtZW50cztcblxuICAgICAgcG9zaXRpb25zLnB1c2goeCAqIHJhZGl1cywgeSAqIHJhZGl1cywgeiAqIHJhZGl1cyk7XG4gICAgICBub3JtYWxzLnB1c2goeCwgeSwgeik7XG4gICAgICB1dnMucHVzaCh1LCB2KTtcblxuXG4gICAgICBpZiAoKGxhdCA8IHNlZ21lbnRzKSAmJiAobG9uIDwgc2VnbWVudHMpKSB7XG4gICAgICAgIGxldCBzZWcxID0gc2VnbWVudHMgKyAxO1xuICAgICAgICBsZXQgYSA9IHNlZzEgKiBsYXQgKyBsb247XG4gICAgICAgIGxldCBiID0gc2VnMSAqIChsYXQgKyAxKSArIGxvbjtcbiAgICAgICAgbGV0IGMgPSBzZWcxICogKGxhdCArIDEpICsgbG9uICsgMTtcbiAgICAgICAgbGV0IGQgPSBzZWcxICogbGF0ICsgbG9uICsgMTtcblxuICAgICAgICBpbmRpY2VzLnB1c2goYSwgZCwgYik7XG4gICAgICAgIGluZGljZXMucHVzaChkLCBjLCBiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFZlcnRleERhdGEoXG4gICAgcG9zaXRpb25zLFxuICAgIG5vcm1hbHMsXG4gICAgdXZzLFxuICAgIGluZGljZXMsXG4gICAgbWluUG9zLFxuICAgIG1heFBvcyxcbiAgICBib3VuZGluZ1JhZGl1c1xuICApO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciByYWRpdXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDAuNTtcbiAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gIHZhciBzZWdtZW50cyA9IG9wdHMuc2VnbWVudHMgIT09IHVuZGVmaW5lZCA/IG9wdHMuc2VnbWVudHMgOiAzMjtcblxuICAvLyBsYXQgPT09IGxhdGl0dWRlXG4gIC8vIGxvbiA9PT0gbG9uZ2l0dWRlXG5cbiAgdmFyIHBvc2l0aW9ucyA9IFtdO1xuICB2YXIgbm9ybWFscyA9IFtdO1xuICB2YXIgdXZzID0gW107XG4gIHZhciBpbmRpY2VzID0gW107XG4gIHZhciBtaW5Qb3MgPSBfdm1hdGgudmVjMy5jcmVhdGUoLXJhZGl1cywgLXJhZGl1cywgLXJhZGl1cyk7XG4gIHZhciBtYXhQb3MgPSBfdm1hdGgudmVjMy5jcmVhdGUocmFkaXVzLCByYWRpdXMsIHJhZGl1cyk7XG4gIHZhciBib3VuZGluZ1JhZGl1cyA9IHJhZGl1cztcblxuICBmb3IgKHZhciBsYXQgPSAwOyBsYXQgPD0gc2VnbWVudHM7ICsrbGF0KSB7XG4gICAgdmFyIHRoZXRhID0gbGF0ICogTWF0aC5QSSAvIHNlZ21lbnRzO1xuICAgIHZhciBzaW5UaGV0YSA9IE1hdGguc2luKHRoZXRhKTtcbiAgICB2YXIgY29zVGhldGEgPSAtTWF0aC5jb3ModGhldGEpO1xuXG4gICAgZm9yICh2YXIgbG9uID0gMDsgbG9uIDw9IHNlZ21lbnRzOyArK2xvbikge1xuICAgICAgdmFyIHBoaSA9IGxvbiAqIDIgKiBNYXRoLlBJIC8gc2VnbWVudHMgLSBNYXRoLlBJIC8gMi4wO1xuICAgICAgdmFyIHNpblBoaSA9IE1hdGguc2luKHBoaSk7XG4gICAgICB2YXIgY29zUGhpID0gTWF0aC5jb3MocGhpKTtcblxuICAgICAgdmFyIHggPSBzaW5QaGkgKiBzaW5UaGV0YTtcbiAgICAgIHZhciB5ID0gY29zVGhldGE7XG4gICAgICB2YXIgeiA9IGNvc1BoaSAqIHNpblRoZXRhO1xuICAgICAgdmFyIHUgPSBsb24gLyBzZWdtZW50cztcbiAgICAgIHZhciB2ID0gbGF0IC8gc2VnbWVudHM7XG5cbiAgICAgIHBvc2l0aW9ucy5wdXNoKHggKiByYWRpdXMsIHkgKiByYWRpdXMsIHogKiByYWRpdXMpO1xuICAgICAgbm9ybWFscy5wdXNoKHgsIHksIHopO1xuICAgICAgdXZzLnB1c2godSwgdik7XG5cbiAgICAgIGlmIChsYXQgPCBzZWdtZW50cyAmJiBsb24gPCBzZWdtZW50cykge1xuICAgICAgICB2YXIgc2VnMSA9IHNlZ21lbnRzICsgMTtcbiAgICAgICAgdmFyIGEgPSBzZWcxICogbGF0ICsgbG9uO1xuICAgICAgICB2YXIgYiA9IHNlZzEgKiAobGF0ICsgMSkgKyBsb247XG4gICAgICAgIHZhciBjID0gc2VnMSAqIChsYXQgKyAxKSArIGxvbiArIDE7XG4gICAgICAgIHZhciBkID0gc2VnMSAqIGxhdCArIGxvbiArIDE7XG5cbiAgICAgICAgaW5kaWNlcy5wdXNoKGEsIGQsIGIpO1xuICAgICAgICBpbmRpY2VzLnB1c2goZCwgYywgYik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBfdmVydGV4RGF0YTIuZGVmYXVsdChwb3NpdGlvbnMsIG5vcm1hbHMsIHV2cywgaW5kaWNlcywgbWluUG9zLCBtYXhQb3MsIGJvdW5kaW5nUmFkaXVzKTtcbn07XG5cbnZhciBfdm1hdGggPSByZXF1aXJlKCcuLi8uLi92bWF0aCcpO1xuXG52YXIgX3ZlcnRleERhdGEgPSByZXF1aXJlKCcuL3ZlcnRleC1kYXRhJyk7XG5cbnZhciBfdmVydGV4RGF0YTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92ZXJ0ZXhEYXRhKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKlxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZGl1c1xuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLnNlZ21lbnRzXG4gKi9cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTndhR1Z5WlM1cWN5SmRMQ0p1WVcxbGN5STZXeUp5WVdScGRYTWlMQ0p2Y0hSeklpd2ljMlZuYldWdWRITWlMQ0oxYm1SbFptbHVaV1FpTENKd2IzTnBkR2x2Ym5NaUxDSnViM0p0WVd4eklpd2lkWFp6SWl3aWFXNWthV05sY3lJc0ltMXBibEJ2Y3lJc0luWmxZek1pTENKamNtVmhkR1VpTENKdFlYaFFiM01pTENKaWIzVnVaR2x1WjFKaFpHbDFjeUlzSW14aGRDSXNJblJvWlhSaElpd2lUV0YwYUNJc0lsQkpJaXdpYzJsdVZHaGxkR0VpTENKemFXNGlMQ0pqYjNOVWFHVjBZU0lzSW1OdmN5SXNJbXh2YmlJc0luQm9hU0lzSW5OcGJsQm9hU0lzSW1OdmMxQm9hU0lzSW5naUxDSjVJaXdpZWlJc0luVWlMQ0oySWl3aWNIVnphQ0lzSW5ObFp6RWlMQ0poSWl3aVlpSXNJbU1pTENKa0lpd2lWbVZ5ZEdWNFJHRjBZU0pkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096dHJRa0ZWWlN4WlFVRnRRenRCUVVGQkxFMUJRWHBDUVN4TlFVRjVRaXgxUlVGQmFFSXNSMEZCWjBJN1FVRkJRU3hOUVVGWVF5eEpRVUZYTEhWRlFVRktMRVZCUVVrN08wRkJRMmhFTEUxQlFVbERMRmRCUVZkRUxFdEJRVXRETEZGQlFVd3NTMEZCYTBKRExGTkJRV3hDTEVkQlFUaENSaXhMUVVGTFF5eFJRVUZ1UXl4SFFVRTRReXhGUVVFM1JEczdRVUZGUVR0QlFVTkJPenRCUVVWQkxFMUJRVWxGTEZsQlFWa3NSVUZCYUVJN1FVRkRRU3hOUVVGSlF5eFZRVUZWTEVWQlFXUTdRVUZEUVN4TlFVRkpReXhOUVVGTkxFVkJRVlk3UVVGRFFTeE5RVUZKUXl4VlFVRlZMRVZCUVdRN1FVRkRRU3hOUVVGSlF5eFRRVUZUUXl4WlFVRkxReXhOUVVGTUxFTkJRVmtzUTBGQlExWXNUVUZCWWl4RlFVRnhRaXhEUVVGRFFTeE5RVUYwUWl4RlFVRTRRaXhEUVVGRFFTeE5RVUV2UWl4RFFVRmlPMEZCUTBFc1RVRkJTVmNzVTBGQlUwWXNXVUZCUzBNc1RVRkJUQ3hEUVVGWlZpeE5RVUZhTEVWQlFXOUNRU3hOUVVGd1FpeEZRVUUwUWtFc1RVRkJOVUlzUTBGQllqdEJRVU5CTEUxQlFVbFpMR2xDUVVGcFFsb3NUVUZCY2tJN08wRkJSVUVzVDBGQlN5eEpRVUZKWVN4TlFVRk5MRU5CUVdZc1JVRkJhMEpCTEU5QlFVOVlMRkZCUVhwQ0xFVkJRVzFETEVWQlFVVlhMRWRCUVhKRExFVkJRVEJETzBGQlEzaERMRkZCUVVsRExGRkJRVkZFTEUxQlFVMUZMRXRCUVV0RExFVkJRVmdzUjBGQlowSmtMRkZCUVRWQ08wRkJRMEVzVVVGQlNXVXNWMEZCVjBZc1MwRkJTMGNzUjBGQlRDeERRVUZUU2l4TFFVRlVMRU5CUVdZN1FVRkRRU3hSUVVGSlN5eFhRVUZYTEVOQlFVTktMRXRCUVV0TExFZEJRVXdzUTBGQlUwNHNTMEZCVkN4RFFVRm9RanM3UVVGRlFTeFRRVUZMTEVsQlFVbFBMRTFCUVUwc1EwRkJaaXhGUVVGclFrRXNUMEZCVDI1Q0xGRkJRWHBDTEVWQlFXMURMRVZCUVVWdFFpeEhRVUZ5UXl4RlFVRXdRenRCUVVONFF5eFZRVUZKUXl4TlFVRk5SQ3hOUVVGTkxFTkJRVTRzUjBGQlZVNHNTMEZCUzBNc1JVRkJaaXhIUVVGdlFtUXNVVUZCY0VJc1IwRkJLMEpoTEV0QlFVdERMRVZCUVV3c1IwRkJWU3hIUVVGdVJEdEJRVU5CTEZWQlFVbFBMRk5CUVZOU0xFdEJRVXRITEVkQlFVd3NRMEZCVTBrc1IwRkJWQ3hEUVVGaU8wRkJRMEVzVlVGQlNVVXNVMEZCVTFRc1MwRkJTMHNzUjBGQlRDeERRVUZUUlN4SFFVRlVMRU5CUVdJN08wRkJSVUVzVlVGQlNVY3NTVUZCU1VZc1UwRkJVMDRzVVVGQmFrSTdRVUZEUVN4VlFVRkpVeXhKUVVGSlVDeFJRVUZTTzBGQlEwRXNWVUZCU1ZFc1NVRkJTVWdzVTBGQlUxQXNVVUZCYWtJN1FVRkRRU3hWUVVGSlZ5eEpRVUZKVUN4TlFVRk5ia0lzVVVGQlpEdEJRVU5CTEZWQlFVa3lRaXhKUVVGSmFFSXNUVUZCVFZnc1VVRkJaRHM3UVVGRlFVVXNaMEpCUVZVd1FpeEpRVUZXTEVOQlFXVk1MRWxCUVVsNlFpeE5RVUZ1UWl4RlFVRXlRakJDTEVsQlFVa3hRaXhOUVVFdlFpeEZRVUYxUXpKQ0xFbEJRVWt6UWl4TlFVRXpRenRCUVVOQlN5eGpRVUZSZVVJc1NVRkJVaXhEUVVGaFRDeERRVUZpTEVWQlFXZENReXhEUVVGb1FpeEZRVUZ0UWtNc1EwRkJia0k3UVVGRFFYSkNMRlZCUVVsM1FpeEpRVUZLTEVOQlFWTkdMRU5CUVZRc1JVRkJXVU1zUTBGQldqczdRVUZIUVN4VlFVRkxhRUlzVFVGQlRWZ3NVVUZCVUN4SlFVRnhRbTFDTEUxQlFVMXVRaXhSUVVFdlFpeEZRVUV3UXp0QlFVTjRReXhaUVVGSk5rSXNUMEZCVHpkQ0xGZEJRVmNzUTBGQmRFSTdRVUZEUVN4WlFVRkpPRUlzU1VGQlNVUXNUMEZCVDJ4Q0xFZEJRVkFzUjBGQllWRXNSMEZCY2tJN1FVRkRRU3haUVVGSldTeEpRVUZKUml4UlFVRlJiRUlzVFVGQlRTeERRVUZrTEVsQlFXMUNVU3hIUVVFelFqdEJRVU5CTEZsQlFVbGhMRWxCUVVsSUxGRkJRVkZzUWl4TlFVRk5MRU5CUVdRc1NVRkJiVUpSTEVkQlFXNUNMRWRCUVhsQ0xFTkJRV3BETzBGQlEwRXNXVUZCU1dNc1NVRkJTVW9zVDBGQlQyeENMRWRCUVZBc1IwRkJZVkVzUjBGQllpeEhRVUZ0UWl4RFFVRXpRanM3UVVGRlFXUXNaMEpCUVZGMVFpeEpRVUZTTEVOQlFXRkZMRU5CUVdJc1JVRkJaMEpITEVOQlFXaENMRVZCUVcxQ1JpeERRVUZ1UWp0QlFVTkJNVUlzWjBKQlFWRjFRaXhKUVVGU0xFTkJRV0ZMTEVOQlFXSXNSVUZCWjBKRUxFTkJRV2hDTEVWQlFXMUNSQ3hEUVVGdVFqdEJRVU5FTzBGQlEwWTdRVUZEUmpzN1FVRkZSQ3hUUVVGUExFbEJRVWxITEc5Q1FVRktMRU5CUTB4b1F5eFRRVVJMTEVWQlJVeERMRTlCUmtzc1JVRkhURU1zUjBGSVN5eEZRVWxNUXl4UFFVcExMRVZCUzB4RExFMUJURXNzUlVGTlRFY3NUVUZPU3l4RlFVOU1ReXhqUVZCTExFTkJRVkE3UVVGVFJDeERPenRCUVdwRlJEczdRVUZEUVRzN096czdPenM3UVVGRlFTSXNJbVpwYkdVaU9pSnpjR2hsY21VdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUluZFhObElITjBjbWxqZENjN1hHNWNibWx0Y0c5eWRDQjdJSFpsWXpNZ2ZTQm1jbTl0SUNjdUxpOHVMaTkyYldGMGFDYzdYRzVwYlhCdmNuUWdWbVZ5ZEdWNFJHRjBZU0JtY205dElDY3VMM1psY25SbGVDMWtZWFJoSnp0Y2JseHVMeW9xWEc0Z0tpQkFjR0Z5WVcwZ2UwNTFiV0psY24wZ2NtRmthWFZ6WEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2IzQjBjMXh1SUNvZ1FIQmhjbUZ0SUh0T2RXMWlaWEo5SUc5d2RITXVjMlZuYldWdWRITmNiaUFxTDF4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnS0hKaFpHbDFjeUE5SURBdU5Td2diM0IwY3lBOUlIdDlLU0I3WEc0Z0lHeGxkQ0J6WldkdFpXNTBjeUE5SUc5d2RITXVjMlZuYldWdWRITWdJVDA5SUhWdVpHVm1hVzVsWkNBL0lHOXdkSE11YzJWbmJXVnVkSE1nT2lBek1qdGNibHh1SUNBdkx5QnNZWFFnUFQwOUlHeGhkR2wwZFdSbFhHNGdJQzh2SUd4dmJpQTlQVDBnYkc5dVoybDBkV1JsWEc1Y2JpQWdiR1YwSUhCdmMybDBhVzl1Y3lBOUlGdGRPMXh1SUNCc1pYUWdibTl5YldGc2N5QTlJRnRkTzF4dUlDQnNaWFFnZFhaeklEMGdXMTA3WEc0Z0lHeGxkQ0JwYm1ScFkyVnpJRDBnVzEwN1hHNGdJR3hsZENCdGFXNVFiM01nUFNCMlpXTXpMbU55WldGMFpTZ3RjbUZrYVhWekxDQXRjbUZrYVhWekxDQXRjbUZrYVhWektUdGNiaUFnYkdWMElHMWhlRkJ2Y3lBOUlIWmxZek11WTNKbFlYUmxLSEpoWkdsMWN5d2djbUZrYVhWekxDQnlZV1JwZFhNcE8xeHVJQ0JzWlhRZ1ltOTFibVJwYm1kU1lXUnBkWE1nUFNCeVlXUnBkWE03WEc1Y2JpQWdabTl5SUNoc1pYUWdiR0YwSUQwZ01Ec2diR0YwSUR3OUlITmxaMjFsYm5Sek95QXJLMnhoZENrZ2UxeHVJQ0FnSUd4bGRDQjBhR1YwWVNBOUlHeGhkQ0FxSUUxaGRHZ3VVRWtnTHlCelpXZHRaVzUwY3p0Y2JpQWdJQ0JzWlhRZ2MybHVWR2hsZEdFZ1BTQk5ZWFJvTG5OcGJpaDBhR1YwWVNrN1hHNGdJQ0FnYkdWMElHTnZjMVJvWlhSaElEMGdMVTFoZEdndVkyOXpLSFJvWlhSaEtUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHeHZiaUE5SURBN0lHeHZiaUE4UFNCelpXZHRaVzUwY3pzZ0t5dHNiMjRwSUh0Y2JpQWdJQ0FnSUd4bGRDQndhR2tnUFNCc2IyNGdLaUF5SUNvZ1RXRjBhQzVRU1NBdklITmxaMjFsYm5SeklDMGdUV0YwYUM1UVNTQXZJREl1TUR0Y2JpQWdJQ0FnSUd4bGRDQnphVzVRYUdrZ1BTQk5ZWFJvTG5OcGJpaHdhR2twTzF4dUlDQWdJQ0FnYkdWMElHTnZjMUJvYVNBOUlFMWhkR2d1WTI5ektIQm9hU2s3WEc1Y2JpQWdJQ0FnSUd4bGRDQjRJRDBnYzJsdVVHaHBJQ29nYzJsdVZHaGxkR0U3WEc0Z0lDQWdJQ0JzWlhRZ2VTQTlJR052YzFSb1pYUmhPMXh1SUNBZ0lDQWdiR1YwSUhvZ1BTQmpiM05RYUdrZ0tpQnphVzVVYUdWMFlUdGNiaUFnSUNBZ0lHeGxkQ0IxSUQwZ2JHOXVJQzhnYzJWbmJXVnVkSE03WEc0Z0lDQWdJQ0JzWlhRZ2RpQTlJR3hoZENBdklITmxaMjFsYm5Sek8xeHVYRzRnSUNBZ0lDQndiM05wZEdsdmJuTXVjSFZ6YUNoNElDb2djbUZrYVhWekxDQjVJQ29nY21Ga2FYVnpMQ0I2SUNvZ2NtRmthWFZ6S1R0Y2JpQWdJQ0FnSUc1dmNtMWhiSE11Y0hWemFDaDRMQ0I1TENCNktUdGNiaUFnSUNBZ0lIVjJjeTV3ZFhOb0tIVXNJSFlwTzF4dVhHNWNiaUFnSUNBZ0lHbG1JQ2dvYkdGMElEd2djMlZuYldWdWRITXBJQ1ltSUNoc2IyNGdQQ0J6WldkdFpXNTBjeWtwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJSE5sWnpFZ1BTQnpaV2R0Wlc1MGN5QXJJREU3WEc0Z0lDQWdJQ0FnSUd4bGRDQmhJRDBnYzJWbk1TQXFJR3hoZENBcklHeHZianRjYmlBZ0lDQWdJQ0FnYkdWMElHSWdQU0J6WldjeElDb2dLR3hoZENBcklERXBJQ3NnYkc5dU8xeHVJQ0FnSUNBZ0lDQnNaWFFnWXlBOUlITmxaekVnS2lBb2JHRjBJQ3NnTVNrZ0t5QnNiMjRnS3lBeE8xeHVJQ0FnSUNBZ0lDQnNaWFFnWkNBOUlITmxaekVnS2lCc1lYUWdLeUJzYjI0Z0t5QXhPMXh1WEc0Z0lDQWdJQ0FnSUdsdVpHbGpaWE11Y0hWemFDaGhMQ0JrTENCaUtUdGNiaUFnSUNBZ0lDQWdhVzVrYVdObGN5NXdkWE5vS0dRc0lHTXNJR0lwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ1WlhjZ1ZtVnlkR1Y0UkdGMFlTaGNiaUFnSUNCd2IzTnBkR2x2Ym5Nc1hHNGdJQ0FnYm05eWJXRnNjeXhjYmlBZ0lDQjFkbk1zWEc0Z0lDQWdhVzVrYVdObGN5eGNiaUFnSUNCdGFXNVFiM01zWEc0Z0lDQWdiV0Y0VUc5ekxGeHVJQ0FnSUdKdmRXNWthVzVuVW1Ga2FYVnpYRzRnSUNrN1hHNTlYRzRpWFgwPSJdfQ==