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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/bijou.jpg":
/*!******************************!*\
  !*** ./src/assets/bijou.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bijou.jpg";

/***/ }),

/***/ "./src/assets/eggnogg.jpg":
/*!********************************!*\
  !*** ./src/assets/eggnogg.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/eggnogg.jpg";

/***/ }),

/***/ "./src/assets/icons/dribble.png":
/*!**************************************!*\
  !*** ./src/assets/icons/dribble.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dribble.png";

/***/ }),

/***/ "./src/assets/icons/fb.png":
/*!*********************************!*\
  !*** ./src/assets/icons/fb.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fb.png";

/***/ }),

/***/ "./src/assets/icons/instagram.png":
/*!****************************************!*\
  !*** ./src/assets/icons/instagram.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/instagram.png";

/***/ }),

/***/ "./src/assets/mojito.jpg":
/*!*******************************!*\
  !*** ./src/assets/mojito.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mojito.jpg";

/***/ }),

/***/ "./src/assets/negroni.jpg":
/*!********************************!*\
  !*** ./src/assets/negroni.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/negroni.jpg";

/***/ }),

/***/ "./src/assets/rattlesnake.jpg":
/*!************************************!*\
  !*** ./src/assets/rattlesnake.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rattlesnake.jpg";

/***/ }),

/***/ "./src/assets/zinger.jpg":
/*!*******************************!*\
  !*** ./src/assets/zinger.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/zinger.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/scripts */ "./src/js/scripts.js");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__);


Object(_js_scripts__WEBPACK_IMPORTED_MODULE_0__["appendDrinks"])();
Object(_js_scripts__WEBPACK_IMPORTED_MODULE_0__["appendSMicons"])();

/***/ }),

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/*! exports provided: appendDrinks, appendSMicons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendDrinks", function() { return appendDrinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendSMicons", function() { return appendSMicons; });
/* harmony import */ var _assets_icons_dribble_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/dribble.png */ "./src/assets/icons/dribble.png");
/* harmony import */ var _assets_icons_dribble_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_dribble_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_fb_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/fb.png */ "./src/assets/icons/fb.png");
/* harmony import */ var _assets_icons_fb_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_fb_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_instagram_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/instagram.png */ "./src/assets/icons/instagram.png");
/* harmony import */ var _assets_icons_instagram_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_instagram_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_bijou_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/bijou.jpg */ "./src/assets/bijou.jpg");
/* harmony import */ var _assets_bijou_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_bijou_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_negroni_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/negroni.jpg */ "./src/assets/negroni.jpg");
/* harmony import */ var _assets_negroni_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_negroni_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_mojito_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/mojito.jpg */ "./src/assets/mojito.jpg");
/* harmony import */ var _assets_mojito_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_mojito_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_rattlesnake_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/rattlesnake.jpg */ "./src/assets/rattlesnake.jpg");
/* harmony import */ var _assets_rattlesnake_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_rattlesnake_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_eggnogg_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/eggnogg.jpg */ "./src/assets/eggnogg.jpg");
/* harmony import */ var _assets_eggnogg_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_eggnogg_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_zinger_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/zinger.jpg */ "./src/assets/zinger.jpg");
/* harmony import */ var _assets_zinger_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_zinger_jpg__WEBPACK_IMPORTED_MODULE_8__);


 //imgs







var appendDrinks = function appendDrinks() {
  var drinksArrays = [{
    name: "bijou",
    pathName: _assets_bijou_jpg__WEBPACK_IMPORTED_MODULE_3___default.a
  }, {
    name: "negron",
    pathName: _assets_negroni_jpg__WEBPACK_IMPORTED_MODULE_4___default.a
  }, {
    name: "mojito",
    pathName: _assets_mojito_jpg__WEBPACK_IMPORTED_MODULE_5___default.a
  }, {
    name: "texas rattlesnake",
    pathName: _assets_rattlesnake_jpg__WEBPACK_IMPORTED_MODULE_6___default.a
  }, {
    name: "egg nogg",
    pathName: _assets_eggnogg_jpg__WEBPACK_IMPORTED_MODULE_7___default.a
  }, {
    name: "zinger",
    pathName: _assets_zinger_jpg__WEBPACK_IMPORTED_MODULE_8___default.a
  }, {
    name: "bijou",
    pathName: _assets_bijou_jpg__WEBPACK_IMPORTED_MODULE_3___default.a
  }, {
    name: "negron",
    pathName: _assets_negroni_jpg__WEBPACK_IMPORTED_MODULE_4___default.a
  }, {
    name: "mojito",
    pathName: _assets_mojito_jpg__WEBPACK_IMPORTED_MODULE_5___default.a
  }, {
    name: "texas rattlesnake",
    pathName: _assets_rattlesnake_jpg__WEBPACK_IMPORTED_MODULE_6___default.a
  }, {
    name: "egg nogg",
    pathName: _assets_eggnogg_jpg__WEBPACK_IMPORTED_MODULE_7___default.a
  }, {
    name: "zinger",
    pathName: _assets_zinger_jpg__WEBPACK_IMPORTED_MODULE_8___default.a
  }];

  var appendImg = function appendImg(name, path) {
    return document.getElementById("gridLayout").innerHTML += "\n    <figure class=\"grid__element\">\n        <img class=\"grid__img\" src=".concat(path, " alt=").concat(name, ">\n        <figcaption class=\"grid__text\">").concat(name, "</figcaption>\n    </figure>\n    ");
  };

  return drinksArrays.map(function (item) {
    return appendImg(item.name, item.pathName);
  });
};
var appendSMicons = function appendSMicons() {
  var iconsPath = [{
    name: 'dribble',
    pathName: _assets_icons_dribble_png__WEBPACK_IMPORTED_MODULE_0___default.a
  }, {
    name: 'instagram',
    pathName: _assets_icons_instagram_png__WEBPACK_IMPORTED_MODULE_2___default.a
  }, {
    name: 'fb',
    pathName: _assets_icons_fb_png__WEBPACK_IMPORTED_MODULE_1___default.a
  }];

  var appendIcons = function appendIcons(name, path) {
    return document.getElementById("socialMediaIcons").innerHTML += "\n    <a href=\"#\" class=\"footer__social-link\"><img class=\"footer__icon\" src=".concat(path, " alt=").concat(name, " /></a>\n    ");
  };

  return iconsPath.map(function (item) {
    return appendIcons(item.name, item.pathName);
  });
};

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map