(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/extensions/dragonbones/DragonBonesAtlasAsset.js';
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
        var ArmatureCache = !CC_JSB && require('./ArmatureCache').sharedCache;
        var DragonBonesAtlasAsset = cc.Class({
            name: 'dragonBones.DragonBonesAtlasAsset',
            extends: cc.Asset,
            ctor: function ctor() {
                this._clear();
            },
            properties: {
                _atlasJson: '',
                atlasJson: {
                    get: function get() {
                        return this._atlasJson;
                    },
                    set: function set(value) {
                        this._atlasJson = value;
                        this._atlasJsonData = JSON.parse(this.atlasJson);
                        this._clear();
                    }
                },
                _texture: {
                    default: null,
                    type: cc.Texture2D,
                    formerlySerializedAs: 'texture'
                },
                texture: {
                    get: function get() {
                        return this._texture;
                    },
                    set: function set(value) {
                        this._texture = value;
                        this._clear();
                    }
                },
                _textureAtlasData: null
            },
            statics: { preventDeferredLoadDependents: true },
            createNode: CC_EDITOR && function (callback) {
                var node = new cc.Node(this.name);
                var armatureDisplay = node.addComponent(dragonBones.ArmatureDisplay);
                armatureDisplay.dragonAtlasAsset = this;
                return callback(null, node);
            },
            init: function init(factory) {
                this._factory = factory;
                if (!this._atlasJsonData) {
                    this._atlasJsonData = JSON.parse(this.atlasJson);
                }
                var atlasJsonObj = this._atlasJsonData;
                this._uuid = this._uuid || atlasJsonObj.name;
                if (this._textureAtlasData) {
                    factory.addTextureAtlasData(this._textureAtlasData, this._uuid);
                } else {
                    this._textureAtlasData = factory.parseTextureAtlasData(atlasJsonObj, this.texture, this._uuid);
                }
            },
            _clear: function _clear() {
                if (CC_JSB)
                    return;
                if (this._factory) {
                    ArmatureCache.resetArmature(this._uuid);
                    this._factory.removeTextureAtlasData(this._uuid, true);
                    this._factory.removeDragonBonesDataByUUID(this._uuid, true);
                }
                this._textureAtlasData = null;
            },
            destroy: function destroy() {
                this._clear();
                this._super();
            }
        });
        dragonBones.DragonBonesAtlasAsset = module.exports = DragonBonesAtlasAsset;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRyYWdvbkJvbmVzQXRsYXNBc3NldC5qcyIsIi9Vc2Vycy9TaGFyZWQvYmluZ29fZnJlbnp5L2VuZ2luZS9leHRlbnNpb25zL2RyYWdvbmJvbmVzL0RyYWdvbkJvbmVzQXRsYXNBc3NldC5qcyJdLCJuYW1lcyI6WyJBcm1hdHVyZUNhY2hlIiwiQ0NfSlNCIiwicmVxdWlyZSIsInNoYXJlZENhY2hlIiwiRHJhZ29uQm9uZXNBdGxhc0Fzc2V0IiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJleHRlbmRzIiwiQXNzZXQiLCJjdG9yIiwiX2NsZWFyIiwicHJvcGVydGllcyIsIl9hdGxhc0pzb24iLCJhdGxhc0pzb24iLCJnZXQiLCJzZXQiLCJ2YWx1ZSIsIl9hdGxhc0pzb25EYXRhIiwiSlNPTiIsInBhcnNlIiwiX3RleHR1cmUiLCJkZWZhdWx0IiwidHlwZSIsIlRleHR1cmUyRCIsImZvcm1lcmx5U2VyaWFsaXplZEFzIiwidGV4dHVyZSIsIl90ZXh0dXJlQXRsYXNEYXRhIiwic3RhdGljcyIsInByZXZlbnREZWZlcnJlZExvYWREZXBlbmRlbnRzIiwiY3JlYXRlTm9kZSIsIkNDX0VESVRPUiIsImNhbGxiYWNrIiwibm9kZSIsIk5vZGUiLCJhcm1hdHVyZURpc3BsYXkiLCJhZGRDb21wb25lbnQiLCJkcmFnb25Cb25lcyIsIkFybWF0dXJlRGlzcGxheSIsImRyYWdvbkF0bGFzQXNzZXQiLCJpbml0IiwiZmFjdG9yeSIsIl9mYWN0b3J5IiwiYXRsYXNKc29uT2JqIiwiX3V1aWQiLCJhZGRUZXh0dXJlQXRsYXNEYXRhIiwicGFyc2VUZXh0dXJlQXRsYXNEYXRhIiwicmVzZXRBcm1hdHVyZSIsInJlbW92ZVRleHR1cmVBdGxhc0RhdGEiLCJyZW1vdmVEcmFnb25Cb25lc0RhdGFCeVVVSUQiLCJkZXN0cm95IiwiX3N1cGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFB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b25Cb25lc0F0bGFzQXNzZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxNiBDaHVrb25nIFRlY2hub2xvZ2llcyBJbmMuXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKlxuICogQG1vZHVsZSBkcmFnb25Cb25lc1xuICovXG5sZXQgQXJtYXR1cmVDYWNoZSA9ICFDQ19KU0IgJiYgcmVxdWlyZSgnLi9Bcm1hdHVyZUNhY2hlJykuc2hhcmVkQ2FjaGU7XG5cbi8qKlxuICogISNlbiBUaGUgc2tlbGV0b24gYXRsYXMgZGF0YSBvZiBkcmFnb25Cb25lcy5cbiAqICEjemggZHJhZ29uQm9uZXMg55qE6aqo6aq857q555CG5pWw5o2u44CCXG4gKiBAY2xhc3MgRHJhZ29uQm9uZXNBdGxhc0Fzc2V0XG4gKiBAZXh0ZW5kcyBBc3NldFxuICovXG52YXIgRHJhZ29uQm9uZXNBdGxhc0Fzc2V0ID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQnLFxuICAgIGV4dGVuZHM6IGNjLkFzc2V0LFxuXG4gICAgY3RvciAoKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgX2F0bGFzSnNvbiA6ICcnLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gYXRsYXNKc29uXG4gICAgICAgICAqL1xuICAgICAgICBhdGxhc0pzb246IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9hdGxhc0pzb247XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hdGxhc0pzb24gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hdGxhc0pzb25EYXRhID0gSlNPTi5wYXJzZSh0aGlzLmF0bGFzSnNvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBfdGV4dHVyZToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlRleHR1cmUyRCxcbiAgICAgICAgICAgIGZvcm1lcmx5U2VyaWFsaXplZEFzOiAndGV4dHVyZSdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByb3BlcnR5IHtUZXh0dXJlMkR9IHRleHR1cmVcbiAgICAgICAgICovXG4gICAgICAgIHRleHR1cmU6IHtcbiAgICAgICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RleHR1cmUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIF90ZXh0dXJlQXRsYXNEYXRhOiBudWxsLFxuICAgIH0sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIHByZXZlbnREZWZlcnJlZExvYWREZXBlbmRlbnRzOiB0cnVlXG4gICAgfSxcblxuICAgIGNyZWF0ZU5vZGU6IENDX0VESVRPUiAmJiAgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUodGhpcy5uYW1lKTtcbiAgICAgICAgdmFyIGFybWF0dXJlRGlzcGxheSA9IG5vZGUuYWRkQ29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XG4gICAgICAgIGFybWF0dXJlRGlzcGxheS5kcmFnb25BdGxhc0Fzc2V0ID0gdGhpcztcblxuICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgbm9kZSk7XG4gICAgfSxcblxuICAgIGluaXQgKGZhY3RvcnkpIHtcbiAgICAgICAgdGhpcy5fZmFjdG9yeSA9IGZhY3Rvcnk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9hdGxhc0pzb25EYXRhKSB7XG4gICAgICAgICAgICB0aGlzLl9hdGxhc0pzb25EYXRhID0gSlNPTi5wYXJzZSh0aGlzLmF0bGFzSnNvbik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGF0bGFzSnNvbk9iaiA9IHRoaXMuX2F0bGFzSnNvbkRhdGE7XG5cbiAgICAgICAgLy8gSWYgY3JlYXRlIGJ5IG1hbnVhbCwgdXVpZCBpcyBlbXB0eS5cbiAgICAgICAgdGhpcy5fdXVpZCA9IHRoaXMuX3V1aWQgfHwgYXRsYXNKc29uT2JqLm5hbWU7XG5cbiAgICAgICAgaWYgKHRoaXMuX3RleHR1cmVBdGxhc0RhdGEpIHtcbiAgICAgICAgICAgIGZhY3RvcnkuYWRkVGV4dHVyZUF0bGFzRGF0YSh0aGlzLl90ZXh0dXJlQXRsYXNEYXRhLCB0aGlzLl91dWlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3RleHR1cmVBdGxhc0RhdGEgPSBmYWN0b3J5LnBhcnNlVGV4dHVyZUF0bGFzRGF0YShhdGxhc0pzb25PYmosIHRoaXMudGV4dHVyZSwgdGhpcy5fdXVpZCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2NsZWFyICgpIHtcbiAgICAgICAgaWYgKENDX0pTQikgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5fZmFjdG9yeSkge1xuICAgICAgICAgICAgQXJtYXR1cmVDYWNoZS5yZXNldEFybWF0dXJlKHRoaXMuX3V1aWQpO1xuICAgICAgICAgICAgdGhpcy5fZmFjdG9yeS5yZW1vdmVUZXh0dXJlQXRsYXNEYXRhKHRoaXMuX3V1aWQsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5fZmFjdG9yeS5yZW1vdmVEcmFnb25Cb25lc0RhdGFCeVVVSUQodGhpcy5fdXVpZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGV4dHVyZUF0bGFzRGF0YSA9IG51bGw7XG4gICAgfSxcblxuICAgIGRlc3Ryb3kgKCkge1xuICAgICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgICB0aGlzLl9zdXBlcigpO1xuICAgIH0sXG59KTtcblxuZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0ID0gbW9kdWxlLmV4cG9ydHMgPSBEcmFnb25Cb25lc0F0bGFzQXNzZXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXG4gdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiBAbW9kdWxlIGRyYWdvbkJvbmVzXG4gKi9cbnZhciBBcm1hdHVyZUNhY2hlID0gIUNDX0pTQiAmJiByZXF1aXJlKCcuL0FybWF0dXJlQ2FjaGUnKS5zaGFyZWRDYWNoZTtcblxuLyoqXG4gKiAhI2VuIFRoZSBza2VsZXRvbiBhdGxhcyBkYXRhIG9mIGRyYWdvbkJvbmVzLlxuICogISN6aCBkcmFnb25Cb25lcyDnmoTpqqjpqrznurnnkIbmlbDmja7jgIJcbiAqIEBjbGFzcyBEcmFnb25Cb25lc0F0bGFzQXNzZXRcbiAqIEBleHRlbmRzIEFzc2V0XG4gKi9cbnZhciBEcmFnb25Cb25lc0F0bGFzQXNzZXQgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogJ2RyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldCcsXG4gICAgZXh0ZW5kczogY2MuQXNzZXQsXG5cbiAgICBjdG9yOiBmdW5jdGlvbiBjdG9yKCkge1xuICAgICAgICB0aGlzLl9jbGVhcigpO1xuICAgIH0sXG5cblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgX2F0bGFzSnNvbjogJycsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhdGxhc0pzb25cbiAgICAgICAgICovXG4gICAgICAgIGF0bGFzSnNvbjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2F0bGFzSnNvbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2F0bGFzSnNvbiA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2F0bGFzSnNvbkRhdGEgPSBKU09OLnBhcnNlKHRoaXMuYXRsYXNKc29uKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIF90ZXh0dXJlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuVGV4dHVyZTJELFxuICAgICAgICAgICAgZm9ybWVybHlTZXJpYWxpemVkQXM6ICd0ZXh0dXJlJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJvcGVydHkge1RleHR1cmUyRH0gdGV4dHVyZVxuICAgICAgICAgKi9cbiAgICAgICAgdGV4dHVyZToge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90ZXh0dXJlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBfdGV4dHVyZUF0bGFzRGF0YTogbnVsbFxuICAgIH0sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIHByZXZlbnREZWZlcnJlZExvYWREZXBlbmRlbnRzOiB0cnVlXG4gICAgfSxcblxuICAgIGNyZWF0ZU5vZGU6IENDX0VESVRPUiAmJiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSh0aGlzLm5hbWUpO1xuICAgICAgICB2YXIgYXJtYXR1cmVEaXNwbGF5ID0gbm9kZS5hZGRDb21wb25lbnQoZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KTtcbiAgICAgICAgYXJtYXR1cmVEaXNwbGF5LmRyYWdvbkF0bGFzQXNzZXQgPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBub2RlKTtcbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChmYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuX2ZhY3RvcnkgPSBmYWN0b3J5O1xuXG4gICAgICAgIGlmICghdGhpcy5fYXRsYXNKc29uRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5fYXRsYXNKc29uRGF0YSA9IEpTT04ucGFyc2UodGhpcy5hdGxhc0pzb24pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhdGxhc0pzb25PYmogPSB0aGlzLl9hdGxhc0pzb25EYXRhO1xuXG4gICAgICAgIC8vIElmIGNyZWF0ZSBieSBtYW51YWwsIHV1aWQgaXMgZW1wdHkuXG4gICAgICAgIHRoaXMuX3V1aWQgPSB0aGlzLl91dWlkIHx8IGF0bGFzSnNvbk9iai5uYW1lO1xuXG4gICAgICAgIGlmICh0aGlzLl90ZXh0dXJlQXRsYXNEYXRhKSB7XG4gICAgICAgICAgICBmYWN0b3J5LmFkZFRleHR1cmVBdGxhc0RhdGEodGhpcy5fdGV4dHVyZUF0bGFzRGF0YSwgdGhpcy5fdXVpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlQXRsYXNEYXRhID0gZmFjdG9yeS5wYXJzZVRleHR1cmVBdGxhc0RhdGEoYXRsYXNKc29uT2JqLCB0aGlzLnRleHR1cmUsIHRoaXMuX3V1aWQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBfY2xlYXI6IGZ1bmN0aW9uIF9jbGVhcigpIHtcbiAgICAgICAgaWYgKENDX0pTQikgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5fZmFjdG9yeSkge1xuICAgICAgICAgICAgQXJtYXR1cmVDYWNoZS5yZXNldEFybWF0dXJlKHRoaXMuX3V1aWQpO1xuICAgICAgICAgICAgdGhpcy5fZmFjdG9yeS5yZW1vdmVUZXh0dXJlQXRsYXNEYXRhKHRoaXMuX3V1aWQsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5fZmFjdG9yeS5yZW1vdmVEcmFnb25Cb25lc0RhdGFCeVVVSUQodGhpcy5fdXVpZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGV4dHVyZUF0bGFzRGF0YSA9IG51bGw7XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgICB0aGlzLl9zdXBlcigpO1xuICAgIH1cbn0pO1xuXG5kcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQgPSBtb2R1bGUuZXhwb3J0cyA9IERyYWdvbkJvbmVzQXRsYXNBc3NldDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUnlZV2R2YmtKdmJtVnpRWFJzWVhOQmMzTmxkQzVxY3lKZExDSnVZVzFsY3lJNld5SkJjbTFoZEhWeVpVTmhZMmhsSWl3aVEwTmZTbE5DSWl3aWNtVnhkV2x5WlNJc0luTm9ZWEpsWkVOaFkyaGxJaXdpUkhKaFoyOXVRbTl1WlhOQmRHeGhjMEZ6YzJWMElpd2lZMk1pTENKRGJHRnpjeUlzSW01aGJXVWlMQ0psZUhSbGJtUnpJaXdpUVhOelpYUWlMQ0pqZEc5eUlpd2lYMk5zWldGeUlpd2ljSEp2Y0dWeWRHbGxjeUlzSWw5aGRHeGhjMHB6YjI0aUxDSmhkR3hoYzBwemIyNGlMQ0puWlhRaUxDSnpaWFFpTENKMllXeDFaU0lzSWw5aGRHeGhjMHB6YjI1RVlYUmhJaXdpU2xOUFRpSXNJbkJoY25ObElpd2lYM1JsZUhSMWNtVWlMQ0prWldaaGRXeDBJaXdpZEhsd1pTSXNJbFJsZUhSMWNtVXlSQ0lzSW1admNtMWxjbXg1VTJWeWFXRnNhWHBsWkVGeklpd2lkR1Y0ZEhWeVpTSXNJbDkwWlhoMGRYSmxRWFJzWVhORVlYUmhJaXdpYzNSaGRHbGpjeUlzSW5CeVpYWmxiblJFWldabGNuSmxaRXh2WVdSRVpYQmxibVJsYm5Seklpd2lZM0psWVhSbFRtOWtaU0lzSWtORFgwVkVTVlJQVWlJc0ltTmhiR3hpWVdOcklpd2libTlrWlNJc0lrNXZaR1VpTENKaGNtMWhkSFZ5WlVScGMzQnNZWGtpTENKaFpHUkRiMjF3YjI1bGJuUWlMQ0prY21GbmIyNUNiMjVsY3lJc0lrRnliV0YwZFhKbFJHbHpjR3hoZVNJc0ltUnlZV2R2YmtGMGJHRnpRWE56WlhRaUxDSnBibWwwSWl3aVptRmpkRzl5ZVNJc0lsOW1ZV04wYjNKNUlpd2lZWFJzWVhOS2MyOXVUMkpxSWl3aVgzVjFhV1FpTENKaFpHUlVaWGgwZFhKbFFYUnNZWE5FWVhSaElpd2ljR0Z5YzJWVVpYaDBkWEpsUVhSc1lYTkVZWFJoSWl3aWNtVnpaWFJCY20xaGRIVnlaU0lzSW5KbGJXOTJaVlJsZUhSMWNtVkJkR3hoYzBSaGRHRWlMQ0p5WlcxdmRtVkVjbUZuYjI1Q2IyNWxjMFJoZEdGQ2VWVlZTVVFpTENKa1pYTjBjbTk1SWl3aVgzTjFjR1Z5SWl3aWJXOWtkV3hsSWl3aVpYaHdiM0owY3lKZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRXdRa0U3T3p0QlFVZEJMRWxCUVVsQkxHZENRVUZuUWl4RFFVRkRReXhOUVVGRUxFbEJRVmRETEZGQlFWRXNhVUpCUVZJc1JVRkJNa0pETEZkQlFURkVPenRCUVVWQk96czdPenM3UVVGTlFTeEpRVUZKUXl4M1FrRkJkMEpETEVkQlFVZERMRXRCUVVnc1EwRkJVenRCUVVOcVEwTXNWVUZCVFN4dFEwRkVNa0k3UVVGRmFrTkRMR0ZCUVZOSUxFZEJRVWRKTEV0QlJuRkNPenRCUVVscVEwTXNVVUZLYVVNc2EwSkJTWHBDTzBGQlEwb3NZVUZCUzBNc1RVRkJURHRCUVVOSUxFdEJUbWRET3pzN1FVRlJha05ETEdkQ1FVRlpPMEZCUTFKRExHOUNRVUZoTEVWQlJFdzdPMEZCUjFJN096dEJRVWRCUXl4dFFrRkJWenRCUVVOUVF5eHBRa0ZCU3l4bFFVRlpPMEZCUTJJc2RVSkJRVThzUzBGQlMwWXNWVUZCV2p0QlFVTklMR0ZCU0UwN1FVRkpVRWNzYVVKQlFVc3NZVUZCVlVNc1MwRkJWaXhGUVVGcFFqdEJRVU5zUWl4eFFrRkJTMG9zVlVGQlRDeEhRVUZyUWtrc1MwRkJiRUk3UVVGRFFTeHhRa0ZCUzBNc1kwRkJUQ3hIUVVGelFrTXNTMEZCUzBNc1MwRkJUQ3hEUVVGWExFdEJRVXRPTEZOQlFXaENMRU5CUVhSQ08wRkJRMEVzY1VKQlFVdElMRTFCUVV3N1FVRkRTRHRCUVZKTkxGTkJUa2c3TzBGQmFVSlNWU3hyUWtGQlZUdEJRVU5PUXl4eFFrRkJVeXhKUVVSSU8wRkJSVTVETEd0Q1FVRk5iRUlzUjBGQlIyMUNMRk5CUmtnN1FVRkhUa01zYTBOQlFYTkNPMEZCU0doQ0xGTkJha0pHT3p0QlFYVkNVanM3TzBGQlIwRkRMR2xDUVVGVE8wRkJRMHhZTEdWQlJFc3NhVUpCUTBVN1FVRkRTQ3gxUWtGQlR5eExRVUZMVFN4UlFVRmFPMEZCUTBnc1lVRklTVHRCUVVsTVRDeGxRVXBMTEdWQlNVRkRMRXRCU2tFc1JVRkpUenRCUVVOU0xIRkNRVUZMU1N4UlFVRk1MRWRCUVdkQ1NpeExRVUZvUWp0QlFVTkJMSEZDUVVGTFRpeE5RVUZNTzBGQlEwZzdRVUZRU1N4VFFURkNSRHM3UVVGdlExSm5RaXd5UWtGQmJVSTdRVUZ3UTFnc1MwRlNjVUk3TzBGQkswTnFRME1zWVVGQlV6dEJRVU5NUXl4MVEwRkJLMEk3UVVGRU1VSXNTMEV2UTNkQ096dEJRVzFFYWtORExHZENRVUZaUXl4aFFVRmpMRlZCUVZWRExGRkJRVllzUlVGQmIwSTdRVUZETVVNc1dVRkJTVU1zVDBGQlR5eEpRVUZKTlVJc1IwRkJSelpDTEVsQlFWQXNRMEZCV1N4TFFVRkxNMElzU1VGQmFrSXNRMEZCV0R0QlFVTkJMRmxCUVVrMFFpeHJRa0ZCYTBKR0xFdEJRVXRITEZsQlFVd3NRMEZCYTBKRExGbEJRVmxETEdWQlFUbENMRU5CUVhSQ08wRkJRMEZJTEhkQ1FVRm5Ra2tzWjBKQlFXaENMRWRCUVcxRExFbEJRVzVET3p0QlFVVkJMR1ZCUVU5UUxGTkJRVk1zU1VGQlZDeEZRVUZsUXl4SlFVRm1MRU5CUVZBN1FVRkRTQ3hMUVhwRVowTTdPMEZCTWtScVEwOHNVVUV6UkdsRExHZENRVEpFTTBKRExFOUJNMFF5UWl4RlFUSkViRUk3UVVGRFdDeGhRVUZMUXl4UlFVRk1MRWRCUVdkQ1JDeFBRVUZvUWpzN1FVRkZRU3haUVVGSkxFTkJRVU1zUzBGQlMzWkNMR05CUVZZc1JVRkJNRUk3UVVGRGRFSXNhVUpCUVV0QkxHTkJRVXdzUjBGQmMwSkRMRXRCUVV0RExFdEJRVXdzUTBGQlZ5eExRVUZMVGl4VFFVRm9RaXhEUVVGMFFqdEJRVU5JTzBGQlEwUXNXVUZCU1RaQ0xHVkJRV1VzUzBGQlMzcENMR05CUVhoQ096dEJRVVZCTzBGQlEwRXNZVUZCU3pCQ0xFdEJRVXdzUjBGQllTeExRVUZMUVN4TFFVRk1MRWxCUVdORUxHRkJRV0Z3UXl4SlFVRjRRenM3UVVGRlFTeFpRVUZKTEV0QlFVdHZRaXhwUWtGQlZDeEZRVUUwUWp0QlFVTjRRbU1zYjBKQlFWRkpMRzFDUVVGU0xFTkJRVFJDTEV0QlFVdHNRaXhwUWtGQmFrTXNSVUZCYjBRc1MwRkJTMmxDTEV0QlFYcEVPMEZCUTBnc1UwRkdSQ3hOUVVkTE8wRkJRMFFzYVVKQlFVdHFRaXhwUWtGQlRDeEhRVUY1UW1Nc1VVRkJVVXNzY1VKQlFWSXNRMEZCT0VKSUxGbEJRVGxDTEVWQlFUUkRMRXRCUVV0cVFpeFBRVUZxUkN4RlFVRXdSQ3hMUVVGTGEwSXNTMEZCTDBRc1EwRkJla0k3UVVGRFNEdEJRVU5LTEV0Qk5VVm5RenRCUVRoRmFrTnFReXhWUVRsRmFVTXNiMEpCT0VWMlFqdEJRVU5PTEZsQlFVbFdMRTFCUVVvc1JVRkJXVHRCUVVOYUxGbEJRVWtzUzBGQlMzbERMRkZCUVZRc1JVRkJiVUk3UVVGRFpqRkRMREJDUVVGakswTXNZVUZCWkN4RFFVRTBRaXhMUVVGTFNDeExRVUZxUXp0QlFVTkJMR2xDUVVGTFJpeFJRVUZNTEVOQlFXTk5MSE5DUVVGa0xFTkJRWEZETEV0QlFVdEtMRXRCUVRGRExFVkJRV2xFTEVsQlFXcEVPMEZCUTBFc2FVSkJRVXRHTEZGQlFVd3NRMEZCWTA4c01rSkJRV1FzUTBGQk1FTXNTMEZCUzB3c1MwRkJMME1zUlVGQmMwUXNTVUZCZEVRN1FVRkRTRHRCUVVORUxHRkJRVXRxUWl4cFFrRkJUQ3hIUVVGNVFpeEpRVUY2UWp0QlFVTklMRXRCZEVablF6dEJRWGRHYWtOMVFpeFhRWGhHYVVNc2NVSkJkMFowUWp0QlFVTlFMR0ZCUVV0MlF5eE5RVUZNTzBGQlEwRXNZVUZCUzNkRExFMUJRVXc3UVVGRFNEdEJRVE5HWjBNc1EwRkJWQ3hEUVVFMVFqczdRVUU0UmtGa0xGbEJRVmxxUXl4eFFrRkJXaXhIUVVGdlEyZEVMRTlCUVU5RExFOUJRVkFzUjBGQmFVSnFSQ3h4UWtGQmNrUWlMQ0ptYVd4bElqb2lSSEpoWjI5dVFtOXVaWE5CZEd4aGMwRnpjMlYwTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQkRiM0I1Y21sbmFIUWdLR01wSURJd01UWWdRMmgxYTI5dVp5QlVaV05vYm05c2IyZHBaWE1nU1c1akxseHVJRU52Y0hseWFXZG9kQ0FvWXlrZ01qQXhOeTB5TURFNElGaHBZVzFsYmlCWllXcHBJRk52Wm5SM1lYSmxJRU52TGl3Z1RIUmtMbHh1WEc0Z2FIUjBjSE02THk5M2QzY3VZMjlqYjNNdVkyOXRMMXh1WEc0Z1VHVnliV2x6YzJsdmJpQnBjeUJvWlhKbFlua2daM0poYm5SbFpDd2dabkpsWlNCdlppQmphR0Z5WjJVc0lIUnZJR0Z1ZVNCd1pYSnpiMjRnYjJKMFlXbHVhVzVuSUdFZ1kyOXdlVnh1SUc5bUlIUm9hWE1nYzI5bWRIZGhjbVVnWVc1a0lHRnpjMjlqYVdGMFpXUWdaVzVuYVc1bElITnZkWEpqWlNCamIyUmxJQ2gwYUdVZ1hDSlRiMlowZDJGeVpWd2lLU3dnWVNCc2FXMXBkR1ZrTEZ4dUlIZHZjbXhrZDJsa1pTd2djbTk1WVd4MGVTMW1jbVZsTENCdWIyNHRZWE56YVdkdVlXSnNaU3dnY21WMmIyTmhZbXhsSUdGdVpDQnViMjR0WlhoamJIVnphWFpsSUd4cFkyVnVjMlZjYmlCMGJ5QjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMnhsYkhrZ2RHOGdaR1YyWld4dmNDQm5ZVzFsY3lCdmJpQjViM1Z5SUhSaGNtZGxkQ0J3YkdGMFptOXliWE11SUZsdmRTQnphR0ZzYkZ4dUlHNXZkQ0IxYzJVZ1EyOWpiM01nUTNKbFlYUnZjaUJ6YjJaMGQyRnlaU0JtYjNJZ1pHVjJaV3h2Y0dsdVp5QnZkR2hsY2lCemIyWjBkMkZ5WlNCdmNpQjBiMjlzY3lCMGFHRjBKM05jYmlCMWMyVmtJR1p2Y2lCa1pYWmxiRzl3YVc1bklHZGhiV1Z6TGlCWmIzVWdZWEpsSUc1dmRDQm5jbUZ1ZEdWa0lIUnZJSEIxWW14cGMyZ3NJR1JwYzNSeWFXSjFkR1VzWEc0Z2MzVmliR2xqWlc1elpTd2dZVzVrTDI5eUlITmxiR3dnWTI5d2FXVnpJRzltSUVOdlkyOXpJRU55WldGMGIzSXVYRzVjYmlCVWFHVWdjMjltZEhkaGNtVWdiM0lnZEc5dmJITWdhVzRnZEdocGN5Qk1hV05sYm5ObElFRm5jbVZsYldWdWRDQmhjbVVnYkdsalpXNXpaV1FzSUc1dmRDQnpiMnhrTGx4dUlGaHBZVzFsYmlCWllXcHBJRk52Wm5SM1lYSmxJRU52TGl3Z1RIUmtMaUJ5WlhObGNuWmxjeUJoYkd3Z2NtbG5hSFJ6SUc1dmRDQmxlSEJ5WlhOemJIa2daM0poYm5SbFpDQjBieUI1YjNVdVhHNWNiaUJVU0VVZ1UwOUdWRmRCVWtVZ1NWTWdVRkpQVmtsRVJVUWdYQ0pCVXlCSlUxd2lMQ0JYU1ZSSVQxVlVJRmRCVWxKQlRsUlpJRTlHSUVGT1dTQkxTVTVFTENCRldGQlNSVk5USUU5U1hHNGdTVTFRVEVsRlJDd2dTVTVEVEZWRVNVNUhJRUpWVkNCT1QxUWdURWxOU1ZSRlJDQlVUeUJVU0VVZ1YwRlNVa0ZPVkVsRlV5QlBSaUJOUlZKRFNFRk9WRUZDU1V4SlZGa3NYRzRnUmtsVVRrVlRVeUJHVDFJZ1FTQlFRVkpVU1VOVlRFRlNJRkJWVWxCUFUwVWdRVTVFSUU1UFRrbE9SbEpKVGtkRlRVVk9WQzRnU1U0Z1RrOGdSVlpGVGxRZ1UwaEJURXdnVkVoRlhHNGdRVlZVU0U5U1V5QlBVaUJEVDFCWlVrbEhTRlFnU0U5TVJFVlNVeUJDUlNCTVNVRkNURVVnUms5U0lFRk9XU0JEVEVGSlRTd2dSRUZOUVVkRlV5QlBVaUJQVkVoRlVseHVJRXhKUVVKSlRFbFVXU3dnVjBoRlZFaEZVaUJKVGlCQlRpQkJRMVJKVDA0Z1QwWWdRMDlPVkZKQlExUXNJRlJQVWxRZ1QxSWdUMVJJUlZKWFNWTkZMQ0JCVWtsVFNVNUhJRVpTVDAwc1hHNGdUMVZVSUU5R0lFOVNJRWxPSUVOUFRrNUZRMVJKVDA0Z1YwbFVTQ0JVU0VVZ1UwOUdWRmRCVWtVZ1QxSWdWRWhGSUZWVFJTQlBVaUJQVkVoRlVpQkVSVUZNU1U1SFV5QkpUbHh1SUZSSVJTQlRUMFpVVjBGU1JTNWNiaUFxS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUwxeHVYRzR2S2lwY2JpQXFJRUJ0YjJSMWJHVWdaSEpoWjI5dVFtOXVaWE5jYmlBcUwxeHViR1YwSUVGeWJXRjBkWEpsUTJGamFHVWdQU0FoUTBOZlNsTkNJQ1ltSUhKbGNYVnBjbVVvSnk0dlFYSnRZWFIxY21WRFlXTm9aU2NwTG5Ob1lYSmxaRU5oWTJobE8xeHVYRzR2S2lwY2JpQXFJQ0VqWlc0Z1ZHaGxJSE5yWld4bGRHOXVJR0YwYkdGeklHUmhkR0VnYjJZZ1pISmhaMjl1UW05dVpYTXVYRzRnS2lBaEkzcG9JR1J5WVdkdmJrSnZibVZ6SU9lYWhPbXFxT21xdk9lNnVlZVFodWFWc09hTnJ1T0FnbHh1SUNvZ1FHTnNZWE56SUVSeVlXZHZia0p2Ym1WelFYUnNZWE5CYzNObGRGeHVJQ29nUUdWNGRHVnVaSE1nUVhOelpYUmNiaUFxTDF4dWRtRnlJRVJ5WVdkdmJrSnZibVZ6UVhSc1lYTkJjM05sZENBOUlHTmpMa05zWVhOektIdGNiaUFnSUNCdVlXMWxPaUFuWkhKaFoyOXVRbTl1WlhNdVJISmhaMjl1UW05dVpYTkJkR3hoYzBGemMyVjBKeXhjYmlBZ0lDQmxlSFJsYm1Sek9pQmpZeTVCYzNObGRDeGNibHh1SUNBZ0lHTjBiM0lnS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5amJHVmhjaWdwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0J3Y205d1pYSjBhV1Z6T2lCN1hHNGdJQ0FnSUNBZ0lGOWhkR3hoYzBwemIyNGdPaUFuSnl4Y2JseHVJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNvZ1FIQnliM0JsY25SNUlIdHpkSEpwYm1kOUlHRjBiR0Z6U25OdmJseHVJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnWVhSc1lYTktjMjl1T2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZllYUnNZWE5LYzI5dU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE5sZERvZ1puVnVZM1JwYjI0Z0tIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmWVhSc1lYTktjMjl1SUQwZ2RtRnNkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZZWFJzWVhOS2MyOXVSR0YwWVNBOUlFcFRUMDR1Y0dGeWMyVW9kR2hwY3k1aGRHeGhjMHB6YjI0cE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDJOc1pXRnlLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBzWEc1Y2JpQWdJQ0FnSUNBZ1gzUmxlSFIxY21VNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdSbFptRjFiSFE2SUc1MWJHd3NYRzRnSUNBZ0lDQWdJQ0FnSUNCMGVYQmxPaUJqWXk1VVpYaDBkWEpsTWtRc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjNKdFpYSnNlVk5sY21saGJHbDZaV1JCY3pvZ0ozUmxlSFIxY21VblhHNGdJQ0FnSUNBZ0lIMHNYRzVjYmlBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQXFJRUJ3Y205d1pYSjBlU0I3VkdWNGRIVnlaVEpFZlNCMFpYaDBkWEpsWEc0Z0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQjBaWGgwZFhKbE9pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCblpYUWdLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxsOTBaWGgwZFhKbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE5sZENBb2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDkwWlhoMGRYSmxJRDBnZG1Gc2RXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1ZlkyeGxZWElvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlN4Y2JseHVJQ0FnSUNBZ0lDQmZkR1Y0ZEhWeVpVRjBiR0Z6UkdGMFlUb2diblZzYkN4Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnYzNSaGRHbGpjem9nZTF4dUlDQWdJQ0FnSUNCd2NtVjJaVzUwUkdWbVpYSnlaV1JNYjJGa1JHVndaVzVrWlc1MGN6b2dkSEoxWlZ4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JqY21WaGRHVk9iMlJsT2lCRFExOUZSRWxVVDFJZ0ppWWdJR1oxYm1OMGFXOXVJQ2hqWVd4c1ltRmpheWtnZTF4dUlDQWdJQ0FnSUNCMllYSWdibTlrWlNBOUlHNWxkeUJqWXk1T2IyUmxLSFJvYVhNdWJtRnRaU2s3WEc0Z0lDQWdJQ0FnSUhaaGNpQmhjbTFoZEhWeVpVUnBjM0JzWVhrZ1BTQnViMlJsTG1Ga1pFTnZiWEJ2Ym1WdWRDaGtjbUZuYjI1Q2IyNWxjeTVCY20xaGRIVnlaVVJwYzNCc1lYa3BPMXh1SUNBZ0lDQWdJQ0JoY20xaGRIVnlaVVJwYzNCc1lYa3VaSEpoWjI5dVFYUnNZWE5CYzNObGRDQTlJSFJvYVhNN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHTmhiR3hpWVdOcktHNTFiR3dzSUc1dlpHVXBPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQnBibWwwSUNobVlXTjBiM0o1S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDJaaFkzUnZjbmtnUFNCbVlXTjBiM0o1TzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2doZEdocGN5NWZZWFJzWVhOS2MyOXVSR0YwWVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZZWFJzWVhOS2MyOXVSR0YwWVNBOUlFcFRUMDR1Y0dGeWMyVW9kR2hwY3k1aGRHeGhjMHB6YjI0cE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR3hsZENCaGRHeGhjMHB6YjI1UFltb2dQU0IwYUdsekxsOWhkR3hoYzBwemIyNUVZWFJoTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRWxtSUdOeVpXRjBaU0JpZVNCdFlXNTFZV3dzSUhWMWFXUWdhWE1nWlcxd2RIa3VYRzRnSUNBZ0lDQWdJSFJvYVhNdVgzVjFhV1FnUFNCMGFHbHpMbDkxZFdsa0lIeDhJR0YwYkdGelNuTnZiazlpYWk1dVlXMWxPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TGw5MFpYaDBkWEpsUVhSc1lYTkVZWFJoS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtWVdOMGIzSjVMbUZrWkZSbGVIUjFjbVZCZEd4aGMwUmhkR0VvZEdocGN5NWZkR1Y0ZEhWeVpVRjBiR0Z6UkdGMFlTd2dkR2hwY3k1ZmRYVnBaQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5MFpYaDBkWEpsUVhSc1lYTkVZWFJoSUQwZ1ptRmpkRzl5ZVM1d1lYSnpaVlJsZUhSMWNtVkJkR3hoYzBSaGRHRW9ZWFJzWVhOS2MyOXVUMkpxTENCMGFHbHpMblJsZUhSMWNtVXNJSFJvYVhNdVgzVjFhV1FwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlN4Y2JseHVJQ0FnSUY5amJHVmhjaUFvS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hEUTE5S1UwSXBJSEpsZEhWeWJqdGNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVYMlpoWTNSdmNua3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lFRnliV0YwZFhKbFEyRmphR1V1Y21WelpYUkJjbTFoZEhWeVpTaDBhR2x6TGw5MWRXbGtLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDJaaFkzUnZjbmt1Y21WdGIzWmxWR1Y0ZEhWeVpVRjBiR0Z6UkdGMFlTaDBhR2x6TGw5MWRXbGtMQ0IwY25WbEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYMlpoWTNSdmNua3VjbVZ0YjNabFJISmhaMjl1UW05dVpYTkVZWFJoUW5sVlZVbEVLSFJvYVhNdVgzVjFhV1FzSUhSeWRXVXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYM1JsZUhSMWNtVkJkR3hoYzBSaGRHRWdQU0J1ZFd4c08xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCa1pYTjBjbTk1SUNncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZlkyeGxZWElvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmYzNWd1pYSW9LVHRjYmlBZ0lDQjlMRnh1ZlNrN1hHNWNibVJ5WVdkdmJrSnZibVZ6TGtSeVlXZHZia0p2Ym1WelFYUnNZWE5CYzNObGRDQTlJRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdSSEpoWjI5dVFtOXVaWE5CZEd4aGMwRnpjMlYwTzF4dUlsMTkiXX0=