/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcra_with_storybook"] = self["webpackChunkcra_with_storybook"] || []).push([["src_stories_Button_js"],{

/***/ "./src/stories/Button.js":
/*!*******************************!*\
  !*** ./src/stories/Button.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": function() { return /* binding */ Button; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.css */ \"./src/stories/button.css\");\nvar _excluded = [\"primary\", \"backgroundColor\", \"size\", \"label\"];\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n/**\n * Primary UI component for user interaction\n */\n\nvar Button = function Button(_ref) {\n  var primary = _ref.primary,\n      backgroundColor = _ref.backgroundColor,\n      size = _ref.size,\n      label = _ref.label,\n      props = _objectWithoutProperties(_ref, _excluded);\n\n  var mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", _extends({\n    type: \"button\",\n    className: ['storybook-button', \"storybook-button--\".concat(size), mode].join(' '),\n    style: backgroundColor && {\n      backgroundColor: backgroundColor\n    }\n  }, props), label);\n};\nButton.propTypes = {\n  /**\n   * Is this the principal call to action on the page?\n   */\n  primary: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),\n\n  /**\n   * What background color to use\n   */\n  backgroundColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n\n  /**\n   * How large should the button be?\n   */\n  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['small', 'medium', 'large']),\n\n  /**\n   * Button contents\n   */\n  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),\n\n  /**\n   * Optional click handler\n   */\n  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)\n};\nButton.defaultProps = {\n  backgroundColor: null,\n  primary: false,\n  size: 'medium',\n  onClick: undefined\n};\n\n//# sourceURL=webpack://cra-with-storybook/./src/stories/Button.js?");

/***/ }),

/***/ "./src/stories/button.css":
/*!********************************!*\
  !*** ./src/stories/button.css ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cra-with-storybook/./src/stories/button.css?");

/***/ })

}]);