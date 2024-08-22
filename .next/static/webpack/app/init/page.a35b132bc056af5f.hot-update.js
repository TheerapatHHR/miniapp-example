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

/***/ "(app-pages-browser)/./src/app/init/page.tsx":
/*!*******************************!*\
  !*** ./src/app/init/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Init; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _jsBridge_initAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/jsBridge/initAuth */ \"(app-pages-browser)/./src/jsBridge/initAuth.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Init() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        status: \"starting to init auth...\",\n        isLoaded: true\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        (0,_jsBridge_initAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(//client id\n        // \"ff0f19c7-7440-4e92-bdbf-8c49b641608d\",\n        // \"\",\n        //callback function for success\n        (authorizationCode)=>{\n            /*\n          Logic to handle the authorization code received from the native app\n          after successful authentication\n        */ //example\n            setStatus({\n                status: \"init auth success \\uD83C\\uDF89\",\n                isLoaded: false\n            });\n            console.log(\"[initAuth] success \\uD83C\\uDF89\");\n            console.log(\"[initAuth] authCode\", authorizationCode);\n            router.replace(\"/?authCode=\".concat(authorizationCode));\n        }, //callback function for error\n        (errorCode, errorDescription)=>{\n            /*\n          Logic to handle the error received from the native app \n          after failed authentication\n        */ //example\n            setStatus({\n                status: \"init auth failed \\uD83D\\uDE22\",\n                errorCode: errorCode,\n                errorDesc: errorDescription,\n                isLoaded: false\n            });\n            console.log(\"[initAuth] failed \\uD83D\\uDE22\");\n            console.log(\"[initAuth] error:\", errorCode, errorDescription);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex flex-col justify-center items-center\",\n        children: [\n            status.isLoaded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"animate-spin\",\n                src: \"/assets/icons/spinner.svg\",\n                width: 16,\n                height: 16,\n                alt: \"loading\"\n            }, void 0, false, {\n                fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/init/page.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"pt-[32px]\",\n                children: \"Authorization\"\n            }, void 0, false, {\n                fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/init/page.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"pt-[32px]\",\n                children: status.status\n            }, void 0, false, {\n                fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/init/page.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            (status.errorCode || status.errorDesc) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-red-500\",\n                children: [\n                    status.errorCode,\n                    \":\",\n                    status.errorDesc\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/init/page.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/a667403/work/oapiXminiapp/miniapp-example/src/app/init/page.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(Init, \"d2nIbARWVary2ny84K1O7MtPL8I=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Init;\nvar _c;\n$RefreshReg$(_c, \"Init\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaW5pdC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDMkM7QUFDWjtBQUNhO0FBQ0E7QUFTN0IsU0FBU0s7O0lBQ3RCLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNLENBQUNLLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQVM7UUFDM0NHLFFBQVE7UUFDUkUsVUFBVTtJQUNaO0lBRUFOLGdEQUFTQSxDQUFDO1FBQ1JILDhEQUFRQSxDQUNOLFdBQVc7UUFDWCwwQ0FBMEM7UUFDMUMsTUFBTTtRQUNOLCtCQUErQjtRQUMvQixDQUFDVTtZQUNDOzs7UUFHQSxHQUVBLFNBQVM7WUFDVEYsVUFBVTtnQkFDUkQsUUFBUTtnQkFDUkUsVUFBVTtZQUNaO1lBQ0FFLFFBQVFDLEdBQUcsQ0FBQztZQUNaRCxRQUFRQyxHQUFHLENBQUMsdUJBQXVCRjtZQUNuQ0osT0FBT08sT0FBTyxDQUFDLGNBQWdDLE9BQWxCSDtRQUMvQixHQUNBLDZCQUE2QjtRQUM3QixDQUFDSSxXQUFXQztZQUNWOzs7UUFHQSxHQUVBLFNBQVM7WUFDVFAsVUFBVTtnQkFDUkQsUUFBUTtnQkFDUk8sV0FBV0E7Z0JBQ1hFLFdBQVdEO2dCQUNYTixVQUFVO1lBQ1o7WUFDQUUsUUFBUUMsR0FBRyxDQUFDO1lBQ1pELFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJFLFdBQVdDO1FBQzlDO0lBRUosR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7O1lBQ1pYLE9BQU9FLFFBQVEsaUJBQ2QsOERBQUNSLGtEQUFLQTtnQkFDSmlCLFdBQVU7Z0JBQ1ZDLEtBQUs7Z0JBQ0xDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLEtBQUk7Ozs7O3VCQUVKOzBCQUNKLDhEQUFDQztnQkFBRUwsV0FBVTswQkFBWTs7Ozs7OzBCQUN6Qiw4REFBQ0s7Z0JBQUVMLFdBQVU7MEJBQWFYLE9BQU9BLE1BQU07Ozs7OztZQUNyQ0EsQ0FBQUEsT0FBT08sU0FBUyxJQUFJUCxPQUFPUyxTQUFTLG1CQUNwQyw4REFBQ087Z0JBQUVMLFdBQVU7O29CQUNWWCxPQUFPTyxTQUFTO29CQUFDO29CQUFFUCxPQUFPUyxTQUFTOzs7Ozs7Ozs7Ozs7O0FBSzlDO0dBcEV3Qlg7O1FBQ1BILHNEQUFTQTs7O0tBREZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvaW5pdC9wYWdlLnRzeD9iOTZiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IGluaXRBdXRoIGZyb20gXCJAL2pzQnJpZGdlL2luaXRBdXRoXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBzdGF0dXMgPSB7XG4gIHN0YXR1czogc3RyaW5nO1xuICBlcnJvckNvZGU/OiBzdHJpbmc7XG4gIGVycm9yRGVzYz86IHN0cmluZztcbiAgaXNMb2FkZWQ6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbml0KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPHN0YXR1cz4oe1xuICAgIHN0YXR1czogXCJzdGFydGluZyB0byBpbml0IGF1dGguLi5cIixcbiAgICBpc0xvYWRlZDogdHJ1ZSxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbml0QXV0aChcbiAgICAgIC8vY2xpZW50IGlkXG4gICAgICAvLyBcImZmMGYxOWM3LTc0NDAtNGU5Mi1iZGJmLThjNDliNjQxNjA4ZFwiLFxuICAgICAgLy8gXCJcIixcbiAgICAgIC8vY2FsbGJhY2sgZnVuY3Rpb24gZm9yIHN1Y2Nlc3NcbiAgICAgIChhdXRob3JpemF0aW9uQ29kZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIC8qXG4gICAgICAgICAgTG9naWMgdG8gaGFuZGxlIHRoZSBhdXRob3JpemF0aW9uIGNvZGUgcmVjZWl2ZWQgZnJvbSB0aGUgbmF0aXZlIGFwcFxuICAgICAgICAgIGFmdGVyIHN1Y2Nlc3NmdWwgYXV0aGVudGljYXRpb25cbiAgICAgICAgKi9cblxuICAgICAgICAvL2V4YW1wbGVcbiAgICAgICAgc2V0U3RhdHVzKHtcbiAgICAgICAgICBzdGF0dXM6IFwiaW5pdCBhdXRoIHN1Y2Nlc3Mg8J+OiVwiLFxuICAgICAgICAgIGlzTG9hZGVkOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW2luaXRBdXRoXSBzdWNjZXNzIPCfjolcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW2luaXRBdXRoXSBhdXRoQ29kZVwiLCBhdXRob3JpemF0aW9uQ29kZSk7XG4gICAgICAgIHJvdXRlci5yZXBsYWNlKGAvP2F1dGhDb2RlPSR7YXV0aG9yaXphdGlvbkNvZGV9YCk7XG4gICAgICB9LFxuICAgICAgLy9jYWxsYmFjayBmdW5jdGlvbiBmb3IgZXJyb3JcbiAgICAgIChlcnJvckNvZGUsIGVycm9yRGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgLypcbiAgICAgICAgICBMb2dpYyB0byBoYW5kbGUgdGhlIGVycm9yIHJlY2VpdmVkIGZyb20gdGhlIG5hdGl2ZSBhcHAgXG4gICAgICAgICAgYWZ0ZXIgZmFpbGVkIGF1dGhlbnRpY2F0aW9uXG4gICAgICAgICovXG5cbiAgICAgICAgLy9leGFtcGxlXG4gICAgICAgIHNldFN0YXR1cyh7XG4gICAgICAgICAgc3RhdHVzOiBcImluaXQgYXV0aCBmYWlsZWQg8J+YolwiLFxuICAgICAgICAgIGVycm9yQ29kZTogZXJyb3JDb2RlLFxuICAgICAgICAgIGVycm9yRGVzYzogZXJyb3JEZXNjcmlwdGlvbixcbiAgICAgICAgICBpc0xvYWRlZDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIltpbml0QXV0aF0gZmFpbGVkIPCfmKJcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW2luaXRBdXRoXSBlcnJvcjpcIiwgZXJyb3JDb2RlLCBlcnJvckRlc2NyaXB0aW9uKTtcbiAgICAgIH1cbiAgICApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAge3N0YXR1cy5pc0xvYWRlZCA/IChcbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluXCJcbiAgICAgICAgICBzcmM9e1wiL2Fzc2V0cy9pY29ucy9zcGlubmVyLnN2Z1wifVxuICAgICAgICAgIHdpZHRoPXsxNn1cbiAgICAgICAgICBoZWlnaHQ9ezE2fVxuICAgICAgICAgIGFsdD1cImxvYWRpbmdcIlxuICAgICAgICAvPlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8cCBjbGFzc05hbWU9XCJwdC1bMzJweF1cIj5BdXRob3JpemF0aW9uPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwicHQtWzMycHhdXCI+e3N0YXR1cy5zdGF0dXN9PC9wPlxuICAgICAgeyhzdGF0dXMuZXJyb3JDb2RlIHx8IHN0YXR1cy5lcnJvckRlc2MpICYmIChcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+XG4gICAgICAgICAge3N0YXR1cy5lcnJvckNvZGV9OntzdGF0dXMuZXJyb3JEZXNjfVxuICAgICAgICA8L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImluaXRBdXRoIiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkluaXQiLCJyb3V0ZXIiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJpc0xvYWRlZCIsImF1dGhvcml6YXRpb25Db2RlIiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJlcnJvckNvZGUiLCJlcnJvckRlc2NyaXB0aW9uIiwiZXJyb3JEZXNjIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/init/page.tsx\n"));

/***/ })

});