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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/*\n  This function for calling initAuth in the JSBridge\n*/ const initAuth = (clientId, scope, callback, callbackError)=>{\n    if (window.JSBridge) {\n        var _window_JSBridge_initAuth, _window_JSBridge;\n        // android\n        window.bridge.initAuthCallback = callback;\n        window.bridge.initAuthCallbackError = callbackError;\n        (_window_JSBridge_initAuth = (_window_JSBridge = window.JSBridge).initAuth) === null || _window_JSBridge_initAuth === void 0 ? void 0 : _window_JSBridge_initAuth.call(_window_JSBridge, clientId, scope);\n    } else if (window.webkit) {\n        // ios\n        window.bridge.initAuthCallback = callback;\n        window.bridge.initAuthCallbackError = callbackError;\n        window.webkit.messageHandlers.observer.postMessage({\n            name: \"initAuth\",\n            clientId: clientId,\n            scope: scope\n        });\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (initAuth); // client id     ff0f19c7-7440-4e92-bdbf-8c49b641608d\n // secret KN9RwJEcm1cdnPPo3sPRxHbzbCJR0T\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9qc0JyaWRnZS9pbml0QXV0aC50cyIsIm1hcHBpbmdzIjoiO0FBQUE7O0FBRUEsR0FDQSxNQUFNQSxXQUFXLENBQ2ZDLFVBQ0FDLE9BQ0FDLFVBQ0FDO0lBRUEsSUFBSUMsT0FBT0MsUUFBUSxFQUFFO1lBSW5CRCwyQkFBQUE7UUFIQSxVQUFVO1FBQ1ZBLE9BQU9FLE1BQU0sQ0FBQ0MsZ0JBQWdCLEdBQUdMO1FBQ2pDRSxPQUFPRSxNQUFNLENBQUNFLHFCQUFxQixHQUFHTDtTQUN0Q0MsNEJBQUFBLENBQUFBLG1CQUFBQSxPQUFPQyxRQUFRLEVBQUNOLFFBQVEsY0FBeEJLLGdEQUFBQSwrQkFBQUEsa0JBQTJCSixVQUFVQztJQUN2QyxPQUFPLElBQUlHLE9BQU9LLE1BQU0sRUFBRTtRQUN4QixNQUFNO1FBQ05MLE9BQU9FLE1BQU0sQ0FBQ0MsZ0JBQWdCLEdBQUdMO1FBQ2pDRSxPQUFPRSxNQUFNLENBQUNFLHFCQUFxQixHQUFHTDtRQUN0Q0MsT0FBT0ssTUFBTSxDQUFDQyxlQUFlLENBQUNDLFFBQVEsQ0FBQ0MsV0FBVyxDQUFDO1lBQ2pEQyxNQUFNO1lBQ05iLFVBQVVBO1lBQ1ZDLE9BQU9BO1FBQ1Q7SUFDRjtBQUNGO0FBR0EsK0RBQWVGLFFBQVFBLEVBQUMsQ0FHeEIscURBQXFEO0NBQ3JELHdDQUF3QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvanNCcmlkZ2UvaW5pdEF1dGgudHM/ZmJjZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBUaGlzIGZ1bmN0aW9uIGZvciBjYWxsaW5nIGluaXRBdXRoIGluIHRoZSBKU0JyaWRnZVxuKi9cbmNvbnN0IGluaXRBdXRoID0gKFxuICBjbGllbnRJZDogc3RyaW5nLFxuICBzY29wZTogc3RyaW5nLCAvLyBvcGVuaWQrb2ZmbGluZStwYW90YW5naWQuY2l0aXplbiAgICBcbiAgY2FsbGJhY2s6IChhdXRob3JpemF0aW9uQ29kZTogc3RyaW5nKSA9PiB2b2lkLFxuICBjYWxsYmFja0Vycm9yOiAoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yRGVzY3JpcHRpb246IHN0cmluZykgPT4gdm9pZFxuKSA9PiB7XG4gIGlmICh3aW5kb3cuSlNCcmlkZ2UpIHtcbiAgICAvLyBhbmRyb2lkXG4gICAgd2luZG93LmJyaWRnZS5pbml0QXV0aENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgd2luZG93LmJyaWRnZS5pbml0QXV0aENhbGxiYWNrRXJyb3IgPSBjYWxsYmFja0Vycm9yO1xuICAgIHdpbmRvdy5KU0JyaWRnZS5pbml0QXV0aD8uKGNsaWVudElkLCBzY29wZSk7XG4gIH0gZWxzZSBpZiAod2luZG93LndlYmtpdCkge1xuICAgIC8vIGlvc1xuICAgIHdpbmRvdy5icmlkZ2UuaW5pdEF1dGhDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHdpbmRvdy5icmlkZ2UuaW5pdEF1dGhDYWxsYmFja0Vycm9yID0gY2FsbGJhY2tFcnJvcjtcbiAgICB3aW5kb3cud2Via2l0Lm1lc3NhZ2VIYW5kbGVycy5vYnNlcnZlci5wb3N0TWVzc2FnZSh7XG4gICAgICBuYW1lOiAnaW5pdEF1dGgnLFxuICAgICAgY2xpZW50SWQ6IGNsaWVudElkLFxuICAgICAgc2NvcGU6IHNjb3BlXG4gICAgfSk7XG4gIH1cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEF1dGg7XG5cblxuLy8gY2xpZW50IGlkICAgICBmZjBmMTljNy03NDQwLTRlOTItYmRiZi04YzQ5YjY0MTYwOGRcbi8vIHNlY3JldCBLTjlSd0pFY20xY2RuUFBvM3NQUnhIYnpiQ0pSMFQiXSwibmFtZXMiOlsiaW5pdEF1dGgiLCJjbGllbnRJZCIsInNjb3BlIiwiY2FsbGJhY2siLCJjYWxsYmFja0Vycm9yIiwid2luZG93IiwiSlNCcmlkZ2UiLCJicmlkZ2UiLCJpbml0QXV0aENhbGxiYWNrIiwiaW5pdEF1dGhDYWxsYmFja0Vycm9yIiwid2Via2l0IiwibWVzc2FnZUhhbmRsZXJzIiwib2JzZXJ2ZXIiLCJwb3N0TWVzc2FnZSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/jsBridge/initAuth.ts\n"));

/***/ })

});