"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/init/page",{

/***/ "(app-pages-browser)/./src/jsBridge/initAuth.ts":
/*!**********************************!*\
  !*** ./src/jsBridge/initAuth.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/*\n  This function for calling initAuth in the JSBridge\n*/ const initAuth = (// clientId: string,\n// scope: string, // openid+offline+paotangid.citizen    \ncallback, callbackError)=>{\n    if (window.JSBridge) {\n        var _window_JSBridge_initAuth, _window_JSBridge;\n        // android\n        window.bridge.initAuthCallback = callback;\n        window.bridge.initAuthCallbackError = callbackError;\n        (_window_JSBridge_initAuth = (_window_JSBridge = window.JSBridge).initAuth) === null || _window_JSBridge_initAuth === void 0 ? void 0 : _window_JSBridge_initAuth.call(_window_JSBridge, \"ff0f19c7-7440-4e92-bdbf-8c49b641608d\", \"openid+offline+paotangid.citizen\");\n    } else if (window.webkit) {\n        // ios\n        window.bridge.initAuthCallback = callback;\n        window.bridge.initAuthCallbackError = callbackError;\n        window.webkit.messageHandlers.observer.postMessage({\n            name: \"initAuth\",\n            clientId: \"ff0f19c7-7440-4e92-bdbf-8c49b641608d\",\n            scope: \"openid+offline+paotangid.citizen\"\n        });\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (initAuth); //  x-api    pjePBNlCK-dcCwAakKIMI~een~r3is6Q\n // client id     ff0f19c7-7440-4e92-bdbf-8c49b641608d\n // secret KN9RwJEcm1cdnPPo3sPRxHbzbCJR0T\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9qc0JyaWRnZS9pbml0QXV0aC50cyIsIm1hcHBpbmdzIjoiO0FBQUE7O0FBRUEsR0FDQSxNQUFNQSxXQUFXLENBQ2Ysb0JBQW9CO0FBQ3BCLHlEQUF5RDtBQUN6REMsVUFDQUM7SUFFQSxJQUFJQyxPQUFPQyxRQUFRLEVBQUU7WUFJbkJELDJCQUFBQTtRQUhBLFVBQVU7UUFDVkEsT0FBT0UsTUFBTSxDQUFDQyxnQkFBZ0IsR0FBR0w7UUFDakNFLE9BQU9FLE1BQU0sQ0FBQ0UscUJBQXFCLEdBQUdMO1NBQ3RDQyw0QkFBQUEsQ0FBQUEsbUJBQUFBLE9BQU9DLFFBQVEsRUFBQ0osUUFBUSxjQUF4QkcsZ0RBQUFBLCtCQUFBQSxrQkFBMkIsd0NBQXdDO0lBQ3JFLE9BQU8sSUFBSUEsT0FBT0ssTUFBTSxFQUFFO1FBQ3hCLE1BQU07UUFDTkwsT0FBT0UsTUFBTSxDQUFDQyxnQkFBZ0IsR0FBR0w7UUFDakNFLE9BQU9FLE1BQU0sQ0FBQ0UscUJBQXFCLEdBQUdMO1FBQ3RDQyxPQUFPSyxNQUFNLENBQUNDLGVBQWUsQ0FBQ0MsUUFBUSxDQUFDQyxXQUFXLENBQUM7WUFDakRDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxPQUFPO1FBQ1Q7SUFDRjtBQUNGO0FBR0EsK0RBQWVkLFFBQVFBLEVBQUMsQ0FFeEIsNkNBQTZDO0NBRTdDLHFEQUFxRDtDQUNyRCx3Q0FBd0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2pzQnJpZGdlL2luaXRBdXRoLnRzP2ZiY2QiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgVGhpcyBmdW5jdGlvbiBmb3IgY2FsbGluZyBpbml0QXV0aCBpbiB0aGUgSlNCcmlkZ2VcbiovXG5jb25zdCBpbml0QXV0aCA9IChcbiAgLy8gY2xpZW50SWQ6IHN0cmluZyxcbiAgLy8gc2NvcGU6IHN0cmluZywgLy8gb3BlbmlkK29mZmxpbmUrcGFvdGFuZ2lkLmNpdGl6ZW4gICAgXG4gIGNhbGxiYWNrOiAoYXV0aG9yaXphdGlvbkNvZGU6IHN0cmluZykgPT4gdm9pZCxcbiAgY2FsbGJhY2tFcnJvcjogKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvckRlc2NyaXB0aW9uOiBzdHJpbmcpID0+IHZvaWRcbikgPT4ge1xuICBpZiAod2luZG93LkpTQnJpZGdlKSB7XG4gICAgLy8gYW5kcm9pZFxuICAgIHdpbmRvdy5icmlkZ2UuaW5pdEF1dGhDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHdpbmRvdy5icmlkZ2UuaW5pdEF1dGhDYWxsYmFja0Vycm9yID0gY2FsbGJhY2tFcnJvcjtcbiAgICB3aW5kb3cuSlNCcmlkZ2UuaW5pdEF1dGg/LihcImZmMGYxOWM3LTc0NDAtNGU5Mi1iZGJmLThjNDliNjQxNjA4ZFwiLCBcIm9wZW5pZCtvZmZsaW5lK3Bhb3RhbmdpZC5jaXRpemVuXCIpO1xuICB9IGVsc2UgaWYgKHdpbmRvdy53ZWJraXQpIHtcbiAgICAvLyBpb3NcbiAgICB3aW5kb3cuYnJpZGdlLmluaXRBdXRoQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB3aW5kb3cuYnJpZGdlLmluaXRBdXRoQ2FsbGJhY2tFcnJvciA9IGNhbGxiYWNrRXJyb3I7XG4gICAgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMub2JzZXJ2ZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgbmFtZTogJ2luaXRBdXRoJyxcbiAgICAgIGNsaWVudElkOiBcImZmMGYxOWM3LTc0NDAtNGU5Mi1iZGJmLThjNDliNjQxNjA4ZFwiLFxuICAgICAgc2NvcGU6IFwib3BlbmlkK29mZmxpbmUrcGFvdGFuZ2lkLmNpdGl6ZW5cIlxuICAgIH0pO1xuICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRBdXRoO1xuXG4vLyAgeC1hcGkgICAgcGplUEJObENLLWRjQ3dBYWtLSU1JfmVlbn5yM2lzNlFcblxuLy8gY2xpZW50IGlkICAgICBmZjBmMTljNy03NDQwLTRlOTItYmRiZi04YzQ5YjY0MTYwOGRcbi8vIHNlY3JldCBLTjlSd0pFY20xY2RuUFBvM3NQUnhIYnpiQ0pSMFQiXSwibmFtZXMiOlsiaW5pdEF1dGgiLCJjYWxsYmFjayIsImNhbGxiYWNrRXJyb3IiLCJ3aW5kb3ciLCJKU0JyaWRnZSIsImJyaWRnZSIsImluaXRBdXRoQ2FsbGJhY2siLCJpbml0QXV0aENhbGxiYWNrRXJyb3IiLCJ3ZWJraXQiLCJtZXNzYWdlSGFuZGxlcnMiLCJvYnNlcnZlciIsInBvc3RNZXNzYWdlIiwibmFtZSIsImNsaWVudElkIiwic2NvcGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/jsBridge/initAuth.ts\n"));

/***/ })

});