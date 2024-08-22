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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Onboarding; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _jsBridge_initAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/jsBridge/initAuth */ \"(app-pages-browser)/./src/jsBridge/initAuth.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Onboarding() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        status: \"starting to init auth...\",\n        isLoaded: true\n    });\n    const onInitAuth = ()=>{\n        (0,_jsBridge_initAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"ff0f19c7-7440-4e92-bdbf-8c49b641608d\", \"openid+offline+paotangid.citizen\", (authorizationCode)=>{\n            /*\n          Logic to handle the authorization code received from the native app\n          after successful authentication\n        */ //example\n            setStatus({\n                status: \"init auth success \\uD83C\\uDF89\",\n                isLoaded: false\n            });\n            console.log(\"[initAuth] success \\uD83C\\uDF89\");\n            console.log(\"[initAuth] authCode\", authorizationCode);\n            router.replace(\"/?authCode=\".concat(authorizationCode));\n        }, (errorCode, errorDescription)=>{\n            /*\n          Logic to handle the error received from the native app \n          after failed authentication\n        */ //example\n            setStatus({\n                status: \"init auth failed \\uD83D\\uDE22\",\n                errorCode: errorCode,\n                errorDesc: errorDescription,\n                isLoaded: false\n            });\n            console.log(\"[initAuth] failed \\uD83D\\uDE22\");\n            console.log(\"[initAuth] error:\", errorCode, errorDescription);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-cover bg-center h-screen bg-onboarding w-full flex flex-col justify-center items-center gap-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold pt-60 px-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xl text-grey\",\n                        children: \"Welcome to\"\n                    }, void 0, false, {\n                        fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-6xl text-white\",\n                        children: \"Chop.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xl text-grey\",\n                        children: \"Explore the new world of fashion\"\n                    }, void 0, false, {\n                        fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onInitAuth,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white rounded-md px-8 py-3\",\n                    children: [\n                        \"Login with Paotang\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: status.isLoaded ? \"isLoaded\" : \"Done\"\n                        }, void 0, false, {\n                            fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/onboarding/page.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Onboarding, \"BolP0PHJj6itpqPOdDi2uKC5qMc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Onboarding;\nvar _c;\n$RefreshReg$(_c, \"Onboarding\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvb25ib2FyZGluZy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMyQztBQUNWO0FBQ1c7QUFXN0IsU0FBU0c7O0lBQ3RCLE1BQU1DLFNBQVNGLDBEQUFTQTtJQUN4QixNQUFNLENBQUNHLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQVM7UUFDM0NJLFFBQVE7UUFDUkUsVUFBVTtJQUNaO0lBRUEsTUFBTUMsYUFBYTtRQUNqQlIsOERBQVFBLENBQ04sd0NBQ0Esb0NBQ0EsQ0FBQ1M7WUFDQzs7O1FBR0EsR0FFQSxTQUFTO1lBQ1RILFVBQVU7Z0JBQ1JELFFBQVE7Z0JBQ1JFLFVBQVU7WUFDWjtZQUNBRyxRQUFRQyxHQUFHLENBQUM7WUFDWkQsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkY7WUFDbkNMLE9BQU9RLE9BQU8sQ0FBQyxjQUFnQyxPQUFsQkg7UUFDL0IsR0FDQSxDQUFDSSxXQUFXQztZQUNWOzs7UUFHQSxHQUVBLFNBQVM7WUFDVFIsVUFBVTtnQkFDUkQsUUFBUTtnQkFDUlEsV0FBV0E7Z0JBQ1hFLFdBQVdEO2dCQUNYUCxVQUFVO1lBQ1o7WUFDQUcsUUFBUUMsR0FBRyxDQUFDO1lBQ1pELFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJFLFdBQVdDO1FBQzlDO0lBRUo7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQW9COzs7Ozs7a0NBQ25DLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBc0I7Ozs7OztrQ0FDckMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFvQjs7Ozs7Ozs7Ozs7OzBCQUVyQyw4REFBQ0M7Z0JBQU9DLFNBQVNYOzBCQUNmLDRFQUFDUTtvQkFBSUMsV0FBVTs7d0JBQWdDO3NDQUU3Qyw4REFBQ0Q7c0NBQUtYLE9BQU9FLFFBQVEsR0FBRSxhQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81QztHQTlEd0JKOztRQUNQRCxzREFBU0E7OztLQURGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL29uYm9hcmRpbmcvcGFnZS50c3g/ZjRhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBpbml0QXV0aCBmcm9tIFwiQC9qc0JyaWRnZS9pbml0QXV0aFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuXG50eXBlIHN0YXR1cyA9IHtcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIGVycm9yQ29kZT86IHN0cmluZztcbiAgZXJyb3JEZXNjPzogc3RyaW5nO1xuICBpc0xvYWRlZDogYm9vbGVhbjtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT25ib2FyZGluZygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZTxzdGF0dXM+KHtcbiAgICBzdGF0dXM6IFwic3RhcnRpbmcgdG8gaW5pdCBhdXRoLi4uXCIsXG4gICAgaXNMb2FkZWQ6IHRydWUsXG4gIH0pO1xuXG4gIGNvbnN0IG9uSW5pdEF1dGggPSAoKSA9PiB7XG4gICAgaW5pdEF1dGgoXG4gICAgICBcImZmMGYxOWM3LTc0NDAtNGU5Mi1iZGJmLThjNDliNjQxNjA4ZFwiLFxuICAgICAgXCJvcGVuaWQrb2ZmbGluZStwYW90YW5naWQuY2l0aXplblwiLFxuICAgICAgKGF1dGhvcml6YXRpb25Db2RlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgLypcbiAgICAgICAgICBMb2dpYyB0byBoYW5kbGUgdGhlIGF1dGhvcml6YXRpb24gY29kZSByZWNlaXZlZCBmcm9tIHRoZSBuYXRpdmUgYXBwXG4gICAgICAgICAgYWZ0ZXIgc3VjY2Vzc2Z1bCBhdXRoZW50aWNhdGlvblxuICAgICAgICAqL1xuXG4gICAgICAgIC8vZXhhbXBsZVxuICAgICAgICBzZXRTdGF0dXMoe1xuICAgICAgICAgIHN0YXR1czogXCJpbml0IGF1dGggc3VjY2VzcyDwn46JXCIsXG4gICAgICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJbaW5pdEF1dGhdIHN1Y2Nlc3Mg8J+OiVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJbaW5pdEF1dGhdIGF1dGhDb2RlXCIsIGF1dGhvcml6YXRpb25Db2RlKTtcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoYC8/YXV0aENvZGU9JHthdXRob3JpemF0aW9uQ29kZX1gKTtcbiAgICAgIH0sXG4gICAgICAoZXJyb3JDb2RlLCBlcnJvckRlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIC8qXG4gICAgICAgICAgTG9naWMgdG8gaGFuZGxlIHRoZSBlcnJvciByZWNlaXZlZCBmcm9tIHRoZSBuYXRpdmUgYXBwIFxuICAgICAgICAgIGFmdGVyIGZhaWxlZCBhdXRoZW50aWNhdGlvblxuICAgICAgICAqL1xuXG4gICAgICAgIC8vZXhhbXBsZVxuICAgICAgICBzZXRTdGF0dXMoe1xuICAgICAgICAgIHN0YXR1czogXCJpbml0IGF1dGggZmFpbGVkIPCfmKJcIixcbiAgICAgICAgICBlcnJvckNvZGU6IGVycm9yQ29kZSxcbiAgICAgICAgICBlcnJvckRlc2M6IGVycm9yRGVzY3JpcHRpb24sXG4gICAgICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJbaW5pdEF1dGhdIGZhaWxlZCDwn5iiXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIltpbml0QXV0aF0gZXJyb3I6XCIsIGVycm9yQ29kZSwgZXJyb3JEZXNjcmlwdGlvbik7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWNvdmVyIGJnLWNlbnRlciBoLXNjcmVlbiBiZy1vbmJvYXJkaW5nIHctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtNVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgcHQtNjAgcHgtM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmV5XCI+V2VsY29tZSB0bzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNnhsIHRleHQtd2hpdGVcIj5DaG9wLjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmV5XCI+RXhwbG9yZSB0aGUgbmV3IHdvcmxkIG9mIGZhc2hpb248L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkluaXRBdXRofT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLW1kIHB4LTggcHktM1wiPlxuICAgICAgICAgIExvZ2luIHdpdGggUGFvdGFuZ1xuICAgICAgICAgIDxkaXY+e3N0YXR1cy5pc0xvYWRlZD8gXCJpc0xvYWRlZFwiOlwiRG9uZVwifTwvZGl2PlxuICAgICAgICAgIHsvKiA8YSBocmVmPVwiL2xhbmRpbmdcIj48ZGl2PnRvIGxhbmRpbmc8L2Rpdj48L2E+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW5pdEF1dGgiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIk9uYm9hcmRpbmciLCJyb3V0ZXIiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJpc0xvYWRlZCIsIm9uSW5pdEF1dGgiLCJhdXRob3JpemF0aW9uQ29kZSIsImNvbnNvbGUiLCJsb2ciLCJyZXBsYWNlIiwiZXJyb3JDb2RlIiwiZXJyb3JEZXNjcmlwdGlvbiIsImVycm9yRGVzYyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/onboarding/page.tsx\n"));

/***/ })

});