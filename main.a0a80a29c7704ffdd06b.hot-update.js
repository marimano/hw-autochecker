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

/***/ "./src/components/CommentGenerator.jsx":
/*!*********************************************!*\
  !*** ./src/components/CommentGenerator.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _commentGenerator_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentGenerator.styles.scss */ \"./src/components/commentGenerator.styles.scss\");\n\n\nvar criteriaList = [{\n  id: 'repo',\n  caption: 'ДЗ в окремому репозиторії'\n}, {\n  id: 'requirements',\n  caption: 'Всі умови задачі виконані (програма робить те, що треба)'\n}, {\n  id: 'console-errors',\n  caption: 'Немає помилок у консолі'\n}, {\n  id: 'validation',\n  caption: 'Зроблена валідація і враховані всі варіанти вхідних даних'\n}, {\n  id: 'non-strict-equations',\n  caption: 'Використовуються тільки строгі рівності'\n}, {\n  id: 'const',\n  caption: 'Використовуються const скрізь, де треба',\n  hasInputTextField: true\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var autoValidate = function autoValidate(event) {};\n  var generate = function generate(event) {};\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"comment-generator\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"source\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"\\u0423\\u043C\\u0456\\u0441\\u0442 \\u0434\\u043E\\u043C\\u0430\\u0448\\u043A\\u0438:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"textarea\", {\n    className: \"hw-js-text\",\n    placeholder: \"JS\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    onClick: autoValidate\n  }, \"\\u0417\\u0430\\u043F\\u0443\\u0441\\u0442\\u0438\\u0442\\u0438 \\u0430\\u0432\\u0442\\u043E\\u043F\\u0435\\u0440\\u0435\\u0432\\u0456\\u0440\\u043A\\u0443\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"checkbox\",\n    id: \"reset-input\",\n    checked: \"true\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    \"for\": \"reset-input\"\n  }, \"\\u041E\\u0447\\u0438\\u0441\\u0442\\u0438\\u0442\\u0438 \\u0432\\u0441\\u0435\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"results\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"\\u0420\\u0435\\u0437\\u0443\\u043B\\u044C\\u0442\\u0430\\u0442\\u0438:\"), criteriaList.map(function (_ref) {\n    var id = _ref.id,\n      caption = _ref.caption,\n      hasInputTextField = _ref.hasInputTextField;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: id,\n      className: 'criteria ' + id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"criteria-row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n      type: \"checkbox\",\n      id: id + '-input',\n      defaultChecked: true\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n      \"for\": id + '-input'\n    }, caption), hasInputTextField && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n      type: \"number\",\n      min: \"0\",\n      max: \"100\",\n      step: \"1\",\n      value: \"0\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"textarea\", {\n      placeholder: \"\\u041A\\u043E\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\"\n    }));\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    onClick: generate\n  }, \"\\u0417\\u0433\\u0435\\u043D\\u0435\\u0440\\u0443\\u0432\\u0430\\u0442\\u0438 \\u0437\\u0430\\u0433\\u0430\\u043B\\u044C\\u043D\\u0438\\u0439 \\u043A\\u043E\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"results-text\"\n  }))));\n});\n\n//# sourceURL=webpack://hw-autochecker/./src/components/CommentGenerator.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f4bad97b4b60b22f2819")
/******/ })();
/******/ 
/******/ }
);