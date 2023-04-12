(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/assets/CCSpriteAtlas.js';
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
        var SpriteAtlas = cc.Class({
            name: 'cc.SpriteAtlas',
            extends: cc.Asset,
            properties: { _spriteFrames: { default: {} } },
            getTexture: function getTexture() {
                var keys = Object.keys(this._spriteFrames);
                if (keys.length > 0) {
                    var spriteFrame = this._spriteFrames[keys[0]];
                    return spriteFrame ? spriteFrame.getTexture() : null;
                } else {
                    return null;
                }
            },
            getSpriteFrame: function getSpriteFrame(key) {
                var sf = this._spriteFrames[key];
                if (!sf) {
                    return null;
                }
                if (!sf.name) {
                    sf.name = key;
                }
                return sf;
            },
            getSpriteFrames: function getSpriteFrames() {
                var frames = [];
                var spriteFrames = this._spriteFrames;
                for (var key in spriteFrames) {
                    frames.push(this.getSpriteFrame(key));
                }
                return frames;
            }
        });
        cc.SpriteAtlas = SpriteAtlas;
        module.exports = SpriteAtlas;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDU3ByaXRlQXRsYXMuanMiLCIvVXNlcnMvU2hhcmVkL2JpbmdvX2ZyZW56eS9lbmdpbmUvY29jb3MyZC9jb3JlL2Fzc2V0cy9DQ1Nwcml0ZUF0bGFzLmpzIl0sIm5hbWVzIjpbIlNwcml0ZUF0bGFzIiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJleHRlbmRzIiwiQXNzZXQiLCJwcm9wZXJ0aWVzIiwiX3Nwcml0ZUZyYW1lcyIsImRlZmF1bHQiLCJnZXRUZXh0dXJlIiwia2V5cyIsIk9iamVjdCIsImxlbmd0aCIsInNwcml0ZUZyYW1lIiwiZ2V0U3ByaXRlRnJhbWUiLCJrZXkiLCJzZiIsImdldFNwcml0ZUZyYW1lcyIsImZyYW1lcyIsInNwcml0ZUZyYW1lcyIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7UUFnQ0EsSUFBSUEsV0FBQUEsR0FBY0MsRUFBQUEsQ0FBR0MsS0FBSEQsQ0FBUztBQUFBLFlBQ3ZCRSxJQUFBQSxFQUFNLGdCQURpQjtBQUFBLFlBRXZCQyxPQUFBQSxFQUFTSCxFQUFBQSxDQUFHSSxLQUZXO0FBQUEsWUFHdkJDLFVBQUFBLEVBQVksRUFDUkMsYUFBQUEsRUFBZSxFQUNYQyxPQUFBQSxFQUFTLEVBREUsRUFEUCxFQUhXO0FBQUEsWUFjdkJDLFVBQUFBLEVBQVksU0FBQSxVQUFBLEdBQVk7QUFBQSxnQkFDcEIsSUFBSUMsSUFBQUEsR0FBT0MsTUFBQUEsQ0FBT0QsSUFBUEMsQ0FBWSxLQUFLSixhQUFqQkksQ0FBWCxDQURvQjtBQUFBLGdCQUVwQixJQUFJRCxJQUFBQSxDQUFLRSxNQUFMRixHQUFjLENBQWxCLEVBQXFCO0FBQUEsb0JBQ2pCLElBQUlHLFdBQUFBLEdBQWMsS0FBS04sYUFBTCxDQUFtQkcsSUFBQUEsQ0FBSyxDQUFMQSxDQUFuQixDQUFsQixDQURpQjtBQUFBLG9CQUVqQixPQUFPRyxXQUFBQSxHQUFjQSxXQUFBQSxDQUFZSixVQUFaSSxFQUFkQSxHQUF5QyxJQUFoRCxDQUZpQjtBQUFBLGlCQUFyQixNQUlLO0FBQUEsb0JBQ0QsT0FBTyxJQUFQLENBREM7QUFBQSxpQkFOZTtBQUFBLGFBZEQ7QUFBQSxZQStCdkJDLGNBQUFBLEVBQWdCLFNBQUEsY0FBQSxDQUFVQyxHQUFWLEVBQWU7QUFBQSxnQkFDM0IsSUFBSUMsRUFBQUEsR0FBSyxLQUFLVCxhQUFMLENBQW1CUSxHQUFuQixDQUFULENBRDJCO0FBQUEsZ0JBRTNCLElBQUksQ0FBQ0MsRUFBTCxFQUFTO0FBQUEsb0JBQ0wsT0FBTyxJQUFQLENBREs7QUFBQSxpQkFGa0I7QUFBQSxnQkFLM0IsSUFBSSxDQUFDQSxFQUFBQSxDQUFHYixJQUFSLEVBQWM7QUFBQSxvQkFDVmEsRUFBQUEsQ0FBR2IsSUFBSGEsR0FBVUQsR0FBVkMsQ0FEVTtBQUFBLGlCQUxhO0FBQUEsZ0JBUTNCLE9BQU9BLEVBQVAsQ0FSMkI7QUFBQSxhQS9CUjtBQUFBLFlBK0N2QkMsZUFBQUEsRUFBaUIsU0FBQSxlQUFBLEdBQVk7QUFBQSxnQkFDekIsSUFBSUMsTUFBQUEsR0FBUyxFQUFiLENBRHlCO0FBQUEsZ0JBRXpCLElBQUlDLFlBQUFBLEdBQWUsS0FBS1osYUFBeEIsQ0FGeUI7QUFBQSxnQkFJekIsU0FBU1EsR0FBVCxJQUFnQkksWUFBaEIsRUFBOEI7QUFBQSxvQkFDMUJELE1BQUFBLENBQU9FLElBQVBGLENBQVksS0FBS0osY0FBTCxDQUFvQkMsR0FBcEIsQ0FBWkcsRUFEMEI7QUFBQSxpQkFKTDtBQUFBLGdCQVF6QixPQUFPQSxNQUFQLENBUnlCO0FBQUEsYUEvQ047QUFBQSxTQUFUakIsQ0FBbEI7UUEyREFBLEVBQUFBLENBQUdELFdBQUhDLEdBQWlCRCxXQUFqQkM7UUFDQW9CLE1BQUFBLENBQU9DLE9BQVBELEdBQWtCckIsV0FBbEJxQiIsImZpbGUiOiJDQ1Nwcml0ZUF0bGFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTMtMjAxNiBDaHVrb25nIFRlY2hub2xvZ2llcyBJbmMuXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuICBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXG4gIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiAgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKipcbiAqICEjZW4gQ2xhc3MgZm9yIHNwcml0ZSBhdGxhcyBoYW5kbGluZy5cbiAqICEjemgg57K+54G15Zu+6ZuG6LWE5rqQ57G744CCXG4gKiBAY2xhc3MgU3ByaXRlQXRsYXNcbiAqIEBleHRlbmRzIEFzc2V0XG4gKi9cbnZhciBTcHJpdGVBdGxhcyA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnY2MuU3ByaXRlQXRsYXMnLFxuICAgIGV4dGVuZHM6IGNjLkFzc2V0LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgX3Nwcml0ZUZyYW1lczoge1xuICAgICAgICAgICAgZGVmYXVsdDoge31cbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGV4dHVyZSBvZiB0aGUgc3ByaXRlIGF0bGFzXG4gICAgICogQG1ldGhvZCBnZXRUZXh0dXJlXG4gICAgICogQHJldHVybnMge1RleHR1cmUyRH1cbiAgICAgKi9cbiAgICBnZXRUZXh0dXJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5fc3ByaXRlRnJhbWVzKTtcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIHNwcml0ZUZyYW1lID0gdGhpcy5fc3ByaXRlRnJhbWVzW2tleXNbMF1dO1xuICAgICAgICAgICAgcmV0dXJuIHNwcml0ZUZyYW1lID8gc3ByaXRlRnJhbWUuZ2V0VGV4dHVyZSgpIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNwcml0ZSBmcmFtZSBjb3JyZXNwb25kIHRvIHRoZSBnaXZlbiBrZXkgaW4gc3ByaXRlIGF0bGFzLlxuICAgICAqIEBtZXRob2QgZ2V0U3ByaXRlRnJhbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gICAgICogQHJldHVybnMge1Nwcml0ZUZyYW1lfVxuICAgICAqL1xuICAgIGdldFNwcml0ZUZyYW1lOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGxldCBzZiA9IHRoaXMuX3Nwcml0ZUZyYW1lc1trZXldO1xuICAgICAgICBpZiAoIXNmKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBcbiAgICAgICAgaWYgKCFzZi5uYW1lKSB7XG4gICAgICAgICAgICBzZi5uYW1lID0ga2V5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3ByaXRlIGZyYW1lcyBpbiBzcHJpdGUgYXRsYXMuXG4gICAgICogQG1ldGhvZCBnZXRTcHJpdGVGcmFtZXNcbiAgICAgKiBAcmV0dXJucyB7W1Nwcml0ZUZyYW1lXX1cbiAgICAgKi9cbiAgICBnZXRTcHJpdGVGcmFtZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZyYW1lcyA9IFtdO1xuICAgICAgICB2YXIgc3ByaXRlRnJhbWVzID0gdGhpcy5fc3ByaXRlRnJhbWVzO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzcHJpdGVGcmFtZXMpIHtcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKHRoaXMuZ2V0U3ByaXRlRnJhbWUoa2V5KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnJhbWVzO1xuICAgIH1cbn0pO1xuXG5jYy5TcHJpdGVBdGxhcyA9IFNwcml0ZUF0bGFzO1xubW9kdWxlLmV4cG9ydHMgPSAgU3ByaXRlQXRsYXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDEzLTIwMTYgQ2h1a29uZyBUZWNobm9sb2dpZXMgSW5jLlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiAgbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiAhI2VuIENsYXNzIGZvciBzcHJpdGUgYXRsYXMgaGFuZGxpbmcuXG4gKiAhI3poIOeyvueBteWbvumbhui1hOa6kOexu+OAglxuICogQGNsYXNzIFNwcml0ZUF0bGFzXG4gKiBAZXh0ZW5kcyBBc3NldFxuICovXG52YXIgU3ByaXRlQXRsYXMgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogJ2NjLlNwcml0ZUF0bGFzJyxcbiAgICBleHRlbmRzOiBjYy5Bc3NldCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIF9zcHJpdGVGcmFtZXM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHt9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGV4dHVyZSBvZiB0aGUgc3ByaXRlIGF0bGFzXG4gICAgICogQG1ldGhvZCBnZXRUZXh0dXJlXG4gICAgICogQHJldHVybnMge1RleHR1cmUyRH1cbiAgICAgKi9cbiAgICBnZXRUZXh0dXJlOiBmdW5jdGlvbiBnZXRUZXh0dXJlKCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX3Nwcml0ZUZyYW1lcyk7XG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBzcHJpdGVGcmFtZSA9IHRoaXMuX3Nwcml0ZUZyYW1lc1trZXlzWzBdXTtcbiAgICAgICAgICAgIHJldHVybiBzcHJpdGVGcmFtZSA/IHNwcml0ZUZyYW1lLmdldFRleHR1cmUoKSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzcHJpdGUgZnJhbWUgY29ycmVzcG9uZCB0byB0aGUgZ2l2ZW4ga2V5IGluIHNwcml0ZSBhdGxhcy5cbiAgICAgKiBAbWV0aG9kIGdldFNwcml0ZUZyYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICAgICAqIEByZXR1cm5zIHtTcHJpdGVGcmFtZX1cbiAgICAgKi9cbiAgICBnZXRTcHJpdGVGcmFtZTogZnVuY3Rpb24gZ2V0U3ByaXRlRnJhbWUoa2V5KSB7XG4gICAgICAgIHZhciBzZiA9IHRoaXMuX3Nwcml0ZUZyYW1lc1trZXldO1xuICAgICAgICBpZiAoIXNmKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNmLm5hbWUpIHtcbiAgICAgICAgICAgIHNmLm5hbWUgPSBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzcHJpdGUgZnJhbWVzIGluIHNwcml0ZSBhdGxhcy5cbiAgICAgKiBAbWV0aG9kIGdldFNwcml0ZUZyYW1lc1xuICAgICAqIEByZXR1cm5zIHtbU3ByaXRlRnJhbWVdfVxuICAgICAqL1xuICAgIGdldFNwcml0ZUZyYW1lczogZnVuY3Rpb24gZ2V0U3ByaXRlRnJhbWVzKCkge1xuICAgICAgICB2YXIgZnJhbWVzID0gW107XG4gICAgICAgIHZhciBzcHJpdGVGcmFtZXMgPSB0aGlzLl9zcHJpdGVGcmFtZXM7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNwcml0ZUZyYW1lcykge1xuICAgICAgICAgICAgZnJhbWVzLnB1c2godGhpcy5nZXRTcHJpdGVGcmFtZShrZXkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmcmFtZXM7XG4gICAgfVxufSk7XG5cbmNjLlNwcml0ZUF0bGFzID0gU3ByaXRlQXRsYXM7XG5tb2R1bGUuZXhwb3J0cyA9IFNwcml0ZUF0bGFzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtORFUzQnlhWFJsUVhSc1lYTXVhbk1pWFN3aWJtRnRaWE1pT2xzaVUzQnlhWFJsUVhSc1lYTWlMQ0pqWXlJc0lrTnNZWE56SWl3aWJtRnRaU0lzSW1WNGRHVnVaSE1pTENKQmMzTmxkQ0lzSW5CeWIzQmxjblJwWlhNaUxDSmZjM0J5YVhSbFJuSmhiV1Z6SWl3aVpHVm1ZWFZzZENJc0ltZGxkRlJsZUhSMWNtVWlMQ0pyWlhseklpd2lUMkpxWldOMElpd2liR1Z1WjNSb0lpd2ljM0J5YVhSbFJuSmhiV1VpTENKblpYUlRjSEpwZEdWR2NtRnRaU0lzSW10bGVTSXNJbk5tSWl3aVoyVjBVM0J5YVhSbFJuSmhiV1Z6SWl3aVpuSmhiV1Z6SWl3aWMzQnlhWFJsUm5KaGJXVnpJaXdpY0hWemFDSXNJbTF2WkhWc1pTSXNJbVY0Y0c5eWRITWlYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCTUVKQk96czdPenM3UVVGTlFTeEpRVUZKUVN4alFVRmpReXhIUVVGSFF5eExRVUZJTEVOQlFWTTdRVUZEZGtKRExGVkJRVTBzWjBKQlJHbENPMEZCUlhaQ1F5eGhRVUZUU0N4SFFVRkhTU3hMUVVaWE8wRkJSM1pDUXl4blFrRkJXVHRCUVVOU1F5eDFRa0ZCWlR0QlFVTllReXh4UWtGQlV6dEJRVVJGTzBGQlJGQXNTMEZJVnpzN1FVRlRka0k3T3pzN08wRkJTMEZETEdkQ1FVRlpMSE5DUVVGWk8wRkJRM0JDTEZsQlFVbERMRTlCUVU5RExFOUJRVTlFTEVsQlFWQXNRMEZCV1N4TFFVRkxTQ3hoUVVGcVFpeERRVUZZTzBGQlEwRXNXVUZCU1Vjc1MwRkJTMFVzVFVGQlRDeEhRVUZqTEVOQlFXeENMRVZCUVhGQ08wRkJRMnBDTEdkQ1FVRkpReXhqUVVGakxFdEJRVXRPTEdGQlFVd3NRMEZCYlVKSExFdEJRVXNzUTBGQlRDeERRVUZ1UWl4RFFVRnNRanRCUVVOQkxHMUNRVUZQUnl4alFVRmpRU3haUVVGWlNpeFZRVUZhTEVWQlFXUXNSMEZCZVVNc1NVRkJhRVE3UVVGRFNDeFRRVWhFTEUxQlNVczdRVUZEUkN4dFFrRkJUeXhKUVVGUU8wRkJRMGc3UVVGRFNpeExRWFpDYzBJN08wRkJlVUoyUWpzN096czdPMEZCVFVGTExHOUNRVUZuUWl4M1FrRkJWVU1zUjBGQlZpeEZRVUZsTzBGQlF6TkNMRmxCUVVsRExFdEJRVXNzUzBGQlMxUXNZVUZCVEN4RFFVRnRRbEVzUjBGQmJrSXNRMEZCVkR0QlFVTkJMRmxCUVVrc1EwRkJRME1zUlVGQlRDeEZRVUZUTzBGQlEwd3NiVUpCUVU4c1NVRkJVRHRCUVVOSU8wRkJRMFFzV1VGQlNTeERRVUZEUVN4SFFVRkhZaXhKUVVGU0xFVkJRV003UVVGRFZtRXNaVUZCUjJJc1NVRkJTQ3hIUVVGVldTeEhRVUZXTzBGQlEwZzdRVUZEUkN4bFFVRlBReXhGUVVGUU8wRkJRMGdzUzBGNFEzTkNPenRCUVRCRGRrSTdPenM3TzBGQlMwRkRMSEZDUVVGcFFpd3lRa0ZCV1R0QlFVTjZRaXhaUVVGSlF5eFRRVUZUTEVWQlFXSTdRVUZEUVN4WlFVRkpReXhsUVVGbExFdEJRVXRhTEdGQlFYaENPenRCUVVWQkxHRkJRVXNzU1VGQlNWRXNSMEZCVkN4SlFVRm5Ra2tzV1VGQmFFSXNSVUZCT0VJN1FVRkRNVUpFTEcxQ1FVRlBSU3hKUVVGUUxFTkJRVmtzUzBGQlMwNHNZMEZCVEN4RFFVRnZRa01zUjBGQmNFSXNRMEZCV2p0QlFVTklPenRCUVVWRUxHVkJRVTlITEUxQlFWQTdRVUZEU0R0QlFYaEVjMElzUTBGQlZDeERRVUZzUWpzN1FVRXlSRUZxUWl4SFFVRkhSQ3hYUVVGSUxFZEJRV2xDUVN4WFFVRnFRanRCUVVOQmNVSXNUMEZCVDBNc1QwRkJVQ3hIUVVGclFuUkNMRmRCUVd4Q0lpd2labWxzWlNJNklrTkRVM0J5YVhSbFFYUnNZWE11YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4dUlFTnZjSGx5YVdkb2RDQW9ZeWtnTWpBeE15MHlNREUySUVOb2RXdHZibWNnVkdWamFHNXZiRzluYVdWeklFbHVZeTVjYmlCRGIzQjVjbWxuYUhRZ0tHTXBJREl3TVRjdE1qQXhPQ0JZYVdGdFpXNGdXV0ZxYVNCVGIyWjBkMkZ5WlNCRGJ5NHNJRXgwWkM1Y2JseHVJR2gwZEhCek9pOHZkM2QzTG1OdlkyOXpMbU52YlM5Y2JseHVJRkJsY20xcGMzTnBiMjRnYVhNZ2FHVnlaV0o1SUdkeVlXNTBaV1FzSUdaeVpXVWdiMllnWTJoaGNtZGxMQ0IwYnlCaGJua2djR1Z5YzI5dUlHOWlkR0ZwYm1sdVp5QmhJR052Y0hsY2JpQnZaaUIwYUdseklITnZablIzWVhKbElHRnVaQ0JoYzNOdlkybGhkR1ZrSUdWdVoybHVaU0J6YjNWeVkyVWdZMjlrWlNBb2RHaGxJRndpVTI5bWRIZGhjbVZjSWlrc0lHRWdiR2x0YVhSbFpDeGNiaUFnZDI5eWJHUjNhV1JsTENCeWIzbGhiSFI1TFdaeVpXVXNJRzV2YmkxaGMzTnBaMjVoWW14bExDQnlaWFp2WTJGaWJHVWdZVzVrSUc1dmJpMWxlR05zZFhOcGRtVWdiR2xqWlc1elpWeHVJSFJ2SUhWelpTQkRiMk52Y3lCRGNtVmhkRzl5SUhOdmJHVnNlU0IwYnlCa1pYWmxiRzl3SUdkaGJXVnpJRzl1SUhsdmRYSWdkR0Z5WjJWMElIQnNZWFJtYjNKdGN5NGdXVzkxSUhOb1lXeHNYRzRnSUc1dmRDQjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMlowZDJGeVpTQm1iM0lnWkdWMlpXeHZjR2x1WnlCdmRHaGxjaUJ6YjJaMGQyRnlaU0J2Y2lCMGIyOXNjeUIwYUdGMEozTmNiaUFnZFhObFpDQm1iM0lnWkdWMlpXeHZjR2x1WnlCbllXMWxjeTRnV1c5MUlHRnlaU0J1YjNRZ1ozSmhiblJsWkNCMGJ5QndkV0pzYVhOb0xDQmthWE4wY21saWRYUmxMRnh1SUNCemRXSnNhV05sYm5ObExDQmhibVF2YjNJZ2MyVnNiQ0JqYjNCcFpYTWdiMllnUTI5amIzTWdRM0psWVhSdmNpNWNibHh1SUZSb1pTQnpiMlowZDJGeVpTQnZjaUIwYjI5c2N5QnBiaUIwYUdseklFeHBZMlZ1YzJVZ1FXZHlaV1Z0Wlc1MElHRnlaU0JzYVdObGJuTmxaQ3dnYm05MElITnZiR1F1WEc0Z1dHbGhiV1Z1SUZsaGFta2dVMjltZEhkaGNtVWdRMjh1TENCTWRHUXVJSEpsYzJWeWRtVnpJR0ZzYkNCeWFXZG9kSE1nYm05MElHVjRjSEpsYzNOc2VTQm5jbUZ1ZEdWa0lIUnZJSGx2ZFM1Y2JseHVJRlJJUlNCVFQwWlVWMEZTUlNCSlV5QlFVazlXU1VSRlJDQmNJa0ZUSUVsVFhDSXNJRmRKVkVoUFZWUWdWMEZTVWtGT1ZGa2dUMFlnUVU1WklFdEpUa1FzSUVWWVVGSkZVMU1nVDFKY2JpQkpUVkJNU1VWRUxDQkpUa05NVlVSSlRrY2dRbFZVSUU1UFZDQk1TVTFKVkVWRUlGUlBJRlJJUlNCWFFWSlNRVTVVU1VWVElFOUdJRTFGVWtOSVFVNVVRVUpKVEVsVVdTeGNiaUJHU1ZST1JWTlRJRVpQVWlCQklGQkJVbFJKUTFWTVFWSWdVRlZTVUU5VFJTQkJUa1FnVGs5T1NVNUdVa2xPUjBWTlJVNVVMaUJKVGlCT1R5QkZWa1ZPVkNCVFNFRk1UQ0JVU0VWY2JpQkJWVlJJVDFKVElFOVNJRU5QVUZsU1NVZElWQ0JJVDB4RVJWSlRJRUpGSUV4SlFVSk1SU0JHVDFJZ1FVNVpJRU5NUVVsTkxDQkVRVTFCUjBWVElFOVNJRTlVU0VWU1hHNGdURWxCUWtsTVNWUlpMQ0JYU0VWVVNFVlNJRWxPSUVGT0lFRkRWRWxQVGlCUFJpQkRUMDVVVWtGRFZDd2dWRTlTVkNCUFVpQlBWRWhGVWxkSlUwVXNJRUZTU1ZOSlRrY2dSbEpQVFN4Y2JpQlBWVlFnVDBZZ1QxSWdTVTRnUTA5T1RrVkRWRWxQVGlCWFNWUklJRlJJUlNCVFQwWlVWMEZTUlNCUFVpQlVTRVVnVlZORklFOVNJRTlVU0VWU0lFUkZRVXhKVGtkVElFbE9YRzRnVkVoRklGTlBSbFJYUVZKRkxseHVJQ29xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvdlhHNWNiaThxS2x4dUlDb2dJU05sYmlCRGJHRnpjeUJtYjNJZ2MzQnlhWFJsSUdGMGJHRnpJR2hoYm1Sc2FXNW5MbHh1SUNvZ0lTTjZhQ0Ruc3I3bmdiWGxtNzdwbTRib3RZVG11cERuc2J2amdJSmNiaUFxSUVCamJHRnpjeUJUY0hKcGRHVkJkR3hoYzF4dUlDb2dRR1Y0ZEdWdVpITWdRWE56WlhSY2JpQXFMMXh1ZG1GeUlGTndjbWwwWlVGMGJHRnpJRDBnWTJNdVEyeGhjM01vZTF4dUlDQWdJRzVoYldVNklDZGpZeTVUY0hKcGRHVkJkR3hoY3ljc1hHNGdJQ0FnWlhoMFpXNWtjem9nWTJNdVFYTnpaWFFzWEc0Z0lDQWdjSEp2Y0dWeWRHbGxjem9nZTF4dUlDQWdJQ0FnSUNCZmMzQnlhWFJsUm5KaGJXVnpPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaV1poZFd4ME9pQjdmVnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJSDBzWEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCU1pYUjFjbTV6SUhSb1pTQjBaWGgwZFhKbElHOW1JSFJvWlNCemNISnBkR1VnWVhSc1lYTmNiaUFnSUNBZ0tpQkFiV1YwYUc5a0lHZGxkRlJsZUhSMWNtVmNiaUFnSUNBZ0tpQkFjbVYwZFhKdWN5QjdWR1Y0ZEhWeVpUSkVmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHZGxkRlJsZUhSMWNtVTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR3RsZVhNZ1BTQlBZbXBsWTNRdWEyVjVjeWgwYUdsekxsOXpjSEpwZEdWR2NtRnRaWE1wTzF4dUlDQWdJQ0FnSUNCcFppQW9hMlY1Y3k1c1pXNW5kR2dnUGlBd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdjM0J5YVhSbFJuSmhiV1VnUFNCMGFHbHpMbDl6Y0hKcGRHVkdjbUZ0WlhOYmEyVjVjMXN3WFYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdjM0J5YVhSbFJuSmhiV1VnUHlCemNISnBkR1ZHY21GdFpTNW5aWFJVWlhoMGRYSmxLQ2tnT2lCdWRXeHNPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1MWJHdzdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVW1WMGRYSnVjeUIwYUdVZ2MzQnlhWFJsSUdaeVlXMWxJR052Y25KbGMzQnZibVFnZEc4Z2RHaGxJR2RwZG1WdUlHdGxlU0JwYmlCemNISnBkR1VnWVhSc1lYTXVYRzRnSUNBZ0lDb2dRRzFsZEdodlpDQm5aWFJUY0hKcGRHVkdjbUZ0WlZ4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3VTNSeWFXNW5mU0JyWlhsY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN1UzQnlhWFJsUm5KaGJXVjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1oyVjBVM0J5YVhSbFJuSmhiV1U2SUdaMWJtTjBhVzl1SUNoclpYa3BJSHRjYmlBZ0lDQWdJQ0FnYkdWMElITm1JRDBnZEdocGN5NWZjM0J5YVhSbFJuSmhiV1Z6VzJ0bGVWMDdYRzRnSUNBZ0lDQWdJR2xtSUNnaGMyWXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCdWRXeHNPMXh1SUNBZ0lDQWdJQ0I5SUZ4dUlDQWdJQ0FnSUNCcFppQW9JWE5tTG01aGJXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITm1MbTVoYldVZ1BTQnJaWGs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhObU8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaWFIxY201eklIUm9aU0J6Y0hKcGRHVWdabkpoYldWeklHbHVJSE53Y21sMFpTQmhkR3hoY3k1Y2JpQWdJQ0FnS2lCQWJXVjBhRzlrSUdkbGRGTndjbWwwWlVaeVlXMWxjMXh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJSHRiVTNCeWFYUmxSbkpoYldWZGZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdkbGRGTndjbWwwWlVaeVlXMWxjem9nWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnWm5KaGJXVnpJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ6Y0hKcGRHVkdjbUZ0WlhNZ1BTQjBhR2x6TGw5emNISnBkR1ZHY21GdFpYTTdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaDJZWElnYTJWNUlHbHVJSE53Y21sMFpVWnlZVzFsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWm5KaGJXVnpMbkIxYzJnb2RHaHBjeTVuWlhSVGNISnBkR1ZHY21GdFpTaHJaWGtwS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm1jbUZ0WlhNN1hHNGdJQ0FnZlZ4dWZTazdYRzVjYm1OakxsTndjbWwwWlVGMGJHRnpJRDBnVTNCeWFYUmxRWFJzWVhNN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlDQlRjSEpwZEdWQmRHeGhjenRjYmlKZGZRPT0iXX0=