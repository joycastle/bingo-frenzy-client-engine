(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/physics/joint/CCWeldJoint.js';
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
        var PTM_RATIO = require('../CCPhysicsTypes').PTM_RATIO;
        var ANGLE_TO_PHYSICS_ANGLE = require('../CCPhysicsTypes').ANGLE_TO_PHYSICS_ANGLE;
        var WeldJoint = cc.Class({
            name: 'cc.WeldJoint',
            extends: cc.Joint,
            editor: CC_EDITOR && {
                inspector: 'packages://inspector/inspectors/comps/physics/joint.js',
                menu: 'i18n:MAIN_MENU.component.physics/Joint/Weld'
            },
            properties: {
                referenceAngle: {
                    default: 0,
                    tooltip: CC_DEV && 'i18n:COMPONENT.physics.physics_collider.referenceAngle'
                },
                _frequency: 0,
                _dampingRatio: 0,
                frequency: {
                    tooltip: CC_DEV && 'i18n:COMPONENT.physics.physics_collider.frequency',
                    get: function get() {
                        return this._frequency;
                    },
                    set: function set(value) {
                        this._frequency = value;
                        if (this._joint) {
                            this._joint.SetFrequency(value);
                        }
                    }
                },
                dampingRatio: {
                    tooltip: CC_DEV && 'i18n:COMPONENT.physics.physics_collider.dampingRatio',
                    get: function get() {
                        return this._dampingRatio;
                    },
                    set: function set(value) {
                        this._dampingRatio = value;
                        if (this._joint) {
                            this._joint.SetDampingRatio(value);
                        }
                    }
                }
            },
            _createJointDef: function _createJointDef() {
                var def = new b2.WeldJointDef();
                def.localAnchorA = new b2.Vec2(this.anchor.x / PTM_RATIO, this.anchor.y / PTM_RATIO);
                def.localAnchorB = new b2.Vec2(this.connectedAnchor.x / PTM_RATIO, this.connectedAnchor.y / PTM_RATIO);
                def.referenceAngle = this.referenceAngle * ANGLE_TO_PHYSICS_ANGLE;
                def.frequencyHz = this.frequency;
                def.dampingRatio = this.dampingRatio;
                return def;
            }
        });
        cc.WeldJoint = module.exports = WeldJoint;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDV2VsZEpvaW50LmpzIiwiL1VzZXJzL2dhb3lhbmcvV29ya1NwYWNlL2pveWNhc3RsZS9iaW5nby9jbGllbnQvYmluZ28vZW5naW5lL2NvY29zMmQvY29yZS9waHlzaWNzL2pvaW50L0NDV2VsZEpvaW50LmpzIl0sIm5hbWVzIjpbIlBUTV9SQVRJTyIsInJlcXVpcmUiLCJBTkdMRV9UT19QSFlTSUNTX0FOR0xFIiwiV2VsZEpvaW50IiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJleHRlbmRzIiwiSm9pbnQiLCJlZGl0b3IiLCJDQ19FRElUT1IiLCJpbnNwZWN0b3IiLCJtZW51IiwicHJvcGVydGllcyIsInJlZmVyZW5jZUFuZ2xlIiwiZGVmYXVsdCIsInRvb2x0aXAiLCJDQ19ERVYiLCJfZnJlcXVlbmN5IiwiX2RhbXBpbmdSYXRpbyIsImZyZXF1ZW5jeSIsImdldCIsInNldCIsInZhbHVlIiwiX2pvaW50IiwiU2V0RnJlcXVlbmN5IiwiZGFtcGluZ1JhdGlvIiwiU2V0RGFtcGluZ1JhdGlvIiwiX2NyZWF0ZUpvaW50RGVmIiwiZGVmIiwiYjIiLCJXZWxkSm9pbnREZWYiLCJsb2NhbEFuY2hvckEiLCJWZWMyIiwiYW5jaG9yIiwieCIsInkiLCJsb2NhbEFuY2hvckIiLCJjb25uZWN0ZWRBbmNob3IiLCJmcmVxdWVuY3lIeiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFBLE9BQUEsR0FBQSxPQUFBLE9BQUEsS0FBQSxXQUFBLElBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQTs7Ozs7Ozs7Ozs7OztRQTBCQSxJQUFJQSxTQUFBQSxHQUFZQyxPQUFBQSxDQUFRLG1CQUFSQSxFQUE2QkQsU0FBN0M7UUFDQSxJQUFJRSxzQkFBQUEsR0FBeUJELE9BQUFBLENBQVEsbUJBQVJBLEVBQTZCQyxzQkFBMUQ7UUFZQSxJQUFJQyxTQUFBQSxHQUFZQyxFQUFBQSxDQUFHQyxLQUFIRCxDQUFTO0FBQUEsWUFDckJFLElBQUFBLEVBQU0sY0FEZTtBQUFB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InNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDEzLTIwMTYgQ2h1a29uZyBUZWNobm9sb2dpZXMgSW5jLlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiAgbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxudmFyIFBUTV9SQVRJTyA9IHJlcXVpcmUoJy4uL0NDUGh5c2ljc1R5cGVzJykuUFRNX1JBVElPO1xudmFyIEFOR0xFX1RPX1BIWVNJQ1NfQU5HTEUgPSByZXF1aXJlKCcuLi9DQ1BoeXNpY3NUeXBlcycpLkFOR0xFX1RPX1BIWVNJQ1NfQU5HTEU7XG5cbi8qKlxuICogISNlblxuICogQSB3ZWxkIGpvaW50IGVzc2VudGlhbGx5IGdsdWVzIHR3byBib2RpZXMgdG9nZXRoZXIuIEEgd2VsZCBqb2ludCBtYXlcbiAqIGRpc3RvcnQgc29tZXdoYXQgYmVjYXVzZSB0aGUgaXNsYW5kIGNvbnN0cmFpbnQgc29sdmVyIGlzIGFwcHJveGltYXRlLlxuICogISN6aFxuICog54aU5o6l5YWz6IqC55u45b2T5LqO5bCG5Lik5Liq5Yia5L2T57KY5Zyo5LqG5LiA6LW344CCXG4gKiDnhpTmjqXlhbPoioLlj6/og73kvJrkvb/mn5DkupvkuJzopb/lpLHnnJ/vvIzlm6DkuLrnuqbmnZ/msYLop6Plmajnrpflh7rnmoTpg73mmK/ov5HkvLzlgLzjgIJcbiAqIEBjbGFzcyBXZWxkSm9pbnRcbiAqIEBleHRlbmRzIEpvaW50XG4gKi9cbnZhciBXZWxkSm9pbnQgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogJ2NjLldlbGRKb2ludCcsXG4gICAgZXh0ZW5kczogY2MuSm9pbnQsXG4gICAgXG4gICAgZWRpdG9yOiBDQ19FRElUT1IgJiYge1xuICAgICAgICBpbnNwZWN0b3I6ICdwYWNrYWdlczovL2luc3BlY3Rvci9pbnNwZWN0b3JzL2NvbXBzL3BoeXNpY3Mvam9pbnQuanMnLFxuICAgICAgICBtZW51OiAnaTE4bjpNQUlOX01FTlUuY29tcG9uZW50LnBoeXNpY3MvSm9pbnQvV2VsZCcsXG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICEjZW5cbiAgICAgICAgICogVGhlIHJlZmVyZW5jZSBhbmdsZS5cbiAgICAgICAgICogISN6aFxuICAgICAgICAgKiDnm7jlr7nop5LluqbjgIJcbiAgICAgICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHJlZmVyZW5jZUFuZ2xlXG4gICAgICAgICAqIEBkZWZhdWx0IDBcbiAgICAgICAgICovXG4gICAgICAgIHJlZmVyZW5jZUFuZ2xlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdpMThuOkNPTVBPTkVOVC5waHlzaWNzLnBoeXNpY3NfY29sbGlkZXIucmVmZXJlbmNlQW5nbGUnICAgICAgICAgICAgXG4gICAgICAgIH0sXG5cbiAgICAgICAgX2ZyZXF1ZW5jeTogMCxcbiAgICAgICAgX2RhbXBpbmdSYXRpbzogMCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogISNlblxuICAgICAgICAgKiBUaGUgZnJlcXVlbmN5LlxuICAgICAgICAgKiAhI3poXG4gICAgICAgICAqIOW8ueaAp+ezu+aVsOOAglxuICAgICAgICAgKiBAcHJvcGVydHkge051bWJlcn0gZnJlcXVlbmN5XG4gICAgICAgICAqIEBkZWZhdWx0IDBcbiAgICAgICAgICovXG4gICAgICAgIGZyZXF1ZW5jeToge1xuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdpMThuOkNPTVBPTkVOVC5waHlzaWNzLnBoeXNpY3NfY29sbGlkZXIuZnJlcXVlbmN5JyxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9mcmVxdWVuY3k7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mcmVxdWVuY3kgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fam9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fam9pbnQuU2V0RnJlcXVlbmN5KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICEjZW5cbiAgICAgICAgICogVGhlIGRhbXBpbmcgcmF0aW8uXG4gICAgICAgICAqICEjemhcbiAgICAgICAgICog6Zi75bC877yM6KGo56S65YWz6IqC5Y+Y5b2i5ZCO77yM5oGi5aSN5Yiw5Yid5aeL54q25oCB5Y+X5Yiw55qE6Zi75Yqb44CCXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBkYW1waW5nUmF0aW9cbiAgICAgICAgICogQHByb3BlcnR5IDBcbiAgICAgICAgICovXG4gICAgICAgIGRhbXBpbmdSYXRpbzoge1xuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdpMThuOkNPTVBPTkVOVC5waHlzaWNzLnBoeXNpY3NfY29sbGlkZXIuZGFtcGluZ1JhdGlvJywgICAgICAgICAgICBcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYW1waW5nUmF0aW87XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYW1waW5nUmF0aW8gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fam9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fam9pbnQuU2V0RGFtcGluZ1JhdGlvKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2NyZWF0ZUpvaW50RGVmOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkZWYgPSBuZXcgYjIuV2VsZEpvaW50RGVmKCk7XG4gICAgICAgIGRlZi5sb2NhbEFuY2hvckEgPSBuZXcgYjIuVmVjMih0aGlzLmFuY2hvci54L1BUTV9SQVRJTywgdGhpcy5hbmNob3IueS9QVE1fUkFUSU8pO1xuICAgICAgICBkZWYubG9jYWxBbmNob3JCID0gbmV3IGIyLlZlYzIodGhpcy5jb25uZWN0ZWRBbmNob3IueC9QVE1fUkFUSU8sIHRoaXMuY29ubmVjdGVkQW5jaG9yLnkvUFRNX1JBVElPKTtcbiAgICAgICAgZGVmLnJlZmVyZW5jZUFuZ2xlID0gdGhpcy5yZWZlcmVuY2VBbmdsZSAqIEFOR0xFX1RPX1BIWVNJQ1NfQU5HTEU7XG5cbiAgICAgICAgZGVmLmZyZXF1ZW5jeUh6ID0gdGhpcy5mcmVxdWVuY3k7XG4gICAgICAgIGRlZi5kYW1waW5nUmF0aW8gPSB0aGlzLmRhbXBpbmdSYXRpbztcblxuICAgICAgICByZXR1cm4gZGVmO1xuICAgIH1cbn0pO1xuXG5jYy5XZWxkSm9pbnQgPSBtb2R1bGUuZXhwb3J0cyA9IFdlbGRKb2ludDtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTMtMjAxNiBDaHVrb25nIFRlY2hub2xvZ2llcyBJbmMuXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuICBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXG4gIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiAgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIgUFRNX1JBVElPID0gcmVxdWlyZSgnLi4vQ0NQaHlzaWNzVHlwZXMnKS5QVE1fUkFUSU87XG52YXIgQU5HTEVfVE9fUEhZU0lDU19BTkdMRSA9IHJlcXVpcmUoJy4uL0NDUGh5c2ljc1R5cGVzJykuQU5HTEVfVE9fUEhZU0lDU19BTkdMRTtcblxuLyoqXG4gKiAhI2VuXG4gKiBBIHdlbGQgam9pbnQgZXNzZW50aWFsbHkgZ2x1ZXMgdHdvIGJvZGllcyB0b2dldGhlci4gQSB3ZWxkIGpvaW50IG1heVxuICogZGlzdG9ydCBzb21ld2hhdCBiZWNhdXNlIHRoZSBpc2xhbmQgY29uc3RyYWludCBzb2x2ZXIgaXMgYXBwcm94aW1hdGUuXG4gKiAhI3poXG4gKiDnhpTmjqXlhbPoioLnm7jlvZPkuo7lsIbkuKTkuKrliJrkvZPnspjlnKjkuobkuIDotbfjgIJcbiAqIOeGlOaOpeWFs+iKguWPr+iDveS8muS9v+afkOS6m+S4nOilv+Wkseecn++8jOWboOS4uue6puadn+axguino+WZqOeul+WHuueahOmDveaYr+i/keS8vOWAvOOAglxuICogQGNsYXNzIFdlbGRKb2ludFxuICogQGV4dGVuZHMgSm9pbnRcbiAqL1xudmFyIFdlbGRKb2ludCA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnY2MuV2VsZEpvaW50JyxcbiAgICBleHRlbmRzOiBjYy5Kb2ludCxcblxuICAgIGVkaXRvcjogQ0NfRURJVE9SICYmIHtcbiAgICAgICAgaW5zcGVjdG9yOiAncGFja2FnZXM6Ly9pbnNwZWN0b3IvaW5zcGVjdG9ycy9jb21wcy9waHlzaWNzL2pvaW50LmpzJyxcbiAgICAgICAgbWVudTogJ2kxOG46TUFJTl9NRU5VLmNvbXBvbmVudC5waHlzaWNzL0pvaW50L1dlbGQnXG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICEjZW5cbiAgICAgICAgICogVGhlIHJlZmVyZW5jZSBhbmdsZS5cbiAgICAgICAgICogISN6aFxuICAgICAgICAgKiDnm7jlr7nop5LluqbjgIJcbiAgICAgICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHJlZmVyZW5jZUFuZ2xlXG4gICAgICAgICAqIEBkZWZhdWx0IDBcbiAgICAgICAgICovXG4gICAgICAgIHJlZmVyZW5jZUFuZ2xlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdpMThuOkNPTVBPTkVOVC5waHlzaWNzLnBoeXNpY3NfY29sbGlkZXIucmVmZXJlbmNlQW5nbGUnXG4gICAgICAgIH0sXG5cbiAgICAgICAgX2ZyZXF1ZW5jeTogMCxcbiAgICAgICAgX2RhbXBpbmdSYXRpbzogMCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogISNlblxuICAgICAgICAgKiBUaGUgZnJlcXVlbmN5LlxuICAgICAgICAgKiAhI3poXG4gICAgICAgICAqIOW8ueaAp+ezu+aVsOOAglxuICAgICAgICAgKiBAcHJvcGVydHkge051bWJlcn0gZnJlcXVlbmN5XG4gICAgICAgICAqIEBkZWZhdWx0IDBcbiAgICAgICAgICovXG4gICAgICAgIGZyZXF1ZW5jeToge1xuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdpMThuOkNPTVBPTkVOVC5waHlzaWNzLnBoeXNpY3NfY29sbGlkZXIuZnJlcXVlbmN5JyxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9mcmVxdWVuY3k7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mcmVxdWVuY3kgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fam9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fam9pbnQuU2V0RnJlcXVlbmN5KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICEjZW5cbiAgICAgICAgICogVGhlIGRhbXBpbmcgcmF0aW8uXG4gICAgICAgICAqICEjemhcbiAgICAgICAgICog6Zi75bC877yM6KGo56S65YWz6IqC5Y+Y5b2i5ZCO77yM5oGi5aSN5Yiw5Yid5aeL54q25oCB5Y+X5Yiw55qE6Zi75Yqb44CCXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBkYW1waW5nUmF0aW9cbiAgICAgICAgICogQHByb3BlcnR5IDBcbiAgICAgICAgICovXG4gICAgICAgIGRhbXBpbmdSYXRpbzoge1xuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdpMThuOkNPTVBPTkVOVC5waHlzaWNzLnBoeXNpY3NfY29sbGlkZXIuZGFtcGluZ1JhdGlvJyxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYW1waW5nUmF0aW87XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYW1waW5nUmF0aW8gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fam9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fam9pbnQuU2V0RGFtcGluZ1JhdGlvKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2NyZWF0ZUpvaW50RGVmOiBmdW5jdGlvbiBfY3JlYXRlSm9pbnREZWYoKSB7XG4gICAgICAgIHZhciBkZWYgPSBuZXcgYjIuV2VsZEpvaW50RGVmKCk7XG4gICAgICAgIGRlZi5sb2NhbEFuY2hvckEgPSBuZXcgYjIuVmVjMih0aGlzLmFuY2hvci54IC8gUFRNX1JBVElPLCB0aGlzLmFuY2hvci55IC8gUFRNX1JBVElPKTtcbiAgICAgICAgZGVmLmxvY2FsQW5jaG9yQiA9IG5ldyBiMi5WZWMyKHRoaXMuY29ubmVjdGVkQW5jaG9yLnggLyBQVE1fUkFUSU8sIHRoaXMuY29ubmVjdGVkQW5jaG9yLnkgLyBQVE1fUkFUSU8pO1xuICAgICAgICBkZWYucmVmZXJlbmNlQW5nbGUgPSB0aGlzLnJlZmVyZW5jZUFuZ2xlICogQU5HTEVfVE9fUEhZU0lDU19BTkdMRTtcblxuICAgICAgICBkZWYuZnJlcXVlbmN5SHogPSB0aGlzLmZyZXF1ZW5jeTtcbiAgICAgICAgZGVmLmRhbXBpbmdSYXRpbyA9IHRoaXMuZGFtcGluZ1JhdGlvO1xuXG4gICAgICAgIHJldHVybiBkZWY7XG4gICAgfVxufSk7XG5cbmNjLldlbGRKb2ludCA9IG1vZHVsZS5leHBvcnRzID0gV2VsZEpvaW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtORFYyVnNaRXB2YVc1MExtcHpJbDBzSW01aGJXVnpJanBiSWxCVVRWOVNRVlJKVHlJc0luSmxjWFZwY21VaUxDSkJUa2RNUlY5VVQxOVFTRmxUU1VOVFgwRk9SMHhGSWl3aVYyVnNaRXB2YVc1MElpd2lZMk1pTENKRGJHRnpjeUlzSW01aGJXVWlMQ0psZUhSbGJtUnpJaXdpU205cGJuUWlMQ0psWkdsMGIzSWlMQ0pEUTE5RlJFbFVUMUlpTENKcGJuTndaV04wYjNJaUxDSnRaVzUxSWl3aWNISnZjR1Z5ZEdsbGN5SXNJbkpsWm1WeVpXNWpaVUZ1WjJ4bElpd2laR1ZtWVhWc2RDSXNJblJ2YjJ4MGFYQWlMQ0pEUTE5RVJWWWlMQ0pmWm5KbGNYVmxibU41SWl3aVgyUmhiWEJwYm1kU1lYUnBieUlzSW1aeVpYRjFaVzVqZVNJc0ltZGxkQ0lzSW5ObGRDSXNJblpoYkhWbElpd2lYMnB2YVc1MElpd2lVMlYwUm5KbGNYVmxibU41SWl3aVpHRnRjR2x1WjFKaGRHbHZJaXdpVTJWMFJHRnRjR2x1WjFKaGRHbHZJaXdpWDJOeVpXRjBaVXB2YVc1MFJHVm1JaXdpWkdWbUlpd2lZaklpTENKWFpXeGtTbTlwYm5SRVpXWWlMQ0pzYjJOaGJFRnVZMmh2Y2tFaUxDSldaV015SWl3aVlXNWphRzl5SWl3aWVDSXNJbmtpTENKc2IyTmhiRUZ1WTJodmNrSWlMQ0pqYjI1dVpXTjBaV1JCYm1Ob2IzSWlMQ0ptY21WeGRXVnVZM2xJZWlJc0ltMXZaSFZzWlNJc0ltVjRjRzl5ZEhNaVhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJNRUpCTEVsQlFVbEJMRmxCUVZsRExGRkJRVkVzYlVKQlFWSXNSVUZCTmtKRUxGTkJRVGRETzBGQlEwRXNTVUZCU1VVc2VVSkJRWGxDUkN4UlFVRlJMRzFDUVVGU0xFVkJRVFpDUXl4elFrRkJNVVE3TzBGQlJVRTdPenM3T3pzN096czdRVUZWUVN4SlFVRkpReXhaUVVGWlF5eEhRVUZIUXl4TFFVRklMRU5CUVZNN1FVRkRja0pETEZWQlFVMHNZMEZFWlR0QlFVVnlRa01zWVVGQlUwZ3NSMEZCUjBrc1MwRkdVenM3UVVGSmNrSkRMRmxCUVZGRExHRkJRV0U3UVVGRGFrSkRMRzFDUVVGWExIZEVRVVJOTzBGQlJXcENReXhqUVVGTk8wRkJSbGNzUzBGS1FUczdRVUZUY2tKRExHZENRVUZaTzBGQlExSTdPenM3T3pzN08wRkJVVUZETEhkQ1FVRm5RanRCUVVOYVF5eHhRa0ZCVXl4RFFVUkhPMEZCUlZwRExIRkNRVUZUUXl4VlFVRlZPMEZCUmxBc1UwRlVVanM3UVVGalVrTXNiMEpCUVZrc1EwRmtTanRCUVdWU1F5eDFRa0ZCWlN4RFFXWlFPenRCUVdsQ1VqczdPenM3T3pzN1FVRlJRVU1zYlVKQlFWYzdRVUZEVUVvc2NVSkJRVk5ETEZWQlFWVXNiVVJCUkZvN1FVRkZVRWtzYVVKQlFVc3NaVUZCV1R0QlFVTmlMSFZDUVVGUExFdEJRVXRJTEZWQlFWbzdRVUZEU0N4aFFVcE5PMEZCUzFCSkxHbENRVUZMTEdGQlFWVkRMRXRCUVZZc1JVRkJhVUk3UVVGRGJFSXNjVUpCUVV0TUxGVkJRVXdzUjBGQmEwSkxMRXRCUVd4Q08wRkJRMEVzYjBKQlFVa3NTMEZCUzBNc1RVRkJWQ3hGUVVGcFFqdEJRVU5pTEhsQ1FVRkxRU3hOUVVGTUxFTkJRVmxETEZsQlFWb3NRMEZCZVVKR0xFdEJRWHBDTzBGQlEwZzdRVUZEU2p0QlFWWk5MRk5CZWtKSU96dEJRWE5EVWpzN096czdPenM3UVVGUlFVY3NjMEpCUVdNN1FVRkRWbFlzY1VKQlFWTkRMRlZCUVZVc2MwUkJSRlE3UVVGRlZra3NhVUpCUVVzc1pVRkJXVHRCUVVOaUxIVkNRVUZQTEV0QlFVdEdMR0ZCUVZvN1FVRkRTQ3hoUVVwVE8wRkJTMVpITEdsQ1FVRkxMR0ZCUVZWRExFdEJRVllzUlVGQmFVSTdRVUZEYkVJc2NVSkJRVXRLTEdGQlFVd3NSMEZCY1VKSkxFdEJRWEpDTzBGQlEwRXNiMEpCUVVrc1MwRkJTME1zVFVGQlZDeEZRVUZwUWp0QlFVTmlMSGxDUVVGTFFTeE5RVUZNTEVOQlFWbEhMR1ZCUVZvc1EwRkJORUpLTEV0QlFUVkNPMEZCUTBnN1FVRkRTanRCUVZaVE8wRkJPVU5PTEV0QlZGTTdPMEZCY1VWeVFrc3NjVUpCUVdsQ0xESkNRVUZaTzBGQlEzcENMRmxCUVVsRExFMUJRVTBzU1VGQlNVTXNSMEZCUjBNc1dVRkJVQ3hGUVVGV08wRkJRMEZHTEZsQlFVbEhMRmxCUVVvc1IwRkJiVUlzU1VGQlNVWXNSMEZCUjBjc1NVRkJVQ3hEUVVGWkxFdEJRVXRETEUxQlFVd3NRMEZCV1VNc1EwRkJXaXhIUVVGamJrTXNVMEZCTVVJc1JVRkJjVU1zUzBGQlMydERMRTFCUVV3c1EwRkJXVVVzUTBGQldpeEhRVUZqY0VNc1UwRkJia1FzUTBGQmJrSTdRVUZEUVRaQ0xGbEJRVWxSTEZsQlFVb3NSMEZCYlVJc1NVRkJTVkFzUjBGQlIwY3NTVUZCVUN4RFFVRlpMRXRCUVV0TExHVkJRVXdzUTBGQmNVSklMRU5CUVhKQ0xFZEJRWFZDYmtNc1UwRkJia01zUlVGQk9FTXNTMEZCUzNORExHVkJRVXdzUTBGQmNVSkdMRU5CUVhKQ0xFZEJRWFZDY0VNc1UwRkJja1VzUTBGQmJrSTdRVUZEUVRaQ0xGbEJRVWxtTEdOQlFVb3NSMEZCY1VJc1MwRkJTMEVzWTBGQlRDeEhRVUZ6UWxvc2MwSkJRVE5ET3p0QlFVVkJNa0lzV1VGQlNWVXNWMEZCU2l4SFFVRnJRaXhMUVVGTGJrSXNVMEZCZGtJN1FVRkRRVk1zV1VGQlNVZ3NXVUZCU2l4SFFVRnRRaXhMUVVGTFFTeFpRVUY0UWpzN1FVRkZRU3hsUVVGUFJ5eEhRVUZRTzBGQlEwZzdRVUV2Ulc5Q0xFTkJRVlFzUTBGQmFFSTdPMEZCYTBaQmVrSXNSMEZCUjBRc1UwRkJTQ3hIUVVGbGNVTXNUMEZCVDBNc1QwRkJVQ3hIUVVGcFFuUkRMRk5CUVdoRElpd2labWxzWlNJNklrTkRWMlZzWkVwdmFXNTBMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaXBjYmlCRGIzQjVjbWxuYUhRZ0tHTXBJREl3TVRNdE1qQXhOaUJEYUhWcmIyNW5JRlJsWTJodWIyeHZaMmxsY3lCSmJtTXVYRzRnUTI5d2VYSnBaMmgwSUNoaktTQXlNREUzTFRJd01UZ2dXR2xoYldWdUlGbGhhbWtnVTI5bWRIZGhjbVVnUTI4dUxDQk1kR1F1WEc1Y2JpQm9kSFJ3Y3pvdkwzZDNkeTVqYjJOdmN5NWpiMjB2WEc1Y2JpQlFaWEp0YVhOemFXOXVJR2x6SUdobGNtVmllU0JuY21GdWRHVmtMQ0JtY21WbElHOW1JR05vWVhKblpTd2dkRzhnWVc1NUlIQmxjbk52YmlCdlluUmhhVzVwYm1jZ1lTQmpiM0I1WEc0Z2IyWWdkR2hwY3lCemIyWjBkMkZ5WlNCaGJtUWdZWE56YjJOcFlYUmxaQ0JsYm1kcGJtVWdjMjkxY21ObElHTnZaR1VnS0hSb1pTQmNJbE52Wm5SM1lYSmxYQ0lwTENCaElHeHBiV2wwWldRc1hHNGdJSGR2Y214a2QybGtaU3dnY205NVlXeDBlUzFtY21WbExDQnViMjR0WVhOemFXZHVZV0pzWlN3Z2NtVjJiMk5oWW14bElHRnVaQ0J1YjI0dFpYaGpiSFZ6YVhabElHeHBZMlZ1YzJWY2JpQjBieUIxYzJVZ1EyOWpiM01nUTNKbFlYUnZjaUJ6YjJ4bGJIa2dkRzhnWkdWMlpXeHZjQ0JuWVcxbGN5QnZiaUI1YjNWeUlIUmhjbWRsZENCd2JHRjBabTl5YlhNdUlGbHZkU0J6YUdGc2JGeHVJQ0J1YjNRZ2RYTmxJRU52WTI5eklFTnlaV0YwYjNJZ2MyOW1kSGRoY21VZ1ptOXlJR1JsZG1Wc2IzQnBibWNnYjNSb1pYSWdjMjltZEhkaGNtVWdiM0lnZEc5dmJITWdkR2hoZENkelhHNGdJSFZ6WldRZ1ptOXlJR1JsZG1Wc2IzQnBibWNnWjJGdFpYTXVJRmx2ZFNCaGNtVWdibTkwSUdkeVlXNTBaV1FnZEc4Z2NIVmliR2x6YUN3Z1pHbHpkSEpwWW5WMFpTeGNiaUFnYzNWaWJHbGpaVzV6WlN3Z1lXNWtMMjl5SUhObGJHd2dZMjl3YVdWeklHOW1JRU52WTI5eklFTnlaV0YwYjNJdVhHNWNiaUJVYUdVZ2MyOW1kSGRoY21VZ2IzSWdkRzl2YkhNZ2FXNGdkR2hwY3lCTWFXTmxibk5sSUVGbmNtVmxiV1Z1ZENCaGNtVWdiR2xqWlc1elpXUXNJRzV2ZENCemIyeGtMbHh1SUZocFlXMWxiaUJaWVdwcElGTnZablIzWVhKbElFTnZMaXdnVEhSa0xpQnlaWE5sY25abGN5QmhiR3dnY21sbmFIUnpJRzV2ZENCbGVIQnlaWE56YkhrZ1ozSmhiblJsWkNCMGJ5QjViM1V1WEc1Y2JpQlVTRVVnVTA5R1ZGZEJVa1VnU1ZNZ1VGSlBWa2xFUlVRZ1hDSkJVeUJKVTF3aUxDQlhTVlJJVDFWVUlGZEJVbEpCVGxSWklFOUdJRUZPV1NCTFNVNUVMQ0JGV0ZCU1JWTlRJRTlTWEc0Z1NVMVFURWxGUkN3Z1NVNURURlZFU1U1SElFSlZWQ0JPVDFRZ1RFbE5TVlJGUkNCVVR5QlVTRVVnVjBGU1VrRk9WRWxGVXlCUFJpQk5SVkpEU0VGT1ZFRkNTVXhKVkZrc1hHNGdSa2xVVGtWVFV5QkdUMUlnUVNCUVFWSlVTVU5WVEVGU0lGQlZVbEJQVTBVZ1FVNUVJRTVQVGtsT1JsSkpUa2RGVFVWT1ZDNGdTVTRnVGs4Z1JWWkZUbFFnVTBoQlRFd2dWRWhGWEc0Z1FWVlVTRTlTVXlCUFVpQkRUMUJaVWtsSFNGUWdTRTlNUkVWU1V5QkNSU0JNU1VGQ1RFVWdSazlTSUVGT1dTQkRURUZKVFN3Z1JFRk5RVWRGVXlCUFVpQlBWRWhGVWx4dUlFeEpRVUpKVEVsVVdTd2dWMGhGVkVoRlVpQkpUaUJCVGlCQlExUkpUMDRnVDBZZ1EwOU9WRkpCUTFRc0lGUlBVbFFnVDFJZ1QxUklSVkpYU1ZORkxDQkJVa2xUU1U1SElFWlNUMDBzWEc0Z1QxVlVJRTlHSUU5U0lFbE9JRU5QVGs1RlExUkpUMDRnVjBsVVNDQlVTRVVnVTA5R1ZGZEJVa1VnVDFJZ1ZFaEZJRlZUUlNCUFVpQlBWRWhGVWlCRVJVRk1TVTVIVXlCSlRseHVJRlJJUlNCVFQwWlVWMEZTUlM1Y2JpQXFLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xTDF4dVhHNTJZWElnVUZSTlgxSkJWRWxQSUQwZ2NtVnhkV2x5WlNnbkxpNHZRME5RYUhsemFXTnpWSGx3WlhNbktTNVFWRTFmVWtGVVNVODdYRzUyWVhJZ1FVNUhURVZmVkU5ZlVFaFpVMGxEVTE5QlRrZE1SU0E5SUhKbGNYVnBjbVVvSnk0dUwwTkRVR2g1YzJsamMxUjVjR1Z6SnlrdVFVNUhURVZmVkU5ZlVFaFpVMGxEVTE5QlRrZE1SVHRjYmx4dUx5b3FYRzRnS2lBaEkyVnVYRzRnS2lCQklIZGxiR1FnYW05cGJuUWdaWE56Wlc1MGFXRnNiSGtnWjJ4MVpYTWdkSGR2SUdKdlpHbGxjeUIwYjJkbGRHaGxjaTRnUVNCM1pXeGtJR3B2YVc1MElHMWhlVnh1SUNvZ1pHbHpkRzl5ZENCemIyMWxkMmhoZENCaVpXTmhkWE5sSUhSb1pTQnBjMnhoYm1RZ1kyOXVjM1J5WVdsdWRDQnpiMngyWlhJZ2FYTWdZWEJ3Y205NGFXMWhkR1V1WEc0Z0tpQWhJM3BvWEc0Z0tpRG5ocFRtanFYbGhiUG9pb0xubTdqbHZaUGt1bzdsc0lia3VLVGt1S3JsaUpya3ZaUG5zcGpsbktqa3VvYmt1SURvdGJmamdJSmNiaUFxSU9lR2xPYU9wZVdGcytpS2d1V1ByK2lEdmVTOG11Uzl2K2Fma09TNm0rUzRuT2lsditXa3NlZWNuKys4ak9XYm9PUzR1dWU2cHVhZG4rYXhndWlubytXWnFPZXVsK1dIdXVlYWhPbUR2ZWFZcitpL2tlUzh2T1dBdk9PQWdseHVJQ29nUUdOc1lYTnpJRmRsYkdSS2IybHVkRnh1SUNvZ1FHVjRkR1Z1WkhNZ1NtOXBiblJjYmlBcUwxeHVkbUZ5SUZkbGJHUktiMmx1ZENBOUlHTmpMa05zWVhOektIdGNiaUFnSUNCdVlXMWxPaUFuWTJNdVYyVnNaRXB2YVc1MEp5eGNiaUFnSUNCbGVIUmxibVJ6T2lCall5NUtiMmx1ZEN4Y2JpQWdJQ0JjYmlBZ0lDQmxaR2wwYjNJNklFTkRYMFZFU1ZSUFVpQW1KaUI3WEc0Z0lDQWdJQ0FnSUdsdWMzQmxZM1J2Y2pvZ0ozQmhZMnRoWjJWek9pOHZhVzV6Y0dWamRHOXlMMmx1YzNCbFkzUnZjbk12WTI5dGNITXZjR2g1YzJsamN5OXFiMmx1ZEM1cWN5Y3NYRzRnSUNBZ0lDQWdJRzFsYm5VNklDZHBNVGh1T2sxQlNVNWZUVVZPVlM1amIyMXdiMjVsYm5RdWNHaDVjMmxqY3k5S2IybHVkQzlYWld4a0p5eGNiaUFnSUNCOUxGeHVYRzRnSUNBZ2NISnZjR1Z5ZEdsbGN6b2dlMXh1SUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDb2dJU05sYmx4dUlDQWdJQ0FnSUNBZ0tpQlVhR1VnY21WbVpYSmxibU5sSUdGdVoyeGxMbHh1SUNBZ0lDQWdJQ0FnS2lBaEkzcG9YRzRnSUNBZ0lDQWdJQ0FxSU9lYnVPV3Z1ZWlua3VXNnB1T0FnbHh1SUNBZ0lDQWdJQ0FnS2lCQWNISnZjR1Z5ZEhrZ2UwNTFiV0psY24wZ2NtVm1aWEpsYm1ObFFXNW5iR1ZjYmlBZ0lDQWdJQ0FnSUNvZ1FHUmxabUYxYkhRZ01GeHVJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnY21WbVpYSmxibU5sUVc1bmJHVTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxabUYxYkhRNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCMGIyOXNkR2x3T2lCRFExOUVSVllnSmlZZ0oya3hPRzQ2UTA5TlVFOU9SVTVVTG5Cb2VYTnBZM011Y0doNWMybGpjMTlqYjJ4c2FXUmxjaTV5WldabGNtVnVZMlZCYm1kc1pTY2dJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnZlN4Y2JseHVJQ0FnSUNBZ0lDQmZabkpsY1hWbGJtTjVPaUF3TEZ4dUlDQWdJQ0FnSUNCZlpHRnRjR2x1WjFKaGRHbHZPaUF3TEZ4dVhHNGdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnS2lBaEkyVnVYRzRnSUNBZ0lDQWdJQ0FxSUZSb1pTQm1jbVZ4ZFdWdVkza3VYRzRnSUNBZ0lDQWdJQ0FxSUNFamVtaGNiaUFnSUNBZ0lDQWdJQ29nNWJ5NTVvQ241N083NXBXdzQ0Q0NYRzRnSUNBZ0lDQWdJQ0FxSUVCd2NtOXdaWEowZVNCN1RuVnRZbVZ5ZlNCbWNtVnhkV1Z1WTNsY2JpQWdJQ0FnSUNBZ0lDb2dRR1JsWm1GMWJIUWdNRnh1SUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ1puSmxjWFZsYm1ONU9pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGIyOXNkR2x3T2lCRFExOUVSVllnSmlZZ0oya3hPRzQ2UTA5TlVFOU9SVTVVTG5Cb2VYTnBZM011Y0doNWMybGpjMTlqYjJ4c2FXUmxjaTVtY21WeGRXVnVZM2tuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaMlYwT2lCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11WDJaeVpYRjFaVzVqZVR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpaWFE2SUdaMWJtTjBhVzl1SUNoMllXeDFaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYMlp5WlhGMVpXNWplU0E5SUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbDlxYjJsdWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDlxYjJsdWRDNVRaWFJHY21WeGRXVnVZM2tvZG1Gc2RXVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU3hjYmx4dUlDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ29nSVNObGJseHVJQ0FnSUNBZ0lDQWdLaUJVYUdVZ1pHRnRjR2x1WnlCeVlYUnBieTVjYmlBZ0lDQWdJQ0FnSUNvZ0lTTjZhRnh1SUNBZ0lDQWdJQ0FnS2lEcG1MdmxzTHp2dkl6b29ham5wTHJsaGJQb2lvTGxqNWpsdmFMbGtJN3Z2SXptZ2FMbHBJM2xpTERsaUozbHA0dm5pcmJtZ0lIbGo1ZmxpTERubW9UcG1MdmxpcHZqZ0lKY2JpQWdJQ0FnSUNBZ0lDb2dRSEJ5YjNCbGNuUjVJSHRPZFcxaVpYSjlJR1JoYlhCcGJtZFNZWFJwYjF4dUlDQWdJQ0FnSUNBZ0tpQkFjSEp2Y0dWeWRIa2dNRnh1SUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ1pHRnRjR2x1WjFKaGRHbHZPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBiMjlzZEdsd09pQkRRMTlFUlZZZ0ppWWdKMmt4T0c0NlEwOU5VRTlPUlU1VUxuQm9lWE5wWTNNdWNHaDVjMmxqYzE5amIyeHNhV1JsY2k1a1lXMXdhVzVuVW1GMGFXOG5MQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdaMlYwT2lCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11WDJSaGJYQnBibWRTWVhScGJ6dGNiaUFnSUNBZ0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6WlhRNklHWjFibU4wYVc5dUlDaDJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDJSaGJYQnBibWRTWVhScGJ5QTlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxsOXFiMmx1ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOXFiMmx1ZEM1VFpYUkVZVzF3YVc1blVtRjBhVzhvZG1Gc2RXVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmZZM0psWVhSbFNtOXBiblJFWldZNklHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHUmxaaUE5SUc1bGR5QmlNaTVYWld4a1NtOXBiblJFWldZb0tUdGNiaUFnSUNBZ0lDQWdaR1ZtTG14dlkyRnNRVzVqYUc5eVFTQTlJRzVsZHlCaU1pNVdaV015S0hSb2FYTXVZVzVqYUc5eUxuZ3ZVRlJOWDFKQlZFbFBMQ0IwYUdsekxtRnVZMmh2Y2k1NUwxQlVUVjlTUVZSSlR5azdYRzRnSUNBZ0lDQWdJR1JsWmk1c2IyTmhiRUZ1WTJodmNrSWdQU0J1WlhjZ1lqSXVWbVZqTWloMGFHbHpMbU52Ym01bFkzUmxaRUZ1WTJodmNpNTRMMUJVVFY5U1FWUkpUeXdnZEdocGN5NWpiMjV1WldOMFpXUkJibU5vYjNJdWVTOVFWRTFmVWtGVVNVOHBPMXh1SUNBZ0lDQWdJQ0JrWldZdWNtVm1aWEpsYm1ObFFXNW5iR1VnUFNCMGFHbHpMbkpsWm1WeVpXNWpaVUZ1WjJ4bElDb2dRVTVIVEVWZlZFOWZVRWhaVTBsRFUxOUJUa2RNUlR0Y2JseHVJQ0FnSUNBZ0lDQmtaV1l1Wm5KbGNYVmxibU41U0hvZ1BTQjBhR2x6TG1aeVpYRjFaVzVqZVR0Y2JpQWdJQ0FnSUNBZ1pHVm1MbVJoYlhCcGJtZFNZWFJwYnlBOUlIUm9hWE11WkdGdGNHbHVaMUpoZEdsdk8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmtaV1k3WEc0Z0lDQWdmVnh1ZlNrN1hHNWNibU5qTGxkbGJHUktiMmx1ZENBOUlHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1YyVnNaRXB2YVc1ME8xeHVJbDE5Il19