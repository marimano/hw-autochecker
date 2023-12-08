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

/***/ "./src/tasksData.js":
/*!**************************!*\
  !*** ./src/tasksData.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  id: 'prime-num',\n  title: 'Prime number',\n  description: 'The user enters a number. Check if it is prime. A prime number is a whole number, larger than 1 and not having dividers except 1 and itself.',\n  code: \"\\n  const errorMessage = 'Error message'\\nconst notPrime = 'number is not prime'\\nconst prime = 'number is prime'\\n\\nconst primeNumInputs = [{\\n  value: null,\\n  expectedResult: 'Nothing or a message about canceling'\\n},\\n{\\n  value: '',\\n  expectedResult: errorMessage\\n},\\n{\\n  value: '        ',\\n  expectedResult: errorMessage\\n},\\n{\\n  value: '    0     ',\\n  expectedResult: notPrime\\n},\\n{\\n  value: '-10',\\n  expectedResult: notPrime\\n},\\n{\\n  value: '-7.123',\\n  expectedResult: notPrime\\n},\\n{\\n  value: '    1   ',\\n  expectedResult: notPrime\\n},\\n{\\n  value: '7.123',\\n  expectedResult: notPrime\\n},\\n{\\n  value: ' 2   ',\\n  expectedResult: prime\\n},\\n{\\n  value: ' 011 ',\\n  expectedResult: prime\\n},\\n{\\n  value: '  100',\\n  expectedResult: notPrime\\n},\\n{\\n  value: ' 123456 ',\\n  expectedResult: notPrime\\n}]\\nconst result = []\\nconst originalPrompt = window.prompt\\nconst originalAlert = window.alert\\n\\nfor(let j = 0; j < primeNumInputs.length; j++) {\\n  result[j] = [primeNumInputs[j]]\\n  window.prompt = (function() {\\n    let asked = false\\n    return () => {\\n      if (asked) {\\n        throw new Error('reask')\\n      }\\n\\n      asked = true\\n      return primeNumInputs[j].value\\n    }\\n  })()\\n  window.alert = msg => result[j].push(msg.toString())\\n\\n  try {\\n    /* code */\\n  }\\n  catch(err) {\\n    if (err.message === 'reask') {\\n      result[j].push('[error, the app re-asks user]')\\n    }\\n    else {\\n      result[j].push('[the app failed]')\\n    }\\n  }\\n}\\nwindow.prompt = originalPrompt\\nwindow.alert = originalAlert\\nconst resultsEvent = new CustomEvent('results-ready', { detail: result });\\nwindow.dispatchEvent(resultsEvent)\\n  \"\n}]);\nvar pow3Inputs = [null, '', '        ', '   0   ', '-10', '-7.123', '   1', '9.123', '  9', '36', '243', '123456'];\n\n//# sourceURL=webpack://hw-autochecker/./src/tasksData.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e4128f2d2b70bb2909b8")
/******/ })();
/******/ 
/******/ }
);