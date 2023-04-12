(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/enums.js';
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
        Object.defineProperty(exports, '__esModule', { value: true });
        var _mappings = require('./build/mappings');
        exports.default = {
            PROJ_PERSPECTIVE: 0,
            PROJ_ORTHO: 1,
            LIGHT_DIRECTIONAL: 0,
            LIGHT_POINT: 1,
            LIGHT_SPOT: 2,
            LIGHT_AMBIENT: 3,
            SHADOW_NONE: 0,
            SHADOW_HARD: 1,
            SHADOW_SOFT: 2,
            PARAM_INT: _mappings.typeMap.int,
            PARAM_INT2: _mappings.typeMap.ivec2,
            PARAM_INT3: _mappings.typeMap.ivec3,
            PARAM_INT4: _mappings.typeMap.ivec4,
            PARAM_FLOAT: _mappings.typeMap.float,
            PARAM_FLOAT2: _mappings.typeMap.vec2,
            PARAM_FLOAT3: _mappings.typeMap.vec3,
            PARAM_FLOAT4: _mappings.typeMap.vec4,
            PARAM_MAT2: _mappings.typeMap.mat2,
            PARAM_MAT3: _mappings.typeMap.mat3,
            PARAM_MAT4: _mappings.typeMap.mat4,
            PARAM_TEXTURE_2D: _mappings.typeMap.sampler2D,
            PARAM_TEXTURE_CUBE: _mappings.typeMap.samplerCube,
            CLEAR_COLOR: 1,
            CLEAR_DEPTH: 2,
            CLEAR_STENCIL: 4,
            CLEAR_SKYBOX: 8,
            BUFFER_VIEW_INT8: 0,
            BUFFER_VIEW_UINT8: 1,
            BUFFER_VIEW_INT16: 2,
            BUFFER_VIEW_UINT16: 3,
            BUFFER_VIEW_INT32: 4,
            BUFFER_VIEW_UINT32: 5,
            BUFFER_VIEW_FLOAT32: 6
        };
        module.exports = exports['default'];
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudW1zLmpzIiwiL1VzZXJzL1NoYXJlZC9iaW5nb19mcmVuenkvZW5naW5lL2NvY29zMmQvcmVuZGVyZXIvZW51bXMuanMiXSwibmFtZXMiOlsiUFJPSl9QRVJTUEVDVElWRSIsIlBST0pfT1JUSE8iLCJMSUdIVF9ESVJFQ1RJT05BTCIsIkxJR0hUX1BPSU5UIiwiTElHSFRfU1BPVCIsIkxJR0hUX0FNQklFTlQiLCJTSEFET1dfTk9ORSIsIlNIQURPV19IQVJEIiwiU0hBRE9XX1NPRlQiLCJQQVJBTV9JTlQiLCJ0eXBlTWFwIiwiaW50IiwiUEFSQU1fSU5UMiIsIml2ZWMyIiwiUEFSQU1fSU5UMyIsIml2ZWMzIiwiUEFSQU1fSU5UNCIsIml2ZWM0IiwiUEFSQU1fRkxPQVQiLCJmbG9hdCIsIlBBUkFNX0ZMT0FUMiIsInZlYzIiLCJQQVJBTV9GTE9BVDMiLCJ2ZWMzIiwiUEFSQU1fRkxPQVQ0IiwidmVjNCIsIlBBUkFNX01BVDIiLCJtYXQyIiwiUEFSQU1fTUFUMyIsIm1hdDMiLCJQQVJBTV9NQVQ0IiwibWF0NCIsIlBBUkFNX1RFWFRVUkVfMkQiLCJzYW1wbGVyMkQiLCJQQVJBTV9URVhUVVJFX0NVQkUiLCJzYW1wbGVyQ3ViZSIsIkNMRUFSX0NPTE9SIiwiQ0xFQVJfREVQVEgiLCJDTEVBUl9TVEVOQ0lMIiwiQ0xFQVJfU0tZQk9YIiwiQlVGRkVSX1ZJRVdfSU5UOCIsIkJVRkZFUl9WSUVXX1VJTlQ4IiwiQlVGRkVSX1ZJRVdfSU5UMTYiLCJCVUZGRVJfVklFV19VSU5UMTYiLCJCVUZGRVJfVklFV19JTlQzMiIsIkJVRkZFUl9WSUVXX1VJTlQzMiIsIkJVRkZFUl9WSUVXX0ZMT0FUMzIiXSwibWFwcGluZ3MiOiI7Ozs7O1FBRUEsT0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBOztRQUVlLE9BQUEsaUJBQUEsQ0FBQSxPQUFBLENBQUEsT0FBQSxFQUFBLFVBQUEsQ0FBQTs7SUFFSyxTQUZMLFFBRUssQ0FGTCxPQUVLLEVBRkwsT0FFSyxFQUZMLE1BRUssRUFGTDtBQUFBLFFBQUEsSUFBQSxDQUFBLE9BQUEsRUFBQTtBQUFBLFlBQUEsaUJBQUEsQ0FBQSxjQUFBLENBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQTtBQUFBLFNBQUE7QUFBQTs7UUFGZixJQUFBLFNBQUEsR0FBQSxPQUFBLENBQUEsa0JBQUEsQ0FBQTswQkFFZTtBQUFBLFlBRWJBLGdCQUFBQSxFQUFrQixDQUZMO0FBQUEsWUFHYkMsVUFBQUEsRUFBWSxDQUhDO0FBQUEsWUFNYkMsaUJBQUFBLEVBQW1CLENBTk47QUFBQSxZQU9iQyxXQUFBQSxFQUFhLENBUEE7QUFBQSxZQVFiQyxVQUFBQSxFQUFZLENBUkM7QUFBQSxZQVNiQyxhQUFBQSxFQUFlLENBVEY7QUFBQSxZQVliQyxXQUFBQSxFQUFhLENBWkE7QUFBQSxZQWFiQyxXQUFBQSxFQUFhLENBYkE7QUFBQSxZQWNiQyxXQUFBQSxFQUFhLENBZEE7QUFBQSxZQWlCYkMsU0FBQUEsRUFBdUJDLFNBQUFBLENBQUFBLE9BQUFBLENBQVFDLEdBakJsQjtBQUFBLFlBa0JiQyxVQUFBQSxFQUF1QkYsU0FBQUEsQ0FBQUEsT0FBQUEsQ0FBUUcsS0FsQmxCO0FBQUEsWUFtQmJDLFVBQUFBLEVBQXVCSixTQUFBQSxDQUFBQSxPQUFBQSxDQUFRSyxLQW5CbEI7QUFBQSxZQW9CYkMsVUFBQUEsRUFBdUJOLFNBQUFBLENBQUFBLE9BQUFBLENBQVFPLEtBcEJsQjtBQUFBLFlBcUJiQyxXQUFBQSxFQUF1QlIsU0FBQUEsQ0FBQUEsT0FBQUEsQ0FBUVMsS0FyQmxCO0FBQUEsWUFzQmJDLFlBQUFBLEVBQXVCVixTQUFBQSxDQUFBQSxPQUFBQSxDQUFRVyxJQXRCbEI7QUFBQSxZQXVCYkMsWUFBQUEsRUFBdUJaLFNBQUFBLENBQUFBLE9BQUFBLENBQVFhLElBdkJsQjtBQUFBLFlBd0JiQyxZQUFBQSxFQUF1QmQsU0FBQUEsQ0FBQUEsT0FBQUEsQ0FBUWUsSUF4QmxCO0FBQUEsWUF5QmJDLFVBQUFBLEVBQXVCaEIsU0FBQUEsQ0FBQUEsT0FBQUEsQ0FBUWlCLElBekJsQjtBQUFBLFlBMEJiQyxVQUFBQSxFQUF1QmxCLFNBQUFBLENBQUFBLE9BQUFBLENBQVFtQixJQTFCbEI7QUFBQSxZQTJCYkMsVUFBQUEsRUFBdUJwQixTQUFBQSxDQUFBQSxPQUFBQSxDQUFRcUIsSUEzQmxCO0FBQUEsWUE0QmJDLGdCQUFBQSxFQUF1QnRCLFNBQUFBLENBQUFBLE9BQUFBLENBQVF1QixTQTVCbEI7QUFBQSxZQTZCYkMsa0JBQUFBLEVBQXVCeEIsU0FBQUEsQ0FBQUEsT0FBQUEsQ0FBUXlCLFdBN0JsQjtBQUFBLFlBZ0NiQyxXQUFBQSxFQUFhLENBaENBO0FBQUEsWUFpQ2JDLFdBQUFBLEVBQWEsQ0FqQ0E7QUFBQSxZQWtDYkMsYUFBQUEsRUFBZSxDQWxDRjtBQUFBLFlBbUNiQyxZQUFBQSxFQUFjLENBbkNEO0FBQUEsWUFzQ2JDLGdCQUFBQSxFQUFrQixDQXRDTDtBQUFBLFlBdUNiQyxpQkFBQUEsRUFBbUIsQ0F2Q047QUFBQSxZQXdDYkMsaUJBQUFBLEVBQW1CLENBeENOO0FBQUEsWUF5Q2JDLGtCQUFBQSxFQUFvQixDQXpDUDtBQUFBLFlBMENiQyxpQkFBQUEsRUFBbUIsQ0ExQ047QUFBQSxZQTJDYkMsa0JBQUFBLEVBQW9CLENBM0NQO0FBQUEsWUE0Q2JDLG1CQUFBQSxFQUFxQixDQTVDUjtBQUFBOzRDQUFBO0FBQUE7SUFLYixJQUFBLE9BQUEsRUFBQTtBQUFBLFFBTGEsUUFBQSxDQUFBLFFBQUEsQ0FBQSxPQUFBLEVBQUEsU0FBQSxFQUFBLFFBQUEsRUFLYjtBQUFBLEtBQUEsTUFMYTtBQUFBLFFBQUEsaUJBQUEsQ0FBQSxrQkFBQSxDQUFBLFVBQUEsRUFBQSxZQUFBO0FBQUEsNERBQUE7QUFBQSxTQUFBLEVBQUE7QUFBQSIsImZpbGUiOiJlbnVtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG5pbXBvcnQgeyB0eXBlTWFwIH0gZnJvbSAnLi9idWlsZC9tYXBwaW5ncydcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBwcm9qZWN0aW9uXG4gIFBST0pfUEVSU1BFQ1RJVkU6IDAsXG4gIFBST0pfT1JUSE86IDEsXG5cbiAgLy8gbGlnaHRzXG4gIExJR0hUX0RJUkVDVElPTkFMOiAwLFxuICBMSUdIVF9QT0lOVDogMSxcbiAgTElHSFRfU1BPVDogMixcbiAgTElHSFRfQU1CSUVOVDogMyxcblxuICAvLyBzaGFkb3dzXG4gIFNIQURPV19OT05FOiAwLFxuICBTSEFET1dfSEFSRDogMSxcbiAgU0hBRE9XX1NPRlQ6IDIsXG5cbiAgLy8gcGFyYW1ldGVyIHR5cGVcbiAgUEFSQU1fSU5UOiAgICAgICAgICAgICB0eXBlTWFwLmludCxcbiAgUEFSQU1fSU5UMjogICAgICAgICAgICB0eXBlTWFwLml2ZWMyLFxuICBQQVJBTV9JTlQzOiAgICAgICAgICAgIHR5cGVNYXAuaXZlYzMsXG4gIFBBUkFNX0lOVDQ6ICAgICAgICAgICAgdHlwZU1hcC5pdmVjNCxcbiAgUEFSQU1fRkxPQVQ6ICAgICAgICAgICB0eXBlTWFwLmZsb2F0LFxuICBQQVJBTV9GTE9BVDI6ICAgICAgICAgIHR5cGVNYXAudmVjMixcbiAgUEFSQU1fRkxPQVQzOiAgICAgICAgICB0eXBlTWFwLnZlYzMsXG4gIFBBUkFNX0ZMT0FUNDogICAgICAgICAgdHlwZU1hcC52ZWM0LFxuICBQQVJBTV9NQVQyOiAgICAgICAgICAgIHR5cGVNYXAubWF0MixcbiAgUEFSQU1fTUFUMzogICAgICAgICAgICB0eXBlTWFwLm1hdDMsXG4gIFBBUkFNX01BVDQ6ICAgICAgICAgICAgdHlwZU1hcC5tYXQ0LFxuICBQQVJBTV9URVhUVVJFXzJEOiAgICAgIHR5cGVNYXAuc2FtcGxlcjJELFxuICBQQVJBTV9URVhUVVJFX0NVQkU6ICAgIHR5cGVNYXAuc2FtcGxlckN1YmUsXG5cbiAgLy8gY2xlYXIgZmxhZ3NcbiAgQ0xFQVJfQ09MT1I6IDEsXG4gIENMRUFSX0RFUFRIOiAyLFxuICBDTEVBUl9TVEVOQ0lMOiA0LFxuICBDTEVBUl9TS1lCT1g6IDgsXG5cbiAgLy9cbiAgQlVGRkVSX1ZJRVdfSU5UODogMCxcbiAgQlVGRkVSX1ZJRVdfVUlOVDg6IDEsXG4gIEJVRkZFUl9WSUVXX0lOVDE2OiAyLFxuICBCVUZGRVJfVklFV19VSU5UMTY6IDMsXG4gIEJVRkZFUl9WSUVXX0lOVDMyOiA0LFxuICBCVUZGRVJfVklFV19VSU5UMzI6IDUsXG4gIEJVRkZFUl9WSUVXX0ZMT0FUMzI6IDYsXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX21hcHBpbmdzID0gcmVxdWlyZSgnLi9idWlsZC9tYXBwaW5ncycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIC8vIHByb2plY3Rpb25cbiAgUFJPSl9QRVJTUEVDVElWRTogMCxcbiAgUFJPSl9PUlRITzogMSxcblxuICAvLyBsaWdodHNcbiAgTElHSFRfRElSRUNUSU9OQUw6IDAsXG4gIExJR0hUX1BPSU5UOiAxLFxuICBMSUdIVF9TUE9UOiAyLFxuICBMSUdIVF9BTUJJRU5UOiAzLFxuXG4gIC8vIHNoYWRvd3NcbiAgU0hBRE9XX05PTkU6IDAsXG4gIFNIQURPV19IQVJEOiAxLFxuICBTSEFET1dfU09GVDogMixcblxuICAvLyBwYXJhbWV0ZXIgdHlwZVxuICBQQVJBTV9JTlQ6IF9tYXBwaW5ncy50eXBlTWFwLmludCxcbiAgUEFSQU1fSU5UMjogX21hcHBpbmdzLnR5cGVNYXAuaXZlYzIsXG4gIFBBUkFNX0lOVDM6IF9tYXBwaW5ncy50eXBlTWFwLml2ZWMzLFxuICBQQVJBTV9JTlQ0OiBfbWFwcGluZ3MudHlwZU1hcC5pdmVjNCxcbiAgUEFSQU1fRkxPQVQ6IF9tYXBwaW5ncy50eXBlTWFwLmZsb2F0LFxuICBQQVJBTV9GTE9BVDI6IF9tYXBwaW5ncy50eXBlTWFwLnZlYzIsXG4gIFBBUkFNX0ZMT0FUMzogX21hcHBpbmdzLnR5cGVNYXAudmVjMyxcbiAgUEFSQU1fRkxPQVQ0OiBfbWFwcGluZ3MudHlwZU1hcC52ZWM0LFxuICBQQVJBTV9NQVQyOiBfbWFwcGluZ3MudHlwZU1hcC5tYXQyLFxuICBQQVJBTV9NQVQzOiBfbWFwcGluZ3MudHlwZU1hcC5tYXQzLFxuICBQQVJBTV9NQVQ0OiBfbWFwcGluZ3MudHlwZU1hcC5tYXQ0LFxuICBQQVJBTV9URVhUVVJFXzJEOiBfbWFwcGluZ3MudHlwZU1hcC5zYW1wbGVyMkQsXG4gIFBBUkFNX1RFWFRVUkVfQ1VCRTogX21hcHBpbmdzLnR5cGVNYXAuc2FtcGxlckN1YmUsXG5cbiAgLy8gY2xlYXIgZmxhZ3NcbiAgQ0xFQVJfQ09MT1I6IDEsXG4gIENMRUFSX0RFUFRIOiAyLFxuICBDTEVBUl9TVEVOQ0lMOiA0LFxuICBDTEVBUl9TS1lCT1g6IDgsXG5cbiAgLy9cbiAgQlVGRkVSX1ZJRVdfSU5UODogMCxcbiAgQlVGRkVSX1ZJRVdfVUlOVDg6IDEsXG4gIEJVRkZFUl9WSUVXX0lOVDE2OiAyLFxuICBCVUZGRVJfVklFV19VSU5UMTY6IDMsXG4gIEJVRkZFUl9WSUVXX0lOVDMyOiA0LFxuICBCVUZGRVJfVklFV19VSU5UMzI6IDUsXG4gIEJVRkZFUl9WSUVXX0ZMT0FUMzI6IDZcbn07IC8vIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltVnVkVzF6TG1weklsMHNJbTVoYldWeklqcGJJbEJTVDBwZlVFVlNVMUJGUTFSSlZrVWlMQ0pRVWs5S1gwOVNWRWhQSWl3aVRFbEhTRlJmUkVsU1JVTlVTVTlPUVV3aUxDSk1TVWRJVkY5UVQwbE9WQ0lzSWt4SlIwaFVYMU5RVDFRaUxDSk1TVWRJVkY5QlRVSkpSVTVVSWl3aVUwaEJSRTlYWDA1UFRrVWlMQ0pUU0VGRVQxZGZTRUZTUkNJc0lsTklRVVJQVjE5VFQwWlVJaXdpVUVGU1FVMWZTVTVVSWl3aWRIbHdaVTFoY0NJc0ltbHVkQ0lzSWxCQlVrRk5YMGxPVkRJaUxDSnBkbVZqTWlJc0lsQkJVa0ZOWDBsT1ZETWlMQ0pwZG1Wak15SXNJbEJCVWtGTlgwbE9WRFFpTENKcGRtVmpOQ0lzSWxCQlVrRk5YMFpNVDBGVUlpd2labXh2WVhRaUxDSlFRVkpCVFY5R1RFOUJWRElpTENKMlpXTXlJaXdpVUVGU1FVMWZSa3hQUVZReklpd2lkbVZqTXlJc0lsQkJVa0ZOWDBaTVQwRlVOQ0lzSW5abFl6UWlMQ0pRUVZKQlRWOU5RVlF5SWl3aWJXRjBNaUlzSWxCQlVrRk5YMDFCVkRNaUxDSnRZWFF6SWl3aVVFRlNRVTFmVFVGVU5DSXNJbTFoZERRaUxDSlFRVkpCVFY5VVJWaFVWVkpGWHpKRUlpd2ljMkZ0Y0d4bGNqSkVJaXdpVUVGU1FVMWZWRVZZVkZWU1JWOURWVUpGSWl3aWMyRnRjR3hsY2tOMVltVWlMQ0pEVEVWQlVsOURUMHhQVWlJc0lrTk1SVUZTWDBSRlVGUklJaXdpUTB4RlFWSmZVMVJGVGtOSlRDSXNJa05NUlVGU1gxTkxXVUpQV0NJc0lrSlZSa1pGVWw5V1NVVlhYMGxPVkRnaUxDSkNWVVpHUlZKZlZrbEZWMTlWU1U1VU9DSXNJa0pWUmtaRlVsOVdTVVZYWDBsT1ZERTJJaXdpUWxWR1JrVlNYMVpKUlZkZlZVbE9WREUySWl3aVFsVkdSa1ZTWDFaSlJWZGZTVTVVTXpJaUxDSkNWVVpHUlZKZlZrbEZWMTlWU1U1VU16SWlMQ0pDVlVaR1JWSmZWa2xGVjE5R1RFOUJWRE15SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkZRVHM3YTBKQlJXVTdRVUZEWWp0QlFVTkJRU3h2UWtGQmEwSXNRMEZHVER0QlFVZGlReXhqUVVGWkxFTkJTRU03TzBGQlMySTdRVUZEUVVNc2NVSkJRVzFDTEVOQlRrNDdRVUZQWWtNc1pVRkJZU3hEUVZCQk8wRkJVV0pETEdOQlFWa3NRMEZTUXp0QlFWTmlReXhwUWtGQlpTeERRVlJHT3p0QlFWZGlPMEZCUTBGRExHVkJRV0VzUTBGYVFUdEJRV0ZpUXl4bFFVRmhMRU5CWWtFN1FVRmpZa01zWlVGQllTeERRV1JCT3p0QlFXZENZanRCUVVOQlF5eGhRVUYxUWtNc2EwSkJRVkZETEVkQmFrSnNRanRCUVd0Q1lrTXNZMEZCZFVKR0xHdENRVUZSUnl4TFFXeENiRUk3UVVGdFFtSkRMR05CUVhWQ1NpeHJRa0ZCVVVzc1MwRnVRbXhDTzBGQmIwSmlReXhqUVVGMVFrNHNhMEpCUVZGUExFdEJjRUpzUWp0QlFYRkNZa01zWlVGQmRVSlNMR3RDUVVGUlV5eExRWEpDYkVJN1FVRnpRbUpETEdkQ1FVRjFRbFlzYTBKQlFWRlhMRWxCZEVKc1FqdEJRWFZDWWtNc1owSkJRWFZDV2l4clFrRkJVV0VzU1VGMlFteENPMEZCZDBKaVF5eG5Ra0ZCZFVKa0xHdENRVUZSWlN4SlFYaENiRUk3UVVGNVFtSkRMR05CUVhWQ2FFSXNhMEpCUVZGcFFpeEpRWHBDYkVJN1FVRXdRbUpETEdOQlFYVkNiRUlzYTBKQlFWRnRRaXhKUVRGQ2JFSTdRVUV5UW1KRExHTkJRWFZDY0VJc2EwSkJRVkZ4UWl4SlFUTkNiRUk3UVVFMFFtSkRMRzlDUVVGMVFuUkNMR3RDUVVGUmRVSXNVMEUxUW14Q08wRkJOa0ppUXl4elFrRkJkVUo0UWl4clFrRkJVWGxDTEZkQk4wSnNRanM3UVVFclFtSTdRVUZEUVVNc1pVRkJZU3hEUVdoRFFUdEJRV2xEWWtNc1pVRkJZU3hEUVdwRFFUdEJRV3REWWtNc2FVSkJRV1VzUTBGc1EwWTdRVUZ0UTJKRExHZENRVUZqTEVOQmJrTkVPenRCUVhGRFlqdEJRVU5CUXl4dlFrRkJhMElzUTBGMFEwdzdRVUYxUTJKRExIRkNRVUZ0UWl4RFFYWkRUanRCUVhkRFlrTXNjVUpCUVcxQ0xFTkJlRU5PTzBGQmVVTmlReXh6UWtGQmIwSXNRMEY2UTFBN1FVRXdRMkpETEhGQ1FVRnRRaXhEUVRGRFRqdEJRVEpEWWtNc2MwSkJRVzlDTEVOQk0wTlFPMEZCTkVOaVF5eDFRa0ZCY1VJN1FVRTFRMUlzUXl4RlFVcG1JaXdpWm1sc1pTSTZJbVZ1ZFcxekxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1EyOXdlWEpwWjJoMElDaGpLU0F5TURFM0xUSXdNVGdnV0dsaGJXVnVJRmxoYW1rZ1UyOW1kSGRoY21VZ1EyOHVMQ0JNZEdRdVhHNWNibWx0Y0c5eWRDQjdJSFI1Y0dWTllYQWdmU0JtY205dElDY3VMMkoxYVd4a0wyMWhjSEJwYm1kekoxeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUM4dklIQnliMnBsWTNScGIyNWNiaUFnVUZKUFNsOVFSVkpUVUVWRFZFbFdSVG9nTUN4Y2JpQWdVRkpQU2w5UFVsUklUem9nTVN4Y2JseHVJQ0F2THlCc2FXZG9kSE5jYmlBZ1RFbEhTRlJmUkVsU1JVTlVTVTlPUVV3NklEQXNYRzRnSUV4SlIwaFVYMUJQU1U1VU9pQXhMRnh1SUNCTVNVZElWRjlUVUU5VU9pQXlMRnh1SUNCTVNVZElWRjlCVFVKSlJVNVVPaUF6TEZ4dVhHNGdJQzh2SUhOb1lXUnZkM05jYmlBZ1UwaEJSRTlYWDA1UFRrVTZJREFzWEc0Z0lGTklRVVJQVjE5SVFWSkVPaUF4TEZ4dUlDQlRTRUZFVDFkZlUwOUdWRG9nTWl4Y2JseHVJQ0F2THlCd1lYSmhiV1YwWlhJZ2RIbHdaVnh1SUNCUVFWSkJUVjlKVGxRNklDQWdJQ0FnSUNBZ0lDQWdJSFI1Y0dWTllYQXVhVzUwTEZ4dUlDQlFRVkpCVFY5SlRsUXlPaUFnSUNBZ0lDQWdJQ0FnSUhSNWNHVk5ZWEF1YVhabFl6SXNYRzRnSUZCQlVrRk5YMGxPVkRNNklDQWdJQ0FnSUNBZ0lDQWdkSGx3WlUxaGNDNXBkbVZqTXl4Y2JpQWdVRUZTUVUxZlNVNVVORG9nSUNBZ0lDQWdJQ0FnSUNCMGVYQmxUV0Z3TG1sMlpXTTBMRnh1SUNCUVFWSkJUVjlHVEU5QlZEb2dJQ0FnSUNBZ0lDQWdJSFI1Y0dWTllYQXVabXh2WVhRc1hHNGdJRkJCVWtGTlgwWk1UMEZVTWpvZ0lDQWdJQ0FnSUNBZ2RIbHdaVTFoY0M1MlpXTXlMRnh1SUNCUVFWSkJUVjlHVEU5QlZETTZJQ0FnSUNBZ0lDQWdJSFI1Y0dWTllYQXVkbVZqTXl4Y2JpQWdVRUZTUVUxZlJreFBRVlEwT2lBZ0lDQWdJQ0FnSUNCMGVYQmxUV0Z3TG5abFl6UXNYRzRnSUZCQlVrRk5YMDFCVkRJNklDQWdJQ0FnSUNBZ0lDQWdkSGx3WlUxaGNDNXRZWFF5TEZ4dUlDQlFRVkpCVFY5TlFWUXpPaUFnSUNBZ0lDQWdJQ0FnSUhSNWNHVk5ZWEF1YldGME15eGNiaUFnVUVGU1FVMWZUVUZVTkRvZ0lDQWdJQ0FnSUNBZ0lDQjBlWEJsVFdGd0xtMWhkRFFzWEc0Z0lGQkJVa0ZOWDFSRldGUlZVa1ZmTWtRNklDQWdJQ0FnZEhsd1pVMWhjQzV6WVcxd2JHVnlNa1FzWEc0Z0lGQkJVa0ZOWDFSRldGUlZVa1ZmUTFWQ1JUb2dJQ0FnZEhsd1pVMWhjQzV6WVcxd2JHVnlRM1ZpWlN4Y2JseHVJQ0F2THlCamJHVmhjaUJtYkdGbmMxeHVJQ0JEVEVWQlVsOURUMHhQVWpvZ01TeGNiaUFnUTB4RlFWSmZSRVZRVkVnNklESXNYRzRnSUVOTVJVRlNYMU5VUlU1RFNVdzZJRFFzWEc0Z0lFTk1SVUZTWDFOTFdVSlBXRG9nT0N4Y2JseHVJQ0F2TDF4dUlDQkNWVVpHUlZKZlZrbEZWMTlKVGxRNE9pQXdMRnh1SUNCQ1ZVWkdSVkpmVmtsRlYxOVZTVTVVT0RvZ01TeGNiaUFnUWxWR1JrVlNYMVpKUlZkZlNVNVVNVFk2SURJc1hHNGdJRUpWUmtaRlVsOVdTVVZYWDFWSlRsUXhOam9nTXl4Y2JpQWdRbFZHUmtWU1gxWkpSVmRmU1U1VU16STZJRFFzWEc0Z0lFSlZSa1pGVWw5V1NVVlhYMVZKVGxRek1qb2dOU3hjYmlBZ1FsVkdSa1ZTWDFaSlJWZGZSa3hQUVZRek1qb2dOaXhjYm4wN1hHNGlYWDA9Il19