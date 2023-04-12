(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/utils/mutable-forward-iterator.js';
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
        function MutableForwardIterator(array) {
            this.i = 0;
            this.array = array;
        }
        var proto = MutableForwardIterator.prototype;
        proto.remove = function (value) {
            var index = this.array.indexOf(value);
            if (index >= 0) {
                this.removeAt(index);
            }
        };
        proto.removeAt = function (i) {
            this.array.splice(i, 1);
            if (i <= this.i) {
                --this.i;
            }
        };
        proto.fastRemove = function (value) {
            var index = this.array.indexOf(value);
            if (index >= 0) {
                this.fastRemoveAt(index);
            }
        };
        proto.fastRemoveAt = function (i) {
            var array = this.array;
            array[i] = array[array.length - 1];
            --array.length;
            if (i <= this.i) {
                --this.i;
            }
        };
        proto.push = function (item) {
            this.array.push(item);
        };
        module.exports = MutableForwardIterator;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11dGFibGUtZm9yd2FyZC1pdGVyYXRvci5qcyIsIi9Vc2Vycy9nYW95YW5nL1dvcmtTcGFjZS9qb3ljYXN0bGUvYmluZ28vY2xpZW50L2JpbmdvL2VuZ2luZS9jb2NvczJkL2NvcmUvdXRpbHMvbXV0YWJsZS1mb3J3YXJkLWl0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbIk11dGFibGVGb3J3YXJkSXRlcmF0b3IiLCJhcnJheSIsImkiLCJwcm90byIsInByb3RvdHlwZSIsInJlbW92ZSIsInZhbHVlIiwiaW5kZXgiLCJpbmRleE9mIiwicmVtb3ZlQXQiLCJzcGxpY2UiLCJmYXN0UmVtb3ZlIiwiZmFzdFJlbW92ZUF0IiwibGVuZ3RoIiwicHVzaCIsIml0ZW0iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7UUFtQ0EsU0FBU0Esc0JBQVQsQ0FBaUNDLEtBQWpDLEVBQXdDO0FBQUEsWUFDcEMsS0FBS0MsQ0FBTCxHQUFTLENBQVQsQ0FEb0M7QUFBQSxZQUVwQyxLQUFLRCxLQUFMLEdBQWFBLEtBQWIsQ0FGb0M7QUFBQTtRQUt4QyxJQUFJRSxLQUFBQSxHQUFRSCxzQkFBQUEsQ0FBdUJJLFNBQW5DO1FBRUFELEtBQUFBLENBQU1FLE1BQU5GLEdBQWUsVUFBVUcsS0FBVixFQUFpQjtBQUFBLFlBQzVCLElBQUlDLEtBQUFBLEdBQVEsS0FBS04sS0FBTCxDQUFXTyxPQUFYLENBQW1CRixLQUFuQixDQUFaLENBRDRCO0FBQUEsWUFFNUIsSUFBSUMsS0FBQUEsSUFBUyxDQUFiLEVBQWdCO0FBQUEsZ0JBQ1osS0FBS0UsUUFBTCxDQUFjRixLQUFkLEVBRFk7QUFBQSxhQUZZO0FBQUEsU0FBaENKO1FBTUFBLEtBQUFBLENBQU1NLFFBQU5OLEdBQWlCLFVBQVVELENBQVYsRUFBYTtBQUFBLFlBQzFCLEtBQUtELEtBQUwsQ0FBV1MsTUFBWCxDQUFrQlIsQ0FBbEIsRUFBcUIsQ0FBckIsRUFEMEI7QUFBQSxZQUcxQixJQUFJQSxDQUFBQSxJQUFLLEtBQUtBLENBQWQsRUFBaUI7QUFBQSxnQkFDYixFQUFFLEtBQUtBLENBQVAsQ0FEYTtBQUFBLGFBSFM7QUFBQSxTQUE5QkM7UUFPQUEsS0FBQUEsQ0FBTVEsVUFBTlIsR0FBbUIsVUFBVUcsS0FBVixFQUFpQjtBQUFBLFlBQ2hDLElBQUlDLEtBQUFBLEdBQVEsS0FBS04sS0FBTCxDQUFXTyxPQUFYLENBQW1CRixLQUFuQixDQUFaLENBRGdDO0FBQUEsWUFFaEMsSUFBSUMsS0FBQUEsSUFBUyxDQUFiLEVBQWdCO0FBQUEsZ0JBQ1osS0FBS0ssWUFBTCxDQUFrQkwsS0FBbEIsRUFEWTtBQUFBLGFBRmdCO0FBQUEsU0FBcENKO1FBTUFBLEtBQUFBLENBQU1TLFlBQU5ULEdBQXFCLFVBQVVELENBQVYsRUFBYTtBQUFBLFlBQzlCLElBQUlELEtBQUFBLEdBQVEsS0FBS0EsS0FBakIsQ0FEOEI7QUFBQSxZQUU5QkEsS0FBQUEsQ0FBTUMsQ0FBTkQsSUFBV0EsS0FBQUEsQ0FBTUEsS0FBQUEsQ0FBTVksTUFBTlosR0FBZSxDQUFyQkEsQ0FBWEEsQ0FGOEI7QUFBQSxZQUc5QixFQUFFQSxLQUFBQSxDQUFNWSxNQUFSLENBSDhCO0FBQUEsWUFLOUIsSUFBSVgsQ0FBQUEsSUFBSyxLQUFLQSxDQUFkLEVBQWlCO0FBQUEsZ0JBQ2IsRUFBRSxLQUFLQSxDQUFQLENBRGE7QUFBQSxhQUxhO0FBQUEsU0FBbENDO1FBVUFBLEtBQUFBLENBQU1XLElBQU5YLEdBQWEsVUFBVVksSUFBVixFQUFnQjtBQUFBLFlBQ3pCLEtBQUtkLEtBQUwsQ0FBV2EsSUFBWCxDQUFnQkMsSUFBaEIsRUFEeUI7QUFBQSxTQUE3Qlo7UUFnQkFhLE1BQUFBLENBQU9DLE9BQVBELEdBQWlCaEIsc0JBQWpCZ0IiLCJmaWxlIjoibXV0YWJsZS1mb3J3YXJkLWl0ZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTMtMjAxNiBDaHVrb25nIFRlY2hub2xvZ2llcyBJbmMuXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKlxuICogQGV4YW1wbGVcbiAqIHZhciBhcnJheSA9IFswLCAxLCAyLCAzLCA0XTtcbiAqIHZhciBpdGVyYXRvciA9IG5ldyBjYy5qcy5hcnJheS5NdXRhYmxlRm9yd2FyZEl0ZXJhdG9yKGFycmF5KTtcbiAqIGZvciAoaXRlcmF0b3IuaSA9IDA7IGl0ZXJhdG9yLmkgPCBhcnJheS5sZW5ndGg7ICsraXRlcmF0b3IuaSkge1xuICogICAgIHZhciBpdGVtID0gYXJyYXlbaXRlcmF0b3IuaV07XG4gKiAgICAgLi4uXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIE11dGFibGVGb3J3YXJkSXRlcmF0b3IgKGFycmF5KSB7XG4gICAgdGhpcy5pID0gMDtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5cbnZhciBwcm90byA9IE11dGFibGVGb3J3YXJkSXRlcmF0b3IucHJvdG90eXBlO1xuXG5wcm90by5yZW1vdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmFycmF5LmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQXQoaW5kZXgpO1xuICAgIH1cbn07XG5wcm90by5yZW1vdmVBdCA9IGZ1bmN0aW9uIChpKSB7XG4gICAgdGhpcy5hcnJheS5zcGxpY2UoaSwgMSk7XG5cbiAgICBpZiAoaSA8PSB0aGlzLmkpIHtcbiAgICAgICAgLS10aGlzLmk7XG4gICAgfVxufTtcbnByb3RvLmZhc3RSZW1vdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmFycmF5LmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMuZmFzdFJlbW92ZUF0KGluZGV4KTtcbiAgICB9XG59O1xucHJvdG8uZmFzdFJlbW92ZUF0ID0gZnVuY3Rpb24gKGkpIHtcbiAgICB2YXIgYXJyYXkgPSB0aGlzLmFycmF5O1xuICAgIGFycmF5W2ldID0gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG4gICAgLS1hcnJheS5sZW5ndGg7XG5cbiAgICBpZiAoaSA8PSB0aGlzLmkpIHtcbiAgICAgICAgLS10aGlzLmk7XG4gICAgfVxufTtcblxucHJvdG8ucHVzaCA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGl0ZW0pO1xufTtcblxuLy9qcy5nZXRzZXQocHJvdG8sICdsZW5ndGgnLFxuLy8gICAgZnVuY3Rpb24gKCkge1xuLy8gICAgICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDtcbi8vICAgIH0sXG4vLyAgICBmdW5jdGlvbiAobGVuKSB7XG4vLyAgICAgICAgdGhpcy5hcnJheS5sZW5ndGggPSBsZW47XG4vLyAgICAgICAgaWYgKHRoaXMuaSA+PSBsZW4pIHtcbi8vICAgICAgICAgICAgdGhpcy5pID0gbGVuIC0gMTtcbi8vICAgICAgICB9XG4vLyAgICB9XG4vLyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTXV0YWJsZUZvcndhcmRJdGVyYXRvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXG4gdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiBAZXhhbXBsZVxuICogdmFyIGFycmF5ID0gWzAsIDEsIDIsIDMsIDRdO1xuICogdmFyIGl0ZXJhdG9yID0gbmV3IGNjLmpzLmFycmF5Lk11dGFibGVGb3J3YXJkSXRlcmF0b3IoYXJyYXkpO1xuICogZm9yIChpdGVyYXRvci5pID0gMDsgaXRlcmF0b3IuaSA8IGFycmF5Lmxlbmd0aDsgKytpdGVyYXRvci5pKSB7XG4gKiAgICAgdmFyIGl0ZW0gPSBhcnJheVtpdGVyYXRvci5pXTtcbiAqICAgICAuLi5cbiAqIH1cbiAqL1xuZnVuY3Rpb24gTXV0YWJsZUZvcndhcmRJdGVyYXRvcihhcnJheSkge1xuICAgIHRoaXMuaSA9IDA7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuXG52YXIgcHJvdG8gPSBNdXRhYmxlRm9yd2FyZEl0ZXJhdG9yLnByb3RvdHlwZTtcblxucHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5hcnJheS5pbmRleE9mKHZhbHVlKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnJlbW92ZUF0KGluZGV4KTtcbiAgICB9XG59O1xucHJvdG8ucmVtb3ZlQXQgPSBmdW5jdGlvbiAoaSkge1xuICAgIHRoaXMuYXJyYXkuc3BsaWNlKGksIDEpO1xuXG4gICAgaWYgKGkgPD0gdGhpcy5pKSB7XG4gICAgICAgIC0tdGhpcy5pO1xuICAgIH1cbn07XG5wcm90by5mYXN0UmVtb3ZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5hcnJheS5pbmRleE9mKHZhbHVlKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLmZhc3RSZW1vdmVBdChpbmRleCk7XG4gICAgfVxufTtcbnByb3RvLmZhc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChpKSB7XG4gICAgdmFyIGFycmF5ID0gdGhpcy5hcnJheTtcbiAgICBhcnJheVtpXSA9IGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xuICAgIC0tYXJyYXkubGVuZ3RoO1xuXG4gICAgaWYgKGkgPD0gdGhpcy5pKSB7XG4gICAgICAgIC0tdGhpcy5pO1xuICAgIH1cbn07XG5cbnByb3RvLnB1c2ggPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChpdGVtKTtcbn07XG5cbi8vanMuZ2V0c2V0KHByb3RvLCAnbGVuZ3RoJyxcbi8vICAgIGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7XG4vLyAgICB9LFxuLy8gICAgZnVuY3Rpb24gKGxlbikge1xuLy8gICAgICAgIHRoaXMuYXJyYXkubGVuZ3RoID0gbGVuO1xuLy8gICAgICAgIGlmICh0aGlzLmkgPj0gbGVuKSB7XG4vLyAgICAgICAgICAgIHRoaXMuaSA9IGxlbiAtIDE7XG4vLyAgICAgICAgfVxuLy8gICAgfVxuLy8pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE11dGFibGVGb3J3YXJkSXRlcmF0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTExZEdGaWJHVXRabTl5ZDJGeVpDMXBkR1Z5WVhSdmNpNXFjeUpkTENKdVlXMWxjeUk2V3lKTmRYUmhZbXhsUm05eWQyRnlaRWwwWlhKaGRHOXlJaXdpWVhKeVlYa2lMQ0pwSWl3aWNISnZkRzhpTENKd2NtOTBiM1I1Y0dVaUxDSnlaVzF2ZG1VaUxDSjJZV3gxWlNJc0ltbHVaR1Y0SWl3aWFXNWtaWGhQWmlJc0luSmxiVzkyWlVGMElpd2ljM0JzYVdObElpd2labUZ6ZEZKbGJXOTJaU0lzSW1aaGMzUlNaVzF2ZG1WQmRDSXNJbXhsYm1kMGFDSXNJbkIxYzJnaUxDSnBkR1Z0SWl3aWJXOWtkV3hsSWl3aVpYaHdiM0owY3lKZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRXdRa0U3T3pzN096czdPenRCUVZOQkxGTkJRVk5CTEhOQ1FVRlVMRU5CUVdsRFF5eExRVUZxUXl4RlFVRjNRenRCUVVOd1F5eFRRVUZMUXl4RFFVRk1MRWRCUVZNc1EwRkJWRHRCUVVOQkxGTkJRVXRFTEV0QlFVd3NSMEZCWVVFc1MwRkJZanRCUVVOSU96dEJRVVZFTEVsQlFVbEZMRkZCUVZGSUxIVkNRVUYxUWtrc1UwRkJia003TzBGQlJVRkVMRTFCUVUxRkxFMUJRVTRzUjBGQlpTeFZRVUZWUXl4TFFVRldMRVZCUVdsQ08wRkJRelZDTEZGQlFVbERMRkZCUVZFc1MwRkJTMDRzUzBGQlRDeERRVUZYVHl4UFFVRllMRU5CUVcxQ1JpeExRVUZ1UWl4RFFVRmFPMEZCUTBFc1VVRkJTVU1zVTBGQlV5eERRVUZpTEVWQlFXZENPMEZCUTFvc1lVRkJTMFVzVVVGQlRDeERRVUZqUml4TFFVRmtPMEZCUTBnN1FVRkRTaXhEUVV4RU8wRkJUVUZLTEUxQlFVMU5MRkZCUVU0c1IwRkJhVUlzVlVGQlZWQXNRMEZCVml4RlFVRmhPMEZCUXpGQ0xGTkJRVXRFTEV0QlFVd3NRMEZCVjFNc1RVRkJXQ3hEUVVGclFsSXNRMEZCYkVJc1JVRkJjVUlzUTBGQmNrSTdPMEZCUlVFc1VVRkJTVUVzUzBGQlN5eExRVUZMUVN4RFFVRmtMRVZCUVdsQ08wRkJRMklzVlVGQlJTeExRVUZMUVN4RFFVRlFPMEZCUTBnN1FVRkRTaXhEUVU1RU8wRkJUMEZETEUxQlFVMVJMRlZCUVU0c1IwRkJiVUlzVlVGQlZVd3NTMEZCVml4RlFVRnBRanRCUVVOb1F5eFJRVUZKUXl4UlFVRlJMRXRCUVV0T0xFdEJRVXdzUTBGQlYwOHNUMEZCV0N4RFFVRnRRa1lzUzBGQmJrSXNRMEZCV2p0QlFVTkJMRkZCUVVsRExGTkJRVk1zUTBGQllpeEZRVUZuUWp0QlFVTmFMR0ZCUVV0TExGbEJRVXdzUTBGQmEwSk1MRXRCUVd4Q08wRkJRMGc3UVVGRFNpeERRVXhFTzBGQlRVRktMRTFCUVUxVExGbEJRVTRzUjBGQmNVSXNWVUZCVlZZc1EwRkJWaXhGUVVGaE8wRkJRemxDTEZGQlFVbEVMRkZCUVZFc1MwRkJTMEVzUzBGQmFrSTdRVUZEUVVFc1ZVRkJUVU1zUTBGQlRpeEpRVUZYUkN4TlFVRk5RU3hOUVVGTldTeE5RVUZPTEVkQlFXVXNRMEZCY2tJc1EwRkJXRHRCUVVOQkxFMUJRVVZhTEUxQlFVMVpMRTFCUVZJN08wRkJSVUVzVVVGQlNWZ3NTMEZCU3l4TFFVRkxRU3hEUVVGa0xFVkJRV2xDTzBGQlEySXNWVUZCUlN4TFFVRkxRU3hEUVVGUU8wRkJRMGc3UVVGRFNpeERRVkpFT3p0QlFWVkJReXhOUVVGTlZ5eEpRVUZPTEVkQlFXRXNWVUZCVlVNc1NVRkJWaXhGUVVGblFqdEJRVU42UWl4VFFVRkxaQ3hMUVVGTUxFTkJRVmRoTEVsQlFWZ3NRMEZCWjBKRExFbEJRV2hDTzBGQlEwZ3NRMEZHUkRzN1FVRkpRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCUXl4UFFVRlBReXhQUVVGUUxFZEJRV2xDYWtJc2MwSkJRV3BDSWl3aVptbHNaU0k2SW0xMWRHRmliR1V0Wm05eWQyRnlaQzFwZEdWeVlYUnZjaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xWEc0Z1EyOXdlWEpwWjJoMElDaGpLU0F5TURFekxUSXdNVFlnUTJoMWEyOXVaeUJVWldOb2JtOXNiMmRwWlhNZ1NXNWpMbHh1SUVOdmNIbHlhV2RvZENBb1l5a2dNakF4TnkweU1ERTRJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGx4dVhHNGdhSFIwY0hNNkx5OTNkM2N1WTI5amIzTXVZMjl0TDF4dVhHNGdVR1Z5YldsemMybHZiaUJwY3lCb1pYSmxZbmtnWjNKaGJuUmxaQ3dnWm5KbFpTQnZaaUJqYUdGeVoyVXNJSFJ2SUdGdWVTQndaWEp6YjI0Z2IySjBZV2x1YVc1bklHRWdZMjl3ZVZ4dUlHOW1JSFJvYVhNZ2MyOW1kSGRoY21VZ1lXNWtJR0Z6YzI5amFXRjBaV1FnWlc1bmFXNWxJSE52ZFhKalpTQmpiMlJsSUNoMGFHVWdYQ0pUYjJaMGQyRnlaVndpS1N3Z1lTQnNhVzFwZEdWa0xGeHVJSGR2Y214a2QybGtaU3dnY205NVlXeDBlUzFtY21WbExDQnViMjR0WVhOemFXZHVZV0pzWlN3Z2NtVjJiMk5oWW14bElHRnVaQ0J1YjI0dFpYaGpiSFZ6YVhabElHeHBZMlZ1YzJWY2JpQjBieUIxYzJVZ1EyOWpiM01nUTNKbFlYUnZjaUJ6YjJ4bGJIa2dkRzhnWkdWMlpXeHZjQ0JuWVcxbGN5QnZiaUI1YjNWeUlIUmhjbWRsZENCd2JHRjBabTl5YlhNdUlGbHZkU0J6YUdGc2JGeHVJRzV2ZENCMWMyVWdRMjlqYjNNZ1EzSmxZWFJ2Y2lCemIyWjBkMkZ5WlNCbWIzSWdaR1YyWld4dmNHbHVaeUJ2ZEdobGNpQnpiMlowZDJGeVpTQnZjaUIwYjI5c2N5QjBhR0YwSjNOY2JpQjFjMlZrSUdadmNpQmtaWFpsYkc5d2FXNW5JR2RoYldWekxpQlpiM1VnWVhKbElHNXZkQ0JuY21GdWRHVmtJSFJ2SUhCMVlteHBjMmdzSUdScGMzUnlhV0oxZEdVc1hHNGdjM1ZpYkdsalpXNXpaU3dnWVc1a0wyOXlJSE5sYkd3Z1kyOXdhV1Z6SUc5bUlFTnZZMjl6SUVOeVpXRjBiM0l1WEc1Y2JpQlVhR1VnYzI5bWRIZGhjbVVnYjNJZ2RHOXZiSE1nYVc0Z2RHaHBjeUJNYVdObGJuTmxJRUZuY21WbGJXVnVkQ0JoY21VZ2JHbGpaVzV6WldRc0lHNXZkQ0J6YjJ4a0xseHVJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGlCeVpYTmxjblpsY3lCaGJHd2djbWxuYUhSeklHNXZkQ0JsZUhCeVpYTnpiSGtnWjNKaGJuUmxaQ0IwYnlCNWIzVXVYRzVjYmlCVVNFVWdVMDlHVkZkQlVrVWdTVk1nVUZKUFZrbEVSVVFnWENKQlV5QkpVMXdpTENCWFNWUklUMVZVSUZkQlVsSkJUbFJaSUU5R0lFRk9XU0JMU1U1RUxDQkZXRkJTUlZOVElFOVNYRzRnU1UxUVRFbEZSQ3dnU1U1RFRGVkVTVTVISUVKVlZDQk9UMVFnVEVsTlNWUkZSQ0JVVHlCVVNFVWdWMEZTVWtGT1ZFbEZVeUJQUmlCTlJWSkRTRUZPVkVGQ1NVeEpWRmtzWEc0Z1JrbFVUa1ZUVXlCR1QxSWdRU0JRUVZKVVNVTlZURUZTSUZCVlVsQlBVMFVnUVU1RUlFNVBUa2xPUmxKSlRrZEZUVVZPVkM0Z1NVNGdUazhnUlZaRlRsUWdVMGhCVEV3Z1ZFaEZYRzRnUVZWVVNFOVNVeUJQVWlCRFQxQlpVa2xIU0ZRZ1NFOU1SRVZTVXlCQ1JTQk1TVUZDVEVVZ1JrOVNJRUZPV1NCRFRFRkpUU3dnUkVGTlFVZEZVeUJQVWlCUFZFaEZVbHh1SUV4SlFVSkpURWxVV1N3Z1YwaEZWRWhGVWlCSlRpQkJUaUJCUTFSSlQwNGdUMFlnUTA5T1ZGSkJRMVFzSUZSUFVsUWdUMUlnVDFSSVJWSlhTVk5GTENCQlVrbFRTVTVISUVaU1QwMHNYRzRnVDFWVUlFOUdJRTlTSUVsT0lFTlBUazVGUTFSSlQwNGdWMGxVU0NCVVNFVWdVMDlHVkZkQlVrVWdUMUlnVkVoRklGVlRSU0JQVWlCUFZFaEZVaUJFUlVGTVNVNUhVeUJKVGx4dUlGUklSU0JUVDBaVVYwRlNSUzVjYmlBcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FMMXh1WEc0dktpcGNiaUFxSUVCbGVHRnRjR3hsWEc0Z0tpQjJZWElnWVhKeVlYa2dQU0JiTUN3Z01Td2dNaXdnTXl3Z05GMDdYRzRnS2lCMllYSWdhWFJsY21GMGIzSWdQU0J1WlhjZ1kyTXVhbk11WVhKeVlYa3VUWFYwWVdKc1pVWnZjbmRoY21SSmRHVnlZWFJ2Y2loaGNuSmhlU2s3WEc0Z0tpQm1iM0lnS0dsMFpYSmhkRzl5TG1rZ1BTQXdPeUJwZEdWeVlYUnZjaTVwSUR3Z1lYSnlZWGt1YkdWdVozUm9PeUFySzJsMFpYSmhkRzl5TG1rcElIdGNiaUFxSUNBZ0lDQjJZWElnYVhSbGJTQTlJR0Z5Y21GNVcybDBaWEpoZEc5eUxtbGRPMXh1SUNvZ0lDQWdJQzR1TGx4dUlDb2dmVnh1SUNvdlhHNW1kVzVqZEdsdmJpQk5kWFJoWW14bFJtOXlkMkZ5WkVsMFpYSmhkRzl5SUNoaGNuSmhlU2tnZTF4dUlDQWdJSFJvYVhNdWFTQTlJREE3WEc0Z0lDQWdkR2hwY3k1aGNuSmhlU0E5SUdGeWNtRjVPMXh1ZlZ4dVhHNTJZWElnY0hKdmRHOGdQU0JOZFhSaFlteGxSbTl5ZDJGeVpFbDBaWEpoZEc5eUxuQnliM1J2ZEhsd1pUdGNibHh1Y0hKdmRHOHVjbVZ0YjNabElEMGdablZ1WTNScGIyNGdLSFpoYkhWbEtTQjdYRzRnSUNBZ2RtRnlJR2x1WkdWNElEMGdkR2hwY3k1aGNuSmhlUzVwYm1SbGVFOW1LSFpoYkhWbEtUdGNiaUFnSUNCcFppQW9hVzVrWlhnZ1BqMGdNQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbkpsYlc5MlpVRjBLR2x1WkdWNEtUdGNiaUFnSUNCOVhHNTlPMXh1Y0hKdmRHOHVjbVZ0YjNabFFYUWdQU0JtZFc1amRHbHZiaUFvYVNrZ2UxeHVJQ0FnSUhSb2FYTXVZWEp5WVhrdWMzQnNhV05sS0drc0lERXBPMXh1WEc0Z0lDQWdhV1lnS0drZ1BEMGdkR2hwY3k1cEtTQjdYRzRnSUNBZ0lDQWdJQzB0ZEdocGN5NXBPMXh1SUNBZ0lIMWNibjA3WEc1d2NtOTBieTVtWVhOMFVtVnRiM1psSUQwZ1puVnVZM1JwYjI0Z0tIWmhiSFZsS1NCN1hHNGdJQ0FnZG1GeUlHbHVaR1Y0SUQwZ2RHaHBjeTVoY25KaGVTNXBibVJsZUU5bUtIWmhiSFZsS1R0Y2JpQWdJQ0JwWmlBb2FXNWtaWGdnUGowZ01Da2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtWmhjM1JTWlcxdmRtVkJkQ2hwYm1SbGVDazdYRzRnSUNBZ2ZWeHVmVHRjYm5CeWIzUnZMbVpoYzNSU1pXMXZkbVZCZENBOUlHWjFibU4wYVc5dUlDaHBLU0I3WEc0Z0lDQWdkbUZ5SUdGeWNtRjVJRDBnZEdocGN5NWhjbkpoZVR0Y2JpQWdJQ0JoY25KaGVWdHBYU0E5SUdGeWNtRjVXMkZ5Y21GNUxteGxibWQwYUNBdElERmRPMXh1SUNBZ0lDMHRZWEp5WVhrdWJHVnVaM1JvTzF4dVhHNGdJQ0FnYVdZZ0tHa2dQRDBnZEdocGN5NXBLU0I3WEc0Z0lDQWdJQ0FnSUMwdGRHaHBjeTVwTzF4dUlDQWdJSDFjYm4wN1hHNWNibkJ5YjNSdkxuQjFjMmdnUFNCbWRXNWpkR2x2YmlBb2FYUmxiU2tnZTF4dUlDQWdJSFJvYVhNdVlYSnlZWGt1Y0hWemFDaHBkR1Z0S1R0Y2JuMDdYRzVjYmk4dmFuTXVaMlYwYzJWMEtIQnliM1J2TENBbmJHVnVaM1JvSnl4Y2JpOHZJQ0FnSUdaMWJtTjBhVzl1SUNncElIdGNiaTh2SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1aGNuSmhlUzVzWlc1bmRHZzdYRzR2THlBZ0lDQjlMRnh1THk4Z0lDQWdablZ1WTNScGIyNGdLR3hsYmlrZ2UxeHVMeThnSUNBZ0lDQWdJSFJvYVhNdVlYSnlZWGt1YkdWdVozUm9JRDBnYkdWdU8xeHVMeThnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbWtnUGowZ2JHVnVLU0I3WEc0dkx5QWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWFTQTlJR3hsYmlBdElERTdYRzR2THlBZ0lDQWdJQ0FnZlZ4dUx5OGdJQ0FnZlZ4dUx5OHBPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUUxMWRHRmliR1ZHYjNKM1lYSmtTWFJsY21GMGIzSTdYRzRpWFgwPSJdfQ==