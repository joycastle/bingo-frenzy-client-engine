(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/utils/profiler/counter.js';
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
        var Counter = cc.Class({
            name: 'cc.Counter',
            ctor: function ctor(id, opts, now) {
                this._id = id;
                this._opts = opts || {};
                this._value = 0;
                this._total = 0;
                this._averageValue = 0;
                this._accumValue = 0;
                this._accumSamples = 0;
                this._accumStart = now;
            },
            properties: {
                value: {
                    get: function get() {
                        return this._value;
                    },
                    set: function set(v) {
                        this._value = v;
                    }
                }
            },
            _average: function _average(v, now) {
                if (this._opts.average) {
                    this._accumValue += v;
                    ++this._accumSamples;
                    var t = now;
                    if (t - this._accumStart >= this._opts.average) {
                        this._averageValue = this._accumValue / this._accumSamples;
                        this._accumValue = 0;
                        this._accumStart = t;
                        this._accumSamples = 0;
                    }
                }
            },
            sample: function sample(now) {
                this._average(this._value, now);
            },
            human: function human() {
                var v = this._opts.average ? this._averageValue : this._value;
                return Math.round(v * 100) / 100;
            },
            alarm: function alarm() {
                return this._opts.below && this._value < this._opts.below || this._opts.over && this._value > this._opts.over;
            }
        });
        module.exports = Counter;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiLCIvVXNlcnMvZ2FveWFuZy9Xb3JrU3BhY2Uvam95Y2FzdGxlL2JpbmdvL2NsaWVudC9iaW5nby9lbmdpbmUvY29jb3MyZC9jb3JlL3V0aWxzL3Byb2ZpbGVyL2NvdW50ZXIuanMiXSwibmFtZXMiOlsiQ2xhc3MiLCJpZCIsIm9wdHMiLCJfYXZlcmFnZVZhbHVlIiwiQ291bnRlciIsImNjIiwibmFtZSIsImN0b3IiLCJub3ciLCJfaWQiLCJfb3B0cyIsIl92YWx1ZSIsIl90b3RhbCIsIl9hY2N1bVZhbHVlIiwiX2FjY3VtU2FtcGxlcyIsIl9hY2N1bVN0YXJ0IiwicHJvcGVydGllcyIsInZhbHVlIiwiZ2V0Iiwic2V0IiwidiIsIl9hdmVyYWdlIiwiYXZlcmFnZSIsInQiLCJzYW1wbGUiLCJodW1hbiIsIk1hdGgiLCJyb3VuZCIsImFsYXJtIiwiYmVsb3ciLCJvdmVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtJQUFpQkEsSUFBTSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQU5BO0lBQ1AsSUFEYSxRQUFBLEdBQUEsT0FBQSxHQUFBLE1BQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxFQUFBLEVBQ2I7SUFEYSxJQUViQyxVQUFBQSxHQUZhLG1EQUFBO0lBR0pBLElBQVgsU0FBQSxHQUFBLE9BQUEsR0FBQSxVQUFBLE9BQUEsRUFBQTtBQUFBLFFBQ2FDLE9BQWIsT0FBQSxDQUFBLE9BQUEsQ0FBYUEsQ0FEYjtBQUFBLEtBQUE7UUFHQSxPQUFBLGlCQUFBLENBQUEsT0FBQSxDQUFBLE9BQUEsRUFBQSxVQUFBLENBQUE7S0FIV0Q7SUFLTkUsU0FBZ0IsUUFBaEJBLENBQUwsT0FBS0EsRUFBTCxPQUFLQSxFQUFMLE1BQUtBLEVBQUw7QUFBQSxRQUNBLElBQUEsQ0FBQSxPQUFBLEVBQUE7QUFBQSxZQUFBLGlCQUFBLENBQUEsY0FBQSxDQUFBLFVBQUEsRUFBQSxNQUFBLEVBQUE7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LEdBQWMsS0FBS0QsS0FBTCxDQUFXb0IsSUFGakQsQ0FESztBQUFBLGFBakRVO0FBQUEsU0FBVHpCLENBQWQ7UUF5REEwQixNQUFBQSxDQUFPQyxPQUFQRCxHQUFpQjNCLE9BQWpCMkIsQ0FqRFE7QUFBQTtJQUdLaEIsSUFBTCxPQUFLQSxFQUFMO0FBQUEsUUFYZSxRQUFBLENBQUEsUUFBQSxDQUFBLE9BQUEsRUFBQSxTQUFBLEVBQUEsUUFBQSxFQVdmO0FBQUEsS0FBS0E7UUFHRyxpQkFBQSxDQUFBLGtCQUFBLENBQUEsVUFBQSxFQUFBLFlBQUE7QUFBQSxZQUNELFFBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxRQUFBLEVBREM7QUFBQSxTQUFBIiwiZmlsZSI6ImNvdW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgQ291bnRlciA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnY2MuQ291bnRlcicsXG4gICAgY3RvciAoaWQsIG9wdHMsIG5vdykge1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl9vcHRzID0gb3B0cyB8fCB7fTtcblxuICAgICAgICB0aGlzLl92YWx1ZSA9IDA7XG4gICAgICAgIHRoaXMuX3RvdGFsID0gMDtcbiAgICAgICAgdGhpcy5fYXZlcmFnZVZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5fYWNjdW1WYWx1ZSA9IDA7XG4gICAgICAgIHRoaXMuX2FjY3VtU2FtcGxlcyA9IDA7XG4gICAgICAgIHRoaXMuX2FjY3VtU3RhcnQgPSBub3c7XG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCAodikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfYXZlcmFnZSAodiwgbm93KSB7XG4gICAgICAgIGlmICh0aGlzLl9vcHRzLmF2ZXJhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2FjY3VtVmFsdWUgKz0gdjtcbiAgICAgICAgICAgICsrdGhpcy5fYWNjdW1TYW1wbGVzO1xuXG4gICAgICAgICAgICBsZXQgdCA9IG5vdztcbiAgICAgICAgICAgIGlmICh0IC0gdGhpcy5fYWNjdW1TdGFydCA+PSB0aGlzLl9vcHRzLmF2ZXJhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hdmVyYWdlVmFsdWUgPSB0aGlzLl9hY2N1bVZhbHVlIC8gdGhpcy5fYWNjdW1TYW1wbGVzO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FjY3VtVmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FjY3VtU3RhcnQgPSB0O1xuICAgICAgICAgICAgICAgIHRoaXMuX2FjY3VtU2FtcGxlcyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2FtcGxlIChub3cpIHtcbiAgICAgICAgdGhpcy5fYXZlcmFnZSh0aGlzLl92YWx1ZSwgbm93KTtcbiAgICB9LFxuXG4gICAgaHVtYW4gKCkge1xuICAgICAgICBsZXQgdiA9IHRoaXMuX29wdHMuYXZlcmFnZSA/IHRoaXMuX2F2ZXJhZ2VWYWx1ZSA6IHRoaXMuX3ZhbHVlO1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2ICogMTAwKSAvIDEwMDtcbiAgICB9LFxuXG4gICAgYWxhcm0gKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKHRoaXMuX29wdHMuYmVsb3cgJiYgdGhpcy5fdmFsdWUgPCB0aGlzLl9vcHRzLmJlbG93KSB8fFxuICAgICAgICAgICAgKHRoaXMuX29wdHMub3ZlciAmJiB0aGlzLl92YWx1ZSA+IHRoaXMuX29wdHMub3ZlcilcbiAgICAgICAgKTtcbiAgICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvdW50ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDb3VudGVyID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdjYy5Db3VudGVyJyxcbiAgICBjdG9yOiBmdW5jdGlvbiBjdG9yKGlkLCBvcHRzLCBub3cpIHtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5fb3B0cyA9IG9wdHMgfHwge307XG5cbiAgICAgICAgdGhpcy5fdmFsdWUgPSAwO1xuICAgICAgICB0aGlzLl90b3RhbCA9IDA7XG4gICAgICAgIHRoaXMuX2F2ZXJhZ2VWYWx1ZSA9IDA7XG4gICAgICAgIHRoaXMuX2FjY3VtVmFsdWUgPSAwO1xuICAgICAgICB0aGlzLl9hY2N1bVNhbXBsZXMgPSAwO1xuICAgICAgICB0aGlzLl9hY2N1bVN0YXJ0ID0gbm93O1xuICAgIH0sXG5cblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9hdmVyYWdlOiBmdW5jdGlvbiBfYXZlcmFnZSh2LCBub3cpIHtcbiAgICAgICAgaWYgKHRoaXMuX29wdHMuYXZlcmFnZSkge1xuICAgICAgICAgICAgdGhpcy5fYWNjdW1WYWx1ZSArPSB2O1xuICAgICAgICAgICAgKyt0aGlzLl9hY2N1bVNhbXBsZXM7XG5cbiAgICAgICAgICAgIHZhciB0ID0gbm93O1xuICAgICAgICAgICAgaWYgKHQgLSB0aGlzLl9hY2N1bVN0YXJ0ID49IHRoaXMuX29wdHMuYXZlcmFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2F2ZXJhZ2VWYWx1ZSA9IHRoaXMuX2FjY3VtVmFsdWUgLyB0aGlzLl9hY2N1bVNhbXBsZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWNjdW1WYWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWNjdW1TdGFydCA9IHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWNjdW1TYW1wbGVzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2FtcGxlOiBmdW5jdGlvbiBzYW1wbGUobm93KSB7XG4gICAgICAgIHRoaXMuX2F2ZXJhZ2UodGhpcy5fdmFsdWUsIG5vdyk7XG4gICAgfSxcbiAgICBodW1hbjogZnVuY3Rpb24gaHVtYW4oKSB7XG4gICAgICAgIHZhciB2ID0gdGhpcy5fb3B0cy5hdmVyYWdlID8gdGhpcy5fYXZlcmFnZVZhbHVlIDogdGhpcy5fdmFsdWU7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHYgKiAxMDApIC8gMTAwO1xuICAgIH0sXG4gICAgYWxhcm06IGZ1bmN0aW9uIGFsYXJtKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0cy5iZWxvdyAmJiB0aGlzLl92YWx1ZSA8IHRoaXMuX29wdHMuYmVsb3cgfHwgdGhpcy5fb3B0cy5vdmVyICYmIHRoaXMuX3ZhbHVlID4gdGhpcy5fb3B0cy5vdmVyO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvdW50ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbU52ZFc1MFpYSXVhbk1pWFN3aWJtRnRaWE1pT2xzaVEyOTFiblJsY2lJc0ltTmpJaXdpUTJ4aGMzTWlMQ0p1WVcxbElpd2lZM1J2Y2lJc0ltbGtJaXdpYjNCMGN5SXNJbTV2ZHlJc0lsOXBaQ0lzSWw5dmNIUnpJaXdpWDNaaGJIVmxJaXdpWDNSdmRHRnNJaXdpWDJGMlpYSmhaMlZXWVd4MVpTSXNJbDloWTJOMWJWWmhiSFZsSWl3aVgyRmpZM1Z0VTJGdGNHeGxjeUlzSWw5aFkyTjFiVk4wWVhKMElpd2ljSEp2Y0dWeWRHbGxjeUlzSW5aaGJIVmxJaXdpWjJWMElpd2ljMlYwSWl3aWRpSXNJbDloZG1WeVlXZGxJaXdpWVhabGNtRm5aU0lzSW5RaUxDSnpZVzF3YkdVaUxDSm9kVzFoYmlJc0lrMWhkR2dpTENKeWIzVnVaQ0lzSW1Gc1lYSnRJaXdpWW1Wc2IzY2lMQ0p2ZG1WeUlpd2liVzlrZFd4bElpd2laWGh3YjNKMGN5SmRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3hKUVVGSlFTeFZRVUZWUXl4SFFVRkhReXhMUVVGSUxFTkJRVk03UVVGRGJrSkRMRlZCUVUwc1dVRkVZVHRCUVVWdVFrTXNVVUZHYlVJc1owSkJSV0pETEVWQlJtRXNSVUZGVkVNc1NVRkdVeXhGUVVWSVF5eEhRVVpITEVWQlJVVTdRVUZEYWtJc1lVRkJTME1zUjBGQlRDeEhRVUZYU0N4RlFVRllPMEZCUTBFc1lVRkJTMGtzUzBGQlRDeEhRVUZoU0N4UlFVRlJMRVZCUVhKQ096dEJRVVZCTEdGQlFVdEpMRTFCUVV3c1IwRkJZeXhEUVVGa08wRkJRMEVzWVVGQlMwTXNUVUZCVEN4SFFVRmpMRU5CUVdRN1FVRkRRU3hoUVVGTFF5eGhRVUZNTEVkQlFYRkNMRU5CUVhKQ08wRkJRMEVzWVVGQlMwTXNWMEZCVEN4SFFVRnRRaXhEUVVGdVFqdEJRVU5CTEdGQlFVdERMR0ZCUVV3c1IwRkJjVUlzUTBGQmNrSTdRVUZEUVN4aFFVRkxReXhYUVVGTUxFZEJRVzFDVWl4SFFVRnVRanRCUVVOSUxFdEJXbXRDT3pzN1FVRmpia0pUTEdkQ1FVRlpPMEZCUTFKRExHVkJRVTg3UVVGRFNFTXNaVUZFUnl4cFFrRkRTVHRCUVVOSUxIVkNRVUZQTEV0QlFVdFNMRTFCUVZvN1FVRkRTQ3hoUVVoRk8wRkJTVWhUTEdWQlNrY3NaVUZKUlVNc1EwRktSaXhGUVVsTE8wRkJRMG9zY1VKQlFVdFdMRTFCUVV3c1IwRkJZMVVzUTBGQlpEdEJRVU5JTzBGQlRrVTdRVUZFUXl4TFFXUlBPenRCUVhsQ2JrSkRMRmxCZWtKdFFpeHZRa0Y1UWxSRUxFTkJla0pUTEVWQmVVSk9ZaXhIUVhwQ1RTeEZRWGxDUkR0QlFVTmtMRmxCUVVrc1MwRkJTMFVzUzBGQlRDeERRVUZYWVN4UFFVRm1MRVZCUVhkQ08wRkJRM0JDTEdsQ1FVRkxWQ3hYUVVGTUxFbEJRVzlDVHl4RFFVRndRanRCUVVOQkxHTkJRVVVzUzBGQlMwNHNZVUZCVURzN1FVRkZRU3huUWtGQlNWTXNTVUZCU1doQ0xFZEJRVkk3UVVGRFFTeG5Ra0ZCU1dkQ0xFbEJRVWtzUzBGQlMxSXNWMEZCVkN4SlFVRjNRaXhMUVVGTFRpeExRVUZNTEVOQlFWZGhMRTlCUVhaRExFVkJRV2RFTzBGQlF6VkRMSEZDUVVGTFZpeGhRVUZNTEVkQlFYRkNMRXRCUVV0RExGZEJRVXdzUjBGQmJVSXNTMEZCUzBNc1lVRkJOME03UVVGRFFTeHhRa0ZCUzBRc1YwRkJUQ3hIUVVGdFFpeERRVUZ1UWp0QlFVTkJMSEZDUVVGTFJTeFhRVUZNTEVkQlFXMUNVU3hEUVVGdVFqdEJRVU5CTEhGQ1FVRkxWQ3hoUVVGTUxFZEJRWEZDTEVOQlFYSkNPMEZCUTBnN1FVRkRTanRCUVVOS0xFdEJkRU5yUWp0QlFYZERia0pWTEZWQmVFTnRRaXhyUWtGM1ExaHFRaXhIUVhoRFZ5eEZRWGREVGp0QlFVTlVMR0ZCUVV0akxGRkJRVXdzUTBGQll5eExRVUZMV0N4TlFVRnVRaXhGUVVFeVFrZ3NSMEZCTTBJN1FVRkRTQ3hMUVRGRGEwSTdRVUUwUTI1Q2EwSXNVMEUxUTIxQ0xHMUNRVFJEVmp0QlFVTk1MRmxCUVVsTUxFbEJRVWtzUzBGQlMxZ3NTMEZCVEN4RFFVRlhZU3hQUVVGWUxFZEJRWEZDTEV0QlFVdFdMR0ZCUVRGQ0xFZEJRVEJETEV0QlFVdEdMRTFCUVhaRU8wRkJRMEVzWlVGQlQyZENMRXRCUVV0RExFdEJRVXdzUTBGQlYxQXNTVUZCU1N4SFFVRm1MRWxCUVhOQ0xFZEJRVGRDTzBGQlEwZ3NTMEV2UTJ0Q08wRkJhVVJ1UWxFc1UwRnFSRzFDTEcxQ1FXbEVWanRCUVVOTUxHVkJRMHNzUzBGQlMyNUNMRXRCUVV3c1EwRkJWMjlDTEV0QlFWZ3NTVUZCYjBJc1MwRkJTMjVDTEUxQlFVd3NSMEZCWXl4TFFVRkxSQ3hMUVVGTUxFTkJRVmR2UWl4TFFVRTVReXhKUVVORExFdEJRVXR3UWl4TFFVRk1MRU5CUVZkeFFpeEpRVUZZTEVsQlFXMUNMRXRCUVV0d1FpeE5RVUZNTEVkQlFXTXNTMEZCUzBRc1MwRkJUQ3hEUVVGWGNVSXNTVUZHYWtRN1FVRkpTRHRCUVhSRWEwSXNRMEZCVkN4RFFVRmtPenRCUVhsRVFVTXNUMEZCVDBNc1QwRkJVQ3hIUVVGcFFtaERMRTlCUVdwQ0lpd2labWxzWlNJNkltTnZkVzUwWlhJdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpzWlhRZ1EyOTFiblJsY2lBOUlHTmpMa05zWVhOektIdGNiaUFnSUNCdVlXMWxPaUFuWTJNdVEyOTFiblJsY2ljc1hHNGdJQ0FnWTNSdmNpQW9hV1FzSUc5d2RITXNJRzV2ZHlrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5cFpDQTlJR2xrTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbDl2Y0hSeklEMGdiM0IwY3lCOGZDQjdmVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbDkyWVd4MVpTQTlJREE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYM1J2ZEdGc0lEMGdNRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZZWFpsY21GblpWWmhiSFZsSUQwZ01EdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZllXTmpkVzFXWVd4MVpTQTlJREE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMkZqWTNWdFUyRnRjR3hsY3lBOUlEQTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyRmpZM1Z0VTNSaGNuUWdQU0J1YjNjN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhCeWIzQmxjblJwWlhNNklIdGNiaUFnSUNBZ0lDQWdkbUZzZFdVNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdkbGRDQW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVgzWmhiSFZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lITmxkQ0FvZGlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDNaaGJIVmxJRDBnZGp0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JmWVhabGNtRm5aU0FvZGl3Z2JtOTNLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TGw5dmNIUnpMbUYyWlhKaFoyVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDJGalkzVnRWbUZzZFdVZ0t6MGdkanRjYmlBZ0lDQWdJQ0FnSUNBZ0lDc3JkR2hwY3k1ZllXTmpkVzFUWVcxd2JHVnpPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnZENBOUlHNXZkenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwSUMwZ2RHaHBjeTVmWVdOamRXMVRkR0Z5ZENBK1BTQjBhR2x6TGw5dmNIUnpMbUYyWlhKaFoyVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOWhkbVZ5WVdkbFZtRnNkV1VnUFNCMGFHbHpMbDloWTJOMWJWWmhiSFZsSUM4Z2RHaHBjeTVmWVdOamRXMVRZVzF3YkdWek8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDJGalkzVnRWbUZzZFdVZ1BTQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVgyRmpZM1Z0VTNSaGNuUWdQU0IwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYMkZqWTNWdFUyRnRjR3hsY3lBOUlEQTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzRnSUNBZ2MyRnRjR3hsSUNodWIzY3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZZWFpsY21GblpTaDBhR2x6TGw5MllXeDFaU3dnYm05M0tUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ2FIVnRZVzRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQnNaWFFnZGlBOUlIUm9hWE11WDI5d2RITXVZWFpsY21GblpTQS9JSFJvYVhNdVgyRjJaWEpoWjJWV1lXeDFaU0E2SUhSb2FYTXVYM1poYkhWbE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1RXRjBhQzV5YjNWdVpDaDJJQ29nTVRBd0tTQXZJREV3TUR0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnWVd4aGNtMGdLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnSUNBZ0lDQWdLSFJvYVhNdVgyOXdkSE11WW1Wc2IzY2dKaVlnZEdocGN5NWZkbUZzZFdVZ1BDQjBhR2x6TGw5dmNIUnpMbUpsYkc5M0tTQjhmRnh1SUNBZ0lDQWdJQ0FnSUNBZ0tIUm9hWE11WDI5d2RITXViM1psY2lBbUppQjBhR2x6TGw5MllXeDFaU0ErSUhSb2FYTXVYMjl3ZEhNdWIzWmxjaWxjYmlBZ0lDQWdJQ0FnS1R0Y2JpQWdJQ0I5WEc1OUtWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRU52ZFc1MFpYSTdYRzRpWFgwPSJdfQ==