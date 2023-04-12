(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/3d/skeleton/skinned-mesh-renderer.js';
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
        var _get = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined;
                } else {
                    return get(parent, property, receiver);
                }
            } else if ('value' in desc) {
                return desc.value;
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined;
                }
                return getter.call(receiver);
            }
        };
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
        var SkinnedMeshRenderer = require('./CCSkinnedMeshRenderer');
        var MeshRendererAssembler = require('../../mesh/mesh-renderer');
        var RenderFlow = require('../../renderer/render-flow');
        var SkinnedMeshRendererAssembler = function (_MeshRendererAssemble) {
            _inherits(SkinnedMeshRendererAssembler, _MeshRendererAssemble);
            function SkinnedMeshRendererAssembler() {
                _classCallCheck(this, SkinnedMeshRendererAssembler);
                return _possibleConstructorReturn(this, (SkinnedMeshRendererAssembler.__proto__ || Object.getPrototypeOf(SkinnedMeshRendererAssembler)).apply(this, arguments));
            }
            _createClass(SkinnedMeshRendererAssembler, [{
                    key: 'fillBuffers',
                    value: function fillBuffers(comp, renderer) {
                        comp.calcJointMatrix();
                        _get(SkinnedMeshRendererAssembler.prototype.__proto__ || Object.getPrototypeOf(SkinnedMeshRendererAssembler.prototype), 'fillBuffers', this).call(this, comp, renderer);
                    }
                }]);
            return SkinnedMeshRendererAssembler;
        }(MeshRendererAssembler);
        exports.default = SkinnedMeshRendererAssembler;
        cc.Assembler.register(SkinnedMeshRenderer, SkinnedMeshRendererAssembler);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraW5uZWQtbWVzaC1yZW5kZXJlci5qcyIsIi9Vc2Vycy9TaGFyZWQvYmluZ29fZnJlbnp5L2VuZ2luZS9jb2NvczJkL2NvcmUvM2Qvc2tlbGV0b24vc2tpbm5lZC1tZXNoLXJlbmRlcmVyLmpzIl0sIm5hbWVzIjpbIlNraW5uZWRNZXNoUmVuZGVyZXIiLCJyZXF1aXJlIiwiTWVzaFJlbmRlcmVyQXNzZW1ibGVyIiwiUmVuZGVyRmxvdyIsIlNraW5uZWRNZXNoUmVuZGVyZXJBc3NlbWJsZXIiLCJjb21wIiwicmVuZGVyZXIiLCJjYWxjSm9pbnRNYXRyaXgiLCJjYyIsIkFzc2VtYmxlciIsInJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUF5QkEsSUFBTUEsbUJBQUFBLEdBQXNCQyxPQUFBQSxDQUFRLHlCQUFSQSxDQUE1QjtRQUNBLElBQU1DLHFCQUFBQSxHQUF3QkQsT0FBQUEsQ0FBUSwwQkFBUkEsQ0FBOUI7UUFDQSxJQUFNRSxVQUFBQSxHQUFhRixPQUFBQSxDQUFRLDRCQUFSQSxDQUFuQjtZQUVxQkcsNEJBQUFBOzs7Ozs7OztnREFDSkMsTUFBTUMsVUFBVTtBQUFBLHdCQUN6QkQsSUFBQUEsQ0FBS0UsZUFBTEYsR0FEeUI7QUFBQSx3QkFFekIsSUFBQSxDQUFBLDRCQUFBLENBQUEsU0FBQSxDQUFBLFNBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLDRCQUFBLENBQUEsU0FBQSxDQUFBLEVBQUEsYUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLENBQUEsSUFBQSxFQUFrQkEsSUFBbEIsRUFBd0JDLFFBQXhCLEVBRnlCO0FBQUE7OztVQUR5Qko7MEJBQXJDRTtRQU9yQkksRUFBQUEsQ0FBR0MsU0FBSEQsQ0FBYUUsUUFBYkYsQ0FBc0JSLG1CQUF0QlEsRUFBMkNKLDRCQUEzQ0k7Ozs7O1dBcENBO0FBQUE7O1dBQUE7QUFBQSIsImZpbGUiOiJza2lubmVkLW1lc2gtcmVuZGVyZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cDovL3d3dy5jb2Nvcy5jb21cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiAgd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiAgdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuICBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNvbnN0IFNraW5uZWRNZXNoUmVuZGVyZXIgPSByZXF1aXJlKCcuL0NDU2tpbm5lZE1lc2hSZW5kZXJlcicpO1xuY29uc3QgTWVzaFJlbmRlcmVyQXNzZW1ibGVyID0gcmVxdWlyZSgnLi4vLi4vbWVzaC9tZXNoLXJlbmRlcmVyJyk7XG5jb25zdCBSZW5kZXJGbG93ID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXIvcmVuZGVyLWZsb3cnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2tpbm5lZE1lc2hSZW5kZXJlckFzc2VtYmxlciBleHRlbmRzIE1lc2hSZW5kZXJlckFzc2VtYmxlciB7XG4gICAgZmlsbEJ1ZmZlcnMgKGNvbXAsIHJlbmRlcmVyKSB7XG4gICAgICAgIGNvbXAuY2FsY0pvaW50TWF0cml4KCk7XG4gICAgICAgIHN1cGVyLmZpbGxCdWZmZXJzKGNvbXAsIHJlbmRlcmVyKTtcbiAgICB9XG59XG5cbmNjLkFzc2VtYmxlci5yZWdpc3RlcihTa2lubmVkTWVzaFJlbmRlcmVyLCBTa2lubmVkTWVzaFJlbmRlcmVyQXNzZW1ibGVyKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpOyB9IH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwOi8vd3d3LmNvY29zLmNvbVxuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiAgbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxudmFyIFNraW5uZWRNZXNoUmVuZGVyZXIgPSByZXF1aXJlKCcuL0NDU2tpbm5lZE1lc2hSZW5kZXJlcicpO1xudmFyIE1lc2hSZW5kZXJlckFzc2VtYmxlciA9IHJlcXVpcmUoJy4uLy4uL21lc2gvbWVzaC1yZW5kZXJlcicpO1xudmFyIFJlbmRlckZsb3cgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlci9yZW5kZXItZmxvdycpO1xuXG52YXIgU2tpbm5lZE1lc2hSZW5kZXJlckFzc2VtYmxlciA9IGZ1bmN0aW9uIChfTWVzaFJlbmRlcmVyQXNzZW1ibGUpIHtcbiAgX2luaGVyaXRzKFNraW5uZWRNZXNoUmVuZGVyZXJBc3NlbWJsZXIsIF9NZXNoUmVuZGVyZXJBc3NlbWJsZSk7XG5cbiAgZnVuY3Rpb24gU2tpbm5lZE1lc2hSZW5kZXJlckFzc2VtYmxlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2tpbm5lZE1lc2hSZW5kZXJlckFzc2VtYmxlcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNraW5uZWRNZXNoUmVuZGVyZXJBc3NlbWJsZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTa2lubmVkTWVzaFJlbmRlcmVyQXNzZW1ibGVyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2tpbm5lZE1lc2hSZW5kZXJlckFzc2VtYmxlciwgW3tcbiAgICBrZXk6ICdmaWxsQnVmZmVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbGxCdWZmZXJzKGNvbXAsIHJlbmRlcmVyKSB7XG4gICAgICBjb21wLmNhbGNKb2ludE1hdHJpeCgpO1xuICAgICAgX2dldChTa2lubmVkTWVzaFJlbmRlcmVyQXNzZW1ibGVyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNraW5uZWRNZXNoUmVuZGVyZXJBc3NlbWJsZXIucHJvdG90eXBlKSwgJ2ZpbGxCdWZmZXJzJywgdGhpcykuY2FsbCh0aGlzLCBjb21wLCByZW5kZXJlcik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNraW5uZWRNZXNoUmVuZGVyZXJBc3NlbWJsZXI7XG59KE1lc2hSZW5kZXJlckFzc2VtYmxlcik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNraW5uZWRNZXNoUmVuZGVyZXJBc3NlbWJsZXI7XG5cblxuY2MuQXNzZW1ibGVyLnJlZ2lzdGVyKFNraW5uZWRNZXNoUmVuZGVyZXIsIFNraW5uZWRNZXNoUmVuZGVyZXJBc3NlbWJsZXIpO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk5yYVc1dVpXUXRiV1Z6YUMxeVpXNWtaWEpsY2k1cWN5SmRMQ0p1WVcxbGN5STZXeUpUYTJsdWJtVmtUV1Z6YUZKbGJtUmxjbVZ5SWl3aWNtVnhkV2x5WlNJc0lrMWxjMmhTWlc1a1pYSmxja0Z6YzJWdFlteGxjaUlzSWxKbGJtUmxja1pzYjNjaUxDSlRhMmx1Ym1Wa1RXVnphRkpsYm1SbGNtVnlRWE56WlcxaWJHVnlJaXdpWTI5dGNDSXNJbkpsYm1SbGNtVnlJaXdpWTJGc1kwcHZhVzUwVFdGMGNtbDRJaXdpWTJNaUxDSkJjM05sYldKc1pYSWlMQ0p5WldkcGMzUmxjaUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3p0QlFVRkJPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJlVUpCTEVsQlFVMUJMSE5DUVVGelFrTXNVVUZCVVN4NVFrRkJVaXhEUVVFMVFqdEJRVU5CTEVsQlFVMURMSGRDUVVGM1FrUXNVVUZCVVN3d1FrRkJVaXhEUVVFNVFqdEJRVU5CTEVsQlFVMUZMR0ZCUVdGR0xGRkJRVkVzTkVKQlFWSXNRMEZCYmtJN08wbEJSWEZDUnl3MFFqczdPenM3T3pzN096czdaME5CUTBwRExFa3NSVUZCVFVNc1VTeEZRVUZWTzBGQlEzcENSQ3hYUVVGTFJTeGxRVUZNTzBGQlEwRXNPRXBCUVd0Q1JpeEpRVUZzUWl4RlFVRjNRa01zVVVGQmVFSTdRVUZEU0RzN096dEZRVXB4UkVvc2NVSTdPMnRDUVVGeVEwVXNORUk3T3p0QlFVOXlRa2tzUjBGQlIwTXNVMEZCU0N4RFFVRmhReXhSUVVGaUxFTkJRWE5DVml4dFFrRkJkRUlzUlVGQk1rTkpMRFJDUVVFelF5SXNJbVpwYkdVaU9pSnphMmx1Ym1Wa0xXMWxjMmd0Y21WdVpHVnlaWEl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4dUlFTnZjSGx5YVdkb2RDQW9ZeWtnTWpBeE55MHlNREU0SUZocFlXMWxiaUJaWVdwcElGTnZablIzWVhKbElFTnZMaXdnVEhSa0xseHVYRzRnYUhSMGNEb3ZMM2QzZHk1amIyTnZjeTVqYjIxY2JseHVJRkJsY20xcGMzTnBiMjRnYVhNZ2FHVnlaV0o1SUdkeVlXNTBaV1FzSUdaeVpXVWdiMllnWTJoaGNtZGxMQ0IwYnlCaGJua2djR1Z5YzI5dUlHOWlkR0ZwYm1sdVp5QmhJR052Y0hsY2JpQnZaaUIwYUdseklITnZablIzWVhKbElHRnVaQ0JoYzNOdlkybGhkR1ZrSUdWdVoybHVaU0J6YjNWeVkyVWdZMjlrWlNBb2RHaGxJRndpVTI5bWRIZGhjbVZjSWlrc0lHRWdiR2x0YVhSbFpDeGNiaUFnZDI5eWJHUjNhV1JsTENCeWIzbGhiSFI1TFdaeVpXVXNJRzV2YmkxaGMzTnBaMjVoWW14bExDQnlaWFp2WTJGaWJHVWdZVzVrSUc1dmJpMWxlR05zZFhOcGRtVWdiR2xqWlc1elpWeHVJSFJ2SUhWelpTQkRiMk52Y3lCRGNtVmhkRzl5SUhOdmJHVnNlU0IwYnlCa1pYWmxiRzl3SUdkaGJXVnpJRzl1SUhsdmRYSWdkR0Z5WjJWMElIQnNZWFJtYjNKdGN5NGdXVzkxSUhOb1lXeHNYRzRnSUc1dmRDQjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMlowZDJGeVpTQm1iM0lnWkdWMlpXeHZjR2x1WnlCdmRHaGxjaUJ6YjJaMGQyRnlaU0J2Y2lCMGIyOXNjeUIwYUdGMEozTmNiaUFnZFhObFpDQm1iM0lnWkdWMlpXeHZjR2x1WnlCbllXMWxjeTRnV1c5MUlHRnlaU0J1YjNRZ1ozSmhiblJsWkNCMGJ5QndkV0pzYVhOb0xDQmthWE4wY21saWRYUmxMRnh1SUNCemRXSnNhV05sYm5ObExDQmhibVF2YjNJZ2MyVnNiQ0JqYjNCcFpYTWdiMllnUTI5amIzTWdRM0psWVhSdmNpNWNibHh1SUZSb1pTQnpiMlowZDJGeVpTQnZjaUIwYjI5c2N5QnBiaUIwYUdseklFeHBZMlZ1YzJVZ1FXZHlaV1Z0Wlc1MElHRnlaU0JzYVdObGJuTmxaQ3dnYm05MElITnZiR1F1WEc0Z1dHbGhiV1Z1SUZsaGFta2dVMjltZEhkaGNtVWdRMjh1TENCTWRHUXVJSEpsYzJWeWRtVnpJR0ZzYkNCeWFXZG9kSE1nYm05MElHVjRjSEpsYzNOc2VTQm5jbUZ1ZEdWa0lIUnZJSGx2ZFM1Y2JseHVJRlJJUlNCVFQwWlVWMEZTUlNCSlV5QlFVazlXU1VSRlJDQmNJa0ZUSUVsVFhDSXNJRmRKVkVoUFZWUWdWMEZTVWtGT1ZGa2dUMFlnUVU1WklFdEpUa1FzSUVWWVVGSkZVMU1nVDFKY2JpQkpUVkJNU1VWRUxDQkpUa05NVlVSSlRrY2dRbFZVSUU1UFZDQk1TVTFKVkVWRUlGUlBJRlJJUlNCWFFWSlNRVTVVU1VWVElFOUdJRTFGVWtOSVFVNVVRVUpKVEVsVVdTeGNiaUJHU1ZST1JWTlRJRVpQVWlCQklGQkJVbFJKUTFWTVFWSWdVRlZTVUU5VFJTQkJUa1FnVGs5T1NVNUdVa2xPUjBWTlJVNVVMaUJKVGlCT1R5QkZWa1ZPVkNCVFNFRk1UQ0JVU0VWY2JpQkJWVlJJVDFKVElFOVNJRU5QVUZsU1NVZElWQ0JJVDB4RVJWSlRJRUpGSUV4SlFVSk1SU0JHVDFJZ1FVNVpJRU5NUVVsTkxDQkVRVTFCUjBWVElFOVNJRTlVU0VWU1hHNGdURWxCUWtsTVNWUlpMQ0JYU0VWVVNFVlNJRWxPSUVGT0lFRkRWRWxQVGlCUFJpQkRUMDVVVWtGRFZDd2dWRTlTVkNCUFVpQlBWRWhGVWxkSlUwVXNJRUZTU1ZOSlRrY2dSbEpQVFN4Y2JpQlBWVlFnVDBZZ1QxSWdTVTRnUTA5T1RrVkRWRWxQVGlCWFNWUklJRlJJUlNCVFQwWlVWMEZTUlNCUFVpQlVTRVVnVlZORklFOVNJRTlVU0VWU0lFUkZRVXhKVGtkVElFbE9YRzRnVkVoRklGTlBSbFJYUVZKRkxseHVJQ29xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvdlhHNWNibU52Ym5OMElGTnJhVzV1WldSTlpYTm9VbVZ1WkdWeVpYSWdQU0J5WlhGMWFYSmxLQ2N1TDBORFUydHBibTVsWkUxbGMyaFNaVzVrWlhKbGNpY3BPMXh1WTI5dWMzUWdUV1Z6YUZKbGJtUmxjbVZ5UVhOelpXMWliR1Z5SUQwZ2NtVnhkV2x5WlNnbkxpNHZMaTR2YldWemFDOXRaWE5vTFhKbGJtUmxjbVZ5SnlrN1hHNWpiMjV6ZENCU1pXNWtaWEpHYkc5M0lEMGdjbVZ4ZFdseVpTZ25MaTR2TGk0dmNtVnVaR1Z5WlhJdmNtVnVaR1Z5TFdac2IzY25LVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdVMnRwYm01bFpFMWxjMmhTWlc1a1pYSmxja0Z6YzJWdFlteGxjaUJsZUhSbGJtUnpJRTFsYzJoU1pXNWtaWEpsY2tGemMyVnRZbXhsY2lCN1hHNGdJQ0FnWm1sc2JFSjFabVpsY25NZ0tHTnZiWEFzSUhKbGJtUmxjbVZ5S1NCN1hHNGdJQ0FnSUNBZ0lHTnZiWEF1WTJGc1kwcHZhVzUwVFdGMGNtbDRLQ2s3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbVpwYkd4Q2RXWm1aWEp6S0dOdmJYQXNJSEpsYm1SbGNtVnlLVHRjYmlBZ0lDQjlYRzU5WEc1Y2JtTmpMa0Z6YzJWdFlteGxjaTV5WldkcGMzUmxjaWhUYTJsdWJtVmtUV1Z6YUZKbGJtUmxjbVZ5TENCVGEybHVibVZrVFdWemFGSmxibVJsY21WeVFYTnpaVzFpYkdWeUtUdGNiaUpkZlE9PSJdfQ==