"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatehw_autochecker"]("main",{

/***/ "./src/Home.jsx":
/*!**********************!*\
  !*** ./src/Home.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tasksData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksData */ \"./src/tasksData.js\");\n/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorBoundary */ \"./src/ErrorBoundary.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n    _useState2 = _slicedToArray(_useState, 2),\n    selectedTaskId = _useState2[0],\n    setSelectedTaskId = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState4 = _slicedToArray(_useState3, 2),\n    codeToTest = _useState4[0],\n    setCodeToTest = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState6 = _slicedToArray(_useState5, 2),\n    isRun = _useState6[0],\n    setIsRun = _useState6[1];\n  var selectedTask = selectedTaskId && _tasksData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(function (t) {\n    return t.id === selectedTaskId;\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"select\", {\n    value: selectedTaskId,\n    onChange: function onChange(e) {\n      return setSelectedTaskId(e.target.value) && setCodeToTest('') && setIsRun(false);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: null\n  }, \"Choose a task to check:\"), _tasksData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(function (_ref) {\n    var id = _ref.id,\n      title = _ref.title;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      key: id,\n      value: id\n    }, title);\n  })), selectedTask && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, selectedTask.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"textarea\", {\n    value: codeToTest,\n    onChange: function onChange(e) {\n      return setCodeToTest(e.target.value) && setIsRun(false);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    disabled: !codeToTest.trim(),\n    onClick: function onClick() {\n      return setIsRun(true);\n    }\n  }, \"Run checker\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ResultComponent, {\n    selectedTask: selectedTask,\n    codeToTest: codeToTest,\n    isRun: isRun\n  }))));\n});\nvar ResultComponent = function ResultComponent(_ref2) {\n  var selectedTask = _ref2.selectedTask,\n    codeToTest = _ref2.codeToTest,\n    isRun = _ref2.isRun;\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n    _useState8 = _slicedToArray(_useState7, 2),\n    error = _useState8[0],\n    setError = _useState8[1];\n  var resultRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setError(null);\n    if (!isRun) {\n      return;\n    }\n    var scriptEl = document.createElement('script');\n    scriptEl.innerHTML = selectedTask.code.replace('/* code */', codeToTest);\n    scriptEl.onerror = function () {\n      debugger;\n      setError('Bad code, fix it and try again');\n    };\n    scriptEl.onload = function () {\n      debugger;\n    };\n    try {\n      resultRef.current.parentElement.append(scriptEl);\n      setError(null);\n    } catch (err) {\n      setError('Bad code, fix it and try again');\n    }\n    return function () {\n      return resultRef.current.parentElement.remove(scriptEl);\n    };\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"hw-result\",\n    ref: resultRef\n  }, error);\n};\n\n//# sourceURL=webpack://hw-autochecker/./src/Home.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("061459705cc654a1b4df")
/******/ })();
/******/ 
/******/ }
);