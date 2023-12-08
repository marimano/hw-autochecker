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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tasksData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksData */ \"./src/tasksData.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n    _useState2 = _slicedToArray(_useState, 2),\n    selectedTaskId = _useState2[0],\n    setSelectedTaskId = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState4 = _slicedToArray(_useState3, 2),\n    codeToTest = _useState4[0],\n    setCodeToTest = _useState4[1];\n  var scriptRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  var selectedTask = selectedTaskId && _tasksData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(function (t) {\n    return t.id === selectedTaskId;\n  });\n  var runChecker = function runChecker() {\n    scriptRef.current.innerHTML = selectedTask.code.replace('/* code */', codeToTest);\n    var scriptEl = document.createElement('script');\n    scriptEl.innerHTML = selectedTask.code.replace('/* code */', codeToTest);\n    scriptRef.current.parentElement.append(scriptEl);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"select\", {\n    value: selectedTaskId,\n    onChange: function onChange(e) {\n      return setSelectedTaskId(e.target.value) && setCodeToTest('');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n    value: null\n  }, \"Choose a task to check:\"), _tasksData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(function (_ref) {\n    var id = _ref.id,\n      title = _ref.title;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      key: id,\n      value: id\n    }, title);\n  })), selectedTask && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, selectedTask.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"textarea\", {\n    value: codeToTest,\n    onChange: function onChange(e) {\n      return setCodeToTest(e.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    disabled: !codeToTest.trim(),\n    onClick: runChecker\n  }, \"Run checker\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"script\", {\n    ref: scriptRef\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"hw-result\"\n  })));\n});\n\n//# sourceURL=webpack://hw-autochecker/./src/Home.jsx?");

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home */ \"./src/Home.jsx\");\n\n\n\n\nvar rootEl = document.getElementById('root');\nvar root = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(rootEl);\nroot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n\n//# sourceURL=webpack://hw-autochecker/./src/index.jsx?");

/***/ }),

/***/ "./src/tasksData.js":
/*!**************************!*\
  !*** ./src/tasksData.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  id: 'prime-num',\n  title: 'Prime number',\n  description: 'The user enters a number. Check if it is prime. A prime number is a whole number, larger than 1 and not having dividers except 1 and itself.',\n  code: \"\\n  const errorMessage = 'Error message'\\nconst notPrime = 'number is not prime'\\nconst prime = 'number is prime'\\n\\nconst primeNumInputs = [{\\n  value: null,\\n  expectedResult: 'Nothing or a message about canceling'\\n},\\n{\\n  value: '',\\n  expectedResult: errorMessage\\n},\\n{\\n  value: '        ',\\n  expectedResult: errorMessage\\n},\\n{\\n  value: '    0     ',\\n  expectedResult: notPrime\\n},\\n{\\n  value: '-10',\\n  expectedResult: notPrime\\n},\\n{\\n  value: '-7.123',\\n  expectedResult: notPrime\\n},\\n{\\n  value: '    1   ',\\n  expectedResult: notPrime\\n},\\n{\\n  value: '7.123',\\n  expectedResult: notPrime\\n},\\n{\\n  value: ' 2   ',\\n  expectedResult: prime\\n},\\n{\\n  value: ' 011 ',\\n  expectedResult: prime\\n},\\n{\\n  value: '  100',\\n  expectedResult: notPrime\\n},\\n{\\n  value: ' 123456 ',\\n  expectedResult: notPrime\\n}]\\nconst result = []\\nconst originalPrompt = window.prompt\\nconst originalAlert = window.alert\\n\\nfor(let j = 0; j < primeNumInputs.length; j++) {\\n  result[j] = [primeNumInputs[j]]\\n  window.prompt = (function() {\\n    let asked = false\\n    return () => {\\n      if (asked) {\\n        throw new Error('reask')\\n      }\\n\\n      asked = true\\n      return primeNumInputs[j].value\\n    }\\n  })()\\n  window.alert = msg => result[j].push(msg.toString())\\n\\n  try {\\n    /* code */\\n  }\\n  catch(err) {\\n    if (err.message === 'reask') {\\n      result[j].push('[error, the app re-asks user]')\\n    }\\n    else {\\n      result[j].push('[the app failed]')\\n    }\\n  }\\n}\\nwindow.prompt = originalPrompt\\nwindow.alert = originalAlert\\nconst resultMessage = result.reduce((prevMessage, [{ value, expectedResult }, ...actualResults]) => {\\n  return prevMessage + `<tr><td><pre>${JSON.stringify(value)}</pre></td>` +\\n    `<td>${expectedResult}</td>` +\\n    `<td>${actualResults.length ? actualResults.join('<br>') : '[nothing shown in alert]'}</td></tr>`\\n}, '<table>') + '</table>'\\ndocument.querySelector('.hw-result').innerHTML = resultMessage\\n  \"\n}]);\nvar pow3Inputs = [null, '', '        ', '   0   ', '-10', '-7.123', '   1', '9.123', '  9', '36', '243', '123456'];\n\n//# sourceURL=webpack://hw-autochecker/./src/tasksData.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3239332b2f02a84f3b4b")
/******/ })();
/******/ 
/******/ }
);