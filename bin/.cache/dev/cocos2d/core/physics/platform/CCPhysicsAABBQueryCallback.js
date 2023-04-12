(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/physics/platform/CCPhysicsAABBQueryCallback.js';
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
        var BodyType = require('../CCPhysicsTypes').BodyType;
        function PhysicsAABBQueryCallback() {
            this._point = new b2.Vec2();
            this._isPoint = false;
            this._fixtures = [];
        }
        PhysicsAABBQueryCallback.prototype.init = function (point) {
            if (point) {
                this._isPoint = true;
                this._point.x = point.x;
                this._point.y = point.y;
            } else {
                this._isPoint = false;
            }
            this._fixtures.length = 0;
        };
        PhysicsAABBQueryCallback.prototype.ReportFixture = function (fixture) {
            var body = fixture.GetBody();
            if (body.GetType() === BodyType.Dynamic) {
                if (this._isPoint) {
                    if (fixture.TestPoint(this._point)) {
                        this._fixtures.push(fixture);
                        return false;
                    }
                } else {
                    this._fixtures.push(fixture);
                }
            }
            return true;
        };
        PhysicsAABBQueryCallback.prototype.getFixture = function () {
            return this._fixtures[0];
        };
        PhysicsAABBQueryCallback.prototype.getFixtures = function () {
            return this._fixtures;
        };
        cc.PhysicsAABBQueryCallback = module.exports = PhysicsAABBQueryCallback;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDUGh5c2ljc0FBQkJRdWVyeUNhbGxiYWNrLmpzIiwiL1VzZXJzL1NoYXJlZC9iaW5nb19mcmVuenkvZW5naW5lL2NvY29zMmQvY29yZS9waHlzaWNzL3BsYXRmb3JtL0NDUGh5c2ljc0FBQkJRdWVyeUNhbGxiYWNrLmpzIl0sIm5hbWVzIjpbIkJvZHlUeXBlIiwicmVxdWlyZSIsIlBoeXNpY3NBQUJCUXVlcnlDYWxsYmFjayIsIl9wb2ludCIsImIyIiwiVmVjMiIsIl9pc1BvaW50IiwiX2ZpeHR1cmVzIiwicHJvdG90eXBlIiwiaW5pdCIsInBvaW50IiwieCIsInkiLCJsZW5ndGgiLCJSZXBvcnRGaXh0dXJlIiwiZml4dHVyZSIsImJvZHkiLCJHZXRCb2R5IiwiR2V0VHlwZSIsIkR5bmFtaWMiLCJUZXN0UG9pbnQiLCJwdXNoIiwiZ2V0Rml4dHVyZSIsImdldEZpeHR1cmVzIiwiY2MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7UUF5QkEsSUFBTUEsUUFBQUEsR0FBV0MsT0FBQUEsQ0FBUSxtQkFBUkEsRUFBNkJELFFBQTlDO1FBRUEsU0FBU0Usd0JBQVQsR0FBcUM7QUFBQSxZQUNqQyxLQUFLQyxNQUFMLEdBQWMsSUFBSUMsRUFBQUEsQ0FBR0MsSUFBUCxFQUFkLENBRGlDO0FBQUEsWUFFakMsS0FBS0MsUUFBTCxHQUFnQixLQUFoQixDQUZpQztBQUFBLFlBR2pDLEtBQUtDLFNBQUwsR0FBaUIsRUFBakIsQ0FIaUM7QUFBQTtRQU1yQ0wsd0JBQUFBLENBQXlCTSxTQUF6Qk4sQ0FBbUNPLElBQW5DUCxHQUEwQyxVQUFVUSxLQUFWLEVBQWlCO0FBQUEsWUFDdkQsSUFBSUEsS0FBSixFQUFXO0FBQUEsZ0JBQ1AsS0FBS0osUUFBTCxHQUFnQixJQUFoQixDQURPO0FBQUEsZ0JBRVAsS0FBS0gsTUFBTCxDQUFZUSxDQUFaLEdBQWdCRCxLQUFBQSxDQUFNQyxDQUF0QixDQUZPO0FBQUEsZ0JBR1AsS0FBS1IsTUFBTCxDQUFZUyxDQUFaLEdBQWdCRixLQUFBQSxDQUFNRSxDQUF0QixDQUhPO0FBQUEsYUFBWCxNQUtLO0FBQUEsZ0JBQ0QsS0FBS04sUUFBTCxHQUFnQixLQUFoQixDQURDO0FBQUEsYUFOa0Q7QUFBQSxZQVV2RCxLQUFLQyxTQUFMLENBQWVNLE1BQWYsR0FBd0IsQ0FBeEIsQ0FWdUQ7QUFBQSxTQUEzRFg7UUFhQUEsd0JBQUFBLENBQXlCTSxTQUF6Qk4sQ0FBbUNZLGFBQW5DWixHQUFtRCxVQUFVYSxPQUFWLEVBQW1CO0FBQUEsWUFDbEUsSUFBSUMsSUFBQUEsR0FBT0QsT0FBQUEsQ0FBUUUsT0FBUkYsRUFBWCxDQURrRTtBQUFBLFlBRWxFLElBQUlDLElBQUFBLENBQUtFLE9BQUxGLE9BQW1CaEIsUUFBQUEsQ0FBU21CLE9BQWhDLEVBQXlDO0FBQUEsZ0JBQ3JDLElBQUksS0FBS2IsUUFBVCxFQUFtQjtBQUFBLG9CQUNmLElBQUlTLE9BQUFBLENBQVFLLFNBQVJMLENBQWtCLEtBQUtaLE1BQXZCWSxDQUFKLEVBQW9DO0FBQUEsd0JBQ2hDLEtBQUtSLFNBQUwsQ0FBZWMsSUFBZixDQUFvQk4sT0FBcEIsRUFEZ0M7QUFBQSx3QkFHaEMsT0FBTyxLQUFQLENBSGdDO0FBQUEscUJBRHJCO0FBQUEsaUJBQW5CLE1BT0s7QUFBQSxvQkFDRCxLQUFLUixTQUFMLENBQWVjLElBQWYsQ0FBb0JOLE9BQXBCLEVBREM7QUFBQSxpQkFSZ0M7QUFBQSxhQUZ5QjtBQUFBLFlBZ0JsRSxPQUFPLElBQVAsQ0FoQmtFO0FBQUEsU0FBdEViO1FBbUJBQSx3QkFBQUEsQ0FBeUJNLFNBQXpCTixDQUFtQ29CLFVBQW5DcEIsR0FBZ0QsWUFBWTtBQUFBLFlBQ3hELE9BQU8sS0FBS0ssU0FBTCxDQUFlLENBQWYsQ0FBUCxDQUR3RDtBQUFBLFNBQTVETDtRQUlBQSx3QkFBQUEsQ0FBeUJNLFNBQXpCTixDQUFtQ3FCLFdBQW5DckIsR0FBaUQsWUFBWTtBQUFBLFlBQ3pELE9BQU8sS0FBS0ssU0FBWixDQUR5RDtBQUFBLFNBQTdETDtRQUlBc0IsRUFBQUEsQ0FBR3RCLHdCQUFIc0IsR0FBOEJDLE1BQUFBLENBQU9DLE9BQVBELEdBQWlCdkIsd0JBQS9Dc0IiLCJmaWxlIjoiQ0NQaHlzaWNzQUFCQlF1ZXJ5Q2FsbGJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBCb2R5VHlwZSA9IHJlcXVpcmUoJy4uL0NDUGh5c2ljc1R5cGVzJykuQm9keVR5cGU7XG5cbmZ1bmN0aW9uIFBoeXNpY3NBQUJCUXVlcnlDYWxsYmFjayAoKSB7XG4gICAgdGhpcy5fcG9pbnQgPSBuZXcgYjIuVmVjMigpO1xuICAgIHRoaXMuX2lzUG9pbnQgPSBmYWxzZTtcbiAgICB0aGlzLl9maXh0dXJlcyA9IFtdO1xufVxuXG5QaHlzaWNzQUFCQlF1ZXJ5Q2FsbGJhY2sucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICBpZiAocG9pbnQpIHtcbiAgICAgICAgdGhpcy5faXNQb2ludCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BvaW50LnggPSBwb2ludC54O1xuICAgICAgICB0aGlzLl9wb2ludC55ID0gcG9pbnQueTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuX2lzUG9pbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fZml4dHVyZXMubGVuZ3RoID0gMDtcbn07XG5cblBoeXNpY3NBQUJCUXVlcnlDYWxsYmFjay5wcm90b3R5cGUuUmVwb3J0Rml4dHVyZSA9IGZ1bmN0aW9uIChmaXh0dXJlKSB7XG4gICAgdmFyIGJvZHkgPSBmaXh0dXJlLkdldEJvZHkoKTtcbiAgICBpZiAoYm9keS5HZXRUeXBlKCkgPT09IEJvZHlUeXBlLkR5bmFtaWMpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUG9pbnQpIHtcbiAgICAgICAgICAgIGlmIChmaXh0dXJlLlRlc3RQb2ludCh0aGlzLl9wb2ludCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9maXh0dXJlcy5wdXNoKGZpeHR1cmUpO1xuICAgICAgICAgICAgICAgIC8vIFdlIGFyZSBkb25lLCB0ZXJtaW5hdGUgdGhlIHF1ZXJ5LlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpeHR1cmVzLnB1c2goZml4dHVyZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUcnVlIHRvIGNvbnRpbnVlIHRoZSBxdWVyeSwgZmFsc2UgdG8gdGVybWluYXRlIHRoZSBxdWVyeS5cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cblBoeXNpY3NBQUJCUXVlcnlDYWxsYmFjay5wcm90b3R5cGUuZ2V0Rml4dHVyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fZml4dHVyZXNbMF07XG59O1xuXG5QaHlzaWNzQUFCQlF1ZXJ5Q2FsbGJhY2sucHJvdG90eXBlLmdldEZpeHR1cmVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9maXh0dXJlcztcbn07XG5cbmNjLlBoeXNpY3NBQUJCUXVlcnlDYWxsYmFjayA9IG1vZHVsZS5leHBvcnRzID0gUGh5c2ljc0FBQkJRdWVyeUNhbGxiYWNrO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIgQm9keVR5cGUgPSByZXF1aXJlKCcuLi9DQ1BoeXNpY3NUeXBlcycpLkJvZHlUeXBlO1xuXG5mdW5jdGlvbiBQaHlzaWNzQUFCQlF1ZXJ5Q2FsbGJhY2soKSB7XG4gICAgdGhpcy5fcG9pbnQgPSBuZXcgYjIuVmVjMigpO1xuICAgIHRoaXMuX2lzUG9pbnQgPSBmYWxzZTtcbiAgICB0aGlzLl9maXh0dXJlcyA9IFtdO1xufVxuXG5QaHlzaWNzQUFCQlF1ZXJ5Q2FsbGJhY2sucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICBpZiAocG9pbnQpIHtcbiAgICAgICAgdGhpcy5faXNQb2ludCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BvaW50LnggPSBwb2ludC54O1xuICAgICAgICB0aGlzLl9wb2ludC55ID0gcG9pbnQueTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pc1BvaW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5fZml4dHVyZXMubGVuZ3RoID0gMDtcbn07XG5cblBoeXNpY3NBQUJCUXVlcnlDYWxsYmFjay5wcm90b3R5cGUuUmVwb3J0Rml4dHVyZSA9IGZ1bmN0aW9uIChmaXh0dXJlKSB7XG4gICAgdmFyIGJvZHkgPSBmaXh0dXJlLkdldEJvZHkoKTtcbiAgICBpZiAoYm9keS5HZXRUeXBlKCkgPT09IEJvZHlUeXBlLkR5bmFtaWMpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUG9pbnQpIHtcbiAgICAgICAgICAgIGlmIChmaXh0dXJlLlRlc3RQb2ludCh0aGlzLl9wb2ludCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9maXh0dXJlcy5wdXNoKGZpeHR1cmUpO1xuICAgICAgICAgICAgICAgIC8vIFdlIGFyZSBkb25lLCB0ZXJtaW5hdGUgdGhlIHF1ZXJ5LlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpeHR1cmVzLnB1c2goZml4dHVyZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUcnVlIHRvIGNvbnRpbnVlIHRoZSBxdWVyeSwgZmFsc2UgdG8gdGVybWluYXRlIHRoZSBxdWVyeS5cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cblBoeXNpY3NBQUJCUXVlcnlDYWxsYmFjay5wcm90b3R5cGUuZ2V0Rml4dHVyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fZml4dHVyZXNbMF07XG59O1xuXG5QaHlzaWNzQUFCQlF1ZXJ5Q2FsbGJhY2sucHJvdG90eXBlLmdldEZpeHR1cmVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9maXh0dXJlcztcbn07XG5cbmNjLlBoeXNpY3NBQUJCUXVlcnlDYWxsYmFjayA9IG1vZHVsZS5leHBvcnRzID0gUGh5c2ljc0FBQkJRdWVyeUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtORFVHaDVjMmxqYzBGQlFrSlJkV1Z5ZVVOaGJHeGlZV05yTG1weklsMHNJbTVoYldWeklqcGJJa0p2WkhsVWVYQmxJaXdpY21WeGRXbHlaU0lzSWxCb2VYTnBZM05CUVVKQ1VYVmxjbmxEWVd4c1ltRmpheUlzSWw5d2IybHVkQ0lzSW1JeUlpd2lWbVZqTWlJc0lsOXBjMUJ2YVc1MElpd2lYMlpwZUhSMWNtVnpJaXdpY0hKdmRHOTBlWEJsSWl3aWFXNXBkQ0lzSW5CdmFXNTBJaXdpZUNJc0lua2lMQ0pzWlc1bmRHZ2lMQ0pTWlhCdmNuUkdhWGgwZFhKbElpd2labWw0ZEhWeVpTSXNJbUp2WkhraUxDSkhaWFJDYjJSNUlpd2lSMlYwVkhsd1pTSXNJa1I1Ym1GdGFXTWlMQ0pVWlhOMFVHOXBiblFpTENKd2RYTm9JaXdpWjJWMFJtbDRkSFZ5WlNJc0ltZGxkRVpwZUhSMWNtVnpJaXdpWTJNaUxDSnRiMlIxYkdVaUxDSmxlSEJ2Y25SeklsMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJlVUpCTEVsQlFVMUJMRmRCUVZkRExGRkJRVkVzYlVKQlFWSXNSVUZCTmtKRUxGRkJRVGxET3p0QlFVVkJMRk5CUVZORkxIZENRVUZVTEVkQlFYRkRPMEZCUTJwRExGTkJRVXRETEUxQlFVd3NSMEZCWXl4SlFVRkpReXhIUVVGSFF5eEpRVUZRTEVWQlFXUTdRVUZEUVN4VFFVRkxReXhSUVVGTUxFZEJRV2RDTEV0QlFXaENPMEZCUTBFc1UwRkJTME1zVTBGQlRDeEhRVUZwUWl4RlFVRnFRanRCUVVOSU96dEJRVVZFVEN4NVFrRkJlVUpOTEZOQlFYcENMRU5CUVcxRFF5eEpRVUZ1UXl4SFFVRXdReXhWUVVGVlF5eExRVUZXTEVWQlFXbENPMEZCUTNaRUxGRkJRVWxCTEV0QlFVb3NSVUZCVnp0QlFVTlFMR0ZCUVV0S0xGRkJRVXdzUjBGQlowSXNTVUZCYUVJN1FVRkRRU3hoUVVGTFNDeE5RVUZNTEVOQlFWbFJMRU5CUVZvc1IwRkJaMEpFTEUxQlFVMURMRU5CUVhSQ08wRkJRMEVzWVVGQlMxSXNUVUZCVEN4RFFVRlpVeXhEUVVGYUxFZEJRV2RDUml4TlFVRk5SU3hEUVVGMFFqdEJRVU5JTEV0QlNrUXNUVUZMU3p0QlFVTkVMR0ZCUVV0T0xGRkJRVXdzUjBGQlowSXNTMEZCYUVJN1FVRkRTRHM3UVVGRlJDeFRRVUZMUXl4VFFVRk1MRU5CUVdWTkxFMUJRV1lzUjBGQmQwSXNRMEZCZUVJN1FVRkRTQ3hEUVZoRU96dEJRV0ZCV0N4NVFrRkJlVUpOTEZOQlFYcENMRU5CUVcxRFRTeGhRVUZ1UXl4SFFVRnRSQ3hWUVVGVlF5eFBRVUZXTEVWQlFXMUNPMEZCUTJ4RkxGRkJRVWxETEU5QlFVOUVMRkZCUVZGRkxFOUJRVklzUlVGQldEdEJRVU5CTEZGQlFVbEVMRXRCUVV0RkxFOUJRVXdzVDBGQmJVSnNRaXhUUVVGVGJVSXNUMEZCYUVNc1JVRkJlVU03UVVGRGNrTXNXVUZCU1N4TFFVRkxZaXhSUVVGVUxFVkJRVzFDTzBGQlEyWXNaMEpCUVVsVExGRkJRVkZMTEZOQlFWSXNRMEZCYTBJc1MwRkJTMnBDTEUxQlFYWkNMRU5CUVVvc1JVRkJiME03UVVGRGFFTXNjVUpCUVV0SkxGTkJRVXdzUTBGQlpXTXNTVUZCWml4RFFVRnZRazRzVDBGQmNFSTdRVUZEUVR0QlFVTkJMSFZDUVVGUExFdEJRVkE3UVVGRFNEdEJRVU5LTEZOQlRrUXNUVUZQU3p0QlFVTkVMR2xDUVVGTFVpeFRRVUZNTEVOQlFXVmpMRWxCUVdZc1EwRkJiMEpPTEU5QlFYQkNPMEZCUTBnN1FVRkRTanM3UVVGRlJEdEJRVU5CTEZkQlFVOHNTVUZCVUR0QlFVTklMRU5CYWtKRU96dEJRVzFDUVdJc2VVSkJRWGxDVFN4VFFVRjZRaXhEUVVGdFEyTXNWVUZCYmtNc1IwRkJaMFFzV1VGQldUdEJRVU40UkN4WFFVRlBMRXRCUVV0bUxGTkJRVXdzUTBGQlpTeERRVUZtTEVOQlFWQTdRVUZEU0N4RFFVWkVPenRCUVVsQlRDeDVRa0ZCZVVKTkxGTkJRWHBDTEVOQlFXMURaU3hYUVVGdVF5eEhRVUZwUkN4WlFVRlpPMEZCUTNwRUxGZEJRVThzUzBGQlMyaENMRk5CUVZvN1FVRkRTQ3hEUVVaRU96dEJRVWxCYVVJc1IwRkJSM1JDTEhkQ1FVRklMRWRCUVRoQ2RVSXNUMEZCVDBNc1QwRkJVQ3hIUVVGcFFuaENMSGRDUVVFdlF5SXNJbVpwYkdVaU9pSkRRMUJvZVhOcFkzTkJRVUpDVVhWbGNubERZV3hzWW1GamF5NXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FYRzRnUTI5d2VYSnBaMmgwSUNoaktTQXlNREUzTFRJd01UZ2dXR2xoYldWdUlGbGhhbWtnVTI5bWRIZGhjbVVnUTI4dUxDQk1kR1F1WEc1Y2JpQm9kSFJ3Y3pvdkwzZDNkeTVqYjJOdmN5NWpiMjB2WEc1Y2JpQlFaWEp0YVhOemFXOXVJR2x6SUdobGNtVmllU0JuY21GdWRHVmtMQ0JtY21WbElHOW1JR05vWVhKblpTd2dkRzhnWVc1NUlIQmxjbk52YmlCdlluUmhhVzVwYm1jZ1lTQmpiM0I1WEc0Z2IyWWdkR2hwY3lCemIyWjBkMkZ5WlNCaGJtUWdZWE56YjJOcFlYUmxaQ0JsYm1kcGJtVWdjMjkxY21ObElHTnZaR1VnS0hSb1pTQmNJbE52Wm5SM1lYSmxYQ0lwTENCaElHeHBiV2wwWldRc1hHNGdkMjl5YkdSM2FXUmxMQ0J5YjNsaGJIUjVMV1p5WldVc0lHNXZiaTFoYzNOcFoyNWhZbXhsTENCeVpYWnZZMkZpYkdVZ1lXNWtJRzV2YmkxbGVHTnNkWE5wZG1VZ2JHbGpaVzV6WlZ4dUlIUnZJSFZ6WlNCRGIyTnZjeUJEY21WaGRHOXlJSE52YkdWc2VTQjBieUJrWlhabGJHOXdJR2RoYldWeklHOXVJSGx2ZFhJZ2RHRnlaMlYwSUhCc1lYUm1iM0p0Y3k0Z1dXOTFJSE5vWVd4c1hHNGdibTkwSUhWelpTQkRiMk52Y3lCRGNtVmhkRzl5SUhOdlpuUjNZWEpsSUdadmNpQmtaWFpsYkc5d2FXNW5JRzkwYUdWeUlITnZablIzWVhKbElHOXlJSFJ2YjJ4eklIUm9ZWFFuYzF4dUlIVnpaV1FnWm05eUlHUmxkbVZzYjNCcGJtY2daMkZ0WlhNdUlGbHZkU0JoY21VZ2JtOTBJR2R5WVc1MFpXUWdkRzhnY0hWaWJHbHphQ3dnWkdsemRISnBZblYwWlN4Y2JpQnpkV0pzYVdObGJuTmxMQ0JoYm1RdmIzSWdjMlZzYkNCamIzQnBaWE1nYjJZZ1EyOWpiM01nUTNKbFlYUnZjaTVjYmx4dUlGUm9aU0J6YjJaMGQyRnlaU0J2Y2lCMGIyOXNjeUJwYmlCMGFHbHpJRXhwWTJWdWMyVWdRV2R5WldWdFpXNTBJR0Z5WlNCc2FXTmxibk5sWkN3Z2JtOTBJSE52YkdRdVhHNGdXR2xoYldWdUlGbGhhbWtnVTI5bWRIZGhjbVVnUTI4dUxDQk1kR1F1SUhKbGMyVnlkbVZ6SUdGc2JDQnlhV2RvZEhNZ2JtOTBJR1Y0Y0hKbGMzTnNlU0JuY21GdWRHVmtJSFJ2SUhsdmRTNWNibHh1SUZSSVJTQlRUMFpVVjBGU1JTQkpVeUJRVWs5V1NVUkZSQ0JjSWtGVElFbFRYQ0lzSUZkSlZFaFBWVlFnVjBGU1VrRk9WRmtnVDBZZ1FVNVpJRXRKVGtRc0lFVllVRkpGVTFNZ1QxSmNiaUJKVFZCTVNVVkVMQ0JKVGtOTVZVUkpUa2NnUWxWVUlFNVBWQ0JNU1UxSlZFVkVJRlJQSUZSSVJTQlhRVkpTUVU1VVNVVlRJRTlHSUUxRlVrTklRVTVVUVVKSlRFbFVXU3hjYmlCR1NWUk9SVk5USUVaUFVpQkJJRkJCVWxSSlExVk1RVklnVUZWU1VFOVRSU0JCVGtRZ1RrOU9TVTVHVWtsT1IwVk5SVTVVTGlCSlRpQk9UeUJGVmtWT1ZDQlRTRUZNVENCVVNFVmNiaUJCVlZSSVQxSlRJRTlTSUVOUFVGbFNTVWRJVkNCSVQweEVSVkpUSUVKRklFeEpRVUpNUlNCR1QxSWdRVTVaSUVOTVFVbE5MQ0JFUVUxQlIwVlRJRTlTSUU5VVNFVlNYRzRnVEVsQlFrbE1TVlJaTENCWFNFVlVTRVZTSUVsT0lFRk9JRUZEVkVsUFRpQlBSaUJEVDA1VVVrRkRWQ3dnVkU5U1ZDQlBVaUJQVkVoRlVsZEpVMFVzSUVGU1NWTkpUa2NnUmxKUFRTeGNiaUJQVlZRZ1QwWWdUMUlnU1U0Z1EwOU9Ua1ZEVkVsUFRpQlhTVlJJSUZSSVJTQlRUMFpVVjBGU1JTQlBVaUJVU0VVZ1ZWTkZJRTlTSUU5VVNFVlNJRVJGUVV4SlRrZFRJRWxPWEc0Z1ZFaEZJRk5QUmxSWFFWSkZMbHh1SUNvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3ZYRzVjYm1OdmJuTjBJRUp2WkhsVWVYQmxJRDBnY21WeGRXbHlaU2duTGk0dlEwTlFhSGx6YVdOelZIbHdaWE1uS1M1Q2IyUjVWSGx3WlR0Y2JseHVablZ1WTNScGIyNGdVR2g1YzJsamMwRkJRa0pSZFdWeWVVTmhiR3hpWVdOcklDZ3BJSHRjYmlBZ0lDQjBhR2x6TGw5d2IybHVkQ0E5SUc1bGR5QmlNaTVXWldNeUtDazdYRzRnSUNBZ2RHaHBjeTVmYVhOUWIybHVkQ0E5SUdaaGJITmxPMXh1SUNBZ0lIUm9hWE11WDJacGVIUjFjbVZ6SUQwZ1cxMDdYRzU5WEc1Y2JsQm9lWE5wWTNOQlFVSkNVWFZsY25sRFlXeHNZbUZqYXk1d2NtOTBiM1I1Y0dVdWFXNXBkQ0E5SUdaMWJtTjBhVzl1SUNod2IybHVkQ2tnZTF4dUlDQWdJR2xtSUNod2IybHVkQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbDlwYzFCdmFXNTBJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmNHOXBiblF1ZUNBOUlIQnZhVzUwTG5nN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDNCdmFXNTBMbmtnUFNCd2IybHVkQzU1TzF4dUlDQWdJSDFjYmlBZ0lDQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmYVhOUWIybHVkQ0E5SUdaaGJITmxPMXh1SUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0IwYUdsekxsOW1hWGgwZFhKbGN5NXNaVzVuZEdnZ1BTQXdPMXh1ZlR0Y2JseHVVR2g1YzJsamMwRkJRa0pSZFdWeWVVTmhiR3hpWVdOckxuQnliM1J2ZEhsd1pTNVNaWEJ2Y25SR2FYaDBkWEpsSUQwZ1puVnVZM1JwYjI0Z0tHWnBlSFIxY21VcElIdGNiaUFnSUNCMllYSWdZbTlrZVNBOUlHWnBlSFIxY21VdVIyVjBRbTlrZVNncE8xeHVJQ0FnSUdsbUlDaGliMlI1TGtkbGRGUjVjR1VvS1NBOVBUMGdRbTlrZVZSNWNHVXVSSGx1WVcxcFl5a2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVmYVhOUWIybHVkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dacGVIUjFjbVV1VkdWemRGQnZhVzUwS0hSb2FYTXVYM0J2YVc1MEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVgyWnBlSFIxY21WekxuQjFjMmdvWm1sNGRIVnlaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1YyVWdZWEpsSUdSdmJtVXNJSFJsY20xcGJtRjBaU0IwYUdVZ2NYVmxjbmt1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1ZlptbDRkSFZ5WlhNdWNIVnphQ2htYVhoMGRYSmxLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUZSeWRXVWdkRzhnWTI5dWRHbHVkV1VnZEdobElIRjFaWEo1TENCbVlXeHpaU0IwYnlCMFpYSnRhVzVoZEdVZ2RHaGxJSEYxWlhKNUxseHVJQ0FnSUhKbGRIVnliaUIwY25WbE8xeHVmVHRjYmx4dVVHaDVjMmxqYzBGQlFrSlJkV1Z5ZVVOaGJHeGlZV05yTG5CeWIzUnZkSGx3WlM1blpYUkdhWGgwZFhKbElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TGw5bWFYaDBkWEpsYzFzd1hUdGNibjA3WEc1Y2JsQm9lWE5wWTNOQlFVSkNVWFZsY25sRFlXeHNZbUZqYXk1d2NtOTBiM1I1Y0dVdVoyVjBSbWw0ZEhWeVpYTWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgyWnBlSFIxY21Wek8xeHVmVHRjYmx4dVkyTXVVR2g1YzJsamMwRkJRa0pSZFdWeWVVTmhiR3hpWVdOcklEMGdiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQlFhSGx6YVdOelFVRkNRbEYxWlhKNVEyRnNiR0poWTJzN1hHNGlYWDA9Il19