(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/components/CCToggleContainer.js';
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
        var ToggleContainer = cc.Class({
            name: 'cc.ToggleContainer',
            extends: cc.Component,
            editor: CC_EDITOR && {
                menu: 'i18n:MAIN_MENU.component.ui/ToggleContainer',
                help: 'i18n:COMPONENT.help_url.toggleContainer',
                executeInEditMode: true
            },
            properties: {
                allowSwitchOff: {
                    tooltip: CC_DEV && 'i18n:COMPONENT.toggle_group.allowSwitchOff',
                    default: false
                },
                checkEvents: {
                    default: [],
                    type: cc.Component.EventHandler
                }
            },
            updateToggles: function updateToggles(toggle) {
                if (!this.enabledInHierarchy)
                    return;
                if (toggle.isChecked) {
                    this.toggleItems.forEach(function (item) {
                        if (item !== toggle && item.isChecked && item.enabled) {
                            item._hideCheckMark();
                        }
                    });
                    if (this.checkEvents) {
                        cc.Component.EventHandler.emitEvents(this.checkEvents, toggle);
                    }
                }
            },
            _allowOnlyOneToggleChecked: function _allowOnlyOneToggleChecked() {
                var isChecked = false;
                this.toggleItems.forEach(function (item) {
                    if (isChecked) {
                        item._hideCheckMark();
                    } else if (item.isChecked) {
                        isChecked = true;
                    }
                });
                return isChecked;
            },
            _makeAtLeastOneToggleChecked: function _makeAtLeastOneToggleChecked() {
                var isChecked = this._allowOnlyOneToggleChecked();
                if (!isChecked && !this.allowSwitchOff) {
                    var toggleItems = this.toggleItems;
                    if (toggleItems.length > 0) {
                        toggleItems[0].check();
                    }
                }
            },
            onEnable: function onEnable() {
                this.node.on('child-added', this._allowOnlyOneToggleChecked, this);
                this.node.on('child-removed', this._makeAtLeastOneToggleChecked, this);
            },
            onDisable: function onDisable() {
                this.node.off('child-added', this._allowOnlyOneToggleChecked, this);
                this.node.off('child-removed', this._makeAtLeastOneToggleChecked, this);
            },
            start: function start() {
                this._makeAtLeastOneToggleChecked();
            }
        });
        var js = require('../platform/js');
        js.get(ToggleContainer.prototype, 'toggleItems', function () {
            return this.node.getComponentsInChildren(cc.Toggle);
        });
        cc.ToggleContainer = module.exports = ToggleContainer;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDVG9nZ2xlQ29udGFpbmVyLmpzIiwiL1VzZXJzL1NoYXJlZC9iaW5nb19mcmVuenkvZW5naW5lL2NvY29zMmQvY29yZS9jb21wb25lbnRzL0NDVG9nZ2xlQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIlRvZ2dsZUNvbnRhaW5lciIsImNjIiwiQ2xhc3MiLCJuYW1lIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsImVkaXRvciIsIkNDX0VESVRPUiIsIm1lbnUiLCJoZWxwIiwiZXhlY3V0ZUluRWRpdE1vZGUiLCJwcm9wZXJ0aWVzIiwiYWxsb3dTd2l0Y2hPZmYiLCJ0b29sdGlwIiwiQ0NfREVWIiwiZGVmYXVsdCIsImNoZWNrRXZlbnRzIiwidHlwZSIsIkV2ZW50SGFuZGxlciIsInVwZGF0ZVRvZ2dsZXMiLCJ0b2dnbGUiLCJlbmFibGVkSW5IaWVyYXJjaHkiLCJpc0NoZWNrZWQiLCJ0b2dnbGVJdGVtcyIsImZvckVhY2giLCJpdGVtIiwiZW5hYmxlZCIsIl9oaWRlQ2hlY2tNYXJrIiwiZW1pdEV2ZW50cyIsIl9hbGxvd09ubHlPbmVUb2dnbGVDaGVja2VkIiwiX21ha2VBdExlYXN0T25lVG9nZ2xlQ2hlY2tlZCIsImxlbmd0aCIsImNoZWNrIiwib25FbmFibGUiLCJub2RlIiwib24iLCJvbkRpc2FibGUiLCJvZmYiLCJzdGFydCIsImpzIiwicmVxdWlyZSIsImdldCIsInByb3RvdHlwZSIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwiVG9nZ2xlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxXQUFBOzs7Ozs7Ozs7Ozs7O1FBb0NBLElBQUlBLGVBQUFBLEdBQWtCQyxFQUFBQSxDQUFHQyxLQUFIRCxDQUFTO0FBQUEsWUFDM0JFLElBQUFBLEVBQU0sb0JBRHFCO0FBQUEsWUFFM0JDLE9BQUFBLEVBQVNILEVBQUFBLENBQUdJLFNBRmU7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LElBQWpFLEVBRmtCO0FBQUEsYUExRUs7QUFBQSxZQStFM0JNLFNBQUFBLEVBQVcsU0FBQSxTQUFBLEdBQVk7QUFBQSxnQkFDbkIsS0FBS0YsSUFBTCxDQUFVRyxHQUFWLENBQWMsYUFBZCxFQUE2QixLQUFLUiwwQkFBbEMsRUFBOEQsSUFBOUQsRUFEbUI7QUFBQSxnQkFFbkIsS0FBS0ssSUFBTCxDQUFVRyxHQUFWLENBQWMsZUFBZCxFQUErQixLQUFLUCw0QkFBcEMsRUFBa0UsSUFBbEUsRUFGbUI7QUFBQSxhQS9FSTtBQUFBLFlBb0YzQlEsS0FBQUEsRUFBTyxTQUFBLEtBQUEsR0FBWTtBQUFBLGdCQUNmLEtBQUtSLDRCQUFMLEdBRGU7QUFBQSxhQXBGUTtBQUFBLFNBQVQ3QixDQUF0QjtRQThGQSxJQUFJc0MsRUFBQUEsR0FBS0MsT0FBQUEsQ0FBUSxnQkFBUkEsQ0FBVDtRQUNBRCxFQUFBQSxDQUFHRSxHQUFIRixDQUFPdkMsZUFBQUEsQ0FBZ0IwQyxTQUF2QkgsRUFBa0MsYUFBbENBLEVBQ0ksWUFBWTtBQUFBLFlBQ1IsT0FBTyxLQUFLTCxJQUFMLENBQVVTLHVCQUFWLENBQWtDMUMsRUFBQUEsQ0FBRzJDLE1BQXJDLENBQVAsQ0FEUTtBQUFBLFNBRGhCTDtRQU1BdEMsRUFBQUEsQ0FBR0QsZUFBSEMsR0FBcUI0QyxNQUFBQSxDQUFPQyxPQUFQRCxHQUFpQjdDLGVBQXRDQyIsImZpbGUiOiJDQ1RvZ2dsZUNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDEzLTIwMTYgQ2h1a29uZyBUZWNobm9sb2dpZXMgSW5jLlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiAgbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiAhI2VuIFRvZ2dsZUNvbnRhaW5lciBpcyBub3QgYSB2aXNpYWJsZSBVSSBjb21wb25lbnQgYnV0IGEgd2F5IHRvIG1vZGlmeSB0aGUgYmVoYXZpb3Igb2YgYSBzZXQgb2YgVG9nZ2xlcy4gPGJyLz5cbiAqIFRvZ2dsZXMgdGhhdCBiZWxvbmcgdG8gdGhlIHNhbWUgZ3JvdXAgY291bGQgb25seSBoYXZlIG9uZSBvZiB0aGVtIHRvIGJlIHN3aXRjaGVkIG9uIGF0IGEgdGltZS48YnIvPlxuICogTm90ZTogQWxsIHRoZSBmaXJzdCBsYXllciBjaGlsZCBub2RlIGNvbnRhaW5pbmcgdGhlIHRvZ2dsZSBjb21wb25lbnQgd2lsbCBhdXRvIGJlIGFkZGVkIHRvIHRoZSBjb250YWluZXJcbiAqICEjemggVG9nZ2xlQ29udGFpbmVyIOS4jeaYr+S4gOS4quWPr+ingeeahCBVSSDnu4Tku7bvvIzlroPlj6/ku6XnlKjmnaXkv67mlLnkuIDnu4QgVG9nZ2xlIOe7hOS7tueahOihjOS4uuOAgjxici8+XG4gKiDlvZPkuIDnu4QgVG9nZ2xlIOWxnuS6juWQjOS4gOS4qiBUb2dnbGVDb250YWluZXIg55qE5pe25YCZ77yM5Lu75L2V5pe25YCZ5Y+q6IO95pyJ5LiA5LiqIFRvZ2dsZSDlpITkuo7pgInkuK3nirbmgIHjgII8YnIvPlxuICog5rOo5oSP77ya5omA5pyJ5YyF5ZCrIFRvZ2dsZSDnu4Tku7bnmoTkuIDnuqflrZDoioLngrnpg73kvJroh6rliqjooqvmt7vliqDliLDor6XlrrnlmajkuK1cbiAqIEBjbGFzcyBUb2dnbGVDb250YWluZXJcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG52YXIgVG9nZ2xlQ29udGFpbmVyID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdjYy5Ub2dnbGVDb250YWluZXInLFxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBlZGl0b3I6IENDX0VESVRPUiAmJiB7XG4gICAgICAgIG1lbnU6ICdpMThuOk1BSU5fTUVOVS5jb21wb25lbnQudWkvVG9nZ2xlQ29udGFpbmVyJyxcbiAgICAgICAgaGVscDogJ2kxOG46Q09NUE9ORU5ULmhlbHBfdXJsLnRvZ2dsZUNvbnRhaW5lcicsXG4gICAgICAgIGV4ZWN1dGVJbkVkaXRNb2RlOiB0cnVlXG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICEjZW4gSWYgdGhpcyBzZXR0aW5nIGlzIHRydWUsIGEgdG9nZ2xlIGNvdWxkIGJlIHN3aXRjaGVkIG9mZiBhbmQgb24gd2hlbiBwcmVzc2VkLlxuICAgICAgICAgKiBJZiBpdCBpcyBmYWxzZSwgaXQgd2lsbCBtYWtlIHN1cmUgdGhlcmUgaXMgYWx3YXlzIG9ubHkgb25lIHRvZ2dsZSBjb3VsZCBiZSBzd2l0Y2hlZCBvblxuICAgICAgICAgKiBhbmQgdGhlIGFscmVhZHkgc3dpdGNoZWQgb24gdG9nZ2xlIGNhbid0IGJlIHN3aXRjaGVkIG9mZi5cbiAgICAgICAgICogISN6aCDlpoLmnpzov5nkuKrorr7nva7kuLogdHJ1Ze+8jCDpgqPkuYggdG9nZ2xlIOaMiemSruWcqOiiq+eCueWHu+eahOaXtuWAmeWPr+S7peWPjeWkjeWcsOiiq+mAieS4reWSjOacqumAieS4reOAglxuICAgICAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFsbG93U3dpdGNoT2ZmXG4gICAgICAgICAqL1xuICAgICAgICBhbGxvd1N3aXRjaE9mZjoge1xuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdpMThuOkNPTVBPTkVOVC50b2dnbGVfZ3JvdXAuYWxsb3dTd2l0Y2hPZmYnLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogISNlbiBJZiBUb2dnbGUgaXMgY2xpY2tlZCwgaXQgd2lsbCB0cmlnZ2VyIGV2ZW50J3MgaGFuZGxlclxuICAgICAgICAgKiAhI3poIFRvZ2dsZSDmjInpkq7nmoTngrnlh7vkuovku7bliJfooajjgIJcbiAgICAgICAgICogQHByb3BlcnR5IHtDb21wb25lbnQuRXZlbnRIYW5kbGVyW119IGNoZWNrRXZlbnRzXG4gICAgICAgICAqL1xuICAgICAgICBjaGVja0V2ZW50czoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHVwZGF0ZVRvZ2dsZXM6IGZ1bmN0aW9uICh0b2dnbGUpIHtcbiAgICAgICAgaWYoIXRoaXMuZW5hYmxlZEluSGllcmFyY2h5KSByZXR1cm47XG5cbiAgICAgICAgaWYgKHRvZ2dsZS5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9PSB0b2dnbGUgJiYgaXRlbS5pc0NoZWNrZWQgJiYgaXRlbS5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uX2hpZGVDaGVja01hcmsoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tFdmVudHMpIHtcbiAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHModGhpcy5jaGVja0V2ZW50cywgdG9nZ2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfYWxsb3dPbmx5T25lVG9nZ2xlQ2hlY2tlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudG9nZ2xlSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uX2hpZGVDaGVja01hcmsoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0uaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGlzQ2hlY2tlZDtcbiAgICB9LFxuXG4gICAgX21ha2VBdExlYXN0T25lVG9nZ2xlQ2hlY2tlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNDaGVja2VkID0gdGhpcy5fYWxsb3dPbmx5T25lVG9nZ2xlQ2hlY2tlZCgpO1xuXG4gICAgICAgIGlmICghaXNDaGVja2VkICYmICF0aGlzLmFsbG93U3dpdGNoT2ZmKSB7XG4gICAgICAgICAgICB2YXIgdG9nZ2xlSXRlbXMgPSB0aGlzLnRvZ2dsZUl0ZW1zO1xuICAgICAgICAgICAgaWYgKHRvZ2dsZUl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVJdGVtc1swXS5jaGVjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbignY2hpbGQtYWRkZWQnLCB0aGlzLl9hbGxvd09ubHlPbmVUb2dnbGVDaGVja2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdjaGlsZC1yZW1vdmVkJywgdGhpcy5fbWFrZUF0TGVhc3RPbmVUb2dnbGVDaGVja2VkLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoJ2NoaWxkLWFkZGVkJywgdGhpcy5fYWxsb3dPbmx5T25lVG9nZ2xlQ2hlY2tlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoJ2NoaWxkLXJlbW92ZWQnLCB0aGlzLl9tYWtlQXRMZWFzdE9uZVRvZ2dsZUNoZWNrZWQsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9tYWtlQXRMZWFzdE9uZVRvZ2dsZUNoZWNrZWQoKTtcbiAgICB9XG59KTtcblxuLyoqXG4gKiAhI2VuIFJlYWQgb25seSBwcm9wZXJ0eSwgcmV0dXJuIHRoZSB0b2dnbGUgaXRlbXMgYXJyYXkgcmVmZXJlbmNlIG1hbmFnZWQgYnkgVG9nZ2xlQ29udGFpbmVyLlxuICogISN6aCDlj6ror7vlsZ7mgKfvvIzov5Tlm54gVG9nZ2xlQ29udGFpbmVyIOeuoeeQhueahCB0b2dnbGUg5pWw57uE5byV55SoXG4gKiBAcHJvcGVydHkge1RvZ2dsZVtdfSB0b2dnbGVJdGVtc1xuICovXG52YXIganMgPSByZXF1aXJlKCcuLi9wbGF0Zm9ybS9qcycpO1xuanMuZ2V0KFRvZ2dsZUNvbnRhaW5lci5wcm90b3R5cGUsICd0b2dnbGVJdGVtcycsXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLlRvZ2dsZSk7XG4gICAgfVxuKTtcblxuY2MuVG9nZ2xlQ29udGFpbmVyID0gbW9kdWxlLmV4cG9ydHMgPSBUb2dnbGVDb250YWluZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDEzLTIwMTYgQ2h1a29uZyBUZWNobm9sb2dpZXMgSW5jLlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiAgbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiAhI2VuIFRvZ2dsZUNvbnRhaW5lciBpcyBub3QgYSB2aXNpYWJsZSBVSSBjb21wb25lbnQgYnV0IGEgd2F5IHRvIG1vZGlmeSB0aGUgYmVoYXZpb3Igb2YgYSBzZXQgb2YgVG9nZ2xlcy4gPGJyLz5cbiAqIFRvZ2dsZXMgdGhhdCBiZWxvbmcgdG8gdGhlIHNhbWUgZ3JvdXAgY291bGQgb25seSBoYXZlIG9uZSBvZiB0aGVtIHRvIGJlIHN3aXRjaGVkIG9uIGF0IGEgdGltZS48YnIvPlxuICogTm90ZTogQWxsIHRoZSBmaXJzdCBsYXllciBjaGlsZCBub2RlIGNvbnRhaW5pbmcgdGhlIHRvZ2dsZSBjb21wb25lbnQgd2lsbCBhdXRvIGJlIGFkZGVkIHRvIHRoZSBjb250YWluZXJcbiAqICEjemggVG9nZ2xlQ29udGFpbmVyIOS4jeaYr+S4gOS4quWPr+ingeeahCBVSSDnu4Tku7bvvIzlroPlj6/ku6XnlKjmnaXkv67mlLnkuIDnu4QgVG9nZ2xlIOe7hOS7tueahOihjOS4uuOAgjxici8+XG4gKiDlvZPkuIDnu4QgVG9nZ2xlIOWxnuS6juWQjOS4gOS4qiBUb2dnbGVDb250YWluZXIg55qE5pe25YCZ77yM5Lu75L2V5pe25YCZ5Y+q6IO95pyJ5LiA5LiqIFRvZ2dsZSDlpITkuo7pgInkuK3nirbmgIHjgII8YnIvPlxuICog5rOo5oSP77ya5omA5pyJ5YyF5ZCrIFRvZ2dsZSDnu4Tku7bnmoTkuIDnuqflrZDoioLngrnpg73kvJroh6rliqjooqvmt7vliqDliLDor6XlrrnlmajkuK1cbiAqIEBjbGFzcyBUb2dnbGVDb250YWluZXJcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG52YXIgVG9nZ2xlQ29udGFpbmVyID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdjYy5Ub2dnbGVDb250YWluZXInLFxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBlZGl0b3I6IENDX0VESVRPUiAmJiB7XG4gICAgICAgIG1lbnU6ICdpMThuOk1BSU5fTUVOVS5jb21wb25lbnQudWkvVG9nZ2xlQ29udGFpbmVyJyxcbiAgICAgICAgaGVscDogJ2kxOG46Q09NUE9ORU5ULmhlbHBfdXJsLnRvZ2dsZUNvbnRhaW5lcicsXG4gICAgICAgIGV4ZWN1dGVJbkVkaXRNb2RlOiB0cnVlXG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICEjZW4gSWYgdGhpcyBzZXR0aW5nIGlzIHRydWUsIGEgdG9nZ2xlIGNvdWxkIGJlIHN3aXRjaGVkIG9mZiBhbmQgb24gd2hlbiBwcmVzc2VkLlxuICAgICAgICAgKiBJZiBpdCBpcyBmYWxzZSwgaXQgd2lsbCBtYWtlIHN1cmUgdGhlcmUgaXMgYWx3YXlzIG9ubHkgb25lIHRvZ2dsZSBjb3VsZCBiZSBzd2l0Y2hlZCBvblxuICAgICAgICAgKiBhbmQgdGhlIGFscmVhZHkgc3dpdGNoZWQgb24gdG9nZ2xlIGNhbid0IGJlIHN3aXRjaGVkIG9mZi5cbiAgICAgICAgICogISN6aCDlpoLmnpzov5nkuKrorr7nva7kuLogdHJ1Ze+8jCDpgqPkuYggdG9nZ2xlIOaMiemSruWcqOiiq+eCueWHu+eahOaXtuWAmeWPr+S7peWPjeWkjeWcsOiiq+mAieS4reWSjOacqumAieS4reOAglxuICAgICAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFsbG93U3dpdGNoT2ZmXG4gICAgICAgICAqL1xuICAgICAgICBhbGxvd1N3aXRjaE9mZjoge1xuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdpMThuOkNPTVBPTkVOVC50b2dnbGVfZ3JvdXAuYWxsb3dTd2l0Y2hPZmYnLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogISNlbiBJZiBUb2dnbGUgaXMgY2xpY2tlZCwgaXQgd2lsbCB0cmlnZ2VyIGV2ZW50J3MgaGFuZGxlclxuICAgICAgICAgKiAhI3poIFRvZ2dsZSDmjInpkq7nmoTngrnlh7vkuovku7bliJfooajjgIJcbiAgICAgICAgICogQHByb3BlcnR5IHtDb21wb25lbnQuRXZlbnRIYW5kbGVyW119IGNoZWNrRXZlbnRzXG4gICAgICAgICAqL1xuICAgICAgICBjaGVja0V2ZW50czoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlVG9nZ2xlczogZnVuY3Rpb24gdXBkYXRlVG9nZ2xlcyh0b2dnbGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWRJbkhpZXJhcmNoeSkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0b2dnbGUuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPT0gdG9nZ2xlICYmIGl0ZW0uaXNDaGVja2VkICYmIGl0ZW0uZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLl9oaWRlQ2hlY2tNYXJrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKHRoaXMuY2hlY2tFdmVudHMsIHRvZ2dsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2FsbG93T25seU9uZVRvZ2dsZUNoZWNrZWQ6IGZ1bmN0aW9uIF9hbGxvd09ubHlPbmVUb2dnbGVDaGVja2VkKCkge1xuICAgICAgICB2YXIgaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudG9nZ2xlSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uX2hpZGVDaGVja01hcmsoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBpc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaXNDaGVja2VkO1xuICAgIH0sXG5cbiAgICBfbWFrZUF0TGVhc3RPbmVUb2dnbGVDaGVja2VkOiBmdW5jdGlvbiBfbWFrZUF0TGVhc3RPbmVUb2dnbGVDaGVja2VkKCkge1xuICAgICAgICB2YXIgaXNDaGVja2VkID0gdGhpcy5fYWxsb3dPbmx5T25lVG9nZ2xlQ2hlY2tlZCgpO1xuXG4gICAgICAgIGlmICghaXNDaGVja2VkICYmICF0aGlzLmFsbG93U3dpdGNoT2ZmKSB7XG4gICAgICAgICAgICB2YXIgdG9nZ2xlSXRlbXMgPSB0aGlzLnRvZ2dsZUl0ZW1zO1xuICAgICAgICAgICAgaWYgKHRvZ2dsZUl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVJdGVtc1swXS5jaGVjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbiBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdjaGlsZC1hZGRlZCcsIHRoaXMuX2FsbG93T25seU9uZVRvZ2dsZUNoZWNrZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oJ2NoaWxkLXJlbW92ZWQnLCB0aGlzLl9tYWtlQXRMZWFzdE9uZVRvZ2dsZUNoZWNrZWQsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBvbkRpc2FibGU6IGZ1bmN0aW9uIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZignY2hpbGQtYWRkZWQnLCB0aGlzLl9hbGxvd09ubHlPbmVUb2dnbGVDaGVja2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9mZignY2hpbGQtcmVtb3ZlZCcsIHRoaXMuX21ha2VBdExlYXN0T25lVG9nZ2xlQ2hlY2tlZCwgdGhpcyk7XG4gICAgfSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5fbWFrZUF0TGVhc3RPbmVUb2dnbGVDaGVja2VkKCk7XG4gICAgfVxufSk7XG5cbi8qKlxuICogISNlbiBSZWFkIG9ubHkgcHJvcGVydHksIHJldHVybiB0aGUgdG9nZ2xlIGl0ZW1zIGFycmF5IHJlZmVyZW5jZSBtYW5hZ2VkIGJ5IFRvZ2dsZUNvbnRhaW5lci5cbiAqICEjemgg5Y+q6K+75bGe5oCn77yM6L+U5ZueIFRvZ2dsZUNvbnRhaW5lciDnrqHnkIbnmoQgdG9nZ2xlIOaVsOe7hOW8leeUqFxuICogQHByb3BlcnR5IHtUb2dnbGVbXX0gdG9nZ2xlSXRlbXNcbiAqL1xudmFyIGpzID0gcmVxdWlyZSgnLi4vcGxhdGZvcm0vanMnKTtcbmpzLmdldChUb2dnbGVDb250YWluZXIucHJvdG90eXBlLCAndG9nZ2xlSXRlbXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5Ub2dnbGUpO1xufSk7XG5cbmNjLlRvZ2dsZUNvbnRhaW5lciA9IG1vZHVsZS5leHBvcnRzID0gVG9nZ2xlQ29udGFpbmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtORFZHOW5aMnhsUTI5dWRHRnBibVZ5TG1weklsMHNJbTVoYldWeklqcGJJbFJ2WjJkc1pVTnZiblJoYVc1bGNpSXNJbU5qSWl3aVEyeGhjM01pTENKdVlXMWxJaXdpWlhoMFpXNWtjeUlzSWtOdmJYQnZibVZ1ZENJc0ltVmthWFJ2Y2lJc0lrTkRYMFZFU1ZSUFVpSXNJbTFsYm5VaUxDSm9aV3h3SWl3aVpYaGxZM1YwWlVsdVJXUnBkRTF2WkdVaUxDSndjbTl3WlhKMGFXVnpJaXdpWVd4c2IzZFRkMmwwWTJoUFptWWlMQ0owYjI5c2RHbHdJaXdpUTBOZlJFVldJaXdpWkdWbVlYVnNkQ0lzSW1Ob1pXTnJSWFpsYm5Seklpd2lkSGx3WlNJc0lrVjJaVzUwU0dGdVpHeGxjaUlzSW5Wd1pHRjBaVlJ2WjJkc1pYTWlMQ0owYjJkbmJHVWlMQ0psYm1GaWJHVmtTVzVJYVdWeVlYSmphSGtpTENKcGMwTm9aV05yWldRaUxDSjBiMmRuYkdWSmRHVnRjeUlzSW1admNrVmhZMmdpTENKcGRHVnRJaXdpWlc1aFlteGxaQ0lzSWw5b2FXUmxRMmhsWTJ0TllYSnJJaXdpWlcxcGRFVjJaVzUwY3lJc0lsOWhiR3h2ZDA5dWJIbFBibVZVYjJkbmJHVkRhR1ZqYTJWa0lpd2lYMjFoYTJWQmRFeGxZWE4wVDI1bFZHOW5aMnhsUTJobFkydGxaQ0lzSW14bGJtZDBhQ0lzSW1Ob1pXTnJJaXdpYjI1RmJtRmliR1VpTENKdWIyUmxJaXdpYjI0aUxDSnZia1JwYzJGaWJHVWlMQ0p2Wm1ZaUxDSnpkR0Z5ZENJc0ltcHpJaXdpY21WeGRXbHlaU0lzSW1kbGRDSXNJbkJ5YjNSdmRIbHdaU0lzSW1kbGRFTnZiWEJ2Ym1WdWRITkpia05vYVd4a2NtVnVJaXdpVkc5bloyeGxJaXdpYlc5a2RXeGxJaXdpWlhod2IzSjBjeUpkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVFd1FrRTdPenM3T3pzN096czdRVUZWUVN4SlFVRkpRU3hyUWtGQmEwSkRMRWRCUVVkRExFdEJRVWdzUTBGQlV6dEJRVU16UWtNc1ZVRkJUU3h2UWtGRWNVSTdRVUZGTTBKRExHRkJRVk5JTEVkQlFVZEpMRk5CUm1VN1FVRkhNMEpETEZsQlFWRkRMR0ZCUVdFN1FVRkRha0pETEdOQlFVMHNOa05CUkZjN1FVRkZha0pETEdOQlFVMHNlVU5CUmxjN1FVRkhha0pETERKQ1FVRnRRanRCUVVoR0xFdEJTRTA3TzBGQlV6TkNReXhuUWtGQldUdEJRVU5TT3pzN096czdPMEZCVDBGRExIZENRVUZuUWp0QlFVTmFReXh4UWtGQlUwTXNWVUZCVlN3MFEwRkVVRHRCUVVWYVF5eHhRa0ZCVXp0QlFVWkhMRk5CVWxJN08wRkJZVkk3T3pzN08wRkJTMEZETEhGQ1FVRmhPMEZCUTFSRUxIRkNRVUZUTEVWQlJFRTdRVUZGVkVVc2EwSkJRVTFvUWl4SFFVRkhTU3hUUVVGSUxFTkJRV0ZoTzBGQlJsWTdRVUZzUWt3c1MwRlVaVHM3UVVGcFF6TkNReXh0UWtGQlpTeDFRa0ZCVlVNc1RVRkJWaXhGUVVGclFqdEJRVU0zUWl4WlFVRkhMRU5CUVVNc1MwRkJTME1zYTBKQlFWUXNSVUZCTmtJN08wRkJSVGRDTEZsQlFVbEVMRTlCUVU5RkxGTkJRVmdzUlVGQmMwSTdRVUZEYkVJc2FVSkJRVXRETEZkQlFVd3NRMEZCYVVKRExFOUJRV3BDTEVOQlFYbENMRlZCUVZWRExFbEJRVllzUlVGQlowSTdRVUZEY2tNc2IwSkJRVWxCTEZOQlFWTk1MRTFCUVZRc1NVRkJiVUpMTEV0QlFVdElMRk5CUVhoQ0xFbEJRWEZEUnl4TFFVRkxReXhQUVVFNVF5eEZRVUYxUkR0QlFVTnVSRVFzZVVKQlFVdEZMR05CUVV3N1FVRkRTRHRCUVVOS0xHRkJTa1E3TzBGQlRVRXNaMEpCUVVrc1MwRkJTMWdzVjBGQlZDeEZRVUZ6UWp0QlFVTnNRbVlzYlVKQlFVZEpMRk5CUVVnc1EwRkJZV0VzV1VGQllpeERRVUV3UWxVc1ZVRkJNVUlzUTBGQmNVTXNTMEZCUzFvc1YwRkJNVU1zUlVGQmRVUkpMRTFCUVhaRU8wRkJRMGc3UVVGRFNqdEJRVU5LTEV0QkwwTXdRanM3UVVGcFJETkNVeXhuUTBGQk5FSXNjME5CUVZrN1FVRkRjRU1zV1VGQlNWQXNXVUZCV1N4TFFVRm9RanRCUVVOQkxHRkJRVXRETEZkQlFVd3NRMEZCYVVKRExFOUJRV3BDTEVOQlFYbENMRlZCUVZWRExFbEJRVllzUlVGQlowSTdRVUZEY2tNc1owSkJRVWxJTEZOQlFVb3NSVUZCWlR0QlFVTllSeXh4UWtGQlMwVXNZMEZCVER0QlFVTklMR0ZCUmtRc1RVRkhTeXhKUVVGSlJpeExRVUZMU0N4VFFVRlVMRVZCUVc5Q08wRkJRM0pDUVN3MFFrRkJXU3hKUVVGYU8wRkJRMGc3UVVGRFNpeFRRVkJFT3p0QlFWTkJMR1ZCUVU5QkxGTkJRVkE3UVVGRFNDeExRVGRFTUVJN08wRkJLMFF6UWxFc2EwTkJRVGhDTEhkRFFVRlpPMEZCUTNSRExGbEJRVWxTTEZsQlFWa3NTMEZCUzA4c01FSkJRVXdzUlVGQmFFSTdPMEZCUlVFc1dVRkJTU3hEUVVGRFVDeFRRVUZFTEVsQlFXTXNRMEZCUXl4TFFVRkxWaXhqUVVGNFFpeEZRVUYzUXp0QlFVTndReXhuUWtGQlNWY3NZMEZCWXl4TFFVRkxRU3hYUVVGMlFqdEJRVU5CTEdkQ1FVRkpRU3haUVVGWlVTeE5RVUZhTEVkQlFYRkNMRU5CUVhwQ0xFVkJRVFJDTzBGQlEzaENVaXcwUWtGQldTeERRVUZhTEVWQlFXVlRMRXRCUVdZN1FVRkRTRHRCUVVOS08wRkJRMG9zUzBGNFJUQkNPenRCUVRCRk0wSkRMR05CUVZVc2IwSkJRVms3UVVGRGJFSXNZVUZCUzBNc1NVRkJUQ3hEUVVGVlF5eEZRVUZXTEVOQlFXRXNZVUZCWWl4RlFVRTBRaXhMUVVGTFRpd3dRa0ZCYWtNc1JVRkJOa1FzU1VGQk4wUTdRVUZEUVN4aFFVRkxTeXhKUVVGTUxFTkJRVlZETEVWQlFWWXNRMEZCWVN4bFFVRmlMRVZCUVRoQ0xFdEJRVXRNTERSQ1FVRnVReXhGUVVGcFJTeEpRVUZxUlR0QlFVTklMRXRCTjBVd1FqczdRVUVyUlROQ1RTeGxRVUZYTEhGQ1FVRlpPMEZCUTI1Q0xHRkJRVXRHTEVsQlFVd3NRMEZCVlVjc1IwRkJWaXhEUVVGakxHRkJRV1FzUlVGQk5rSXNTMEZCUzFJc01FSkJRV3hETEVWQlFUaEVMRWxCUVRsRU8wRkJRMEVzWVVGQlMwc3NTVUZCVEN4RFFVRlZSeXhIUVVGV0xFTkJRV01zWlVGQlpDeEZRVUVyUWl4TFFVRkxVQ3cwUWtGQmNFTXNSVUZCYTBVc1NVRkJiRVU3UVVGRFNDeExRV3hHTUVJN08wRkJiMFl6UWxFc1YwRkJUeXhwUWtGQldUdEJRVU5tTEdGQlFVdFNMRFJDUVVGTU8wRkJRMGc3UVVGMFJqQkNMRU5CUVZRc1EwRkJkRUk3TzBGQmVVWkJPenM3T3p0QlFVdEJMRWxCUVVsVExFdEJRVXRETEZGQlFWRXNaMEpCUVZJc1EwRkJWRHRCUVVOQlJDeEhRVUZIUlN4SFFVRklMRU5CUVU5NlF5eG5Ra0ZCWjBJd1F5eFRRVUYyUWl4RlFVRnJReXhoUVVGc1F5eEZRVU5KTEZsQlFWazdRVUZEVWl4WFFVRlBMRXRCUVV0U0xFbEJRVXdzUTBGQlZWTXNkVUpCUVZZc1EwRkJhME14UXl4SFFVRkhNa01zVFVGQmNrTXNRMEZCVUR0QlFVTklMRU5CU0V3N08wRkJUVUV6UXl4SFFVRkhSQ3hsUVVGSUxFZEJRWEZDTmtNc1QwRkJUME1zVDBGQlVDeEhRVUZwUWpsRExHVkJRWFJESWl3aVptbHNaU0k2SWtORFZHOW5aMnhsUTI5dWRHRnBibVZ5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQkRiM0I1Y21sbmFIUWdLR01wSURJd01UTXRNakF4TmlCRGFIVnJiMjVuSUZSbFkyaHViMnh2WjJsbGN5QkpibU11WEc0Z1EyOXdlWEpwWjJoMElDaGpLU0F5TURFM0xUSXdNVGdnV0dsaGJXVnVJRmxoYW1rZ1UyOW1kSGRoY21VZ1EyOHVMQ0JNZEdRdVhHNWNiaUJvZEhSd2N6b3ZMM2QzZHk1amIyTnZjeTVqYjIwdlhHNWNiaUJRWlhKdGFYTnphVzl1SUdseklHaGxjbVZpZVNCbmNtRnVkR1ZrTENCbWNtVmxJRzltSUdOb1lYSm5aU3dnZEc4Z1lXNTVJSEJsY25OdmJpQnZZblJoYVc1cGJtY2dZU0JqYjNCNVhHNGdiMllnZEdocGN5QnpiMlowZDJGeVpTQmhibVFnWVhOemIyTnBZWFJsWkNCbGJtZHBibVVnYzI5MWNtTmxJR052WkdVZ0tIUm9aU0JjSWxOdlpuUjNZWEpsWENJcExDQmhJR3hwYldsMFpXUXNYRzRnSUhkdmNteGtkMmxrWlN3Z2NtOTVZV3gwZVMxbWNtVmxMQ0J1YjI0dFlYTnphV2R1WVdKc1pTd2djbVYyYjJOaFlteGxJR0Z1WkNCdWIyNHRaWGhqYkhWemFYWmxJR3hwWTJWdWMyVmNiaUIwYnlCMWMyVWdRMjlqYjNNZ1EzSmxZWFJ2Y2lCemIyeGxiSGtnZEc4Z1pHVjJaV3h2Y0NCbllXMWxjeUJ2YmlCNWIzVnlJSFJoY21kbGRDQndiR0YwWm05eWJYTXVJRmx2ZFNCemFHRnNiRnh1SUNCdWIzUWdkWE5sSUVOdlkyOXpJRU55WldGMGIzSWdjMjltZEhkaGNtVWdabTl5SUdSbGRtVnNiM0JwYm1jZ2IzUm9aWElnYzI5bWRIZGhjbVVnYjNJZ2RHOXZiSE1nZEdoaGRDZHpYRzRnSUhWelpXUWdabTl5SUdSbGRtVnNiM0JwYm1jZ1oyRnRaWE11SUZsdmRTQmhjbVVnYm05MElHZHlZVzUwWldRZ2RHOGdjSFZpYkdsemFDd2daR2x6ZEhKcFluVjBaU3hjYmlBZ2MzVmliR2xqWlc1elpTd2dZVzVrTDI5eUlITmxiR3dnWTI5d2FXVnpJRzltSUVOdlkyOXpJRU55WldGMGIzSXVYRzVjYmlCVWFHVWdjMjltZEhkaGNtVWdiM0lnZEc5dmJITWdhVzRnZEdocGN5Qk1hV05sYm5ObElFRm5jbVZsYldWdWRDQmhjbVVnYkdsalpXNXpaV1FzSUc1dmRDQnpiMnhrTGx4dUlGaHBZVzFsYmlCWllXcHBJRk52Wm5SM1lYSmxJRU52TGl3Z1RIUmtMaUJ5WlhObGNuWmxjeUJoYkd3Z2NtbG5hSFJ6SUc1dmRDQmxlSEJ5WlhOemJIa2daM0poYm5SbFpDQjBieUI1YjNVdVhHNWNiaUJVU0VVZ1UwOUdWRmRCVWtVZ1NWTWdVRkpQVmtsRVJVUWdYQ0pCVXlCSlUxd2lMQ0JYU1ZSSVQxVlVJRmRCVWxKQlRsUlpJRTlHSUVGT1dTQkxTVTVFTENCRldGQlNSVk5USUU5U1hHNGdTVTFRVEVsRlJDd2dTVTVEVEZWRVNVNUhJRUpWVkNCT1QxUWdURWxOU1ZSRlJDQlVUeUJVU0VVZ1YwRlNVa0ZPVkVsRlV5QlBSaUJOUlZKRFNFRk9WRUZDU1V4SlZGa3NYRzRnUmtsVVRrVlRVeUJHVDFJZ1FTQlFRVkpVU1VOVlRFRlNJRkJWVWxCUFUwVWdRVTVFSUU1UFRrbE9SbEpKVGtkRlRVVk9WQzRnU1U0Z1RrOGdSVlpGVGxRZ1UwaEJURXdnVkVoRlhHNGdRVlZVU0U5U1V5QlBVaUJEVDFCWlVrbEhTRlFnU0U5TVJFVlNVeUJDUlNCTVNVRkNURVVnUms5U0lFRk9XU0JEVEVGSlRTd2dSRUZOUVVkRlV5QlBVaUJQVkVoRlVseHVJRXhKUVVKSlRFbFVXU3dnVjBoRlZFaEZVaUJKVGlCQlRpQkJRMVJKVDA0Z1QwWWdRMDlPVkZKQlExUXNJRlJQVWxRZ1QxSWdUMVJJUlZKWFNWTkZMQ0JCVWtsVFNVNUhJRVpTVDAwc1hHNGdUMVZVSUU5R0lFOVNJRWxPSUVOUFRrNUZRMVJKVDA0Z1YwbFVTQ0JVU0VVZ1UwOUdWRmRCVWtVZ1QxSWdWRWhGSUZWVFJTQlBVaUJQVkVoRlVpQkVSVUZNU1U1SFV5QkpUbHh1SUZSSVJTQlRUMFpVVjBGU1JTNWNiaUFxS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUwxeHVYRzR2S2lwY2JpQXFJQ0VqWlc0Z1ZHOW5aMnhsUTI5dWRHRnBibVZ5SUdseklHNXZkQ0JoSUhacGMybGhZbXhsSUZWSklHTnZiWEJ2Ym1WdWRDQmlkWFFnWVNCM1lYa2dkRzhnYlc5a2FXWjVJSFJvWlNCaVpXaGhkbWx2Y2lCdlppQmhJSE5sZENCdlppQlViMmRuYkdWekxpQThZbkl2UGx4dUlDb2dWRzluWjJ4bGN5QjBhR0YwSUdKbGJHOXVaeUIwYnlCMGFHVWdjMkZ0WlNCbmNtOTFjQ0JqYjNWc1pDQnZibXg1SUdoaGRtVWdiMjVsSUc5bUlIUm9aVzBnZEc4Z1ltVWdjM2RwZEdOb1pXUWdiMjRnWVhRZ1lTQjBhVzFsTGp4aWNpOCtYRzRnS2lCT2IzUmxPaUJCYkd3Z2RHaGxJR1pwY25OMElHeGhlV1Z5SUdOb2FXeGtJRzV2WkdVZ1kyOXVkR0ZwYm1sdVp5QjBhR1VnZEc5bloyeGxJR052YlhCdmJtVnVkQ0IzYVd4c0lHRjFkRzhnWW1VZ1lXUmtaV1FnZEc4Z2RHaGxJR052Ym5SaGFXNWxjbHh1SUNvZ0lTTjZhQ0JVYjJkbmJHVkRiMjUwWVdsdVpYSWc1TGlONXBpdjVMaUE1TGlxNVkrdjZLZUI1NXFFSUZWSklPZTdoT1M3dHUrOGpPV3VnK1dQcitTN3BlZVVxT2FkcGVTL3J1YVV1ZVM0Z09lN2hDQlViMmRuYkdVZzU3dUU1THUyNTVxRTZLR001TGk2NDRDQ1BHSnlMejVjYmlBcUlPVzlrK1M0Z09lN2hDQlViMmRuYkdVZzViR2U1THFPNVpDTTVMaUE1TGlxSUZSdloyZHNaVU52Ym5SaGFXNWxjaURubW9UbWw3YmxnSm52dkl6a3U3dmt2WlhtbDdibGdKbmxqNnJvZzczbW5Jbmt1SURrdUtvZ1ZHOW5aMnhsSU9Xa2hPUzZqdW1BaWVTNHJlZUt0dWFBZ2VPQWdqeGljaTgrWEc0Z0tpRG1zNmptaEkvdnZKcm1pWURtbklubGpJWGxrS3NnVkc5bloyeGxJT2U3aE9TN3R1ZWFoT1M0Z09lNnArV3RrT2lLZ3VlQ3VlbUR2ZVM4bXVpSHF1V0txT2lpcSthM3UrV0tvT1dJc09pdnBlV3V1ZVdacU9TNHJWeHVJQ29nUUdOc1lYTnpJRlJ2WjJkc1pVTnZiblJoYVc1bGNseHVJQ29nUUdWNGRHVnVaSE1nUTI5dGNHOXVaVzUwWEc0Z0tpOWNiblpoY2lCVWIyZG5iR1ZEYjI1MFlXbHVaWElnUFNCall5NURiR0Z6Y3loN1hHNGdJQ0FnYm1GdFpUb2dKMk5qTGxSdloyZHNaVU52Ym5SaGFXNWxjaWNzWEc0Z0lDQWdaWGgwWlc1a2N6b2dZMk11UTI5dGNHOXVaVzUwTEZ4dUlDQWdJR1ZrYVhSdmNqb2dRME5mUlVSSlZFOVNJQ1ltSUh0Y2JpQWdJQ0FnSUNBZ2JXVnVkVG9nSjJreE9HNDZUVUZKVGw5TlJVNVZMbU52YlhCdmJtVnVkQzUxYVM5VWIyZG5iR1ZEYjI1MFlXbHVaWEluTEZ4dUlDQWdJQ0FnSUNCb1pXeHdPaUFuYVRFNGJqcERUMDFRVDA1RlRsUXVhR1ZzY0Y5MWNtd3VkRzluWjJ4bFEyOXVkR0ZwYm1WeUp5eGNiaUFnSUNBZ0lDQWdaWGhsWTNWMFpVbHVSV1JwZEUxdlpHVTZJSFJ5ZFdWY2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnY0hKdmNHVnlkR2xsY3pvZ2UxeHVJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNvZ0lTTmxiaUJKWmlCMGFHbHpJSE5sZEhScGJtY2dhWE1nZEhKMVpTd2dZU0IwYjJkbmJHVWdZMjkxYkdRZ1ltVWdjM2RwZEdOb1pXUWdiMlptSUdGdVpDQnZiaUIzYUdWdUlIQnlaWE56WldRdVhHNGdJQ0FnSUNBZ0lDQXFJRWxtSUdsMElHbHpJR1poYkhObExDQnBkQ0IzYVd4c0lHMWhhMlVnYzNWeVpTQjBhR1Z5WlNCcGN5QmhiSGRoZVhNZ2IyNXNlU0J2Ym1VZ2RHOW5aMnhsSUdOdmRXeGtJR0psSUhOM2FYUmphR1ZrSUc5dVhHNGdJQ0FnSUNBZ0lDQXFJR0Z1WkNCMGFHVWdZV3h5WldGa2VTQnpkMmwwWTJobFpDQnZiaUIwYjJkbmJHVWdZMkZ1SjNRZ1ltVWdjM2RwZEdOb1pXUWdiMlptTGx4dUlDQWdJQ0FnSUNBZ0tpQWhJM3BvSU9XbWd1YWVuT2kvbWVTNHF1aXV2dWU5cnVTNHVpQjBjblZsNzd5TUlPbUNvK1M1aUNCMGIyZG5iR1VnNW95SjZaS3U1WnlvNktLcjU0SzU1WWU3NTVxRTVwZTI1WUNaNVkrdjVMdWw1WStONWFTTjVaeXc2S0tyNllDSjVMaXQ1WktNNXB5cTZZQ0o1TGl0NDRDQ1hHNGdJQ0FnSUNBZ0lDQXFJRUJ3Y205d1pYSjBlU0I3UW05dmJHVmhibjBnWVd4c2IzZFRkMmwwWTJoUFptWmNiaUFnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUdGc2JHOTNVM2RwZEdOb1QyWm1PaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBiMjlzZEdsd09pQkRRMTlFUlZZZ0ppWWdKMmt4T0c0NlEwOU5VRTlPUlU1VUxuUnZaMmRzWlY5bmNtOTFjQzVoYkd4dmQxTjNhWFJqYUU5bVppY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCa1pXWmhkV3gwT2lCbVlXeHpaVnh1SUNBZ0lDQWdJQ0I5TEZ4dVhHNGdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnS2lBaEkyVnVJRWxtSUZSdloyZHNaU0JwY3lCamJHbGphMlZrTENCcGRDQjNhV3hzSUhSeWFXZG5aWElnWlhabGJuUW5jeUJvWVc1a2JHVnlYRzRnSUNBZ0lDQWdJQ0FxSUNFamVtZ2dWRzluWjJ4bElPYU1pZW1TcnVlYWhPZUN1ZVdIdStTNmkrUzd0dVdJbCtpaHFPT0FnbHh1SUNBZ0lDQWdJQ0FnS2lCQWNISnZjR1Z5ZEhrZ2UwTnZiWEJ2Ym1WdWRDNUZkbVZ1ZEVoaGJtUnNaWEpiWFgwZ1kyaGxZMnRGZG1WdWRITmNiaUFnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUdOb1pXTnJSWFpsYm5Sek9pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCa1pXWmhkV3gwT2lCYlhTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhSNWNHVTZJR05qTGtOdmJYQnZibVZ1ZEM1RmRtVnVkRWhoYm1Sc1pYSmNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdkWEJrWVhSbFZHOW5aMnhsY3pvZ1puVnVZM1JwYjI0Z0tIUnZaMmRzWlNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaWdoZEdocGN5NWxibUZpYkdWa1NXNUlhV1Z5WVhKamFIa3BJSEpsZEhWeWJqdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHOW5aMnhsTG1selEyaGxZMnRsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTBiMmRuYkdWSmRHVnRjeTVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2hwZEdWdEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dsMFpXMGdJVDA5SUhSdloyZHNaU0FtSmlCcGRHVnRMbWx6UTJobFkydGxaQ0FtSmlCcGRHVnRMbVZ1WVdKc1pXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FYUmxiUzVmYUdsa1pVTm9aV05yVFdGeWF5Z3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWphR1ZqYTBWMlpXNTBjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOakxrTnZiWEJ2Ym1WdWRDNUZkbVZ1ZEVoaGJtUnNaWEl1WlcxcGRFVjJaVzUwY3loMGFHbHpMbU5vWldOclJYWmxiblJ6TENCMGIyZG5iR1VwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dUlDQWdJRjloYkd4dmQwOXViSGxQYm1WVWIyZG5iR1ZEYUdWamEyVmtPaUJtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJwYzBOb1pXTnJaV1FnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NTBiMmRuYkdWSmRHVnRjeTVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2hwZEdWdEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9hWE5EYUdWamEyVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVhSbGJTNWZhR2xrWlVOb1pXTnJUV0Z5YXlncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdaV3h6WlNCcFppQW9hWFJsYlM1cGMwTm9aV05yWldRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBjME5vWldOclpXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdhWE5EYUdWamEyVmtPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmZiV0ZyWlVGMFRHVmhjM1JQYm1WVWIyZG5iR1ZEYUdWamEyVmtPaUJtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJwYzBOb1pXTnJaV1FnUFNCMGFHbHpMbDloYkd4dmQwOXViSGxQYm1WVWIyZG5iR1ZEYUdWamEyVmtLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZwYzBOb1pXTnJaV1FnSmlZZ0lYUm9hWE11WVd4c2IzZFRkMmwwWTJoUFptWXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUIwYjJkbmJHVkpkR1Z0Y3lBOUlIUm9hWE11ZEc5bloyeGxTWFJsYlhNN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHOW5aMnhsU1hSbGJYTXViR1Z1WjNSb0lENGdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSdloyZHNaVWwwWlcxeld6QmRMbU5vWldOcktDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzRnSUNBZ2IyNUZibUZpYkdVNklHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXViMlJsTG05dUtDZGphR2xzWkMxaFpHUmxaQ2NzSUhSb2FYTXVYMkZzYkc5M1QyNXNlVTl1WlZSdloyZHNaVU5vWldOclpXUXNJSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG01dlpHVXViMjRvSjJOb2FXeGtMWEpsYlc5MlpXUW5MQ0IwYUdsekxsOXRZV3RsUVhSTVpXRnpkRTl1WlZSdloyZHNaVU5vWldOclpXUXNJSFJvYVhNcE8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCdmJrUnBjMkZpYkdVNklHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXViMlJsTG05bVppZ25ZMmhwYkdRdFlXUmtaV1FuTENCMGFHbHpMbDloYkd4dmQwOXViSGxQYm1WVWIyZG5iR1ZEYUdWamEyVmtMQ0IwYUdsektUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dWIyUmxMbTltWmlnblkyaHBiR1F0Y21WdGIzWmxaQ2NzSUhSb2FYTXVYMjFoYTJWQmRFeGxZWE4wVDI1bFZHOW5aMnhsUTJobFkydGxaQ3dnZEdocGN5azdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lITjBZWEowT2lCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyMWhhMlZCZEV4bFlYTjBUMjVsVkc5bloyeGxRMmhsWTJ0bFpDZ3BPMXh1SUNBZ0lIMWNibjBwTzF4dVhHNHZLaXBjYmlBcUlDRWpaVzRnVW1WaFpDQnZibXg1SUhCeWIzQmxjblI1TENCeVpYUjFjbTRnZEdobElIUnZaMmRzWlNCcGRHVnRjeUJoY25KaGVTQnlaV1psY21WdVkyVWdiV0Z1WVdkbFpDQmllU0JVYjJkbmJHVkRiMjUwWVdsdVpYSXVYRzRnS2lBaEkzcG9JT1dQcXVpdnUrV3hudWFBcCsrOGpPaS9sT1dibmlCVWIyZG5iR1ZEYjI1MFlXbHVaWElnNTY2aDU1Q0c1NXFFSUhSdloyZHNaU0RtbGJEbnU0VGx2SlhubEtoY2JpQXFJRUJ3Y205d1pYSjBlU0I3Vkc5bloyeGxXMTE5SUhSdloyZHNaVWwwWlcxelhHNGdLaTljYm5aaGNpQnFjeUE5SUhKbGNYVnBjbVVvSnk0dUwzQnNZWFJtYjNKdEwycHpKeWs3WEc1cWN5NW5aWFFvVkc5bloyeGxRMjl1ZEdGcGJtVnlMbkJ5YjNSdmRIbHdaU3dnSjNSdloyZHNaVWwwWlcxekp5eGNiaUFnSUNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG01dlpHVXVaMlYwUTI5dGNHOXVaVzUwYzBsdVEyaHBiR1J5Wlc0b1kyTXVWRzluWjJ4bEtUdGNiaUFnSUNCOVhHNHBPMXh1WEc1all5NVViMmRuYkdWRGIyNTBZV2x1WlhJZ1BTQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlGUnZaMmRzWlVOdmJuUmhhVzVsY2p0Y2JpSmRmUT09Il19