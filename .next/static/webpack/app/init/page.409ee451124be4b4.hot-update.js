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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/*\n  This function for calling initAuth in the JSBridge\n*/ const initAuth = (// clientId: string,\n// scope: string, // openid+offline+paotangid.citizen    \ncallback, callbackError)=>{\n    if (window.JSBridge) {\n        var _window_JSBridge_initAuth, _window_JSBridge;\n        // android\n        window.bridge.initAuthCallback = callback;\n        window.bridge.initAuthCallbackError = callbackError;\n        (_window_JSBridge_initAuth = (_window_JSBridge = window.JSBridge).initAuth) === null || _window_JSBridge_initAuth === void 0 ? void 0 : _window_JSBridge_initAuth.call(_window_JSBridge, clientId, scope);\n    } else if (window.webkit) {\n        // ios\n        window.bridge.initAuthCallback = callback;\n        window.bridge.initAuthCallbackError = callbackError;\n        window.webkit.messageHandlers.observer.postMessage({\n            name: \"initAuth\",\n            clientId: \"ff0f19c7-7440-4e92-bdbf-8c49b641608d\",\n            scope: scope\n        });\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (initAuth); //  x-api    pjePBNlCK-dcCwAakKIMI~een~r3is6Q\n // client id     ff0f19c7-7440-4e92-bdbf-8c49b641608d\n // secret KN9RwJEcm1cdnPPo3sPRxHbzbCJR0T\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9qc0JyaWRnZS9pbml0QXV0aC50cyIsIm1hcHBpbmdzIjoiO0FBQUE7O0FBRUEsR0FDQSxNQUFNQSxXQUFXLENBQ2Ysb0JBQW9CO0FBQ3BCLHlEQUF5RDtBQUN6REMsVUFDQUM7SUFFQSxJQUFJQyxPQUFPQyxRQUFRLEVBQUU7WUFJbkJELDJCQUFBQTtRQUhBLFVBQVU7UUFDVkEsT0FBT0UsTUFBTSxDQUFDQyxnQkFBZ0IsR0FBR0w7UUFDakNFLE9BQU9FLE1BQU0sQ0FBQ0UscUJBQXFCLEdBQUdMO1NBQ3RDQyw0QkFBQUEsQ0FBQUEsbUJBQUFBLE9BQU9DLFFBQVEsRUFBQ0osUUFBUSxjQUF4QkcsZ0RBQUFBLCtCQUFBQSxrQkFBMkJLLFVBQVVDO0lBQ3ZDLE9BQU8sSUFBSU4sT0FBT08sTUFBTSxFQUFFO1FBQ3hCLE1BQU07UUFDTlAsT0FBT0UsTUFBTSxDQUFDQyxnQkFBZ0IsR0FBR0w7UUFDakNFLE9BQU9FLE1BQU0sQ0FBQ0UscUJBQXFCLEdBQUdMO1FBQ3RDQyxPQUFPTyxNQUFNLENBQUNDLGVBQWUsQ0FBQ0MsUUFBUSxDQUFDQyxXQUFXLENBQUM7WUFDakRDLE1BQU07WUFDTk4sVUFBVTtZQUNWQyxPQUFPQTtRQUNUO0lBQ0Y7QUFDRjtBQUdBLCtEQUFlVCxRQUFRQSxFQUFDLENBRXhCLDZDQUE2QztDQUU3QyxxREFBcUQ7Q0FDckQsd0NBQXdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9qc0JyaWRnZS9pbml0QXV0aC50cz9mYmNkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFRoaXMgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaW5pdEF1dGggaW4gdGhlIEpTQnJpZGdlXG4qL1xuY29uc3QgaW5pdEF1dGggPSAoXG4gIC8vIGNsaWVudElkOiBzdHJpbmcsXG4gIC8vIHNjb3BlOiBzdHJpbmcsIC8vIG9wZW5pZCtvZmZsaW5lK3Bhb3RhbmdpZC5jaXRpemVuICAgIFxuICBjYWxsYmFjazogKGF1dGhvcml6YXRpb25Db2RlOiBzdHJpbmcpID0+IHZvaWQsXG4gIGNhbGxiYWNrRXJyb3I6IChlcnJvckNvZGU6IHN0cmluZywgZXJyb3JEZXNjcmlwdGlvbjogc3RyaW5nKSA9PiB2b2lkXG4pID0+IHtcbiAgaWYgKHdpbmRvdy5KU0JyaWRnZSkge1xuICAgIC8vIGFuZHJvaWRcbiAgICB3aW5kb3cuYnJpZGdlLmluaXRBdXRoQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB3aW5kb3cuYnJpZGdlLmluaXRBdXRoQ2FsbGJhY2tFcnJvciA9IGNhbGxiYWNrRXJyb3I7XG4gICAgd2luZG93LkpTQnJpZGdlLmluaXRBdXRoPy4oY2xpZW50SWQsIHNjb3BlKTtcbiAgfSBlbHNlIGlmICh3aW5kb3cud2Via2l0KSB7XG4gICAgLy8gaW9zXG4gICAgd2luZG93LmJyaWRnZS5pbml0QXV0aENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgd2luZG93LmJyaWRnZS5pbml0QXV0aENhbGxiYWNrRXJyb3IgPSBjYWxsYmFja0Vycm9yO1xuICAgIHdpbmRvdy53ZWJraXQubWVzc2FnZUhhbmRsZXJzLm9ic2VydmVyLnBvc3RNZXNzYWdlKHtcbiAgICAgIG5hbWU6ICdpbml0QXV0aCcsXG4gICAgICBjbGllbnRJZDogXCJmZjBmMTljNy03NDQwLTRlOTItYmRiZi04YzQ5YjY0MTYwOGRcIixcbiAgICAgIHNjb3BlOiBzY29wZVxuICAgIH0pO1xuICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRBdXRoO1xuXG4vLyAgeC1hcGkgICAgcGplUEJObENLLWRjQ3dBYWtLSU1JfmVlbn5yM2lzNlFcblxuLy8gY2xpZW50IGlkICAgICBmZjBmMTljNy03NDQwLTRlOTItYmRiZi04YzQ5YjY0MTYwOGRcbi8vIHNlY3JldCBLTjlSd0pFY20xY2RuUFBvM3NQUnhIYnpiQ0pSMFQiXSwibmFtZXMiOlsiaW5pdEF1dGgiLCJjYWxsYmFjayIsImNhbGxiYWNrRXJyb3IiLCJ3aW5kb3ciLCJKU0JyaWRnZSIsImJyaWRnZSIsImluaXRBdXRoQ2FsbGJhY2siLCJpbml0QXV0aENhbGxiYWNrRXJyb3IiLCJjbGllbnRJZCIsInNjb3BlIiwid2Via2l0IiwibWVzc2FnZUhhbmRsZXJzIiwib2JzZXJ2ZXIiLCJwb3N0TWVzc2FnZSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/jsBridge/initAuth.ts\n"));

/***/ })

});