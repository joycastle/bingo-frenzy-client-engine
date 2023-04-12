(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/assets/index.js';
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
        require('./CCRawAsset');
        require('./CCAsset');
        require('./CCFont');
        require('./CCPrefab');
        require('./CCAudioClip');
        require('./CCScripts');
        require('./CCSceneAsset');
        require('./CCSpriteFrame');
        require('./CCTexture2D');
        require('./CCRenderTexture');
        require('./CCTTFFont');
        require('./CCSpriteAtlas');
        require('./CCBitmapFont');
        require('./CCLabelAtlas');
        require('./CCTextAsset');
        require('./CCJsonAsset');
        require('./CCBufferAsset');
        require('./CCEffectAsset');
        require('./material/CCMaterial');
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiL1VzZXJzL2dhb3lhbmcvV29ya1NwYWNlL2pveWNhc3RsZS9iaW5nby9jbGllbnQvYmluZ28vZW5naW5lL2NvY29zMmQvY29yZS9hc3NldHMvaW5kZXguanMiXSwibmFtZXMiOlsicmVxdWlyZSJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxXQUFBOzs7Ozs7Ozs7Ozs7O1FBMEJBQSxPQUFBQSxDQUFRLGNBQVJBO1FBQ0FBLE9BQUFBLENBQVEsV0FBUkE7UUFDQUEsT0FBQUEsQ0FBUSxVQUFSQTtRQUNBQSxPQUFBQSxDQUFRLFlBQVJBO1FBQ0FBLE9BQUFBLENBQVEsZUFBUkE7UUFDQUEsT0FBQUEsQ0FBUSxhQUFSQTtRQUNBQSxPQUFBQSxDQUFRLGdCQUFSQTtRQUNBQSxPQUFBQSxDQUFRLGlCQUFSQTtRQUNBQSxPQUFBQSxDQUFRLGVBQVJBO1FBQ0FBLE9BQUFBLENBQVEsbUJBQVJBO1FBQ0FBLE9BQUFBLENBQVEsYUFBUkE7UUFDQUEsT0FBQUEsQ0FBUSxpQkFBUkE7UUFDQUEsT0FBQUEsQ0FBUSxnQkFBUkE7UUFDQUEsT0FBQUEsQ0FBUSxnQkFBUkE7UUFDQUEsT0FBQUEsQ0FBUSxlQUFSQTtRQUNBQSxPQUFBQSxDQUFRLGVBQVJBO1FBQ0FBLE9BQUFBLENBQVEsaUJBQVJBO1FBQ0FBLE9BQUFBLENBQVEsaUJBQVJBO1FBQ0FBLE9BQUFBLENBQVEsdUJBQVJBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTMtMjAxNiBDaHVrb25nIFRlY2hub2xvZ2llcyBJbmMuXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuICBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXG4gIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiAgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5yZXF1aXJlKCcuL0NDUmF3QXNzZXQnKTtcbnJlcXVpcmUoJy4vQ0NBc3NldCcpO1xucmVxdWlyZSgnLi9DQ0ZvbnQnKTtcbnJlcXVpcmUoJy4vQ0NQcmVmYWInKTtcbnJlcXVpcmUoJy4vQ0NBdWRpb0NsaXAnKTtcbnJlcXVpcmUoJy4vQ0NTY3JpcHRzJyk7XG5yZXF1aXJlKCcuL0NDU2NlbmVBc3NldCcpO1xucmVxdWlyZSgnLi9DQ1Nwcml0ZUZyYW1lJyk7XG5yZXF1aXJlKCcuL0NDVGV4dHVyZTJEJyk7XG5yZXF1aXJlKCcuL0NDUmVuZGVyVGV4dHVyZScpO1xucmVxdWlyZSgnLi9DQ1RURkZvbnQnKTtcbnJlcXVpcmUoJy4vQ0NTcHJpdGVBdGxhcycpO1xucmVxdWlyZSgnLi9DQ0JpdG1hcEZvbnQnKTtcbnJlcXVpcmUoJy4vQ0NMYWJlbEF0bGFzJyk7XG5yZXF1aXJlKCcuL0NDVGV4dEFzc2V0Jyk7XG5yZXF1aXJlKCcuL0NDSnNvbkFzc2V0Jyk7XG5yZXF1aXJlKCcuL0NDQnVmZmVyQXNzZXQnKTtcbnJlcXVpcmUoJy4vQ0NFZmZlY3RBc3NldCcpO1xucmVxdWlyZSgnLi9tYXRlcmlhbC9DQ01hdGVyaWFsJyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDEzLTIwMTYgQ2h1a29uZyBUZWNobm9sb2dpZXMgSW5jLlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiAgbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxucmVxdWlyZSgnLi9DQ1Jhd0Fzc2V0Jyk7XG5yZXF1aXJlKCcuL0NDQXNzZXQnKTtcbnJlcXVpcmUoJy4vQ0NGb250Jyk7XG5yZXF1aXJlKCcuL0NDUHJlZmFiJyk7XG5yZXF1aXJlKCcuL0NDQXVkaW9DbGlwJyk7XG5yZXF1aXJlKCcuL0NDU2NyaXB0cycpO1xucmVxdWlyZSgnLi9DQ1NjZW5lQXNzZXQnKTtcbnJlcXVpcmUoJy4vQ0NTcHJpdGVGcmFtZScpO1xucmVxdWlyZSgnLi9DQ1RleHR1cmUyRCcpO1xucmVxdWlyZSgnLi9DQ1JlbmRlclRleHR1cmUnKTtcbnJlcXVpcmUoJy4vQ0NUVEZGb250Jyk7XG5yZXF1aXJlKCcuL0NDU3ByaXRlQXRsYXMnKTtcbnJlcXVpcmUoJy4vQ0NCaXRtYXBGb250Jyk7XG5yZXF1aXJlKCcuL0NDTGFiZWxBdGxhcycpO1xucmVxdWlyZSgnLi9DQ1RleHRBc3NldCcpO1xucmVxdWlyZSgnLi9DQ0pzb25Bc3NldCcpO1xucmVxdWlyZSgnLi9DQ0J1ZmZlckFzc2V0Jyk7XG5yZXF1aXJlKCcuL0NDRWZmZWN0QXNzZXQnKTtcbnJlcXVpcmUoJy4vbWF0ZXJpYWwvQ0NNYXRlcmlhbCcpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1sdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYkluSmxjWFZwY21VaVhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJNRUpCUVN4UlFVRlJMR05CUVZJN1FVRkRRVUVzVVVGQlVTeFhRVUZTTzBGQlEwRkJMRkZCUVZFc1ZVRkJVanRCUVVOQlFTeFJRVUZSTEZsQlFWSTdRVUZEUVVFc1VVRkJVU3hsUVVGU08wRkJRMEZCTEZGQlFWRXNZVUZCVWp0QlFVTkJRU3hSUVVGUkxHZENRVUZTTzBGQlEwRkJMRkZCUVZFc2FVSkJRVkk3UVVGRFFVRXNVVUZCVVN4bFFVRlNPMEZCUTBGQkxGRkJRVkVzYlVKQlFWSTdRVUZEUVVFc1VVRkJVU3hoUVVGU08wRkJRMEZCTEZGQlFWRXNhVUpCUVZJN1FVRkRRVUVzVVVGQlVTeG5Ra0ZCVWp0QlFVTkJRU3hSUVVGUkxHZENRVUZTTzBGQlEwRkJMRkZCUVZFc1pVRkJVanRCUVVOQlFTeFJRVUZSTEdWQlFWSTdRVUZEUVVFc1VVRkJVU3hwUWtGQlVqdEJRVU5CUVN4UlFVRlJMR2xDUVVGU08wRkJRMEZCTEZGQlFWRXNkVUpCUVZJaUxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4dUlFTnZjSGx5YVdkb2RDQW9ZeWtnTWpBeE15MHlNREUySUVOb2RXdHZibWNnVkdWamFHNXZiRzluYVdWeklFbHVZeTVjYmlCRGIzQjVjbWxuYUhRZ0tHTXBJREl3TVRjdE1qQXhPQ0JZYVdGdFpXNGdXV0ZxYVNCVGIyWjBkMkZ5WlNCRGJ5NHNJRXgwWkM1Y2JseHVJR2gwZEhCek9pOHZkM2QzTG1OdlkyOXpMbU52YlM5Y2JseHVJRkJsY20xcGMzTnBiMjRnYVhNZ2FHVnlaV0o1SUdkeVlXNTBaV1FzSUdaeVpXVWdiMllnWTJoaGNtZGxMQ0IwYnlCaGJua2djR1Z5YzI5dUlHOWlkR0ZwYm1sdVp5QmhJR052Y0hsY2JpQnZaaUIwYUdseklITnZablIzWVhKbElHRnVaQ0JoYzNOdlkybGhkR1ZrSUdWdVoybHVaU0J6YjNWeVkyVWdZMjlrWlNBb2RHaGxJRndpVTI5bWRIZGhjbVZjSWlrc0lHRWdiR2x0YVhSbFpDeGNiaUFnZDI5eWJHUjNhV1JsTENCeWIzbGhiSFI1TFdaeVpXVXNJRzV2YmkxaGMzTnBaMjVoWW14bExDQnlaWFp2WTJGaWJHVWdZVzVrSUc1dmJpMWxlR05zZFhOcGRtVWdiR2xqWlc1elpWeHVJSFJ2SUhWelpTQkRiMk52Y3lCRGNtVmhkRzl5SUhOdmJHVnNlU0IwYnlCa1pYWmxiRzl3SUdkaGJXVnpJRzl1SUhsdmRYSWdkR0Z5WjJWMElIQnNZWFJtYjNKdGN5NGdXVzkxSUhOb1lXeHNYRzRnSUc1dmRDQjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMlowZDJGeVpTQm1iM0lnWkdWMlpXeHZjR2x1WnlCdmRHaGxjaUJ6YjJaMGQyRnlaU0J2Y2lCMGIyOXNjeUIwYUdGMEozTmNiaUFnZFhObFpDQm1iM0lnWkdWMlpXeHZjR2x1WnlCbllXMWxjeTRnV1c5MUlHRnlaU0J1YjNRZ1ozSmhiblJsWkNCMGJ5QndkV0pzYVhOb0xDQmthWE4wY21saWRYUmxMRnh1SUNCemRXSnNhV05sYm5ObExDQmhibVF2YjNJZ2MyVnNiQ0JqYjNCcFpYTWdiMllnUTI5amIzTWdRM0psWVhSdmNpNWNibHh1SUZSb1pTQnpiMlowZDJGeVpTQnZjaUIwYjI5c2N5QnBiaUIwYUdseklFeHBZMlZ1YzJVZ1FXZHlaV1Z0Wlc1MElHRnlaU0JzYVdObGJuTmxaQ3dnYm05MElITnZiR1F1WEc0Z1dHbGhiV1Z1SUZsaGFta2dVMjltZEhkaGNtVWdRMjh1TENCTWRHUXVJSEpsYzJWeWRtVnpJR0ZzYkNCeWFXZG9kSE1nYm05MElHVjRjSEpsYzNOc2VTQm5jbUZ1ZEdWa0lIUnZJSGx2ZFM1Y2JseHVJRlJJUlNCVFQwWlVWMEZTUlNCSlV5QlFVazlXU1VSRlJDQmNJa0ZUSUVsVFhDSXNJRmRKVkVoUFZWUWdWMEZTVWtGT1ZGa2dUMFlnUVU1WklFdEpUa1FzSUVWWVVGSkZVMU1nVDFKY2JpQkpUVkJNU1VWRUxDQkpUa05NVlVSSlRrY2dRbFZVSUU1UFZDQk1TVTFKVkVWRUlGUlBJRlJJUlNCWFFWSlNRVTVVU1VWVElFOUdJRTFGVWtOSVFVNVVRVUpKVEVsVVdTeGNiaUJHU1ZST1JWTlRJRVpQVWlCQklGQkJVbFJKUTFWTVFWSWdVRlZTVUU5VFJTQkJUa1FnVGs5T1NVNUdVa2xPUjBWTlJVNVVMaUJKVGlCT1R5QkZWa1ZPVkNCVFNFRk1UQ0JVU0VWY2JpQkJWVlJJVDFKVElFOVNJRU5QVUZsU1NVZElWQ0JJVDB4RVJWSlRJRUpGSUV4SlFVSk1SU0JHVDFJZ1FVNVpJRU5NUVVsTkxDQkVRVTFCUjBWVElFOVNJRTlVU0VWU1hHNGdURWxCUWtsTVNWUlpMQ0JYU0VWVVNFVlNJRWxPSUVGT0lFRkRWRWxQVGlCUFJpQkRUMDVVVWtGRFZDd2dWRTlTVkNCUFVpQlBWRWhGVWxkSlUwVXNJRUZTU1ZOSlRrY2dSbEpQVFN4Y2JpQlBWVlFnVDBZZ1QxSWdTVTRnUTA5T1RrVkRWRWxQVGlCWFNWUklJRlJJUlNCVFQwWlVWMEZTUlNCUFVpQlVTRVVnVlZORklFOVNJRTlVU0VWU0lFUkZRVXhKVGtkVElFbE9YRzRnVkVoRklGTlBSbFJYUVZKRkxseHVJQ29xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvdlhHNWNibkpsY1hWcGNtVW9KeTR2UTBOU1lYZEJjM05sZENjcE8xeHVjbVZ4ZFdseVpTZ25MaTlEUTBGemMyVjBKeWs3WEc1eVpYRjFhWEpsS0NjdUwwTkRSbTl1ZENjcE8xeHVjbVZ4ZFdseVpTZ25MaTlEUTFCeVpXWmhZaWNwTzF4dWNtVnhkV2x5WlNnbkxpOURRMEYxWkdsdlEyeHBjQ2NwTzF4dWNtVnhkV2x5WlNnbkxpOURRMU5qY21sd2RITW5LVHRjYm5KbGNYVnBjbVVvSnk0dlEwTlRZMlZ1WlVGemMyVjBKeWs3WEc1eVpYRjFhWEpsS0NjdUwwTkRVM0J5YVhSbFJuSmhiV1VuS1R0Y2JuSmxjWFZwY21Vb0p5NHZRME5VWlhoMGRYSmxNa1FuS1R0Y2JuSmxjWFZwY21Vb0p5NHZRME5TWlc1a1pYSlVaWGgwZFhKbEp5azdYRzV5WlhGMWFYSmxLQ2N1TDBORFZGUkdSbTl1ZENjcE8xeHVjbVZ4ZFdseVpTZ25MaTlEUTFOd2NtbDBaVUYwYkdGekp5azdYRzV5WlhGMWFYSmxLQ2N1TDBORFFtbDBiV0Z3Um05dWRDY3BPMXh1Y21WeGRXbHlaU2duTGk5RFEweGhZbVZzUVhSc1lYTW5LVHRjYm5KbGNYVnBjbVVvSnk0dlEwTlVaWGgwUVhOelpYUW5LVHRjYm5KbGNYVnBjbVVvSnk0dlEwTktjMjl1UVhOelpYUW5LVHRjYm5KbGNYVnBjbVVvSnk0dlEwTkNkV1ptWlhKQmMzTmxkQ2NwTzF4dWNtVnhkV2x5WlNnbkxpOURRMFZtWm1WamRFRnpjMlYwSnlrN1hHNXlaWEYxYVhKbEtDY3VMMjFoZEdWeWFXRnNMME5EVFdGMFpYSnBZV3duS1R0Y2JpSmRmUT09Il19