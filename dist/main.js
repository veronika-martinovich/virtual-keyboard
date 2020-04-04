/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Button.js":
/*!**************************!*\
  !*** ./src/js/Button.js ***!
  \**************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\nclass Button {\r\n\r\n  constructor(size, type, firstValue, secondValue, firstShift, secondShift, keyCode) {\r\n    this.size = size;\r\n    this.type = type;\r\n    this.firstValue = firstValue;\r\n    this.secondValue = secondValue;\r\n    this.firstShift = firstShift;\r\n    this.secondShift = secondShift;\r\n    this.keyCode = keyCode;\r\n  }\r\n\r\n  generateButton() {\r\n    let button = document.createElement('div');\r\n    button.classList.add('button');\r\n    button.classList.add(`button_size_${this.size}`);\r\n    button.classList.add(`button_type_${this.type}`);\r\n    if (this.type === 'system') button.classList.add(`${this.keyCode}`);\r\n    button.setAttribute('data-type', this.type);\r\n    button.innerHTML = this.firstValue;\r\n    return button;\r\n  }\r\n\r\n  changeValue() {\r\n    const newValue = this.innerHTML === this.firstValue ? this.secondValue : this.firstValue;\r\n    button.innerHTML = newValue;\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/Button.js?");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: buttons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttons\", function() { return buttons; });\nconst buttons = [\r\n  { size: 'xs', type: 'input', firstValue: 'ё', secondValue: '`', ruShift: 'Ё', enShift: '~' },\r\n  { size: 'xs', type: 'input', firstValue: '1', secondValue: '1', ruShift: '!', enShift: '!' },\r\n  { size: 'xs', type: 'input', firstValue: '2', secondValue: '2', ruShift: '\"', enShift: '\"' },\r\n  { size: 'xs', type: 'input', firstValue: '3', secondValue: '3', ruShift: '№', enShift: '#' },\r\n  { size: 'xs', type: 'input', firstValue: '4', secondValue: '4', ruShift: ';', enShift: '$' },\r\n  { size: 'xs', type: 'input', firstValue: '5', secondValue: '5', ruShift: '%', enShift: '%' },\r\n  { size: 'xs', type: 'input', firstValue: '6', secondValue: '6', ruShift: ':', enShift: '^' },\r\n  { size: 'xs', type: 'input', firstValue: '7', secondValue: '7', ruShift: '?', enShift: '&' },\r\n  { size: 'xs', type: 'input', firstValue: '8', secondValue: '8', ruShift: '*', enShift: '*' },\r\n  { size: 'xs', type: 'input', firstValue: '9', secondValue: '9', ruShift: '(', enShift: '(' },\r\n  { size: 'xs', type: 'input', firstValue: '0', secondValue: '0', ruShift: ')', enShift: ')' },\r\n  { size: 'xs', type: 'input', firstValue: '-', secondValue: '-', ruShift: '_', enShift: '_' },\r\n  { size: 'xs', type: 'input', firstValue: '=', secondValue: '=', ruShift: '+', enShift: '+' },\r\n  { size: 'l', type: 'system', firstValue: 'Backspace', keyCode: 'Backspace' },\r\n  { size: 's', type: 'system', firstValue: 'Tab', keyCode: 'Tab' },\r\n  { size: 'xs', type: 'input', firstValue: 'й', secondValue: 'q', ruShift: 'Й', enShift: 'Q' },\r\n  { size: 'xs', type: 'input', firstValue: 'ц', secondValue: 'w', ruShift: 'Ц', enShift: 'W' },\r\n  { size: 'xs', type: 'input', firstValue: 'у', secondValue: 'e', ruShift: 'У', enShift: 'E' },\r\n  { size: 'xs', type: 'input', firstValue: 'к', secondValue: 'r', ruShift: 'К', enShift: 'R' },\r\n  { size: 'xs', type: 'input', firstValue: 'е', secondValue: 't', ruShift: 'Е', enShift: 'T' },\r\n  { size: 'xs', type: 'input', firstValue: 'н', secondValue: 'y', ruShift: 'Н', enShift: 'Y' },\r\n  { size: 'xs', type: 'input', firstValue: 'г', secondValue: 'u', ruShift: 'Г', enShift: 'U' },\r\n  { size: 'xs', type: 'input', firstValue: 'ш', secondValue: 'i', ruShift: 'Ш', enShift: 'I' },\r\n  { size: 'xs', type: 'input', firstValue: 'щ', secondValue: 'o', ruShift: 'Щ', enShift: 'O' },\r\n  { size: 'xs', type: 'input', firstValue: 'з', secondValue: 'p', ruShift: 'З', enShift: 'P' },\r\n  { size: 'xs', type: 'input', firstValue: 'х', secondValue: '[', ruShift: 'Х', enShift: '{' },\r\n  { size: 'xs', type: 'input', firstValue: 'ъ', secondValue: ']', ruShift: 'Ъ', enShift: '}' },\r\n  { size: 'xs', type: 'input', firstValue: '\\\\', secondValue: '\\\\', ruShift: '/', enShift: '|' },\r\n  { size: 's', type: 'system', firstValue: 'Del', keyCode: 'Delete' },\r\n  { size: 'l', type: 'system', firstValue: 'CapsLock', keyCode: 'CapsLock' },\r\n  { size: 'xs', type: 'input', firstValue: 'ф', secondValue: 'a', ruShift: 'Ф', enShift: 'A' },\r\n  { size: 'xs', type: 'input', firstValue: 'ы', secondValue: 's', ruShift: 'Ы', enShift: 'S' },\r\n  { size: 'xs', type: 'input', firstValue: 'в', secondValue: 'd', ruShift: 'В', enShift: 'D' },\r\n  { size: 'xs', type: 'input', firstValue: 'а', secondValue: 'f', ruShift: 'А', enShift: 'F' },\r\n  { size: 'xs', type: 'input', firstValue: 'п', secondValue: 'g', ruShift: 'П', enShift: 'G' },\r\n  { size: 'xs', type: 'input', firstValue: 'р', secondValue: 'h', ruShift: 'Р', enShift: 'H' },\r\n  { size: 'xs', type: 'input', firstValue: 'о', secondValue: 'j', ruShift: 'О', enShift: 'J' },\r\n  { size: 'xs', type: 'input', firstValue: 'л', secondValue: 'k', ruShift: 'Л', enShift: 'K' },\r\n  { size: 'xs', type: 'input', firstValue: 'д', secondValue: 'l', ruShift: 'Д', enShift: 'L' },\r\n  { size: 'xs', type: 'input', firstValue: 'ж', secondValue: ';', ruShift: 'Ж', enShift: ':' },\r\n  { size: 'xs', type: 'input', firstValue: 'э', secondValue: '\\'', ruShift: '', enShift: '\"' },\r\n  { size: 'm', type: 'system', firstValue: 'Enter', keyCode: 'Enter' },\r\n  { size: 'l', type: 'system', firstValue: 'Shift', keyCode: 'ShiftLeft' },\r\n  { size: 'xs', type: 'input', firstValue: 'я', secondValue: 'z', ruShift: 'Я', enShift: 'Z' },\r\n  { size: 'xs', type: 'input', firstValue: 'ч', secondValue: 'x', ruShift: 'Ч', enShift: 'X' },\r\n  { size: 'xs', type: 'input', firstValue: 'с', secondValue: 'c', ruShift: 'С', enShift: 'C' },\r\n  { size: 'xs', type: 'input', firstValue: 'м', secondValue: 'v', ruShift: 'М', enShift: 'V' },\r\n  { size: 'xs', type: 'input', firstValue: 'и', secondValue: 'b', ruShift: 'И', enShift: 'B' },\r\n  { size: 'xs', type: 'input', firstValue: 'т', secondValue: 'n', ruShift: 'Т', enShift: 'N' },\r\n  { size: 'xs', type: 'input', firstValue: 'ь', secondValue: 'm', ruShift: 'Ь', enShift: 'M' },\r\n  { size: 'xs', type: 'input', firstValue: 'б', secondValue: ',', ruShift: 'Б', enShift: '<' },\r\n  { size: 'xs', type: 'input', firstValue: 'ю', secondValue: '.', ruShift: 'Ю', enShift: '>' },\r\n  { size: 'xs', type: 'input', firstValue: '.', secondValue: '/', ruShift: ',', enShift: '?' },\r\n  { size: 'xs', type: 'system', firstValue: '&#9650', keyCode: 'ArrowUp' },\r\n  { size: 'm', type: 'system', firstValue: 'Shift', keyCode: 'ShiftRight' },\r\n  { size: 'xs', type: 'system', firstValue: 'Ctrl', keyCode: 'ControlLeft' },\r\n  { size: 'xs', type: 'system', firstValue: 'Win', keyCode: 'MetaLeft' },\r\n  { size: 'xs', type: 'system', firstValue: 'Alt', keyCode: 'AltLeft' },\r\n  { size: 'xl', type: 'input', firstValue: '', keyCode: 'Space' },\r\n  { size: 'xs', type: 'system', firstValue: 'Alt', keyCode: 'AltRight' },\r\n  { size: 'xs', type: 'system', firstValue: '&#9668', keyCode: 'ArrowLeft' },\r\n  { size: 'xs', type: 'system', firstValue: '&#9660', keyCode: 'ArrowDown' },\r\n  { size: 'xs', type: 'system', firstValue: '&#9658', keyCode: 'ArrowRight' },\r\n  { size: 'xs', type: 'system', firstValue: 'Ctrl', keyCode: 'ControlRight' }    \r\n]\n\n//# sourceURL=webpack:///./src/js/data.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ \"./src/js/Button.js\");\n\r\n\r\n\r\nconst keyboardContainer = document.createElement('div');\r\nkeyboardContainer.classList.add('keyboard_container');\r\nconst screen = document.createElement('textarea');\r\nscreen.classList.add('screen');\r\nconst keyboard = document.createElement('div');\r\nkeyboard.classList.add('keyboard');\r\nkeyboardContainer.append(screen, keyboard);\r\ndocument.body.append(keyboardContainer);\r\n\r\nfunction createButtons() {\r\n  _data__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].forEach(item => {\r\n    const keyboardButton = new _Button__WEBPACK_IMPORTED_MODULE_1__[\"Button\"](item.size, item.type, item.firstValue, item.secondValue, item.firstShift, item.secondShift, item.keyCode);\r\n    keyboard.append(keyboardButton.generateButton());\r\n  })\r\n}\r\n\r\ncreateButtons();\r\n\r\ndocument.addEventListener('keydown', function(event) {\r\n  if (event.code == 'ShiftLeft' && event.code == 'ControlLeft') {\r\n    alert('yes');\r\n  }\r\n\r\n  if (event.code == 'ShiftLeft') {\r\n    console.log('yes');\r\n  }\r\n\r\n})\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/style.scss?");

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/sass/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/sass/style.scss */\"./src/sass/style.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/sass/style.scss?");

/***/ })

/******/ });