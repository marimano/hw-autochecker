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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _commentGenerator_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentGenerator.styles.scss */ \"./src/components/commentGenerator.styles.scss\");\n/* harmony import */ var _regExpCodeChecker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../regExpCodeChecker */ \"./src/regExpCodeChecker.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar criteriaList = [{\n  id: 'repo',\n  caption: 'ДЗ в окремому репозиторії'\n}, {\n  id: 'requirements',\n  caption: 'Всі умови задачі виконані (програма робить те, що треба)'\n}, {\n  id: 'console-errors',\n  caption: 'Немає помилок у консолі'\n}, {\n  id: 'validation',\n  caption: 'Зроблена валідація і враховані всі варіанти вхідних даних'\n}, {\n  id: 'non-strict-equations',\n  caption: 'Використовуються тільки строгі рівності'\n}, {\n  id: 'const',\n  caption: 'Використовуються const скрізь, де треба',\n  hasInputNumField: true\n}];\nvar fallbackCopyTextToClipboard = function fallbackCopyTextToClipboard(text) {\n  var textArea = document.createElement(\"textarea\");\n  textArea.value = text;\n\n  // Avoid scrolling to bottom\n  textArea.style.top = \"0\";\n  textArea.style.left = \"0\";\n  textArea.style.position = \"fixed\";\n  document.body.appendChild(textArea);\n  textArea.focus();\n  textArea.select();\n  try {\n    var isSuccessful = document.execCommand('copy');\n    var msg = isSuccessful ? 'successful' : 'unsuccessful';\n    console.log('Fallback: Copying text command was ' + msg);\n  } catch (err) {\n    console.error('Fallback: Oops, unable to copy', err);\n  }\n  document.body.removeChild(textArea);\n};\nvar copyTextToClipboard = function copyTextToClipboard(text) {\n  if (!navigator.clipboard) {\n    fallbackCopyTextToClipboard(text);\n    return;\n  }\n  navigator.clipboard.writeText(text).then(function () {\n    console.log('Async: Copying to clipboard was successful!');\n  }, function (err) {\n    console.error('Async: Could not copy text: ', err);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n    _useState2 = _slicedToArray(_useState, 2),\n    isReset = _useState2[0],\n    setIsReset = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState4 = _slicedToArray(_useState3, 2),\n    jsCodeToValidate = _useState4[0],\n    setJsCodeToValidate = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState6 = _slicedToArray(_useState5, 2),\n    resultsText = _useState6[0],\n    setResultsText = _useState6[1];\n  var criteriaWithState = criteriaList.map(function (criteria) {\n    return _objectSpread(_objectSpread({}, criteria), {}, {\n      checkedState: (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      commentState: (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      numState: criteria.hasInputNumField && (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0)\n    });\n  });\n  var autoValidate = function autoValidate() {\n    if (isReset) {\n      criteriaWithState.forEach(function (_ref) {\n        var checkedState = _ref.checkedState,\n          commentState = _ref.commentState;\n        var _checkedState = _slicedToArray(checkedState, 2),\n          setIsChecked = _checkedState[1];\n        setIsChecked(true);\n        var _commentState = _slicedToArray(commentState, 2),\n          setComment = _commentState[1];\n        setComment('');\n      });\n      setResultsText('');\n    }\n    var _criteriaWithState$fi = criteriaWithState.find(function (_ref2) {\n        var id = _ref2.id;\n        return id === 'non-strict-equations';\n      }),\n      _criteriaWithState$fi2 = _slicedToArray(_criteriaWithState$fi.checkedState, 2),\n      setIsStrict = _criteriaWithState$fi2[1];\n    setIsStrict(!(0,_regExpCodeChecker__WEBPACK_IMPORTED_MODULE_2__.hasNonStrictEquality)(jsCodeToValidate));\n    var notReassignedLets = (0,_regExpCodeChecker__WEBPACK_IMPORTED_MODULE_2__.getNotReassignedLets)(jsCodeToValidate);\n    var _criteriaWithState$fi3 = criteriaWithState.find(function (_ref3) {\n        var id = _ref3.id;\n        return id === 'const';\n      }),\n      _criteriaWithState$fi4 = _slicedToArray(_criteriaWithState$fi3.checkedState, 2),\n      setIsConstChecked = _criteriaWithState$fi4[1],\n      _criteriaWithState$fi5 = _slicedToArray(_criteriaWithState$fi3.commentState, 2),\n      setConstComment = _criteriaWithState$fi5[1],\n      _criteriaWithState$fi6 = _slicedToArray(_criteriaWithState$fi3.numState, 2),\n      setLetNumber = _criteriaWithState$fi6[1];\n    setLetNumber(notReassignedLets.length);\n    setConstComment(notReassignedLets.join(', '));\n    setIsConstChecked(!notReassignedLets.length);\n  };\n  var generate = function generate() {\n    var message = '';\n    criteriaWithState.forEach(function (_ref4) {\n      var _ref4$checkedState = _slicedToArray(_ref4.checkedState, 1),\n        isOk = _ref4$checkedState[0],\n        _ref4$commentState = _slicedToArray(_ref4.commentState, 1),\n        comment = _ref4$commentState[0],\n        caption = _ref4.caption;\n      message += \"- \".concat(caption, \": \").concat(isOk ? 'Так' : 'Ні', \"\\n\");\n      if (comment) {\n        message += comment + '\\n';\n      }\n    });\n    setResultsText(message);\n    copyTextToClipboard(message);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"comment-generator\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"source\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"HW code:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"textarea\", {\n    className: \"hw-js-text\",\n    placeholder: \"JS\",\n    value: jsCodeToValidate,\n    onChange: function onChange(e) {\n      return setJsCodeToValidate(e.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    onClick: autoValidate\n  }, \"Run syntax check\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"checkbox\",\n    id: \"reset-input\",\n    checked: isReset,\n    onChange: function onChange(e) {\n      return setIsReset(e.target.checked);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"reset-input\"\n  }, \"Clear all\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"results\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Results:\"), criteriaWithState.map(function (_ref5) {\n    var id = _ref5.id,\n      caption = _ref5.caption,\n      hasInputNumField = _ref5.hasInputNumField,\n      checkedState = _ref5.checkedState,\n      commentState = _ref5.commentState;\n    var _checkedState2 = _slicedToArray(checkedState, 2),\n      isChecked = _checkedState2[0],\n      setIsChecked = _checkedState2[1];\n    var _commentState2 = _slicedToArray(commentState, 2),\n      comment = _commentState2[0],\n      setComment = _commentState2[1];\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: id,\n      className: 'criteria ' + id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"criteria-row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n      type: \"checkbox\",\n      id: id + '-input',\n      checked: isChecked,\n      onChange: function onChange(e) {\n        return setIsChecked(e.target.checked);\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n      htmlFor: id + '-input'\n    }, caption), hasInputNumField && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n      type: \"number\",\n      min: \"0\",\n      max: \"100\",\n      step: \"1\",\n      defaultValue: \"0\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"textarea\", {\n      placeholder: \"\\u041A\\u043E\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\",\n      value: comment,\n      onChange: function onChange(e) {\n        return setComment(e.target.value);\n      }\n    }));\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    onClick: generate\n  }, \"Generate a general comment\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"results-text\"\n  }, resultsText))));\n});\n\n//# sourceURL=webpack://hw-autochecker/./src/components/CommentGenerator.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8441ee5a5cb7d960cea5")
/******/ })();
/******/ 
/******/ }
);