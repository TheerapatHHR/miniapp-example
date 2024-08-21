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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Onboarding; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _jsBridge_initAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/jsBridge/initAuth */ \"(app-pages-browser)/./src/jsBridge/initAuth.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Onboarding() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        status: \"starting to init auth...\",\n        isLoaded: true\n    });\n    const onInitAuth = ()=>{\n        (0,_jsBridge_initAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"ff0f19c7-7440-4e92-bdbf-8c49b641608d\", \"openid+offline+paotangid.citizen+paotangid.mobile+paotangid.email+paotangid.work_profile+paotangid.legal_address+paotangid.mailing_address+paotangid.office_address+paotangid.title+paotangid.fullname_th+paotangid.fullname_en+paotangid.gender+paotangid.birthdate+redirect_uri\", (authorizationCode)=>{\n            /*\n          Logic to handle the authorization code received from the native app\n          after successful authentication\n        */ //example\n            setStatus({\n                status: \"init auth success \\uD83C\\uDF89\",\n                isLoaded: false\n            });\n            console.log(\"[initAuth] success \\uD83C\\uDF89\");\n            console.log(\"[initAuth] authCode\", authorizationCode);\n            router.replace(\"/?authCode=\".concat(authorizationCode));\n        }, (errorCode, errorDescription)=>{\n            /*\n          Logic to handle the error received from the native app \n          after failed authentication\n        */ //example\n            setStatus({\n                status: \"init auth failed \\uD83D\\uDE22\",\n                errorCode: errorCode,\n                errorDesc: errorDescription,\n                isLoaded: false\n            });\n            console.log(\"[initAuth] failed \\uD83D\\uDE22\");\n            console.log(\"[initAuth] error:\", errorCode, errorDescription);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-cover bg-center h-screen bg-onboarding w-full flex flex-col justify-center items-center gap-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold pt-60 px-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xl text-grey\",\n                        children: \"Welcome to\"\n                    }, void 0, false, {\n                        fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-6xl text-white\",\n                        children: \"Chop.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xl text-grey\",\n                        children: \"Explore the new world of fashion\"\n                    }, void 0, false, {\n                        fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onInitAuth,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white rounded-md px-8 py-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/landing\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"to landing\"\n                        }, void 0, false, {\n                            fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 30\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Onboarding, \"BolP0PHJj6itpqPOdDi2uKC5qMc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Onboarding;\nvar _c;\n$RefreshReg$(_c, \"Onboarding\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvb25ib2FyZGluZy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMyQztBQUNWO0FBQ1c7QUFXN0IsU0FBU0c7O0lBQ3RCLE1BQU1DLFNBQVNGLDBEQUFTQTtJQUN4QixNQUFNLENBQUNHLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQVM7UUFDM0NJLFFBQVE7UUFDUkUsVUFBVTtJQUNaO0lBRUEsTUFBTUMsYUFBYTtRQUNqQlIsOERBQVFBLENBQ04sd0NBQ0EscVJBQ0EsQ0FBQ1M7WUFDQzs7O1FBR0EsR0FFQSxTQUFTO1lBQ1RILFVBQVU7Z0JBQ1JELFFBQVE7Z0JBQ1JFLFVBQVU7WUFDWjtZQUNBRyxRQUFRQyxHQUFHLENBQUM7WUFDWkQsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkY7WUFDbkNMLE9BQU9RLE9BQU8sQ0FBQyxjQUFnQyxPQUFsQkg7UUFDL0IsR0FDQSxDQUFDSSxXQUFXQztZQUNWOzs7UUFHQSxHQUVBLFNBQVM7WUFDVFIsVUFBVTtnQkFDUkQsUUFBUTtnQkFDUlEsV0FBV0E7Z0JBQ1hFLFdBQVdEO2dCQUNYUCxVQUFVO1lBQ1o7WUFDQUcsUUFBUUMsR0FBRyxDQUFDO1lBQ1pELFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJFLFdBQVdDO1FBQzlDO0lBRUo7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQW9COzs7Ozs7a0NBQ25DLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBc0I7Ozs7OztrQ0FDckMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFvQjs7Ozs7Ozs7Ozs7OzBCQUVyQyw4REFBQ0M7Z0JBQU9DLFNBQVNYOzBCQUNmLDRFQUFDUTtvQkFBSUMsV0FBVTs4QkFHYiw0RUFBQ0c7d0JBQUVDLE1BQUs7a0NBQVcsNEVBQUNMO3NDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEM7R0E5RHdCYjs7UUFDUEQsc0RBQVNBOzs7S0FERkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9vbmJvYXJkaW5nL3BhZ2UudHN4P2Y0YWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgaW5pdEF1dGggZnJvbSBcIkAvanNCcmlkZ2UvaW5pdEF1dGhcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cblxudHlwZSBzdGF0dXMgPSB7XG4gIHN0YXR1czogc3RyaW5nO1xuICBlcnJvckNvZGU/OiBzdHJpbmc7XG4gIGVycm9yRGVzYz86IHN0cmluZztcbiAgaXNMb2FkZWQ6IGJvb2xlYW47XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9uYm9hcmRpbmcoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGU8c3RhdHVzPih7XG4gICAgc3RhdHVzOiBcInN0YXJ0aW5nIHRvIGluaXQgYXV0aC4uLlwiLFxuICAgIGlzTG9hZGVkOiB0cnVlLFxuICB9KTtcblxuICBjb25zdCBvbkluaXRBdXRoID0gKCkgPT4ge1xuICAgIGluaXRBdXRoKFxuICAgICAgXCJmZjBmMTljNy03NDQwLTRlOTItYmRiZi04YzQ5YjY0MTYwOGRcIixcbiAgICAgIFwib3BlbmlkK29mZmxpbmUrcGFvdGFuZ2lkLmNpdGl6ZW4rcGFvdGFuZ2lkLm1vYmlsZStwYW90YW5naWQuZW1haWwrcGFvdGFuZ2lkLndvcmtfcHJvZmlsZStwYW90YW5naWQubGVnYWxfYWRkcmVzcytwYW90YW5naWQubWFpbGluZ19hZGRyZXNzK3Bhb3RhbmdpZC5vZmZpY2VfYWRkcmVzcytwYW90YW5naWQudGl0bGUrcGFvdGFuZ2lkLmZ1bGxuYW1lX3RoK3Bhb3RhbmdpZC5mdWxsbmFtZV9lbitwYW90YW5naWQuZ2VuZGVyK3Bhb3RhbmdpZC5iaXJ0aGRhdGUrcmVkaXJlY3RfdXJpXCIsXG4gICAgICAoYXV0aG9yaXphdGlvbkNvZGU6IHN0cmluZykgPT4ge1xuICAgICAgICAvKlxuICAgICAgICAgIExvZ2ljIHRvIGhhbmRsZSB0aGUgYXV0aG9yaXphdGlvbiBjb2RlIHJlY2VpdmVkIGZyb20gdGhlIG5hdGl2ZSBhcHBcbiAgICAgICAgICBhZnRlciBzdWNjZXNzZnVsIGF1dGhlbnRpY2F0aW9uXG4gICAgICAgICovXG5cbiAgICAgICAgLy9leGFtcGxlXG4gICAgICAgIHNldFN0YXR1cyh7XG4gICAgICAgICAgc3RhdHVzOiBcImluaXQgYXV0aCBzdWNjZXNzIPCfjolcIixcbiAgICAgICAgICBpc0xvYWRlZDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIltpbml0QXV0aF0gc3VjY2VzcyDwn46JXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIltpbml0QXV0aF0gYXV0aENvZGVcIiwgYXV0aG9yaXphdGlvbkNvZGUpO1xuICAgICAgICByb3V0ZXIucmVwbGFjZShgLz9hdXRoQ29kZT0ke2F1dGhvcml6YXRpb25Db2RlfWApO1xuICAgICAgfSxcbiAgICAgIChlcnJvckNvZGUsIGVycm9yRGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgLypcbiAgICAgICAgICBMb2dpYyB0byBoYW5kbGUgdGhlIGVycm9yIHJlY2VpdmVkIGZyb20gdGhlIG5hdGl2ZSBhcHAgXG4gICAgICAgICAgYWZ0ZXIgZmFpbGVkIGF1dGhlbnRpY2F0aW9uXG4gICAgICAgICovXG5cbiAgICAgICAgLy9leGFtcGxlXG4gICAgICAgIHNldFN0YXR1cyh7XG4gICAgICAgICAgc3RhdHVzOiBcImluaXQgYXV0aCBmYWlsZWQg8J+YolwiLFxuICAgICAgICAgIGVycm9yQ29kZTogZXJyb3JDb2RlLFxuICAgICAgICAgIGVycm9yRGVzYzogZXJyb3JEZXNjcmlwdGlvbixcbiAgICAgICAgICBpc0xvYWRlZDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIltpbml0QXV0aF0gZmFpbGVkIPCfmKJcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW2luaXRBdXRoXSBlcnJvcjpcIiwgZXJyb3JDb2RlLCBlcnJvckRlc2NyaXB0aW9uKTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctY292ZXIgYmctY2VudGVyIGgtc2NyZWVuIGJnLW9uYm9hcmRpbmcgdy1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC01XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBwdC02MCBweC0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWdyZXlcIj5XZWxjb21lIHRvPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC02eGwgdGV4dC13aGl0ZVwiPkNob3AuPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWdyZXlcIj5FeHBsb3JlIHRoZSBuZXcgd29ybGQgb2YgZmFzaGlvbjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uSW5pdEF1dGh9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbWQgcHgtOCBweS0zXCI+XG4gICAgICAgICAgey8qIExvZ2luIHdpdGggUGFvdGFuZ1xuICAgICAgICAgIDxkaXY+e3N0YXR1cy5pc0xvYWRlZD8gXCJpc0xvYWRlZFwiOlwiRG9uZVwifTwvZGl2PiAqL31cbiAgICAgICAgICA8YSBocmVmPVwiL2xhbmRpbmdcIj48ZGl2PnRvIGxhbmRpbmc8L2Rpdj48L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9idXR0b24+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJpbml0QXV0aCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiT25ib2FyZGluZyIsInJvdXRlciIsInN0YXR1cyIsInNldFN0YXR1cyIsImlzTG9hZGVkIiwib25Jbml0QXV0aCIsImF1dGhvcml6YXRpb25Db2RlIiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJlcnJvckNvZGUiLCJlcnJvckRlc2NyaXB0aW9uIiwiZXJyb3JEZXNjIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/onboarding/page.tsx\n"));

/***/ })

});