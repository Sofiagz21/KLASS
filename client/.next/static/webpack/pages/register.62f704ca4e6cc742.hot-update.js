"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/*PAGINA regiter*/ \nvar _s = $RefreshSig$();\n\nconst Register = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\" \");\n    const [secondName, setSecondName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\" \");\n    const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\" \");\n    const [secondLastName, setSecondLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\" \");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\" \");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\" \");\n    const handleSubmit = (e)=>{\n        /*lo primero que debe hacer es usar el evento o evitar la función predeterminada \r\n        para que la base no se vuelva a cargar porque de forma predeterminada, \r\n        cuando se envía el formulario, la página se recarga*/ e.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jumbotron text-center bg-primary square \",\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sofia\\\\Desktop\\\\KLASS\\\\client\\\\pages\\\\register.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container col-md-4 offset-md-4 pb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-4\",\n                            value: name,\n                            onChange: (e)=>setName(e.target.value),\n                            placeholder: \"Ingresa tu primer nombre\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sofia\\\\Desktop\\\\KLASS\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-4\",\n                            value: lastName,\n                            onChange: (e)=>setLastName(e.target.value),\n                            placeholder: \"Ingresa tu primer apellido\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sofia\\\\Desktop\\\\KLASS\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 34,\n                            columnNumber: 22\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-4\",\n                            value: secondName,\n                            onChange: (e)=>setSecondName(e.target.value),\n                            placeholder: \"Ingresa tu primer apellido\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sofia\\\\Desktop\\\\KLASS\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-4\",\n                            value: secondLastName,\n                            onChange: (e)=>setSecondLastName(e.target.value),\n                            placeholder: \"Ingresa tu segundo apellido\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sofia\\\\Desktop\\\\KLASS\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            className: \"form-control mb-4 p-4\",\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value),\n                            placeholder: \"Ingresa tu email\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sofia\\\\Desktop\\\\KLASS\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            className: \"form-control mb-4 p-4\",\n                            value: password,\n                            onChange: (e)=>setPassword(e.target.value),\n                            placeholder: \"Ingresa tu contrase\\xf1a\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sofia\\\\Desktop\\\\KLASS\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Sofia\\\\Desktop\\\\KLASS\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sofia\\\\Desktop\\\\KLASS\\\\client\\\\pages\\\\register.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Register, \"ciiGJgERXTQrcH55wlFViLPwQDk=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdCQUFnQjs7QUFDYztBQUU5QixNQUFNQyxXQUFVLElBQUk7O0lBQ2hCLE1BQU0sQ0FBQ0MsTUFBS0MsUUFBUSxHQUFFSCwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNJLFlBQVdDLGNBQWMsR0FBRUwsK0NBQVFBLENBQUM7SUFFM0MsTUFBTSxDQUFDTSxVQUFTQyxZQUFZLEdBQUVQLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1EsZ0JBQWVDLGtCQUFrQixHQUFFVCwrQ0FBUUEsQ0FBQztJQUVuRCxNQUFNLENBQUNVLE9BQU1DLFNBQVMsR0FBRVgsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDWSxVQUFTQyxZQUFZLEdBQUViLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1jLGVBQWNDLENBQUFBLElBQUk7UUFDcEI7OzJEQUVtRCxHQUNuREEsRUFBRUMsY0FBYztJQUNwQjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQTJDOzs7Ozs7MEJBQ3pELDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWCw0RUFBQ0U7b0JBQUtDLFVBQVVQOztzQ0FDWiw4REFBQ1E7NEJBQ0dDLE1BQUs7NEJBQ0xMLFdBQVU7NEJBQ1ZNLE9BQU90Qjs0QkFDUHVCLFVBQVUsQ0FBQ1YsSUFBS1osUUFBUVksRUFBRVcsTUFBTSxDQUFDRixLQUFLOzRCQUN0Q0csYUFBWTs0QkFDWkMsUUFBUTs7Ozs7O3NDQUVYLDhEQUFDTjs0QkFDRUMsTUFBSzs0QkFDTEwsV0FBVTs0QkFDVk0sT0FBT2xCOzRCQUNQbUIsVUFBVSxDQUFDVixJQUFLUixZQUFZUSxFQUFFVyxNQUFNLENBQUNGLEtBQUs7NEJBQzFDRyxhQUFZOzRCQUNaQyxRQUFROzs7Ozs7c0NBRVosOERBQUNOOzRCQUNHQyxNQUFLOzRCQUNMTCxXQUFVOzRCQUNWTSxPQUFPcEI7NEJBQ1BxQixVQUFVLENBQUNWLElBQUtWLGNBQWNVLEVBQUVXLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDNUNHLGFBQVk7NEJBQ1pDLFFBQVE7Ozs7OztzQ0FFWiw4REFBQ047NEJBQ0dDLE1BQUs7NEJBQ0xMLFdBQVU7NEJBQ1ZNLE9BQU9oQjs0QkFDUGlCLFVBQVUsQ0FBQ1YsSUFBS04sa0JBQWtCTSxFQUFFVyxNQUFNLENBQUNGLEtBQUs7NEJBQ2hERyxhQUFZOzRCQUNaQyxRQUFROzs7Ozs7c0NBRVosOERBQUNOOzRCQUNHQyxNQUFLOzRCQUNMTCxXQUFVOzRCQUNWTSxPQUFPZDs0QkFDUGUsVUFBVSxDQUFDVixJQUFLSixTQUFTSSxFQUFFVyxNQUFNLENBQUNGLEtBQUs7NEJBQ3ZDRyxhQUFZOzRCQUNaQyxRQUFROzs7Ozs7c0NBRVosOERBQUNOOzRCQUNHQyxNQUFLOzRCQUNMTCxXQUFVOzRCQUNWTSxPQUFPWjs0QkFDUGEsVUFBVSxDQUFDVixJQUFLRixZQUFZRSxFQUFFVyxNQUFNLENBQUNGLEtBQUs7NEJBQzFDRyxhQUFZOzRCQUNaQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWhDO0dBOUVNM0I7S0FBQUE7QUFnRk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanM/YTA5NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlBBR0lOQSByZWdpdGVyKi9cclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBSZWdpc3RlciA9KCk9PntcclxuICAgIGNvbnN0IFtuYW1lLHNldE5hbWVdPSB1c2VTdGF0ZShcIiBcIik7XHJcbiAgICBjb25zdCBbc2Vjb25kTmFtZSxzZXRTZWNvbmROYW1lXT0gdXNlU3RhdGUoXCIgXCIpO1xyXG4gICAgICAgIFxyXG4gICAgY29uc3QgW2xhc3ROYW1lLHNldExhc3ROYW1lXT0gdXNlU3RhdGUoXCIgXCIpO1xyXG4gICAgY29uc3QgW3NlY29uZExhc3ROYW1lLHNldFNlY29uZExhc3ROYW1lXT0gdXNlU3RhdGUoXCIgXCIpO1xyXG4gICAgXHJcbiAgICBjb25zdCBbZW1haWwsc2V0RW1haWxdPSB1c2VTdGF0ZShcIiBcIik7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsc2V0UGFzc3dvcmRdPSB1c2VTdGF0ZShcIiBcIik7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdD0gZSA9PntcclxuICAgICAgICAvKmxvIHByaW1lcm8gcXVlIGRlYmUgaGFjZXIgZXMgdXNhciBlbCBldmVudG8gbyBldml0YXIgbGEgZnVuY2nDs24gcHJlZGV0ZXJtaW5hZGEgXHJcbiAgICAgICAgcGFyYSBxdWUgbGEgYmFzZSBubyBzZSB2dWVsdmEgYSBjYXJnYXIgcG9ycXVlIGRlIGZvcm1hIHByZWRldGVybWluYWRhLCBcclxuICAgICAgICBjdWFuZG8gc2UgZW52w61hIGVsIGZvcm11bGFyaW8sIGxhIHDDoWdpbmEgc2UgcmVjYXJnYSovIFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwianVtYm90cm9uIHRleHQtY2VudGVyIGJnLXByaW1hcnkgc3F1YXJlIFwiPlJlZ2lzdGVyPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29sLW1kLTQgb2Zmc2V0LW1kLTQgcGItNVwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZ3Jlc2EgdHUgcHJpbWVyIG5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhc3ROYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IHNldExhc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5ncmVzYSB0dSBwcmltZXIgYXBlbGxpZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlY29uZE5hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gc2V0U2Vjb25kTmFtZShlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZ3Jlc2EgdHUgcHJpbWVyIGFwZWxsaWRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC00XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWNvbmRMYXN0TmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiBzZXRTZWNvbmRMYXN0TmFtZShlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZ3Jlc2EgdHUgc2VndW5kbyBhcGVsbGlkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5ncmVzYSB0dSBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5ncmVzYSB0dSBjb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUmVnaXN0ZXIiLCJuYW1lIiwic2V0TmFtZSIsInNlY29uZE5hbWUiLCJzZXRTZWNvbmROYW1lIiwibGFzdE5hbWUiLCJzZXRMYXN0TmFtZSIsInNlY29uZExhc3ROYW1lIiwic2V0U2Vjb25kTGFzdE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImgxIiwiY2xhc3NOYW1lIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/register.js\n"));

/***/ })

});