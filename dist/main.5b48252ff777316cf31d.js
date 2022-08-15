/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://js_tnk/./src/main.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _task_5_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task_5/game */ \"./src/task_5/game.es6\");\n\n\n\n\n//# sourceURL=webpack://js_tnk/./src/index.js?");

/***/ }),

/***/ "./src/task_5/bishop.es6":
/*!*******************************!*\
  !*** ./src/task_5/bishop.es6 ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Bishop\": () => (/* binding */ Bishop)\n/* harmony export */ });\n/* harmony import */ var _chess_piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chess-piece */ \"./src/task_5/chess-piece.es6\");\n\n\nclass Bishop extends _chess_piece__WEBPACK_IMPORTED_MODULE_0__.ChessPiece {\n  constructor(color) {\n    super(color);\n    this.name = 'bishop'\n  }\n}\n\n\n//# sourceURL=webpack://js_tnk/./src/task_5/bishop.es6?");

/***/ }),

/***/ "./src/task_5/chess-piece.es6":
/*!************************************!*\
  !*** ./src/task_5/chess-piece.es6 ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChessPiece\": () => (/* binding */ ChessPiece)\n/* harmony export */ });\nclass ChessPiece {\n  constructor(color) {\n    this.color = color\n  }\n\n  getAvailableMoves() {}\n\n  static availableColors = AVAILABLE_COLORS\n  static availableChessPieces = AVAILABLE_CHESS_PIECES\n}\n\n//# sourceURL=webpack://js_tnk/./src/task_5/chess-piece.es6?");

/***/ }),

/***/ "./src/task_5/constants.es6":
/*!**********************************!*\
  !*** ./src/task_5/constants.es6 ***!
  \**********************************/
/***/ (() => {

eval("const WM = 'white_move'\nconst BM = 'black_move'\nconst W = 'white'\nconst B ='black'\nconst AVAILABLE_COLORS = [W, B]\n\nconst WW = 'white win'\nconst BW = 'black win'\nconst IN_PROGRESS = 'in progress'\nconst AVAILABLE_STATUSES = [WW, BW, IN_PROGRESS]\n\nconst PAWN = 'pawn'\nconst ROOK = 'rook'\nconst BISHOP = 'bishop'\nconst KNIGHT = 'knight'\nconst KING = 'king'\nconst QUEEN = 'queen'\n\nconst AVAILABLE_CHESS_PIECES = [PAWN, ROOK, BISHOP, KNIGHT, KING, QUEEN]\n\nconst AVAILABLE_MOVES = [\n//   тут должны были быть доступные ходы\n]\n\n//# sourceURL=webpack://js_tnk/./src/task_5/constants.es6?");

/***/ }),

/***/ "./src/task_5/filed.es6":
/*!******************************!*\
  !*** ./src/task_5/filed.es6 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Field\": () => (/* binding */ Field)\n/* harmony export */ });\nclass Field {\n  constructor() {\n    // расписывать координаты всех фигур не будем, представим, что тут все описано\n    this.chessPieceCords = {}\n  }\n\n  getFieldState() {}\n  getChessPieceCords(name) { return this.chessPieceCords[name] }\n\n  static coords() { console.log('this is field default matrix coords') }\n}\n\n//# sourceURL=webpack://js_tnk/./src/task_5/filed.es6?");

/***/ }),

/***/ "./src/task_5/game.es6":
/*!*****************************!*\
  !*** ./src/task_5/game.es6 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/task_5/constants.es6\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _filed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filed */ \"./src/task_5/filed.es6\");\n/* harmony import */ var _bishop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bishop */ \"./src/task_5/bishop.es6\");\n/* harmony import */ var _king__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./king */ \"./src/task_5/king.es6\");\n/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./knight */ \"./src/task_5/knight.es6\");\n/* harmony import */ var _pawn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pawn */ \"./src/task_5/pawn.es6\");\n/* harmony import */ var _queen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./queen */ \"./src/task_5/queen.es6\");\n/* harmony import */ var _rook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rook */ \"./src/task_5/rook.es6\");\n\n\n\n\n\n\n\n\n\nclass Game {\n  constructor() {\n    this.state = IN_PROGRESS\n    this.killed = []\n    this.currentMove = WM\n    this.movesCount = 0\n    this.movesHistory = []\n  }\n\n  static availableStatuses = AVAILABLE_STATUSES\n}\n\n//# sourceURL=webpack://js_tnk/./src/task_5/game.es6?");

/***/ }),

/***/ "./src/task_5/king.es6":
/*!*****************************!*\
  !*** ./src/task_5/king.es6 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"King\": () => (/* binding */ King)\n/* harmony export */ });\n/* harmony import */ var _chess_piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chess-piece */ \"./src/task_5/chess-piece.es6\");\n\n\nclass King extends _chess_piece__WEBPACK_IMPORTED_MODULE_0__.ChessPiece {\n  constructor(color) {\n    super(color);\n    this.name = 'king'\n  }\n}\n\n//# sourceURL=webpack://js_tnk/./src/task_5/king.es6?");

/***/ }),

/***/ "./src/task_5/knight.es6":
/*!*******************************!*\
  !*** ./src/task_5/knight.es6 ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Knight\": () => (/* binding */ Knight)\n/* harmony export */ });\n/* harmony import */ var _chess_piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chess-piece */ \"./src/task_5/chess-piece.es6\");\n\n\nclass Knight extends _chess_piece__WEBPACK_IMPORTED_MODULE_0__.ChessPiece {\n  constructor(color) {\n    super(color);\n    this.name = 'knight'\n  }\n}\n\n\n//# sourceURL=webpack://js_tnk/./src/task_5/knight.es6?");

/***/ }),

/***/ "./src/task_5/pawn.es6":
/*!*****************************!*\
  !*** ./src/task_5/pawn.es6 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pawn\": () => (/* binding */ Pawn)\n/* harmony export */ });\n/* harmony import */ var _chess_piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chess-piece */ \"./src/task_5/chess-piece.es6\");\n\n\nclass Pawn extends _chess_piece__WEBPACK_IMPORTED_MODULE_0__.ChessPiece {\n  constructor(color) {\n    super(color);\n    this.name = 'pawn'\n    this.canBeChanged = false\n  }\n}\n\n//# sourceURL=webpack://js_tnk/./src/task_5/pawn.es6?");

/***/ }),

/***/ "./src/task_5/queen.es6":
/*!******************************!*\
  !*** ./src/task_5/queen.es6 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Queen\": () => (/* binding */ Queen)\n/* harmony export */ });\n/* harmony import */ var _chess_piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chess-piece */ \"./src/task_5/chess-piece.es6\");\n\n\nclass Queen extends _chess_piece__WEBPACK_IMPORTED_MODULE_0__.ChessPiece {\n  constructor(color) {\n    super(color);\n    this.name = 'queen'\n  }\n}\n\n//# sourceURL=webpack://js_tnk/./src/task_5/queen.es6?");

/***/ }),

/***/ "./src/task_5/rook.es6":
/*!*****************************!*\
  !*** ./src/task_5/rook.es6 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Rook\": () => (/* binding */ Rook)\n/* harmony export */ });\n/* harmony import */ var _chess_piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chess-piece */ \"./src/task_5/chess-piece.es6\");\n\n\nclass Rook extends _chess_piece__WEBPACK_IMPORTED_MODULE_0__.ChessPiece {\n  constructor(color) {\n    super(color);\n    this.name = 'rook'\n  }\n}\n\n\n//# sourceURL=webpack://js_tnk/./src/task_5/rook.es6?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;