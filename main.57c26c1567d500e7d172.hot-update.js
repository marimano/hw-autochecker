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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar codeInitPart = \"const result = []\\nconst originalPrompt = window.prompt\\nconst originalAlert = window.alert\";\nvar codeTryCatchPart = \"try {\\n  /* code */\\n}\\ncatch(err) {\\n  if (err.message === 'reask') {\\n    result[j].push('[error, the app re-asks user]')\\n  }\\n  else {\\n    result[j].push('[the app failed]')\\n  }\\n}\";\nvar codeRestoreAndSendPart = \"window.prompt = originalPrompt\\nwindow.alert = originalAlert\\nconst resultsEvent = new CustomEvent('results-ready', { detail: result });\\nwindow.dispatchEvent(resultsEvent)\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  id: 'prime-num',\n  title: 'Prime number',\n  description: ['The user enters a number. Check if it is prime. ', 'A prime number is a whole number, larger than 1 and not having dividers except 1 and itself.'],\n  code: \"\\n    const errorMessage = 'Error message'\\n    const notPrime = 'number is not prime'\\n    const prime = 'number is prime'\\n\\n    const inputs = [{\\n      value: null,\\n      expectedResult: 'Nothing or a message about canceling'\\n    },\\n    {\\n      value: '',\\n      expectedResult: errorMessage\\n    },\\n    {\\n      value: '        ',\\n      expectedResult: errorMessage\\n    },\\n    {\\n      value: '    0     ',\\n      expectedResult: notPrime\\n    },\\n    {\\n      value: '-10',\\n      expectedResult: notPrime\\n    },\\n    {\\n      value: '-7.123',\\n      expectedResult: notPrime\\n    },\\n    {\\n      value: '    1   ',\\n      expectedResult: notPrime\\n    },\\n    {\\n      value: '7.123',\\n      expectedResult: notPrime\\n    },\\n    {\\n      value: ' 2   ',\\n      expectedResult: prime\\n    },\\n    {\\n      value: ' 011 ',\\n      expectedResult: prime\\n    },\\n    {\\n      value: '  100',\\n      expectedResult: notPrime\\n    },\\n    {\\n      value: ' 123456 ',\\n      expectedResult: notPrime\\n    }]\\n    \".concat(codeInitPart, \"\\n\\n    for(let j = 0; j < inputs.length; j++) {\\n      result[j] = [inputs[j]]\\n      window.prompt = (function() {\\n        let asked = false\\n        return () => {\\n          if (asked) {\\n            throw new Error('reask')\\n          }\\n\\n          asked = true\\n          return inputs[j].value\\n        }\\n      })()\\n      window.alert = msg => result[j].push(msg.toString())\\n\\n      \").concat(codeTryCatchPart, \"\\n    }\\n    \").concat(codeRestoreAndSendPart, \"\\n  \")\n}, {\n  id: 'degree-of-3',\n  title: 'Degree of 3',\n  description: ['The user enters a number. Check if the number can be obtained as 3 in some whole degree. ', 'For example numbers 9, 81 can be obtained as they are 3^2 and 3^4, 13 cannot.'],\n  code: \"\\n    const errorMessage = 'Error message'\\n    const cannot = 'number is not 3^n'\\n    const can = 'number is 3^n'\\n\\n    const inputs = [{\\n      value: null,\\n      expectedResult: 'Nothing or a message about canceling'\\n    },\\n    {\\n      value: '',\\n      expectedResult: errorMessage\\n    },\\n    {\\n      value: '        ',\\n      expectedResult: errorMessage\\n    },\\n    {\\n      value: '    0     ',\\n      expectedResult: cannot\\n    },\\n    {\\n      value: '-27',\\n      expectedResult: cannot\\n    },\\n    {\\n      value: '-9.123',\\n      expectedResult: cannot\\n    },\\n    {\\n      value: '    1   ',\\n      expectedResult: can\\n    },\\n    {\\n      value: '9.123',\\n      expectedResult: cannot\\n    },\\n    {\\n      value: ' 009   ',\\n      expectedResult: can\\n    },\\n    {\\n      value: ' 036 ',\\n      expectedResult: cannot\\n    },\\n    {\\n      value: '  243',\\n      expectedResult: can\\n    },\\n    {\\n      value: ' 123456 ',\\n      expectedResult: cannot\\n    }]\\n    \".concat(codeInitPart, \"\\n\\n    for(let j = 0; j < inputs.length; j++) {\\n      result[j] = [inputs[j]]\\n      window.prompt = (function() {\\n        let asked = false\\n        return () => {\\n          if (asked) {\\n            throw new Error('reask')\\n          }\\n\\n          asked = true\\n          return inputs[j].value\\n        }\\n      })()\\n      window.alert = msg => result[j].push(msg.toString())\\n\\n      \").concat(codeTryCatchPart, \"\\n    }\\n    \").concat(codeRestoreAndSendPart, \"\\n  \")\n}]);\n\n//# sourceURL=webpack://hw-autochecker/./src/tasksData.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9d8897fdf6880985ef1a")
/******/ })();
/******/ 
/******/ }
);