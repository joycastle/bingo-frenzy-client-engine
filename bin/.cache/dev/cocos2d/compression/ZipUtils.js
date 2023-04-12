(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/compression/ZipUtils.js';
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
        var codec = { name: 'Jacob__Codec' };
        codec.Base64 = require('./base64');
        codec.GZip = require('./gzip');
        codec.unzip = function () {
            return codec.GZip.gunzip.apply(codec.GZip, arguments);
        };
        codec.unzipBase64 = function () {
            var buffer = codec.Base64.decode.apply(codec.Base64, arguments);
            try {
                return codec.GZip.gunzip.call(codec.GZip, buffer);
            } catch (e) {
                return buffer.slice(7);
            }
        };
        codec.unzipBase64AsArray = function (input, bytes) {
            bytes = bytes || 1;
            var dec = this.unzipBase64(input), ar = [], i, j, len;
            for (i = 0, len = dec.length / bytes; i < len; i++) {
                ar[i] = 0;
                for (j = bytes - 1; j >= 0; --j) {
                    ar[i] += dec.charCodeAt(i * bytes + j) << j * 8;
                }
            }
            return ar;
        };
        codec.unzipAsArray = function (input, bytes) {
            bytes = bytes || 1;
            var dec = this.unzip(input), ar = [], i, j, len;
            for (i = 0, len = dec.length / bytes; i < len; i++) {
                ar[i] = 0;
                for (j = bytes - 1; j >= 0; --j) {
                    ar[i] += dec.charCodeAt(i * bytes + j) << j * 8;
                }
            }
            return ar;
        };
        cc.codec = module.exports = codec;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlppcFV0aWxzLmpzIiwiL1VzZXJzL2dhb3lhbmcvV29ya1NwYWNlL2pveWNhc3RsZS9iaW5nby9jbGllbnQvYmluZ28vZW5naW5lL2NvY29zMmQvY29tcHJlc3Npb24vWmlwVXRpbHMuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImNvZGVjIiwibmFtZSIsIkJhc2U2NCIsIkdaaXAiLCJ1bnppcCIsImd1bnppcCIsImFwcGx5IiwiYXJndW1lbnRzIiwidW56aXBCYXNlNjQiLCJidWZmZXIiLCJkZWNvZGUiLCJjYWxsIiwiZSIsInNsaWNlIiwidW56aXBCYXNlNjRBc0FycmF5IiwiaW5wdXQiLCJieXRlcyIsImRlYyIsImFyIiwiaSIsImoiLCJsZW4iLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwidW56aXBBc0FycmF5IiwiY2MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUE7Ozs7OztRQU1rQixPQUFBLGlCQUFBLENBQWxCLE9BQWtCLENBQWxCLE9BQWtCLEVBQWxCLFVBQWtCLENBQUE7O0lBRUhBLFNBQVEsUUFBUkEsQ0FBZixPQUFlQSxFQUFmLE9BQWVBLEVBQWYsTUFBZUEsRUFBZjtBQUFBLFFBQ3FCLElBQUEsQ0FBUixPQUFRLEVBQXJCO0FBQUEsWUFBQSxpQkFBQSxDQUFBLGNBQUEsQ0FBQSxVQUFBLEVBQUEsTUFBQSxFQUFBO0FBQUEsU0FEQTtBQUFBO1FBRkEsSUFBSUMsS0FBQUEsR0FBUSxFQUFDQyxJQUFBQSxFQUFLLGNBQU4sRUFBWjtRQUVBRCxLQUFBQSxDQUFNRSxNQUFORixHQUFlRCxPQUFBQSxDQUFRLFVBQVJBLENBQWZDO1FBQ0FBLEtBQUFBLENBQU1HLElBQU5ILEdBQWFELE9BQUFBLENBQVEsUUFBUkEsQ0FBYkM7UUFPQUEsS0FBQUEsQ0FBTUksS0FBTkosR0FBYyxZQUFZO0FBQUEsWUFDdEIsT0FBT0EsS0FB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QUFBQSxHQUFJLENBQWpERixDQUQ2QjtBQUFBLGlCQUZlO0FBQUEsYUFMWDtBQUFBLFlBV3pDLE9BQU9BLEVBQVAsQ0FYeUM7QUFBQSxTQUE3Q2xCO1FBY0F5QixFQUFBQSxDQUFHekIsS0FBSHlCLEdBQVdDLE1BQUFBLENBQU9DLE9BQVBELEdBQWlCMUIsS0FBNUJ5QixDQXBFQTtBQUFBO0lBR0EsSUFBQSxPQUFBLEVBQUE7QUFBQSx3REFBQTtBQUFBLEtBQUE7O1lBSzBCLFFBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxRQUFBIiwiZmlsZSI6IlppcFV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLVxuIENvcHlyaWdodCAyMDA5LTIwMTAgYnkgU3RlZmFuIFJ1c3RlcmhvbHouXG4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiBZb3UgY2FuIGNob29zZSBiZXR3ZWVuIE1JVCBhbmQgQlNELTMtQ2xhdXNlIGxpY2Vuc2UuIExpY2Vuc2UgZmlsZSB3aWxsIGJlIGFkZGVkIGxhdGVyLlxuIC0tKi9cblxudmFyIGNvZGVjID0ge25hbWU6J0phY29iX19Db2RlYyd9O1xuXG5jb2RlYy5CYXNlNjQgPSByZXF1aXJlKCcuL2Jhc2U2NCcpO1xuY29kZWMuR1ppcCA9IHJlcXVpcmUoJy4vZ3ppcCcpO1xuXG4vKipcbiAqIFVucGFjayBhIGd6aXBwZWQgYnl0ZSBhcnJheVxuICogQHBhcmFtIHtBcnJheX0gaW5wdXQgQnl0ZSBhcnJheVxuICogQHJldHVybnMge1N0cmluZ30gVW5wYWNrZWQgYnl0ZSBzdHJpbmdcbiAqL1xuY29kZWMudW56aXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNvZGVjLkdaaXAuZ3VuemlwLmFwcGx5KGNvZGVjLkdaaXAsIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIFVucGFjayBhIGd6aXBwZWQgYnl0ZSBzdHJpbmcgZW5jb2RlZCBhcyBiYXNlNjRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBCeXRlIHN0cmluZyBlbmNvZGVkIGFzIGJhc2U2NFxuICogQHJldHVybnMge1N0cmluZ30gVW5wYWNrZWQgYnl0ZSBzdHJpbmdcbiAqL1xuY29kZWMudW56aXBCYXNlNjQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJ1ZmZlciA9IGNvZGVjLkJhc2U2NC5kZWNvZGUuYXBwbHkoY29kZWMuQmFzZTY0LCBhcmd1bWVudHMpO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBjb2RlYy5HWmlwLmd1bnppcC5jYWxsKGNvZGVjLkdaaXAsIGJ1ZmZlcik7XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgICAgLy8gaWYgbm90IHppcHBlZCwganVzdCBza2lwXG4gICAgICAgIHJldHVybiBidWZmZXIuc2xpY2UoNyk7IC8vIGdldCBpbWFnZSBkYXRhXG4gICAgfVxufTtcblxuLyoqXG4gKiBVbnBhY2sgYSBnemlwcGVkIGJ5dGUgc3RyaW5nIGVuY29kZWQgYXMgYmFzZTY0XG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgQnl0ZSBzdHJpbmcgZW5jb2RlZCBhcyBiYXNlNjRcbiAqIEBwYXJhbSB7TnVtYmVyfSBieXRlcyBCeXRlcyBwZXIgYXJyYXkgaXRlbVxuICogQHJldHVybnMge0FycmF5fSBVbnBhY2tlZCBieXRlIGFycmF5XG4gKi9cbmNvZGVjLnVuemlwQmFzZTY0QXNBcnJheSA9IGZ1bmN0aW9uIChpbnB1dCwgYnl0ZXMpIHtcbiAgICBieXRlcyA9IGJ5dGVzIHx8IDE7XG5cbiAgICB2YXIgZGVjID0gdGhpcy51bnppcEJhc2U2NChpbnB1dCksXG4gICAgICAgIGFyID0gW10sIGksIGosIGxlbjtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBkZWMubGVuZ3RoIC8gYnl0ZXM7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBhcltpXSA9IDA7XG4gICAgICAgIGZvciAoaiA9IGJ5dGVzIC0gMTsgaiA+PSAwOyAtLWopIHtcbiAgICAgICAgICAgIGFyW2ldICs9IGRlYy5jaGFyQ29kZUF0KChpICogYnl0ZXMpICsgaikgPDwgKGogKiA4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xuXG4vKipcbiAqIFVucGFjayBhIGd6aXBwZWQgYnl0ZSBhcnJheVxuICogQHBhcmFtIHtBcnJheX0gaW5wdXQgQnl0ZSBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGJ5dGVzIEJ5dGVzIHBlciBhcnJheSBpdGVtXG4gKiBAcmV0dXJucyB7QXJyYXl9IFVucGFja2VkIGJ5dGUgYXJyYXlcbiAqL1xuY29kZWMudW56aXBBc0FycmF5ID0gZnVuY3Rpb24gKGlucHV0LCBieXRlcykge1xuICAgIGJ5dGVzID0gYnl0ZXMgfHwgMTtcblxuICAgIHZhciBkZWMgPSB0aGlzLnVuemlwKGlucHV0KSxcbiAgICAgICAgYXIgPSBbXSwgaSwgaiwgbGVuO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IGRlYy5sZW5ndGggLyBieXRlczsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGFyW2ldID0gMDtcbiAgICAgICAgZm9yIChqID0gYnl0ZXMgLSAxOyBqID49IDA7IC0taikge1xuICAgICAgICAgICAgYXJbaV0gKz0gZGVjLmNoYXJDb2RlQXQoKGkgKiBieXRlcykgKyBqKSA8PCAoaiAqIDgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG5cbmNjLmNvZGVjID0gbW9kdWxlLmV4cG9ydHMgPSBjb2RlYzsiLCIndXNlIHN0cmljdCc7XG5cbi8qLS1cbiBDb3B5cmlnaHQgMjAwOS0yMDEwIGJ5IFN0ZWZhbiBSdXN0ZXJob2x6LlxuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gWW91IGNhbiBjaG9vc2UgYmV0d2VlbiBNSVQgYW5kIEJTRC0zLUNsYXVzZSBsaWNlbnNlLiBMaWNlbnNlIGZpbGUgd2lsbCBiZSBhZGRlZCBsYXRlci5cbiAtLSovXG5cbnZhciBjb2RlYyA9IHsgbmFtZTogJ0phY29iX19Db2RlYycgfTtcblxuY29kZWMuQmFzZTY0ID0gcmVxdWlyZSgnLi9iYXNlNjQnKTtcbmNvZGVjLkdaaXAgPSByZXF1aXJlKCcuL2d6aXAnKTtcblxuLyoqXG4gKiBVbnBhY2sgYSBnemlwcGVkIGJ5dGUgYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGlucHV0IEJ5dGUgYXJyYXlcbiAqIEByZXR1cm5zIHtTdHJpbmd9IFVucGFja2VkIGJ5dGUgc3RyaW5nXG4gKi9cbmNvZGVjLnVuemlwID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjb2RlYy5HWmlwLmd1bnppcC5hcHBseShjb2RlYy5HWmlwLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBVbnBhY2sgYSBnemlwcGVkIGJ5dGUgc3RyaW5nIGVuY29kZWQgYXMgYmFzZTY0XG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgQnl0ZSBzdHJpbmcgZW5jb2RlZCBhcyBiYXNlNjRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IFVucGFja2VkIGJ5dGUgc3RyaW5nXG4gKi9cbmNvZGVjLnVuemlwQmFzZTY0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBidWZmZXIgPSBjb2RlYy5CYXNlNjQuZGVjb2RlLmFwcGx5KGNvZGVjLkJhc2U2NCwgYXJndW1lbnRzKTtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gY29kZWMuR1ppcC5ndW56aXAuY2FsbChjb2RlYy5HWmlwLCBidWZmZXIpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaWYgbm90IHppcHBlZCwganVzdCBza2lwXG4gICAgICAgIHJldHVybiBidWZmZXIuc2xpY2UoNyk7IC8vIGdldCBpbWFnZSBkYXRhXG4gICAgfVxufTtcblxuLyoqXG4gKiBVbnBhY2sgYSBnemlwcGVkIGJ5dGUgc3RyaW5nIGVuY29kZWQgYXMgYmFzZTY0XG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgQnl0ZSBzdHJpbmcgZW5jb2RlZCBhcyBiYXNlNjRcbiAqIEBwYXJhbSB7TnVtYmVyfSBieXRlcyBCeXRlcyBwZXIgYXJyYXkgaXRlbVxuICogQHJldHVybnMge0FycmF5fSBVbnBhY2tlZCBieXRlIGFycmF5XG4gKi9cbmNvZGVjLnVuemlwQmFzZTY0QXNBcnJheSA9IGZ1bmN0aW9uIChpbnB1dCwgYnl0ZXMpIHtcbiAgICBieXRlcyA9IGJ5dGVzIHx8IDE7XG5cbiAgICB2YXIgZGVjID0gdGhpcy51bnppcEJhc2U2NChpbnB1dCksXG4gICAgICAgIGFyID0gW10sXG4gICAgICAgIGksXG4gICAgICAgIGosXG4gICAgICAgIGxlbjtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBkZWMubGVuZ3RoIC8gYnl0ZXM7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBhcltpXSA9IDA7XG4gICAgICAgIGZvciAoaiA9IGJ5dGVzIC0gMTsgaiA+PSAwOyAtLWopIHtcbiAgICAgICAgICAgIGFyW2ldICs9IGRlYy5jaGFyQ29kZUF0KGkgKiBieXRlcyArIGopIDw8IGogKiA4O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG5cbi8qKlxuICogVW5wYWNrIGEgZ3ppcHBlZCBieXRlIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBpbnB1dCBCeXRlIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYnl0ZXMgQnl0ZXMgcGVyIGFycmF5IGl0ZW1cbiAqIEByZXR1cm5zIHtBcnJheX0gVW5wYWNrZWQgYnl0ZSBhcnJheVxuICovXG5jb2RlYy51bnppcEFzQXJyYXkgPSBmdW5jdGlvbiAoaW5wdXQsIGJ5dGVzKSB7XG4gICAgYnl0ZXMgPSBieXRlcyB8fCAxO1xuXG4gICAgdmFyIGRlYyA9IHRoaXMudW56aXAoaW5wdXQpLFxuICAgICAgICBhciA9IFtdLFxuICAgICAgICBpLFxuICAgICAgICBqLFxuICAgICAgICBsZW47XG4gICAgZm9yIChpID0gMCwgbGVuID0gZGVjLmxlbmd0aCAvIGJ5dGVzOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgYXJbaV0gPSAwO1xuICAgICAgICBmb3IgKGogPSBieXRlcyAtIDE7IGogPj0gMDsgLS1qKSB7XG4gICAgICAgICAgICBhcltpXSArPSBkZWMuY2hhckNvZGVBdChpICogYnl0ZXMgKyBqKSA8PCBqICogODtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xuXG5jYy5jb2RlYyA9IG1vZHVsZS5leHBvcnRzID0gY29kZWM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbHBwY0ZWMGFXeHpMbXB6SWwwc0ltNWhiV1Z6SWpwYkltTnZaR1ZqSWl3aWJtRnRaU0lzSWtKaGMyVTJOQ0lzSW5KbGNYVnBjbVVpTENKSFdtbHdJaXdpZFc1NmFYQWlMQ0puZFc1NmFYQWlMQ0poY0hCc2VTSXNJbUZ5WjNWdFpXNTBjeUlzSW5WdWVtbHdRbUZ6WlRZMElpd2lZblZtWm1WeUlpd2laR1ZqYjJSbElpd2lZMkZzYkNJc0ltVWlMQ0p6YkdsalpTSXNJblZ1ZW1sd1FtRnpaVFkwUVhOQmNuSmhlU0lzSW1sdWNIVjBJaXdpWW5sMFpYTWlMQ0prWldNaUxDSmhjaUlzSW1raUxDSnFJaXdpYkdWdUlpd2liR1Z1WjNSb0lpd2lZMmhoY2tOdlpHVkJkQ0lzSW5WdWVtbHdRWE5CY25KaGVTSXNJbU5qSWl3aWJXOWtkV3hsSWl3aVpYaHdiM0owY3lKZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFUczdPenM3TzBGQlRVRXNTVUZCU1VFc1VVRkJVU3hGUVVGRFF5eE5RVUZMTEdOQlFVNHNSVUZCV2pzN1FVRkZRVVFzVFVGQlRVVXNUVUZCVGl4SFFVRmxReXhSUVVGUkxGVkJRVklzUTBGQlpqdEJRVU5CU0N4TlFVRk5TU3hKUVVGT0xFZEJRV0ZFTEZGQlFWRXNVVUZCVWl4RFFVRmlPenRCUVVWQk96czdPenRCUVV0QlNDeE5RVUZOU3l4TFFVRk9MRWRCUVdNc1dVRkJXVHRCUVVOMFFpeFhRVUZQVEN4TlFVRk5TU3hKUVVGT0xFTkJRVmRGTEUxQlFWZ3NRMEZCYTBKRExFdEJRV3hDTEVOQlFYZENVQ3hOUVVGTlNTeEpRVUU1UWl4RlFVRnZRMGtzVTBGQmNFTXNRMEZCVUR0QlFVTklMRU5CUmtRN08wRkJTVUU3T3pzN08wRkJTMEZTTEUxQlFVMVRMRmRCUVU0c1IwRkJiMElzV1VGQldUdEJRVU0xUWl4UlFVRkpReXhUUVVGVFZpeE5RVUZOUlN4TlFVRk9MRU5CUVdGVExFMUJRV0lzUTBGQmIwSktMRXRCUVhCQ0xFTkJRVEJDVUN4TlFVRk5SU3hOUVVGb1F5eEZRVUYzUTAwc1UwRkJlRU1zUTBGQllqdEJRVU5CTEZGQlFVazdRVUZEUVN4bFFVRlBVaXhOUVVGTlNTeEpRVUZPTEVOQlFWZEZMRTFCUVZnc1EwRkJhMEpOTEVsQlFXeENMRU5CUVhWQ1dpeE5RVUZOU1N4SlFVRTNRaXhGUVVGdFEwMHNUVUZCYmtNc1EwRkJVRHRCUVVOSUxFdEJSa1FzUTBGSFFTeFBRVUZOUnl4RFFVRk9MRVZCUVZNN1FVRkRURHRCUVVOQkxHVkJRVTlJTEU5QlFVOUpMRXRCUVZBc1EwRkJZU3hEUVVGaUxFTkJRVkFzUTBGR1N5eERRVVZ0UWp0QlFVTXpRanRCUVVOS0xFTkJWRVE3TzBGQlYwRTdPenM3T3p0QlFVMUJaQ3hOUVVGTlpTeHJRa0ZCVGl4SFFVRXlRaXhWUVVGVlF5eExRVUZXTEVWQlFXbENReXhMUVVGcVFpeEZRVUYzUWp0QlFVTXZRMEVzV1VGQlVVRXNVMEZCVXl4RFFVRnFRanM3UVVGRlFTeFJRVUZKUXl4TlFVRk5MRXRCUVV0VUxGZEJRVXdzUTBGQmFVSlBMRXRCUVdwQ0xFTkJRVlk3UVVGQlFTeFJRVU5KUnl4TFFVRkxMRVZCUkZRN1FVRkJRU3hSUVVOaFF5eERRVVJpTzBGQlFVRXNVVUZEWjBKRExFTkJSR2hDTzBGQlFVRXNVVUZEYlVKRExFZEJSRzVDTzBGQlJVRXNVMEZCUzBZc1NVRkJTU3hEUVVGS0xFVkJRVTlGTEUxQlFVMUtMRWxCUVVsTExFMUJRVW9zUjBGQllVNHNTMEZCTDBJc1JVRkJjME5ITEVsQlFVbEZMRWRCUVRGRExFVkJRU3REUml4SFFVRXZReXhGUVVGdlJEdEJRVU5vUkVRc1YwRkJSME1zUTBGQlNDeEpRVUZSTEVOQlFWSTdRVUZEUVN4aFFVRkxReXhKUVVGSlNpeFJRVUZSTEVOQlFXcENMRVZCUVc5Q1NTeExRVUZMTEVOQlFYcENMRVZCUVRSQ0xFVkJRVVZCTEVOQlFUbENMRVZCUVdsRE8wRkJRemRDUml4bFFVRkhReXhEUVVGSUxFdEJRVk5HTEVsQlFVbE5MRlZCUVVvc1EwRkJaMEpLTEVsQlFVbElMRXRCUVV3c1IwRkJZMGtzUTBGQk4wSXNTMEZCYjBOQkxFbEJRVWtzUTBGQmFrUTdRVUZEU0R0QlFVTktPMEZCUTBRc1YwRkJUMFlzUlVGQlVEdEJRVU5JTEVOQldrUTdPMEZCWTBFN096czdPenRCUVUxQmJrSXNUVUZCVFhsQ0xGbEJRVTRzUjBGQmNVSXNWVUZCVlZRc1MwRkJWaXhGUVVGcFFrTXNTMEZCYWtJc1JVRkJkMEk3UVVGRGVrTkJMRmxCUVZGQkxGTkJRVk1zUTBGQmFrSTdPMEZCUlVFc1VVRkJTVU1zVFVGQlRTeExRVUZMWWl4TFFVRk1MRU5CUVZkWExFdEJRVmdzUTBGQlZqdEJRVUZCTEZGQlEwbEhMRXRCUVVzc1JVRkVWRHRCUVVGQkxGRkJRMkZETEVOQlJHSTdRVUZCUVN4UlFVTm5Ra01zUTBGRWFFSTdRVUZCUVN4UlFVTnRRa01zUjBGRWJrSTdRVUZGUVN4VFFVRkxSaXhKUVVGSkxFTkJRVW9zUlVGQlQwVXNUVUZCVFVvc1NVRkJTVXNzVFVGQlNpeEhRVUZoVGl4TFFVRXZRaXhGUVVGelEwY3NTVUZCU1VVc1IwRkJNVU1zUlVGQkswTkdMRWRCUVM5RExFVkJRVzlFTzBGQlEyaEVSQ3hYUVVGSFF5eERRVUZJTEVsQlFWRXNRMEZCVWp0QlFVTkJMR0ZCUVV0RExFbEJRVWxLTEZGQlFWRXNRMEZCYWtJc1JVRkJiMEpKTEV0QlFVc3NRMEZCZWtJc1JVRkJORUlzUlVGQlJVRXNRMEZCT1VJc1JVRkJhVU03UVVGRE4wSkdMR1ZCUVVkRExFTkJRVWdzUzBGQlUwWXNTVUZCU1Uwc1ZVRkJTaXhEUVVGblFrb3NTVUZCU1Vnc1MwRkJUQ3hIUVVGalNTeERRVUUzUWl4TFFVRnZRMEVzU1VGQlNTeERRVUZxUkR0QlFVTklPMEZCUTBvN1FVRkRSQ3hYUVVGUFJpeEZRVUZRTzBGQlEwZ3NRMEZhUkRzN1FVRmpRVThzUjBGQlJ6RkNMRXRCUVVnc1IwRkJWekpDTEU5QlFVOURMRTlCUVZBc1IwRkJhVUkxUWl4TFFVRTFRaUlzSW1acGJHVWlPaUphYVhCVmRHbHNjeTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFMUzFjYmlCRGIzQjVjbWxuYUhRZ01qQXdPUzB5TURFd0lHSjVJRk4wWldaaGJpQlNkWE4wWlhKb2IyeDZMbHh1SUVGc2JDQnlhV2RvZEhNZ2NtVnpaWEoyWldRdVhHNGdXVzkxSUdOaGJpQmphRzl2YzJVZ1ltVjBkMlZsYmlCTlNWUWdZVzVrSUVKVFJDMHpMVU5zWVhWelpTQnNhV05sYm5ObExpQk1hV05sYm5ObElHWnBiR1VnZDJsc2JDQmlaU0JoWkdSbFpDQnNZWFJsY2k1Y2JpQXRMU292WEc1Y2JuWmhjaUJqYjJSbFl5QTlJSHR1WVcxbE9pZEtZV052WWw5ZlEyOWtaV01uZlR0Y2JseHVZMjlrWldNdVFtRnpaVFkwSUQwZ2NtVnhkV2x5WlNnbkxpOWlZWE5sTmpRbktUdGNibU52WkdWakxrZGFhWEFnUFNCeVpYRjFhWEpsS0NjdUwyZDZhWEFuS1R0Y2JseHVMeW9xWEc0Z0tpQlZibkJoWTJzZ1lTQm5lbWx3Y0dWa0lHSjVkR1VnWVhKeVlYbGNiaUFxSUVCd1lYSmhiU0I3UVhKeVlYbDlJR2x1Y0hWMElFSjVkR1VnWVhKeVlYbGNiaUFxSUVCeVpYUjFjbTV6SUh0VGRISnBibWQ5SUZWdWNHRmphMlZrSUdKNWRHVWdjM1J5YVc1blhHNGdLaTljYm1OdlpHVmpMblZ1ZW1sd0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQmpiMlJsWXk1SFdtbHdMbWQxYm5wcGNDNWhjSEJzZVNoamIyUmxZeTVIV21sd0xDQmhjbWQxYldWdWRITXBPMXh1ZlR0Y2JseHVMeW9xWEc0Z0tpQlZibkJoWTJzZ1lTQm5lbWx3Y0dWa0lHSjVkR1VnYzNSeWFXNW5JR1Z1WTI5a1pXUWdZWE1nWW1GelpUWTBYRzRnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnYVc1d2RYUWdRbmwwWlNCemRISnBibWNnWlc1amIyUmxaQ0JoY3lCaVlYTmxOalJjYmlBcUlFQnlaWFIxY201eklIdFRkSEpwYm1kOUlGVnVjR0ZqYTJWa0lHSjVkR1VnYzNSeWFXNW5YRzRnS2k5Y2JtTnZaR1ZqTG5WdWVtbHdRbUZ6WlRZMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSFpoY2lCaWRXWm1aWElnUFNCamIyUmxZeTVDWVhObE5qUXVaR1ZqYjJSbExtRndjR3g1S0dOdlpHVmpMa0poYzJVMk5Dd2dZWEpuZFcxbGJuUnpLVHRjYmlBZ0lDQjBjbmtnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTI5a1pXTXVSMXBwY0M1bmRXNTZhWEF1WTJGc2JDaGpiMlJsWXk1SFdtbHdMQ0JpZFdabVpYSXBPMXh1SUNBZ0lIMWNiaUFnSUNCallYUmphQ2hsS1NCN1hHNGdJQ0FnSUNBZ0lDOHZJR2xtSUc1dmRDQjZhWEJ3WldRc0lHcDFjM1FnYzJ0cGNGeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1luVm1abVZ5TG5Oc2FXTmxLRGNwT3lBdkx5Qm5aWFFnYVcxaFoyVWdaR0YwWVZ4dUlDQWdJSDFjYm4wN1hHNWNiaThxS2x4dUlDb2dWVzV3WVdOcklHRWdaM3BwY0hCbFpDQmllWFJsSUhOMGNtbHVaeUJsYm1OdlpHVmtJR0Z6SUdKaGMyVTJORnh1SUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUdsdWNIVjBJRUo1ZEdVZ2MzUnlhVzVuSUdWdVkyOWtaV1FnWVhNZ1ltRnpaVFkwWEc0Z0tpQkFjR0Z5WVcwZ2UwNTFiV0psY24wZ1lubDBaWE1nUW5sMFpYTWdjR1Z5SUdGeWNtRjVJR2wwWlcxY2JpQXFJRUJ5WlhSMWNtNXpJSHRCY25KaGVYMGdWVzV3WVdOclpXUWdZbmwwWlNCaGNuSmhlVnh1SUNvdlhHNWpiMlJsWXk1MWJucHBjRUpoYzJVMk5FRnpRWEp5WVhrZ1BTQm1kVzVqZEdsdmJpQW9hVzV3ZFhRc0lHSjVkR1Z6S1NCN1hHNGdJQ0FnWW5sMFpYTWdQU0JpZVhSbGN5QjhmQ0F4TzF4dVhHNGdJQ0FnZG1GeUlHUmxZeUE5SUhSb2FYTXVkVzU2YVhCQ1lYTmxOalFvYVc1d2RYUXBMRnh1SUNBZ0lDQWdJQ0JoY2lBOUlGdGRMQ0JwTENCcUxDQnNaVzQ3WEc0Z0lDQWdabTl5SUNocElEMGdNQ3dnYkdWdUlEMGdaR1ZqTG14bGJtZDBhQ0F2SUdKNWRHVnpPeUJwSUR3Z2JHVnVPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdZWEpiYVYwZ1BTQXdPMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHb2dQU0JpZVhSbGN5QXRJREU3SUdvZ1BqMGdNRHNnTFMxcUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCaGNsdHBYU0FyUFNCa1pXTXVZMmhoY2tOdlpHVkJkQ2dvYVNBcUlHSjVkR1Z6S1NBcklHb3BJRHc4SUNocUlDb2dPQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlHRnlPMXh1ZlR0Y2JseHVMeW9xWEc0Z0tpQlZibkJoWTJzZ1lTQm5lbWx3Y0dWa0lHSjVkR1VnWVhKeVlYbGNiaUFxSUVCd1lYSmhiU0I3UVhKeVlYbDlJR2x1Y0hWMElFSjVkR1VnWVhKeVlYbGNiaUFxSUVCd1lYSmhiU0I3VG5WdFltVnlmU0JpZVhSbGN5QkNlWFJsY3lCd1pYSWdZWEp5WVhrZ2FYUmxiVnh1SUNvZ1FISmxkSFZ5Ym5NZ2UwRnljbUY1ZlNCVmJuQmhZMnRsWkNCaWVYUmxJR0Z5Y21GNVhHNGdLaTljYm1OdlpHVmpMblZ1ZW1sd1FYTkJjbkpoZVNBOUlHWjFibU4wYVc5dUlDaHBibkIxZEN3Z1lubDBaWE1wSUh0Y2JpQWdJQ0JpZVhSbGN5QTlJR0o1ZEdWeklIeDhJREU3WEc1Y2JpQWdJQ0IyWVhJZ1pHVmpJRDBnZEdocGN5NTFibnBwY0NocGJuQjFkQ2tzWEc0Z0lDQWdJQ0FnSUdGeUlEMGdXMTBzSUdrc0lHb3NJR3hsYmp0Y2JpQWdJQ0JtYjNJZ0tHa2dQU0F3TENCc1pXNGdQU0JrWldNdWJHVnVaM1JvSUM4Z1lubDBaWE03SUdrZ1BDQnNaVzQ3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JoY2x0cFhTQTlJREE3WEc0Z0lDQWdJQ0FnSUdadmNpQW9haUE5SUdKNWRHVnpJQzBnTVRzZ2FpQStQU0F3T3lBdExXb3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHRnlXMmxkSUNzOUlHUmxZeTVqYUdGeVEyOWtaVUYwS0NocElDb2dZbmwwWlhNcElDc2dhaWtnUER3Z0tHb2dLaUE0S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdZWEk3WEc1OU8xeHVYRzVqWXk1amIyUmxZeUE5SUcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnWTI5a1pXTTdJbDE5Il19