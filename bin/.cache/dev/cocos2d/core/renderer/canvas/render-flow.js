(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/canvas/render-flow.js';
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
        var _renderFlow = require('../render-flow');
        var _renderFlow2 = _interopRequireDefault(_renderFlow);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        _renderFlow2.default.prototype._draw = function (node, func) {
            var batcher = _renderFlow2.default.getBachther();
            var ctx = batcher._device._ctx;
            var cam = batcher._camera;
            ctx.setTransform(cam.a, cam.b, cam.c, cam.d, cam.tx, cam.ty);
            ctx.scale(1, -1);
            var comp = node._renderComponent;
            comp._assembler[func](ctx, comp);
            this._next._func(node);
        };
        _renderFlow2.default.prototype._render = function (node) {
            this._draw(node, 'draw');
        };
        _renderFlow2.default.prototype._postRender = function (node) {
            this._draw(node, 'postDraw');
        };
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlci1mbG93LmpzIiwiL1VzZXJzL1NoYXJlZC9iaW5nb19mcmVuenkvZW5naW5lL2NvY29zMmQvY29yZS9yZW5kZXJlci9jYW52YXMvcmVuZGVyLWZsb3cuanMiXSwibmFtZXMiOlsicHJvdG90eXBlIiwiX2RyYXciLCJub2RlIiwiZnVuYyIsImJhdGNoZXIiLCJfY2FtZXJhIiwiUmVuZGVyRmxvdyIsImdldEJhY2h0aGVyIiwiY3R4IiwiX2RldmljZSIsIl9jdHgiLCJjYW0iLCJzZXRUcmFuc2Zvcm0iLCJhIiwiYiIsImMiLCJkIiwidHgiLCJ0eSIsInNjYWxlIiwiY29tcCIsIl9yZW5kZXJDb21wb25lbnQiLCJfYXNzZW1ibGVyIiwiX25leHQiLCJfZnVuYyIsIl9yZW5kZXIiLCJfcG9zdFJlbmRlciJdLCJtYXBwaW5ncyI6IjtJQXlCQSxJQUFBLE9BQUEsR0FBQSxPQUFBLE9BQUEsS0FBQSxXQUFBLElBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQTs7Ozs7O1FBRVdBLE9BQVVDLGlCQUFBQSxDQUFrQkMsT0FBbEJELENBQXdCRSxPQUF4QkYsRUFBOEIsVUFBOUJBLENBQVZEOztJQUVHSSxTQUFBLFFBQUFBLENBQVYsT0FBVUEsRUFBVixPQUFVQSxFQUFWLE1BQVVBLEVBQVY7QUFBQSxRQUNrQkMsSUFBQUEsQ0FBbEIsT0FBa0JBLEVBQWxCO0FBQUEsWUFBQSxpQkFBQSxDQUFBLGNBQUEsQ0FBQSxVQUFBLEVBQUEsTUFBQSxFQUFBO0FBQUEsU0FEQTtBQUFBO1FBSkosSUFBQSxXQUFBLEdBQUEsT0FBQSxDQUFBLGdCQUFBLENBQUE7Ozs7O1FBRUFDLFlBQUFBLENBQUFBLE9BQUFBLENBQVdOLFNBQVhNLENBQXFCTCxLQUFyQkssR0FBNkIsVUFBVUosSUFBVixFQUFnQkMsSUFBaEIsRUFBc0I7QUFBQSxZQUMvQyxJQUFJQyxPQUFBQSxHQUFVRSxZQUFBQSxDQUFBQSxPQUFBQSxDQUFXQyxXQUFYRCxFQUFkLENBRCtDO0FBQUEsWUFFL0MsSUFBSUUsR0FBQUEsR0FBTUosT0FBQUEsQ0FBUUssT0FBUkwsQ0FBZ0JNLElBQTFCLENBRitDO0FBQUEsWUFHL0MsSUFBSUMsR0FBQUEsR0FBTVAsT0FBQUEsQ0FBUUMsT0FBbEIsQ0FIK0M7QUFBQSxZQUkvQ0csR0FBQUEsQ0FBSUksWUFBSkosQ0FBaUJHLEdBQUFBLENBQUlFLENBQXJCTCxFQUF3QkcsR0FBQUEsQ0FBSUcsQ0FBNUJOLEVBQStCRyxHQUFBQSxDQUFJSSxDQUFuQ1AsRUFBc0NHLEdBQUFBLENBQUlLLENBQTFDUixFQUE2Q0csR0FBQUEsQ0FBSU0sRUFBakRULEVBQXFERyxHQUFBQSxDQUFJTyxFQUF6RFYsRUFKK0M7QUFBQSxZQUsvQ0EsR0FBQUEsQ0FBSVcsS0FBSlgsQ0FBVSxDQUFWQSxFQUFhLENBQUMsQ0FBZEEsRUFMK0M7QUFBQSxZQU8vQyxJQUFJWSxJQUFBQSxHQUFPbEIsSUFBQUEsQ0FBS21CLGdCQUFoQixDQVArQztBQUFBLFlBUS9DRCxJQUFBQSxDQUFLRSxVQUFMRixDQUFnQmpCLElBQWhCaUIsRUFBc0JaLEdBQXRCWSxFQUEyQkEsSUFBM0JBLEVBUitDO0FBQUEsWUFTL0MsS0FBS0csS0FBTCxDQUFXQyxLQUFYLENBQWlCdEIsSUFBakIsRUFUK0M7QUFBQSxTQUFuREk7UUFZQUEsWUFBQUEsQ0FBQUEsT0FBQUEsQ0FBV04sU0FBWE0sQ0FBcUJtQixPQUFyQm5CLEdBQStCLFVBQVVKLElBQVYsRUFBZ0I7QUFBQSxZQUMzQyxLQUFLRCxLQUFMLENBQVdDLElBQVgsRUFBaUIsTUFBakIsRUFEMkM7QUFBQSxTQUEvQ0k7UUFJQUEsWUFBQUEsQ0FBQUEsT0FBQUEsQ0FBV04sU0FBWE0sQ0FBcUJvQixXQUFyQnBCLEdBQW1DLFVBQVVKLElBQVYsRUFBZ0I7QUFBQSxZQUMvQyxLQUFLRCxLQUFMLENBQVdDLElBQVgsRUFBaUIsVUFBakIsRUFEK0M7QUFBQSxTQUFuREksQ0FkSTtBQUFBO0lBR0EsSUFBQSxPQUFBLEVBQUE7QUFBQSx3REFBQTtBQUFBLEtBQUEsTUFHQTtBQUFBLFFBQ2lCSixpQkFBQUEsQ0FBakIsa0JBQWlCQSxDQUFqQixVQUFpQkEsRUFBakIsWUFBQTtBQUFBLFlBcENKLFFBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxRQUFBLEVBb0NJO0FBQUEsU0FBaUJBLEVBRGpCO0FBQUEiLCJmaWxlIjoicmVuZGVyLWZsb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pbXBvcnQgUmVuZGVyRmxvdyBmcm9tICcuLi9yZW5kZXItZmxvdyc7XG5cblJlbmRlckZsb3cucHJvdG90eXBlLl9kcmF3ID0gZnVuY3Rpb24gKG5vZGUsIGZ1bmMpIHtcbiAgICBsZXQgYmF0Y2hlciA9IFJlbmRlckZsb3cuZ2V0QmFjaHRoZXIoKTtcbiAgICBsZXQgY3R4ID0gYmF0Y2hlci5fZGV2aWNlLl9jdHg7XG4gICAgbGV0IGNhbSA9IGJhdGNoZXIuX2NhbWVyYTtcbiAgICBjdHguc2V0VHJhbnNmb3JtKGNhbS5hLCBjYW0uYiwgY2FtLmMsIGNhbS5kLCBjYW0udHgsIGNhbS50eSk7XG4gICAgY3R4LnNjYWxlKDEsIC0xKTtcblxuICAgIGxldCBjb21wID0gbm9kZS5fcmVuZGVyQ29tcG9uZW50O1xuICAgIGNvbXAuX2Fzc2VtYmxlcltmdW5jXShjdHgsIGNvbXApO1xuICAgIHRoaXMuX25leHQuX2Z1bmMobm9kZSk7XG59XG5cblJlbmRlckZsb3cucHJvdG90eXBlLl9yZW5kZXIgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIHRoaXMuX2RyYXcobm9kZSwgJ2RyYXcnKTtcbn1cblxuUmVuZGVyRmxvdy5wcm90b3R5cGUuX3Bvc3RSZW5kZXIgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIHRoaXMuX2RyYXcobm9kZSwgJ3Bvc3REcmF3Jyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcmVuZGVyRmxvdyA9IHJlcXVpcmUoJy4uL3JlbmRlci1mbG93Jyk7XG5cbnZhciBfcmVuZGVyRmxvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW5kZXJGbG93KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuX3JlbmRlckZsb3cyLmRlZmF1bHQucHJvdG90eXBlLl9kcmF3ID0gZnVuY3Rpb24gKG5vZGUsIGZ1bmMpIHtcbiAgICB2YXIgYmF0Y2hlciA9IF9yZW5kZXJGbG93Mi5kZWZhdWx0LmdldEJhY2h0aGVyKCk7XG4gICAgdmFyIGN0eCA9IGJhdGNoZXIuX2RldmljZS5fY3R4O1xuICAgIHZhciBjYW0gPSBiYXRjaGVyLl9jYW1lcmE7XG4gICAgY3R4LnNldFRyYW5zZm9ybShjYW0uYSwgY2FtLmIsIGNhbS5jLCBjYW0uZCwgY2FtLnR4LCBjYW0udHkpO1xuICAgIGN0eC5zY2FsZSgxLCAtMSk7XG5cbiAgICB2YXIgY29tcCA9IG5vZGUuX3JlbmRlckNvbXBvbmVudDtcbiAgICBjb21wLl9hc3NlbWJsZXJbZnVuY10oY3R4LCBjb21wKTtcbiAgICB0aGlzLl9uZXh0Ll9mdW5jKG5vZGUpO1xufTsgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cbiAgIFxuICAgIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cbiAgIFxuICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAgICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiAgICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gICAgdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiAgICBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXG4gICAgdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuICAgIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuICAgXG4gICAgVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiAgICBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuICAgXG4gICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICAgIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICAgIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICAgIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAgICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICAgIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAgICBUSEUgU09GVFdBUkUuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuX3JlbmRlckZsb3cyLmRlZmF1bHQucHJvdG90eXBlLl9yZW5kZXIgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIHRoaXMuX2RyYXcobm9kZSwgJ2RyYXcnKTtcbn07XG5cbl9yZW5kZXJGbG93Mi5kZWZhdWx0LnByb3RvdHlwZS5fcG9zdFJlbmRlciA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdGhpcy5fZHJhdyhub2RlLCAncG9zdERyYXcnKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbkpsYm1SbGNpMW1iRzkzTG1weklsMHNJbTVoYldWeklqcGJJbEpsYm1SbGNrWnNiM2NpTENKd2NtOTBiM1I1Y0dVaUxDSmZaSEpoZHlJc0ltNXZaR1VpTENKbWRXNWpJaXdpWW1GMFkyaGxjaUlzSW1kbGRFSmhZMmgwYUdWeUlpd2lZM1I0SWl3aVgyUmxkbWxqWlNJc0lsOWpkSGdpTENKallXMGlMQ0pmWTJGdFpYSmhJaXdpYzJWMFZISmhibk5tYjNKdElpd2lZU0lzSW1JaUxDSmpJaXdpWkNJc0luUjRJaXdpZEhraUxDSnpZMkZzWlNJc0ltTnZiWEFpTENKZmNtVnVaR1Z5UTI5dGNHOXVaVzUwSWl3aVgyRnpjMlZ0WW14bGNpSXNJbDl1WlhoMElpd2lYMloxYm1NaUxDSmZjbVZ1WkdWeUlpd2lYM0J2YzNSU1pXNWtaWElpWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCZVVKQk96czdPenM3UVVGRlFVRXNjVUpCUVZkRExGTkJRVmdzUTBGQmNVSkRMRXRCUVhKQ0xFZEJRVFpDTEZWQlFWVkRMRWxCUVZZc1JVRkJaMEpETEVsQlFXaENMRVZCUVhOQ08wRkJReTlETEZGQlFVbERMRlZCUVZWTUxIRkNRVUZYVFN4WFFVRllMRVZCUVdRN1FVRkRRU3hSUVVGSlF5eE5RVUZOUml4UlFVRlJSeXhQUVVGU0xFTkJRV2RDUXl4SlFVRXhRanRCUVVOQkxGRkJRVWxETEUxQlFVMU1MRkZCUVZGTkxFOUJRV3hDTzBGQlEwRktMRkZCUVVsTExGbEJRVW9zUTBGQmFVSkdMRWxCUVVsSExFTkJRWEpDTEVWQlFYZENTQ3hKUVVGSlNTeERRVUUxUWl4RlFVRXJRa29zU1VGQlNVc3NRMEZCYmtNc1JVRkJjME5NTEVsQlFVbE5MRU5CUVRGRExFVkJRVFpEVGl4SlFVRkpUeXhGUVVGcVJDeEZRVUZ4UkZBc1NVRkJTVkVzUlVGQmVrUTdRVUZEUVZnc1VVRkJTVmtzUzBGQlNpeERRVUZWTEVOQlFWWXNSVUZCWVN4RFFVRkRMRU5CUVdRN08wRkJSVUVzVVVGQlNVTXNUMEZCVDJwQ0xFdEJRVXRyUWl4blFrRkJhRUk3UVVGRFFVUXNVMEZCUzBVc1ZVRkJUQ3hEUVVGblFteENMRWxCUVdoQ0xFVkJRWE5DUnl4SFFVRjBRaXhGUVVFeVFtRXNTVUZCTTBJN1FVRkRRU3hUUVVGTFJ5eExRVUZNTEVOQlFWZERMRXRCUVZnc1EwRkJhVUp5UWl4SlFVRnFRanRCUVVOSUxFTkJWa1FzUXl4RFFUTkNRVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRWFZEUVVnc2NVSkJRVmRETEZOQlFWZ3NRMEZCY1VKM1FpeFBRVUZ5UWl4SFFVRXJRaXhWUVVGVmRFSXNTVUZCVml4RlFVRm5RanRCUVVNelF5eFRRVUZMUkN4TFFVRk1MRU5CUVZkRExFbEJRVmdzUlVGQmFVSXNUVUZCYWtJN1FVRkRTQ3hEUVVaRU96dEJRVWxCU0N4eFFrRkJWME1zVTBGQldDeERRVUZ4UW5sQ0xGZEJRWEpDTEVkQlFXMURMRlZCUVZWMlFpeEpRVUZXTEVWQlFXZENPMEZCUXk5RExGTkJRVXRFTEV0QlFVd3NRMEZCVjBNc1NVRkJXQ3hGUVVGcFFpeFZRVUZxUWp0QlFVTklMRU5CUmtRaUxDSm1hV3hsSWpvaWNtVnVaR1Z5TFdac2IzY3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1SUVOdmNIbHlhV2RvZENBb1l5a2dNakF4TnkweU1ERTRJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGx4dVhHNGdhSFIwY0hNNkx5OTNkM2N1WTI5amIzTXVZMjl0TDF4dVhHNGdVR1Z5YldsemMybHZiaUJwY3lCb1pYSmxZbmtnWjNKaGJuUmxaQ3dnWm5KbFpTQnZaaUJqYUdGeVoyVXNJSFJ2SUdGdWVTQndaWEp6YjI0Z2IySjBZV2x1YVc1bklHRWdZMjl3ZVZ4dUlHOW1JSFJvYVhNZ2MyOW1kSGRoY21VZ1lXNWtJR0Z6YzI5amFXRjBaV1FnWlc1bmFXNWxJSE52ZFhKalpTQmpiMlJsSUNoMGFHVWdYQ0pUYjJaMGQyRnlaVndpS1N3Z1lTQnNhVzFwZEdWa0xGeHVJSGR2Y214a2QybGtaU3dnY205NVlXeDBlUzFtY21WbExDQnViMjR0WVhOemFXZHVZV0pzWlN3Z2NtVjJiMk5oWW14bElHRnVaQ0J1YjI0dFpYaGpiSFZ6YVhabElHeHBZMlZ1YzJWY2JpQjBieUIxYzJVZ1EyOWpiM01nUTNKbFlYUnZjaUJ6YjJ4bGJIa2dkRzhnWkdWMlpXeHZjQ0JuWVcxbGN5QnZiaUI1YjNWeUlIUmhjbWRsZENCd2JHRjBabTl5YlhNdUlGbHZkU0J6YUdGc2JGeHVJRzV2ZENCMWMyVWdRMjlqYjNNZ1EzSmxZWFJ2Y2lCemIyWjBkMkZ5WlNCbWIzSWdaR1YyWld4dmNHbHVaeUJ2ZEdobGNpQnpiMlowZDJGeVpTQnZjaUIwYjI5c2N5QjBhR0YwSjNOY2JpQjFjMlZrSUdadmNpQmtaWFpsYkc5d2FXNW5JR2RoYldWekxpQlpiM1VnWVhKbElHNXZkQ0JuY21GdWRHVmtJSFJ2SUhCMVlteHBjMmdzSUdScGMzUnlhV0oxZEdVc1hHNGdjM1ZpYkdsalpXNXpaU3dnWVc1a0wyOXlJSE5sYkd3Z1kyOXdhV1Z6SUc5bUlFTnZZMjl6SUVOeVpXRjBiM0l1WEc1Y2JpQlVhR1VnYzI5bWRIZGhjbVVnYjNJZ2RHOXZiSE1nYVc0Z2RHaHBjeUJNYVdObGJuTmxJRUZuY21WbGJXVnVkQ0JoY21VZ2JHbGpaVzV6WldRc0lHNXZkQ0J6YjJ4a0xseHVJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGlCeVpYTmxjblpsY3lCaGJHd2djbWxuYUhSeklHNXZkQ0JsZUhCeVpYTnpiSGtnWjNKaGJuUmxaQ0IwYnlCNWIzVXVYRzVjYmlCVVNFVWdVMDlHVkZkQlVrVWdTVk1nVUZKUFZrbEVSVVFnWENKQlV5QkpVMXdpTENCWFNWUklUMVZVSUZkQlVsSkJUbFJaSUU5R0lFRk9XU0JMU1U1RUxDQkZXRkJTUlZOVElFOVNYRzRnU1UxUVRFbEZSQ3dnU1U1RFRGVkVTVTVISUVKVlZDQk9UMVFnVEVsTlNWUkZSQ0JVVHlCVVNFVWdWMEZTVWtGT1ZFbEZVeUJQUmlCTlJWSkRTRUZPVkVGQ1NVeEpWRmtzWEc0Z1JrbFVUa1ZUVXlCR1QxSWdRU0JRUVZKVVNVTlZURUZTSUZCVlVsQlBVMFVnUVU1RUlFNVBUa2xPUmxKSlRrZEZUVVZPVkM0Z1NVNGdUazhnUlZaRlRsUWdVMGhCVEV3Z1ZFaEZYRzRnUVZWVVNFOVNVeUJQVWlCRFQxQlpVa2xIU0ZRZ1NFOU1SRVZTVXlCQ1JTQk1TVUZDVEVVZ1JrOVNJRUZPV1NCRFRFRkpUU3dnUkVGTlFVZEZVeUJQVWlCUFZFaEZVbHh1SUV4SlFVSkpURWxVV1N3Z1YwaEZWRWhGVWlCSlRpQkJUaUJCUTFSSlQwNGdUMFlnUTA5T1ZGSkJRMVFzSUZSUFVsUWdUMUlnVDFSSVJWSlhTVk5GTENCQlVrbFRTVTVISUVaU1QwMHNYRzRnVDFWVUlFOUdJRTlTSUVsT0lFTlBUazVGUTFSSlQwNGdWMGxVU0NCVVNFVWdVMDlHVkZkQlVrVWdUMUlnVkVoRklGVlRSU0JQVWlCUFZFaEZVaUJFUlVGTVNVNUhVeUJKVGx4dUlGUklSU0JUVDBaVVYwRlNSUzVjYmlBcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FMMXh1WEc1cGJYQnZjblFnVW1WdVpHVnlSbXh2ZHlCbWNtOXRJQ2N1TGk5eVpXNWtaWEl0Wm14dmR5YzdYRzVjYmxKbGJtUmxja1pzYjNjdWNISnZkRzkwZVhCbExsOWtjbUYzSUQwZ1puVnVZM1JwYjI0Z0tHNXZaR1VzSUdaMWJtTXBJSHRjYmlBZ0lDQnNaWFFnWW1GMFkyaGxjaUE5SUZKbGJtUmxja1pzYjNjdVoyVjBRbUZqYUhSb1pYSW9LVHRjYmlBZ0lDQnNaWFFnWTNSNElEMGdZbUYwWTJobGNpNWZaR1YyYVdObExsOWpkSGc3WEc0Z0lDQWdiR1YwSUdOaGJTQTlJR0poZEdOb1pYSXVYMk5oYldWeVlUdGNiaUFnSUNCamRIZ3VjMlYwVkhKaGJuTm1iM0p0S0dOaGJTNWhMQ0JqWVcwdVlpd2dZMkZ0TG1Nc0lHTmhiUzVrTENCallXMHVkSGdzSUdOaGJTNTBlU2s3WEc0Z0lDQWdZM1I0TG5OallXeGxLREVzSUMweEtUdGNibHh1SUNBZ0lHeGxkQ0JqYjIxd0lEMGdibTlrWlM1ZmNtVnVaR1Z5UTI5dGNHOXVaVzUwTzF4dUlDQWdJR052YlhBdVgyRnpjMlZ0WW14bGNsdG1kVzVqWFNoamRIZ3NJR052YlhBcE8xeHVJQ0FnSUhSb2FYTXVYMjVsZUhRdVgyWjFibU1vYm05a1pTazdYRzU5WEc1Y2JsSmxibVJsY2tac2IzY3VjSEp2ZEc5MGVYQmxMbDl5Wlc1a1pYSWdQU0JtZFc1amRHbHZiaUFvYm05a1pTa2dlMXh1SUNBZ0lIUm9hWE11WDJSeVlYY29ibTlrWlN3Z0oyUnlZWGNuS1R0Y2JuMWNibHh1VW1WdVpHVnlSbXh2ZHk1d2NtOTBiM1I1Y0dVdVgzQnZjM1JTWlc1a1pYSWdQU0JtZFc1amRHbHZiaUFvYm05a1pTa2dlMXh1SUNBZ0lIUm9hWE11WDJSeVlYY29ibTlrWlN3Z0ozQnZjM1JFY21GM0p5azdYRzU5WEc0aVhYMD0iXX0=