(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/package.js';
    var __require = nodeEnv ? function (request) {
        return require(request);
    } : function (request) {
        return __quick_compile__.require(request, __filename);
    };
    function __define(exports, require, module) {
        if (!nodeEnv) {
            __quick_compile__.registerModule(__filename, module);
        }
                module.exports = {
            'name': 'cocos-creator-js',
            'version': '1.7.0',
            'description': 'Cocos2d-html5 is a cross-platform 2D game engine written in Javascript, based on Cocos2d-X and licensed under MIT. It incorporates the same high level api as \u201CCocos2d JS-binding engine\u201D and compatible with Cocos2d-X. It currently supports canvas and WebGL renderering.',
            'homepage': 'http://www.cocos2d-x.org',
            'authors': ['AUTHORS.txt'],
            'license': 'MIT',
            'scripts': {
                'test': 'gulp test-in-ci',
                'build-chunks': 'node ./cocos2d/renderer/build/build-chunks',
                'build-mapping': 'node ./cocos2d/renderer/build/build-mapping'
            },
            'devDependencies': {
                'aliasify': '^2.1.0',
                'async': '1.5.2',
                'babel-plugin-add-module-exports': '^0.2.1',
                'babel-plugin-parser-opts': '1.0.1',
                'babel-plugin-transform-class-properties': '6.22.0',
                'babel-plugin-transform-decorators-legacy': '^1.3.4',
                'babel-plugin-transform-es2015-block-scoping': '6.22.0',
                'babel-plugin-transform-es2015-shorthand-properties': '6.22.0',
                'babel-plugin-transform-es2015-template-literals': '6.22.0',
                'babel-preset-env': '^1.2.2',
                'babelify': '7.3.0',
                'browserify': '13.0.0',
                'chalk': '1.1.0',
                'del': '3.0.0',
                'event-stream': '3.3.2',
                'fire-fs': '0.2.1',
                'glsl-tokenizer': '2.1.5',
                'gulp': '^4.0.2',
                'gulp-babel': '6.1.2',
                'gulp-cached': '1.1.0',
                'gulp-concat': '2.6.0',
                'gulp-fb': '0.5.1',
                'gulp-header': '1.2.2',
                'gulp-jshint': '1.11.2',
                'gulp-mirror': '0.4.0',
                'gulp-optimize-js': '^1.1.0',
                'gulp-plumber': '0.6.6',
                'gulp-rename': '1.2.2',
                'gulp-shell': '0.4.1',
                'gulp-size': '2.1.0',
                'gulp-sourcemaps': '2.6.5',
                'gulp-uglify': '^3.0.0',
                'gulp-util': '3.0.6',
                'js-sha1': '^0.6.0',
                'jshint-stylish': '2.1.0',
                'multipipe': '0.3.0',
                'persistify': '^1.1.1',
                'require-dir': '0.3.0',
                'rollup': '^0.66.6',
                'rollup-plugin-node-resolve': '3.4.0',
                'uglify-es': '3.3.7',
                'vinyl': '1.1.0',
                'vinyl-buffer': '1.0.1',
                'vinyl-source-stream': '2.0.0',
                'watchify': '3.7.0'
            }
        };
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW95YW5nL1dvcmtTcGFjZS9qb3ljYXN0bGUvYmluZ28vY2xpZW50L2JpbmdvL2VuZ2luZS9wYWNrYWdlLmpzb24iXSwibmFtZXMiOlsibm9kZUVudiIsInJlcXVpcmUiLCJwcm9jZXNzIiwiX19tb2R1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX19maWxlbmFtZSIsIl9fcmVxdWlyZSIsInJlcXVlc3QiLCJfX3F1aWNrX2NvbXBpbGVfXyIsIl9fZGVmaW5lIiwicmVnaXN0ZXJNb2R1bGUiLCJyZWdpc3Rlck1vZHVsZUZ1bmMiXSwibWFwcGluZ3MiOiJBQUNnQixDQUFDLFlBQVc7QUFBQSxJQUNSLElBQUlBLE9BQUEsR0FBVSxPQUFPQyxPQUFQLEtBQW1CLFdBQW5CLElBQWtDLE9BQU9DLE9BQVAsS0FBbUIsV0FBbkUsQ0FEUTtBQUFBLElBRVIsSUFBSUMsUUFBQSxHQUFXSCxPQUFBLEdBQVVJLE1BQVYsR0FBbUIsRUFBQ0MsT0FBQSxFQUFRLEVBQVQsRUFBbEMsQ0FGUTtBQUFBLElBR1IsSUFBSUMsVUFBQSxHQUFhLHVCQUFqQixDQUhRO0FBQUEsSUFJUixJQUFJQyxTQUFBLEdBQVlQLE9BQUEsR0FBVSxVQUFVUSxPQUFWLEVBQW1CO0FBQUEsUUFDekMsT0FBT1AsT0FBQSxDQUFRTyxPQUFSLENBQVAsQ0FEeUM7QUFBQSxLQUE3QixHQUVaLFVBQVVBLE9BQVYsRUFBbUI7QUFBQSxRQUNuQixPQUFPQyxpQkFBQSxDQUFrQlIsT0FBbEIsQ0FBMEJPLE9BQTFCLEVBQW1DRixVQUFuQyxDQUFQLENBRG1CO0FBQUEsS0FGdkIsQ0FKUTtBQUFBLElBU1IsU0FBU0ksUUFBVCxDQUFtQkwsT0FBbkIsRUFBNEJKLE9BQTVCLEVBQXFDRyxNQUFyQyxFQUE2QztBQUFBLFFBQ3pDLElBQUksQ0FBQ0osT0FBTCxFQUFjO0FBQUEsWUFBQ1MsaUJBQUEsQ0FBa0JFLGNBQWxCLENBQWlDTCxVQUFqQyxFQUE2Q0YsTUFBN0MsRUFBRDtBQUFBLFNBRDJCO0FBQUEsUUFWakUsUUFBQUEsTUFBQSxDQUFPQyxPQUFQLEdBQWlCO0FBQUEsWUFDZixRQUFRLGtCQURPO0FBQUEsWUFFZixXQUFXLE9BRkk7QUFBQSxZQUdmLGVBQWUsd1JBSEE7QUFBQSxZQUlmLFlBQVksMEJBSkc7QUFBQSxZQUtmLFdBQVcsQ0FDVCxhQURTLENBTEk7QUFBQSxZQVFmLFdBQVcsS0FSSTtBQUFBLFlBU2YsV0FBVztBQUFBLGdCQUNULFFBQVEsaUJBREM7QUFBQSxnQkFFVCxnQkFBZ0IsNENBRlA7QUFBQSxnQkFHVCxpQkFBaUIsNkNBSFI7QUFBQSxhQVRJO0FBQUEsWUFjZixtQkFBbUI7QUFBQSxnQkFDakIsWUFBWSxRQURLO0FBQUEsZ0JBRWpCLFNBQVMsT0FGUTtBQUFBLGdCQUdqQixtQ0FBbUMsUUFIbEI7QUFBQSxnQkFJakIsNEJBQTRCLE9BSlg7QUFBQSxnQkFLakIsMkNBQTJDLFFBTDFCO0FBQUEsZ0JBTWpCLDRDQUE0QyxRQU4zQjtBQUFBLGdCQU9qQiwrQ0FBK0MsUUFQOUI7QUFBQSxnQkFRakIsc0RBQXNELFFBUnJDO0FBQUEsZ0JBU2pCLG1EQUFtRCxRQVRsQztBQUFBLGdCQVVqQixvQkFBb0IsUUFWSDtBQUFBLGdCQVdqQixZQUFZLE9BWEs7QUFBQSxnQkFZakIsY0FBYyxRQVpHO0FBQUEsZ0JBYWpCLFNBQVMsT0FiUTtBQUFBLGdCQWNqQixPQUFPLE9BZFU7QUFBQSxnQkFlakIsZ0JBQWdCLE9BZkM7QUFBQSxnQkFnQmpCLFdBQVcsT0FoQk07QUFBQSxnQkFpQmpCLGtCQUFrQixPQWpCRDtBQUFBLGdCQWtCakIsUUFBUSxRQWxCUztBQUFBLGdCQW1CakIsY0FBYyxPQW5CRztBQUFBLGdCQW9CakIsZUFBZSxPQXBCRTtBQUFBLGdCQXFCakIsZUFBZSxPQXJCRTtBQUFBLGdCQXNCakIsV0FBVyxPQXRCTTtBQUFBLGdCQXVCakIsZUFBZSxPQXZCRTtBQUFBLGdCQXdCakIsZUFBZSxRQXhCRTtBQUFBLGdCQXlCakIsZUFBZSxPQXpCRTtBQUFBLGdCQTBCakIsb0JBQW9CLFFBMUJIO0FBQUEsZ0JBMkJqQixnQkFBZ0IsT0EzQkM7QUFBQSxnQkE0QmpCLGVBQWUsT0E1QkU7QUFBQSxnQkE2QmpCLGNBQWMsT0E3Qkc7QUFBQSxnQkE4QmpCLGFBQWEsT0E5Qkk7QUFBQSxnQkErQmpCLG1CQUFtQixPQS9CRjtBQUFBLGdCQWdDakIsZUFBZSxRQWhDRTtBQUFBLGdCQWlDakIsYUFBYSxPQWpDSTtBQUFBLGdCQWtDakIsV0FBVyxRQWxDTTtBQUFBLGdCQW1DakIsa0JBQWtCLE9BbkNEO0FBQUEsZ0JBb0NqQixhQUFhLE9BcENJO0FBQUEsZ0JBcUNqQixjQUFjLFFBckNHO0FBQUEsZ0JBc0NqQixlQUFlLE9BdENFO0FBQUEsZ0JBdUNqQixVQUFVLFNBdkNPO0FBQUEsZ0JBd0NqQiw4QkFBOEIsT0F4Q2I7QUFBQSxnQkF5Q2pCLGFBQWEsT0F6Q0k7QUFBQSxnQkEwQ2pCLFNBQVMsT0ExQ1E7QUFBQSxnQkEyQ2pCLGdCQUFnQixPQTNDQztBQUFBLGdCQTRDakIsdUJBQXVCLE9BNUNOO0FBQUEsZ0JBNkNqQixZQUFZLE9BN0NLO0FBQUEsYUFkSjtBQUFBLFNBQWpCLENBVWlFO0FBQUEsS0FUckM7QUFBQSxJQVlSLElBQUlMLE9BQUosRUFBYTtBQUFBLFFBQ1RVLFFBQUEsQ0FBU1AsUUFBQSxDQUFTRSxPQUFsQixFQUEyQkUsU0FBM0IsRUFBc0NKLFFBQXRDLEVBRFM7QUFBQSxLQUFiLE1BR0s7QUFBQSxRQUNETSxpQkFBQSxDQUFrQkcsa0JBQWxCLENBQXFDTixVQUFyQyxFQUFpRCxZQUFZO0FBQUEsWUFDekRJLFFBQUEsQ0FBU1AsUUFBQSxDQUFTRSxPQUFsQixFQUEyQkUsU0FBM0IsRUFBc0NKLFFBQXRDLEVBRHlEO0FBQUEsU0FBN0QsRUFEQztBQUFBLEtBZkc7QUFBQSxDQUFaIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwibmFtZVwiOiBcImNvY29zLWNyZWF0b3ItanNcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMS43LjBcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNvY29zMmQtaHRtbDUgaXMgYSBjcm9zcy1wbGF0Zm9ybSAyRCBnYW1lIGVuZ2luZSB3cml0dGVuIGluIEphdmFzY3JpcHQsIGJhc2VkIG9uIENvY29zMmQtWCBhbmQgbGljZW5zZWQgdW5kZXIgTUlULiBJdCBpbmNvcnBvcmF0ZXMgdGhlIHNhbWUgaGlnaCBsZXZlbCBhcGkgYXMg4oCcQ29jb3MyZCBKUy1iaW5kaW5nIGVuZ2luZeKAnSBhbmQgY29tcGF0aWJsZSB3aXRoIENvY29zMmQtWC4gSXQgY3VycmVudGx5IHN1cHBvcnRzIGNhbnZhcyBhbmQgV2ViR0wgcmVuZGVyZXJpbmcuXCIsXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwOi8vd3d3LmNvY29zMmQteC5vcmdcIixcbiAgXCJhdXRob3JzXCI6IFtcbiAgICBcIkFVVEhPUlMudHh0XCJcbiAgXSxcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJ0ZXN0XCI6IFwiZ3VscCB0ZXN0LWluLWNpXCIsXG4gICAgXCJidWlsZC1jaHVua3NcIjogXCJub2RlIC4vY29jb3MyZC9yZW5kZXJlci9idWlsZC9idWlsZC1jaHVua3NcIixcbiAgICBcImJ1aWxkLW1hcHBpbmdcIjogXCJub2RlIC4vY29jb3MyZC9yZW5kZXJlci9idWlsZC9idWlsZC1tYXBwaW5nXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYWxpYXNpZnlcIjogXCJeMi4xLjBcIixcbiAgICBcImFzeW5jXCI6IFwiMS41LjJcIixcbiAgICBcImJhYmVsLXBsdWdpbi1hZGQtbW9kdWxlLWV4cG9ydHNcIjogXCJeMC4yLjFcIixcbiAgICBcImJhYmVsLXBsdWdpbi1wYXJzZXItb3B0c1wiOiBcIjEuMC4xXCIsXG4gICAgXCJiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLWNsYXNzLXByb3BlcnRpZXNcIjogXCI2LjIyLjBcIixcbiAgICBcImJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tZGVjb3JhdG9ycy1sZWdhY3lcIjogXCJeMS4zLjRcIixcbiAgICBcImJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tZXMyMDE1LWJsb2NrLXNjb3BpbmdcIjogXCI2LjIyLjBcIixcbiAgICBcImJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tZXMyMDE1LXNob3J0aGFuZC1wcm9wZXJ0aWVzXCI6IFwiNi4yMi4wXCIsXG4gICAgXCJiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLWVzMjAxNS10ZW1wbGF0ZS1saXRlcmFsc1wiOiBcIjYuMjIuMFwiLFxuICAgIFwiYmFiZWwtcHJlc2V0LWVudlwiOiBcIl4xLjIuMlwiLFxuICAgIFwiYmFiZWxpZnlcIjogXCI3LjMuMFwiLFxuICAgIFwiYnJvd3NlcmlmeVwiOiBcIjEzLjAuMFwiLFxuICAgIFwiY2hhbGtcIjogXCIxLjEuMFwiLFxuICAgIFwiZGVsXCI6IFwiMy4wLjBcIixcbiAgICBcImV2ZW50LXN0cmVhbVwiOiBcIjMuMy4yXCIsXG4gICAgXCJmaXJlLWZzXCI6IFwiMC4yLjFcIixcbiAgICBcImdsc2wtdG9rZW5pemVyXCI6IFwiMi4xLjVcIixcbiAgICBcImd1bHBcIjogXCJeNC4wLjJcIixcbiAgICBcImd1bHAtYmFiZWxcIjogXCI2LjEuMlwiLFxuICAgIFwiZ3VscC1jYWNoZWRcIjogXCIxLjEuMFwiLFxuICAgIFwiZ3VscC1jb25jYXRcIjogXCIyLjYuMFwiLFxuICAgIFwiZ3VscC1mYlwiOiBcIjAuNS4xXCIsXG4gICAgXCJndWxwLWhlYWRlclwiOiBcIjEuMi4yXCIsXG4gICAgXCJndWxwLWpzaGludFwiOiBcIjEuMTEuMlwiLFxuICAgIFwiZ3VscC1taXJyb3JcIjogXCIwLjQuMFwiLFxuICAgIFwiZ3VscC1vcHRpbWl6ZS1qc1wiOiBcIl4xLjEuMFwiLFxuICAgIFwiZ3VscC1wbHVtYmVyXCI6IFwiMC42LjZcIixcbiAgICBcImd1bHAtcmVuYW1lXCI6IFwiMS4yLjJcIixcbiAgICBcImd1bHAtc2hlbGxcIjogXCIwLjQuMVwiLFxuICAgIFwiZ3VscC1zaXplXCI6IFwiMi4xLjBcIixcbiAgICBcImd1bHAtc291cmNlbWFwc1wiOiBcIjIuNi41XCIsXG4gICAgXCJndWxwLXVnbGlmeVwiOiBcIl4zLjAuMFwiLFxuICAgIFwiZ3VscC11dGlsXCI6IFwiMy4wLjZcIixcbiAgICBcImpzLXNoYTFcIjogXCJeMC42LjBcIixcbiAgICBcImpzaGludC1zdHlsaXNoXCI6IFwiMi4xLjBcIixcbiAgICBcIm11bHRpcGlwZVwiOiBcIjAuMy4wXCIsXG4gICAgXCJwZXJzaXN0aWZ5XCI6IFwiXjEuMS4xXCIsXG4gICAgXCJyZXF1aXJlLWRpclwiOiBcIjAuMy4wXCIsXG4gICAgXCJyb2xsdXBcIjogXCJeMC42Ni42XCIsXG4gICAgXCJyb2xsdXAtcGx1Z2luLW5vZGUtcmVzb2x2ZVwiOiBcIjMuNC4wXCIsXG4gICAgXCJ1Z2xpZnktZXNcIjogXCIzLjMuN1wiLFxuICAgIFwidmlueWxcIjogXCIxLjEuMFwiLFxuICAgIFwidmlueWwtYnVmZmVyXCI6IFwiMS4wLjFcIixcbiAgICBcInZpbnlsLXNvdXJjZS1zdHJlYW1cIjogXCIyLjAuMFwiLFxuICAgIFwid2F0Y2hpZnlcIjogXCIzLjcuMFwiXG4gIH1cbn1cbiJdfQ==