(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/utils/profiler/perf-counter.js';
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
        var Counter = require('./counter');
        var PerfCounter = cc.Class({
            name: 'cc.PerfCounter',
            extends: Counter,
            ctor: function ctor(id, opts, now) {
                this._time = now;
            },
            start: function start(now) {
                this._time = now;
            },
            end: function end(now) {
                this._value = now - this._time;
                this._average(this._value);
            },
            tick: function tick() {
                this.end();
                this.start();
            },
            frame: function frame(now) {
                var t = now;
                var e = t - this._time;
                this._total++;
                var avg = this._opts.average || 1000;
                if (e > avg) {
                    this._value = this._total * 1000 / e;
                    this._total = 0;
                    this._time = t;
                    this._average(this._value);
                }
            }
        });
        module.exports = PerfCounter;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmYtY291bnRlci5qcyIsIi9Vc2Vycy9TaGFyZWQvYmluZ29fZnJlbnp5L2VuZ2luZS9jb2NvczJkL2NvcmUvdXRpbHMvcHJvZmlsZXIvcGVyZi1jb3VudGVyLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ291bnRlciIsIlBlcmZDb3VudGVyIiwibmFtZSIsImV4dGVuZHMiLCJjdG9yIiwiaWQiLCJvcHRzIiwibm93IiwiX3RpbWUiLCJzdGFydCIsImVuZCIsIl92YWx1ZSIsIl9hdmVyYWdlIiwidGljayIsImZyYW1lIiwidCIsImUiLCJfdG90YWwiLCJhdmciLCJfb3B0cyIsImF2ZXJhZ2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBQWdCQSxJQUFRLE9BQUEsR0FBeEIsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQWdCQTs7SUFFRUMsSUFBR0MsVUFBQUEsR0FBTSx3REFBVEQ7SUFDVixJQURtQixTQUFBLEdBQUEsT0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBO0FBQUEsUUFBQSxPQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQTtBQUFBLEtBQUE7UUFBQSxPQUFBLGlCQUFBLENBSUosT0FKSSxDQUlKLE9BSkksRUFJSixVQUpJLENBQUE7S0FDbkI7SUFLSixTQUFBLFFBQUEsQ0FBQSxPQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQTtBQUFBLFFBQ0EsSUFBQSxDQUFBLE9BQUEsRUFBQTtBQUFBLFlBQUEsaUJBQUEsQ0FBQSxjQUFBLENBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQTtBQUFBLFNBREE7QUFBQTtRQVJKLElBQU1FLE9BQUFBLEdBQVVILE9BQUFBLENBQVEsV0FBUkEsQ0FBaEI7UUFFQSxJQUFJSSxXQUFBQSxHQUFjSCxFQUFBQSxDQUFHQyxLQUFIRCxDQUFTO0FBQUEsWUFDekJJLElBQUFBLEVBQU0sZ0JBRG1CO0FBQUEsWUFFekJDLE9BQUFBLEVBQVNILE9BRmdCO0FBQUEsWUFJekJJLElBQUFBLEVBSnlCLFNBQUEsSUFBQSxDQUluQkMsRUFKbUIsRUFJZkMsSUFKZSxFQUlUQyxHQUpTLEVBSUo7QUFBQSxnQkFLbkIsS0FBS0MsS0FBTCxHQUFhRCxHQUFiLENBTG1CO0FBQUEsYUFKSTtBQUFBLFlBWXpCRSxLQUFBQSxFQVp5QixTQUFBLEtBQUEsQ0FZbkJGLEdBWm1CLEVBWWQ7QUFBQSxnQkFDVCxLQUFLQyxLQUFMLEdBQWFELEdBQWIsQ0FEUztBQUFBLGFBWmM7QUFBQSxZQW1CekJHLEdBQUFBLEVBbkJ5QixTQUFBLEdBQUEsQ0FtQnJCSCxHQW5CcUIsRUFtQmhCO0FBQUEsZ0JBQ1AsS0FBS0ksTUFBTCxHQUFjSixHQUFBQSxHQUFNLEtBQUtDLEtBQXpCLENBRE87QUFBQSxnQkFPUCxLQUFLSSxRQUFMLENBQWMsS0FBS0QsTUFBbkIsRUFQTztBQUFBLGFBbkJnQjtBQUFBLFlBNkJ6QkUsSUFBQUEsRUE3QnlCLFNBQUEsSUFBQSxHQTZCbEI7QUFBQSxnQkFDTCxLQUFLSCxHQUFMLEdBREs7QUFBQSxnQkFFTCxLQUFLRCxLQUFMLEdBRks7QUFBQSxhQTdCa0I7QUFBQSxZQWtDekJLLEtBQUFBLEVBbEN5QixTQUFBLEtBQUEsQ0FrQ25CUCxHQWxDbUIsRUFrQ2Q7QUFBQSxnQkFDVCxJQUFJUSxDQUFBQSxHQUFJUixHQUFSLENBRFM7QUFBQSxnQkFFVCxJQUFJUyxDQUFBQSxHQUFJRCxDQUFBQSxHQUFJLEtBQUtQLEtBQWpCLENBRlM7QUFBQSxnQkFHVCxLQUFLUyxNQUFMLEdBSFM7QUFBQSxnQkFJVCxJQUFJQyxHQUFBQSxHQUFNLEtBQUtDLEtBQUwsQ0FBV0MsT0FBWCxJQUFzQixJQUFoQyxDQUpTO0FBQUEsZ0JBTVQsSUFBSUosQ0FBQUEsR0FBSUUsR0FBUixFQUFhO0FBQUEsb0JBQ1gsS0FBS1AsTUFBTCxHQUFjLEtBQUtNLE1BQUwsR0FBYyxJQUFkLEdBQXFCRCxDQUFuQyxDQURXO0FBQUEsb0JBRVgsS0FBS0MsTUFBTCxHQUFjLENBQWQsQ0FGVztBQUFBLG9CQUdYLEtBQUtULEtBQUwsR0FBYU8sQ0FBYixDQUhXO0FBQUEsb0JBSVgsS0FBS0gsUUFBTCxDQUFjLEtBQUtELE1BQW5CLEVBSlc7QUFBQSxpQkFOSjtBQUFBLGFBbENjO0FBQUEsU0FBVGIsQ0FBbEI7UUFpREF1QixNQUFBQSxDQUFPQyxPQUFQRCxHQUFpQnBCLFdBQWpCb0IsQ0EzQ0k7QUFBQTtJQUdBLElBQUEsT0FBQSxFQUFBO0FBQUEsUUFUdUIsUUFBQSxDQUFBLFFBQUEsQ0FBQSxPQUFBLEVBQUEsU0FBQSxFQUFBLFFBQUEsRUFTdkI7QUFBQSxLQUFBLE1BSUE7QUFBQTtZQUVBLFFBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxRQUFBO1dBRkE7QUFBQSIsImZpbGUiOiJwZXJmLWNvdW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb3VudGVyID0gcmVxdWlyZSgnLi9jb3VudGVyJyk7XG5cbmxldCBQZXJmQ291bnRlciA9IGNjLkNsYXNzKHtcbiAgbmFtZTogJ2NjLlBlcmZDb3VudGVyJyxcbiAgZXh0ZW5kczogQ291bnRlcixcbiAgXG4gIGN0b3IgKGlkLCBvcHRzLCBub3cpIHtcbiAgICAvLyBESVNBQkxFXG4gICAgLy8gdGhpcy5faWRzdGFydCA9IGAke2lkfV9zdGFydGA7XG4gICAgLy8gdGhpcy5faWRlbmQgPSBgJHtpZH1fZW5kYDtcblxuICAgIHRoaXMuX3RpbWUgPSBub3c7XG4gIH0sXG5cbiAgc3RhcnQobm93KSB7XG4gICAgdGhpcy5fdGltZSA9IG5vdztcblxuICAgIC8vIERJU0FCTEU6IGxvbmcgdGltZSBydW5uaW5nIHdpbGwgY2F1c2UgcGVyZm9ybWFuY2UgZHJvcCBkb3duXG4gICAgLy8gd2luZG93LnBlcmZvcm1hbmNlLm1hcmsodGhpcy5faWRzdGFydCk7XG4gIH0sXG5cbiAgZW5kKG5vdykge1xuICAgIHRoaXMuX3ZhbHVlID0gbm93IC0gdGhpcy5fdGltZTtcblxuICAgIC8vIERJU0FCTEU6IGxvbmcgdGltZSBydW5uaW5nIHdpbGwgY2F1c2UgcGVyZm9ybWFuY2UgZHJvcCBkb3duXG4gICAgLy8gd2luZG93LnBlcmZvcm1hbmNlLm1hcmsodGhpcy5faWRlbmQpO1xuICAgIC8vIHdpbmRvdy5wZXJmb3JtYW5jZS5tZWFzdXJlKHRoaXMuX2lkLCB0aGlzLl9pZHN0YXJ0LCB0aGlzLl9pZGVuZCk7XG5cbiAgICB0aGlzLl9hdmVyYWdlKHRoaXMuX3ZhbHVlKTtcbiAgfSxcblxuICB0aWNrKCkge1xuICAgIHRoaXMuZW5kKCk7XG4gICAgdGhpcy5zdGFydCgpO1xuICB9LFxuXG4gIGZyYW1lKG5vdykge1xuICAgIGxldCB0ID0gbm93O1xuICAgIGxldCBlID0gdCAtIHRoaXMuX3RpbWU7XG4gICAgdGhpcy5fdG90YWwrKztcbiAgICBsZXQgYXZnID0gdGhpcy5fb3B0cy5hdmVyYWdlIHx8IDEwMDA7XG5cbiAgICBpZiAoZSA+IGF2Zykge1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl90b3RhbCAqIDEwMDAgLyBlO1xuICAgICAgdGhpcy5fdG90YWwgPSAwO1xuICAgICAgdGhpcy5fdGltZSA9IHQ7XG4gICAgICB0aGlzLl9hdmVyYWdlKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBlcmZDb3VudGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ291bnRlciA9IHJlcXVpcmUoJy4vY291bnRlcicpO1xuXG52YXIgUGVyZkNvdW50ZXIgPSBjYy5DbGFzcyh7XG4gIG5hbWU6ICdjYy5QZXJmQ291bnRlcicsXG4gIGV4dGVuZHM6IENvdW50ZXIsXG5cbiAgY3RvcjogZnVuY3Rpb24gY3RvcihpZCwgb3B0cywgbm93KSB7XG4gICAgLy8gRElTQUJMRVxuICAgIC8vIHRoaXMuX2lkc3RhcnQgPSBgJHtpZH1fc3RhcnRgO1xuICAgIC8vIHRoaXMuX2lkZW5kID0gYCR7aWR9X2VuZGA7XG5cbiAgICB0aGlzLl90aW1lID0gbm93O1xuICB9LFxuICBzdGFydDogZnVuY3Rpb24gc3RhcnQobm93KSB7XG4gICAgdGhpcy5fdGltZSA9IG5vdztcblxuICAgIC8vIERJU0FCTEU6IGxvbmcgdGltZSBydW5uaW5nIHdpbGwgY2F1c2UgcGVyZm9ybWFuY2UgZHJvcCBkb3duXG4gICAgLy8gd2luZG93LnBlcmZvcm1hbmNlLm1hcmsodGhpcy5faWRzdGFydCk7XG4gIH0sXG4gIGVuZDogZnVuY3Rpb24gZW5kKG5vdykge1xuICAgIHRoaXMuX3ZhbHVlID0gbm93IC0gdGhpcy5fdGltZTtcblxuICAgIC8vIERJU0FCTEU6IGxvbmcgdGltZSBydW5uaW5nIHdpbGwgY2F1c2UgcGVyZm9ybWFuY2UgZHJvcCBkb3duXG4gICAgLy8gd2luZG93LnBlcmZvcm1hbmNlLm1hcmsodGhpcy5faWRlbmQpO1xuICAgIC8vIHdpbmRvdy5wZXJmb3JtYW5jZS5tZWFzdXJlKHRoaXMuX2lkLCB0aGlzLl9pZHN0YXJ0LCB0aGlzLl9pZGVuZCk7XG5cbiAgICB0aGlzLl9hdmVyYWdlKHRoaXMuX3ZhbHVlKTtcbiAgfSxcbiAgdGljazogZnVuY3Rpb24gdGljaygpIHtcbiAgICB0aGlzLmVuZCgpO1xuICAgIHRoaXMuc3RhcnQoKTtcbiAgfSxcbiAgZnJhbWU6IGZ1bmN0aW9uIGZyYW1lKG5vdykge1xuICAgIHZhciB0ID0gbm93O1xuICAgIHZhciBlID0gdCAtIHRoaXMuX3RpbWU7XG4gICAgdGhpcy5fdG90YWwrKztcbiAgICB2YXIgYXZnID0gdGhpcy5fb3B0cy5hdmVyYWdlIHx8IDEwMDA7XG5cbiAgICBpZiAoZSA+IGF2Zykge1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl90b3RhbCAqIDEwMDAgLyBlO1xuICAgICAgdGhpcy5fdG90YWwgPSAwO1xuICAgICAgdGhpcy5fdGltZSA9IHQ7XG4gICAgICB0aGlzLl9hdmVyYWdlKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBlcmZDb3VudGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5CbGNtWXRZMjkxYm5SbGNpNXFjeUpkTENKdVlXMWxjeUk2V3lKRGIzVnVkR1Z5SWl3aWNtVnhkV2x5WlNJc0lsQmxjbVpEYjNWdWRHVnlJaXdpWTJNaUxDSkRiR0Z6Y3lJc0ltNWhiV1VpTENKbGVIUmxibVJ6SWl3aVkzUnZjaUlzSW1sa0lpd2liM0IwY3lJc0ltNXZkeUlzSWw5MGFXMWxJaXdpYzNSaGNuUWlMQ0psYm1RaUxDSmZkbUZzZFdVaUxDSmZZWFpsY21GblpTSXNJblJwWTJzaUxDSm1jbUZ0WlNJc0luUWlMQ0psSWl3aVgzUnZkR0ZzSWl3aVlYWm5JaXdpWDI5d2RITWlMQ0poZG1WeVlXZGxJaXdpYlc5a2RXeGxJaXdpWlhod2IzSjBjeUpkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4SlFVRk5RU3hWUVVGVlF5eFJRVUZSTEZkQlFWSXNRMEZCYUVJN08wRkJSVUVzU1VGQlNVTXNZMEZCWTBNc1IwRkJSME1zUzBGQlNDeERRVUZUTzBGQlEzcENReXhSUVVGTkxHZENRVVJ0UWp0QlFVVjZRa01zVjBGQlUwNHNUMEZHWjBJN08wRkJTWHBDVHl4TlFVcDVRaXhuUWtGSmJrSkRMRVZCU20xQ0xFVkJTV1pETEVsQlNtVXNSVUZKVkVNc1IwRktVeXhGUVVsS08wRkJRMjVDTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3hUUVVGTFF5eExRVUZNTEVkQlFXRkVMRWRCUVdJN1FVRkRSQ3hIUVZaM1FqdEJRVmw2UWtVc1QwRmFlVUlzYVVKQldXNUNSaXhIUVZwdFFpeEZRVmxrTzBGQlExUXNVMEZCUzBNc1MwRkJUQ3hIUVVGaFJDeEhRVUZpT3p0QlFVVkJPMEZCUTBFN1FVRkRSQ3hIUVdwQ2QwSTdRVUZ0UW5wQ1J5eExRVzVDZVVJc1pVRnRRbkpDU0N4SFFXNUNjVUlzUlVGdFFtaENPMEZCUTFBc1UwRkJTMGtzVFVGQlRDeEhRVUZqU2l4TlFVRk5MRXRCUVV0RExFdEJRWHBDT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeFRRVUZMU1N4UlFVRk1MRU5CUVdNc1MwRkJTMFFzVFVGQmJrSTdRVUZEUkN4SFFUTkNkMEk3UVVFMlFucENSU3hOUVRkQ2VVSXNhMEpCTmtKc1FqdEJRVU5NTEZOQlFVdElMRWRCUVV3N1FVRkRRU3hUUVVGTFJDeExRVUZNTzBGQlEwUXNSMEZvUTNkQ08wRkJhME42UWtzc1QwRnNRM2xDTEdsQ1FXdERia0pRTEVkQmJFTnRRaXhGUVd0RFpEdEJRVU5VTEZGQlFVbFJMRWxCUVVsU0xFZEJRVkk3UVVGRFFTeFJRVUZKVXl4SlFVRkpSQ3hKUVVGSkxFdEJRVXRRTEV0QlFXcENPMEZCUTBFc1UwRkJTMU1zVFVGQlREdEJRVU5CTEZGQlFVbERMRTFCUVUwc1MwRkJTME1zUzBGQlRDeERRVUZYUXl4UFFVRllMRWxCUVhOQ0xFbEJRV2hET3p0QlFVVkJMRkZCUVVsS0xFbEJRVWxGTEVkQlFWSXNSVUZCWVR0QlFVTllMRmRCUVV0UUxFMUJRVXdzUjBGQll5eExRVUZMVFN4TlFVRk1MRWRCUVdNc1NVRkJaQ3hIUVVGeFFrUXNRMEZCYmtNN1FVRkRRU3hYUVVGTFF5eE5RVUZNTEVkQlFXTXNRMEZCWkR0QlFVTkJMRmRCUVV0VUxFdEJRVXdzUjBGQllVOHNRMEZCWWp0QlFVTkJMRmRCUVV0SUxGRkJRVXdzUTBGQll5eExRVUZMUkN4TlFVRnVRanRCUVVORU8wRkJRMFk3UVVFNVEzZENMRU5CUVZRc1EwRkJiRUk3TzBGQmFVUkJWU3hQUVVGUFF5eFBRVUZRTEVkQlFXbENka0lzVjBGQmFrSWlMQ0ptYVd4bElqb2ljR1Z5WmkxamIzVnVkR1Z5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lZMjl1YzNRZ1EyOTFiblJsY2lBOUlISmxjWFZwY21Vb0p5NHZZMjkxYm5SbGNpY3BPMXh1WEc1c1pYUWdVR1Z5WmtOdmRXNTBaWElnUFNCall5NURiR0Z6Y3loN1hHNGdJRzVoYldVNklDZGpZeTVRWlhKbVEyOTFiblJsY2ljc1hHNGdJR1Y0ZEdWdVpITTZJRU52ZFc1MFpYSXNYRzRnSUZ4dUlDQmpkRzl5SUNocFpDd2diM0IwY3l3Z2JtOTNLU0I3WEc0Z0lDQWdMeThnUkVsVFFVSk1SVnh1SUNBZ0lDOHZJSFJvYVhNdVgybGtjM1JoY25RZ1BTQmdKSHRwWkgxZmMzUmhjblJnTzF4dUlDQWdJQzh2SUhSb2FYTXVYMmxrWlc1a0lEMGdZQ1I3YVdSOVgyVnVaR0E3WEc1Y2JpQWdJQ0IwYUdsekxsOTBhVzFsSUQwZ2JtOTNPMXh1SUNCOUxGeHVYRzRnSUhOMFlYSjBLRzV2ZHlrZ2UxeHVJQ0FnSUhSb2FYTXVYM1JwYldVZ1BTQnViM2M3WEc1Y2JpQWdJQ0F2THlCRVNWTkJRa3hGT2lCc2IyNW5JSFJwYldVZ2NuVnVibWx1WnlCM2FXeHNJR05oZFhObElIQmxjbVp2Y20xaGJtTmxJR1J5YjNBZ1pHOTNibHh1SUNBZ0lDOHZJSGRwYm1SdmR5NXdaWEptYjNKdFlXNWpaUzV0WVhKcktIUm9hWE11WDJsa2MzUmhjblFwTzF4dUlDQjlMRnh1WEc0Z0lHVnVaQ2h1YjNjcElIdGNiaUFnSUNCMGFHbHpMbDkyWVd4MVpTQTlJRzV2ZHlBdElIUm9hWE11WDNScGJXVTdYRzVjYmlBZ0lDQXZMeUJFU1ZOQlFreEZPaUJzYjI1bklIUnBiV1VnY25WdWJtbHVaeUIzYVd4c0lHTmhkWE5sSUhCbGNtWnZjbTFoYm1ObElHUnliM0FnWkc5M2JseHVJQ0FnSUM4dklIZHBibVJ2ZHk1d1pYSm1iM0p0WVc1alpTNXRZWEpyS0hSb2FYTXVYMmxrWlc1a0tUdGNiaUFnSUNBdkx5QjNhVzVrYjNjdWNHVnlabTl5YldGdVkyVXViV1ZoYzNWeVpTaDBhR2x6TGw5cFpDd2dkR2hwY3k1ZmFXUnpkR0Z5ZEN3Z2RHaHBjeTVmYVdSbGJtUXBPMXh1WEc0Z0lDQWdkR2hwY3k1ZllYWmxjbUZuWlNoMGFHbHpMbDkyWVd4MVpTazdYRzRnSUgwc1hHNWNiaUFnZEdsamF5Z3BJSHRjYmlBZ0lDQjBhR2x6TG1WdVpDZ3BPMXh1SUNBZ0lIUm9hWE11YzNSaGNuUW9LVHRjYmlBZ2ZTeGNibHh1SUNCbWNtRnRaU2h1YjNjcElIdGNiaUFnSUNCc1pYUWdkQ0E5SUc1dmR6dGNiaUFnSUNCc1pYUWdaU0E5SUhRZ0xTQjBhR2x6TGw5MGFXMWxPMXh1SUNBZ0lIUm9hWE11WDNSdmRHRnNLeXM3WEc0Z0lDQWdiR1YwSUdGMlp5QTlJSFJvYVhNdVgyOXdkSE11WVhabGNtRm5aU0I4ZkNBeE1EQXdPMXh1WEc0Z0lDQWdhV1lnS0dVZ1BpQmhkbWNwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVYM1poYkhWbElEMGdkR2hwY3k1ZmRHOTBZV3dnS2lBeE1EQXdJQzhnWlR0Y2JpQWdJQ0FnSUhSb2FYTXVYM1J2ZEdGc0lEMGdNRHRjYmlBZ0lDQWdJSFJvYVhNdVgzUnBiV1VnUFNCME8xeHVJQ0FnSUNBZ2RHaHBjeTVmWVhabGNtRm5aU2gwYUdsekxsOTJZV3gxWlNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzU5S1R0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQlFaWEptUTI5MWJuUmxjanRjYmlKZGZRPT0iXX0=