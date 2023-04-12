(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/assets/material/material-pool.js';
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
        var _utils = require('./utils');
        var _utils2 = _interopRequireDefault(_utils);
        var _pool = require('../../utils/pool');
        var _pool2 = _interopRequireDefault(_pool);
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
        var MaterialPool = function (_Pool) {
            _inherits(MaterialPool, _Pool);
            function MaterialPool() {
                var _ref;
                var _temp, _this, _ret;
                _classCallCheck(this, MaterialPool);
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }
                return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MaterialPool.__proto__ || Object.getPrototypeOf(MaterialPool)).call.apply(_ref, [this].concat(args))), _this), _this.enabled = false, _this._pool = {}, _temp), _possibleConstructorReturn(_this, _ret);
            }
            _createClass(MaterialPool, [
                {
                    key: 'get',
                    value: function get(exampleMat, renderComponent) {
                        var pool = this._pool;
                        var instance = void 0;
                        if (this.enabled) {
                            var uuid = exampleMat.effectAsset._uuid;
                            if (pool[uuid]) {
                                var key = _utils2.default.serializeDefines(exampleMat._effect._defines) + _utils2.default.serializeTechniques(exampleMat._effect._techniques);
                                instance = pool[uuid][key] && pool[uuid][key].pop();
                            }
                        }
                        if (!instance) {
                            instance = new cc.Material();
                            instance.copy(exampleMat);
                            instance._name = exampleMat._name + ' (Instance)';
                            instance._uuid = exampleMat._uuid;
                        } else {
                            this.count--;
                        }
                        instance._owner = renderComponent;
                        return instance;
                    }
                },
                {
                    key: 'put',
                    value: function put(mat) {
                        if (!this.enabled || !mat._owner) {
                            return;
                        }
                        var pool = this._pool;
                        var uuid = mat.effectAsset._uuid;
                        if (!pool[uuid]) {
                            pool[uuid] = {};
                        }
                        var key = _utils2.default.serializeDefines(mat._effect._defines) + _utils2.default.serializeTechniques(mat._effect._techniques);
                        if (!pool[uuid][key]) {
                            pool[uuid][key] = [];
                        }
                        if (this.count > this.maxSize)
                            return;
                        this._clean(mat);
                        pool[uuid][key].push(mat);
                        this.count++;
                    }
                },
                {
                    key: 'clear',
                    value: function clear() {
                        this._pool = {};
                        this.count = 0;
                    }
                },
                {
                    key: '_clean',
                    value: function _clean(mat) {
                        mat._owner = null;
                    }
                }
            ]);
            return MaterialPool;
        }(_pool2.default);
        var materialPool = new MaterialPool();
        _pool2.default.register('material', materialPool);
        exports.default = materialPool;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWFsLXBvb2wuanMiLCIvVXNlcnMvU2hhcmVkL2JpbmdvX2ZyZW56eS9lbmdpbmUvY29jb3MyZC9jb3JlL2Fzc2V0cy9tYXRlcmlhbC9tYXRlcmlhbC1wb29sLmpzIl0sIm5hbWVzIjpbIk1hdGVyaWFsUG9vbCIsImVuYWJsZWQiLCJfcG9vbCIsImV4YW1wbGVNYXQiLCJyZW5kZXJDb21wb25lbnQiLCJwb29sIiwiaW5zdGFuY2UiLCJ1dWlkIiwiZWZmZWN0QXNzZXQiLCJfdXVpZCIsImtleSIsInV0aWxzIiwic2VyaWFsaXplRGVmaW5lcyIsIl9lZmZlY3QiLCJfZGVmaW5lcyIsInNlcmlhbGl6ZVRlY2huaXF1ZXMiLCJfdGVjaG5pcXVlcyIsInBvcCIsImNjIiwiTWF0ZXJpYWwiLCJjb3B5IiwiX25hbWUiLCJjb3VudCIsIl9vd25lciIsIm1hdCIsIm1heFNpemUiLCJfY2xlYW4iLCJwdXNoIiwiUG9vbCIsIm1hdGVyaWFsUG9vbCIsInJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O1FBQUEsT0FBQSxpQkFBQSxDQUFBLE9BQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFBQSxJQUFBLE1BQUEsR0FBQSxPQUFBLENBQUEsU0FBQSxDQUFBOztRQUNBLElBQUEsS0FBQSxHQUFBLE9BQUEsQ0FBQSxrQkFBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU01BLFlBQUFBOzs7Ozs7Ozs7OE1BRUZDLFVBQVUsYUFFVkMsUUFBUTs7Ozs7d0NBRUhDLFlBQVlDLGlCQUFpQjtBQUFBLHdCQUM5QixJQUFJQyxJQUFBQSxHQUFPLEtBQUtILEtBQWhCLENBRDhCO0FBQUEsd0JBRzlCLElBQUlJLFFBQUFBLEdBQUFBLEtBQUFBLENBQUosQ0FIOEI7QUFBQSx3QkFJOUIsSUFBSSxLQUFLTCxPQUFULEVBQWtCO0FBQUEsNEJBQ2QsSUFBSU0sSUFBQUEsR0FBT0osVUFBQUEsQ0FBV0ss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QUFLO0FBQUEsd0JBQ1RBLEdBQUFBLENBQUlELE1BQUpDLEdBQWEsSUFBYkEsQ0FEUztBQUFBOzs7O1VBL0RVSSxNQUFBQSxDQUFBQTtRQW9FM0IsSUFBSUMsWUFBQUEsR0FBZSxJQUFJN0IsWUFBSixFQUFuQjtRQUNBNEIsTUFBQUEsQ0FBQUEsT0FBQUEsQ0FBS0UsUUFBTEYsQ0FBYyxVQUFkQSxFQUEwQkMsWUFBMUJEOzBCQUNlQyIsImZpbGUiOiJtYXRlcmlhbC1wb29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IFBvb2wgZnJvbSAnLi4vLi4vdXRpbHMvcG9vbCc7XG5cbi8qKlxuICoge1xuICogICBlZmZlY3RVdWlkOiB7XG4gKiAgICAgZGVmaW5lU2VyaWFsaXplS2V5OiBbXVxuICogICB9XG4gKiB9XG4gKi9cbmNsYXNzIE1hdGVyaWFsUG9vbCBleHRlbmRzIFBvb2wge1xuICAgIC8vIGRlZmF1bHQgZGlzYWJsZWQgbWF0ZXJpYWwgcG9vbFxuICAgIGVuYWJsZWQgPSBmYWxzZTtcbiAgICBcbiAgICBfcG9vbCA9IHt9O1xuXG4gICAgZ2V0IChleGFtcGxlTWF0LCByZW5kZXJDb21wb25lbnQpIHtcbiAgICAgICAgbGV0IHBvb2wgPSB0aGlzLl9wb29sO1xuXG4gICAgICAgIGxldCBpbnN0YW5jZTtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgbGV0IHV1aWQgPSBleGFtcGxlTWF0LmVmZmVjdEFzc2V0Ll91dWlkO1xuICAgICAgICAgICAgaWYgKHBvb2xbdXVpZF0pIHtcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNlcmlhbGl6ZURlZmluZXMoZXhhbXBsZU1hdC5fZWZmZWN0Ll9kZWZpbmVzKSArXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNlcmlhbGl6ZVRlY2huaXF1ZXMoZXhhbXBsZU1hdC5fZWZmZWN0Ll90ZWNobmlxdWVzKTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHBvb2xbdXVpZF1ba2V5XSAmJiBwb29sW3V1aWRdW2tleV0ucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgY2MuTWF0ZXJpYWwoKTtcbiAgICAgICAgICAgIGluc3RhbmNlLmNvcHkoZXhhbXBsZU1hdCk7XG4gICAgICAgICAgICBpbnN0YW5jZS5fbmFtZSA9IGV4YW1wbGVNYXQuX25hbWUgKyAnIChJbnN0YW5jZSknO1xuICAgICAgICAgICAgaW5zdGFuY2UuX3V1aWQgPSBleGFtcGxlTWF0Ll91dWlkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb3VudC0tO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGluc3RhbmNlLl9vd25lciA9IHJlbmRlckNvbXBvbmVudDtcbiAgICBcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBcbiAgICBwdXQgKG1hdCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCB8fCAhbWF0Ll9vd25lcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBvb2wgPSB0aGlzLl9wb29sO1xuICAgICAgICBsZXQgdXVpZCA9IG1hdC5lZmZlY3RBc3NldC5fdXVpZDtcbiAgICAgICAgaWYgKCFwb29sW3V1aWRdKSB7XG4gICAgICAgICAgICBwb29sW3V1aWRdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGtleSA9IFxuICAgICAgICAgICAgdXRpbHMuc2VyaWFsaXplRGVmaW5lcyhtYXQuX2VmZmVjdC5fZGVmaW5lcykgK1xuICAgICAgICAgICAgdXRpbHMuc2VyaWFsaXplVGVjaG5pcXVlcyhtYXQuX2VmZmVjdC5fdGVjaG5pcXVlcyk7XG4gICAgICAgIGlmICghcG9vbFt1dWlkXVtrZXldKSB7XG4gICAgICAgICAgICBwb29sW3V1aWRdW2tleV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb3VudCA+IHRoaXMubWF4U2l6ZSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuX2NsZWFuKG1hdCk7XG4gICAgICAgIHBvb2xbdXVpZF1ba2V5XS5wdXNoKG1hdCk7XG4gICAgICAgIHRoaXMuY291bnQrKztcbiAgICB9XG5cbiAgICBjbGVhciAoKSB7XG4gICAgICAgIHRoaXMuX3Bvb2wgPSB7fTtcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgfVxuXG4gICAgX2NsZWFuIChtYXQpIHtcbiAgICAgICAgbWF0Ll9vd25lciA9IG51bGw7XG4gICAgfVxufVxuXG5sZXQgbWF0ZXJpYWxQb29sID0gbmV3IE1hdGVyaWFsUG9vbCgpO1xuUG9vbC5yZWdpc3RlcignbWF0ZXJpYWwnLCBtYXRlcmlhbFBvb2wpO1xuZXhwb3J0IGRlZmF1bHQgbWF0ZXJpYWxQb29sO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHMpO1xuXG52YXIgX3Bvb2wgPSByZXF1aXJlKCcuLi8uLi91dGlscy9wb29sJyk7XG5cbnZhciBfcG9vbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb29sKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIHtcbiAqICAgZWZmZWN0VXVpZDoge1xuICogICAgIGRlZmluZVNlcmlhbGl6ZUtleTogW11cbiAqICAgfVxuICogfVxuICovXG52YXIgTWF0ZXJpYWxQb29sID0gZnVuY3Rpb24gKF9Qb29sKSB7XG4gICAgX2luaGVyaXRzKE1hdGVyaWFsUG9vbCwgX1Bvb2wpO1xuXG4gICAgZnVuY3Rpb24gTWF0ZXJpYWxQb29sKCkge1xuICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXRlcmlhbFBvb2wpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IE1hdGVyaWFsUG9vbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1hdGVyaWFsUG9vbCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmVuYWJsZWQgPSBmYWxzZSwgX3RoaXMuX3Bvb2wgPSB7fSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gICAgfVxuICAgIC8vIGRlZmF1bHQgZGlzYWJsZWQgbWF0ZXJpYWwgcG9vbFxuXG5cbiAgICBfY3JlYXRlQ2xhc3MoTWF0ZXJpYWxQb29sLCBbe1xuICAgICAgICBrZXk6ICdnZXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGV4YW1wbGVNYXQsIHJlbmRlckNvbXBvbmVudCkge1xuICAgICAgICAgICAgdmFyIHBvb2wgPSB0aGlzLl9wb29sO1xuXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHV1aWQgPSBleGFtcGxlTWF0LmVmZmVjdEFzc2V0Ll91dWlkO1xuICAgICAgICAgICAgICAgIGlmIChwb29sW3V1aWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBfdXRpbHMyLmRlZmF1bHQuc2VyaWFsaXplRGVmaW5lcyhleGFtcGxlTWF0Ll9lZmZlY3QuX2RlZmluZXMpICsgX3V0aWxzMi5kZWZhdWx0LnNlcmlhbGl6ZVRlY2huaXF1ZXMoZXhhbXBsZU1hdC5fZWZmZWN0Ll90ZWNobmlxdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UgPSBwb29sW3V1aWRdW2tleV0gJiYgcG9vbFt1dWlkXVtrZXldLnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGNjLk1hdGVyaWFsKCk7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY29weShleGFtcGxlTWF0KTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5fbmFtZSA9IGV4YW1wbGVNYXQuX25hbWUgKyAnIChJbnN0YW5jZSknO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLl91dWlkID0gZXhhbXBsZU1hdC5fdXVpZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudC0tO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnN0YW5jZS5fb3duZXIgPSByZW5kZXJDb21wb25lbnQ7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHV0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHB1dChtYXQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5lbmFibGVkIHx8ICFtYXQuX293bmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcG9vbCA9IHRoaXMuX3Bvb2w7XG4gICAgICAgICAgICB2YXIgdXVpZCA9IG1hdC5lZmZlY3RBc3NldC5fdXVpZDtcbiAgICAgICAgICAgIGlmICghcG9vbFt1dWlkXSkge1xuICAgICAgICAgICAgICAgIHBvb2xbdXVpZF0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBrZXkgPSBfdXRpbHMyLmRlZmF1bHQuc2VyaWFsaXplRGVmaW5lcyhtYXQuX2VmZmVjdC5fZGVmaW5lcykgKyBfdXRpbHMyLmRlZmF1bHQuc2VyaWFsaXplVGVjaG5pcXVlcyhtYXQuX2VmZmVjdC5fdGVjaG5pcXVlcyk7XG4gICAgICAgICAgICBpZiAoIXBvb2xbdXVpZF1ba2V5XSkge1xuICAgICAgICAgICAgICAgIHBvb2xbdXVpZF1ba2V5XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY291bnQgPiB0aGlzLm1heFNpemUpIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5fY2xlYW4obWF0KTtcbiAgICAgICAgICAgIHBvb2xbdXVpZF1ba2V5XS5wdXNoKG1hdCk7XG4gICAgICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NsZWFyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICAgICAgdGhpcy5fcG9vbCA9IHt9O1xuICAgICAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ19jbGVhbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY2xlYW4obWF0KSB7XG4gICAgICAgICAgICBtYXQuX293bmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNYXRlcmlhbFBvb2w7XG59KF9wb29sMi5kZWZhdWx0KTtcblxudmFyIG1hdGVyaWFsUG9vbCA9IG5ldyBNYXRlcmlhbFBvb2woKTtcbl9wb29sMi5kZWZhdWx0LnJlZ2lzdGVyKCdtYXRlcmlhbCcsIG1hdGVyaWFsUG9vbCk7XG5leHBvcnRzLmRlZmF1bHQgPSBtYXRlcmlhbFBvb2w7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltMWhkR1Z5YVdGc0xYQnZiMnd1YW5NaVhTd2libUZ0WlhNaU9sc2lUV0YwWlhKcFlXeFFiMjlzSWl3aVpXNWhZbXhsWkNJc0lsOXdiMjlzSWl3aVpYaGhiWEJzWlUxaGRDSXNJbkpsYm1SbGNrTnZiWEJ2Ym1WdWRDSXNJbkJ2YjJ3aUxDSnBibk4wWVc1alpTSXNJblYxYVdRaUxDSmxabVpsWTNSQmMzTmxkQ0lzSWw5MWRXbGtJaXdpYTJWNUlpd2lkWFJwYkhNaUxDSnpaWEpwWVd4cGVtVkVaV1pwYm1Weklpd2lYMlZtWm1WamRDSXNJbDlrWldacGJtVnpJaXdpYzJWeWFXRnNhWHBsVkdWamFHNXBjWFZsY3lJc0lsOTBaV05vYm1seGRXVnpJaXdpY0c5d0lpd2lZMk1pTENKTllYUmxjbWxoYkNJc0ltTnZjSGtpTENKZmJtRnRaU0lzSW1OdmRXNTBJaXdpWDI5M2JtVnlJaXdpYldGMElpd2liV0Y0VTJsNlpTSXNJbDlqYkdWaGJpSXNJbkIxYzJnaUxDSlFiMjlzSWl3aWJXRjBaWEpwWVd4UWIyOXNJaXdpY21WbmFYTjBaWElpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3pzN096czdPenM3TzBGQlJVRTdPenM3T3pzN1NVRlBUVUVzV1RzN096czdPenM3T3pzN096czdjMDFCUlVaRExFOHNSMEZCVlN4TExGRkJSVlpETEVzc1IwRkJVU3hGT3p0QlFVaFNPenM3T3pzMFFrRkxTME1zVlN4RlFVRlpReXhsTEVWQlFXbENPMEZCUXpsQ0xHZENRVUZKUXl4UFFVRlBMRXRCUVV0SUxFdEJRV2hDT3p0QlFVVkJMR2RDUVVGSlNTeHBRa0ZCU2p0QlFVTkJMR2RDUVVGSkxFdEJRVXRNTEU5QlFWUXNSVUZCYTBJN1FVRkRaQ3h2UWtGQlNVMHNUMEZCVDBvc1YwRkJWMHNzVjBGQldDeERRVUYxUWtNc1MwRkJiRU03UVVGRFFTeHZRa0ZCU1Vvc1MwRkJTMFVzU1VGQlRDeERRVUZLTEVWQlFXZENPMEZCUTFvc2QwSkJRVWxITEUxQlEwRkRMR2RDUVVGTlF5eG5Ra0ZCVGl4RFFVRjFRbFFzVjBGQlYxVXNUMEZCV0N4RFFVRnRRa01zVVVGQk1VTXNTVUZEUVVnc1owSkJRVTFKTEcxQ1FVRk9MRU5CUVRCQ1dpeFhRVUZYVlN4UFFVRllMRU5CUVcxQ1J5eFhRVUUzUXl4RFFVWktPMEZCUjBGV0xDdENRVUZYUkN4TFFVRkxSU3hKUVVGTUxFVkJRVmRITEVkQlFWZ3NTMEZCYlVKTUxFdEJRVXRGTEVsQlFVd3NSVUZCVjBjc1IwRkJXQ3hGUVVGblFrOHNSMEZCYUVJc1JVRkJPVUk3UVVGRFNEdEJRVU5LT3p0QlFVVkVMR2RDUVVGSkxFTkJRVU5ZTEZGQlFVd3NSVUZCWlR0QlFVTllRU3d5UWtGQlZ5eEpRVUZKV1N4SFFVRkhReXhSUVVGUUxFVkJRVmc3UVVGRFFXSXNlVUpCUVZOakxFbEJRVlFzUTBGQlkycENMRlZCUVdRN1FVRkRRVWNzZVVKQlFWTmxMRXRCUVZRc1IwRkJhVUpzUWl4WFFVRlhhMElzUzBGQldDeEhRVUZ0UWl4aFFVRndRenRCUVVOQlppeDVRa0ZCVTBjc1MwRkJWQ3hIUVVGcFFrNHNWMEZCVjAwc1MwRkJOVUk3UVVGRFNDeGhRVXhFTEUxQlRVczdRVUZEUkN4eFFrRkJTMkVzUzBGQlREdEJRVU5JT3p0QlFVVkVhRUlzY1VKQlFWTnBRaXhOUVVGVUxFZEJRV3RDYmtJc1pVRkJiRUk3TzBGQlJVRXNiVUpCUVU5RkxGRkJRVkE3UVVGRFNEczdPelJDUVVWSmEwSXNSeXhGUVVGTE8wRkJRMDRzWjBKQlFVa3NRMEZCUXl4TFFVRkxka0lzVDBGQlRpeEpRVUZwUWl4RFFVRkRkVUlzU1VGQlNVUXNUVUZCTVVJc1JVRkJhME03UVVGRE9VSTdRVUZEU0RzN1FVRkZSQ3huUWtGQlNXeENMRTlCUVU4c1MwRkJTMGdzUzBGQmFFSTdRVUZEUVN4blFrRkJTVXNzVDBGQlQybENMRWxCUVVsb1FpeFhRVUZLTEVOQlFXZENReXhMUVVFelFqdEJRVU5CTEdkQ1FVRkpMRU5CUVVOS0xFdEJRVXRGTEVsQlFVd3NRMEZCVEN4RlFVRnBRanRCUVVOaVJpeHhRa0ZCUzBVc1NVRkJUQ3hKUVVGaExFVkJRV0k3UVVGRFNEdEJRVU5FTEdkQ1FVRkpSeXhOUVVOQlF5eG5Ra0ZCVFVNc1owSkJRVTRzUTBGQmRVSlpMRWxCUVVsWUxFOUJRVW9zUTBGQldVTXNVVUZCYmtNc1NVRkRRVWdzWjBKQlFVMUpMRzFDUVVGT0xFTkJRVEJDVXl4SlFVRkpXQ3hQUVVGS0xFTkJRVmxITEZkQlFYUkRMRU5CUmtvN1FVRkhRU3huUWtGQlNTeERRVUZEV0N4TFFVRkxSU3hKUVVGTUxFVkJRVmRITEVkQlFWZ3NRMEZCVEN4RlFVRnpRanRCUVVOc1Frd3NjVUpCUVV0RkxFbEJRVXdzUlVGQlYwY3NSMEZCV0N4SlFVRnJRaXhGUVVGc1FqdEJRVU5JTzBGQlEwUXNaMEpCUVVrc1MwRkJTMWtzUzBGQlRDeEhRVUZoTEV0QlFVdEhMRTlCUVhSQ0xFVkJRU3RDT3p0QlFVVXZRaXhwUWtGQlMwTXNUVUZCVEN4RFFVRlpSaXhIUVVGYU8wRkJRMEZ1UWl4cFFrRkJTMFVzU1VGQlRDeEZRVUZYUnl4SFFVRllMRVZCUVdkQ2FVSXNTVUZCYUVJc1EwRkJjVUpJTEVkQlFYSkNPMEZCUTBFc2FVSkJRVXRHTEV0QlFVdzdRVUZEU0RzN08yZERRVVZSTzBGQlEwd3NhVUpCUVV0d1FpeExRVUZNTEVkQlFXRXNSVUZCWWp0QlFVTkJMR2xDUVVGTGIwSXNTMEZCVEN4SFFVRmhMRU5CUVdJN1FVRkRTRHM3T3l0Q1FVVlBSU3hITEVWQlFVczdRVUZEVkVFc1owSkJRVWxFTEUxQlFVb3NSMEZCWVN4SlFVRmlPMEZCUTBnN096czdSVUZxUlhOQ1N5eGpPenRCUVc5Rk0wSXNTVUZCU1VNc1pVRkJaU3hKUVVGSk4wSXNXVUZCU2l4RlFVRnVRanRCUVVOQk5FSXNaVUZCUzBVc1VVRkJUQ3hEUVVGakxGVkJRV1FzUlVGQk1FSkVMRmxCUVRGQ08ydENRVU5sUVN4Wklpd2labWxzWlNJNkltMWhkR1Z5YVdGc0xYQnZiMnd1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RYUnBiSE1nWm5KdmJTQW5MaTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdVRzl2YkNCbWNtOXRJQ2N1TGk4dUxpOTFkR2xzY3k5d2IyOXNKenRjYmx4dUx5b3FYRzRnS2lCN1hHNGdLaUFnSUdWbVptVmpkRlYxYVdRNklIdGNiaUFxSUNBZ0lDQmtaV1pwYm1WVFpYSnBZV3hwZW1WTFpYazZJRnRkWEc0Z0tpQWdJSDFjYmlBcUlIMWNiaUFxTDF4dVkyeGhjM01nVFdGMFpYSnBZV3hRYjI5c0lHVjRkR1Z1WkhNZ1VHOXZiQ0I3WEc0Z0lDQWdMeThnWkdWbVlYVnNkQ0JrYVhOaFlteGxaQ0J0WVhSbGNtbGhiQ0J3YjI5c1hHNGdJQ0FnWlc1aFlteGxaQ0E5SUdaaGJITmxPMXh1SUNBZ0lGeHVJQ0FnSUY5d2IyOXNJRDBnZTMwN1hHNWNiaUFnSUNCblpYUWdLR1Y0WVcxd2JHVk5ZWFFzSUhKbGJtUmxja052YlhCdmJtVnVkQ2tnZTF4dUlDQWdJQ0FnSUNCc1pYUWdjRzl2YkNBOUlIUm9hWE11WDNCdmIydzdYRzVjYmlBZ0lDQWdJQ0FnYkdWMElHbHVjM1JoYm1ObE8xeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWxibUZpYkdWa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdkWFZwWkNBOUlHVjRZVzF3YkdWTllYUXVaV1ptWldOMFFYTnpaWFF1WDNWMWFXUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jRzl2YkZ0MWRXbGtYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4bGRDQnJaWGtnUFNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkWFJwYkhNdWMyVnlhV0ZzYVhwbFJHVm1hVzVsY3lobGVHRnRjR3hsVFdGMExsOWxabVpsWTNRdVgyUmxabWx1WlhNcElDdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZFhScGJITXVjMlZ5YVdGc2FYcGxWR1ZqYUc1cGNYVmxjeWhsZUdGdGNHeGxUV0YwTGw5bFptWmxZM1F1WDNSbFkyaHVhWEYxWlhNcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbHVjM1JoYm1ObElEMGdjRzl2YkZ0MWRXbGtYVnRyWlhsZElDWW1JSEJ2YjJ4YmRYVnBaRjFiYTJWNVhTNXdiM0FvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0JwWmlBb0lXbHVjM1JoYm1ObEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcGJuTjBZVzVqWlNBOUlHNWxkeUJqWXk1TllYUmxjbWxoYkNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVc1emRHRnVZMlV1WTI5d2VTaGxlR0Z0Y0d4bFRXRjBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbHVjM1JoYm1ObExsOXVZVzFsSUQwZ1pYaGhiWEJzWlUxaGRDNWZibUZ0WlNBcklDY2dLRWx1YzNSaGJtTmxLU2M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBibk4wWVc1alpTNWZkWFZwWkNBOUlHVjRZVzF3YkdWTllYUXVYM1YxYVdRN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTnZkVzUwTFMwN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ2FXNXpkR0Z1WTJVdVgyOTNibVZ5SUQwZ2NtVnVaR1Z5UTI5dGNHOXVaVzUwTzF4dUlDQWdJRnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdhVzV6ZEdGdVkyVTdYRzRnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJSEIxZENBb2JXRjBLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hkR2hwY3k1bGJtRmliR1ZrSUh4OElDRnRZWFF1WDI5M2JtVnlLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JzWlhRZ2NHOXZiQ0E5SUhSb2FYTXVYM0J2YjJ3N1hHNGdJQ0FnSUNBZ0lHeGxkQ0IxZFdsa0lEMGdiV0YwTG1WbVptVmpkRUZ6YzJWMExsOTFkV2xrTzF4dUlDQWdJQ0FnSUNCcFppQW9JWEJ2YjJ4YmRYVnBaRjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJ2YjJ4YmRYVnBaRjBnUFNCN2ZUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JzWlhRZ2EyVjVJRDBnWEc0Z0lDQWdJQ0FnSUNBZ0lDQjFkR2xzY3k1elpYSnBZV3hwZW1WRVpXWnBibVZ6S0cxaGRDNWZaV1ptWldOMExsOWtaV1pwYm1WektTQXJYRzRnSUNBZ0lDQWdJQ0FnSUNCMWRHbHNjeTV6WlhKcFlXeHBlbVZVWldOb2JtbHhkV1Z6S0cxaGRDNWZaV1ptWldOMExsOTBaV05vYm1seGRXVnpLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRndiMjlzVzNWMWFXUmRXMnRsZVYwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCdmIyeGJkWFZwWkYxYmEyVjVYU0E5SUZ0ZE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbU52ZFc1MElENGdkR2hwY3k1dFlYaFRhWHBsS1NCeVpYUjFjbTQ3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWTJ4bFlXNG9iV0YwS1R0Y2JpQWdJQ0FnSUNBZ2NHOXZiRnQxZFdsa1hWdHJaWGxkTG5CMWMyZ29iV0YwS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqYjNWdWRDc3JPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHTnNaV0Z5SUNncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmNHOXZiQ0E5SUh0OU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1OdmRXNTBJRDBnTUR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JmWTJ4bFlXNGdLRzFoZENrZ2UxeHVJQ0FnSUNBZ0lDQnRZWFF1WDI5M2JtVnlJRDBnYm5Wc2JEdGNiaUFnSUNCOVhHNTlYRzVjYm14bGRDQnRZWFJsY21saGJGQnZiMndnUFNCdVpYY2dUV0YwWlhKcFlXeFFiMjlzS0NrN1hHNVFiMjlzTG5KbFoybHpkR1Z5S0NkdFlYUmxjbWxoYkNjc0lHMWhkR1Z5YVdGc1VHOXZiQ2s3WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0J0WVhSbGNtbGhiRkJ2YjJ3N1hHNGlYWDA9Il19