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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\nclass Button {\r\n\r\n  constructor(size, type, firstValue, secondValue, firstShift, secondShift, keyCode, activeValue) {\r\n    this.size = size;\r\n    this.type = type;\r\n    this.firstValue = firstValue;\r\n    this.secondValue = secondValue;\r\n    this.firstShift = firstShift;\r\n    this.secondShift = secondShift;\r\n    this.keyCode = keyCode;\r\n    this.activeValue = activeValue;\r\n  }\r\n\r\n  generateButton() {\r\n    let button = document.createElement('div');\r\n    button.classList.add('button');\r\n    button.classList.add(`button_size_${this.size}`);\r\n    button.classList.add(`button_type_${this.type}`);\r\n    button.classList.add(`${this.keyCode}`);\r\n    button.setAttribute('data-type', this.type);\r\n    button.innerHTML = this[this.activeValue];\r\n    return button;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/Button.js?");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: buttons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttons\", function() { return buttons; });\nconst buttons = [\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"ё\",\r\n    secondValue: \"`\",\r\n    firstShift: \"Ё\",\r\n    secondShift: \"~\",\r\n    keyCode: \"Backquote\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"1\",\r\n    secondValue: \"1\",\r\n    firstShift: \"!\",\r\n    secondShift: \"!\",\r\n    keyCode: \"Digit1\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"2\",\r\n    secondValue: \"2\",\r\n    firstShift: '\"',\r\n    secondShift: '@',\r\n    keyCode: \"Digit2\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"3\",\r\n    secondValue: \"3\",\r\n    firstShift: \"№\",\r\n    secondShift: \"#\",\r\n    keyCode: \"Digit3\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"4\",\r\n    secondValue: \"4\",\r\n    firstShift: \";\",\r\n    secondShift: \"$\",\r\n    keyCode: \"Digit4\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"5\",\r\n    secondValue: \"5\",\r\n    firstShift: \"%\",\r\n    secondShift: \"%\",\r\n    keyCode: \"Digit5\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"6\",\r\n    secondValue: \"6\",\r\n    firstShift: \":\",\r\n    secondShift: \"^\",\r\n    keyCode: \"Digit6\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"7\",\r\n    secondValue: \"7\",\r\n    firstShift: \"?\",\r\n    secondShift: \"&amp;\",\r\n    keyCode: \"Digit7\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"8\",\r\n    secondValue: \"8\",\r\n    firstShift: \"*\",\r\n    secondShift: \"*\",\r\n    keyCode: \"Digit8\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"9\",\r\n    secondValue: \"9\",\r\n    firstShift: \"(\",\r\n    secondShift: \"(\",\r\n    keyCode: \"Digit9\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"0\",\r\n    secondValue: \"0\",\r\n    firstShift: \")\",\r\n    secondShift: \")\",\r\n    keyCode: \"Digit0\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"-\",\r\n    secondValue: \"-\",\r\n    firstShift: \"_\",\r\n    secondShift: \"_\",\r\n    keyCode: \"Minus\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"=\",\r\n    secondValue: \"=\",\r\n    firstShift: \"+\",\r\n    secondShift: \"+\",\r\n    keyCode: \"Equal\"\r\n  },\r\n  {\r\n    size: \"l\",\r\n    type: \"system\",\r\n    firstValue: \"Backspace\",\r\n    secondValue: \"Backspace\",\r\n    firstShift: \"Backspace\",\r\n    secondShift: \"Backspace\",\r\n    keyCode: \"Backspace\"\r\n  },\r\n  {\r\n    size: \"s\",\r\n    type: \"system\",\r\n    firstValue: \"Tab\",\r\n    secondValue: \"Tab\",\r\n    firstShift: \"Tab\",\r\n    secondShift: \"Tab\",\r\n    keyCode: \"Tab\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"й\",\r\n    secondValue: \"q\",\r\n    firstShift: \"Й\",\r\n    secondShift: \"Q\",\r\n    keyCode: \"KeyQ\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"ц\",\r\n    secondValue: \"w\",\r\n    firstShift: \"Ц\",\r\n    secondShift: \"W\",\r\n    keyCode: \"KeyW\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"у\",\r\n    secondValue: \"e\",\r\n    firstShift: \"У\",\r\n    secondShift: \"E\",\r\n    keyCode: \"KeyE\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"к\",\r\n    secondValue: \"r\",\r\n    firstShift: \"К\",\r\n    secondShift: \"R\",\r\n    keyCode: \"KeyR\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"е\",\r\n    secondValue: \"t\",\r\n    firstShift: \"Е\",\r\n    secondShift: \"T\",\r\n    keyCode: \"KeyT\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"н\",\r\n    secondValue: \"y\",\r\n    firstShift: \"Н\",\r\n    secondShift: \"Y\",\r\n    keyCode: \"KeyY\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"г\",\r\n    secondValue: \"u\",\r\n    firstShift: \"Г\",\r\n    secondShift: \"U\",\r\n    keyCode: \"KeyU\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"ш\",\r\n    secondValue: \"i\",\r\n    firstShift: \"Ш\",\r\n    secondShift: \"I\",\r\n    keyCode: \"KeyI\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"щ\",\r\n    secondValue: \"o\",\r\n    firstShift: \"Щ\",\r\n    secondShift: \"O\",\r\n    keyCode: \"KeyO\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"з\",\r\n    secondValue: \"p\",\r\n    firstShift: \"З\",\r\n    secondShift: \"P\",\r\n    keyCode: \"KeyP\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"х\",\r\n    secondValue: \"\\[\",\r\n    firstShift: \"Х\",\r\n    secondShift: \"\\{\",\r\n    keyCode: \"BracketLeft\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"ъ\",\r\n    secondValue: \"\\]\",\r\n    firstShift: \"Ъ\",\r\n    secondShift: \"\\}\",\r\n    keyCode: \"BracketRight\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"\\\\\",\r\n    secondValue: \"\\\\\",\r\n    firstShift: \"/\",\r\n    secondShift: \"|\",\r\n    keyCode: \"Backslash\"\r\n  },\r\n  {\r\n    size: \"s\",\r\n    type: \"system\",\r\n    firstValue: \"Del\",\r\n    secondValue: \"Del\",\r\n    firstShift: \"Del\",\r\n    secondShift: \"Del\",\r\n    keyCode: \"Delete\"\r\n  },\r\n  {\r\n    size: \"l\",\r\n    type: \"system\",\r\n    firstValue: \"CapsLock\",\r\n    secondValue: \"CapsLock\",\r\n    firstShift: \"CapsLock\",\r\n    secondShift: \"CapsLock\",\r\n    keyCode: \"CapsLock\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"ф\",\r\n    secondValue: \"a\",\r\n    firstShift: \"Ф\",\r\n    secondShift: \"A\",\r\n    keyCode: \"KeyA\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"ы\",\r\n    secondValue: \"s\",\r\n    firstShift: \"Ы\",\r\n    secondShift: \"S\",\r\n    keyCode: \"KeyS\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"в\",\r\n    secondValue: \"d\",\r\n    firstShift: \"В\",\r\n    secondShift: \"D\",\r\n    keyCode: \"KeyD\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"а\",\r\n    secondValue: \"f\",\r\n    firstShift: \"А\",\r\n    secondShift: \"F\",\r\n    keyCode: \"KeyF\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"п\",\r\n    secondValue: \"g\",\r\n    firstShift: \"П\",\r\n    secondShift: \"G\",\r\n    keyCode: \"KeyG\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"р\",\r\n    secondValue: \"h\",\r\n    firstShift: \"Р\",\r\n    secondShift: \"H\",\r\n    keyCode: \"KeyH\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"о\",\r\n    secondValue: \"j\",\r\n    firstShift: \"О\",\r\n    secondShift: \"J\",\r\n    keyCode: \"KeyJ\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"л\",\r\n    secondValue: \"k\",\r\n    firstShift: \"Л\",\r\n    secondShift: \"K\",\r\n    keyCode: \"KeyK\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"д\",\r\n    secondValue: \"l\",\r\n    firstShift: \"Д\",\r\n    secondShift: \"L\",\r\n    keyCode: \"KeyL\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"ж\",\r\n    secondValue: \";\",\r\n    firstShift: \"Ж\",\r\n    secondShift: \":\",\r\n    keyCode: \"Semicolon\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"э\",\r\n    secondValue: \"'\",\r\n    firstShift: \"Э\",\r\n    secondShift: '\"',\r\n    keyCode: \"Quote\"\r\n  },\r\n  {\r\n    size: \"m\",\r\n    type: \"system\",\r\n    firstValue: \"Enter\",\r\n    secondValue: \"Enter\",\r\n    firstShift: \"Enter\",\r\n    secondShift: \"Enter\",\r\n    keyCode: \"Enter\"\r\n  },\r\n  {\r\n    size: \"l\",\r\n    type: \"system\",\r\n    firstValue: \"Shift\",\r\n    secondValue: \"Shift\",\r\n    firstShift: \"Shift\",\r\n    secondShift: \"Shift\",\r\n    keyCode: \"ShiftLeft\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"я\",\r\n    secondValue: \"z\",\r\n    firstShift: \"Я\",\r\n    secondShift: \"Z\",\r\n    keyCode: \"KeyZ\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"ч\",\r\n    secondValue: \"x\",\r\n    firstShift: \"Ч\",\r\n    secondShift: \"X\",\r\n    keyCode: \"KeyX\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"с\",\r\n    secondValue: \"c\",\r\n    firstShift: \"С\",\r\n    secondShift: \"C\",\r\n    keyCode: \"KeyC\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"м\",\r\n    secondValue: \"v\",\r\n    firstShift: \"М\",\r\n    secondShift: \"V\",\r\n    keyCode: \"KeyV\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"и\",\r\n    secondValue: \"b\",\r\n    firstShift: \"И\",\r\n    secondShift: \"B\",\r\n    keyCode: \"KeyB\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"т\",\r\n    secondValue: \"n\",\r\n    firstShift: \"Т\",\r\n    secondShift: \"N\",\r\n    keyCode: \"KeyN\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"ь\",\r\n    secondValue: \"m\",\r\n    firstShift: \"Ь\",\r\n    secondShift: \"M\",\r\n    keyCode: \"KeyM\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"б\",\r\n    secondValue: \",\",\r\n    firstShift: \"Б\",\r\n    secondShift: \"&lt;\",\r\n    keyCode: \"Comma\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \"ю\",\r\n    secondValue: \".\",\r\n    firstShift: \"Ю\",\r\n    secondShift: \"&gt;\",\r\n    keyCode: \"Period\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input\",\r\n    firstValue: \".\",\r\n    secondValue: \"/\",\r\n    firstShift: \",\",\r\n    secondShift: \"?\",\r\n    keyCode: \"Slash\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input-system\",\r\n    firstValue: \"▲\",\r\n    secondValue: \"▲\",\r\n    firstShift: \"▲\",\r\n    secondShift: \"▲\",\r\n    keyCode: \"ArrowUp\"\r\n  },\r\n  {\r\n    size: \"m\",\r\n    type: \"system\",\r\n    firstValue: \"Shift\",\r\n    secondValue: \"Shift\",\r\n    firstShift: \"Shift\",\r\n    secondShift: \"Shift\",\r\n    keyCode: \"ShiftRight\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"system\",\r\n    firstValue: \"Ctrl\",\r\n    secondValue: \"Ctrl\",\r\n    firstShift: \"Ctrl\",\r\n    secondShift: \"Ctrl\",\r\n    keyCode: \"ControlLeft\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"system\",\r\n    firstValue: \"Win\",\r\n    secondValue: \"Win\",\r\n    firstShift: \"Win\",\r\n    secondShift: \"Win\",\r\n    keyCode: \"MetaLeft\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"system\",\r\n    firstValue: \"Alt\",\r\n    secondValue: \"Alt\",\r\n    firstShift: \"Alt\",\r\n    secondShift: \"Alt\",\r\n    keyCode: \"AltLeft\"\r\n  },\r\n  {\r\n    size: \"xl\",\r\n    type: \"input\",\r\n    firstValue: \" \",\r\n    secondValue: \" \",\r\n    firstShift: \" \",\r\n    secondShift: \" \",\r\n    keyCode: \"Space\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"system\",\r\n    firstValue: \"Alt\",\r\n    secondValue: \"Alt\",\r\n    firstShift: \"Alt\",\r\n    secondShift: \"Alt\",\r\n    keyCode: \"AltRight\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input-system\",\r\n    firstValue: \"◄\",\r\n    secondValue: \"◄\",\r\n    firstShift: \"◄\",\r\n    secondShift: \"◄\",\r\n    keyCode: \"ArrowLeft\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input-system\",\r\n    firstValue: \"▼\",\r\n    secondValue: \"▼\",\r\n    firstShift: \"▼\",\r\n    secondShift: \"▼\",\r\n    keyCode: \"ArrowDown\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"input-system\",\r\n    firstValue: \"►\",\r\n    secondValue: \"►\",\r\n    firstShift: \"►\",\r\n    secondShift: \"►\",\r\n    keyCode: \"ArrowRight\"\r\n  },\r\n  {\r\n    size: \"xs\",\r\n    type: \"system\",\r\n    firstValue: \"Ctrl\",\r\n    secondValue: \"Ctrl\",\r\n    firstShift: \"Ctrl\",\r\n    secondShift: \"Ctrl\",\r\n    keyCode: \"ControlRight\"\r\n  }\r\n];\r\n\n\n//# sourceURL=webpack:///./src/js/data.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ \"./src/js/Button.js\");\n\r\n\r\n\r\n// Global variables\r\nlet activeValue = sessionStorage.getItem(\"activeValue\") || \"firstValue\";\r\nlet nextValue = sessionStorage.getItem(\"nextValue\") || \"secondValue\";\r\nlet isCapsLockOn = false;\r\nlet isShiftOn = false;\r\nlet keysPressed = {};\r\nlet keyboardButtonsPressed = {};\r\nlet domButtonsPressed = {};\r\n\r\n// Keyboard HTML/CSS\r\nconst keyboardHeading = document.createElement(\"h1\");\r\nkeyboardHeading.textContent = \"Virtual keyboard for Windows OS\";\r\n\r\nconst keyboardDescription = document.createElement(\"p\");\r\nkeyboardDescription.classList.add(\"keyboard_description\");\r\nkeyboardDescription.textContent = \"To change language press CtrlLeft + AltLeft\";\r\n\r\nconst keyboardContainer = document.createElement(\"div\");\r\nkeyboardContainer.classList.add(\"keyboard_container\");\r\n\r\nconst screen = document.createElement(\"textarea\");\r\nscreen.classList.add(\"screen\");\r\n\r\nconst keyboard = document.createElement(\"div\");\r\nkeyboard.classList.add(\"keyboard\");\r\nkeyboardContainer.append(\r\n  keyboardHeading,\r\n  keyboardDescription,\r\n  screen,\r\n  keyboard\r\n);\r\ndocument.body.append(keyboardContainer);\r\n\r\n// Buttons generation with Class Button\r\nconst keyboardButtons = [];\r\nfunction createButtons() {\r\n  _data__WEBPACK_IMPORTED_MODULE_0__[\"buttons\"].forEach(item => {\r\n    const keyboardButton = new _Button__WEBPACK_IMPORTED_MODULE_1__[\"Button\"](\r\n      item.size,\r\n      item.type,\r\n      item.firstValue,\r\n      item.secondValue,\r\n      item.firstShift,\r\n      item.secondShift,\r\n      item.keyCode,\r\n      activeValue\r\n    );\r\n    keyboard.append(keyboardButton.generateButton());\r\n    keyboardButtons.push(keyboardButton);\r\n  });\r\n}\r\ncreateButtons();\r\n\r\nlet allButtons = document.querySelectorAll(\".button\");\r\nlet allDOMButtons = [];\r\nfor (let i = 0; i < allButtons.length; i++) {\r\n  allDOMButtons.push(allButtons[i]);\r\n}\r\n\r\n// Handlers\r\ndocument.addEventListener(\"keydown\", handleKeydown);\r\ndocument.addEventListener(\"keyup\", handleKeyup);\r\nkeyboard.addEventListener(\"click\", handleClick);\r\nkeyboard.addEventListener(\"mousedown\", handleMouseDown);\r\nkeyboard.addEventListener(\"mouseup\", handleMouseUp);\r\n\r\n//Keyboard presses\r\nfunction handleKeydown(event) {\r\n  keysPressed[event.code] = event.code;\r\n  keyboardButtonsPressed[event.code] = keyboardButtons.find(boardButton => {\r\n    return boardButton.keyCode == keysPressed[event.code];\r\n  });\r\n  domButtonsPressed[event.code] = allDOMButtons.find(domButton => {\r\n    return domButton.classList.contains(event.code);\r\n  });\r\n  domButtonsPressed[event.code].classList.add(\"button_active\");\r\n\r\n  if (keysPressed[\"ControlLeft\"] && keysPressed[\"AltLeft\"]) {\r\n    allDOMButtons.forEach(domButton => {\r\n      let keyboardButton = keyboardButtons.find(boardButton => {\r\n        return boardButton[activeValue] == domButton.innerHTML;\r\n      });\r\n      domButton.innerHTML = keyboardButton[nextValue];\r\n    });\r\n    activeValue = nextValue;\r\n    sessionStorage.setItem(\"activeValue\", `${activeValue}`);\r\n    nextValue = activeValue === \"firstValue\" ? \"secondValue\" : \"firstValue\";\r\n    sessionStorage.setItem(\"nextValue\", `${nextValue}`);\r\n  }\r\n\r\n  if (\r\n    domButtonsPressed[event.code].classList.contains(\"button_type_input\") ||\r\n    domButtonsPressed[event.code].classList.contains(\"button_type_input-system\")\r\n  ) {\r\n    if (!isCapsLockOn) {\r\n      screen.textContent += domButtonsPressed[event.code].innerHTML;\r\n    }\r\n    if (isCapsLockOn) {\r\n      screen.textContent += domButtonsPressed[\r\n        event.code\r\n      ].innerHTML.toUpperCase();\r\n    }\r\n  }\r\n\r\n  if (keysPressed[\"Backspace\"]) {\r\n    if (screen.selectionStart === 0) {\r\n      screen.setSelectionRange(screen.value.length, screen.value.length);\r\n    }\r\n    let pos = screen.selectionStart - 1;\r\n    screen.textContent =\r\n      screen.textContent.slice(0, screen.selectionStart - 1) +\r\n      screen.textContent.slice(screen.selectionStart);\r\n    screen.setSelectionRange(pos, pos);\r\n  }\r\n\r\n  if (keysPressed[\"Delete\"]) {\r\n    if (screen.selectionStart === 0) {\r\n      screen.setSelectionRange(screen.value.length, screen.value.length);\r\n    }\r\n    let pos = screen.selectionStart;\r\n    screen.textContent =\r\n      screen.textContent.slice(0, screen.selectionStart) +\r\n      screen.textContent.slice(screen.selectionStart + 1);\r\n    screen.setSelectionRange(pos, pos);\r\n  }\r\n\r\n  if (keysPressed[\"Tab\"]) {\r\n    screen.textContent += \"    \";\r\n  }\r\n\r\n  if (keysPressed[\"Enter\"]) {\r\n    screen.textContent += \"\\n\";\r\n  }\r\n\r\n  if (keysPressed[\"CapsLock\"]) {\r\n    isCapsLockOn = !isCapsLockOn;\r\n    domButtonsPressed[event.code].classList.toggle(\"button_active_caps\");\r\n  }\r\n\r\n  if (keysPressed[\"ShiftLeft\"] || keysPressed[\"ShiftRight\"]) {\r\n    isShiftOn = !isShiftOn;\r\n    allDOMButtons.forEach(domButton => {\r\n      let keyboardButton = keyboardButtons.find(boardButton => {\r\n        return boardButton[activeValue] == domButton.innerHTML;\r\n      });\r\n      domButton.innerHTML =\r\n        activeValue == \"firstValue\"\r\n          ? keyboardButton.firstShift\r\n          : keyboardButton.secondShift;\r\n    });\r\n  }\r\n}\r\n\r\nfunction handleKeyup(event) {\r\n  domButtonsPressed[event.code].classList.remove(\"button_active\");\r\n\r\n  if (keysPressed[\"ShiftLeft\"] || keysPressed[\"ShiftRight\"]) {\r\n    isShiftOn = !isShiftOn;\r\n    allDOMButtons.forEach(domButton => {\r\n      let keyboardButton = keyboardButtons.find(boardButton => {\r\n        let shiftValue =\r\n          activeValue == \"firstValue\"\r\n            ? boardButton.firstShift\r\n            : boardButton.secondShift;\r\n        return domButton.innerHTML == shiftValue;\r\n      });\r\n      domButton.innerHTML = keyboardButton[activeValue];\r\n    });\r\n  }\r\n\r\n  delete keysPressed[event.code];\r\n  delete keyboardButtonsPressed[event.code];\r\n  delete domButtonsPressed[event.code];\r\n}\r\n\r\n//Mouse clicks\r\nfunction handleClick(event) {\r\n  if (\r\n    (event.target.dataset.type === \"input\" ||\r\n      event.target.dataset.type === \"input-system\") &&\r\n    !isCapsLockOn\r\n  ) {\r\n    screen.textContent += event.target.textContent.toLowerCase();\r\n  }\r\n\r\n  if (\r\n    (event.target.dataset.type === \"input\" ||\r\n      event.target.dataset.type === \"input-system\") &&\r\n    isCapsLockOn\r\n  ) {\r\n    screen.textContent += event.target.textContent.toUpperCase();\r\n  }\r\n\r\n  if (event.target.textContent === \"Backspace\") {\r\n    if (screen.selectionStart === 0) {\r\n      screen.setSelectionRange(screen.value.length, screen.value.length);\r\n    }\r\n    let pos = screen.selectionStart - 1;\r\n    screen.textContent =\r\n      screen.textContent.slice(0, screen.selectionStart - 1) +\r\n      screen.textContent.slice(screen.selectionStart);\r\n    screen.setSelectionRange(pos, pos);\r\n  }\r\n\r\n  if (event.target.textContent === \"Del\") {\r\n    if (screen.selectionStart === 0) {\r\n      screen.setSelectionRange(screen.value.length, screen.value.length);\r\n    }\r\n    let pos = screen.selectionStart;\r\n    screen.textContent =\r\n      screen.textContent.slice(0, screen.selectionStart) +\r\n      screen.textContent.slice(screen.selectionStart + 1);\r\n    screen.setSelectionRange(pos, pos);\r\n  }\r\n\r\n  if (event.target.textContent === \"Tab\") {\r\n    screen.textContent += \"    \";\r\n  }\r\n\r\n  if (event.target.textContent === \"Enter\") {\r\n    screen.textContent += \"\\n\";\r\n  }\r\n  \r\n  if (event.target.textContent === \"CapsLock\") {\r\n    event.target.classList.toggle('button_active_caps');\r\n    isCapsLockOn = !isCapsLockOn; \r\n  }\r\n}\r\n\r\nfunction handleMouseDown() {\r\n  if (event.target.classList.contains(\"button\")) {\r\n    event.target.classList.add(\"button_active\");\r\n  }\r\n\r\n  if (\r\n    event.target.classList.contains(\"ShiftLeft\") ||\r\n    event.target.classList.contains(\"ShiftRight\")\r\n  ) {\r\n    isShiftOn = !isShiftOn;\r\n    allDOMButtons.forEach(domButton => {\r\n      let keyboardButton = keyboardButtons.find(boardButton => {\r\n        return boardButton[activeValue] == domButton.innerHTML;\r\n      });\r\n      domButton.innerHTML =\r\n        activeValue == \"firstValue\"\r\n          ? keyboardButton.firstShift\r\n          : keyboardButton.secondShift;\r\n    });\r\n  }\r\n}\r\n\r\nfunction handleMouseUp() {\r\n  if (event.target.classList.contains(\"button\")) {\r\n    event.target.classList.remove(\"button_active\");\r\n  }\r\n\r\n  if (\r\n    event.target.classList.contains(\"ShiftLeft\") ||\r\n    event.target.classList.contains(\"ShiftRight\")\r\n  ) {\r\n    isShiftOn = !isShiftOn;\r\n    allDOMButtons.forEach(domButton => {\r\n      let keyboardButton = keyboardButtons.find(boardButton => {\r\n        let shiftValue =\r\n          activeValue == \"firstValue\"\r\n            ? boardButton.firstShift\r\n            : boardButton.secondShift;\r\n        return domButton.innerHTML == shiftValue;\r\n      });\r\n      domButton.innerHTML = keyboardButton[activeValue];\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

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