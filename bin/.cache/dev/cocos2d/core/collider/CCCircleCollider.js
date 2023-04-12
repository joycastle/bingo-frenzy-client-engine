(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/collider/CCCircleCollider.js';
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
        cc.Collider.Circle = cc.Class({
            properties: {
                _offset: cc.v2(0, 0),
                _radius: 50,
                offset: {
                    get: function get() {
                        return this._offset;
                    },
                    set: function set(value) {
                        this._offset = value;
                    },
                    type: cc.Vec2
                },
                radius: {
                    tooltip: CC_DEV && 'i18n:COMPONENT.physics.physics_collider.radius',
                    get: function get() {
                        return this._radius;
                    },
                    set: function set(value) {
                        this._radius = value < 0 ? 0 : value;
                    }
                }
            },
            resetInEditor: CC_EDITOR && function () {
                var size = this.node.getContentSize();
                var radius = Math.max(size.width, size.height);
                if (radius !== 0) {
                    this.radius = radius;
                }
            }
        });
        var CircleCollider = cc.Class({
            name: 'cc.CircleCollider',
            extends: cc.Collider,
            mixins: [cc.Collider.Circle],
            editor: CC_EDITOR && { menu: 'i18n:MAIN_MENU.component.collider/Circle Collider' }
        });
        cc.CircleCollider = module.exports = CircleCollider;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDQ2lyY2xlQ29sbGlkZXIuanMiLCIvVXNlcnMvZ2FveWFuZy9Xb3JrU3BhY2Uvam95Y2FzdGxlL2JpbmdvL2NsaWVudC9iaW5nby9lbmdpbmUvY29jb3MyZC9jb3JlL2NvbGxpZGVyL0NDQ2lyY2xlQ29sbGlkZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDb2xsaWRlciIsIkNpcmNsZSIsIkNsYXNzIiwicHJvcGVydGllcyIsIl9vZmZzZXQiLCJ2MiIsIl9yYWRpdXMiLCJvZmZzZXQiLCJnZXQiLCJzZXQiLCJ2YWx1ZSIsInR5cGUiLCJWZWMyIiwicmFkaXVzIiwidG9vbHRpcCIsIkNDX0RFViIsInJlc2V0SW5FZGl0b3IiLCJDQ19FRElUT1IiLCJzaXplIiwibm9kZSIsImdldENvbnRlbnRTaXplIiwiTWF0aCIsIm1heCIsIndpZHRoIiwiaGVpZ2h0IiwiQ2lyY2xlQ29sbGlkZXIiLCJuYW1lIiwiZXh0ZW5kcyIsIm1peGlucyIsImVkaXRvciIsIm1lbnUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7UUErQkFBLEVBQUFBLENBQUdDLFFBQUhELENBQVlFLE1BQVpGLEdBQXFCQSxFQUFBQSxDQUFHRyxLQUFISCxDQUFTO0FBQUEsWUFDMUJJLFVBQUFBLEVBQVk7QUFBQSxnQkFDUkMsT0FBQUEsRUFBU0wsRUFBQUEsQ0FBR00sRUFBSE4sQ0FBTSxDQUFOQSxFQUFTLENBQVRBLENBREQ7QUFBQSxnQkFFUk8sT0FBQUEsRUFBUyxFQUZEO0FBQUEsZ0JBVVJDLE1BQUFBLEVBQVE7QUFBQSxvQkFDSkMsR0FBQUEsRUFBSyxTQUFBLEdBQUEsR0FBWTtBQUFBLHdCQUNiLE9BQU8sS0FBS0osT0FBWixDQURhO0FBQUEscUJBRGI7QUFBQSxvQkFJSkssR0FBQUEsRUFBSyxTQUFBLEdBQUEsQ0FBVUMsS0FBVixFQUFpQjtBQUFBLHdCQUNsQixLQUFLTixPQUFMLEdBQWVNLEtBQWYsQ0FEa0I7QUFBQSxxQkFKbEI7QUFBQSxvQkFPSkMsSUFBQUEsRUFBTVosRUFBQUEsQ0FBR2EsSUFQTDtBQUFBLGlCQVZBO0FBQUEsZ0JBMEJSQyxNQUFBQSxFQUFRO0FBQUEsb0JBQ0pDLE9BQUFBLEVBQVNDLE1BQUFBLElBQVUsZ0RBRGY7QUFBQSxvQkFFSlAsR0FBQUEsRUFBSyxTQUFBLEdBQUEsR0FBWTtBQUFBLHdCQUNiLE9BQU8sS0FBS0YsT0FBWixDQURhO0FBQUEscUJBRmI7QUFBQSxvQkFLSkcsR0FBQUEsRUFBSyxTQUFBLEdBQUEsQ0FBVUMsS0FBVixFQUFpQjtBQUFBLHdCQUNsQixLQUFLSixPQUFMLEdBQWVJLEtBQUFBLEdBQVEsQ0FBUkEsR0FBWSxDQUFaQSxHQUFnQkEsS0FBL0IsQ0FEa0I7QUFBQSxxQkFMbEI7QUFBQSxpQkExQkE7QUFBQSxhQURjO0FBQUEsWUFzQzFCTSxhQUFBQSxFQUFlQyxTQUFBQSxJQUFhLFlBQVk7QUFBQSxnQkFDcEMsSUFBSUMsSUFBQUEsR0FBTyxLQUFLQyxJQUFMLENBQVVDLGNBQVYsRUFBWCxDQURvQztBQUFBLGdCQUVwQyxJQUFJUCxNQUFBQSxHQUFTUSxJQUFBQSxDQUFLQyxHQUFMRCxDQUFTSCxJQUFBQSxDQUFLSyxLQUFkRixFQUFxQkgsSUFBQUEsQ0FBS00sTUFBMUJILENBQWIsQ0FGb0M7QUFBQSxnQkFHcEMsSUFBSVIsTUFBQUEsS0FBVyxDQUFmLEVBQWtCO0FBQUEsb0JBQ2QsS0FBS0EsTUFBTCxHQUFjQSxNQUFkLENBRGM7QUFBQSxpQkFIa0I7QUFBQSxhQXRDZDtBQUFBLFNBQVRkLENBQXJCQTtRQXNEQSxJQUFJMEIsY0FBQUEsR0FBaUIxQixFQUFBQSxDQUFHRyxLQUFISCxDQUFTO0FBQUEsWUFDMUIyQixJQUFBQSxFQUFNLG1CQURvQjtBQUFBLFlBRTFCQyxPQUFBQSxFQUFTNUIsRUFBQUEsQ0FBR0MsUUFGYztBQUFBLFlBRzFCNEIsTUFBQUEsRUFBUSxDQUFDN0IsRUFBQUEsQ0FBR0MsUUFBSEQsQ0FBWUUsTUFBYixDQUhrQjtBQUFBLFlBSzFCNEIsTUFBQUEsRUFBUVosU0FBQUEsSUFBYSxFQUNqQmEsSUFBQUEsRUFBTSxtREFEVyxFQUxLO0FBQUEsU0FBVC9CLENBQXJCO1FBVUFBLEVBQUFBLENBQUcwQixjQUFIMUIsR0FBb0JnQyxNQUFBQSxDQUFPQyxPQUFQRCxHQUFpQk4sY0FBckMxQiIsImZpbGUiOiJDQ0NpcmNsZUNvbGxpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTMtMjAxNiBDaHVrb25nIFRlY2hub2xvZ2llcyBJbmMuXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuICBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXG4gIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiAgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKipcbiAqICEjZW4gRGVmaW5lcyBhIENpcmNsZSBDb2xsaWRlciAuXG4gKiAhI3poIOeUqOadpeWumuS5ieWchuW9oueisOaSnuS9k1xuICogQGNsYXNzIENvbGxpZGVyLkNpcmNsZVxuICovXG5jYy5Db2xsaWRlci5DaXJjbGUgPSBjYy5DbGFzcyh7XG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfb2Zmc2V0OiBjYy52MigwLCAwKSxcbiAgICAgICAgX3JhZGl1czogNTAsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICEjZW4gUG9zaXRpb24gb2Zmc2V0XG4gICAgICAgICAqICEjemgg5L2N572u5YGP56e76YePXG4gICAgICAgICAqIEBwcm9wZXJ0eSBvZmZzZXRcbiAgICAgICAgICogQHR5cGUge1ZlYzJ9XG4gICAgICAgICAqL1xuICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9vZmZzZXQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXQgPSB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiBjYy5WZWMyXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICEjZW4gQ2lyY2xlIHJhZGl1c1xuICAgICAgICAgKiAhI3poIOWchuW9ouWNiuW+hFxuICAgICAgICAgKiBAcHJvcGVydHkgcmFkaXVzXG4gICAgICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICByYWRpdXM6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAnaTE4bjpDT01QT05FTlQucGh5c2ljcy5waHlzaWNzX2NvbGxpZGVyLnJhZGl1cycsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmFkaXVzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmFkaXVzID0gdmFsdWUgPCAwID8gMCA6IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlc2V0SW5FZGl0b3I6IENDX0VESVRPUiAmJiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzaXplID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCk7XG4gICAgICAgIHZhciByYWRpdXMgPSBNYXRoLm1heChzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG4gICAgICAgIGlmIChyYWRpdXMgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8qKlxuICogISNlbiBDaXJjbGUgQ29sbGlkZXIuXG4gKiAhI3poIOWchuW9oueisOaSnue7hOS7tlxuICogQGNsYXNzIENpcmNsZUNvbGxpZGVyXG4gKiBAZXh0ZW5kcyBDb2xsaWRlclxuICogQHVzZXMgQ29sbGlkZXIuQ2lyY2xlXG4gKi9cbnZhciBDaXJjbGVDb2xsaWRlciA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnY2MuQ2lyY2xlQ29sbGlkZXInLFxuICAgIGV4dGVuZHM6IGNjLkNvbGxpZGVyLFxuICAgIG1peGluczogW2NjLkNvbGxpZGVyLkNpcmNsZV0sXG5cbiAgICBlZGl0b3I6IENDX0VESVRPUiAmJiB7XG4gICAgICAgIG1lbnU6ICdpMThuOk1BSU5fTUVOVS5jb21wb25lbnQuY29sbGlkZXIvQ2lyY2xlIENvbGxpZGVyJ1xuICAgIH0sXG59KTtcblxuY2MuQ2lyY2xlQ29sbGlkZXIgPSBtb2R1bGUuZXhwb3J0cyA9IENpcmNsZUNvbGxpZGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiAgd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiAgdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuICBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKlxuICogISNlbiBEZWZpbmVzIGEgQ2lyY2xlIENvbGxpZGVyIC5cbiAqICEjemgg55So5p2l5a6a5LmJ5ZyG5b2i56Kw5pKe5L2TXG4gKiBAY2xhc3MgQ29sbGlkZXIuQ2lyY2xlXG4gKi9cbmNjLkNvbGxpZGVyLkNpcmNsZSA9IGNjLkNsYXNzKHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIF9vZmZzZXQ6IGNjLnYyKDAsIDApLFxuICAgICAgICBfcmFkaXVzOiA1MCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogISNlbiBQb3NpdGlvbiBvZmZzZXRcbiAgICAgICAgICogISN6aCDkvY3nva7lgY/np7vph49cbiAgICAgICAgICogQHByb3BlcnR5IG9mZnNldFxuICAgICAgICAgKiBAdHlwZSB7VmVjMn1cbiAgICAgICAgICovXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29mZnNldDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldCA9IHZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6IGNjLlZlYzJcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogISNlbiBDaXJjbGUgcmFkaXVzXG4gICAgICAgICAqICEjemgg5ZyG5b2i5Y2K5b6EXG4gICAgICAgICAqIEBwcm9wZXJ0eSByYWRpdXNcbiAgICAgICAgICogQHR5cGUge051bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHJhZGl1czoge1xuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdpMThuOkNPTVBPTkVOVC5waHlzaWNzLnBoeXNpY3NfY29sbGlkZXIucmFkaXVzJyxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yYWRpdXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yYWRpdXMgPSB2YWx1ZSA8IDAgPyAwIDogdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVzZXRJbkVkaXRvcjogQ0NfRURJVE9SICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNpemUgPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKTtcbiAgICAgICAgdmFyIHJhZGl1cyA9IE1hdGgubWF4KHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcbiAgICAgICAgaWYgKHJhZGl1cyAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLyoqXG4gKiAhI2VuIENpcmNsZSBDb2xsaWRlci5cbiAqICEjemgg5ZyG5b2i56Kw5pKe57uE5Lu2XG4gKiBAY2xhc3MgQ2lyY2xlQ29sbGlkZXJcbiAqIEBleHRlbmRzIENvbGxpZGVyXG4gKiBAdXNlcyBDb2xsaWRlci5DaXJjbGVcbiAqL1xudmFyIENpcmNsZUNvbGxpZGVyID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdjYy5DaXJjbGVDb2xsaWRlcicsXG4gICAgZXh0ZW5kczogY2MuQ29sbGlkZXIsXG4gICAgbWl4aW5zOiBbY2MuQ29sbGlkZXIuQ2lyY2xlXSxcblxuICAgIGVkaXRvcjogQ0NfRURJVE9SICYmIHtcbiAgICAgICAgbWVudTogJ2kxOG46TUFJTl9NRU5VLmNvbXBvbmVudC5jb2xsaWRlci9DaXJjbGUgQ29sbGlkZXInXG4gICAgfVxufSk7XG5cbmNjLkNpcmNsZUNvbGxpZGVyID0gbW9kdWxlLmV4cG9ydHMgPSBDaXJjbGVDb2xsaWRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrTkRRMmx5WTJ4bFEyOXNiR2xrWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHNpWTJNaUxDSkRiMnhzYVdSbGNpSXNJa05wY21Oc1pTSXNJa05zWVhOeklpd2ljSEp2Y0dWeWRHbGxjeUlzSWw5dlptWnpaWFFpTENKMk1pSXNJbDl5WVdScGRYTWlMQ0p2Wm1aelpYUWlMQ0puWlhRaUxDSnpaWFFpTENKMllXeDFaU0lzSW5SNWNHVWlMQ0pXWldNeUlpd2ljbUZrYVhWeklpd2lkRzl2YkhScGNDSXNJa05EWDBSRlZpSXNJbkpsYzJWMFNXNUZaR2wwYjNJaUxDSkRRMTlGUkVsVVQxSWlMQ0p6YVhwbElpd2libTlrWlNJc0ltZGxkRU52Ym5SbGJuUlRhWHBsSWl3aVRXRjBhQ0lzSW0xaGVDSXNJbmRwWkhSb0lpd2lhR1ZwWjJoMElpd2lRMmx5WTJ4bFEyOXNiR2xrWlhJaUxDSnVZVzFsSWl3aVpYaDBaVzVrY3lJc0ltMXBlR2x1Y3lJc0ltVmthWFJ2Y2lJc0ltMWxiblVpTENKdGIyUjFiR1VpTENKbGVIQnZjblJ6SWwwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQk96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFUQkNRVHM3T3pzN1FVRkxRVUVzUjBGQlIwTXNVVUZCU0N4RFFVRlpReXhOUVVGYUxFZEJRWEZDUml4SFFVRkhSeXhMUVVGSUxFTkJRVk03UVVGRE1VSkRMR2RDUVVGWk8wRkJRMUpETEdsQ1FVRlRUQ3hIUVVGSFRTeEZRVUZJTEVOQlFVMHNRMEZCVGl4RlFVRlRMRU5CUVZRc1EwRkVSRHRCUVVWU1F5eHBRa0ZCVXl4RlFVWkVPenRCUVVsU096czdPenM3UVVGTlFVTXNaMEpCUVZFN1FVRkRTa01zYVVKQlFVc3NaVUZCV1R0QlFVTmlMSFZDUVVGUExFdEJRVXRLTEU5QlFWbzdRVUZEU0N4aFFVaEhPMEZCU1VwTExHbENRVUZMTEdGQlFWVkRMRXRCUVZZc1JVRkJhVUk3UVVGRGJFSXNjVUpCUVV0T0xFOUJRVXdzUjBGQlpVMHNTMEZCWmp0QlFVTklMR0ZCVGtjN1FVRlBTa01zYTBKQlFVMWFMRWRCUVVkaE8wRkJVRXdzVTBGV1FUczdRVUZ2UWxJN096czdPenRCUVUxQlF5eG5Ra0ZCVVR0QlFVTktReXh4UWtGQlUwTXNWVUZCVlN4blJFRkVaanRCUVVWS1VDeHBRa0ZCU3l4bFFVRlpPMEZCUTJJc2RVSkJRVThzUzBGQlMwWXNUMEZCV2p0QlFVTklMR0ZCU2tjN1FVRkxTa2NzYVVKQlFVc3NZVUZCVlVNc1MwRkJWaXhGUVVGcFFqdEJRVU5zUWl4eFFrRkJTMG9zVDBGQlRDeEhRVUZsU1N4UlFVRlJMRU5CUVZJc1IwRkJXU3hEUVVGYUxFZEJRV2RDUVN4TFFVRXZRanRCUVVOSU8wRkJVRWM3UVVFeFFrRXNTMEZFWXpzN1FVRnpRekZDVFN4dFFrRkJaVU1zWVVGQllTeFpRVUZaTzBGQlEzQkRMRmxCUVVsRExFOUJRVThzUzBGQlMwTXNTVUZCVEN4RFFVRlZReXhqUVVGV0xFVkJRVmc3UVVGRFFTeFpRVUZKVUN4VFFVRlRVU3hMUVVGTFF5eEhRVUZNTEVOQlFWTktMRXRCUVV0TExFdEJRV1FzUlVGQmNVSk1MRXRCUVV0TkxFMUJRVEZDTEVOQlFXSTdRVUZEUVN4WlFVRkpXQ3hYUVVGWExFTkJRV1lzUlVGQmEwSTdRVUZEWkN4cFFrRkJTMEVzVFVGQlRDeEhRVUZqUVN4TlFVRmtPMEZCUTBnN1FVRkRTanRCUVRWRGVVSXNRMEZCVkN4RFFVRnlRanM3UVVFclEwRTdPenM3T3pzN1FVRlBRU3hKUVVGSldTeHBRa0ZCYVVJeFFpeEhRVUZIUnl4TFFVRklMRU5CUVZNN1FVRkRNVUozUWl4VlFVRk5MRzFDUVVSdlFqdEJRVVV4UWtNc1lVRkJVelZDTEVkQlFVZERMRkZCUm1NN1FVRkhNVUkwUWl4WlFVRlJMRU5CUVVNM1FpeEhRVUZIUXl4UlFVRklMRU5CUVZsRExFMUJRV0lzUTBGSWEwSTdPMEZCU3pGQ05FSXNXVUZCVVZvc1lVRkJZVHRCUVVOcVFtRXNZMEZCVFR0QlFVUlhPMEZCVEVzc1EwRkJWQ3hEUVVGeVFqczdRVUZWUVM5Q0xFZEJRVWN3UWl4alFVRklMRWRCUVc5Q1RTeFBRVUZQUXl4UFFVRlFMRWRCUVdsQ1VDeGpRVUZ5UXlJc0ltWnBiR1VpT2lKRFEwTnBjbU5zWlVOdmJHeHBaR1Z5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQkRiM0I1Y21sbmFIUWdLR01wSURJd01UTXRNakF4TmlCRGFIVnJiMjVuSUZSbFkyaHViMnh2WjJsbGN5QkpibU11WEc0Z1EyOXdlWEpwWjJoMElDaGpLU0F5TURFM0xUSXdNVGdnV0dsaGJXVnVJRmxoYW1rZ1UyOW1kSGRoY21VZ1EyOHVMQ0JNZEdRdVhHNWNiaUJvZEhSd2N6b3ZMM2QzZHk1amIyTnZjeTVqYjIwdlhHNWNiaUJRWlhKdGFYTnphVzl1SUdseklHaGxjbVZpZVNCbmNtRnVkR1ZrTENCbWNtVmxJRzltSUdOb1lYSm5aU3dnZEc4Z1lXNTVJSEJsY25OdmJpQnZZblJoYVc1cGJtY2dZU0JqYjNCNVhHNGdiMllnZEdocGN5QnpiMlowZDJGeVpTQmhibVFnWVhOemIyTnBZWFJsWkNCbGJtZHBibVVnYzI5MWNtTmxJR052WkdVZ0tIUm9aU0JjSWxOdlpuUjNZWEpsWENJcExDQmhJR3hwYldsMFpXUXNYRzRnSUhkdmNteGtkMmxrWlN3Z2NtOTVZV3gwZVMxbWNtVmxMQ0J1YjI0dFlYTnphV2R1WVdKc1pTd2djbVYyYjJOaFlteGxJR0Z1WkNCdWIyNHRaWGhqYkhWemFYWmxJR3hwWTJWdWMyVmNiaUIwYnlCMWMyVWdRMjlqYjNNZ1EzSmxZWFJ2Y2lCemIyeGxiSGtnZEc4Z1pHVjJaV3h2Y0NCbllXMWxjeUJ2YmlCNWIzVnlJSFJoY21kbGRDQndiR0YwWm05eWJYTXVJRmx2ZFNCemFHRnNiRnh1SUNCdWIzUWdkWE5sSUVOdlkyOXpJRU55WldGMGIzSWdjMjltZEhkaGNtVWdabTl5SUdSbGRtVnNiM0JwYm1jZ2IzUm9aWElnYzI5bWRIZGhjbVVnYjNJZ2RHOXZiSE1nZEdoaGRDZHpYRzRnSUhWelpXUWdabTl5SUdSbGRtVnNiM0JwYm1jZ1oyRnRaWE11SUZsdmRTQmhjbVVnYm05MElHZHlZVzUwWldRZ2RHOGdjSFZpYkdsemFDd2daR2x6ZEhKcFluVjBaU3hjYmlBZ2MzVmliR2xqWlc1elpTd2dZVzVrTDI5eUlITmxiR3dnWTI5d2FXVnpJRzltSUVOdlkyOXpJRU55WldGMGIzSXVYRzVjYmlCVWFHVWdjMjltZEhkaGNtVWdiM0lnZEc5dmJITWdhVzRnZEdocGN5Qk1hV05sYm5ObElFRm5jbVZsYldWdWRDQmhjbVVnYkdsalpXNXpaV1FzSUc1dmRDQnpiMnhrTGx4dUlGaHBZVzFsYmlCWllXcHBJRk52Wm5SM1lYSmxJRU52TGl3Z1RIUmtMaUJ5WlhObGNuWmxjeUJoYkd3Z2NtbG5hSFJ6SUc1dmRDQmxlSEJ5WlhOemJIa2daM0poYm5SbFpDQjBieUI1YjNVdVhHNWNiaUJVU0VVZ1UwOUdWRmRCVWtVZ1NWTWdVRkpQVmtsRVJVUWdYQ0pCVXlCSlUxd2lMQ0JYU1ZSSVQxVlVJRmRCVWxKQlRsUlpJRTlHSUVGT1dTQkxTVTVFTENCRldGQlNSVk5USUU5U1hHNGdTVTFRVEVsRlJDd2dTVTVEVEZWRVNVNUhJRUpWVkNCT1QxUWdURWxOU1ZSRlJDQlVUeUJVU0VVZ1YwRlNVa0ZPVkVsRlV5QlBSaUJOUlZKRFNFRk9WRUZDU1V4SlZGa3NYRzRnUmtsVVRrVlRVeUJHVDFJZ1FTQlFRVkpVU1VOVlRFRlNJRkJWVWxCUFUwVWdRVTVFSUU1UFRrbE9SbEpKVGtkRlRVVk9WQzRnU1U0Z1RrOGdSVlpGVGxRZ1UwaEJURXdnVkVoRlhHNGdRVlZVU0U5U1V5QlBVaUJEVDFCWlVrbEhTRlFnU0U5TVJFVlNVeUJDUlNCTVNVRkNURVVnUms5U0lFRk9XU0JEVEVGSlRTd2dSRUZOUVVkRlV5QlBVaUJQVkVoRlVseHVJRXhKUVVKSlRFbFVXU3dnVjBoRlZFaEZVaUJKVGlCQlRpQkJRMVJKVDA0Z1QwWWdRMDlPVkZKQlExUXNJRlJQVWxRZ1QxSWdUMVJJUlZKWFNWTkZMQ0JCVWtsVFNVNUhJRVpTVDAwc1hHNGdUMVZVSUU5R0lFOVNJRWxPSUVOUFRrNUZRMVJKVDA0Z1YwbFVTQ0JVU0VVZ1UwOUdWRmRCVWtVZ1QxSWdWRWhGSUZWVFJTQlBVaUJQVkVoRlVpQkVSVUZNU1U1SFV5QkpUbHh1SUZSSVJTQlRUMFpVVjBGU1JTNWNiaUFxS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUwxeHVYRzR2S2lwY2JpQXFJQ0VqWlc0Z1JHVm1hVzVsY3lCaElFTnBjbU5zWlNCRGIyeHNhV1JsY2lBdVhHNGdLaUFoSTNwb0lPZVVxT2FkcGVXdW11UzVpZVdjaHVXOW91ZWlzT2FTbnVTOWsxeHVJQ29nUUdOc1lYTnpJRU52Ykd4cFpHVnlMa05wY21Oc1pWeHVJQ292WEc1all5NURiMnhzYVdSbGNpNURhWEpqYkdVZ1BTQmpZeTVEYkdGemN5aDdYRzRnSUNBZ2NISnZjR1Z5ZEdsbGN6b2dlMXh1SUNBZ0lDQWdJQ0JmYjJabWMyVjBPaUJqWXk1Mk1pZ3dMQ0F3S1N4Y2JpQWdJQ0FnSUNBZ1gzSmhaR2wxY3pvZ05UQXNYRzVjYmlBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQXFJQ0VqWlc0Z1VHOXphWFJwYjI0Z2IyWm1jMlYwWEc0Z0lDQWdJQ0FnSUNBcUlDRWplbWdnNUwyTjU3MnU1WUdQNTZlNzZZZVBYRzRnSUNBZ0lDQWdJQ0FxSUVCd2NtOXdaWEowZVNCdlptWnpaWFJjYmlBZ0lDQWdJQ0FnSUNvZ1FIUjVjR1VnZTFabFl6SjlYRzRnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCdlptWnpaWFE2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5dlptWnpaWFE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MyVjBPaUJtZFc1amRHbHZiaUFvZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOXZabVp6WlhRZ1BTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBlWEJsT2lCall5NVdaV015WEc0Z0lDQWdJQ0FnSUgwc1hHNWNiaUFnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBcUlDRWpaVzRnUTJseVkyeGxJSEpoWkdsMWMxeHVJQ0FnSUNBZ0lDQWdLaUFoSTNwb0lPV2NodVc5b3VXTml1VytoRnh1SUNBZ0lDQWdJQ0FnS2lCQWNISnZjR1Z5ZEhrZ2NtRmthWFZ6WEc0Z0lDQWdJQ0FnSUNBcUlFQjBlWEJsSUh0T2RXMWlaWEo5WEc0Z0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQnlZV1JwZFhNNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSdmIyeDBhWEE2SUVORFgwUkZWaUFtSmlBbmFURTRianBEVDAxUVQwNUZUbFF1Y0doNWMybGpjeTV3YUhsemFXTnpYMk52Ykd4cFpHVnlMbkpoWkdsMWN5Y3NYRzRnSUNBZ0lDQWdJQ0FnSUNCblpYUTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWZjbUZrYVhWek8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE5sZERvZ1puVnVZM1JwYjI0Z0tIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmY21Ga2FYVnpJRDBnZG1Gc2RXVWdQQ0F3SUQ4Z01DQTZJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhKbGMyVjBTVzVGWkdsMGIzSTZJRU5EWDBWRVNWUlBVaUFtSmlCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCemFYcGxJRDBnZEdocGN5NXViMlJsTG1kbGRFTnZiblJsYm5SVGFYcGxLQ2s3WEc0Z0lDQWdJQ0FnSUhaaGNpQnlZV1JwZFhNZ1BTQk5ZWFJvTG0xaGVDaHphWHBsTG5kcFpIUm9MQ0J6YVhwbExtaGxhV2RvZENrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h5WVdScGRYTWdJVDA5SURBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjbUZrYVhWeklEMGdjbUZrYVhWek8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVmU2s3WEc1Y2JpOHFLbHh1SUNvZ0lTTmxiaUJEYVhKamJHVWdRMjlzYkdsa1pYSXVYRzRnS2lBaEkzcG9JT1djaHVXOW91ZWlzT2FTbnVlN2hPUzd0bHh1SUNvZ1FHTnNZWE56SUVOcGNtTnNaVU52Ykd4cFpHVnlYRzRnS2lCQVpYaDBaVzVrY3lCRGIyeHNhV1JsY2x4dUlDb2dRSFZ6WlhNZ1EyOXNiR2xrWlhJdVEybHlZMnhsWEc0Z0tpOWNiblpoY2lCRGFYSmpiR1ZEYjJ4c2FXUmxjaUE5SUdOakxrTnNZWE56S0h0Y2JpQWdJQ0J1WVcxbE9pQW5ZMk11UTJseVkyeGxRMjlzYkdsa1pYSW5MRnh1SUNBZ0lHVjRkR1Z1WkhNNklHTmpMa052Ykd4cFpHVnlMRnh1SUNBZ0lHMXBlR2x1Y3pvZ1cyTmpMa052Ykd4cFpHVnlMa05wY21Oc1pWMHNYRzVjYmlBZ0lDQmxaR2wwYjNJNklFTkRYMFZFU1ZSUFVpQW1KaUI3WEc0Z0lDQWdJQ0FnSUcxbGJuVTZJQ2RwTVRodU9rMUJTVTVmVFVWT1ZTNWpiMjF3YjI1bGJuUXVZMjlzYkdsa1pYSXZRMmx5WTJ4bElFTnZiR3hwWkdWeUoxeHVJQ0FnSUgwc1hHNTlLVHRjYmx4dVkyTXVRMmx5WTJ4bFEyOXNiR2xrWlhJZ1BTQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlFTnBjbU5zWlVOdmJHeHBaR1Z5TzF4dUlsMTkiXX0=