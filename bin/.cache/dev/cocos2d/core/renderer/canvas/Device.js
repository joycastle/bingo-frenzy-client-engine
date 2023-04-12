(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/canvas/Device.js';
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
        var Device = function Device(canvasEL) {
            var ctx;
            try {
                ctx = canvasEL.getContext('2d');
            } catch (err) {
                console.error(err);
                return;
            }
            this._canvas = canvasEL;
            this._ctx = ctx;
            this._caps = {};
            this._stats = { drawcalls: 0 };
            this._vx = this._vy = this._vw = this._vh = 0;
            this._sx = this._sy = this._sw = this._sh = 0;
        };
        Device.prototype._restoreTexture = function _restoreTexture(unit) {
        };
        Device.prototype.setViewport = function setViewport(x, y, w, h) {
            if (this._vx !== x || this._vy !== y || this._vw !== w || this._vh !== h) {
                this._vx = x;
                this._vy = y;
                this._vw = w;
                this._vh = h;
            }
        };
        Device.prototype.setScissor = function setScissor(x, y, w, h) {
            if (this._sx !== x || this._sy !== y || this._sw !== w || this._sh !== h) {
                this._sx = x;
                this._sy = y;
                this._sw = w;
                this._sh = h;
            }
        };
        Device.prototype.clear = function clear(color) {
            var ctx = this._ctx;
            ctx.clearRect(this._vx, this._vy, this._vw, this._vh);
            if (color && (color[0] !== 0 || color[1] !== 0 || color[2] !== 0)) {
                ctx.fillStyle = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
                ctx.globalAlpha = color[3];
                ctx.fillRect(this._vx, this._vy, this._vw, this._vh);
            }
        };
        Device.prototype.resetDrawCalls = function () {
            this._stats.drawcalls = 0;
        };
        Device.prototype.getDrawCalls = function () {
            return this._stats.drawcalls;
        };
        module.exports = Device;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRldmljZS5qcyIsIi9Vc2Vycy9TaGFyZWQvYmluZ29fZnJlbnp5L2VuZ2luZS9jb2NvczJkL2NvcmUvcmVuZGVyZXIvY2FudmFzL0RldmljZS5qcyJdLCJuYW1lcyI6WyJEZXZpY2UiLCJnZXRDb250ZXh0IiwiZXJyIiwiY2FudmFzRUwiLCJjdHgiLCJjb25zb2xlIiwiZXJyb3IiLCJfY2FudmFzIiwiX2N0eCIsIl9jYXBzIiwiX3N0YXRzIiwiZHJhd2NhbGxzIiwiX3Z4IiwiX3Z5IiwiX3Z3IiwiX3ZoIiwiX3N4IiwiX3N5IiwiX3N3IiwiX3NoIiwicHJvdG90eXBlIiwiX3Jlc3RvcmVUZXh0dXJlIiwidW5pdCIsInNldFZpZXdwb3J0IiwieCIsInkiLCJ3IiwiaCIsInNldFNjaXNzb3IiLCJjbGVhciIsImNvbG9yIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwiZ2xvYmFsQWxwaGEiLCJmaWxsUmVjdCIsInJlc2V0RHJhd0NhbGxzIiwiZ2V0RHJhd0NhbGxzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtJQUNBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxXQUFBOztJQUVhLElBQVNBLFVBQUFBLEdBQVQsbURBQUE7SUFDWCxJQUFBLFNBQUEsR0FBQSxPQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUE7QUFBQSxnQ0FBQTtBQUFBLEtBQUEsR0FFSSxVQUFBLE9BQUEsRUFBQTtBQUFBLFFBQ2FDLE9BQVcsaUJBQUEsQ0FBMUIsT0FBMEIsQ0FBMUIsT0FBMEIsRUFBMUIsVUFBMEIsQ0FBWEEsQ0FEYjtBQUFBLEtBRko7SUFLZ0JDLFNBQWQsUUFBY0EsQ0FBZCxPQUFjQSxFQUFkLE9BQWNBLEVBQWQsTUFBY0EsRUFBZDtBQUFBLFFBQ0EsSUFBQSxDQUFBLE9BQUEsRUFBQTtBQUFBLFlBQUEsaUJBQUEsQ0FBQSxjQUFBLENBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQTtBQUFBLFNBREE7QUFBQTtR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LEVBQUEsWUFBQTtBQUFBLFlBQ0gsUUFBQSxDQUFBLFFBQUEsQ0FBQSxPQUFBLEVBQUEsU0FBQSxFQUFBLFFBQUEsRUFERztBQUFBLFNBQUEsRUFEakI7QUFBQSIsImZpbGUiOiJEZXZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiAgXG4gXG52YXIgRGV2aWNlID0gZnVuY3Rpb24gRGV2aWNlKGNhbnZhc0VMKSB7XG4gIHZhciBjdHg7XG5cbiAgdHJ5IHtcbiAgICBjdHggPSBjYW52YXNFTC5nZXRDb250ZXh0KCcyZCcpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gc3RhdGljc1xuICB0aGlzLl9jYW52YXMgPSBjYW52YXNFTDtcbiAgdGhpcy5fY3R4ID0gY3R4O1xuICB0aGlzLl9jYXBzID0ge307IC8vIGNhcGFiaWxpdHlcbiAgdGhpcy5fc3RhdHMgPSB7XG4gICAgZHJhd2NhbGxzOiAwLFxuICB9O1xuXG4gIC8vIHJ1bnRpbWVcbiAgdGhpcy5fdnggPSB0aGlzLl92eSA9IHRoaXMuX3Z3ID0gdGhpcy5fdmggPSAwO1xuICB0aGlzLl9zeCA9IHRoaXMuX3N5ID0gdGhpcy5fc3cgPSB0aGlzLl9zaCA9IDA7XG59O1xuXG5EZXZpY2UucHJvdG90eXBlLl9yZXN0b3JlVGV4dHVyZSA9IGZ1bmN0aW9uIF9yZXN0b3JlVGV4dHVyZSAodW5pdCkge1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSW1tZWRpYXRlIFNldHRpbmdzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQG1ldGhvZCBzZXRWaWV3cG9ydFxuICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gKiBAcGFyYW0ge051bWJlcn0gd1xuICogQHBhcmFtIHtOdW1iZXJ9IGhcbiAqL1xuRGV2aWNlLnByb3RvdHlwZS5zZXRWaWV3cG9ydCA9IGZ1bmN0aW9uIHNldFZpZXdwb3J0ICh4LCB5LCB3LCBoKSB7XG4gIGlmIChcbiAgICB0aGlzLl92eCAhPT0geCB8fFxuICAgIHRoaXMuX3Z5ICE9PSB5IHx8XG4gICAgdGhpcy5fdncgIT09IHcgfHxcbiAgICB0aGlzLl92aCAhPT0gaFxuICApIHtcbiAgICB0aGlzLl92eCA9IHg7XG4gICAgdGhpcy5fdnkgPSB5O1xuICAgIHRoaXMuX3Z3ID0gdztcbiAgICB0aGlzLl92aCA9IGg7XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBzZXRTY2lzc29yXG4gKiBAcGFyYW0ge051bWJlcn0geFxuICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAqIEBwYXJhbSB7TnVtYmVyfSB3XG4gKiBAcGFyYW0ge051bWJlcn0gaFxuICovXG5EZXZpY2UucHJvdG90eXBlLnNldFNjaXNzb3IgPSBmdW5jdGlvbiBzZXRTY2lzc29yICh4LCB5LCB3LCBoKSB7XG4gIGlmIChcbiAgICB0aGlzLl9zeCAhPT0geCB8fFxuICAgIHRoaXMuX3N5ICE9PSB5IHx8XG4gICAgdGhpcy5fc3cgIT09IHcgfHxcbiAgICB0aGlzLl9zaCAhPT0gaFxuICApIHtcbiAgICB0aGlzLl9zeCA9IHg7XG4gICAgdGhpcy5fc3kgPSB5O1xuICAgIHRoaXMuX3N3ID0gdztcbiAgICB0aGlzLl9zaCA9IGg7XG4gIH1cbn07XG5cbkRldmljZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiBjbGVhciAoY29sb3IpIHtcbiAgdmFyIGN0eCA9IHRoaXMuX2N0eDtcbiAgY3R4LmNsZWFyUmVjdCh0aGlzLl92eCwgdGhpcy5fdnksIHRoaXMuX3Z3LCB0aGlzLl92aCk7XG4gIGlmIChjb2xvciAmJiAoY29sb3JbMF0gIT09IDAgfHwgY29sb3JbMV0gIT09IDAgfHwgY29sb3JbMl0gIT09IDApKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoJyArIGNvbG9yWzBdICsgJywnICsgY29sb3JbMV0gKyAnLCcgKyBjb2xvclsyXSArJyknO1xuICAgIGN0eC5nbG9iYWxBbHBoYSA9IGNvbG9yWzNdO1xuICAgIGN0eC5maWxsUmVjdCh0aGlzLl92eCwgdGhpcy5fdnksIHRoaXMuX3Z3LCB0aGlzLl92aCk7XG4gIH1cbn07XG5cbkRldmljZS5wcm90b3R5cGUucmVzZXREcmF3Q2FsbHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX3N0YXRzLmRyYXdjYWxscyA9IDA7XG59XG5cbkRldmljZS5wcm90b3R5cGUuZ2V0RHJhd0NhbGxzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fc3RhdHMuZHJhd2NhbGxzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERldmljZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuICBcblxudmFyIERldmljZSA9IGZ1bmN0aW9uIERldmljZShjYW52YXNFTCkge1xuICB2YXIgY3R4O1xuXG4gIHRyeSB7XG4gICAgY3R4ID0gY2FudmFzRUwuZ2V0Q29udGV4dCgnMmQnKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHN0YXRpY3NcbiAgdGhpcy5fY2FudmFzID0gY2FudmFzRUw7XG4gIHRoaXMuX2N0eCA9IGN0eDtcbiAgdGhpcy5fY2FwcyA9IHt9OyAvLyBjYXBhYmlsaXR5XG4gIHRoaXMuX3N0YXRzID0ge1xuICAgIGRyYXdjYWxsczogMFxuICB9O1xuXG4gIC8vIHJ1bnRpbWVcbiAgdGhpcy5fdnggPSB0aGlzLl92eSA9IHRoaXMuX3Z3ID0gdGhpcy5fdmggPSAwO1xuICB0aGlzLl9zeCA9IHRoaXMuX3N5ID0gdGhpcy5fc3cgPSB0aGlzLl9zaCA9IDA7XG59O1xuXG5EZXZpY2UucHJvdG90eXBlLl9yZXN0b3JlVGV4dHVyZSA9IGZ1bmN0aW9uIF9yZXN0b3JlVGV4dHVyZSh1bml0KSB7fTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSW1tZWRpYXRlIFNldHRpbmdzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQG1ldGhvZCBzZXRWaWV3cG9ydFxuICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gKiBAcGFyYW0ge051bWJlcn0gd1xuICogQHBhcmFtIHtOdW1iZXJ9IGhcbiAqL1xuRGV2aWNlLnByb3RvdHlwZS5zZXRWaWV3cG9ydCA9IGZ1bmN0aW9uIHNldFZpZXdwb3J0KHgsIHksIHcsIGgpIHtcbiAgaWYgKHRoaXMuX3Z4ICE9PSB4IHx8IHRoaXMuX3Z5ICE9PSB5IHx8IHRoaXMuX3Z3ICE9PSB3IHx8IHRoaXMuX3ZoICE9PSBoKSB7XG4gICAgdGhpcy5fdnggPSB4O1xuICAgIHRoaXMuX3Z5ID0geTtcbiAgICB0aGlzLl92dyA9IHc7XG4gICAgdGhpcy5fdmggPSBoO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2Qgc2V0U2Npc3NvclxuICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gKiBAcGFyYW0ge051bWJlcn0gd1xuICogQHBhcmFtIHtOdW1iZXJ9IGhcbiAqL1xuRGV2aWNlLnByb3RvdHlwZS5zZXRTY2lzc29yID0gZnVuY3Rpb24gc2V0U2Npc3Nvcih4LCB5LCB3LCBoKSB7XG4gIGlmICh0aGlzLl9zeCAhPT0geCB8fCB0aGlzLl9zeSAhPT0geSB8fCB0aGlzLl9zdyAhPT0gdyB8fCB0aGlzLl9zaCAhPT0gaCkge1xuICAgIHRoaXMuX3N4ID0geDtcbiAgICB0aGlzLl9zeSA9IHk7XG4gICAgdGhpcy5fc3cgPSB3O1xuICAgIHRoaXMuX3NoID0gaDtcbiAgfVxufTtcblxuRGV2aWNlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKGNvbG9yKSB7XG4gIHZhciBjdHggPSB0aGlzLl9jdHg7XG4gIGN0eC5jbGVhclJlY3QodGhpcy5fdngsIHRoaXMuX3Z5LCB0aGlzLl92dywgdGhpcy5fdmgpO1xuICBpZiAoY29sb3IgJiYgKGNvbG9yWzBdICE9PSAwIHx8IGNvbG9yWzFdICE9PSAwIHx8IGNvbG9yWzJdICE9PSAwKSkge1xuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiKCcgKyBjb2xvclswXSArICcsJyArIGNvbG9yWzFdICsgJywnICsgY29sb3JbMl0gKyAnKSc7XG4gICAgY3R4Lmdsb2JhbEFscGhhID0gY29sb3JbM107XG4gICAgY3R4LmZpbGxSZWN0KHRoaXMuX3Z4LCB0aGlzLl92eSwgdGhpcy5fdncsIHRoaXMuX3ZoKTtcbiAgfVxufTtcblxuRGV2aWNlLnByb3RvdHlwZS5yZXNldERyYXdDYWxscyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fc3RhdHMuZHJhd2NhbGxzID0gMDtcbn07XG5cbkRldmljZS5wcm90b3R5cGUuZ2V0RHJhd0NhbGxzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fc3RhdHMuZHJhd2NhbGxzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZXZpY2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1JsZG1salpTNXFjeUpkTENKdVlXMWxjeUk2V3lKRVpYWnBZMlVpTENKallXNTJZWE5GVENJc0ltTjBlQ0lzSW1kbGRFTnZiblJsZUhRaUxDSmxjbklpTENKamIyNXpiMnhsSWl3aVpYSnliM0lpTENKZlkyRnVkbUZ6SWl3aVgyTjBlQ0lzSWw5allYQnpJaXdpWDNOMFlYUnpJaXdpWkhKaGQyTmhiR3h6SWl3aVgzWjRJaXdpWDNaNUlpd2lYM1ozSWl3aVgzWm9JaXdpWDNONElpd2lYM041SWl3aVgzTjNJaXdpWDNOb0lpd2ljSEp2ZEc5MGVYQmxJaXdpWDNKbGMzUnZjbVZVWlhoMGRYSmxJaXdpZFc1cGRDSXNJbk5sZEZacFpYZHdiM0owSWl3aWVDSXNJbmtpTENKM0lpd2lhQ0lzSW5ObGRGTmphWE56YjNJaUxDSmpiR1ZoY2lJc0ltTnZiRzl5SWl3aVkyeGxZWEpTWldOMElpd2labWxzYkZOMGVXeGxJaXdpWjJ4dlltRnNRV3h3YUdFaUxDSm1hV3hzVW1WamRDSXNJbkpsYzJWMFJISmhkME5oYkd4eklpd2laMlYwUkhKaGQwTmhiR3h6SWl3aWJXOWtkV3hsSWl3aVpYaHdiM0owY3lKZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRFFUczdRVUZGUVN4SlFVRkpRU3hUUVVGVExGTkJRVk5CTEUxQlFWUXNRMEZCWjBKRExGRkJRV2hDTEVWQlFUQkNPMEZCUTNKRExFMUJRVWxETEVkQlFVbzdPMEZCUlVFc1RVRkJTVHRCUVVOR1FTeFZRVUZOUkN4VFFVRlRSU3hWUVVGVUxFTkJRVzlDTEVsQlFYQkNMRU5CUVU0N1FVRkRSQ3hIUVVaRUxFTkJSVVVzVDBGQlQwTXNSMEZCVUN4RlFVRlpPMEZCUTFwRExGbEJRVkZETEV0QlFWSXNRMEZCWTBZc1IwRkJaRHRCUVVOQk8wRkJRMFE3TzBGQlJVUTdRVUZEUVN4UFFVRkxSeXhQUVVGTUxFZEJRV1ZPTEZGQlFXWTdRVUZEUVN4UFFVRkxUeXhKUVVGTUxFZEJRVmxPTEVkQlFWbzdRVUZEUVN4UFFVRkxUeXhMUVVGTUxFZEJRV0VzUlVGQllpeERRV0p4UXl4RFFXRndRanRCUVVOcVFpeFBRVUZMUXl4TlFVRk1MRWRCUVdNN1FVRkRXa01zWlVGQlZ6dEJRVVJETEVkQlFXUTdPMEZCU1VFN1FVRkRRU3hQUVVGTFF5eEhRVUZNTEVkQlFWY3NTMEZCUzBNc1IwRkJUQ3hIUVVGWExFdEJRVXRETEVkQlFVd3NSMEZCVnl4TFFVRkxReXhIUVVGTUxFZEJRVmNzUTBGQk5VTTdRVUZEUVN4UFFVRkxReXhIUVVGTUxFZEJRVmNzUzBGQlMwTXNSMEZCVEN4SFFVRlhMRXRCUVV0RExFZEJRVXdzUjBGQlZ5eExRVUZMUXl4SFFVRk1MRWRCUVZjc1EwRkJOVU03UVVGRFJDeERRWEpDUkRzN1FVRjFRa0Z1UWl4UFFVRlBiMElzVTBGQlVDeERRVUZwUWtNc1pVRkJha0lzUjBGQmJVTXNVMEZCVTBFc1pVRkJWQ3hEUVVFd1FrTXNTVUZCTVVJc1JVRkJaME1zUTBGRGJFVXNRMEZFUkRzN1FVRkhRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPenM3T3pzN1FVRlBRWFJDTEU5QlFVOXZRaXhUUVVGUUxFTkJRV2xDUnl4WFFVRnFRaXhIUVVFclFpeFRRVUZUUVN4WFFVRlVMRU5CUVhOQ1F5eERRVUYwUWl4RlFVRjVRa01zUTBGQmVrSXNSVUZCTkVKRExFTkJRVFZDTEVWQlFTdENReXhEUVVFdlFpeEZRVUZyUXp0QlFVTXZSQ3hOUVVORkxFdEJRVXRtTEVkQlFVd3NTMEZCWVZrc1EwRkJZaXhKUVVOQkxFdEJRVXRZTEVkQlFVd3NTMEZCWVZrc1EwRkVZaXhKUVVWQkxFdEJRVXRZTEVkQlFVd3NTMEZCWVZrc1EwRkdZaXhKUVVkQkxFdEJRVXRZTEVkQlFVd3NTMEZCWVZrc1EwRktaaXhGUVV0Rk8wRkJRMEVzVTBGQlMyWXNSMEZCVEN4SFFVRlhXU3hEUVVGWU8wRkJRMEVzVTBGQlMxZ3NSMEZCVEN4SFFVRlhXU3hEUVVGWU8wRkJRMEVzVTBGQlMxZ3NSMEZCVEN4SFFVRlhXU3hEUVVGWU8wRkJRMEVzVTBGQlMxZ3NSMEZCVEN4SFFVRlhXU3hEUVVGWU8wRkJRMFE3UVVGRFJpeERRVnBFT3p0QlFXTkJPenM3T3pzN08wRkJUMEV6UWl4UFFVRlBiMElzVTBGQlVDeERRVUZwUWxFc1ZVRkJha0lzUjBGQk9FSXNVMEZCVTBFc1ZVRkJWQ3hEUVVGeFFrb3NRMEZCY2tJc1JVRkJkMEpETEVOQlFYaENMRVZCUVRKQ1F5eERRVUV6UWl4RlFVRTRRa01zUTBGQk9VSXNSVUZCYVVNN1FVRkROMFFzVFVGRFJTeExRVUZMV0N4SFFVRk1MRXRCUVdGUkxFTkJRV0lzU1VGRFFTeExRVUZMVUN4SFFVRk1MRXRCUVdGUkxFTkJSR0lzU1VGRlFTeExRVUZMVUN4SFFVRk1MRXRCUVdGUkxFTkJSbUlzU1VGSFFTeExRVUZMVUN4SFFVRk1MRXRCUVdGUkxFTkJTbVlzUlVGTFJUdEJRVU5CTEZOQlFVdFlMRWRCUVV3c1IwRkJWMUVzUTBGQldEdEJRVU5CTEZOQlFVdFFMRWRCUVV3c1IwRkJWMUVzUTBGQldEdEJRVU5CTEZOQlFVdFFMRWRCUVV3c1IwRkJWMUVzUTBGQldEdEJRVU5CTEZOQlFVdFFMRWRCUVV3c1IwRkJWMUVzUTBGQldEdEJRVU5FTzBGQlEwWXNRMEZhUkRzN1FVRmpRVE5DTEU5QlFVOXZRaXhUUVVGUUxFTkJRV2xDVXl4TFFVRnFRaXhIUVVGNVFpeFRRVUZUUVN4TFFVRlVMRU5CUVdkQ1F5eExRVUZvUWl4RlFVRjFRanRCUVVNNVF5eE5RVUZKTlVJc1RVRkJUU3hMUVVGTFRTeEpRVUZtTzBGQlEwRk9MRTFCUVVrMlFpeFRRVUZLTEVOQlFXTXNTMEZCUzI1Q0xFZEJRVzVDTEVWQlFYZENMRXRCUVV0RExFZEJRVGRDTEVWQlFXdERMRXRCUVV0RExFZEJRWFpETEVWQlFUUkRMRXRCUVV0RExFZEJRV3BFTzBGQlEwRXNUVUZCU1dVc1ZVRkJWVUVzVFVGQlRTeERRVUZPTEUxQlFXRXNRMEZCWWl4SlFVRnJRa0VzVFVGQlRTeERRVUZPTEUxQlFXRXNRMEZCTDBJc1NVRkJiME5CTEUxQlFVMHNRMEZCVGl4TlFVRmhMRU5CUVRORUxFTkJRVW9zUlVGQmJVVTdRVUZEYWtVMVFpeFJRVUZKT0VJc1UwRkJTaXhIUVVGblFpeFRRVUZUUml4TlFVRk5MRU5CUVU0c1EwRkJWQ3hIUVVGdlFpeEhRVUZ3UWl4SFFVRXdRa0VzVFVGQlRTeERRVUZPTEVOQlFURkNMRWRCUVhGRExFZEJRWEpETEVkQlFUSkRRU3hOUVVGTkxFTkJRVTRzUTBGQk0wTXNSMEZCY1VRc1IwRkJja1U3UVVGRFFUVkNMRkZCUVVrclFpeFhRVUZLTEVkQlFXdENTQ3hOUVVGTkxFTkJRVTRzUTBGQmJFSTdRVUZEUVRWQ0xGRkJRVWxuUXl4UlFVRktMRU5CUVdFc1MwRkJTM1JDTEVkQlFXeENMRVZCUVhWQ0xFdEJRVXRETEVkQlFUVkNMRVZCUVdsRExFdEJRVXRETEVkQlFYUkRMRVZCUVRKRExFdEJRVXRETEVkQlFXaEVPMEZCUTBRN1FVRkRSaXhEUVZKRU96dEJRVlZCWml4UFFVRlBiMElzVTBGQlVDeERRVUZwUW1Vc1kwRkJha0lzUjBGQmEwTXNXVUZCV1R0QlFVTTFReXhQUVVGTGVrSXNUVUZCVEN4RFFVRlpReXhUUVVGYUxFZEJRWGRDTEVOQlFYaENPMEZCUTBRc1EwRkdSRHM3UVVGSlFWZ3NUMEZCVDI5Q0xGTkJRVkFzUTBGQmFVSm5RaXhaUVVGcVFpeEhRVUZuUXl4WlFVRlpPMEZCUXpGRExGTkJRVThzUzBGQlN6RkNMRTFCUVV3c1EwRkJXVU1zVTBGQmJrSTdRVUZEUkN4RFFVWkVPenRCUVVsQk1FSXNUMEZCVDBNc1QwRkJVQ3hIUVVGcFFuUkRMRTFCUVdwQ0lpd2labWxzWlNJNklrUmxkbWxqWlM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbHh1THk4Z1EyOXdlWEpwWjJoMElDaGpLU0F5TURFM0xUSXdNVGdnV0dsaGJXVnVJRmxoYW1rZ1UyOW1kSGRoY21VZ1EyOHVMQ0JNZEdRdUlDQmNiaUJjYm5aaGNpQkVaWFpwWTJVZ1BTQm1kVzVqZEdsdmJpQkVaWFpwWTJVb1kyRnVkbUZ6UlV3cElIdGNiaUFnZG1GeUlHTjBlRHRjYmx4dUlDQjBjbmtnZTF4dUlDQWdJR04wZUNBOUlHTmhiblpoYzBWTUxtZGxkRU52Ym5SbGVIUW9KekprSnlrN1hHNGdJSDBnWTJGMFkyZ2dLR1Z5Y2lrZ2UxeHVJQ0FnSUdOdmJuTnZiR1V1WlhKeWIzSW9aWEp5S1R0Y2JpQWdJQ0J5WlhSMWNtNDdYRzRnSUgxY2JseHVJQ0F2THlCemRHRjBhV056WEc0Z0lIUm9hWE11WDJOaGJuWmhjeUE5SUdOaGJuWmhjMFZNTzF4dUlDQjBhR2x6TGw5amRIZ2dQU0JqZEhnN1hHNGdJSFJvYVhNdVgyTmhjSE1nUFNCN2ZUc2dMeThnWTJGd1lXSnBiR2wwZVZ4dUlDQjBhR2x6TGw5emRHRjBjeUE5SUh0Y2JpQWdJQ0JrY21GM1kyRnNiSE02SURBc1hHNGdJSDA3WEc1Y2JpQWdMeThnY25WdWRHbHRaVnh1SUNCMGFHbHpMbDkyZUNBOUlIUm9hWE11WDNaNUlEMGdkR2hwY3k1ZmRuY2dQU0IwYUdsekxsOTJhQ0E5SURBN1hHNGdJSFJvYVhNdVgzTjRJRDBnZEdocGN5NWZjM2tnUFNCMGFHbHpMbDl6ZHlBOUlIUm9hWE11WDNOb0lEMGdNRHRjYm4wN1hHNWNia1JsZG1salpTNXdjbTkwYjNSNWNHVXVYM0psYzNSdmNtVlVaWGgwZFhKbElEMGdablZ1WTNScGIyNGdYM0psYzNSdmNtVlVaWGgwZFhKbElDaDFibWwwS1NCN1hHNTlPMXh1WEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc0dkx5QkpiVzFsWkdsaGRHVWdVMlYwZEdsdVozTmNiaTh2SUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNibHh1THlvcVhHNGdLaUJBYldWMGFHOWtJSE5sZEZacFpYZHdiM0owWEc0Z0tpQkFjR0Z5WVcwZ2UwNTFiV0psY24wZ2VGeHVJQ29nUUhCaGNtRnRJSHRPZFcxaVpYSjlJSGxjYmlBcUlFQndZWEpoYlNCN1RuVnRZbVZ5ZlNCM1hHNGdLaUJBY0dGeVlXMGdlMDUxYldKbGNuMGdhRnh1SUNvdlhHNUVaWFpwWTJVdWNISnZkRzkwZVhCbExuTmxkRlpwWlhkd2IzSjBJRDBnWm5WdVkzUnBiMjRnYzJWMFZtbGxkM0J2Y25RZ0tIZ3NJSGtzSUhjc0lHZ3BJSHRjYmlBZ2FXWWdLRnh1SUNBZ0lIUm9hWE11WDNaNElDRTlQU0I0SUh4OFhHNGdJQ0FnZEdocGN5NWZkbmtnSVQwOUlIa2dmSHhjYmlBZ0lDQjBhR2x6TGw5MmR5QWhQVDBnZHlCOGZGeHVJQ0FnSUhSb2FYTXVYM1pvSUNFOVBTQm9YRzRnSUNrZ2UxeHVJQ0FnSUhSb2FYTXVYM1o0SUQwZ2VEdGNiaUFnSUNCMGFHbHpMbDkyZVNBOUlIazdYRzRnSUNBZ2RHaHBjeTVmZG5jZ1BTQjNPMXh1SUNBZ0lIUm9hWE11WDNab0lEMGdhRHRjYmlBZ2ZWeHVmVHRjYmx4dUx5b3FYRzRnS2lCQWJXVjBhRzlrSUhObGRGTmphWE56YjNKY2JpQXFJRUJ3WVhKaGJTQjdUblZ0WW1WeWZTQjRYRzRnS2lCQWNHRnlZVzBnZTA1MWJXSmxjbjBnZVZ4dUlDb2dRSEJoY21GdElIdE9kVzFpWlhKOUlIZGNiaUFxSUVCd1lYSmhiU0I3VG5WdFltVnlmU0JvWEc0Z0tpOWNia1JsZG1salpTNXdjbTkwYjNSNWNHVXVjMlYwVTJOcGMzTnZjaUE5SUdaMWJtTjBhVzl1SUhObGRGTmphWE56YjNJZ0tIZ3NJSGtzSUhjc0lHZ3BJSHRjYmlBZ2FXWWdLRnh1SUNBZ0lIUm9hWE11WDNONElDRTlQU0I0SUh4OFhHNGdJQ0FnZEdocGN5NWZjM2tnSVQwOUlIa2dmSHhjYmlBZ0lDQjBhR2x6TGw5emR5QWhQVDBnZHlCOGZGeHVJQ0FnSUhSb2FYTXVYM05vSUNFOVBTQm9YRzRnSUNrZ2UxeHVJQ0FnSUhSb2FYTXVYM040SUQwZ2VEdGNiaUFnSUNCMGFHbHpMbDl6ZVNBOUlIazdYRzRnSUNBZ2RHaHBjeTVmYzNjZ1BTQjNPMXh1SUNBZ0lIUm9hWE11WDNOb0lEMGdhRHRjYmlBZ2ZWeHVmVHRjYmx4dVJHVjJhV05sTG5CeWIzUnZkSGx3WlM1amJHVmhjaUE5SUdaMWJtTjBhVzl1SUdOc1pXRnlJQ2hqYjJ4dmNpa2dlMXh1SUNCMllYSWdZM1I0SUQwZ2RHaHBjeTVmWTNSNE8xeHVJQ0JqZEhndVkyeGxZWEpTWldOMEtIUm9hWE11WDNaNExDQjBhR2x6TGw5MmVTd2dkR2hwY3k1ZmRuY3NJSFJvYVhNdVgzWm9LVHRjYmlBZ2FXWWdLR052Ykc5eUlDWW1JQ2hqYjJ4dmNsc3dYU0FoUFQwZ01DQjhmQ0JqYjJ4dmNsc3hYU0FoUFQwZ01DQjhmQ0JqYjJ4dmNsc3lYU0FoUFQwZ01Da3BJSHRjYmlBZ0lDQmpkSGd1Wm1sc2JGTjBlV3hsSUQwZ0ozSm5ZaWduSUNzZ1kyOXNiM0piTUYwZ0t5QW5MQ2NnS3lCamIyeHZjbHN4WFNBcklDY3NKeUFySUdOdmJHOXlXekpkSUNzbktTYzdYRzRnSUNBZ1kzUjRMbWRzYjJKaGJFRnNjR2hoSUQwZ1kyOXNiM0piTTEwN1hHNGdJQ0FnWTNSNExtWnBiR3hTWldOMEtIUm9hWE11WDNaNExDQjBhR2x6TGw5MmVTd2dkR2hwY3k1ZmRuY3NJSFJvYVhNdVgzWm9LVHRjYmlBZ2ZWeHVmVHRjYmx4dVJHVjJhV05sTG5CeWIzUnZkSGx3WlM1eVpYTmxkRVJ5WVhkRFlXeHNjeUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnZEdocGN5NWZjM1JoZEhNdVpISmhkMk5oYkd4eklEMGdNRHRjYm4xY2JseHVSR1YyYVdObExuQnliM1J2ZEhsd1pTNW5aWFJFY21GM1EyRnNiSE1nUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUhKbGRIVnliaUIwYUdsekxsOXpkR0YwY3k1a2NtRjNZMkZzYkhNN1hHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnUkdWMmFXTmxPMXh1SWwxOSJdfQ==