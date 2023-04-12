(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/geom-utils/ray.js';
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
        var vec3 = cc.vmath.vec3;
        function ray(ox, oy, oz, dx, dy, dz) {
            this.o = cc.v3(ox, oy, oz);
            this.d = cc.v3(dx, dy, dz);
        }
        ray.create = function (ox, oy, oz, dx, dy, dz) {
            return new ray(ox, oy, oz, dx, dy, dz);
        };
        ray.clone = function (a) {
            return new ray(a.o.x, a.o.y, a.o.z, a.d.x, a.d.y, a.d.z);
        };
        ray.copy = function (out, a) {
            out.o.x = a.o.x;
            out.o.y = a.o.y;
            out.o.z = a.o.z;
            out.d.x = a.d.x;
            out.d.y = a.d.y;
            out.d.z = a.d.z;
            return out;
        };
        ray.set = function (out, ox, oy, oz, dx, dy, dz) {
            out.o.x = ox;
            out.o.y = oy;
            out.o.z = oz;
            out.d.x = dx;
            out.d.y = dy;
            out.d.z = dz;
            return out;
        };
        ray.fromPoints = function (out, origin, lookAt) {
            vec3.copy(out.o, origin);
            vec3.normalize(out.d, vec3.sub(out.d, lookAt, origin));
            return out;
        };
        module.exports = ray;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJheS5qcyIsIi9Vc2Vycy9nYW95YW5nL1dvcmtTcGFjZS9qb3ljYXN0bGUvYmluZ28vY2xpZW50L2JpbmdvL2VuZ2luZS9jb2NvczJkL2NvcmUvZ2VvbS11dGlscy9yYXkuanMiXSwibmFtZXMiOlsidmVjMyIsImNjIiwidm1hdGgiLCJyYXkiLCJveCIsIm95Iiwib3oiLCJkeCIsImR5IiwiZHoiLCJvIiwidjMiLCJkIiwiY3JlYXRlIiwiY2xvbmUiLCJhIiwieCIsInkiLCJ6IiwiY29weSIsIm91dCIsInNldCIsImZyb21Qb2ludHMiLCJvcmlnaW4iLCJsb29rQXQiLCJub3JtYWxpemUiLCJzdWIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBQXNCQSxJQUF0QixPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQXNCQTs7SUFFdEIsSUFBQSxVQUFBLEdBQUEsMkNBQUE7Ozs7Ozs7Ozs7O1FBRkEsSUFBTUEsSUFBQUEsR0FBT0MsRUFBQUEsQ0FBR0MsS0FBSEQsQ0FBU0QsSUFBdEI7UUFXQSxTQUFTRyxHQUFULENBQWFDLEVBQWIsRUFBaUJDLEVBQWpCLEVBQXFCQyxFQUFyQixFQUF5QkMsRUFBekIsRUFBNkJDLEVBQTdCLEVBQWlDQyxFQUFqQyxFQUFxQztBQUFBLFlBQ2pDLEtBQUtDLENBQUwsR0FBU1QsRUFBQUEsQ0FBR1UsRUFBSFYsQ0FBTUcsRUFBTkgsRUFBVUksRUFBVkosRUFBY0ssRUFBZEwsQ0FBVCxDQURpQztBQUFBLFlBRWpDLEtBQUtXLENBQUwsR0FBU1gsRUFBQUEsQ0FBR1UsRUFBSFYsQ0FBTU0sRUFBTk4sRUFBVU8sRUFBVlAsRUFBY1EsRUFBZFIsQ0FBVCxDQUZpQztBQUFBO1FBZ0JyQ0UsR0FBQUEsQ0FBSVUsTUFBSlYsR0FBYSxVQUFVQyxFQUFWLEVBQWNDLEVBQWQsRUFBa0JDLEVBQWxCLEVBQXNCQyxFQUF0QixFQUEwQkMsRUFBMUIsRUFBOEJDLEVBQTlCLEVBQWtDO0FBQUEsWUFDM0MsT0FBTyxJQUFJTixHQUFKLENBQVFDLEVBQVIsRUFBWUMsRUFBWixFQUFnQkMsRUFBaEIsRUFBb0JDLEVBQXBCLEVBQXdCQyxFQUF4QixFQUE0QkMsRUFBNUIsQ0FBUCxDQUQyQztBQUFBLFNBQS9DTjtRQVVBQSxHQUFBQSxDQUFJVyxLQUFKWCxHQUFZLFVBQVVZLENBQVYsRUFBYTtBQUFBLFlBQ3JCLE9BQU8sSUFBSVosR0FBSixDQUNIWSxDQUFBQSxDQUFFTCxDQUFGSyxDQUFJQyxDQURELEVBQ0lELENBQUFBLENBQUVMLENBQUZLLENBQUlFLENBRFIsRUFDV0YsQ0FBQUEsQ0FBRUwsQ0FBRkssQ0FBSUcsQ0FEZixFQUVISCxDQUFBQSxDQUFFSCxDQUFGRyxDQUFJQyxDQUZELEVBRUlELENBQUFBLENBQUVILENBQUZHLENBQUlFLENBRlIsRUFFV0YsQ0FBQUEsQ0FBRUgsQ0FBRkcsQ0FBSUcsQ0FGZixDQUFQLENBRHFCO0FBQUEsU0FBekJmO1FBY0FBLEdBQUFBLENBQUlnQixJQUFKaEIsR0FBVyxVQUFVaUIsR0FBVixFQUFlTCxDQUFmLEVBQWtCO0FBQUEsWUFDekJLLEdBQUFBLENBQUlWLENBQUpVLENBQU1KLENBQU5JLEdBQVVMLENBQUFBLENBQUVMLENBQUZLLENBQUlDLENBQWRJLENBRHlCO0FBQUEsWUFFekJBLEdBQUFBLENBQUlWLENBQUpVLENBQU1ILENBQU5HLEdBQVVMLENBQUFBLENBQUVMLENBQUZLLENBQUlFLENBQWRHLENBRnlCO0FBQUEsWUFHekJBLEdBQUFBLENBQUlWLENBQUpVLENBQU1GLENBQU5FLEdBQVVMLENBQUFBLENBQUVMLENBQUZLLENBQUlHLENBQWRFLENBSHlCO0FBQUEsWUFJekJBLEdBQUFBLENBQUlSLENBQUpRLENBQU1KLENBQU5JLEdBQVVMLENBQUFBLENBQUVILENBQUZHLENBQUlDLENBQWRJLENBSnlCO0FBQUEsWUFLekJBLEdBQUFBLENBQUlSLENBQUpRLENBQU1ILENBQU5HLEdBQVVMLENBQUFBLENBQUVILENBQUZHLENBQUlFLENBQWRHLENBTHlCO0FBQUEsWUFNekJBLEdBQUFBLENBQUlSLENBQUpRLENBQU1GLENBQU5FLEdBQVVMLENBQUFBLENBQUVILENBQUZHLENBQUlHLENBQWRFLENBTnlCO0FBQUEsWUFRekIsT0FBT0EsR0FBUCxDQVJ5QjtBQUFBLFNBQTdCakI7UUF1QkFBLEdBQUFBLENBQUlrQixHQUFKbEIsR0FBVSxVQUFVaUIsR0FBVixFQUFlaEIsRUFBZixFQUFtQkMsRUFBbkIsRUFBdUJDLEVBQXZCLEVBQTJCQyxFQUEzQixFQUErQkMsRUFBL0IsRUFBbUNDLEVBQW5DLEVBQXVDO0FBQUEsWUFDN0NXLEdBQUFBLENBQUlWLENBQUpVLENBQU1KLENBQU5JLEdBQVVoQixFQUFWZ0IsQ0FENkM7QUFBQSxZQUU3Q0EsR0FBQUEsQ0FBSVYsQ0FBSlUsQ0FBTUgsQ0FBTkcsR0FBVWYsRUFBVmUsQ0FGNkM7QUFBQSxZQUc3Q0EsR0FBQUEsQ0FBSVYsQ0FBSlUsQ0FBTUYsQ0FBTkUsR0FBVWQsRUFBVmMsQ0FINkM7QUFBQSxZQUk3Q0EsR0FBQUEsQ0FBSVIsQ0FBSlEsQ0FBTUosQ0FBTkksR0FBVWIsRUFBVmEsQ0FKNkM7QUFBQSxZQUs3Q0EsR0FBQUEsQ0FBSVIsQ0FBSlEsQ0FBTUgsQ0FBTkcsR0FBVVosRUFBVlksQ0FMNkM7QUFBQSxZQU03Q0EsR0FBQUEsQ0FBSVIsQ0FBSlEsQ0FBTUYsQ0FBTkUsR0FBVVgsRUFBVlcsQ0FONkM7QUFBQSxZQVE3QyxPQUFPQSxHQUFQLENBUjZDO0FBQUEsU0FBakRqQjtRQW1CQUEsR0FBQUEsQ0FBSW1CLFVBQUpuQixHQUFpQixVQUFVaUIsR0FBVixFQUFlRyxNQUFmLEVBQXVCQyxNQUF2QixFQUErQjtBQUFBLFlBQzVDeEIsSUFBQUEsQ0FBS21CLElBQUxuQixDQUFVb0IsR0FBQUEsQ0FBSVYsQ0FBZFYsRUFBaUJ1QixNQUFqQnZCLEVBRDRDO0FBQUEsWUFFNUNBLElBQUFBLENBQUt5QixTQUFMekIsQ0FBZW9CLEdBQUFBLENBQUlSLENBQW5CWixFQUFzQkEsSUFBQUEsQ0FBSzBCLEdBQUwxQixDQUFTb0IsR0FBQUEsQ0FBSVIsQ0FBYlosRUFBZ0J3QixNQUFoQnhCLEVBQXdCdUIsTUFBeEJ2QixDQUF0QkEsRUFGNEM7QUFBQSxZQUk1QyxPQUFPb0IsR0FBUCxDQUo0QztBQUFBLFNBQWhEakI7UUFPQXdCLE1BQUFBLENBQU9DLE9BQVBELEdBQWlCeEIsR0FBakJ3Qjs7SUF6RkEsSUFBQSxPQUFBLEVBQWlDbEI7QUFBQUEsUUFDVkosUUFBQUEsQ0FBbkIsUUFBQSxDQUFBLE9BQW1CQSxFQUFuQixTQUFtQkEsRUFBbkIsUUFBbUJBLEVBRFVJO0FBQUFBLEtBQWpDLE1BR0M7QUFBQTtZQUVELFFBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxRQUFBO1dBRkM7QUFBQSIsImZpbGUiOiJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB2ZWMzID0gY2Mudm1hdGgudmVjMztcblxuLyoqXG4gKiBAY2xhc3MgZ2VvbVV0aWxzLlJheVxuICogQHBhcmFtIHtOdW1iZXJ9IG94IFxuICogQHBhcmFtIHtOdW1iZXJ9IG95IFxuICogQHBhcmFtIHtOdW1iZXJ9IG96IFxuICogQHBhcmFtIHtOdW1iZXJ9IGR4IFxuICogQHBhcmFtIHtOdW1iZXJ9IGR5IFxuICogQHBhcmFtIHtOdW1iZXJ9IGR6IFxuICovXG5mdW5jdGlvbiByYXkob3gsIG95LCBveiwgZHgsIGR5LCBkeikge1xuICAgIHRoaXMubyA9IGNjLnYzKG94LCBveSwgb3opO1xuICAgIHRoaXMuZCA9IGNjLnYzKGR4LCBkeSwgZHopO1xufVxuXG4vKipcbiAqIGNyZWF0ZSBhIG5ldyByYXlcbiAqIEBtZXRob2QgY3JlYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gb3ggb3JpZ2luIFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gb3kgb3JpZ2luIFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gb3ogb3JpZ2luIFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gZHggZGlyIFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gZHkgZGlyIFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gZHogZGlyIFogY29tcG9uZW50XG4gKiBAcmV0dXJuIHtnZW9tVXRpbHMuUmF5fVxuICovXG5yYXkuY3JlYXRlID0gZnVuY3Rpb24gKG94LCBveSwgb3osIGR4LCBkeSwgZHopIHtcbiAgICByZXR1cm4gbmV3IHJheShveCwgb3ksIG96LCBkeCwgZHksIGR6KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHJheSBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIHJheVxuICogQG1ldGhvZCBjbG9uZVxuICogQHBhcmFtIHtnZW9tVXRpbHMuUmF5fSBhIHJheSB0byBjbG9uZVxuICogQHJldHVybnMge2dlb21VdGlscy5SYXl9IGEgbmV3IHJheVxuICovXG5yYXkuY2xvbmUgPSBmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiBuZXcgcmF5KFxuICAgICAgICBhLm8ueCwgYS5vLnksIGEuby56LFxuICAgICAgICBhLmQueCwgYS5kLnksIGEuZC56XG4gICAgKTtcbn1cblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgcmF5IHRvIGFub3RoZXJcbiAqIEBtZXRob2QgY29weVxuICogQHBhcmFtIHtnZW9tVXRpbHMuUmF5fSBvdXQgdGhlIHJlY2VpdmluZyByYXlcbiAqIEBwYXJhbSB7Z2VvbVV0aWxzLlJheX0gYSB0aGUgc291cmNlIHJheVxuICogQHJldHVybnMge2dlb21VdGlscy5SYXl9IG91dFxuICovXG5yYXkuY29weSA9IGZ1bmN0aW9uIChvdXQsIGEpIHtcbiAgICBvdXQuby54ID0gYS5vLng7XG4gICAgb3V0Lm8ueSA9IGEuby55O1xuICAgIG91dC5vLnogPSBhLm8uejtcbiAgICBvdXQuZC54ID0gYS5kLng7XG4gICAgb3V0LmQueSA9IGEuZC55O1xuICAgIG91dC5kLnogPSBhLmQuejtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMyB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKiBAbWV0aG9kIHNldFxuICogQHBhcmFtIHtWZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBveCBvcmlnaW4gWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBveSBvcmlnaW4gWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBveiBvcmlnaW4gWiBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBkeCBkaXIgWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBkeSBkaXIgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBkeiBkaXIgWiBjb21wb25lbnRcbiAqIEByZXR1cm5zIHtWZWMzfSBvdXRcbiAqL1xucmF5LnNldCA9IGZ1bmN0aW9uIChvdXQsIG94LCBveSwgb3osIGR4LCBkeSwgZHopIHtcbiAgICBvdXQuby54ID0gb3g7XG4gICAgb3V0Lm8ueSA9IG95O1xuICAgIG91dC5vLnogPSBvejtcbiAgICBvdXQuZC54ID0gZHg7XG4gICAgb3V0LmQueSA9IGR5O1xuICAgIG91dC5kLnogPSBkejtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogY3JlYXRlIHJheSBmcm9tIDIgcG9pbnRzXG4gKiBAbWV0aG9kIGZyb21Qb2ludHNcbiAqIEBwYXJhbSB7Z2VvbVV0aWxzLlJheX0gb3V0IHRoZSByZWNlaXZpbmcgcGxhbmVcbiAqIEBwYXJhbSB7VmVjM30gb3JpZ2luXG4gKiBAcGFyYW0ge1ZlYzN9IGxvb2tBdFxuICogQHJldHVybnMge2dlb21VdGlscy5SYXl9IG91dFxuICovXG5yYXkuZnJvbVBvaW50cyA9IGZ1bmN0aW9uIChvdXQsIG9yaWdpbiwgbG9va0F0KSB7XG4gICAgdmVjMy5jb3B5KG91dC5vLCBvcmlnaW4pO1xuICAgIHZlYzMubm9ybWFsaXplKG91dC5kLCB2ZWMzLnN1YihvdXQuZCwgbG9va0F0LCBvcmlnaW4pKTtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmF5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB2ZWMzID0gY2Mudm1hdGgudmVjMztcblxuLyoqXG4gKiBAY2xhc3MgZ2VvbVV0aWxzLlJheVxuICogQHBhcmFtIHtOdW1iZXJ9IG94IFxuICogQHBhcmFtIHtOdW1iZXJ9IG95IFxuICogQHBhcmFtIHtOdW1iZXJ9IG96IFxuICogQHBhcmFtIHtOdW1iZXJ9IGR4IFxuICogQHBhcmFtIHtOdW1iZXJ9IGR5IFxuICogQHBhcmFtIHtOdW1iZXJ9IGR6IFxuICovXG5mdW5jdGlvbiByYXkob3gsIG95LCBveiwgZHgsIGR5LCBkeikge1xuICAgIHRoaXMubyA9IGNjLnYzKG94LCBveSwgb3opO1xuICAgIHRoaXMuZCA9IGNjLnYzKGR4LCBkeSwgZHopO1xufVxuXG4vKipcbiAqIGNyZWF0ZSBhIG5ldyByYXlcbiAqIEBtZXRob2QgY3JlYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gb3ggb3JpZ2luIFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gb3kgb3JpZ2luIFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gb3ogb3JpZ2luIFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gZHggZGlyIFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gZHkgZGlyIFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gZHogZGlyIFogY29tcG9uZW50XG4gKiBAcmV0dXJuIHtnZW9tVXRpbHMuUmF5fVxuICovXG5yYXkuY3JlYXRlID0gZnVuY3Rpb24gKG94LCBveSwgb3osIGR4LCBkeSwgZHopIHtcbiAgICByZXR1cm4gbmV3IHJheShveCwgb3ksIG96LCBkeCwgZHksIGR6KTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyByYXkgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyByYXlcbiAqIEBtZXRob2QgY2xvbmVcbiAqIEBwYXJhbSB7Z2VvbVV0aWxzLlJheX0gYSByYXkgdG8gY2xvbmVcbiAqIEByZXR1cm5zIHtnZW9tVXRpbHMuUmF5fSBhIG5ldyByYXlcbiAqL1xucmF5LmNsb25lID0gZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gbmV3IHJheShhLm8ueCwgYS5vLnksIGEuby56LCBhLmQueCwgYS5kLnksIGEuZC56KTtcbn07XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHJheSB0byBhbm90aGVyXG4gKiBAbWV0aG9kIGNvcHlcbiAqIEBwYXJhbSB7Z2VvbVV0aWxzLlJheX0gb3V0IHRoZSByZWNlaXZpbmcgcmF5XG4gKiBAcGFyYW0ge2dlb21VdGlscy5SYXl9IGEgdGhlIHNvdXJjZSByYXlcbiAqIEByZXR1cm5zIHtnZW9tVXRpbHMuUmF5fSBvdXRcbiAqL1xucmF5LmNvcHkgPSBmdW5jdGlvbiAob3V0LCBhKSB7XG4gICAgb3V0Lm8ueCA9IGEuby54O1xuICAgIG91dC5vLnkgPSBhLm8ueTtcbiAgICBvdXQuby56ID0gYS5vLno7XG4gICAgb3V0LmQueCA9IGEuZC54O1xuICAgIG91dC5kLnkgPSBhLmQueTtcbiAgICBvdXQuZC56ID0gYS5kLno7XG5cbiAgICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzIHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqIEBtZXRob2Qgc2V0XG4gKiBAcGFyYW0ge1ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IG94IG9yaWdpbiBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IG95IG9yaWdpbiBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IG96IG9yaWdpbiBaIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IGR4IGRpciBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IGR5IGRpciBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IGR6IGRpciBaIGNvbXBvbmVudFxuICogQHJldHVybnMge1ZlYzN9IG91dFxuICovXG5yYXkuc2V0ID0gZnVuY3Rpb24gKG91dCwgb3gsIG95LCBveiwgZHgsIGR5LCBkeikge1xuICAgIG91dC5vLnggPSBveDtcbiAgICBvdXQuby55ID0gb3k7XG4gICAgb3V0Lm8ueiA9IG96O1xuICAgIG91dC5kLnggPSBkeDtcbiAgICBvdXQuZC55ID0gZHk7XG4gICAgb3V0LmQueiA9IGR6O1xuXG4gICAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogY3JlYXRlIHJheSBmcm9tIDIgcG9pbnRzXG4gKiBAbWV0aG9kIGZyb21Qb2ludHNcbiAqIEBwYXJhbSB7Z2VvbVV0aWxzLlJheX0gb3V0IHRoZSByZWNlaXZpbmcgcGxhbmVcbiAqIEBwYXJhbSB7VmVjM30gb3JpZ2luXG4gKiBAcGFyYW0ge1ZlYzN9IGxvb2tBdFxuICogQHJldHVybnMge2dlb21VdGlscy5SYXl9IG91dFxuICovXG5yYXkuZnJvbVBvaW50cyA9IGZ1bmN0aW9uIChvdXQsIG9yaWdpbiwgbG9va0F0KSB7XG4gICAgdmVjMy5jb3B5KG91dC5vLCBvcmlnaW4pO1xuICAgIHZlYzMubm9ybWFsaXplKG91dC5kLCB2ZWMzLnN1YihvdXQuZCwgbG9va0F0LCBvcmlnaW4pKTtcblxuICAgIHJldHVybiBvdXQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJheTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluSmhlUzVxY3lKZExDSnVZVzFsY3lJNld5SjJaV016SWl3aVkyTWlMQ0oyYldGMGFDSXNJbkpoZVNJc0ltOTRJaXdpYjNraUxDSnZlaUlzSW1SNElpd2laSGtpTENKa2VpSXNJbThpTENKMk15SXNJbVFpTENKamNtVmhkR1VpTENKamJHOXVaU0lzSW1FaUxDSjRJaXdpZVNJc0lub2lMQ0pqYjNCNUlpd2liM1YwSWl3aWMyVjBJaXdpWm5KdmJWQnZhVzUwY3lJc0ltOXlhV2RwYmlJc0lteHZiMnRCZENJc0ltNXZjbTFoYkdsNlpTSXNJbk4xWWlJc0ltMXZaSFZzWlNJc0ltVjRjRzl5ZEhNaVhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNTVUZCVFVFc1QwRkJUME1zUjBGQlIwTXNTMEZCU0N4RFFVRlRSaXhKUVVGMFFqczdRVUZGUVRzN096czdPenM3TzBGQlUwRXNVMEZCVTBjc1IwRkJWQ3hEUVVGaFF5eEZRVUZpTEVWQlFXbENReXhGUVVGcVFpeEZRVUZ4UWtNc1JVRkJja0lzUlVGQmVVSkRMRVZCUVhwQ0xFVkJRVFpDUXl4RlFVRTNRaXhGUVVGcFEwTXNSVUZCYWtNc1JVRkJjVU03UVVGRGFrTXNVMEZCUzBNc1EwRkJUQ3hIUVVGVFZDeEhRVUZIVlN4RlFVRklMRU5CUVUxUUxFVkJRVTRzUlVGQlZVTXNSVUZCVml4RlFVRmpReXhGUVVGa0xFTkJRVlE3UVVGRFFTeFRRVUZMVFN4RFFVRk1MRWRCUVZOWUxFZEJRVWRWTEVWQlFVZ3NRMEZCVFVvc1JVRkJUaXhGUVVGVlF5eEZRVUZXTEVWQlFXTkRMRVZCUVdRc1EwRkJWRHRCUVVOSU96dEJRVVZFT3pzN096czdPenM3T3p0QlFWZEJUaXhKUVVGSlZTeE5RVUZLTEVkQlFXRXNWVUZCVlZRc1JVRkJWaXhGUVVGalF5eEZRVUZrTEVWQlFXdENReXhGUVVGc1FpeEZRVUZ6UWtNc1JVRkJkRUlzUlVGQk1FSkRMRVZCUVRGQ0xFVkJRVGhDUXl4RlFVRTVRaXhGUVVGclF6dEJRVU16UXl4WFFVRlBMRWxCUVVsT0xFZEJRVW9zUTBGQlVVTXNSVUZCVWl4RlFVRlpReXhGUVVGYUxFVkJRV2RDUXl4RlFVRm9RaXhGUVVGdlFrTXNSVUZCY0VJc1JVRkJkMEpETEVWQlFYaENMRVZCUVRSQ1F5eEZRVUUxUWl4RFFVRlFPMEZCUTBnc1EwRkdSRHM3UVVGSlFUczdPenM3TzBGQlRVRk9MRWxCUVVsWExFdEJRVW9zUjBGQldTeFZRVUZWUXl4RFFVRldMRVZCUVdFN1FVRkRja0lzVjBGQlR5eEpRVUZKV2l4SFFVRktMRU5CUTBoWkxFVkJRVVZNTEVOQlFVWXNRMEZCU1Uwc1EwRkVSQ3hGUVVOSlJDeEZRVUZGVEN4RFFVRkdMRU5CUVVsUExFTkJSRklzUlVGRFYwWXNSVUZCUlV3c1EwRkJSaXhEUVVGSlVTeERRVVJtTEVWQlJVaElMRVZCUVVWSUxFTkJRVVlzUTBGQlNVa3NRMEZHUkN4RlFVVkpSQ3hGUVVGRlNDeERRVUZHTEVOQlFVbExMRU5CUmxJc1JVRkZWMFlzUlVGQlJVZ3NRMEZCUml4RFFVRkpUU3hEUVVabUxFTkJRVkE3UVVGSlNDeERRVXhFT3p0QlFVOUJPenM3T3pzN08wRkJUMEZtTEVsQlFVbG5RaXhKUVVGS0xFZEJRVmNzVlVGQlZVTXNSMEZCVml4RlFVRmxUQ3hEUVVGbUxFVkJRV3RDTzBGQlEzcENTeXhSUVVGSlZpeERRVUZLTEVOQlFVMU5MRU5CUVU0c1IwRkJWVVFzUlVGQlJVd3NRMEZCUml4RFFVRkpUU3hEUVVGa08wRkJRMEZKTEZGQlFVbFdMRU5CUVVvc1EwRkJUVThzUTBGQlRpeEhRVUZWUml4RlFVRkZUQ3hEUVVGR0xFTkJRVWxQTEVOQlFXUTdRVUZEUVVjc1VVRkJTVllzUTBGQlNpeERRVUZOVVN4RFFVRk9MRWRCUVZWSUxFVkJRVVZNTEVOQlFVWXNRMEZCU1ZFc1EwRkJaRHRCUVVOQlJTeFJRVUZKVWl4RFFVRktMRU5CUVUxSkxFTkJRVTRzUjBGQlZVUXNSVUZCUlVnc1EwRkJSaXhEUVVGSlNTeERRVUZrTzBGQlEwRkpMRkZCUVVsU0xFTkJRVW9zUTBGQlRVc3NRMEZCVGl4SFFVRlZSaXhGUVVGRlNDeERRVUZHTEVOQlFVbExMRU5CUVdRN1FVRkRRVWNzVVVGQlNWSXNRMEZCU2l4RFFVRk5UU3hEUVVGT0xFZEJRVlZJTEVWQlFVVklMRU5CUVVZc1EwRkJTVTBzUTBGQlpEczdRVUZGUVN4WFFVRlBSU3hIUVVGUU8wRkJRMGdzUTBGVVJEczdRVUZYUVRzN096czdPenM3T3pzN08wRkJXVUZxUWl4SlFVRkphMElzUjBGQlNpeEhRVUZWTEZWQlFWVkVMRWRCUVZZc1JVRkJaV2hDTEVWQlFXWXNSVUZCYlVKRExFVkJRVzVDTEVWQlFYVkNReXhGUVVGMlFpeEZRVUV5UWtNc1JVRkJNMElzUlVGQkswSkRMRVZCUVM5Q0xFVkJRVzFEUXl4RlFVRnVReXhGUVVGMVF6dEJRVU0zUTFjc1VVRkJTVllzUTBGQlNpeERRVUZOVFN4RFFVRk9MRWRCUVZWYUxFVkJRVlk3UVVGRFFXZENMRkZCUVVsV0xFTkJRVW9zUTBGQlRVOHNRMEZCVGl4SFFVRlZXaXhGUVVGV08wRkJRMEZsTEZGQlFVbFdMRU5CUVVvc1EwRkJUVkVzUTBGQlRpeEhRVUZWV2l4RlFVRldPMEZCUTBGakxGRkJRVWxTTEVOQlFVb3NRMEZCVFVrc1EwRkJUaXhIUVVGVlZDeEZRVUZXTzBGQlEwRmhMRkZCUVVsU0xFTkJRVW9zUTBGQlRVc3NRMEZCVGl4SFFVRlZWQ3hGUVVGV08wRkJRMEZaTEZGQlFVbFNMRU5CUVVvc1EwRkJUVTBzUTBGQlRpeEhRVUZWVkN4RlFVRldPenRCUVVWQkxGZEJRVTlYTEVkQlFWQTdRVUZEU0N4RFFWUkVPenRCUVZkQk96czdPenM3T3p0QlFWRkJha0lzU1VGQlNXMUNMRlZCUVVvc1IwRkJhVUlzVlVGQlZVWXNSMEZCVml4RlFVRmxSeXhOUVVGbUxFVkJRWFZDUXl4TlFVRjJRaXhGUVVFclFqdEJRVU0xUTNoQ0xGTkJRVXR0UWl4SlFVRk1MRU5CUVZWRExFbEJRVWxXTEVOQlFXUXNSVUZCYVVKaExFMUJRV3BDTzBGQlEwRjJRaXhUUVVGTGVVSXNVMEZCVEN4RFFVRmxUQ3hKUVVGSlVpeERRVUZ1UWl4RlFVRnpRbG9zUzBGQlN6QkNMRWRCUVV3c1EwRkJVMDRzU1VGQlNWSXNRMEZCWWl4RlFVRm5RbGtzVFVGQmFFSXNSVUZCZDBKRUxFMUJRWGhDTEVOQlFYUkNPenRCUVVWQkxGZEJRVTlJTEVkQlFWQTdRVUZEU0N4RFFVeEVPenRCUVU5QlR5eFBRVUZQUXl4UFFVRlFMRWRCUVdsQ2VrSXNSMEZCYWtJaUxDSm1hV3hsSWpvaWNtRjVMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVkyOXVjM1FnZG1Wak15QTlJR05qTG5adFlYUm9MblpsWXpNN1hHNWNiaThxS2x4dUlDb2dRR05zWVhOeklHZGxiMjFWZEdsc2N5NVNZWGxjYmlBcUlFQndZWEpoYlNCN1RuVnRZbVZ5ZlNCdmVDQmNiaUFxSUVCd1lYSmhiU0I3VG5WdFltVnlmU0J2ZVNCY2JpQXFJRUJ3WVhKaGJTQjdUblZ0WW1WeWZTQnZlaUJjYmlBcUlFQndZWEpoYlNCN1RuVnRZbVZ5ZlNCa2VDQmNiaUFxSUVCd1lYSmhiU0I3VG5WdFltVnlmU0JrZVNCY2JpQXFJRUJ3WVhKaGJTQjdUblZ0WW1WeWZTQmtlaUJjYmlBcUwxeHVablZ1WTNScGIyNGdjbUY1S0c5NExDQnZlU3dnYjNvc0lHUjRMQ0JrZVN3Z1pIb3BJSHRjYmlBZ0lDQjBhR2x6TG04Z1BTQmpZeTUyTXlodmVDd2diM2tzSUc5NktUdGNiaUFnSUNCMGFHbHpMbVFnUFNCall5NTJNeWhrZUN3Z1pIa3NJR1I2S1R0Y2JuMWNibHh1THlvcVhHNGdLaUJqY21WaGRHVWdZU0J1WlhjZ2NtRjVYRzRnS2lCQWJXVjBhRzlrSUdOeVpXRjBaVnh1SUNvZ1FIQmhjbUZ0SUh0T2RXMWlaWEo5SUc5NElHOXlhV2RwYmlCWUlHTnZiWEJ2Ym1WdWRGeHVJQ29nUUhCaGNtRnRJSHRPZFcxaVpYSjlJRzk1SUc5eWFXZHBiaUJaSUdOdmJYQnZibVZ1ZEZ4dUlDb2dRSEJoY21GdElIdE9kVzFpWlhKOUlHOTZJRzl5YVdkcGJpQmFJR052YlhCdmJtVnVkRnh1SUNvZ1FIQmhjbUZ0SUh0T2RXMWlaWEo5SUdSNElHUnBjaUJZSUdOdmJYQnZibVZ1ZEZ4dUlDb2dRSEJoY21GdElIdE9kVzFpWlhKOUlHUjVJR1JwY2lCWklHTnZiWEJ2Ym1WdWRGeHVJQ29nUUhCaGNtRnRJSHRPZFcxaVpYSjlJR1I2SUdScGNpQmFJR052YlhCdmJtVnVkRnh1SUNvZ1FISmxkSFZ5YmlCN1oyVnZiVlYwYVd4ekxsSmhlWDFjYmlBcUwxeHVjbUY1TG1OeVpXRjBaU0E5SUdaMWJtTjBhVzl1SUNodmVDd2diM2tzSUc5NkxDQmtlQ3dnWkhrc0lHUjZLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJ5WVhrb2IzZ3NJRzk1TENCdmVpd2daSGdzSUdSNUxDQmtlaWs3WEc1OVhHNWNiaThxS2x4dUlDb2dRM0psWVhSbGN5QmhJRzVsZHlCeVlYa2dhVzVwZEdsaGJHbDZaV1FnZDJsMGFDQjJZV3gxWlhNZ1puSnZiU0JoYmlCbGVHbHpkR2x1WnlCeVlYbGNiaUFxSUVCdFpYUm9iMlFnWTJ4dmJtVmNiaUFxSUVCd1lYSmhiU0I3WjJWdmJWVjBhV3h6TGxKaGVYMGdZU0J5WVhrZ2RHOGdZMnh2Ym1WY2JpQXFJRUJ5WlhSMWNtNXpJSHRuWlc5dFZYUnBiSE11VW1GNWZTQmhJRzVsZHlCeVlYbGNiaUFxTDF4dWNtRjVMbU5zYjI1bElEMGdablZ1WTNScGIyNGdLR0VwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdibVYzSUhKaGVTaGNiaUFnSUNBZ0lDQWdZUzV2TG5nc0lHRXVieTU1TENCaExtOHVlaXhjYmlBZ0lDQWdJQ0FnWVM1a0xuZ3NJR0V1WkM1NUxDQmhMbVF1ZWx4dUlDQWdJQ2s3WEc1OVhHNWNiaThxS2x4dUlDb2dRMjl3ZVNCMGFHVWdkbUZzZFdWeklHWnliMjBnYjI1bElISmhlU0IwYnlCaGJtOTBhR1Z5WEc0Z0tpQkFiV1YwYUc5a0lHTnZjSGxjYmlBcUlFQndZWEpoYlNCN1oyVnZiVlYwYVd4ekxsSmhlWDBnYjNWMElIUm9aU0J5WldObGFYWnBibWNnY21GNVhHNGdLaUJBY0dGeVlXMGdlMmRsYjIxVmRHbHNjeTVTWVhsOUlHRWdkR2hsSUhOdmRYSmpaU0J5WVhsY2JpQXFJRUJ5WlhSMWNtNXpJSHRuWlc5dFZYUnBiSE11VW1GNWZTQnZkWFJjYmlBcUwxeHVjbUY1TG1OdmNIa2dQU0JtZFc1amRHbHZiaUFvYjNWMExDQmhLU0I3WEc0Z0lDQWdiM1YwTG04dWVDQTlJR0V1Ynk1NE8xeHVJQ0FnSUc5MWRDNXZMbmtnUFNCaExtOHVlVHRjYmlBZ0lDQnZkWFF1Ynk1NklEMGdZUzV2TG5vN1hHNGdJQ0FnYjNWMExtUXVlQ0E5SUdFdVpDNTRPMXh1SUNBZ0lHOTFkQzVrTG5rZ1BTQmhMbVF1ZVR0Y2JpQWdJQ0J2ZFhRdVpDNTZJRDBnWVM1a0xubzdYRzVjYmlBZ0lDQnlaWFIxY200Z2IzVjBPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlGTmxkQ0IwYUdVZ1kyOXRjRzl1Wlc1MGN5QnZaaUJoSUhabFl6TWdkRzhnZEdobElHZHBkbVZ1SUhaaGJIVmxjMXh1SUNvZ1FHMWxkR2h2WkNCelpYUmNiaUFxSUVCd1lYSmhiU0I3Vm1Wak0zMGdiM1YwSUhSb1pTQnlaV05sYVhacGJtY2dkbVZqZEc5eVhHNGdLaUJBY0dGeVlXMGdlMDUxYldKbGNuMGdiM2dnYjNKcFoybHVJRmdnWTI5dGNHOXVaVzUwWEc0Z0tpQkFjR0Z5WVcwZ2UwNTFiV0psY24wZ2Iza2diM0pwWjJsdUlGa2dZMjl0Y0c5dVpXNTBYRzRnS2lCQWNHRnlZVzBnZTA1MWJXSmxjbjBnYjNvZ2IzSnBaMmx1SUZvZ1kyOXRjRzl1Wlc1MFhHNGdLaUJBY0dGeVlXMGdlMDUxYldKbGNuMGdaSGdnWkdseUlGZ2dZMjl0Y0c5dVpXNTBYRzRnS2lCQWNHRnlZVzBnZTA1MWJXSmxjbjBnWkhrZ1pHbHlJRmtnWTI5dGNHOXVaVzUwWEc0Z0tpQkFjR0Z5WVcwZ2UwNTFiV0psY24wZ1pIb2daR2x5SUZvZ1kyOXRjRzl1Wlc1MFhHNGdLaUJBY21WMGRYSnVjeUI3Vm1Wak0zMGdiM1YwWEc0Z0tpOWNibkpoZVM1elpYUWdQU0JtZFc1amRHbHZiaUFvYjNWMExDQnZlQ3dnYjNrc0lHOTZMQ0JrZUN3Z1pIa3NJR1I2S1NCN1hHNGdJQ0FnYjNWMExtOHVlQ0E5SUc5NE8xeHVJQ0FnSUc5MWRDNXZMbmtnUFNCdmVUdGNiaUFnSUNCdmRYUXVieTU2SUQwZ2IzbzdYRzRnSUNBZ2IzVjBMbVF1ZUNBOUlHUjRPMXh1SUNBZ0lHOTFkQzVrTG5rZ1BTQmtlVHRjYmlBZ0lDQnZkWFF1WkM1NklEMGdaSG83WEc1Y2JpQWdJQ0J5WlhSMWNtNGdiM1YwTzF4dWZWeHVYRzR2S2lwY2JpQXFJR055WldGMFpTQnlZWGtnWm5KdmJTQXlJSEJ2YVc1MGMxeHVJQ29nUUcxbGRHaHZaQ0JtY205dFVHOXBiblJ6WEc0Z0tpQkFjR0Z5WVcwZ2UyZGxiMjFWZEdsc2N5NVNZWGw5SUc5MWRDQjBhR1VnY21WalpXbDJhVzVuSUhCc1lXNWxYRzRnS2lCQWNHRnlZVzBnZTFabFl6TjlJRzl5YVdkcGJseHVJQ29nUUhCaGNtRnRJSHRXWldNemZTQnNiMjlyUVhSY2JpQXFJRUJ5WlhSMWNtNXpJSHRuWlc5dFZYUnBiSE11VW1GNWZTQnZkWFJjYmlBcUwxeHVjbUY1TG1aeWIyMVFiMmx1ZEhNZ1BTQm1kVzVqZEdsdmJpQW9iM1YwTENCdmNtbG5hVzRzSUd4dmIydEJkQ2tnZTF4dUlDQWdJSFpsWXpNdVkyOXdlU2h2ZFhRdWJ5d2diM0pwWjJsdUtUdGNiaUFnSUNCMlpXTXpMbTV2Y20xaGJHbDZaU2h2ZFhRdVpDd2dkbVZqTXk1emRXSW9iM1YwTG1Rc0lHeHZiMnRCZEN3Z2IzSnBaMmx1S1NrN1hHNWNiaUFnSUNCeVpYUjFjbTRnYjNWME8xeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUhKaGVUdGNiaUpkZlE9PSJdfQ==