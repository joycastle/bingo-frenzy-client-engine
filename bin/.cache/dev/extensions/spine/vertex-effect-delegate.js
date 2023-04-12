(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/extensions/spine/vertex-effect-delegate.js';
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
        var spine = require('./lib/spine');
        sp.VertexEffectDelegate = cc.Class({
            name: 'sp.VertexEffectDelegate',
            ctor: function ctor() {
                this._vertexEffect = null;
                this._interpolation = null;
                this._effectType = 'none';
            },
            clear: function clear() {
                this._vertexEffect = null;
                this._interpolation = null;
                this._effectType = 'none';
            },
            initJitter: function initJitter(jitterX, jitterY) {
                this._effectType = 'jitter';
                this._vertexEffect = new spine.JitterEffect(jitterX, jitterY);
                return this._vertexEffect;
            },
            initSwirlWithPow: function initSwirlWithPow(radius, power) {
                this._interpolation = new spine.Pow(power);
                this._vertexEffect = new spine.SwirlEffect(radius, this._interpolation);
                return this._vertexEffect;
            },
            initSwirlWithPowOut: function initSwirlWithPowOut(radius, power) {
                this._interpolation = new spine.PowOut(power);
                this._vertexEffect = new spine.SwirlEffect(radius, this._interpolation);
                return this._vertexEffect;
            },
            getJitterVertexEffect: function getJitterVertexEffect() {
                return this._vertexEffect;
            },
            getSwirlVertexEffect: function getSwirlVertexEffect() {
                return this._vertexEffect;
            },
            getVertexEffect: function getVertexEffect() {
                return this._vertexEffect;
            },
            getEffectType: function getEffectType() {
                return this._effectType;
            }
        });
        module.exports = sp.VertexEffectDelegate;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRleC1lZmZlY3QtZGVsZWdhdGUuanMiLCIvVXNlcnMvU2hhcmVkL2JpbmdvX2ZyZW56eS9lbmdpbmUvZXh0ZW5zaW9ucy9zcGluZS92ZXJ0ZXgtZWZmZWN0LWRlbGVnYXRlLmpzIl0sIm5hbWVzIjpbInNwaW5lIiwicmVxdWlyZSIsInNwIiwiVmVydGV4RWZmZWN0RGVsZWdhdGUiLCJjYyIsIkNsYXNzIiwibmFtZSIsImN0b3IiLCJfdmVydGV4RWZmZWN0IiwiX2ludGVycG9sYXRpb24iLCJfZWZmZWN0VHlwZSIsImNsZWFyIiwiaW5pdEppdHRlciIsImppdHRlclgiLCJqaXR0ZXJZIiwiSml0dGVyRWZmZWN0IiwiaW5pdFN3aXJsV2l0aFBvdyIsInJhZGl1cyIsInBvd2VyIiwiUG93IiwiU3dpcmxFZmZlY3QiLCJpbml0U3dpcmxXaXRoUG93T3V0IiwiUG93T3V0IiwiZ2V0Sml0dGVyVmVydGV4RWZmZWN0IiwiZ2V0U3dpcmxWZXJ0ZXhFZmZlY3QiLCJnZXRWZXJ0ZXhFZmZlY3QiLCJnZXRFZmZlY3RUeXBlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxXQUFBOzs7Ozs7Ozs7Ozs7O1FBd0JBLElBQU1BLEtBQUFBLEdBQVFDLE9BQUFBLENBQVEsYUFBUkEsQ0FBZDtRQVlBQyxFQUFBQSxDQUFHQyxvQkFBSEQsR0FBMEJFLEVBQUFBLENBQUdDLEtBQUhELENBQVM7QUFBQSxZQUMvQkUsSUFBQUEsRUFBTSx5QkFEeUI7QUFBQSxZQUcvQkMsSUFBQUEsRUFIK0IsU0FBQSxJQUFBLEdBR3ZCO0FBQUEsZ0JBQ0osS0FBS0MsYUFBTCxHQUFxQixJQUFyQixDQURJO0FBQUEsZ0JBRUosS0FBS0MsY0FBTCxHQUFzQixJQUF0QixDQUZJO0FBQUEsZ0JBR0osS0FBS0MsV0FBTCxHQUFtQixNQUFuQixDQUhJO0FBQUEsYUFIdUI7QUFBQSxZQWMvQkMsS0FBQUEsRUFkK0IsU0FBQSxLQUFBLEdBY3RCO0FBQUEsZ0JBQ0wsS0FBS0gsYUFBTCxHQUFxQixJQUFyQixDQURLO0FBQUEsZ0JBRUwsS0FBS0MsY0FBTCxHQUFzQixJQUF0QixDQUZLO0FBQUEsZ0JBR0wsS0FBS0MsV0FBTCxHQUFtQixNQUFuQixDQUhLO0FBQUEsYUFkc0I7QUFBQSxZQTJCL0JFLFVBQUFBLEVBM0IrQixTQUFBLFVBQUEsQ0EyQm5CQyxPQTNCbUIsRUEyQlZDLE9BM0JVLEVBMkJEO0FBQUEsZ0JBQzFCLEtBQUtKLFdBQUwsR0FBbUIsUUFBbkIsQ0FEMEI7QUFBQSxnQkFFMUIsS0FBS0YsYUFBTCxHQUFxQixJQUFJUixLQUFBQSxDQUFNZSxZQUFWLENBQXVCRixPQUF2QixFQUFnQ0MsT0FBaEMsQ0FBckIsQ0FGMEI7QUFBQSxnQkFHMUIsT0FBTyxLQUFLTixhQUFaLENBSDBCO0FBQUEsYUEzQkM7QUFBQSxZQXdDL0JRLGdCQUFBQSxFQXhDK0IsU0FBQSxnQkFBQSxDQXdDZEMsTUF4Q2MsRUF3Q05DLEtBeENNLEVBd0NDO0FBQUEsZ0JBQzVCLEtBQUtULGNBQUwsR0FBc0IsSUFBSVQsS0FBQUEsQ0FBTW1CLEdBQVYsQ0FBY0QsS0FBZCxDQUF0QixDQUQ0QjtBQUFBLGdCQUU1QixLQUFLVixhQUFMLEdBQXFCLElBQUlSLEtBQUFBLENBQU1vQixXQUFWLENBQXNCSCxNQUF0QixFQUE4QixLQUFLUixjQUFuQyxDQUFyQixDQUY0QjtBQUFBLGdCQUc1QixPQUFPLEtBQUtELGFBQVosQ0FINEI7QUFBQSxhQXhDRDtBQUFBLFlBcUQvQmEsbUJBQUFBLEVBckQrQixTQUFBLG1CQUFBLENBcURYSixNQXJEVyxFQXFESEMsS0FyREcsRUFxREk7QUFBQSxnQkFDL0IsS0FBS1QsY0FBTCxHQUFzQixJQUFJVCxLQUFBQSxDQUFNc0IsTUFBVixDQUFpQkosS0FBakIsQ0FBdEIsQ0FEK0I7QUFBQSxnQkFFL0IsS0FBS1YsYUFBTCxHQUFxQixJQUFJUixLQUFBQSxDQUFNb0IsV0FBVixDQUFzQkgsTUFBdEIsRUFBOEIsS0FBS1IsY0FBbkMsQ0FBckIsQ0FGK0I7QUFBQSxnQkFHL0IsT0FBTyxLQUFLRCxhQUFaLENBSCtCO0FBQUEsYUFyREo7QUFBQSxZQWdFL0JlLHFCQUFBQSxFQWhFK0IsU0FBQSxxQkFBQSxHQWdFTjtBQUFBLGdCQUNyQixPQUFPLEtBQUtmLGFBQVosQ0FEcUI7QUFBQSxhQWhFTTtBQUFBLFlBeUUvQmdCLG9CQUFBQSxFQXpFK0IsU0FBQSxvQkFBQSxHQXlFUDtBQUFBLGdCQUNwQixPQUFPLEtBQUtoQixhQUFaLENBRG9CO0FBQUEsYUF6RU87QUFBQSxZQWtGL0JpQixlQUFBQSxFQWxGK0IsU0FBQSxlQUFBLEdBa0ZaO0FBQUEsZ0JBQ2YsT0FBTyxLQUFLakIsYUFBWixDQURlO0FBQUEsYUFsRlk7QUFBQSxZQTJGL0JrQixhQUFBQSxFQTNGK0IsU0FBQSxhQUFBLEdBMkZkO0FBQUEsZ0JBQ2IsT0FBTyxLQUFLaEIsV0FBWixDQURhO0FBQUEsYUEzRmM7QUFBQSxTQUFUTixDQUExQkY7UUErRkF5QixNQUFBQSxDQUFPQyxPQUFQRCxHQUFpQnpCLEVBQUFBLENBQUdDLG9CQUFwQndCIiwiZmlsZSI6InZlcnRleC1lZmZlY3QtZGVsZWdhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuY29uc3Qgc3BpbmUgPSByZXF1aXJlKCcuL2xpYi9zcGluZScpO1xuLyoqXG4gKiBAbW9kdWxlIHNwXG4gKi9cblxuLyoqXG4gKiAhI2VuXG4gKiBUaGUgZGVsZWdhdGUgb2Ygc3BpbmUgdmVydGV4IGVmZmVjdFxuICogISN6aFxuICogU3BpbmUg6aG254K55Yqo55S75Luj55CGXG4gKiBAY2xhc3MgVmVydGV4RWZmZWN0RGVsZWdhdGVcbiAqL1xuc3AuVmVydGV4RWZmZWN0RGVsZWdhdGUgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogJ3NwLlZlcnRleEVmZmVjdERlbGVnYXRlJyxcblxuICAgIGN0b3IgKCkge1xuICAgICAgICB0aGlzLl92ZXJ0ZXhFZmZlY3QgPSBudWxsO1xuICAgICAgICB0aGlzLl9pbnRlcnBvbGF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZWZmZWN0VHlwZSA9ICdub25lJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogISNlbiBDbGVhcnMgdmVydGV4IGVmZmVjdC5cbiAgICAgKiAhI3poIOa4heepuumhtueCueaViOaenFxuICAgICAqIEBtZXRob2QgY2xlYXJcbiAgICAgKi9cbiAgICBjbGVhciAoKSB7XG4gICAgICAgIHRoaXMuX3ZlcnRleEVmZmVjdCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2ludGVycG9sYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLl9lZmZlY3RUeXBlID0gJ25vbmUnO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiAhI2VuIEluaXRzIGRlbGVnYXRlIHdpdGggaml0dGVyIGVmZmVjdFxuICAgICAqICEjemgg6K6+572u6aG254K55oqW5Yqo5pWI5p6cXG4gICAgICogQG1ldGhvZCBpbml0Sml0dGVyXG4gICAgICogQHBhcmFtIHtmbG9hdH0gaml0dGVyWFxuICAgICAqIEBwYXJhbSB7ZmxvYXR9IGppdHRlcllcbiAgICAgKi9cbiAgICBpbml0Sml0dGVyIChqaXR0ZXJYLCBqaXR0ZXJZKSB7XG4gICAgICAgIHRoaXMuX2VmZmVjdFR5cGUgPSAnaml0dGVyJztcbiAgICAgICAgdGhpcy5fdmVydGV4RWZmZWN0ID0gbmV3IHNwaW5lLkppdHRlckVmZmVjdChqaXR0ZXJYLCBqaXR0ZXJZKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnRleEVmZmVjdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogISNlbiBJbml0cyBkZWxlZ2F0ZSB3aXRoIHN3aXJsIGVmZmVjdFxuICAgICAqICEjemgg6K6+572u6aG254K55ryp5rah5pWI5p6cXG4gICAgICogQG1ldGhvZCBpbml0U3dpcmxXaXRoUG93XG4gICAgICogQHBhcmFtIHtmbG9hdH0gcmFkaXVzIFxuICAgICAqIEBwYXJhbSB7ZmxvYXR9IHBvd2VyXG4gICAgICovXG4gICAgaW5pdFN3aXJsV2l0aFBvdyhyYWRpdXMsIHBvd2VyKSB7XG4gICAgICAgIHRoaXMuX2ludGVycG9sYXRpb24gPSBuZXcgc3BpbmUuUG93KHBvd2VyKTtcbiAgICAgICAgdGhpcy5fdmVydGV4RWZmZWN0ID0gbmV3IHNwaW5lLlN3aXJsRWZmZWN0KHJhZGl1cywgdGhpcy5faW50ZXJwb2xhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhFZmZlY3Q7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqICEjZW4gSW5pdHMgZGVsZWdhdGUgd2l0aCBzd2lybCBlZmZlY3RcbiAgICAgKiAhI3poIOiuvue9rumhtueCuea8qea2oeaViOaenFxuICAgICAqIEBtZXRob2QgaW5pdFN3aXJsV2l0aFBvd091dFxuICAgICAqIEBwYXJhbSB7ZmxvYXR9IHJhZGl1cyBcbiAgICAgKiBAcGFyYW0ge2Zsb2F0fSBwb3dlclxuICAgICAqL1xuICAgIGluaXRTd2lybFdpdGhQb3dPdXQocmFkaXVzLCBwb3dlcikge1xuICAgICAgICB0aGlzLl9pbnRlcnBvbGF0aW9uID0gbmV3IHNwaW5lLlBvd091dChwb3dlcik7XG4gICAgICAgIHRoaXMuX3ZlcnRleEVmZmVjdCA9IG5ldyBzcGluZS5Td2lybEVmZmVjdChyYWRpdXMsIHRoaXMuX2ludGVycG9sYXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5fdmVydGV4RWZmZWN0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiAhI2VuIEdldHMgaml0dGVyIHZlcnRleCBlZmZlY3RcbiAgICAgKiAhI3poIOiOt+WPlumhtueCueaKluWKqOaViOaenFxuICAgICAqIEBtZXRob2QgZ2V0Sml0dGVyVmVydGV4RWZmZWN0XG4gICAgICovXG4gICAgZ2V0Sml0dGVyVmVydGV4RWZmZWN0ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnRleEVmZmVjdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogISNlbiBHZXRzIHN3aXJsIHZlcnRleCBlZmZlY3RcbiAgICAgKiAhI3poIOiOt+WPlumhtueCuea8qea2oeaViOaenFxuICAgICAqIEBtZXRob2QgZ2V0U3dpcmxWZXJ0ZXhFZmZlY3RcbiAgICAgKi9cbiAgICBnZXRTd2lybFZlcnRleEVmZmVjdCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhFZmZlY3Q7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqICEjZW4gR2V0cyB2ZXJ0ZXggZWZmZWN0XG4gICAgICogISN6aCDojrflj5bpobbngrnmlYjmnpxcbiAgICAgKiBAbWV0aG9kIGdldFZlcnRleEVmZmVjdFxuICAgICAqL1xuICAgIGdldFZlcnRleEVmZmVjdCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhFZmZlY3Q7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqICEjZW4gR2V0cyBlZmZlY3QgdHlwZVxuICAgICAqICEjemgg6I635Y+W5pWI5p6c57G75Z6LXG4gICAgICogQG1ldGhvZCBnZXRFZmZlY3RUeXBlXG4gICAgICovXG4gICAgZ2V0RWZmZWN0VHlwZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lZmZlY3RUeXBlO1xuICAgIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBzcC5WZXJ0ZXhFZmZlY3REZWxlZ2F0ZTsiLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG52YXIgc3BpbmUgPSByZXF1aXJlKCcuL2xpYi9zcGluZScpO1xuLyoqXG4gKiBAbW9kdWxlIHNwXG4gKi9cblxuLyoqXG4gKiAhI2VuXG4gKiBUaGUgZGVsZWdhdGUgb2Ygc3BpbmUgdmVydGV4IGVmZmVjdFxuICogISN6aFxuICogU3BpbmUg6aG254K55Yqo55S75Luj55CGXG4gKiBAY2xhc3MgVmVydGV4RWZmZWN0RGVsZWdhdGVcbiAqL1xuc3AuVmVydGV4RWZmZWN0RGVsZWdhdGUgPSBjYy5DbGFzcyh7XG4gIG5hbWU6ICdzcC5WZXJ0ZXhFZmZlY3REZWxlZ2F0ZScsXG5cbiAgY3RvcjogZnVuY3Rpb24gY3RvcigpIHtcbiAgICB0aGlzLl92ZXJ0ZXhFZmZlY3QgPSBudWxsO1xuICAgIHRoaXMuX2ludGVycG9sYXRpb24gPSBudWxsO1xuICAgIHRoaXMuX2VmZmVjdFR5cGUgPSAnbm9uZSc7XG4gIH0sXG5cblxuICAvKipcbiAgICogISNlbiBDbGVhcnMgdmVydGV4IGVmZmVjdC5cbiAgICogISN6aCDmuIXnqbrpobbngrnmlYjmnpxcbiAgICogQG1ldGhvZCBjbGVhclxuICAgKi9cbiAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHRoaXMuX3ZlcnRleEVmZmVjdCA9IG51bGw7XG4gICAgdGhpcy5faW50ZXJwb2xhdGlvbiA9IG51bGw7XG4gICAgdGhpcy5fZWZmZWN0VHlwZSA9ICdub25lJztcbiAgfSxcblxuXG4gIC8qKlxuICAgKiAhI2VuIEluaXRzIGRlbGVnYXRlIHdpdGggaml0dGVyIGVmZmVjdFxuICAgKiAhI3poIOiuvue9rumhtueCueaKluWKqOaViOaenFxuICAgKiBAbWV0aG9kIGluaXRKaXR0ZXJcbiAgICogQHBhcmFtIHtmbG9hdH0gaml0dGVyWFxuICAgKiBAcGFyYW0ge2Zsb2F0fSBqaXR0ZXJZXG4gICAqL1xuICBpbml0Sml0dGVyOiBmdW5jdGlvbiBpbml0Sml0dGVyKGppdHRlclgsIGppdHRlclkpIHtcbiAgICB0aGlzLl9lZmZlY3RUeXBlID0gJ2ppdHRlcic7XG4gICAgdGhpcy5fdmVydGV4RWZmZWN0ID0gbmV3IHNwaW5lLkppdHRlckVmZmVjdChqaXR0ZXJYLCBqaXR0ZXJZKTtcbiAgICByZXR1cm4gdGhpcy5fdmVydGV4RWZmZWN0O1xuICB9LFxuXG5cbiAgLyoqXG4gICAqICEjZW4gSW5pdHMgZGVsZWdhdGUgd2l0aCBzd2lybCBlZmZlY3RcbiAgICogISN6aCDorr7nva7pobbngrnmvKnmtqHmlYjmnpxcbiAgICogQG1ldGhvZCBpbml0U3dpcmxXaXRoUG93XG4gICAqIEBwYXJhbSB7ZmxvYXR9IHJhZGl1cyBcbiAgICogQHBhcmFtIHtmbG9hdH0gcG93ZXJcbiAgICovXG4gIGluaXRTd2lybFdpdGhQb3c6IGZ1bmN0aW9uIGluaXRTd2lybFdpdGhQb3cocmFkaXVzLCBwb3dlcikge1xuICAgIHRoaXMuX2ludGVycG9sYXRpb24gPSBuZXcgc3BpbmUuUG93KHBvd2VyKTtcbiAgICB0aGlzLl92ZXJ0ZXhFZmZlY3QgPSBuZXcgc3BpbmUuU3dpcmxFZmZlY3QocmFkaXVzLCB0aGlzLl9pbnRlcnBvbGF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5fdmVydGV4RWZmZWN0O1xuICB9LFxuXG5cbiAgLyoqXG4gICAqICEjZW4gSW5pdHMgZGVsZWdhdGUgd2l0aCBzd2lybCBlZmZlY3RcbiAgICogISN6aCDorr7nva7pobbngrnmvKnmtqHmlYjmnpxcbiAgICogQG1ldGhvZCBpbml0U3dpcmxXaXRoUG93T3V0XG4gICAqIEBwYXJhbSB7ZmxvYXR9IHJhZGl1cyBcbiAgICogQHBhcmFtIHtmbG9hdH0gcG93ZXJcbiAgICovXG4gIGluaXRTd2lybFdpdGhQb3dPdXQ6IGZ1bmN0aW9uIGluaXRTd2lybFdpdGhQb3dPdXQocmFkaXVzLCBwb3dlcikge1xuICAgIHRoaXMuX2ludGVycG9sYXRpb24gPSBuZXcgc3BpbmUuUG93T3V0KHBvd2VyKTtcbiAgICB0aGlzLl92ZXJ0ZXhFZmZlY3QgPSBuZXcgc3BpbmUuU3dpcmxFZmZlY3QocmFkaXVzLCB0aGlzLl9pbnRlcnBvbGF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5fdmVydGV4RWZmZWN0O1xuICB9LFxuXG5cbiAgLyoqXG4gICAqICEjZW4gR2V0cyBqaXR0ZXIgdmVydGV4IGVmZmVjdFxuICAgKiAhI3poIOiOt+WPlumhtueCueaKluWKqOaViOaenFxuICAgKiBAbWV0aG9kIGdldEppdHRlclZlcnRleEVmZmVjdFxuICAgKi9cbiAgZ2V0Sml0dGVyVmVydGV4RWZmZWN0OiBmdW5jdGlvbiBnZXRKaXR0ZXJWZXJ0ZXhFZmZlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRleEVmZmVjdDtcbiAgfSxcblxuXG4gIC8qKlxuICAgKiAhI2VuIEdldHMgc3dpcmwgdmVydGV4IGVmZmVjdFxuICAgKiAhI3poIOiOt+WPlumhtueCuea8qea2oeaViOaenFxuICAgKiBAbWV0aG9kIGdldFN3aXJsVmVydGV4RWZmZWN0XG4gICAqL1xuICBnZXRTd2lybFZlcnRleEVmZmVjdDogZnVuY3Rpb24gZ2V0U3dpcmxWZXJ0ZXhFZmZlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRleEVmZmVjdDtcbiAgfSxcblxuXG4gIC8qKlxuICAgKiAhI2VuIEdldHMgdmVydGV4IGVmZmVjdFxuICAgKiAhI3poIOiOt+WPlumhtueCueaViOaenFxuICAgKiBAbWV0aG9kIGdldFZlcnRleEVmZmVjdFxuICAgKi9cbiAgZ2V0VmVydGV4RWZmZWN0OiBmdW5jdGlvbiBnZXRWZXJ0ZXhFZmZlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRleEVmZmVjdDtcbiAgfSxcblxuXG4gIC8qKlxuICAgKiAhI2VuIEdldHMgZWZmZWN0IHR5cGVcbiAgICogISN6aCDojrflj5bmlYjmnpznsbvlnotcbiAgICogQG1ldGhvZCBnZXRFZmZlY3RUeXBlXG4gICAqL1xuICBnZXRFZmZlY3RUeXBlOiBmdW5jdGlvbiBnZXRFZmZlY3RUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLl9lZmZlY3RUeXBlO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gc3AuVmVydGV4RWZmZWN0RGVsZWdhdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJblpsY25SbGVDMWxabVpsWTNRdFpHVnNaV2RoZEdVdWFuTWlYU3dpYm1GdFpYTWlPbHNpYzNCcGJtVWlMQ0p5WlhGMWFYSmxJaXdpYzNBaUxDSldaWEowWlhoRlptWmxZM1JFWld4bFoyRjBaU0lzSW1Oaklpd2lRMnhoYzNNaUxDSnVZVzFsSWl3aVkzUnZjaUlzSWw5MlpYSjBaWGhGWm1abFkzUWlMQ0pmYVc1MFpYSndiMnhoZEdsdmJpSXNJbDlsWm1abFkzUlVlWEJsSWl3aVkyeGxZWElpTENKcGJtbDBTbWwwZEdWeUlpd2lhbWwwZEdWeVdDSXNJbXBwZEhSbGNsa2lMQ0pLYVhSMFpYSkZabVpsWTNRaUxDSnBibWwwVTNkcGNteFhhWFJvVUc5M0lpd2ljbUZrYVhWeklpd2ljRzkzWlhJaUxDSlFiM2NpTENKVGQybHliRVZtWm1WamRDSXNJbWx1YVhSVGQybHliRmRwZEdoUWIzZFBkWFFpTENKUWIzZFBkWFFpTENKblpYUkthWFIwWlhKV1pYSjBaWGhGWm1abFkzUWlMQ0puWlhSVGQybHliRlpsY25SbGVFVm1abVZqZENJc0ltZGxkRlpsY25SbGVFVm1abVZqZENJc0ltZGxkRVZtWm1WamRGUjVjR1VpTENKdGIyUjFiR1VpTENKbGVIQnZjblJ6SWwwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQk96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGM1FrRXNTVUZCVFVFc1VVRkJVVU1zVVVGQlVTeGhRVUZTTEVOQlFXUTdRVUZEUVRzN096dEJRVWxCT3pzN096czdPMEZCVDBGRExFZEJRVWRETEc5Q1FVRklMRWRCUVRCQ1F5eEhRVUZIUXl4TFFVRklMRU5CUVZNN1FVRkRMMEpETEZGQlFVMHNlVUpCUkhsQ096dEJRVWN2UWtNc1RVRklLMElzYTBKQlIzWkNPMEZCUTBvc1UwRkJTME1zWVVGQlRDeEhRVUZ4UWl4SlFVRnlRanRCUVVOQkxGTkJRVXRETEdOQlFVd3NSMEZCYzBJc1NVRkJkRUk3UVVGRFFTeFRRVUZMUXl4WFFVRk1MRWRCUVcxQ0xFMUJRVzVDTzBGQlEwZ3NSMEZRT0VJN096dEJRVk12UWpzN096czdRVUZMUVVNc1QwRmtLMElzYlVKQlkzUkNPMEZCUTB3c1UwRkJTMGdzWVVGQlRDeEhRVUZ4UWl4SlFVRnlRanRCUVVOQkxGTkJRVXRETEdOQlFVd3NSMEZCYzBJc1NVRkJkRUk3UVVGRFFTeFRRVUZMUXl4WFFVRk1MRWRCUVcxQ0xFMUJRVzVDTzBGQlEwZ3NSMEZzUWpoQ096czdRVUZ2UWk5Q096czdPenM3TzBGQlQwRkZMRmxCTTBJclFpeHpRa0V5UW01Q1F5eFBRVE5DYlVJc1JVRXlRbFpETEU5Qk0wSlZMRVZCTWtKRU8wRkJRekZDTEZOQlFVdEtMRmRCUVV3c1IwRkJiVUlzVVVGQmJrSTdRVUZEUVN4VFFVRkxSaXhoUVVGTUxFZEJRWEZDTEVsQlFVbFNMRTFCUVUxbExGbEJRVllzUTBGQmRVSkdMRTlCUVhaQ0xFVkJRV2REUXl4UFFVRm9ReXhEUVVGeVFqdEJRVU5CTEZkQlFVOHNTMEZCUzA0c1lVRkJXanRCUVVOSUxFZEJMMEk0UWpzN08wRkJhVU12UWpzN096czdPenRCUVU5QlVTeHJRa0Y0UXl0Q0xEUkNRWGREWkVNc1RVRjRRMk1zUlVGM1EwNURMRXRCZUVOTkxFVkJkME5ETzBGQlF6VkNMRk5CUVV0VUxHTkJRVXdzUjBGQmMwSXNTVUZCU1ZRc1RVRkJUVzFDTEVkQlFWWXNRMEZCWTBRc1MwRkJaQ3hEUVVGMFFqdEJRVU5CTEZOQlFVdFdMR0ZCUVV3c1IwRkJjVUlzU1VGQlNWSXNUVUZCVFc5Q0xGZEJRVllzUTBGQmMwSklMRTFCUVhSQ0xFVkJRVGhDTEV0QlFVdFNMR05CUVc1RExFTkJRWEpDTzBGQlEwRXNWMEZCVHl4TFFVRkxSQ3hoUVVGYU8wRkJRMGdzUjBFMVF6aENPenM3UVVFNFF5OUNPenM3T3pzN08wRkJUMEZoTEhGQ1FYSkVLMElzSzBKQmNVUllTaXhOUVhKRVZ5eEZRWEZFU0VNc1MwRnlSRWNzUlVGeFJFazdRVUZETDBJc1UwRkJTMVFzWTBGQlRDeEhRVUZ6UWl4SlFVRkpWQ3hOUVVGTmMwSXNUVUZCVml4RFFVRnBRa29zUzBGQmFrSXNRMEZCZEVJN1FVRkRRU3hUUVVGTFZpeGhRVUZNTEVkQlFYRkNMRWxCUVVsU0xFMUJRVTF2UWl4WFFVRldMRU5CUVhOQ1NDeE5RVUYwUWl4RlFVRTRRaXhMUVVGTFVpeGpRVUZ1UXl4RFFVRnlRanRCUVVOQkxGZEJRVThzUzBGQlMwUXNZVUZCV2p0QlFVTklMRWRCZWtRNFFqczdPMEZCTWtRdlFqczdPenM3UVVGTFFXVXNkVUpCYUVVclFpeHRRMEZuUlU0N1FVRkRja0lzVjBGQlR5eExRVUZMWml4aFFVRmFPMEZCUTBnc1IwRnNSVGhDT3pzN1FVRnZSUzlDT3pzN096dEJRVXRCWjBJc2MwSkJla1VyUWl4clEwRjVSVkE3UVVGRGNFSXNWMEZCVHl4TFFVRkxhRUlzWVVGQldqdEJRVU5JTEVkQk0wVTRRanM3TzBGQk5rVXZRanM3T3pzN1FVRkxRV2xDTEdsQ1FXeEdLMElzTmtKQmEwWmFPMEZCUTJZc1YwRkJUeXhMUVVGTGFrSXNZVUZCV2p0QlFVTklMRWRCY0VZNFFqczdPMEZCYzBZdlFqczdPenM3UVVGTFFXdENMR1ZCTTBZclFpd3lRa0V5Um1RN1FVRkRZaXhYUVVGUExFdEJRVXRvUWl4WFFVRmFPMEZCUTBnN1FVRTNSamhDTEVOQlFWUXNRMEZCTVVJN1FVRXJSa0ZwUWl4UFFVRlBReXhQUVVGUUxFZEJRV2xDTVVJc1IwRkJSME1zYjBKQlFYQkNJaXdpWm1sc1pTSTZJblpsY25SbGVDMWxabVpsWTNRdFpHVnNaV2RoZEdVdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtseHVJRU52Y0hseWFXZG9kQ0FvWXlrZ01qQXhOeTB5TURFNElGaHBZVzFsYmlCWllXcHBJRk52Wm5SM1lYSmxJRU52TGl3Z1RIUmtMbHh1WEc0Z2FIUjBjSE02THk5M2QzY3VZMjlqYjNNdVkyOXRMMXh1WEc0Z1VHVnliV2x6YzJsdmJpQnBjeUJvWlhKbFlua2daM0poYm5SbFpDd2dabkpsWlNCdlppQmphR0Z5WjJVc0lIUnZJR0Z1ZVNCd1pYSnpiMjRnYjJKMFlXbHVhVzVuSUdFZ1kyOXdlVnh1SUc5bUlIUm9hWE1nYzI5bWRIZGhjbVVnWVc1a0lHRnpjMjlqYVdGMFpXUWdaVzVuYVc1bElITnZkWEpqWlNCamIyUmxJQ2gwYUdVZ1hDSlRiMlowZDJGeVpWd2lLU3dnWVNCc2FXMXBkR1ZrTEZ4dUlIZHZjbXhrZDJsa1pTd2djbTk1WVd4MGVTMW1jbVZsTENCdWIyNHRZWE56YVdkdVlXSnNaU3dnY21WMmIyTmhZbXhsSUdGdVpDQnViMjR0WlhoamJIVnphWFpsSUd4cFkyVnVjMlZjYmlCMGJ5QjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMnhsYkhrZ2RHOGdaR1YyWld4dmNDQm5ZVzFsY3lCdmJpQjViM1Z5SUhSaGNtZGxkQ0J3YkdGMFptOXliWE11SUZsdmRTQnphR0ZzYkZ4dUlHNXZkQ0IxYzJVZ1EyOWpiM01nUTNKbFlYUnZjaUJ6YjJaMGQyRnlaU0JtYjNJZ1pHVjJaV3h2Y0dsdVp5QnZkR2hsY2lCemIyWjBkMkZ5WlNCdmNpQjBiMjlzY3lCMGFHRjBKM05jYmlCMWMyVmtJR1p2Y2lCa1pYWmxiRzl3YVc1bklHZGhiV1Z6TGlCWmIzVWdZWEpsSUc1dmRDQm5jbUZ1ZEdWa0lIUnZJSEIxWW14cGMyZ3NJR1JwYzNSeWFXSjFkR1VzWEc0Z2MzVmliR2xqWlc1elpTd2dZVzVrTDI5eUlITmxiR3dnWTI5d2FXVnpJRzltSUVOdlkyOXpJRU55WldGMGIzSXVYRzVjYmlCVWFHVWdjMjltZEhkaGNtVWdiM0lnZEc5dmJITWdhVzRnZEdocGN5Qk1hV05sYm5ObElFRm5jbVZsYldWdWRDQmhjbVVnYkdsalpXNXpaV1FzSUc1dmRDQnpiMnhrTGx4dUlGaHBZVzFsYmlCWllXcHBJRk52Wm5SM1lYSmxJRU52TGl3Z1RIUmtMaUJ5WlhObGNuWmxjeUJoYkd3Z2NtbG5hSFJ6SUc1dmRDQmxlSEJ5WlhOemJIa2daM0poYm5SbFpDQjBieUI1YjNVdVhHNWNiaUJVU0VVZ1UwOUdWRmRCVWtVZ1NWTWdVRkpQVmtsRVJVUWdYQ0pCVXlCSlUxd2lMQ0JYU1ZSSVQxVlVJRmRCVWxKQlRsUlpJRTlHSUVGT1dTQkxTVTVFTENCRldGQlNSVk5USUU5U1hHNGdTVTFRVEVsRlJDd2dTVTVEVEZWRVNVNUhJRUpWVkNCT1QxUWdURWxOU1ZSRlJDQlVUeUJVU0VVZ1YwRlNVa0ZPVkVsRlV5QlBSaUJOUlZKRFNFRk9WRUZDU1V4SlZGa3NYRzRnUmtsVVRrVlRVeUJHVDFJZ1FTQlFRVkpVU1VOVlRFRlNJRkJWVWxCUFUwVWdRVTVFSUU1UFRrbE9SbEpKVGtkRlRVVk9WQzRnU1U0Z1RrOGdSVlpGVGxRZ1UwaEJURXdnVkVoRlhHNGdRVlZVU0U5U1V5QlBVaUJEVDFCWlVrbEhTRlFnU0U5TVJFVlNVeUJDUlNCTVNVRkNURVVnUms5U0lFRk9XU0JEVEVGSlRTd2dSRUZOUVVkRlV5QlBVaUJQVkVoRlVseHVJRXhKUVVKSlRFbFVXU3dnVjBoRlZFaEZVaUJKVGlCQlRpQkJRMVJKVDA0Z1QwWWdRMDlPVkZKQlExUXNJRlJQVWxRZ1QxSWdUMVJJUlZKWFNWTkZMQ0JCVWtsVFNVNUhJRVpTVDAwc1hHNGdUMVZVSUU5R0lFOVNJRWxPSUVOUFRrNUZRMVJKVDA0Z1YwbFVTQ0JVU0VVZ1UwOUdWRmRCVWtVZ1QxSWdWRWhGSUZWVFJTQlBVaUJQVkVoRlVpQkVSVUZNU1U1SFV5QkpUbHh1SUZSSVJTQlRUMFpVVjBGU1JTNWNiaUFxS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUwxeHVZMjl1YzNRZ2MzQnBibVVnUFNCeVpYRjFhWEpsS0NjdUwyeHBZaTl6Y0dsdVpTY3BPMXh1THlvcVhHNGdLaUJBYlc5a2RXeGxJSE53WEc0Z0tpOWNibHh1THlvcVhHNGdLaUFoSTJWdVhHNGdLaUJVYUdVZ1pHVnNaV2RoZEdVZ2IyWWdjM0JwYm1VZ2RtVnlkR1Y0SUdWbVptVmpkRnh1SUNvZ0lTTjZhRnh1SUNvZ1UzQnBibVVnNmFHMjU0SzU1WXFvNTVTNzVMdWo1NUNHWEc0Z0tpQkFZMnhoYzNNZ1ZtVnlkR1Y0UldabVpXTjBSR1ZzWldkaGRHVmNiaUFxTDF4dWMzQXVWbVZ5ZEdWNFJXWm1aV04wUkdWc1pXZGhkR1VnUFNCall5NURiR0Z6Y3loN1hHNGdJQ0FnYm1GdFpUb2dKM053TGxabGNuUmxlRVZtWm1WamRFUmxiR1ZuWVhSbEp5eGNibHh1SUNBZ0lHTjBiM0lnS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5MlpYSjBaWGhGWm1abFkzUWdQU0J1ZFd4c08xeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5cGJuUmxjbkJ2YkdGMGFXOXVJRDBnYm5Wc2JEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZlpXWm1aV04wVkhsd1pTQTlJQ2R1YjI1bEp6dGNiaUFnSUNCOUxGeHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dJU05sYmlCRGJHVmhjbk1nZG1WeWRHVjRJR1ZtWm1WamRDNWNiaUFnSUNBZ0tpQWhJM3BvSU9hNGhlZXB1dW1odHVlQ3VlYVZpT2FlbkZ4dUlDQWdJQ0FxSUVCdFpYUm9iMlFnWTJ4bFlYSmNiaUFnSUNBZ0tpOWNiaUFnSUNCamJHVmhjaUFvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDNabGNuUmxlRVZtWm1WamRDQTlJRzUxYkd3N1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDJsdWRHVnljRzlzWVhScGIyNGdQU0J1ZFd4c08xeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5bFptWmxZM1JVZVhCbElEMGdKMjV2Ym1Vbk8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQWhJMlZ1SUVsdWFYUnpJR1JsYkdWbllYUmxJSGRwZEdnZ2FtbDBkR1Z5SUdWbVptVmpkRnh1SUNBZ0lDQXFJQ0VqZW1nZzZLNis1NzJ1NmFHMjU0SzU1b3FXNVlxbzVwV0k1cDZjWEc0Z0lDQWdJQ29nUUcxbGRHaHZaQ0JwYm1sMFNtbDBkR1Z5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRtYkc5aGRIMGdhbWwwZEdWeVdGeHVJQ0FnSUNBcUlFQndZWEpoYlNCN1pteHZZWFI5SUdwcGRIUmxjbGxjYmlBZ0lDQWdLaTljYmlBZ0lDQnBibWwwU21sMGRHVnlJQ2hxYVhSMFpYSllMQ0JxYVhSMFpYSlpLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMlZtWm1WamRGUjVjR1VnUFNBbmFtbDBkR1Z5Snp0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmZG1WeWRHVjRSV1ptWldOMElEMGdibVYzSUhOd2FXNWxMa3BwZEhSbGNrVm1abVZqZENocWFYUjBaWEpZTENCcWFYUjBaWEpaS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYM1psY25SbGVFVm1abVZqZER0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ0lTTmxiaUJKYm1sMGN5QmtaV3hsWjJGMFpTQjNhWFJvSUhOM2FYSnNJR1ZtWm1WamRGeHVJQ0FnSUNBcUlDRWplbWdnNks2KzU3MnU2YUcyNTRLNTVyeXA1cmFoNXBXSTVwNmNYRzRnSUNBZ0lDb2dRRzFsZEdodlpDQnBibWwwVTNkcGNteFhhWFJvVUc5M1hHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0bWJHOWhkSDBnY21Ga2FYVnpJRnh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdabXh2WVhSOUlIQnZkMlZ5WEc0Z0lDQWdJQ292WEc0Z0lDQWdhVzVwZEZOM2FYSnNWMmwwYUZCdmR5aHlZV1JwZFhNc0lIQnZkMlZ5S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDJsdWRHVnljRzlzWVhScGIyNGdQU0J1WlhjZ2MzQnBibVV1VUc5M0tIQnZkMlZ5S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmZG1WeWRHVjRSV1ptWldOMElEMGdibVYzSUhOd2FXNWxMbE4zYVhKc1JXWm1aV04wS0hKaFpHbDFjeXdnZEdocGN5NWZhVzUwWlhKd2IyeGhkR2x2YmlrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDkyWlhKMFpYaEZabVpsWTNRN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlDRWpaVzRnU1c1cGRITWdaR1ZzWldkaGRHVWdkMmwwYUNCemQybHliQ0JsWm1abFkzUmNiaUFnSUNBZ0tpQWhJM3BvSU9pdXZ1ZTlydW1odHVlQ3VlYThxZWEyb2VhVmlPYWVuRnh1SUNBZ0lDQXFJRUJ0WlhSb2IyUWdhVzVwZEZOM2FYSnNWMmwwYUZCdmQwOTFkRnh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdabXh2WVhSOUlISmhaR2wxY3lCY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTJac2IyRjBmU0J3YjNkbGNseHVJQ0FnSUNBcUwxeHVJQ0FnSUdsdWFYUlRkMmx5YkZkcGRHaFFiM2RQZFhRb2NtRmthWFZ6TENCd2IzZGxjaWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbDlwYm5SbGNuQnZiR0YwYVc5dUlEMGdibVYzSUhOd2FXNWxMbEJ2ZDA5MWRDaHdiM2RsY2lrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDNabGNuUmxlRVZtWm1WamRDQTlJRzVsZHlCemNHbHVaUzVUZDJseWJFVm1abVZqZENoeVlXUnBkWE1zSUhSb2FYTXVYMmx1ZEdWeWNHOXNZWFJwYjI0cE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmZG1WeWRHVjRSV1ptWldOME8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQWhJMlZ1SUVkbGRITWdhbWwwZEdWeUlIWmxjblJsZUNCbFptWmxZM1JjYmlBZ0lDQWdLaUFoSTNwb0lPaU90K1dQbHVtaHR1ZUN1ZWFLbHVXS3FPYVZpT2FlbkZ4dUlDQWdJQ0FxSUVCdFpYUm9iMlFnWjJWMFNtbDBkR1Z5Vm1WeWRHVjRSV1ptWldOMFhHNGdJQ0FnSUNvdlhHNGdJQ0FnWjJWMFNtbDBkR1Z5Vm1WeWRHVjRSV1ptWldOMElDZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVgzWmxjblJsZUVWbVptVmpkRHRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nSVNObGJpQkhaWFJ6SUhOM2FYSnNJSFpsY25SbGVDQmxabVpsWTNSY2JpQWdJQ0FnS2lBaEkzcG9JT2lPdCtXUGx1bWh0dWVDdWVhOHFlYTJvZWFWaU9hZW5GeHVJQ0FnSUNBcUlFQnRaWFJvYjJRZ1oyVjBVM2RwY214V1pYSjBaWGhGWm1abFkzUmNiaUFnSUNBZ0tpOWNiaUFnSUNCblpYUlRkMmx5YkZabGNuUmxlRVZtWm1WamRDQW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxsOTJaWEowWlhoRlptWmxZM1E3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUNFalpXNGdSMlYwY3lCMlpYSjBaWGdnWldabVpXTjBYRzRnSUNBZ0lDb2dJU042YUNEb2pyZmxqNWJwb2Jibmdybm1sWWptbnB4Y2JpQWdJQ0FnS2lCQWJXVjBhRzlrSUdkbGRGWmxjblJsZUVWbVptVmpkRnh1SUNBZ0lDQXFMMXh1SUNBZ0lHZGxkRlpsY25SbGVFVm1abVZqZENBb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5MlpYSjBaWGhGWm1abFkzUTdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJQ0VqWlc0Z1IyVjBjeUJsWm1abFkzUWdkSGx3WlZ4dUlDQWdJQ0FxSUNFamVtZ2c2STYzNVkrVzVwV0k1cDZjNTdHNzVaNkxYRzRnSUNBZ0lDb2dRRzFsZEdodlpDQm5aWFJGWm1abFkzUlVlWEJsWEc0Z0lDQWdJQ292WEc0Z0lDQWdaMlYwUldabVpXTjBWSGx3WlNBb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5bFptWmxZM1JVZVhCbE8xeHVJQ0FnSUgxY2JuMHBPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0J6Y0M1V1pYSjBaWGhGWm1abFkzUkVaV3hsWjJGMFpUc2lYWDA9Il19