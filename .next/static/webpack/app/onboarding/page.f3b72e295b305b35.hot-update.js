"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/onboarding/page",{

/***/ "(app-pages-browser)/./src/app/onboarding/page.tsx":
/*!*************************************!*\
  !*** ./src/app/onboarding/page.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Onboarding; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _jsBridge_initAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/jsBridge/initAuth */ \"(app-pages-browser)/./src/jsBridge/initAuth.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Onboarding() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        status: \"starting to init auth...\",\n        isLoaded: true\n    });\n    const onInitAuth = ()=>{\n        (0,_jsBridge_initAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"ff0f19c7-7440-4e92-bdbf-8c49b641608d\", \"openid+offline+paotangid.citizen+paotangid.mobile+paotangid.email+paotangid.work_profile+paotangid.legal_address+paotangid.mailing_address+paotangid.office_address+paotangid.title+paotangid.fullname_th+paotangid.fullname_en+paotangid.gender+paotangid.birthdate\", (authorizationCode)=>{\n            /*\n          Logic to handle the authorization code received from the native app\n          after successful authentication\n        */ //example\n            setStatus({\n                status: \"init auth success \\uD83C\\uDF89\",\n                isLoaded: false\n            });\n            console.log(\"[initAuth] success \\uD83C\\uDF89\");\n            console.log(\"[initAuth] authCode\", authorizationCode);\n            router.replace(\"/?authCode=\".concat(authorizationCode));\n        }, (errorCode, errorDescription)=>{\n            /*\n          Logic to handle the error received from the native app \n          after failed authentication\n        */ //example\n            setStatus({\n                status: \"init auth failed \\uD83D\\uDE22\",\n                errorCode: errorCode,\n                errorDesc: errorDescription,\n                isLoaded: false\n            });\n            console.log(\"[initAuth] failed \\uD83D\\uDE22\");\n            console.log(\"[initAuth] error:\", errorCode, errorDescription);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-cover bg-center h-screen bg-onboarding w-full flex flex-col justify-center items-center gap-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold pt-60 px-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xl text-grey\",\n                        children: \"Welcome to\"\n                    }, void 0, false, {\n                        fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-6xl text-white\",\n                        children: \"Chop.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xl text-grey\",\n                        children: \"Explore the new world of fashion\"\n                    }, void 0, false, {\n                        fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onInitAuth,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white rounded-md px-8 py-3\"\n                }, void 0, false, {\n                    fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Onboarding, \"BolP0PHJj6itpqPOdDi2uKC5qMc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Onboarding;\nvar _c;\n$RefreshReg$(_c, \"Onboarding\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvb25ib2FyZGluZy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMyQztBQUNWO0FBQ1c7QUFXN0IsU0FBU0c7O0lBQ3RCLE1BQU1DLFNBQVNGLDBEQUFTQTtJQUN4QixNQUFNLENBQUNHLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQVM7UUFDM0NJLFFBQVE7UUFDUkUsVUFBVTtJQUNaO0lBRUEsTUFBTUMsYUFBYTtRQUNqQlIsOERBQVFBLENBQ04sd0NBQ0Esd1FBQ0EsQ0FBQ1M7WUFDQzs7O1FBR0EsR0FFQSxTQUFTO1lBQ1RILFVBQVU7Z0JBQ1JELFFBQVE7Z0JBQ1JFLFVBQVU7WUFDWjtZQUNBRyxRQUFRQyxHQUFHLENBQUM7WUFDWkQsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkY7WUFDbkNMLE9BQU9RLE9BQU8sQ0FBQyxjQUFnQyxPQUFsQkg7UUFDL0IsR0FDQSxDQUFDSSxXQUFXQztZQUNWOzs7UUFHQSxHQUVBLFNBQVM7WUFDVFIsVUFBVTtnQkFDUkQsUUFBUTtnQkFDUlEsV0FBV0E7Z0JBQ1hFLFdBQVdEO2dCQUNYUCxVQUFVO1lBQ1o7WUFDQUcsUUFBUUMsR0FBRyxDQUFDO1lBQ1pELFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJFLFdBQVdDO1FBQzlDO0lBRUo7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQW9COzs7Ozs7a0NBQ25DLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBc0I7Ozs7OztrQ0FDckMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFvQjs7Ozs7Ozs7Ozs7OzBCQUVyQyw4REFBQ0M7Z0JBQU9DLFNBQVNYOzBCQUNmLDRFQUFDUTtvQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdkI7R0E3RHdCZDs7UUFDUEQsc0RBQVNBOzs7S0FERkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9vbmJvYXJkaW5nL3BhZ2UudHN4P2Y0YWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgaW5pdEF1dGggZnJvbSBcIkAvanNCcmlkZ2UvaW5pdEF1dGhcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cblxudHlwZSBzdGF0dXMgPSB7XG4gIHN0YXR1czogc3RyaW5nO1xuICBlcnJvckNvZGU/OiBzdHJpbmc7XG4gIGVycm9yRGVzYz86IHN0cmluZztcbiAgaXNMb2FkZWQ6IGJvb2xlYW47XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9uYm9hcmRpbmcoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGU8c3RhdHVzPih7XG4gICAgc3RhdHVzOiBcInN0YXJ0aW5nIHRvIGluaXQgYXV0aC4uLlwiLFxuICAgIGlzTG9hZGVkOiB0cnVlLFxuICB9KTtcblxuICBjb25zdCBvbkluaXRBdXRoID0gKCkgPT4ge1xuICAgIGluaXRBdXRoKFxuICAgICAgXCJmZjBmMTljNy03NDQwLTRlOTItYmRiZi04YzQ5YjY0MTYwOGRcIixcbiAgICAgIFwib3BlbmlkK29mZmxpbmUrcGFvdGFuZ2lkLmNpdGl6ZW4rcGFvdGFuZ2lkLm1vYmlsZStwYW90YW5naWQuZW1haWwrcGFvdGFuZ2lkLndvcmtfcHJvZmlsZStwYW90YW5naWQubGVnYWxfYWRkcmVzcytwYW90YW5naWQubWFpbGluZ19hZGRyZXNzK3Bhb3RhbmdpZC5vZmZpY2VfYWRkcmVzcytwYW90YW5naWQudGl0bGUrcGFvdGFuZ2lkLmZ1bGxuYW1lX3RoK3Bhb3RhbmdpZC5mdWxsbmFtZV9lbitwYW90YW5naWQuZ2VuZGVyK3Bhb3RhbmdpZC5iaXJ0aGRhdGVcIixcbiAgICAgIChhdXRob3JpemF0aW9uQ29kZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIC8qXG4gICAgICAgICAgTG9naWMgdG8gaGFuZGxlIHRoZSBhdXRob3JpemF0aW9uIGNvZGUgcmVjZWl2ZWQgZnJvbSB0aGUgbmF0aXZlIGFwcFxuICAgICAgICAgIGFmdGVyIHN1Y2Nlc3NmdWwgYXV0aGVudGljYXRpb25cbiAgICAgICAgKi9cblxuICAgICAgICAvL2V4YW1wbGVcbiAgICAgICAgc2V0U3RhdHVzKHtcbiAgICAgICAgICBzdGF0dXM6IFwiaW5pdCBhdXRoIHN1Y2Nlc3Mg8J+OiVwiLFxuICAgICAgICAgIGlzTG9hZGVkOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW2luaXRBdXRoXSBzdWNjZXNzIPCfjolcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW2luaXRBdXRoXSBhdXRoQ29kZVwiLCBhdXRob3JpemF0aW9uQ29kZSk7XG4gICAgICAgIHJvdXRlci5yZXBsYWNlKGAvP2F1dGhDb2RlPSR7YXV0aG9yaXphdGlvbkNvZGV9YCk7XG4gICAgICB9LFxuICAgICAgKGVycm9yQ29kZSwgZXJyb3JEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICAvKlxuICAgICAgICAgIExvZ2ljIHRvIGhhbmRsZSB0aGUgZXJyb3IgcmVjZWl2ZWQgZnJvbSB0aGUgbmF0aXZlIGFwcCBcbiAgICAgICAgICBhZnRlciBmYWlsZWQgYXV0aGVudGljYXRpb25cbiAgICAgICAgKi9cblxuICAgICAgICAvL2V4YW1wbGVcbiAgICAgICAgc2V0U3RhdHVzKHtcbiAgICAgICAgICBzdGF0dXM6IFwiaW5pdCBhdXRoIGZhaWxlZCDwn5iiXCIsXG4gICAgICAgICAgZXJyb3JDb2RlOiBlcnJvckNvZGUsXG4gICAgICAgICAgZXJyb3JEZXNjOiBlcnJvckRlc2NyaXB0aW9uLFxuICAgICAgICAgIGlzTG9hZGVkOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW2luaXRBdXRoXSBmYWlsZWQg8J+YolwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJbaW5pdEF1dGhdIGVycm9yOlwiLCBlcnJvckNvZGUsIGVycm9yRGVzY3JpcHRpb24pO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1jb3ZlciBiZy1jZW50ZXIgaC1zY3JlZW4gYmctb25ib2FyZGluZyB3LWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHB0LTYwIHB4LTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtZ3JleVwiPldlbGNvbWUgdG88L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCB0ZXh0LXdoaXRlXCI+Q2hvcC48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtZ3JleVwiPkV4cGxvcmUgdGhlIG5ldyB3b3JsZCBvZiBmYXNoaW9uPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17b25Jbml0QXV0aH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1tZCBweC04IHB5LTNcIj5cbiAgICAgICAgICB7LyogTG9naW4gd2l0aCBQYW90YW5nXG4gICAgICAgICAgPGRpdj57c3RhdHVzLmlzTG9hZGVkPyBcImlzTG9hZGVkXCI6XCJEb25lXCJ9PC9kaXY+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW5pdEF1dGgiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIk9uYm9hcmRpbmciLCJyb3V0ZXIiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJpc0xvYWRlZCIsIm9uSW5pdEF1dGgiLCJhdXRob3JpemF0aW9uQ29kZSIsImNvbnNvbGUiLCJsb2ciLCJyZXBsYWNlIiwiZXJyb3JDb2RlIiwiZXJyb3JEZXNjcmlwdGlvbiIsImVycm9yRGVzYyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/onboarding/page.tsx\n"));

/***/ })

});