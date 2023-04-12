(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/3d/primitive/index.js';
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
        var _utils = require('./utils');
        var _utils2 = _interopRequireDefault(_utils);
        var _box = require('./box');
        var _box2 = _interopRequireDefault(_box);
        var _cone = require('./cone');
        var _cone2 = _interopRequireDefault(_cone);
        var _cylinder = require('./cylinder');
        var _cylinder2 = _interopRequireDefault(_cylinder);
        var _plane = require('./plane');
        var _plane2 = _interopRequireDefault(_plane);
        var _quad = require('./quad');
        var _quad2 = _interopRequireDefault(_quad);
        var _sphere = require('./sphere');
        var _sphere2 = _interopRequireDefault(_sphere);
        var _torus = require('./torus');
        var _torus2 = _interopRequireDefault(_torus);
        var _capsule = require('./capsule');
        var _capsule2 = _interopRequireDefault(_capsule);
        var _polyhedron = require('./polyhedron');
        var _vertexData = require('./vertex-data');
        var _vertexData2 = _interopRequireDefault(_vertexData);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        cc.primitive = Object.assign({
            box: _box2.default,
            cone: _cone2.default,
            cylinder: _cylinder2.default,
            plane: _plane2.default,
            quad: _quad2.default,
            sphere: _sphere2.default,
            torus: _torus2.default,
            capsule: _capsule2.default,
            polyhedron: _polyhedron.polyhedron,
            PolyhedronType: _polyhedron.PolyhedronType,
            VertexData: _vertexData2.default
        }, _utils2.default);
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiL1VzZXJzL1NoYXJlZC9iaW5nb19mcmVuenkvZW5naW5lL2NvY29zMmQvY29yZS8zZC9wcmltaXRpdmUvaW5kZXguanMiXSwibmFtZXMiOlsiY2MiLCJwcmltaXRpdmUiLCJPYmplY3QiLCJhc3NpZ24iLCJib3giLCJjb25lIiwiY3lsaW5kZXIiLCJwbGFuZSIsInF1YWQiLCJzcGhlcmUiLCJ0b3J1cyIsImNhcHN1bGUiLCJwb2x5aGVkcm9uIiwiUG9seWhlZHJvblR5cGUiLCJWZXJ0ZXhEYXRhIiwidXRpbHMiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFBLE9BQUEsR0FBQSxPQUFBLE9BQUEsS0FBQSxXQUFBLElBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQTs7OztRQUNBLE9BQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQTs7OztJQUNBLFNBQUEsUUFBQSxDQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxFQUFBO0FBQUE7O1NBQUE7QUFBQTtRQUZBLElBQUEsTUFBQSxHQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUE7O1FBQ0EsSUFBQSxJQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQTs7UUFDQSxJQUFBLEtBQUEsR0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBOztRQUNBLElBQUEsU0FBQSxHQUFBLE9BQUEsQ0FBQSxZQUFBLENBQUE7O1FBQ0EsSUFBQSxNQUFBLEdBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQTs7UUFDQSxJQUFBLEtBQUEsR0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBOztRQUNBLElBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxVQUFBLENBQUE7O1FBQ0EsSUFBQSxNQUFBLEdBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQTs7UUFDQSxJQUFBLFFBQUEsR0FBQSxPQUFBLENBQUEsV0FBQSxDQUFBOztRQUNBLElBQUEsV0FBQSxHQUFBLE9BQUEsQ0FBQSxjQUFBLENBQUE7UUFDQSxJQUFBLFdBQUEsR0FBQSxPQUFBLENBQUEsZUFBQSxDQUFBOzs7OztRQVNBQSxFQUFBQSxDQUFHQyxTQUFIRCxHQUFlRSxNQUFBQSxDQUFPQyxNQUFQRCxDQUFjO0FBQUEsWUFlekJFLEdBQUFBLEVBQUFBLEtBQUFBLENBQUFBLE9BZnlCO0FBQUEsWUE4QnpCQyxJQUFBQSxFQUFBQSxNQUFBQSxDQUFBQSxPQTlCeUI7QUFBQSxZQThDekJDLFFBQUFBLEVBQUFBLFVBQUFBLENBQUFBLE9BOUN5QjtBQUFBLFlBMkR6QkMsS0FBQUEsRUFBQUEsT0FBQUEsQ0FBQUEsT0EzRHlCO0FBQUEsWUFtRXpCQyxJQUFBQSxFQUFBQSxNQUFBQSxDQUFBQSxPQW5FeUI7QUFBQSxZQThFekJDLE1BQUFBLEVBQUFBLFFBQUFBLENBQUFBLE9BOUV5QjtBQUFBLFlBNEZ6QkMsS0FBQUEsRUFBQUEsT0FBQUEsQ0FBQUEsT0E1RnlCO0FBQUEsWUE0R3pCQyxPQUFBQSxFQUFBQSxTQUFBQSxDQUFBQSxPQTVHeUI7QUFBQSxZQTBIekJDLFVBQUFBLEVBQUFBLFdBQUFBLENBQUFBLFVBMUh5QjtBQUFBLFlBNEh6QkMsY0FBQUEsRUFBQUEsV0FBQUEsQ0FBQUEsY0E1SHlCO0FBQUEsWUE2SHpCQyxVQUFBQSxFQUFBQSxZQUFBQSxDQUFBQSxPQTdIeUI7QUFBQSxTQUFkWixFQThIWmEsT0FBQUEsQ0FBQUEsT0E5SFliLENBQWZGLENBakJBO0FBQUE7O1FBQ0EsUUFBQSxDQUFBLFFBQUEsQ0FBQSxPQUFBLEVBQUEsU0FBQSxFQUFBLFFBQUE7OztZQUNBLFFBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxRQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IGJveCBmcm9tICcuL2JveCc7XG5pbXBvcnQgY29uZSBmcm9tICcuL2NvbmUnO1xuaW1wb3J0IGN5bGluZGVyIGZyb20gJy4vY3lsaW5kZXInO1xuaW1wb3J0IHBsYW5lIGZyb20gJy4vcGxhbmUnO1xuaW1wb3J0IHF1YWQgZnJvbSAnLi9xdWFkJztcbmltcG9ydCBzcGhlcmUgZnJvbSAnLi9zcGhlcmUnO1xuaW1wb3J0IHRvcnVzIGZyb20gJy4vdG9ydXMnO1xuaW1wb3J0IGNhcHN1bGUgZnJvbSAnLi9jYXBzdWxlJztcbmltcG9ydCB7IFBvbHloZWRyb25UeXBlLCBwb2x5aGVkcm9uIH0gZnJvbSAnLi9wb2x5aGVkcm9uJztcbmltcG9ydCBWZXJ0ZXhEYXRhIGZyb20gJy4vdmVydGV4LWRhdGEnO1xuXG4vKipcbiAqIOS4gOS4quWIm+W7uiAzRCDniankvZPpobbngrnmlbDmja7nmoTln7rnoYDmqKHlnZfvvIzkvaDlj6/ku6XpgJrov4cgXCJjYy5wcmltaXRpdmVcIiDmnaXorr/pl67ov5nkuKrmqKHlnZfjgIJcbiAqIEBtb2R1bGUgY2MucHJpbWl0aXZlXG4gKiBAc3VibW9kdWxlIGNjLnByaW1pdGl2ZVxuICogQG1haW5cbiAqL1xuXG5jYy5wcmltaXRpdmUgPSBPYmplY3QuYXNzaWduKHtcbiAgICAvKipcbiAgICAgKiAhI2VuIENyZWF0ZSBib3ggdmVydGV4IGRhdGFcbiAgICAgKiAhI3poIOWIm+W7uumVv+aWueS9k+mhtueCueaVsOaNrlxuICAgICAqIEBtZXRob2QgYm94XG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy53aWR0aFNlZ21lbnRzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMuaGVpZ2h0U2VnbWVudHNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy5sZW5ndGhTZWdtZW50c1xuICAgICAqIEByZXR1cm4ge3ByaW1pdGl2ZS5WZXJ0ZXhEYXRhfVxuICAgICAqL1xuICAgIGJveCxcbiAgICAvKipcbiAgICAgKiAhI2VuIENyZWF0ZSBjb25lIHZlcnRleCBkYXRhXG4gICAgICogISN6aCDliJvlu7rlnIbplKXkvZPpobbngrnmlbDmja5cbiAgICAgKiBAbWV0aG9kIGNvbmVcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHJhZGl1c1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLnJhZGlhbFNlZ21lbnRzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMuaGVpZ2h0U2VnbWVudHNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdHMuY2FwcGVkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMuYXJjXG4gICAgICogQHJldHVybiB7cHJpbWl0aXZlLlZlcnRleERhdGF9XG4gICAgICovXG4gICAgY29uZSxcbiAgICAvKipcbiAgICAgKiAhI2VuIENyZWF0ZSBjeWxpbmRlciB2ZXJ0ZXggZGF0YVxuICAgICAqICEjemgg5Yib5bu65ZyG5p+x5L2T6aG254K55pWw5o2uXG4gICAgICogQG1ldGhvZCBjeWxpbmRlclxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcmFkaXVzVG9wXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHJhZGl1c0JvdHRvbVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLnJhZGlhbFNlZ21lbnRzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMuaGVpZ2h0U2VnbWVudHNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdHMuY2FwcGVkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMuYXJjXG4gICAgICogQHJldHVybiB7cHJpbWl0aXZlLlZlcnRleERhdGF9XG4gICAgICovXG4gICAgY3lsaW5kZXIsXG4gICAgLyoqXG4gICAgICogISNlbiBDcmVhdGUgcGxhbmUgdmVydGV4IGRhdGFcbiAgICAgKiAhI3poIOWIm+W7uuW5s+WPsOmhtueCueaVsOaNrlxuICAgICAqIEBtZXRob2QgcGxhbmVcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMud2lkdGhTZWdtZW50c1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLmxlbmd0aFNlZ21lbnRzXG4gICAgICogQHJldHVybiB7cHJpbWl0aXZlLlZlcnRleERhdGF9XG4gICAgICovXG4gICAgcGxhbmUsXG4gICAgLyoqXG4gICAgICogISNlbiBDcmVhdGUgcXVhZCB2ZXJ0ZXggZGF0YVxuICAgICAqICEjemgg5Yib5bu66Z2i54mH6aG254K55pWw5o2uXG4gICAgICogQG1ldGhvZCBxdWFkXG4gICAgICogQHN0YXRpY1xuICAgICAqIEByZXR1cm4ge3ByaW1pdGl2ZS5WZXJ0ZXhEYXRhfVxuICAgICAqL1xuICAgIHF1YWQsXG4gICAgLyoqXG4gICAgICogISNlbiBDcmVhdGUgc3BoZXJlIHZlcnRleCBkYXRhXG4gICAgICogISN6aCDliJvlu7rnkIPkvZPpobbngrnmlbDmja5cbiAgICAgKiBAbWV0aG9kIHNwaGVyZVxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcmFkaXVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy5zZWdtZW50c1xuICAgICAqIEByZXR1cm4ge3ByaW1pdGl2ZS5WZXJ0ZXhEYXRhfVxuICAgICAqL1xuICAgIHNwaGVyZSxcbiAgICAvKipcbiAgICAgKiAhI2VuIENyZWF0ZSB0b3J1cyB2ZXJ0ZXggZGF0YVxuICAgICAqICEjemgg5Yib5bu65ZyG546v6aG254K55pWw5o2uXG4gICAgICogQG1ldGhvZCB0b3J1c1xuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcmFkaXVzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHR1YmVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLnJhZGlhbFNlZ21lbnRzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMudHVidWxhclNlZ21lbnRzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMuYXJjXG4gICAgICogQHJldHVybiB7cHJpbWl0aXZlLlZlcnRleERhdGF9XG4gICAgICovXG4gICAgdG9ydXMsXG4gICAgLyoqXG4gICAgICogISNlbiBDcmVhdGUgY2Fwc3VsZSB2ZXJ0ZXggZGF0YVxuICAgICAqICEjemgg5Yib5bu66IO25ZuK5L2T6aG254K55pWw5o2uXG4gICAgICogQG1ldGhvZCBjYXBzdWxlXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSByYWRpdXNUb3BcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcmFkaXVzQm90dG9tXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMuc2lkZXNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy5oZWlnaHRTZWdtZW50c1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0cy5jYXBwZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy5hcmNcbiAgICAgKiBAcmV0dXJuIHtwcmltaXRpdmUuVmVydGV4RGF0YX1cbiAgICAgKi9cbiAgICBjYXBzdWxlLFxuICAgIC8qKlxuICAgICAqICEjZW4gQ3JlYXRlIHBvbHloZWRyb24gdmVydGV4IGRhdGFcbiAgICAgKiAhI3poIOWIm+W7uuWkmumdouS9k+mhtueCueaVsOaNrlxuICAgICAqIEBtZXRob2QgcG9seWhlZHJvblxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge3ByaW1pdGl2ZS5Qb2x5aGVkcm9uVHlwZX0gdHlwZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBTaXplXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy5zaXplWFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLnNpemVZXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMuc2l6ZVpcbiAgICAgKiBAcmV0dXJuIHtwcmltaXRpdmUuVmVydGV4RGF0YX1cbiAgICAgKi9cbiAgICBwb2x5aGVkcm9uLFxuXG4gICAgUG9seWhlZHJvblR5cGUsXG4gICAgVmVydGV4RGF0YSxcbn0sIHV0aWxzKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHMpO1xuXG52YXIgX2JveCA9IHJlcXVpcmUoJy4vYm94Jyk7XG5cbnZhciBfYm94MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JveCk7XG5cbnZhciBfY29uZSA9IHJlcXVpcmUoJy4vY29uZScpO1xuXG52YXIgX2NvbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29uZSk7XG5cbnZhciBfY3lsaW5kZXIgPSByZXF1aXJlKCcuL2N5bGluZGVyJyk7XG5cbnZhciBfY3lsaW5kZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3lsaW5kZXIpO1xuXG52YXIgX3BsYW5lID0gcmVxdWlyZSgnLi9wbGFuZScpO1xuXG52YXIgX3BsYW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsYW5lKTtcblxudmFyIF9xdWFkID0gcmVxdWlyZSgnLi9xdWFkJyk7XG5cbnZhciBfcXVhZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9xdWFkKTtcblxudmFyIF9zcGhlcmUgPSByZXF1aXJlKCcuL3NwaGVyZScpO1xuXG52YXIgX3NwaGVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zcGhlcmUpO1xuXG52YXIgX3RvcnVzID0gcmVxdWlyZSgnLi90b3J1cycpO1xuXG52YXIgX3RvcnVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvcnVzKTtcblxudmFyIF9jYXBzdWxlID0gcmVxdWlyZSgnLi9jYXBzdWxlJyk7XG5cbnZhciBfY2Fwc3VsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYXBzdWxlKTtcblxudmFyIF9wb2x5aGVkcm9uID0gcmVxdWlyZSgnLi9wb2x5aGVkcm9uJyk7XG5cbnZhciBfdmVydGV4RGF0YSA9IHJlcXVpcmUoJy4vdmVydGV4LWRhdGEnKTtcblxudmFyIF92ZXJ0ZXhEYXRhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZlcnRleERhdGEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIOS4gOS4quWIm+W7uiAzRCDniankvZPpobbngrnmlbDmja7nmoTln7rnoYDmqKHlnZfvvIzkvaDlj6/ku6XpgJrov4cgXCJjYy5wcmltaXRpdmVcIiDmnaXorr/pl67ov5nkuKrmqKHlnZfjgIJcbiAqIEBtb2R1bGUgY2MucHJpbWl0aXZlXG4gKiBAc3VibW9kdWxlIGNjLnByaW1pdGl2ZVxuICogQG1haW5cbiAqL1xuXG5jYy5wcmltaXRpdmUgPSBPYmplY3QuYXNzaWduKHtcbiAgLyoqXG4gICAqICEjZW4gQ3JlYXRlIGJveCB2ZXJ0ZXggZGF0YVxuICAgKiAhI3poIOWIm+W7uumVv+aWueS9k+mhtueCueaVsOaNrlxuICAgKiBAbWV0aG9kIGJveFxuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGhcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMud2lkdGhTZWdtZW50c1xuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy5oZWlnaHRTZWdtZW50c1xuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy5sZW5ndGhTZWdtZW50c1xuICAgKiBAcmV0dXJuIHtwcmltaXRpdmUuVmVydGV4RGF0YX1cbiAgICovXG4gIGJveDogX2JveDIuZGVmYXVsdCxcbiAgLyoqXG4gICAqICEjZW4gQ3JlYXRlIGNvbmUgdmVydGV4IGRhdGFcbiAgICogISN6aCDliJvlu7rlnIbplKXkvZPpobbngrnmlbDmja5cbiAgICogQG1ldGhvZCBjb25lXG4gICAqIEBzdGF0aWNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJhZGl1c1xuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLnJhZGlhbFNlZ21lbnRzXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLmhlaWdodFNlZ21lbnRzXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0cy5jYXBwZWRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMuYXJjXG4gICAqIEByZXR1cm4ge3ByaW1pdGl2ZS5WZXJ0ZXhEYXRhfVxuICAgKi9cbiAgY29uZTogX2NvbmUyLmRlZmF1bHQsXG4gIC8qKlxuICAgKiAhI2VuIENyZWF0ZSBjeWxpbmRlciB2ZXJ0ZXggZGF0YVxuICAgKiAhI3poIOWIm+W7uuWchuafseS9k+mhtueCueaVsOaNrlxuICAgKiBAbWV0aG9kIGN5bGluZGVyXG4gICAqIEBzdGF0aWNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJhZGl1c1RvcFxuICAgKiBAcGFyYW0ge051bWJlcn0gcmFkaXVzQm90dG9tXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMucmFkaWFsU2VnbWVudHNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMuaGVpZ2h0U2VnbWVudHNcbiAgICogQHBhcmFtIHtCb29sZWFufSBvcHRzLmNhcHBlZFxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy5hcmNcbiAgICogQHJldHVybiB7cHJpbWl0aXZlLlZlcnRleERhdGF9XG4gICAqL1xuICBjeWxpbmRlcjogX2N5bGluZGVyMi5kZWZhdWx0LFxuICAvKipcbiAgICogISNlbiBDcmVhdGUgcGxhbmUgdmVydGV4IGRhdGFcbiAgICogISN6aCDliJvlu7rlubPlj7DpobbngrnmlbDmja5cbiAgICogQG1ldGhvZCBwbGFuZVxuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICAgKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLndpZHRoU2VnbWVudHNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMubGVuZ3RoU2VnbWVudHNcbiAgICogQHJldHVybiB7cHJpbWl0aXZlLlZlcnRleERhdGF9XG4gICAqL1xuICBwbGFuZTogX3BsYW5lMi5kZWZhdWx0LFxuICAvKipcbiAgICogISNlbiBDcmVhdGUgcXVhZCB2ZXJ0ZXggZGF0YVxuICAgKiAhI3poIOWIm+W7uumdoueJh+mhtueCueaVsOaNrlxuICAgKiBAbWV0aG9kIHF1YWRcbiAgICogQHN0YXRpY1xuICAgKiBAcmV0dXJuIHtwcmltaXRpdmUuVmVydGV4RGF0YX1cbiAgICovXG4gIHF1YWQ6IF9xdWFkMi5kZWZhdWx0LFxuICAvKipcbiAgICogISNlbiBDcmVhdGUgc3BoZXJlIHZlcnRleCBkYXRhXG4gICAqICEjemgg5Yib5bu655CD5L2T6aG254K55pWw5o2uXG4gICAqIEBtZXRob2Qgc3BoZXJlXG4gICAqIEBzdGF0aWNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJhZGl1c1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy5zZWdtZW50c1xuICAgKiBAcmV0dXJuIHtwcmltaXRpdmUuVmVydGV4RGF0YX1cbiAgICovXG4gIHNwaGVyZTogX3NwaGVyZTIuZGVmYXVsdCxcbiAgLyoqXG4gICAqICEjZW4gQ3JlYXRlIHRvcnVzIHZlcnRleCBkYXRhXG4gICAqICEjemgg5Yib5bu65ZyG546v6aG254K55pWw5o2uXG4gICAqIEBtZXRob2QgdG9ydXNcbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge051bWJlcn0gcmFkaXVzXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0dWJlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLnJhZGlhbFNlZ21lbnRzXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLnR1YnVsYXJTZWdtZW50c1xuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy5hcmNcbiAgICogQHJldHVybiB7cHJpbWl0aXZlLlZlcnRleERhdGF9XG4gICAqL1xuICB0b3J1czogX3RvcnVzMi5kZWZhdWx0LFxuICAvKipcbiAgICogISNlbiBDcmVhdGUgY2Fwc3VsZSB2ZXJ0ZXggZGF0YVxuICAgKiAhI3poIOWIm+W7uuiDtuWbiuS9k+mhtueCueaVsOaNrlxuICAgKiBAbWV0aG9kIGNhcHN1bGVcbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge051bWJlcn0gcmFkaXVzVG9wXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByYWRpdXNCb3R0b21cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy5zaWRlc1xuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy5oZWlnaHRTZWdtZW50c1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdHMuY2FwcGVkXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLmFyY1xuICAgKiBAcmV0dXJuIHtwcmltaXRpdmUuVmVydGV4RGF0YX1cbiAgICovXG4gIGNhcHN1bGU6IF9jYXBzdWxlMi5kZWZhdWx0LFxuICAvKipcbiAgICogISNlbiBDcmVhdGUgcG9seWhlZHJvbiB2ZXJ0ZXggZGF0YVxuICAgKiAhI3poIOWIm+W7uuWkmumdouS9k+mhtueCueaVsOaNrlxuICAgKiBAbWV0aG9kIHBvbHloZWRyb25cbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge3ByaW1pdGl2ZS5Qb2x5aGVkcm9uVHlwZX0gdHlwZVxuICAgKiBAcGFyYW0ge051bWJlcn0gU2l6ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy5zaXplWFxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy5zaXplWVxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy5zaXplWlxuICAgKiBAcmV0dXJuIHtwcmltaXRpdmUuVmVydGV4RGF0YX1cbiAgICovXG4gIHBvbHloZWRyb246IF9wb2x5aGVkcm9uLnBvbHloZWRyb24sXG5cbiAgUG9seWhlZHJvblR5cGU6IF9wb2x5aGVkcm9uLlBvbHloZWRyb25UeXBlLFxuICBWZXJ0ZXhEYXRhOiBfdmVydGV4RGF0YTIuZGVmYXVsdFxufSwgX3V0aWxzMi5kZWZhdWx0KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltbHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJbU5qSWl3aWNISnBiV2wwYVhabElpd2lUMkpxWldOMElpd2lZWE56YVdkdUlpd2lZbTk0SWl3aVkyOXVaU0lzSW1ONWJHbHVaR1Z5SWl3aWNHeGhibVVpTENKeGRXRmtJaXdpYzNCb1pYSmxJaXdpZEc5eWRYTWlMQ0pqWVhCemRXeGxJaXdpY0c5c2VXaGxaSEp2YmlJc0lsQnZiSGxvWldSeWIyNVVlWEJsSWl3aVZtVnlkR1Y0UkdGMFlTSXNJblYwYVd4eklsMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenRCUVVOQk96czdPenM3UVVGRlFUczdPenM3T3p0QlFVOUJRU3hIUVVGSFF5eFRRVUZJTEVkQlFXVkRMRTlCUVU5RExFMUJRVkFzUTBGQll6dEJRVU42UWpzN096czdPenM3T3pzN096czdRVUZqUVVNc2IwSkJabmxDTzBGQlowSjZRanM3T3pzN096czdPenM3T3pzN1FVRmpRVU1zYzBKQk9VSjVRanRCUVN0Q2VrSTdPenM3T3pzN096czdPenM3T3p0QlFXVkJReXc0UWtFNVEzbENPMEZCSzBONlFqczdPenM3T3pzN096czdPMEZCV1VGRExIZENRVE5FZVVJN1FVRTBSSHBDT3pzN096czdPMEZCVDBGRExITkNRVzVGZVVJN1FVRnZSWHBDT3pzN096czdPenM3TzBGQlZVRkRMREJDUVRsRmVVSTdRVUVyUlhwQ096czdPenM3T3pzN096czdPMEZCWVVGRExIZENRVFZHZVVJN1FVRTJSbnBDT3pzN096czdPenM3T3pzN096czdRVUZsUVVNc05FSkJOVWQ1UWp0QlFUWkhla0k3T3pzN096czdPenM3T3pzN1FVRmhRVU1zYjBOQk1VaDVRanM3UVVFMFNIcENReXcwUTBFMVNIbENPMEZCTmtoNlFrTTdRVUUzU0hsQ0xFTkJRV1FzUlVFNFNGcERMR1ZCT1VoWkxFTkJRV1lpTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZFhScGJITWdabkp2YlNBbkxpOTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ1ltOTRJR1p5YjIwZ0p5NHZZbTk0Snp0Y2JtbHRjRzl5ZENCamIyNWxJR1p5YjIwZ0p5NHZZMjl1WlNjN1hHNXBiWEJ2Y25RZ1kzbHNhVzVrWlhJZ1puSnZiU0FuTGk5amVXeHBibVJsY2ljN1hHNXBiWEJ2Y25RZ2NHeGhibVVnWm5KdmJTQW5MaTl3YkdGdVpTYzdYRzVwYlhCdmNuUWdjWFZoWkNCbWNtOXRJQ2N1TDNGMVlXUW5PMXh1YVcxd2IzSjBJSE53YUdWeVpTQm1jbTl0SUNjdUwzTndhR1Z5WlNjN1hHNXBiWEJ2Y25RZ2RHOXlkWE1nWm5KdmJTQW5MaTkwYjNKMWN5YzdYRzVwYlhCdmNuUWdZMkZ3YzNWc1pTQm1jbTl0SUNjdUwyTmhjSE4xYkdVbk8xeHVhVzF3YjNKMElIc2dVRzlzZVdobFpISnZibFI1Y0dVc0lIQnZiSGxvWldSeWIyNGdmU0JtY205dElDY3VMM0J2Ykhsb1pXUnliMjRuTzF4dWFXMXdiM0owSUZabGNuUmxlRVJoZEdFZ1puSnZiU0FuTGk5MlpYSjBaWGd0WkdGMFlTYzdYRzVjYmk4cUtseHVJQ29nNUxpQTVMaXE1WWliNWJ1NklETkVJT2VKcWVTOWsrbWh0dWVDdWVhVnNPYU5ydWVhaE9XZnV1ZWhnT2Fvb2VXZGwrKzhqT1M5b09XUHIrUzdwZW1BbXVpL2h5QmNJbU5qTG5CeWFXMXBkR2wyWlZ3aUlPYWRwZWl1dittWHJ1aS9tZVM0cXVhb29lV2RsK09BZ2x4dUlDb2dRRzF2WkhWc1pTQmpZeTV3Y21sdGFYUnBkbVZjYmlBcUlFQnpkV0p0YjJSMWJHVWdZMk11Y0hKcGJXbDBhWFpsWEc0Z0tpQkFiV0ZwYmx4dUlDb3ZYRzVjYm1OakxuQnlhVzFwZEdsMlpTQTlJRTlpYW1WamRDNWhjM05wWjI0b2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlDRWpaVzRnUTNKbFlYUmxJR0p2ZUNCMlpYSjBaWGdnWkdGMFlWeHVJQ0FnSUNBcUlDRWplbWdnNVlpYjVidTY2WlcvNXBhNTVMMlQ2YUcyNTRLNTVwV3c1bzJ1WEc0Z0lDQWdJQ29nUUcxbGRHaHZaQ0JpYjNoY2JpQWdJQ0FnS2lCQWMzUmhkR2xqWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRPZFcxaVpYSjlJSGRwWkhSb1hHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0T2RXMWlaWEo5SUdobGFXZG9kRnh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdUblZ0WW1WeWZTQnNaVzVuZEdoY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnYjNCMGMxeHVJQ0FnSUNBcUlFQndZWEpoYlNCN1RuVnRZbVZ5ZlNCdmNIUnpMbmRwWkhSb1UyVm5iV1Z1ZEhOY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA1MWJXSmxjbjBnYjNCMGN5NW9aV2xuYUhSVFpXZHRaVzUwYzF4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3VG5WdFltVnlmU0J2Y0hSekxteGxibWQwYUZObFoyMWxiblJ6WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Y0hKcGJXbDBhWFpsTGxabGNuUmxlRVJoZEdGOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWW05NExGeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlDRWpaVzRnUTNKbFlYUmxJR052Ym1VZ2RtVnlkR1Y0SUdSaGRHRmNiaUFnSUNBZ0tpQWhJM3BvSU9XSW0rVzd1dVdjaHVtVXBlUzlrK21odHVlQ3VlYVZzT2FOcmx4dUlDQWdJQ0FxSUVCdFpYUm9iMlFnWTI5dVpWeHVJQ0FnSUNBcUlFQnpkR0YwYVdOY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA1MWJXSmxjbjBnY21Ga2FYVnpYRzRnSUNBZ0lDb2dRSEJoY21GdElIdE9kVzFpWlhKOUlHaGxhV2RvZEZ4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0J2Y0hSelhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0T2RXMWlaWEo5SUc5d2RITXVjbUZrYVdGc1UyVm5iV1Z1ZEhOY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA1MWJXSmxjbjBnYjNCMGN5NW9aV2xuYUhSVFpXZHRaVzUwYzF4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3UW05dmJHVmhibjBnYjNCMGN5NWpZWEJ3WldSY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA1MWJXSmxjbjBnYjNCMGN5NWhjbU5jYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHR3Y21sdGFYUnBkbVV1Vm1WeWRHVjRSR0YwWVgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JqYjI1bExGeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlDRWpaVzRnUTNKbFlYUmxJR041YkdsdVpHVnlJSFpsY25SbGVDQmtZWFJoWEc0Z0lDQWdJQ29nSVNONmFDRGxpSnZsdTdybG5JYm1uN0hrdlpQcG9iYm5ncm5tbGJEbWphNWNiaUFnSUNBZ0tpQkFiV1YwYUc5a0lHTjViR2x1WkdWeVhHNGdJQ0FnSUNvZ1FITjBZWFJwWTF4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3VG5WdFltVnlmU0J5WVdScGRYTlViM0JjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMDUxYldKbGNuMGdjbUZrYVhWelFtOTBkRzl0WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRPZFcxaVpYSjlJR2hsYVdkb2RGeHVJQ0FnSUNBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCdmNIUnpYRzRnSUNBZ0lDb2dRSEJoY21GdElIdE9kVzFpWlhKOUlHOXdkSE11Y21Ga2FXRnNVMlZuYldWdWRITmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UwNTFiV0psY24wZ2IzQjBjeTVvWldsbmFIUlRaV2R0Wlc1MGMxeHVJQ0FnSUNBcUlFQndZWEpoYlNCN1FtOXZiR1ZoYm4wZ2IzQjBjeTVqWVhCd1pXUmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UwNTFiV0psY24wZ2IzQjBjeTVoY21OY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0d2NtbHRhWFJwZG1VdVZtVnlkR1Y0UkdGMFlYMWNiaUFnSUNBZ0tpOWNiaUFnSUNCamVXeHBibVJsY2l4Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lBaEkyVnVJRU55WldGMFpTQndiR0Z1WlNCMlpYSjBaWGdnWkdGMFlWeHVJQ0FnSUNBcUlDRWplbWdnNVlpYjVidTY1Ym16NVkrdzZhRzI1NEs1NXBXdzVvMnVYRzRnSUNBZ0lDb2dRRzFsZEdodlpDQndiR0Z1WlZ4dUlDQWdJQ0FxSUVCemRHRjBhV05jYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMDUxYldKbGNuMGdkMmxrZEdoY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA1MWJXSmxjbjBnYkdWdVozUm9YRzRnSUNBZ0lDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHOXdkSE5jYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMDUxYldKbGNuMGdiM0IwY3k1M2FXUjBhRk5sWjIxbGJuUnpYRzRnSUNBZ0lDb2dRSEJoY21GdElIdE9kVzFpWlhKOUlHOXdkSE11YkdWdVozUm9VMlZuYldWdWRITmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdHdjbWx0YVhScGRtVXVWbVZ5ZEdWNFJHRjBZWDFjYmlBZ0lDQWdLaTljYmlBZ0lDQndiR0Z1WlN4Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lBaEkyVnVJRU55WldGMFpTQnhkV0ZrSUhabGNuUmxlQ0JrWVhSaFhHNGdJQ0FnSUNvZ0lTTjZhQ0RsaUp2bHU3cnBuYUxuaVlmcG9iYm5ncm5tbGJEbWphNWNiaUFnSUNBZ0tpQkFiV1YwYUc5a0lIRjFZV1JjYmlBZ0lDQWdLaUJBYzNSaGRHbGpYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdjSEpwYldsMGFYWmxMbFpsY25SbGVFUmhkR0Y5WEc0Z0lDQWdJQ292WEc0Z0lDQWdjWFZoWkN4Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lBaEkyVnVJRU55WldGMFpTQnpjR2hsY21VZ2RtVnlkR1Y0SUdSaGRHRmNiaUFnSUNBZ0tpQWhJM3BvSU9XSW0rVzd1dWVRZytTOWsrbWh0dWVDdWVhVnNPYU5ybHh1SUNBZ0lDQXFJRUJ0WlhSb2IyUWdjM0JvWlhKbFhHNGdJQ0FnSUNvZ1FITjBZWFJwWTF4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3VG5WdFltVnlmU0J5WVdScGRYTmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2IzQjBjMXh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdUblZ0WW1WeWZTQnZjSFJ6TG5ObFoyMWxiblJ6WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Y0hKcGJXbDBhWFpsTGxabGNuUmxlRVJoZEdGOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnYzNCb1pYSmxMRnh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJQ0VqWlc0Z1EzSmxZWFJsSUhSdmNuVnpJSFpsY25SbGVDQmtZWFJoWEc0Z0lDQWdJQ29nSVNONmFDRGxpSnZsdTdybG5JYm5qcS9wb2Jibmdybm1sYkRtamE1Y2JpQWdJQ0FnS2lCQWJXVjBhRzlrSUhSdmNuVnpYRzRnSUNBZ0lDb2dRSE4wWVhScFkxeHVJQ0FnSUNBcUlFQndZWEpoYlNCN1RuVnRZbVZ5ZlNCeVlXUnBkWE5jYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMDUxYldKbGNuMGdkSFZpWlZ4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0J2Y0hSelhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0T2RXMWlaWEo5SUc5d2RITXVjbUZrYVdGc1UyVm5iV1Z1ZEhOY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA1MWJXSmxjbjBnYjNCMGN5NTBkV0oxYkdGeVUyVm5iV1Z1ZEhOY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA1MWJXSmxjbjBnYjNCMGN5NWhjbU5jYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHR3Y21sdGFYUnBkbVV1Vm1WeWRHVjRSR0YwWVgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0IwYjNKMWN5eGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQWhJMlZ1SUVOeVpXRjBaU0JqWVhCemRXeGxJSFpsY25SbGVDQmtZWFJoWEc0Z0lDQWdJQ29nSVNONmFDRGxpSnZsdTdyb2c3YmxtNHJrdlpQcG9iYm5ncm5tbGJEbWphNWNiaUFnSUNBZ0tpQkFiV1YwYUc5a0lHTmhjSE4xYkdWY2JpQWdJQ0FnS2lCQWMzUmhkR2xqWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRPZFcxaVpYSjlJSEpoWkdsMWMxUnZjRnh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdUblZ0WW1WeWZTQnlZV1JwZFhOQ2IzUjBiMjFjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMDUxYldKbGNuMGdhR1ZwWjJoMFhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUc5d2RITmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UwNTFiV0psY24wZ2IzQjBjeTV6YVdSbGMxeHVJQ0FnSUNBcUlFQndZWEpoYlNCN1RuVnRZbVZ5ZlNCdmNIUnpMbWhsYVdkb2RGTmxaMjFsYm5SelhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0Q2IyOXNaV0Z1ZlNCdmNIUnpMbU5oY0hCbFpGeHVJQ0FnSUNBcUlFQndZWEpoYlNCN1RuVnRZbVZ5ZlNCdmNIUnpMbUZ5WTF4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTNCeWFXMXBkR2wyWlM1V1pYSjBaWGhFWVhSaGZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdOaGNITjFiR1VzWEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nSVNObGJpQkRjbVZoZEdVZ2NHOXNlV2hsWkhKdmJpQjJaWEowWlhnZ1pHRjBZVnh1SUNBZ0lDQXFJQ0VqZW1nZzVZaWI1YnU2NWFTYTZaMmk1TDJUNmFHMjU0SzU1cFd3NW8ydVhHNGdJQ0FnSUNvZ1FHMWxkR2h2WkNCd2IyeDVhR1ZrY205dVhHNGdJQ0FnSUNvZ1FITjBZWFJwWTF4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Y0hKcGJXbDBhWFpsTGxCdmJIbG9aV1J5YjI1VWVYQmxmU0IwZVhCbFhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0T2RXMWlaWEo5SUZOcGVtVmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2IzQjBjMXh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdUblZ0WW1WeWZTQnZjSFJ6TG5OcGVtVllYRzRnSUNBZ0lDb2dRSEJoY21GdElIdE9kVzFpWlhKOUlHOXdkSE11YzJsNlpWbGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UwNTFiV0psY24wZ2IzQjBjeTV6YVhwbFdseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UzQnlhVzFwZEdsMlpTNVdaWEowWlhoRVlYUmhmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lIQnZiSGxvWldSeWIyNHNYRzVjYmlBZ0lDQlFiMng1YUdWa2NtOXVWSGx3WlN4Y2JpQWdJQ0JXWlhKMFpYaEVZWFJoTEZ4dWZTd2dkWFJwYkhNcE95SmRmUT09Il19