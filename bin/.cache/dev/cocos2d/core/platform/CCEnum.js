(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/platform/CCEnum.js';
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
        var js = require('./js');
        function Enum(obj) {
            if ('__enums__' in obj) {
                return obj;
            }
            js.value(obj, '__enums__', null, true);
            var lastIndex = -1;
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var val = obj[key];
                if (val === -1) {
                    val = ++lastIndex;
                    obj[key] = val;
                } else {
                    if (typeof val === 'number') {
                        lastIndex = val;
                    } else if (typeof val === 'string' && Number.isInteger(parseFloat(key))) {
                        continue;
                    }
                }
                var reverseKey = '' + val;
                if (key !== reverseKey) {
                    if ((CC_EDITOR || CC_TEST) && reverseKey in obj && obj[reverseKey] !== key) {
                        cc.errorID(7100, reverseKey);
                        continue;
                    }
                    js.value(obj, reverseKey, key);
                }
            }
            return obj;
        }
        Enum.isEnum = function (enumType) {
            return enumType && enumType.hasOwnProperty('__enums__');
        };
        Enum.getList = function (enumDef) {
            if (enumDef.__enums__)
                return enumDef.__enums__;
            var enums = enumDef.__enums__ = [];
            for (var name in enumDef) {
                var value = enumDef[name];
                if (Number.isInteger(value)) {
                    enums.push({
                        name: name,
                        value: value
                    });
                }
            }
            enums.sort(function (a, b) {
                return a.value - b.value;
            });
            return enums;
        };
        if (CC_DEV) {
            var _TestEnum = Enum({
                ZERO: -1,
                ONE: -1,
                TWO: -1,
                THREE: -1
            });
            if (_TestEnum.ZERO !== 0 || _TestEnum.ONE !== 1 || _TestEnum.THREE !== 3) {
                cc.errorID(7101);
            }
        }
        module.exports = cc.Enum = Enum;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDRW51bS5qcyIsIi9Vc2Vycy9nYW95YW5nL1dvcmtTcGFjZS9qb3ljYXN0bGUvYmluZ28vY2xpZW50L2JpbmdvL2VuZ2luZS9jb2NvczJkL2NvcmUvcGxhdGZvcm0vQ0NFbnVtLmpzIl0sIm5hbWVzIjpbImpzIiwicmVxdWlyZSIsIkVudW0iLCJvYmoiLCJ2YWx1ZSIsImxhc3RJbmRleCIsImtleXMiLCJPYmplY3QiLCJpIiwibGVuZ3RoIiwia2V5IiwidmFsIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwicGFyc2VGbG9hdCIsInJldmVyc2VLZXkiLCJDQ19FRElUT1IiLCJDQ19URVNUIiwiY2MiLCJlcnJvcklEIiwiaXNFbnVtIiwiZW51bVR5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImdldExpc3QiLCJlbnVtRGVmIiwiX19lbnVtc19fIiwiZW51bXMiLCJuYW1lIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsIkNDX0RFViIsIl9UZXN0RW51bSIsIlpFUk8iLCJPTkUiLCJUV08iLCJUSFJFRSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFBLE9BQUEsR0FBQSxPQUFBLE9BQUEsS0FBQSxXQUFBLElBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQTs7Ozs7Ozs7Ozs7OztRQTBCQSxJQUFJQSxFQUFBQSxHQUFLQyxPQUFBQSxDQUFRLE1BQVJBLENBQVQ7UUFvQkEsU0FBU0MsSUFBVCxDQUFlQyxHQUFmLEVBQW9CO0FBQUEsWUFDaEIsSUFBSSxlQUFlQSxHQUFuQixFQUF3QjtBQUFBLGdCQUNwQixPQUFPQSxHQUFQLENBRG9CO0FBQUEsYUFEUjtBQUFBLFlBSWhCSCxFQUFBQSxDQUFHSSxLQUFISixDQUFTRyxHQUFUSCxFQUFjLFdBQWRBLEVBQTJCLElBQTNCQSxFQUFpQyxJQUFqQ0EsRUFKZ0I7QUFBQSxZQU1oQixJQUFJSyxTQUFBQSxHQUFZLENBQUMsQ0FBakIsQ0FOZ0I7QUFBQSxZQU9oQixJQUFJQyxJQUFBQSxHQUFPQyxNQUFBQSxDQUFP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QUFBQSxDQUFFM0IsS0FBbkIsQ0FBRjtBQUFBLGFBQTlCc0IsRUFYOEI7QUFBQSxZQVk5QixPQUFPQSxLQUFQLENBWjhCO0FBQUEsU0FBbEN4QjtRQWVBLElBQUk4QixNQUFKLEVBQVk7QUFBQSxZQUVSLElBQUlDLFNBQUFBLEdBQVkvQixJQUFBQSxDQUFLO0FBQUEsZ0JBQ2pCZ0MsSUFBQUEsRUFBTSxDQUFDLENBRFU7QUFBQSxnQkFFakJDLEdBQUFBLEVBQUssQ0FBQyxDQUZXO0FBQUEsZ0JBR2pCQyxHQUFBQSxFQUFLLENBQUMsQ0FIVztBQUFBLGdCQUlqQkMsS0FBQUEsRUFBTyxDQUFDLENBSlM7QUFBQSxhQUFMbkMsQ0FBaEIsQ0FGUTtBQUFBLFlBUVIsSUFBSStCLFNBQUFBLENBQVVDLElBQVZELEtBQW1CLENBQW5CQSxJQUF3QkEsU0FBQUEsQ0FBVUUsR0FBVkYsS0FBa0IsQ0FBMUNBLElBQStDQSxTQUFBQSxDQUFVSSxLQUFWSixLQUFvQixDQUF2RSxFQUEwRTtBQUFBLGdCQUN0RWYsRUFBQUEsQ0FBR0MsT0FBSEQsQ0FBVyxJQUFYQSxFQURzRTtBQUFBLGFBUmxFO0FBQUE7UUFhWm9CLE1BQUFBLENBQU9DLE9BQVBELEdBQWlCcEIsRUFBQUEsQ0FBR2hCLElBQUhnQixHQUFVaEIsSUFBM0JvQyIsImZpbGUiOiJDQ0VudW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiAgd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiAgdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuICBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciBqcyA9IHJlcXVpcmUoJy4vanMnKTtcblxuLy8gZW51bVxuXG4vKipcbiAqICEjZW5cbiAqIERlZmluZSBhbiBlbnVtIHR5cGUuIDxici8+XG4gKiBJZiBhIGVudW0gaXRlbSBoYXMgYSB2YWx1ZSBvZiAtMSwgaXQgd2lsbCBiZSBnaXZlbiBhbiBJbnRlZ2VyIG51bWJlciBhY2NvcmRpbmcgdG8gaXQncyBvcmRlciBpbiB0aGUgbGlzdC48YnIvPlxuICogT3RoZXJ3aXNlIGl0IHdpbGwgdXNlIHRoZSB2YWx1ZSBzcGVjaWZpZWQgYnkgdXNlciB3aG8gd3JpdGVzIHRoZSBlbnVtIGRlZmluaXRpb24uXG4gKlxuICogISN6aFxuICog5a6a5LmJ5LiA5Liq5p6a5Li+57G75Z6L44CCPGJyLz5cbiAqIOeUqOaIt+WPr+S7peaKiuaemuS4vuWAvOiuvuS4uuS7u+aEj+eahOaVtOaVsO+8jOWmguaenOiuvuS4uiAtMe+8jOezu+e7n+WwhuS8muWIhumFjeS4uuS4iuS4gOS4quaemuS4vuWAvCArIDHjgIJcbiAqXG4gKiBAbWV0aG9kIEVudW1cbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSBhIEphdmFTY3JpcHQgbGl0ZXJhbCBvYmplY3QgY29udGFpbmluZyBlbnVtIG5hbWVzIGFuZCB2YWx1ZXMsIG9yIGEgVHlwZVNjcmlwdCBlbnVtIHR5cGVcbiAqIEByZXR1cm4ge29iamVjdH0gdGhlIGRlZmluZWQgZW51bSB0eXBlXG4gKiBAZXhhbXBsZSB7QGxpbmsgY29jb3MyZC9jb3JlL3BsYXRmb3JtL0NDRW51bS9FbnVtLmpzfVxuICogQHR5cGVzY3JpcHQgRW51bTxUPihvYmo6IFQpOiBUXG4gKi9cbmZ1bmN0aW9uIEVudW0gKG9iaikge1xuICAgIGlmICgnX19lbnVtc19fJyBpbiBvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAganMudmFsdWUob2JqLCAnX19lbnVtc19fJywgbnVsbCwgdHJ1ZSk7XG5cbiAgICB2YXIgbGFzdEluZGV4ID0gLTE7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICAgIGlmICh2YWwgPT09IC0xKSB7XG4gICAgICAgICAgICB2YWwgPSArK2xhc3RJbmRleDtcbiAgICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgbGFzdEluZGV4ID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiYgTnVtYmVyLmlzSW50ZWdlcihwYXJzZUZsb2F0KGtleSkpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJldmVyc2VLZXkgPSAnJyArIHZhbDtcbiAgICAgICAgaWYgKGtleSAhPT0gcmV2ZXJzZUtleSkge1xuICAgICAgICAgICAgaWYgKChDQ19FRElUT1IgfHwgQ0NfVEVTVCkgJiYgcmV2ZXJzZUtleSBpbiBvYmogJiYgb2JqW3JldmVyc2VLZXldICE9PSBrZXkpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcklEKDcxMDAsIHJldmVyc2VLZXkpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAganMudmFsdWUob2JqLCByZXZlcnNlS2V5LCBrZXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5cbkVudW0uaXNFbnVtID0gZnVuY3Rpb24gKGVudW1UeXBlKSB7XG4gICAgcmV0dXJuIGVudW1UeXBlICYmIGVudW1UeXBlLmhhc093blByb3BlcnR5KCdfX2VudW1zX18nKTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBnZXRMaXN0XG4gKiBAcGFyYW0ge09iamVjdH0gZW51bURlZiAtIHRoZSBlbnVtIHR5cGUgZGVmaW5lZCBmcm9tIGNjLkVudW1cbiAqIEByZXR1cm4ge09iamVjdFtdfVxuICogQHByaXZhdGVcbiAqL1xuRW51bS5nZXRMaXN0ID0gZnVuY3Rpb24gKGVudW1EZWYpIHtcbiAgICBpZiAoZW51bURlZi5fX2VudW1zX18pXG4gICAgICAgIHJldHVybiBlbnVtRGVmLl9fZW51bXNfXztcblxuICAgIHZhciBlbnVtcyA9IGVudW1EZWYuX19lbnVtc19fID0gW107XG4gICAgZm9yICh2YXIgbmFtZSBpbiBlbnVtRGVmKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGVudW1EZWZbbmFtZV07XG4gICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSkge1xuICAgICAgICAgICAgZW51bXMucHVzaCh7IG5hbWUsIHZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVudW1zLnNvcnQoIGZ1bmN0aW9uICggYSwgYiApIHsgcmV0dXJuIGEudmFsdWUgLSBiLnZhbHVlOyB9ICk7XG4gICAgcmV0dXJuIGVudW1zO1xufTtcblxuaWYgKENDX0RFVikge1xuICAgIC8vIGNoZWNrIGtleSBvcmRlciBpbiBvYmplY3QgbGl0ZXJhbFxuICAgIHZhciBfVGVzdEVudW0gPSBFbnVtKHtcbiAgICAgICAgWkVSTzogLTEsXG4gICAgICAgIE9ORTogLTEsXG4gICAgICAgIFRXTzogLTEsXG4gICAgICAgIFRIUkVFOiAtMVxuICAgIH0pO1xuICAgIGlmIChfVGVzdEVudW0uWkVSTyAhPT0gMCB8fCBfVGVzdEVudW0uT05FICE9PSAxIHx8IF9UZXN0RW51bS5USFJFRSAhPT0gMykge1xuICAgICAgICBjYy5lcnJvcklEKDcxMDEpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYy5FbnVtID0gRW51bTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTMtMjAxNiBDaHVrb25nIFRlY2hub2xvZ2llcyBJbmMuXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuICBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXG4gIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiAgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIganMgPSByZXF1aXJlKCcuL2pzJyk7XG5cbi8vIGVudW1cblxuLyoqXG4gKiAhI2VuXG4gKiBEZWZpbmUgYW4gZW51bSB0eXBlLiA8YnIvPlxuICogSWYgYSBlbnVtIGl0ZW0gaGFzIGEgdmFsdWUgb2YgLTEsIGl0IHdpbGwgYmUgZ2l2ZW4gYW4gSW50ZWdlciBudW1iZXIgYWNjb3JkaW5nIHRvIGl0J3Mgb3JkZXIgaW4gdGhlIGxpc3QuPGJyLz5cbiAqIE90aGVyd2lzZSBpdCB3aWxsIHVzZSB0aGUgdmFsdWUgc3BlY2lmaWVkIGJ5IHVzZXIgd2hvIHdyaXRlcyB0aGUgZW51bSBkZWZpbml0aW9uLlxuICpcbiAqICEjemhcbiAqIOWumuS5ieS4gOS4quaemuS4vuexu+Wei+OAgjxici8+XG4gKiDnlKjmiLflj6/ku6XmiormnprkuL7lgLzorr7kuLrku7vmhI/nmoTmlbTmlbDvvIzlpoLmnpzorr7kuLogLTHvvIzns7vnu5/lsIbkvJrliIbphY3kuLrkuIrkuIDkuKrmnprkuL7lgLwgKyAx44CCXG4gKlxuICogQG1ldGhvZCBFbnVtXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gYSBKYXZhU2NyaXB0IGxpdGVyYWwgb2JqZWN0IGNvbnRhaW5pbmcgZW51bSBuYW1lcyBhbmQgdmFsdWVzLCBvciBhIFR5cGVTY3JpcHQgZW51bSB0eXBlXG4gKiBAcmV0dXJuIHtvYmplY3R9IHRoZSBkZWZpbmVkIGVudW0gdHlwZVxuICogQGV4YW1wbGUge0BsaW5rIGNvY29zMmQvY29yZS9wbGF0Zm9ybS9DQ0VudW0vRW51bS5qc31cbiAqIEB0eXBlc2NyaXB0IEVudW08VD4ob2JqOiBUKTogVFxuICovXG5mdW5jdGlvbiBFbnVtKG9iaikge1xuICAgIGlmICgnX19lbnVtc19fJyBpbiBvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAganMudmFsdWUob2JqLCAnX19lbnVtc19fJywgbnVsbCwgdHJ1ZSk7XG5cbiAgICB2YXIgbGFzdEluZGV4ID0gLTE7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICAgIGlmICh2YWwgPT09IC0xKSB7XG4gICAgICAgICAgICB2YWwgPSArK2xhc3RJbmRleDtcbiAgICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgbGFzdEluZGV4ID0gdmFsO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiBOdW1iZXIuaXNJbnRlZ2VyKHBhcnNlRmxvYXQoa2V5KSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgcmV2ZXJzZUtleSA9ICcnICsgdmFsO1xuICAgICAgICBpZiAoa2V5ICE9PSByZXZlcnNlS2V5KSB7XG4gICAgICAgICAgICBpZiAoKENDX0VESVRPUiB8fCBDQ19URVNUKSAmJiByZXZlcnNlS2V5IGluIG9iaiAmJiBvYmpbcmV2ZXJzZUtleV0gIT09IGtleSkge1xuICAgICAgICAgICAgICAgIGNjLmVycm9ySUQoNzEwMCwgcmV2ZXJzZUtleSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBqcy52YWx1ZShvYmosIHJldmVyc2VLZXksIGtleSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cblxuRW51bS5pc0VudW0gPSBmdW5jdGlvbiAoZW51bVR5cGUpIHtcbiAgICByZXR1cm4gZW51bVR5cGUgJiYgZW51bVR5cGUuaGFzT3duUHJvcGVydHkoJ19fZW51bXNfXycpO1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIGdldExpc3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbnVtRGVmIC0gdGhlIGVudW0gdHlwZSBkZWZpbmVkIGZyb20gY2MuRW51bVxuICogQHJldHVybiB7T2JqZWN0W119XG4gKiBAcHJpdmF0ZVxuICovXG5FbnVtLmdldExpc3QgPSBmdW5jdGlvbiAoZW51bURlZikge1xuICAgIGlmIChlbnVtRGVmLl9fZW51bXNfXykgcmV0dXJuIGVudW1EZWYuX19lbnVtc19fO1xuXG4gICAgdmFyIGVudW1zID0gZW51bURlZi5fX2VudW1zX18gPSBbXTtcbiAgICBmb3IgKHZhciBuYW1lIGluIGVudW1EZWYpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gZW51bURlZltuYW1lXTtcbiAgICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIodmFsdWUpKSB7XG4gICAgICAgICAgICBlbnVtcy5wdXNoKHsgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVudW1zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEudmFsdWUgLSBiLnZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBlbnVtcztcbn07XG5cbmlmIChDQ19ERVYpIHtcbiAgICAvLyBjaGVjayBrZXkgb3JkZXIgaW4gb2JqZWN0IGxpdGVyYWxcbiAgICB2YXIgX1Rlc3RFbnVtID0gRW51bSh7XG4gICAgICAgIFpFUk86IC0xLFxuICAgICAgICBPTkU6IC0xLFxuICAgICAgICBUV086IC0xLFxuICAgICAgICBUSFJFRTogLTFcbiAgICB9KTtcbiAgICBpZiAoX1Rlc3RFbnVtLlpFUk8gIT09IDAgfHwgX1Rlc3RFbnVtLk9ORSAhPT0gMSB8fCBfVGVzdEVudW0uVEhSRUUgIT09IDMpIHtcbiAgICAgICAgY2MuZXJyb3JJRCg3MTAxKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2MuRW51bSA9IEVudW07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa05EUlc1MWJTNXFjeUpkTENKdVlXMWxjeUk2V3lKcWN5SXNJbkpsY1hWcGNtVWlMQ0pGYm5WdElpd2liMkpxSWl3aWRtRnNkV1VpTENKc1lYTjBTVzVrWlhnaUxDSnJaWGx6SWl3aVQySnFaV04wSWl3aWFTSXNJbXhsYm1kMGFDSXNJbXRsZVNJc0luWmhiQ0lzSWs1MWJXSmxjaUlzSW1selNXNTBaV2RsY2lJc0luQmhjbk5sUm14dllYUWlMQ0p5WlhabGNuTmxTMlY1SWl3aVEwTmZSVVJKVkU5U0lpd2lRME5mVkVWVFZDSXNJbU5qSWl3aVpYSnliM0pKUkNJc0ltbHpSVzUxYlNJc0ltVnVkVzFVZVhCbElpd2lhR0Z6VDNkdVVISnZjR1Z5ZEhraUxDSm5aWFJNYVhOMElpd2laVzUxYlVSbFppSXNJbDlmWlc1MWJYTmZYeUlzSW1WdWRXMXpJaXdpYm1GdFpTSXNJbkIxYzJnaUxDSnpiM0owSWl3aVlTSXNJbUlpTENKRFExOUVSVllpTENKZlZHVnpkRVZ1ZFcwaUxDSmFSVkpQSWl3aVQwNUZJaXdpVkZkUElpd2lWRWhTUlVVaUxDSnRiMlIxYkdVaUxDSmxlSEJ2Y25SeklsMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVEJDUVN4SlFVRkpRU3hMUVVGTFF5eFJRVUZSTEUxQlFWSXNRMEZCVkRzN1FVRkZRVHM3UVVGRlFUczdPenM3T3pzN096czdPenM3T3p0QlFXZENRU3hUUVVGVFF5eEpRVUZVTEVOQlFXVkRMRWRCUVdZc1JVRkJiMEk3UVVGRGFFSXNVVUZCU1N4bFFVRmxRU3hIUVVGdVFpeEZRVUYzUWp0QlFVTndRaXhsUVVGUFFTeEhRVUZRTzBGQlEwZzdRVUZEUkVnc1QwRkJSMGtzUzBGQlNDeERRVUZUUkN4SFFVRlVMRVZCUVdNc1YwRkJaQ3hGUVVFeVFpeEpRVUV6UWl4RlFVRnBReXhKUVVGcVF6czdRVUZGUVN4UlFVRkpSU3haUVVGWkxFTkJRVU1zUTBGQmFrSTdRVUZEUVN4UlFVRkpReXhQUVVGUFF5eFBRVUZQUkN4SlFVRlFMRU5CUVZsSUxFZEJRVm9zUTBGQldEdEJRVU5CTEZOQlFVc3NTVUZCU1Vzc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpSaXhMUVVGTFJ5eE5RVUY2UWl4RlFVRnBRMFFzUjBGQmFrTXNSVUZCYzBNN1FVRkRiRU1zV1VGQlNVVXNUVUZCVFVvc1MwRkJTMFVzUTBGQlRDeERRVUZXTzBGQlEwRXNXVUZCU1Vjc1RVRkJUVklzU1VGQlNVOHNSMEZCU2l4RFFVRldPenRCUVVWQkxGbEJRVWxETEZGQlFWRXNRMEZCUXl4RFFVRmlMRVZCUVdkQ08wRkJRMXBCTEd0Q1FVRk5MRVZCUVVWT0xGTkJRVkk3UVVGRFFVWXNaMEpCUVVsUExFZEJRVW9zU1VGQlYwTXNSMEZCV0R0QlFVTklMRk5CU0VRc1RVRkpTenRCUVVORUxHZENRVUZKTEU5QlFVOUJMRWRCUVZBc1MwRkJaU3hSUVVGdVFpeEZRVUUyUWp0QlFVTjZRazRzTkVKQlFWbE5MRWRCUVZvN1FVRkRTQ3hoUVVaRUxFMUJSMHNzU1VGQlNTeFBRVUZQUVN4SFFVRlFMRXRCUVdVc1VVRkJaaXhKUVVFeVFrTXNUMEZCVDBNc1UwRkJVQ3hEUVVGcFFrTXNWMEZCVjBvc1IwRkJXQ3hEUVVGcVFpeERRVUV2UWl4RlFVRnJSVHRCUVVOdVJUdEJRVU5JTzBGQlEwbzdRVUZEUkN4WlFVRkpTeXhoUVVGaExFdEJRVXRLTEVkQlFYUkNPMEZCUTBFc1dVRkJTVVFzVVVGQlVVc3NWVUZCV2l4RlFVRjNRanRCUVVOd1FpeG5Ra0ZCU1N4RFFVRkRReXhoUVVGaFF5eFBRVUZrTEV0QlFUQkNSaXhqUVVGaldpeEhRVUY0UXl4SlFVRXJRMEVzU1VGQlNWa3NWVUZCU2l4TlFVRnZRa3dzUjBGQmRrVXNSVUZCTkVVN1FVRkRlRVZSTEcxQ1FVRkhReXhQUVVGSUxFTkJRVmNzU1VGQldDeEZRVUZwUWtvc1ZVRkJha0k3UVVGRFFUdEJRVU5JTzBGQlEwUm1MR1ZCUVVkSkxFdEJRVWdzUTBGQlUwUXNSMEZCVkN4RlFVRmpXU3hWUVVGa0xFVkJRVEJDVEN4SFFVRXhRanRCUVVOSU8wRkJRMG83UVVGRFJDeFhRVUZQVUN4SFFVRlFPMEZCUTBnN08wRkJSVVJFTEV0QlFVdHJRaXhOUVVGTUxFZEJRV01zVlVGQlZVTXNVVUZCVml4RlFVRnZRanRCUVVNNVFpeFhRVUZQUVN4WlFVRlpRU3hUUVVGVFF5eGpRVUZVTEVOQlFYZENMRmRCUVhoQ0xFTkJRVzVDTzBGQlEwZ3NRMEZHUkRzN1FVRkpRVHM3T3pzN08wRkJUVUZ3UWl4TFFVRkxjVUlzVDBGQlRDeEhRVUZsTEZWQlFWVkRMRTlCUVZZc1JVRkJiVUk3UVVGRE9VSXNVVUZCU1VFc1VVRkJVVU1zVTBGQldpeEZRVU5KTEU5QlFVOUVMRkZCUVZGRExGTkJRV1k3TzBGQlJVb3NVVUZCU1VNc1VVRkJVVVlzVVVGQlVVTXNVMEZCVWl4SFFVRnZRaXhGUVVGb1F6dEJRVU5CTEZOQlFVc3NTVUZCU1VVc1NVRkJWQ3hKUVVGcFFrZ3NUMEZCYWtJc1JVRkJNRUk3UVVGRGRFSXNXVUZCU1hCQ0xGRkJRVkZ2UWl4UlFVRlJSeXhKUVVGU0xFTkJRVm83UVVGRFFTeFpRVUZKWml4UFFVRlBReXhUUVVGUUxFTkJRV2xDVkN4TFFVRnFRaXhEUVVGS0xFVkJRVFpDTzBGQlEzcENjMElzYTBKQlFVMUZMRWxCUVU0c1EwRkJWeXhGUVVGRlJDeFZRVUZHTEVWQlFWRjJRaXhaUVVGU0xFVkJRVmc3UVVGRFNEdEJRVU5LTzBGQlEwUnpRaXhWUVVGTlJ5eEpRVUZPTEVOQlFWa3NWVUZCVjBNc1EwRkJXQ3hGUVVGalF5eERRVUZrTEVWQlFXdENPMEZCUVVVc1pVRkJUMFFzUlVGQlJURkNMRXRCUVVZc1IwRkJWVEpDTEVWQlFVVXpRaXhMUVVGdVFqdEJRVUV5UWl4TFFVRXpSRHRCUVVOQkxGZEJRVTl6UWl4TFFVRlFPMEZCUTBnc1EwRmlSRHM3UVVGbFFTeEpRVUZKVFN4TlFVRktMRVZCUVZrN1FVRkRVanRCUVVOQkxGRkJRVWxETEZsQlFWa3ZRaXhMUVVGTE8wRkJRMnBDWjBNc1kwRkJUU3hEUVVGRExFTkJSRlU3UVVGRmFrSkRMR0ZCUVVzc1EwRkJReXhEUVVaWE8wRkJSMnBDUXl4aFFVRkxMRU5CUVVNc1EwRklWenRCUVVscVFrTXNaVUZCVHl4RFFVRkRPMEZCU2xNc1MwRkJUQ3hEUVVGb1FqdEJRVTFCTEZGQlFVbEtMRlZCUVZWRExFbEJRVllzUzBGQmJVSXNRMEZCYmtJc1NVRkJkMEpFTEZWQlFWVkZMRWRCUVZZc1MwRkJhMElzUTBGQk1VTXNTVUZCSzBOR0xGVkJRVlZKTEV0QlFWWXNTMEZCYjBJc1EwRkJka1VzUlVGQk1FVTdRVUZEZEVWdVFpeFhRVUZIUXl4UFFVRklMRU5CUVZjc1NVRkJXRHRCUVVOSU8wRkJRMG83TzBGQlJVUnRRaXhQUVVGUFF5eFBRVUZRTEVkQlFXbENja0lzUjBGQlIyaENMRWxCUVVnc1IwRkJWVUVzU1VGQk0wSWlMQ0ptYVd4bElqb2lRME5GYm5WdExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpcGNiaUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVE10TWpBeE5pQkRhSFZyYjI1bklGUmxZMmh1YjJ4dloybGxjeUJKYm1NdVhHNGdRMjl3ZVhKcFoyaDBJQ2hqS1NBeU1ERTNMVEl3TVRnZ1dHbGhiV1Z1SUZsaGFta2dVMjltZEhkaGNtVWdRMjh1TENCTWRHUXVYRzVjYmlCb2RIUndjem92TDNkM2R5NWpiMk52Y3k1amIyMHZYRzVjYmlCUVpYSnRhWE56YVc5dUlHbHpJR2hsY21WaWVTQm5jbUZ1ZEdWa0xDQm1jbVZsSUc5bUlHTm9ZWEpuWlN3Z2RHOGdZVzU1SUhCbGNuTnZiaUJ2WW5SaGFXNXBibWNnWVNCamIzQjVYRzRnYjJZZ2RHaHBjeUJ6YjJaMGQyRnlaU0JoYm1RZ1lYTnpiMk5wWVhSbFpDQmxibWRwYm1VZ2MyOTFjbU5sSUdOdlpHVWdLSFJvWlNCY0lsTnZablIzWVhKbFhDSXBMQ0JoSUd4cGJXbDBaV1FzWEc0Z0lIZHZjbXhrZDJsa1pTd2djbTk1WVd4MGVTMW1jbVZsTENCdWIyNHRZWE56YVdkdVlXSnNaU3dnY21WMmIyTmhZbXhsSUdGdVpDQnViMjR0WlhoamJIVnphWFpsSUd4cFkyVnVjMlZjYmlCMGJ5QjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMnhsYkhrZ2RHOGdaR1YyWld4dmNDQm5ZVzFsY3lCdmJpQjViM1Z5SUhSaGNtZGxkQ0J3YkdGMFptOXliWE11SUZsdmRTQnphR0ZzYkZ4dUlDQnViM1FnZFhObElFTnZZMjl6SUVOeVpXRjBiM0lnYzI5bWRIZGhjbVVnWm05eUlHUmxkbVZzYjNCcGJtY2diM1JvWlhJZ2MyOW1kSGRoY21VZ2IzSWdkRzl2YkhNZ2RHaGhkQ2R6WEc0Z0lIVnpaV1FnWm05eUlHUmxkbVZzYjNCcGJtY2daMkZ0WlhNdUlGbHZkU0JoY21VZ2JtOTBJR2R5WVc1MFpXUWdkRzhnY0hWaWJHbHphQ3dnWkdsemRISnBZblYwWlN4Y2JpQWdjM1ZpYkdsalpXNXpaU3dnWVc1a0wyOXlJSE5sYkd3Z1kyOXdhV1Z6SUc5bUlFTnZZMjl6SUVOeVpXRjBiM0l1WEc1Y2JpQlVhR1VnYzI5bWRIZGhjbVVnYjNJZ2RHOXZiSE1nYVc0Z2RHaHBjeUJNYVdObGJuTmxJRUZuY21WbGJXVnVkQ0JoY21VZ2JHbGpaVzV6WldRc0lHNXZkQ0J6YjJ4a0xseHVJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGlCeVpYTmxjblpsY3lCaGJHd2djbWxuYUhSeklHNXZkQ0JsZUhCeVpYTnpiSGtnWjNKaGJuUmxaQ0IwYnlCNWIzVXVYRzVjYmlCVVNFVWdVMDlHVkZkQlVrVWdTVk1nVUZKUFZrbEVSVVFnWENKQlV5QkpVMXdpTENCWFNWUklUMVZVSUZkQlVsSkJUbFJaSUU5R0lFRk9XU0JMU1U1RUxDQkZXRkJTUlZOVElFOVNYRzRnU1UxUVRFbEZSQ3dnU1U1RFRGVkVTVTVISUVKVlZDQk9UMVFnVEVsTlNWUkZSQ0JVVHlCVVNFVWdWMEZTVWtGT1ZFbEZVeUJQUmlCTlJWSkRTRUZPVkVGQ1NVeEpWRmtzWEc0Z1JrbFVUa1ZUVXlCR1QxSWdRU0JRUVZKVVNVTlZURUZTSUZCVlVsQlBVMFVnUVU1RUlFNVBUa2xPUmxKSlRrZEZUVVZPVkM0Z1NVNGdUazhnUlZaRlRsUWdVMGhCVEV3Z1ZFaEZYRzRnUVZWVVNFOVNVeUJQVWlCRFQxQlpVa2xIU0ZRZ1NFOU1SRVZTVXlCQ1JTQk1TVUZDVEVVZ1JrOVNJRUZPV1NCRFRFRkpUU3dnUkVGTlFVZEZVeUJQVWlCUFZFaEZVbHh1SUV4SlFVSkpURWxVV1N3Z1YwaEZWRWhGVWlCSlRpQkJUaUJCUTFSSlQwNGdUMFlnUTA5T1ZGSkJRMVFzSUZSUFVsUWdUMUlnVDFSSVJWSlhTVk5GTENCQlVrbFRTVTVISUVaU1QwMHNYRzRnVDFWVUlFOUdJRTlTSUVsT0lFTlBUazVGUTFSSlQwNGdWMGxVU0NCVVNFVWdVMDlHVkZkQlVrVWdUMUlnVkVoRklGVlRSU0JQVWlCUFZFaEZVaUJFUlVGTVNVNUhVeUJKVGx4dUlGUklSU0JUVDBaVVYwRlNSUzVjYmlBcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FMMXh1WEc1MllYSWdhbk1nUFNCeVpYRjFhWEpsS0NjdUwycHpKeWs3WEc1Y2JpOHZJR1Z1ZFcxY2JseHVMeW9xWEc0Z0tpQWhJMlZ1WEc0Z0tpQkVaV1pwYm1VZ1lXNGdaVzUxYlNCMGVYQmxMaUE4WW5JdlBseHVJQ29nU1dZZ1lTQmxiblZ0SUdsMFpXMGdhR0Z6SUdFZ2RtRnNkV1VnYjJZZ0xURXNJR2wwSUhkcGJHd2dZbVVnWjJsMlpXNGdZVzRnU1c1MFpXZGxjaUJ1ZFcxaVpYSWdZV05qYjNKa2FXNW5JSFJ2SUdsMEozTWdiM0prWlhJZ2FXNGdkR2hsSUd4cGMzUXVQR0p5THo1Y2JpQXFJRTkwYUdWeWQybHpaU0JwZENCM2FXeHNJSFZ6WlNCMGFHVWdkbUZzZFdVZ2MzQmxZMmxtYVdWa0lHSjVJSFZ6WlhJZ2QyaHZJSGR5YVhSbGN5QjBhR1VnWlc1MWJTQmtaV1pwYm1sMGFXOXVMbHh1SUNwY2JpQXFJQ0VqZW1oY2JpQXFJT1d1bXVTNWllUzRnT1M0cXVhZW11UzR2dWV4dStXZWkrT0FnanhpY2k4K1hHNGdLaURubEtqbWlMZmxqNi9rdTZYbWlvcm1ucHJrdUw3bGdMem9ycjdrdUxya3U3dm1oSS9ubW9UbWxiVG1sYkR2dkl6bHBvTG1ucHpvcnI3a3VMb2dMVEh2dkl6bnM3dm51NS9sc0lia3ZKcmxpSWJwaFkza3VMcmt1SXJrdUlEa3VLcm1ucHJrdUw3bGdMd2dLeUF4NDRDQ1hHNGdLbHh1SUNvZ1FHMWxkR2h2WkNCRmJuVnRYRzRnS2lCQWNHRnlZVzBnZTI5aWFtVmpkSDBnYjJKcUlDMGdZU0JLWVhaaFUyTnlhWEIwSUd4cGRHVnlZV3dnYjJKcVpXTjBJR052Ym5SaGFXNXBibWNnWlc1MWJTQnVZVzFsY3lCaGJtUWdkbUZzZFdWekxDQnZjaUJoSUZSNWNHVlRZM0pwY0hRZ1pXNTFiU0IwZVhCbFhHNGdLaUJBY21WMGRYSnVJSHR2WW1wbFkzUjlJSFJvWlNCa1pXWnBibVZrSUdWdWRXMGdkSGx3WlZ4dUlDb2dRR1Y0WVcxd2JHVWdlMEJzYVc1cklHTnZZMjl6TW1RdlkyOXlaUzl3YkdGMFptOXliUzlEUTBWdWRXMHZSVzUxYlM1cWMzMWNiaUFxSUVCMGVYQmxjMk55YVhCMElFVnVkVzA4VkQ0b2IySnFPaUJVS1RvZ1ZGeHVJQ292WEc1bWRXNWpkR2x2YmlCRmJuVnRJQ2h2WW1vcElIdGNiaUFnSUNCcFppQW9KMTlmWlc1MWJYTmZYeWNnYVc0Z2IySnFLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ2WW1vN1hHNGdJQ0FnZlZ4dUlDQWdJR3B6TG5aaGJIVmxLRzlpYWl3Z0oxOWZaVzUxYlhOZlh5Y3NJRzUxYkd3c0lIUnlkV1VwTzF4dVhHNGdJQ0FnZG1GeUlHeGhjM1JKYm1SbGVDQTlJQzB4TzF4dUlDQWdJSFpoY2lCclpYbHpJRDBnVDJKcVpXTjBMbXRsZVhNb2IySnFLVHRjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR3RsZVhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHdGxlU0E5SUd0bGVYTmJhVjA3WEc0Z0lDQWdJQ0FnSUhaaGNpQjJZV3dnUFNCdlltcGJhMlY1WFR0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvZG1Gc0lEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc0lEMGdLeXRzWVhOMFNXNWtaWGc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnZZbXBiYTJWNVhTQTlJSFpoYkR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnZG1Gc0lEMDlQU0FuYm5WdFltVnlKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4aGMzUkpibVJsZUNBOUlIWmhiRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUdWc2MyVWdhV1lnS0hSNWNHVnZaaUIyWVd3Z1BUMDlJQ2R6ZEhKcGJtY25JQ1ltSUU1MWJXSmxjaTVwYzBsdWRHVm5aWElvY0dGeWMyVkdiRzloZENoclpYa3BLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuUnBiblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhaaGNpQnlaWFpsY25ObFMyVjVJRDBnSnljZ0t5QjJZV3c3WEc0Z0lDQWdJQ0FnSUdsbUlDaHJaWGtnSVQwOUlISmxkbVZ5YzJWTFpYa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2dvUTBOZlJVUkpWRTlTSUh4OElFTkRYMVJGVTFRcElDWW1JSEpsZG1WeWMyVkxaWGtnYVc0Z2IySnFJQ1ltSUc5aWFsdHlaWFpsY25ObFMyVjVYU0FoUFQwZ2EyVjVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJNdVpYSnliM0pKUkNnM01UQXdMQ0J5WlhabGNuTmxTMlY1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNTBhVzUxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lHcHpMblpoYkhWbEtHOWlhaXdnY21WMlpYSnpaVXRsZVN3Z2EyVjVLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2IySnFPMXh1ZlZ4dVhHNUZiblZ0TG1selJXNTFiU0E5SUdaMWJtTjBhVzl1SUNobGJuVnRWSGx3WlNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJsYm5WdFZIbHdaU0FtSmlCbGJuVnRWSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlU2duWDE5bGJuVnRjMTlmSnlrN1hHNTlPMXh1WEc0dktpcGNiaUFxSUVCdFpYUm9iMlFnWjJWMFRHbHpkRnh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUdWdWRXMUVaV1lnTFNCMGFHVWdaVzUxYlNCMGVYQmxJR1JsWm1sdVpXUWdabkp2YlNCall5NUZiblZ0WEc0Z0tpQkFjbVYwZFhKdUlIdFBZbXBsWTNSYlhYMWNiaUFxSUVCd2NtbDJZWFJsWEc0Z0tpOWNia1Z1ZFcwdVoyVjBUR2x6ZENBOUlHWjFibU4wYVc5dUlDaGxiblZ0UkdWbUtTQjdYRzRnSUNBZ2FXWWdLR1Z1ZFcxRVpXWXVYMTlsYm5WdGMxOWZLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdaVzUxYlVSbFppNWZYMlZ1ZFcxelgxODdYRzVjYmlBZ0lDQjJZWElnWlc1MWJYTWdQU0JsYm5WdFJHVm1MbDlmWlc1MWJYTmZYeUE5SUZ0ZE8xeHVJQ0FnSUdadmNpQW9kbUZ5SUc1aGJXVWdhVzRnWlc1MWJVUmxaaWtnZTF4dUlDQWdJQ0FnSUNCMllYSWdkbUZzZFdVZ1BTQmxiblZ0UkdWbVcyNWhiV1ZkTzF4dUlDQWdJQ0FnSUNCcFppQW9UblZ0WW1WeUxtbHpTVzUwWldkbGNpaDJZV3gxWlNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWdWRXMXpMbkIxYzJnb2V5QnVZVzFsTENCMllXeDFaU0I5S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdJQ0JsYm5WdGN5NXpiM0owS0NCbWRXNWpkR2x2YmlBb0lHRXNJR0lnS1NCN0lISmxkSFZ5YmlCaExuWmhiSFZsSUMwZ1lpNTJZV3gxWlRzZ2ZTQXBPMXh1SUNBZ0lISmxkSFZ5YmlCbGJuVnRjenRjYm4wN1hHNWNibWxtSUNoRFExOUVSVllwSUh0Y2JpQWdJQ0F2THlCamFHVmpheUJyWlhrZ2IzSmtaWElnYVc0Z2IySnFaV04wSUd4cGRHVnlZV3hjYmlBZ0lDQjJZWElnWDFSbGMzUkZiblZ0SUQwZ1JXNTFiU2g3WEc0Z0lDQWdJQ0FnSUZwRlVrODZJQzB4TEZ4dUlDQWdJQ0FnSUNCUFRrVTZJQzB4TEZ4dUlDQWdJQ0FnSUNCVVYwODZJQzB4TEZ4dUlDQWdJQ0FnSUNCVVNGSkZSVG9nTFRGY2JpQWdJQ0I5S1R0Y2JpQWdJQ0JwWmlBb1gxUmxjM1JGYm5WdExscEZVazhnSVQwOUlEQWdmSHdnWDFSbGMzUkZiblZ0TGs5T1JTQWhQVDBnTVNCOGZDQmZWR1Z6ZEVWdWRXMHVWRWhTUlVVZ0lUMDlJRE1wSUh0Y2JpQWdJQ0FnSUNBZ1kyTXVaWEp5YjNKSlJDZzNNVEF4S1R0Y2JpQWdJQ0I5WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdZMk11Ulc1MWJTQTlJRVZ1ZFcwN1hHNGlYWDA9Il19