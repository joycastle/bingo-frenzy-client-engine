(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/compression/base64.js';
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
        var misc = require('../core/utils/misc');
        var strValue = misc.BASE64_VALUES;
        var Base64 = { name: 'Jacob__Codec__Base64' };
        Base64.decode = function Jacob__Codec__Base64__decode(input) {
            var output = [], chr1, chr2, chr3, enc1, enc2, enc3, enc4, i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
            while (i < input.length) {
                enc1 = strValue[input.charCodeAt(i++)];
                enc2 = strValue[input.charCodeAt(i++)];
                enc3 = strValue[input.charCodeAt(i++)];
                enc4 = strValue[input.charCodeAt(i++)];
                chr1 = enc1 << 2 | enc2 >> 4;
                chr2 = (enc2 & 15) << 4 | enc3 >> 2;
                chr3 = (enc3 & 3) << 6 | enc4;
                output.push(String.fromCharCode(chr1));
                if (enc3 !== 64) {
                    output.push(String.fromCharCode(chr2));
                }
                if (enc4 !== 64) {
                    output.push(String.fromCharCode(chr3));
                }
            }
            output = output.join('');
            return output;
        };
        Base64.decodeAsArray = function Jacob__Codec__Base64___decodeAsArray(input, bytes) {
            var dec = this.decode(input), ar = [], i, j, len;
            for (i = 0, len = dec.length / bytes; i < len; i++) {
                ar[i] = 0;
                for (j = bytes - 1; j >= 0; --j) {
                    ar[i] += dec.charCodeAt(i * bytes + j) << j * 8;
                }
            }
            return ar;
        };
        module.exports = Base64;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2U2NC5qcyIsIi9Vc2Vycy9nYW95YW5nL1dvcmtTcGFjZS9qb3ljYXN0bGUvYmluZ28vY2xpZW50L2JpbmdvL2VuZ2luZS9jb2NvczJkL2NvbXByZXNzaW9uL2Jhc2U2NC5qcyJdLCJuYW1lcyI6WyJtaXNjIiwicmVxdWlyZSIsInN0clZhbHVlIiwiQkFTRTY0X1ZBTFVFUyIsIkJhc2U2NCIsIm5hbWUiLCJkZWNvZGUiLCJKYWNvYl9fQ29kZWNfX0Jhc2U2NF9fZGVjb2RlIiwiaW5wdXQiLCJvdXRwdXQiLCJjaHIxIiwiY2hyMiIsImNocjMiLCJlbmMxIiwiZW5jMiIsImVuYzMiLCJlbmM0IiwiaSIsInJlcGxhY2UiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwicHVzaCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImpvaW4iLCJkZWNvZGVBc0FycmF5IiwiSmFjb2JfX0NvZGVjX19CYXNlNjRfX19kZWNvZGVBc0FycmF5IiwiYnl0ZXMiLCJkZWMiLCJhciIsImoiLCJsZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUE7Ozs7OztRQU1tQixPQUFBLGlCQUFBLENBQW5CLE9BQW1CLENBQW5CLE9BQW1CLEVBQW5CLFVBQW1CLENBQUE7OztRQUduQixJQUFBLENBQUEsT0FBQSxFQUFBO0FBQUEsWUFBQSxpQkFBQSxDQUFBLGNBQUEsQ0FBQSxVQUFBLEVBQUEsTUFBQSxFQUFBO0FBQUE7O1FBSEEsSUFBSUEsSUFBQUEsR0FBT0MsT0FBQUEsQ0FBUSxvQkFBUkEsQ0FBWDtRQUNBLElBQUlDLFFBQUFBLEdBQVdGLElBQUFBLENBQUtHLGFBQXBCO1FBS0EsSUFBSUMsTUFBQUEsR0FBUyxFQUFDQyxJQUFBQSxFQUFLLHNCQUFOLEVBQWI7UUFhQUQsTUFBQUEsQ0FBT0UsTUFBUEYsR0FBZ0IsU0FBU0csNEJBQVQsQ0FBc0NDLEtBQXRD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LENBQUFBLElBQUssQ0FBekIsRUFBNEIsRUFBRUEsQ0FBOUIsRUFBaUM7QUFBQSxvQkFDN0JELEVBQUFBLENBQUdaLENBQUhZLEtBQVNELEdBQUFBLENBQUlSLFVBQUpRLENBQWdCWCxDQUFBQSxHQUFJVSxLQUFKVixHQUFhYSxDQUE3QkYsS0FBb0NFLENBQUFBLEdBQUksQ0FBakRELENBRDZCO0FBQUEsaUJBRmU7QUFBQSxhQUgyQjtBQUFBLFlBVS9FLE9BQU9BLEVBQVAsQ0FWK0U7QUFBQSxTQUFuRnpCO1FBYUE0QixNQUFBQSxDQUFPQyxPQUFQRCxHQUFpQjVCLE1BQWpCNEI7OztRQXhFbUIsUUFBQSxDQUFBLFFBQUEsQ0FBQSxPQUFBLEVBQW5CLFNBQW1CLEVBQW5CLFFBQW1CO1dBRW5CO0FBQUE7O1dBQUE7QUFBQSIsImZpbGUiOiJiYXNlNjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tXG4gQ29weXJpZ2h0IDIwMDktMjAxMCBieSBTdGVmYW4gUnVzdGVyaG9sei5cbiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuIFlvdSBjYW4gY2hvb3NlIGJldHdlZW4gTUlUIGFuZCBCU0QtMy1DbGF1c2UgbGljZW5zZS4gTGljZW5zZSBmaWxlIHdpbGwgYmUgYWRkZWQgbGF0ZXIuXG4gLS0qL1xuXG52YXIgbWlzYyA9IHJlcXVpcmUoJy4uL2NvcmUvdXRpbHMvbWlzYycpO1xudmFyIHN0clZhbHVlID0gbWlzYy5CQVNFNjRfVkFMVUVTO1xuXG4vKipcbiAqIG1peGluIGNjLkNvZGVjLkJhc2U2NFxuICovXG52YXIgQmFzZTY0ID0ge25hbWU6J0phY29iX19Db2RlY19fQmFzZTY0J307XG5cbi8qKlxuICogPHA+XG4gKiAgICBjYy5Db2RlYy5CYXNlNjQuZGVjb2RlKGlucHV0WywgdW5pY29kZT1mYWxzZV0pIC0+IFN0cmluZyAoaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQpLlxuICogPC9wPlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIGJhc2U2NCBlbmNvZGVkIHN0cmluZyB0byBkZWNvZGVcbiAqIEByZXR1cm4ge1N0cmluZ30gRGVjb2RlcyBhIGJhc2U2NCBlbmNvZGVkIFN0cmluZ1xuICogQGV4YW1wbGVcbiAqIC8vZGVjb2RlIHN0cmluZ1xuICogY2MuQ29kZWMuQmFzZTY0LmRlY29kZShcIlUyOXRaU0JUZEhKcGJtYz1cIik7IC8vID0+IFwiU29tZSBTdHJpbmdcIlxuICovXG5CYXNlNjQuZGVjb2RlID0gZnVuY3Rpb24gSmFjb2JfX0NvZGVjX19CYXNlNjRfX2RlY29kZShpbnB1dCkge1xuICAgIHZhciBvdXRwdXQgPSBbXSxcbiAgICAgICAgY2hyMSwgY2hyMiwgY2hyMyxcbiAgICAgICAgZW5jMSwgZW5jMiwgZW5jMywgZW5jNCxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLCBcIlwiKTtcblxuICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgIGVuYzEgPSBzdHJWYWx1ZVtpbnB1dC5jaGFyQ29kZUF0KGkrKyldO1xuICAgICAgICBlbmMyID0gc3RyVmFsdWVbaW5wdXQuY2hhckNvZGVBdChpKyspXTtcbiAgICAgICAgZW5jMyA9IHN0clZhbHVlW2lucHV0LmNoYXJDb2RlQXQoaSsrKV07XG4gICAgICAgIGVuYzQgPSBzdHJWYWx1ZVtpbnB1dC5jaGFyQ29kZUF0KGkrKyldO1xuXG4gICAgICAgIGNocjEgPSAoZW5jMSA8PCAyKSB8IChlbmMyID4+IDQpO1xuICAgICAgICBjaHIyID0gKChlbmMyICYgMTUpIDw8IDQpIHwgKGVuYzMgPj4gMik7XG4gICAgICAgIGNocjMgPSAoKGVuYzMgJiAzKSA8PCA2KSB8IGVuYzQ7XG5cbiAgICAgICAgb3V0cHV0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShjaHIxKSk7XG5cbiAgICAgICAgaWYgKGVuYzMgIT09IDY0KSB7XG4gICAgICAgICAgICBvdXRwdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW5jNCAhPT0gNjQpIHtcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3V0cHV0ID0gb3V0cHV0LmpvaW4oJycpO1xuXG4gICAgcmV0dXJuIG91dHB1dDtcbn07XG5cbi8qKlxuICogPHA+XG4gKiAgICBDb252ZXJ0cyBhbiBpbnB1dCBzdHJpbmcgZW5jb2RlZCBpbiBiYXNlNjQgdG8gYW4gYXJyYXkgb2YgaW50ZWdlcnMgd2hvc2U8YnIvPlxuICogICAgdmFsdWVzIHJlcHJlc2VudCB0aGUgZGVjb2RlZCBzdHJpbmcncyBjaGFyYWN0ZXJzJyBieXRlcy5cbiAqIDwvcD5cbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBTdHJpbmcgdG8gY29udmVydCB0byBhbiBhcnJheSBvZiBJbnRlZ2Vyc1xuICogQHBhcmFtIHtOdW1iZXJ9IGJ5dGVzXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKiAvL2RlY29kZSBzdHJpbmcgdG8gYXJyYXlcbiAqIHZhciBkZWNvZGVBcnIgPSBjYy5Db2RlYy5CYXNlNjQuZGVjb2RlQXNBcnJheShcIlUyOXRaU0JUZEhKcGJtYz1cIik7XG4gKi9cbkJhc2U2NC5kZWNvZGVBc0FycmF5ID0gZnVuY3Rpb24gSmFjb2JfX0NvZGVjX19CYXNlNjRfX19kZWNvZGVBc0FycmF5KGlucHV0LCBieXRlcykge1xuICAgIHZhciBkZWMgPSB0aGlzLmRlY29kZShpbnB1dCksXG4gICAgICAgIGFyID0gW10sIGksIGosIGxlbjtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBkZWMubGVuZ3RoIC8gYnl0ZXM7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBhcltpXSA9IDA7XG4gICAgICAgIGZvciAoaiA9IGJ5dGVzIC0gMTsgaiA+PSAwOyAtLWopIHtcbiAgICAgICAgICAgIGFyW2ldICs9IGRlYy5jaGFyQ29kZUF0KChpICogYnl0ZXMpICsgaikgPDwgKGogKiA4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZTY0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKi0tXG4gQ29weXJpZ2h0IDIwMDktMjAxMCBieSBTdGVmYW4gUnVzdGVyaG9sei5cbiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuIFlvdSBjYW4gY2hvb3NlIGJldHdlZW4gTUlUIGFuZCBCU0QtMy1DbGF1c2UgbGljZW5zZS4gTGljZW5zZSBmaWxlIHdpbGwgYmUgYWRkZWQgbGF0ZXIuXG4gLS0qL1xuXG52YXIgbWlzYyA9IHJlcXVpcmUoJy4uL2NvcmUvdXRpbHMvbWlzYycpO1xudmFyIHN0clZhbHVlID0gbWlzYy5CQVNFNjRfVkFMVUVTO1xuXG4vKipcbiAqIG1peGluIGNjLkNvZGVjLkJhc2U2NFxuICovXG52YXIgQmFzZTY0ID0geyBuYW1lOiAnSmFjb2JfX0NvZGVjX19CYXNlNjQnIH07XG5cbi8qKlxuICogPHA+XG4gKiAgICBjYy5Db2RlYy5CYXNlNjQuZGVjb2RlKGlucHV0WywgdW5pY29kZT1mYWxzZV0pIC0+IFN0cmluZyAoaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQpLlxuICogPC9wPlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIGJhc2U2NCBlbmNvZGVkIHN0cmluZyB0byBkZWNvZGVcbiAqIEByZXR1cm4ge1N0cmluZ30gRGVjb2RlcyBhIGJhc2U2NCBlbmNvZGVkIFN0cmluZ1xuICogQGV4YW1wbGVcbiAqIC8vZGVjb2RlIHN0cmluZ1xuICogY2MuQ29kZWMuQmFzZTY0LmRlY29kZShcIlUyOXRaU0JUZEhKcGJtYz1cIik7IC8vID0+IFwiU29tZSBTdHJpbmdcIlxuICovXG5CYXNlNjQuZGVjb2RlID0gZnVuY3Rpb24gSmFjb2JfX0NvZGVjX19CYXNlNjRfX2RlY29kZShpbnB1dCkge1xuICAgIHZhciBvdXRwdXQgPSBbXSxcbiAgICAgICAgY2hyMSxcbiAgICAgICAgY2hyMixcbiAgICAgICAgY2hyMyxcbiAgICAgICAgZW5jMSxcbiAgICAgICAgZW5jMixcbiAgICAgICAgZW5jMyxcbiAgICAgICAgZW5jNCxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLCBcIlwiKTtcblxuICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgIGVuYzEgPSBzdHJWYWx1ZVtpbnB1dC5jaGFyQ29kZUF0KGkrKyldO1xuICAgICAgICBlbmMyID0gc3RyVmFsdWVbaW5wdXQuY2hhckNvZGVBdChpKyspXTtcbiAgICAgICAgZW5jMyA9IHN0clZhbHVlW2lucHV0LmNoYXJDb2RlQXQoaSsrKV07XG4gICAgICAgIGVuYzQgPSBzdHJWYWx1ZVtpbnB1dC5jaGFyQ29kZUF0KGkrKyldO1xuXG4gICAgICAgIGNocjEgPSBlbmMxIDw8IDIgfCBlbmMyID4+IDQ7XG4gICAgICAgIGNocjIgPSAoZW5jMiAmIDE1KSA8PCA0IHwgZW5jMyA+PiAyO1xuICAgICAgICBjaHIzID0gKGVuYzMgJiAzKSA8PCA2IHwgZW5jNDtcblxuICAgICAgICBvdXRwdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjEpKTtcblxuICAgICAgICBpZiAoZW5jMyAhPT0gNjQpIHtcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMikpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbmM0ICE9PSA2NCkge1xuICAgICAgICAgICAgb3V0cHV0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShjaHIzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvdXRwdXQgPSBvdXRwdXQuam9pbignJyk7XG5cbiAgICByZXR1cm4gb3V0cHV0O1xufTtcblxuLyoqXG4gKiA8cD5cbiAqICAgIENvbnZlcnRzIGFuIGlucHV0IHN0cmluZyBlbmNvZGVkIGluIGJhc2U2NCB0byBhbiBhcnJheSBvZiBpbnRlZ2VycyB3aG9zZTxici8+XG4gKiAgICB2YWx1ZXMgcmVwcmVzZW50IHRoZSBkZWNvZGVkIHN0cmluZydzIGNoYXJhY3RlcnMnIGJ5dGVzLlxuICogPC9wPlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFN0cmluZyB0byBjb252ZXJ0IHRvIGFuIGFycmF5IG9mIEludGVnZXJzXG4gKiBAcGFyYW0ge051bWJlcn0gYnl0ZXNcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGV4YW1wbGVcbiAqIC8vZGVjb2RlIHN0cmluZyB0byBhcnJheVxuICogdmFyIGRlY29kZUFyciA9IGNjLkNvZGVjLkJhc2U2NC5kZWNvZGVBc0FycmF5KFwiVTI5dFpTQlRkSEpwYm1jPVwiKTtcbiAqL1xuQmFzZTY0LmRlY29kZUFzQXJyYXkgPSBmdW5jdGlvbiBKYWNvYl9fQ29kZWNfX0Jhc2U2NF9fX2RlY29kZUFzQXJyYXkoaW5wdXQsIGJ5dGVzKSB7XG4gICAgdmFyIGRlYyA9IHRoaXMuZGVjb2RlKGlucHV0KSxcbiAgICAgICAgYXIgPSBbXSxcbiAgICAgICAgaSxcbiAgICAgICAgaixcbiAgICAgICAgbGVuO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IGRlYy5sZW5ndGggLyBieXRlczsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGFyW2ldID0gMDtcbiAgICAgICAgZm9yIChqID0gYnl0ZXMgLSAxOyBqID49IDA7IC0taikge1xuICAgICAgICAgICAgYXJbaV0gKz0gZGVjLmNoYXJDb2RlQXQoaSAqIGJ5dGVzICsgaikgPDwgaiAqIDg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2U2NDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltSmhjMlUyTkM1cWN5SmRMQ0p1WVcxbGN5STZXeUp0YVhOaklpd2ljbVZ4ZFdseVpTSXNJbk4wY2xaaGJIVmxJaXdpUWtGVFJUWTBYMVpCVEZWRlV5SXNJa0poYzJVMk5DSXNJbTVoYldVaUxDSmtaV052WkdVaUxDSktZV052WWw5ZlEyOWtaV05mWDBKaGMyVTJORjlmWkdWamIyUmxJaXdpYVc1d2RYUWlMQ0p2ZFhSd2RYUWlMQ0pqYUhJeElpd2lZMmh5TWlJc0ltTm9jak1pTENKbGJtTXhJaXdpWlc1ak1pSXNJbVZ1WXpNaUxDSmxibU0wSWl3aWFTSXNJbkpsY0d4aFkyVWlMQ0pzWlc1bmRHZ2lMQ0pqYUdGeVEyOWtaVUYwSWl3aWNIVnphQ0lzSWxOMGNtbHVaeUlzSW1aeWIyMURhR0Z5UTI5a1pTSXNJbXB2YVc0aUxDSmtaV052WkdWQmMwRnljbUY1SWl3aVNtRmpiMkpmWDBOdlpHVmpYMTlDWVhObE5qUmZYMTlrWldOdlpHVkJjMEZ5Y21GNUlpd2lZbmwwWlhNaUxDSmtaV01pTENKaGNpSXNJbW9pTENKc1pXNGlMQ0p0YjJSMWJHVWlMQ0psZUhCdmNuUnpJbDBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCT3pzN096czdRVUZOUVN4SlFVRkpRU3hQUVVGUFF5eFJRVUZSTEc5Q1FVRlNMRU5CUVZnN1FVRkRRU3hKUVVGSlF5eFhRVUZYUml4TFFVRkxSeXhoUVVGd1FqczdRVUZGUVRzN08wRkJSMEVzU1VGQlNVTXNVMEZCVXl4RlFVRkRReXhOUVVGTExITkNRVUZPTEVWQlFXSTdPMEZCUlVFN096czdPenM3T3pzN08wRkJWMEZFTEU5QlFVOUZMRTFCUVZBc1IwRkJaMElzVTBGQlUwTXNORUpCUVZRc1EwRkJjME5ETEV0QlFYUkRMRVZCUVRaRE8wRkJRM3BFTEZGQlFVbERMRk5CUVZNc1JVRkJZanRCUVVGQkxGRkJRMGxETEVsQlJFbzdRVUZCUVN4UlFVTlZReXhKUVVSV08wRkJRVUVzVVVGRFowSkRMRWxCUkdoQ08wRkJRVUVzVVVGRlNVTXNTVUZHU2p0QlFVRkJMRkZCUlZWRExFbEJSbFk3UVVGQlFTeFJRVVZuUWtNc1NVRkdhRUk3UVVGQlFTeFJRVVZ6UWtNc1NVRkdkRUk3UVVGQlFTeFJRVWRKUXl4SlFVRkpMRU5CU0ZJN08wRkJTMEZVTEZsQlFWRkJMRTFCUVUxVkxFOUJRVTRzUTBGQll5eHhRa0ZCWkN4RlFVRnhReXhGUVVGeVF5eERRVUZTT3p0QlFVVkJMRmRCUVU5RUxFbEJRVWxVTEUxQlFVMVhMRTFCUVdwQ0xFVkJRWGxDTzBGQlEzSkNUaXhsUVVGUFdDeFRRVUZUVFN4TlFVRk5XU3hWUVVGT0xFTkJRV2xDU0N4SFFVRnFRaXhEUVVGVUxFTkJRVkE3UVVGRFFVZ3NaVUZCVDFvc1UwRkJVMDBzVFVGQlRWa3NWVUZCVGl4RFFVRnBRa2dzUjBGQmFrSXNRMEZCVkN4RFFVRlFPMEZCUTBGR0xHVkJRVTlpTEZOQlFWTk5MRTFCUVUxWkxGVkJRVTRzUTBGQmFVSklMRWRCUVdwQ0xFTkJRVlFzUTBGQlVEdEJRVU5CUkN4bFFVRlBaQ3hUUVVGVFRTeE5RVUZOV1N4VlFVRk9MRU5CUVdsQ1NDeEhRVUZxUWl4RFFVRlVMRU5CUVZBN08wRkJSVUZRTEdWQlFWRkhMRkZCUVZFc1EwRkJWQ3hIUVVGbFF5eFJRVUZSTEVOQlFUbENPMEZCUTBGSUxHVkJRVkVzUTBGQlEwY3NUMEZCVHl4RlFVRlNMRXRCUVdVc1EwRkJhRUlzUjBGQmMwSkRMRkZCUVZFc1EwRkJja003UVVGRFFVZ3NaVUZCVVN4RFFVRkRSeXhQUVVGUExFTkJRVklzUzBGQll5eERRVUZtTEVkQlFXOUNReXhKUVVFelFqczdRVUZGUVZBc1pVRkJUMWtzU1VGQlVDeERRVUZaUXl4UFFVRlBReXhaUVVGUUxFTkJRVzlDWWl4SlFVRndRaXhEUVVGYU96dEJRVVZCTEZsQlFVbExMRk5CUVZNc1JVRkJZaXhGUVVGcFFqdEJRVU5pVGl4dFFrRkJUMWtzU1VGQlVDeERRVUZaUXl4UFFVRlBReXhaUVVGUUxFTkJRVzlDV2l4SlFVRndRaXhEUVVGYU8wRkJRMGc3UVVGRFJDeFpRVUZKU3l4VFFVRlRMRVZCUVdJc1JVRkJhVUk3UVVGRFlsQXNiVUpCUVU5WkxFbEJRVkFzUTBGQldVTXNUMEZCVDBNc1dVRkJVQ3hEUVVGdlFsZ3NTVUZCY0VJc1EwRkJXanRCUVVOSU8wRkJRMG83TzBGQlJVUklMR0ZCUVZOQkxFOUJRVTlsTEVsQlFWQXNRMEZCV1N4RlFVRmFMRU5CUVZRN08wRkJSVUVzVjBGQlQyWXNUVUZCVUR0QlFVTklMRU5CTDBKRU96dEJRV2xEUVRzN096czdPenM3T3pzN096dEJRV0ZCVEN4UFFVRlBjVUlzWVVGQlVDeEhRVUYxUWl4VFFVRlRReXh2UTBGQlZDeERRVUU0UTJ4Q0xFdEJRVGxETEVWQlFYRkViVUlzUzBGQmNrUXNSVUZCTkVRN1FVRkRMMFVzVVVGQlNVTXNUVUZCVFN4TFFVRkxkRUlzVFVGQlRDeERRVUZaUlN4TFFVRmFMRU5CUVZZN1FVRkJRU3hSUVVOSmNVSXNTMEZCU3l4RlFVUlVPMEZCUVVFc1VVRkRZVm9zUTBGRVlqdEJRVUZCTEZGQlEyZENZU3hEUVVSb1FqdEJRVUZCTEZGQlEyMUNReXhIUVVSdVFqdEJRVVZCTEZOQlFVdGtMRWxCUVVrc1EwRkJTaXhGUVVGUFl5eE5RVUZOU0N4SlFVRkpWQ3hOUVVGS0xFZEJRV0ZSTEV0QlFTOUNMRVZCUVhORFZpeEpRVUZKWXl4SFFVRXhReXhGUVVFclEyUXNSMEZCTDBNc1JVRkJiMFE3UVVGRGFFUlpMRmRCUVVkYUxFTkJRVWdzU1VGQlVTeERRVUZTTzBGQlEwRXNZVUZCUzJFc1NVRkJTVWdzVVVGQlVTeERRVUZxUWl4RlFVRnZRa2NzUzBGQlN5eERRVUY2UWl4RlFVRTBRaXhGUVVGRlFTeERRVUU1UWl4RlFVRnBRenRCUVVNM1FrUXNaVUZCUjFvc1EwRkJTQ3hMUVVGVFZ5eEpRVUZKVWl4VlFVRktMRU5CUVdkQ1NDeEpRVUZKVlN4TFFVRk1MRWRCUVdOSExFTkJRVGRDTEV0QlFXOURRU3hKUVVGSkxFTkJRV3BFTzBGQlEwZzdRVUZEU2pzN1FVRkZSQ3hYUVVGUFJDeEZRVUZRTzBGQlEwZ3NRMEZZUkRzN1FVRmhRVWNzVDBGQlQwTXNUMEZCVUN4SFFVRnBRamRDTEUxQlFXcENJaXdpWm1sc1pTSTZJbUpoYzJVMk5DNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUxTMWNiaUJEYjNCNWNtbG5hSFFnTWpBd09TMHlNREV3SUdKNUlGTjBaV1poYmlCU2RYTjBaWEpvYjJ4NkxseHVJRUZzYkNCeWFXZG9kSE1nY21WelpYSjJaV1F1WEc0Z1dXOTFJR05oYmlCamFHOXZjMlVnWW1WMGQyVmxiaUJOU1ZRZ1lXNWtJRUpUUkMwekxVTnNZWFZ6WlNCc2FXTmxibk5sTGlCTWFXTmxibk5sSUdacGJHVWdkMmxzYkNCaVpTQmhaR1JsWkNCc1lYUmxjaTVjYmlBdExTb3ZYRzVjYm5aaGNpQnRhWE5qSUQwZ2NtVnhkV2x5WlNnbkxpNHZZMjl5WlM5MWRHbHNjeTl0YVhOakp5azdYRzUyWVhJZ2MzUnlWbUZzZFdVZ1BTQnRhWE5qTGtKQlUwVTJORjlXUVV4VlJWTTdYRzVjYmk4cUtseHVJQ29nYldsNGFXNGdZMk11UTI5a1pXTXVRbUZ6WlRZMFhHNGdLaTljYm5aaGNpQkNZWE5sTmpRZ1BTQjdibUZ0WlRvblNtRmpiMkpmWDBOdlpHVmpYMTlDWVhObE5qUW5mVHRjYmx4dUx5b3FYRzRnS2lBOGNENWNiaUFxSUNBZ0lHTmpMa052WkdWakxrSmhjMlUyTkM1a1pXTnZaR1VvYVc1d2RYUmJMQ0IxYm1samIyUmxQV1poYkhObFhTa2dMVDRnVTNSeWFXNW5JQ2hvZEhSd09pOHZaVzR1ZDJscmFYQmxaR2xoTG05eVp5OTNhV3RwTDBKaGMyVTJOQ2t1WEc0Z0tpQThMM0ErWEc0Z0tpQkFablZ1WTNScGIyNWNiaUFxSUVCd1lYSmhiU0I3VTNSeWFXNW5mU0JwYm5CMWRDQlVhR1VnWW1GelpUWTBJR1Z1WTI5a1pXUWdjM1J5YVc1bklIUnZJR1JsWTI5a1pWeHVJQ29nUUhKbGRIVnliaUI3VTNSeWFXNW5mU0JFWldOdlpHVnpJR0VnWW1GelpUWTBJR1Z1WTI5a1pXUWdVM1J5YVc1blhHNGdLaUJBWlhoaGJYQnNaVnh1SUNvZ0x5OWtaV052WkdVZ2MzUnlhVzVuWEc0Z0tpQmpZeTVEYjJSbFl5NUNZWE5sTmpRdVpHVmpiMlJsS0Z3aVZUSTVkRnBUUWxSa1NFcHdZbTFqUFZ3aUtUc2dMeThnUFQ0Z1hDSlRiMjFsSUZOMGNtbHVaMXdpWEc0Z0tpOWNia0poYzJVMk5DNWtaV052WkdVZ1BTQm1kVzVqZEdsdmJpQktZV052WWw5ZlEyOWtaV05mWDBKaGMyVTJORjlmWkdWamIyUmxLR2x1Y0hWMEtTQjdYRzRnSUNBZ2RtRnlJRzkxZEhCMWRDQTlJRnRkTEZ4dUlDQWdJQ0FnSUNCamFISXhMQ0JqYUhJeUxDQmphSEl6TEZ4dUlDQWdJQ0FnSUNCbGJtTXhMQ0JsYm1NeUxDQmxibU16TENCbGJtTTBMRnh1SUNBZ0lDQWdJQ0JwSUQwZ01EdGNibHh1SUNBZ0lHbHVjSFYwSUQwZ2FXNXdkWFF1Y21Wd2JHRmpaU2d2VzE1QkxWcGhMWG93TFRsY1hDdGNYQzljWEQxZEwyY3NJRndpWENJcE8xeHVYRzRnSUNBZ2QyaHBiR1VnS0drZ1BDQnBibkIxZEM1c1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUNBZ1pXNWpNU0E5SUhOMGNsWmhiSFZsVzJsdWNIVjBMbU5vWVhKRGIyUmxRWFFvYVNzcktWMDdYRzRnSUNBZ0lDQWdJR1Z1WXpJZ1BTQnpkSEpXWVd4MVpWdHBibkIxZEM1amFHRnlRMjlrWlVGMEtHa3JLeWxkTzF4dUlDQWdJQ0FnSUNCbGJtTXpJRDBnYzNSeVZtRnNkV1ZiYVc1d2RYUXVZMmhoY2tOdlpHVkJkQ2hwS3lzcFhUdGNiaUFnSUNBZ0lDQWdaVzVqTkNBOUlITjBjbFpoYkhWbFcybHVjSFYwTG1Ob1lYSkRiMlJsUVhRb2FTc3JLVjA3WEc1Y2JpQWdJQ0FnSUNBZ1kyaHlNU0E5SUNobGJtTXhJRHc4SURJcElId2dLR1Z1WXpJZ1BqNGdOQ2s3WEc0Z0lDQWdJQ0FnSUdOb2NqSWdQU0FvS0dWdVl6SWdKaUF4TlNrZ1BEd2dOQ2tnZkNBb1pXNWpNeUErUGlBeUtUdGNiaUFnSUNBZ0lDQWdZMmh5TXlBOUlDZ29aVzVqTXlBbUlETXBJRHc4SURZcElId2daVzVqTkR0Y2JseHVJQ0FnSUNBZ0lDQnZkWFJ3ZFhRdWNIVnphQ2hUZEhKcGJtY3Vabkp2YlVOb1lYSkRiMlJsS0dOb2NqRXBLVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9aVzVqTXlBaFBUMGdOalFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzkxZEhCMWRDNXdkWE5vS0ZOMGNtbHVaeTVtY205dFEyaGhja052WkdVb1kyaHlNaWtwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHbG1JQ2hsYm1NMElDRTlQU0EyTkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNWMGNIVjBMbkIxYzJnb1UzUnlhVzVuTG1aeWIyMURhR0Z5UTI5a1pTaGphSEl6S1NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCdmRYUndkWFFnUFNCdmRYUndkWFF1YW05cGJpZ25KeWs3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdiM1YwY0hWME8xeHVmVHRjYmx4dUx5b3FYRzRnS2lBOGNENWNiaUFxSUNBZ0lFTnZiblpsY25SeklHRnVJR2x1Y0hWMElITjBjbWx1WnlCbGJtTnZaR1ZrSUdsdUlHSmhjMlUyTkNCMGJ5QmhiaUJoY25KaGVTQnZaaUJwYm5SbFoyVnljeUIzYUc5elpUeGljaTgrWEc0Z0tpQWdJQ0IyWVd4MVpYTWdjbVZ3Y21WelpXNTBJSFJvWlNCa1pXTnZaR1ZrSUhOMGNtbHVaeWR6SUdOb1lYSmhZM1JsY25NbklHSjVkR1Z6TGx4dUlDb2dQQzl3UGx4dUlDb2dRR1oxYm1OMGFXOXVYRzRnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnYVc1d2RYUWdWR2hsSUZOMGNtbHVaeUIwYnlCamIyNTJaWEowSUhSdklHRnVJR0Z5Y21GNUlHOW1JRWx1ZEdWblpYSnpYRzRnS2lCQWNHRnlZVzBnZTA1MWJXSmxjbjBnWW5sMFpYTmNiaUFxSUVCeVpYUjFjbTRnZTBGeWNtRjVmVnh1SUNvZ1FHVjRZVzF3YkdWY2JpQXFJQzh2WkdWamIyUmxJSE4wY21sdVp5QjBieUJoY25KaGVWeHVJQ29nZG1GeUlHUmxZMjlrWlVGeWNpQTlJR05qTGtOdlpHVmpMa0poYzJVMk5DNWtaV052WkdWQmMwRnljbUY1S0Z3aVZUSTVkRnBUUWxSa1NFcHdZbTFqUFZ3aUtUdGNiaUFxTDF4dVFtRnpaVFkwTG1SbFkyOWtaVUZ6UVhKeVlYa2dQU0JtZFc1amRHbHZiaUJLWVdOdllsOWZRMjlrWldOZlgwSmhjMlUyTkY5ZlgyUmxZMjlrWlVGelFYSnlZWGtvYVc1d2RYUXNJR0o1ZEdWektTQjdYRzRnSUNBZ2RtRnlJR1JsWXlBOUlIUm9hWE11WkdWamIyUmxLR2x1Y0hWMEtTeGNiaUFnSUNBZ0lDQWdZWElnUFNCYlhTd2dhU3dnYWl3Z2JHVnVPMXh1SUNBZ0lHWnZjaUFvYVNBOUlEQXNJR3hsYmlBOUlHUmxZeTVzWlc1bmRHZ2dMeUJpZVhSbGN6c2dhU0E4SUd4bGJqc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lHRnlXMmxkSUQwZ01EdGNiaUFnSUNBZ0lDQWdabTl5SUNocUlEMGdZbmwwWlhNZ0xTQXhPeUJxSUQ0OUlEQTdJQzB0YWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWVhKYmFWMGdLejBnWkdWakxtTm9ZWEpEYjJSbFFYUW9LR2tnS2lCaWVYUmxjeWtnS3lCcUtTQThQQ0FvYWlBcUlEZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlHRnlPMXh1ZlR0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQkNZWE5sTmpRN1hHNGlYWDA9Il19