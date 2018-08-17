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
/******/ 	__webpack_require__.p = "C:/Users/IRuss/Desktop/yandex-shri/task-2-2/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/styles/style.sss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??postcss!./src/styles/style.sss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\r\nbody,\r\n.main {\r\n    height: 100vh;\r\n    max-height: 100vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    color: #333333;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: Arial, sans-serif;\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n    overflow: hidden;\n}\r\n:focus {\r\n    outline: none;\n}\r\n.section {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\n}\r\n.container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 96%;\r\n    margin: 0 auto;\n}\r\n.navigation {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\n}\r\n.navigation-list {\r\n    padding-left: 0;\r\n    margin: 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: space-between;\r\n        -ms-flex-align: space-between;\r\n            align-items: space-between;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\n}\r\n.navigation-list__item {\r\n    list-style: none;\n}\r\n.link {\r\n    color: #858585;\r\n    text-decoration: none;\n}\r\n.link_active {\r\n    color: #333333;\n}\r\n.header::after {\r\n    content: '';\r\n    display: block;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 1px;\r\n    background: #f7f7f7;\n}\r\n.header-container {\r\n    padding: 18px 0; /* ? */\n}\r\n.header-container__logo {\r\n    margin-right: 30px;\n}\r\n.header-menu__item {\r\n    margin-left: 30px;\n}\r\n.main-board {\r\n    background: url(" + escape(__webpack_require__(/*! ./../images/bg_main_1.png */ "./src/images/bg_main_1.png")) + ") no-repeat;\r\n    background-size: 100% 100%;\r\n    padding: 0 20px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\n}\r\n.board-part_left {\r\n    width: 60%;\r\n    padding: 20px 0;\n}\r\n.board-part_right {\r\n    width: -webkit-min-content;\r\n    width: -moz-min-content;\r\n    width: min-content;\n}\r\n.board-part_right .device-info {\r\n        margin-right: 0;\n}\r\n.board-intro-title {\r\n    line-height: 30px;\n}\r\n.board-states {\r\n    margin-top: 30px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\n}\r\n.board-state {\r\n    margin-right: 20px;\n}\r\n.board-state__location {\r\n    color: #858585;\r\n    font-weight: 500;\r\n    font-size: 14px;\n}\r\n.board-state__state {\r\n    font-size: 36px;\n}\r\n.board-state___rain::after {\r\n    content: '';\r\n    display: inline-block;\r\n    background: url(" + escape(__webpack_require__(/*! ./../images/cloud-drizzle.svg */ "./src/images/cloud-drizzle.svg")) + ") no-repeat;\r\n    width: 26px;\r\n    height: 26px;\n}\r\n.content {\n    -webkit-box-flex: 2;\n        -ms-flex-positive: 2;\n            flex-grow: 2;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\r\n.content-section {\n    width: 50%;\n}\r\n.content-section_main {\n    width: calc(50% - (40px + 26px));\n    padding: 0 26px 0 40px;\n}\r\n.content-section_favorite_scripts .content-options {\n        padding-left: 0;\n        padding-top: 0;\n        padding-bottom: 0;\n}\r\n.content-container {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    width: 100%;\n}\r\n.content-section__title {\n    display: inline-block;\n    font-size: 18px;\n    margin: 30px 0 20px;\n}\r\n.title__intro {\n    font-size: 27px;\n}\r\n.title__state {\n    font-size: 14px;\n    font-weight: 500;\n}\r\n.content-section_favorite_devices {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    padding: 0;\n}\r\n.content-section-filter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\r\n.content-options {\n    padding: 0 40px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\r\n.filter__option {\n    cursor: pointer;\n    -webkit-transition: 0.2s all linear;\n    -o-transition: 0.2s all linear;\n    transition: 0.2s all linear;\n    margin-left: 10px;\n    border-radius: 20px;\n    padding: 8px 15px;\n    background: #f7f7f7;\n}\r\n.filter__option:hover {\r\n    -webkit-box-shadow: 0 2px 6px 0 rgba(197, 186, 186, .5);\r\n    box-shadow: 0 2px 6px 0 rgba(197, 186, 186, .5);\r\n    background: #fff;\n}\r\n.filter__option_active {\n    background: #ffd93e;\n}\r\n.filter__option_active:hover {\r\n    background: #ffea51;\n}\r\n.navigation_horizontal_scroll {\n    overflow-y: hidden;\n    overflow-x: scroll;\n    z-index: 100;\n}\r\n.navigation_horizontal_scroll::-webkit-scrollbar {\r\n    height: 0; /* 5px */\r\n    background: rgba(0, 0, 0, 0);\n}\r\n.navigation_horizontal_scroll::-webkit-scrollbar-thumb {\r\n    border-radius: 20px;\r\n    background: rgba(51, 51, 51, .2);\n}\r\n.navigation_horizontal_scroll::-webkit-scrollbar-button {\r\n    height: 40px;\n}\r\n.navigation_horizontal_scroll .device-info:first-child {\n        margin-left: 40px;\n}\r\n.navigation_horizontal_scroll .device-info {\n        margin-bottom: 2px;\n}\r\n.navigation-list_horizontal_scroll {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n}\r\n.navigation-list_grid {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    overflow: hidden;\n}\r\n.navigation-list_grid .device-info {\r\n        height: calc(100px - 14px * 2);\n}\r\n.navigation-list_grid .device-info::before {\r\n    margin-bottom: 16px;\n}\r\n.navigation-list_grid::-webkit-scrollbar {\r\n    height: 0; /* 5px */\r\n    background: rgba(0, 0, 0, 0);\n}\r\n.navigation-list_grid::-webkit-scrollbar-thumb {\r\n    border-radius: 20px;\r\n    background: rgba(51, 51, 51, .2);\n}\r\n.navigation-list_grid::-webkit-scrollbar-button {\r\n    height: 2px;\n}\r\n.navigation-list-block {\r\n    margin-right: 33.333333333%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;\r\n    min-width: calc((200px + 15px) * 3);\r\n    height: calc((calc(100px - 14px * 2) + 14px * 2 + 15px) * 3 - 15px);\n}\r\n.navigation-list-block:last-child {\r\n    margin-right: 0;\n}\r\n.arrows {\r\n    -webkit-transition: 0.2s all linear;\r\n    -o-transition: 0.2s all linear;\r\n    transition: 0.2s all linear;\r\n    height: calc(20px * 2);\r\n    width: 200px;\r\n    position: absolute;\r\n    background: #f7f7f7;\r\n    z-index: 100;\r\n    border-radius: 20px 20px 0 0;\r\n    margin-top: calc((120px + 15px) * 2 + 20px);\n}\r\n.arrows::before {\r\n    content: '';\r\n    display: block;\r\n    background: url(" + escape(__webpack_require__(/*! ./../images/arrow_top_double.svg */ "./src/images/arrow_top_double.svg")) + ") no-repeat 0 0;\r\n    background-size: 16px 16px;\r\n    width: 16px;\r\n    height: 16px;\r\n    margin: 15px auto;\n}\r\n.arrows_hidden {\r\n        opacity: 0;\n}\r\n.board-part_right {\r\n    height: calc(calc((120px + 15px) * 2 + 20px) + 120px / 3);\r\n    margin-right: -10px;\r\n    padding-right: 5px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll  ;\n}\r\n.board-part_right::-webkit-scrollbar {\r\n    width: 5px;\r\n    background: rgba(0, 0, 0, 0);\n}\r\n.board-part_right::-webkit-scrollbar-thumb {\r\n    border-radius: 20px;\r\n    background: rgba(51, 51, 51, .2);\n}\r\n.board-part_right::-webkit-scrollbar-button {\r\n    height: 20px;\n}\r\n.board-part_right .device-info:first-child {\r\n    margin-top: 20px;\n}\r\n.board-part_right .device-info:last-child {\r\n    margin-bottom: calc(15px * 3);\n}\r\n/* .device-add\r\n    content: '+'\r\n    display: flex\r\n    width: calc($device-width - 2 * $device-padding)\r\n    height: calc($device-height - 2 * $device-padding)\r\n    box-shadow: inset 0 0 10px 1px $color-shadow\r\n    color: $color-text-gray\r\n    font-size: 40px\r\n    padding: $device-padding\r\n    border-radius: $device-borderRadius\r\n    justify-content: center\r\n    align-items: center\r\n    background: $color-lightGray\r\n    transition: $animate\r\n    cursor: pointer\r\n    &:hover\r\n        box-shadow: 0 2px 6px 0 $color-shadow\r\n        background: $color-white\r\n        color: $color-text-black */\r\n.device-info {\r\n    cursor: pointer;\r\n    width: calc(200px - 2 * 14px);\r\n    height: calc(120px - 2 * 14px);\r\n    background: #f7f7f7;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n    padding: 14px;\r\n    border-radius: 20px;\r\n    margin: 0 15px 15px 0;\r\n    -webkit-transition: 0.2s all linear;\r\n    -o-transition: 0.2s all linear;\r\n    transition: 0.2s all linear;\n}\r\n.device-info::before {\r\n    content: '';\r\n    display: block;\r\n    position: relative;\r\n    background-position: 0 0;\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n    min-width: 24px;\r\n    min-height: 24px;\r\n    width: 24px;\r\n    height: 24px;\r\n    margin-bottom: 32px;\n}\r\n.device-info:hover {\r\n    background: #fff;\r\n    -webkit-box-shadow: 0 2px 6px 0 rgba(197, 186, 186, .5);\r\n    box-shadow: 0 2px 6px 0 rgba(197, 186, 186, .5);\n}\r\n.device__task {\r\n    font-size: 12px;\r\n    color: #858585;\r\n    font-weight: 500;\n}\r\n.device-info_sun_dactive::before {\r\n    background-image: url(" + escape(__webpack_require__(/*! ./../images/i_sun_dactive.svg */ "./src/images/i_sun_dactive.svg")) + ");\n}\r\n.device-info_sun_active::before {\r\n    background-image: url(" + escape(__webpack_require__(/*! ./../images/i_sun_active.svg */ "./src/images/i_sun_active.svg")) + ");\n}\r\n.device-info_sun_w_max::before {\r\n    background-image: url(" + escape(__webpack_require__(/*! ./../images/i_sun_w_max.svg */ "./src/images/i_sun_w_max.svg")) + ");\n}\r\n.device-info_sun_w_min::before {\r\n    background-image: url(" + escape(__webpack_require__(/*! ./../images/i_sun_w_min.svg */ "./src/images/i_sun_w_min.svg")) + ");\n}\r\n.device-info_temperature_active::before {\r\n    background-image: url(" + escape(__webpack_require__(/*! ./../images/i_temperature_active.svg */ "./src/images/i_temperature_active.svg")) + ");\n}\r\n.device-info_temperature_dactive::before {\r\n    background-image: url(" + escape(__webpack_require__(/*! ./../images/i_temperature_dactive.svg */ "./src/images/i_temperature_dactive.svg")) + ");\n}\r\n.device-info_scheduled::before {\r\n    background-image: url(" + escape(__webpack_require__(/*! ./../images/i_scheduled.svg */ "./src/images/i_scheduled.svg")) + ");\n}\r\n.footer {\n    padding: 20px 0;\n    color: #858585;\n    font-size: 12px;\n}\r\n.navigation-list_footer .navigation-list__item {\n        margin-right: 10px;\n        display: inline-block;\n}\r\n.copyright {\n    display: inline-block;\n    text-align: right;\n    -webkit-box-flex: 2;\n        -ms-flex-positive: 2;\n            flex-grow: 2;\n}\r\n.slide-arrows {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\r\n.slide-arrows__arrow {\n    width: 16px;\n    height: 16px;\n    background-size: 100% 100%;\n    background-position: 0 0;\n    opacity: .3;\n}\r\n.slide-arrows__arrow_active {\n    opacity: .7;\n}\r\n.slide-arrows__arrow_left {\n    margin-left: -15px;\n}\r\n.slide-arrows__arrow_right {\n    margin-left: 15px;\n}\r\n.shade {\n    z-index: 1000;\n    -webkit-transition: 0.2s all linear;\n    -o-transition: 0.2s all linear;\n    transition: 0.2s all linear;\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: #333333;\n    opacity: 0;\n}\r\n.wrappet {\n    -webkit-transition: 0.2s all linear;\n    -o-transition: 0.2s all linear;\n    transition: 0.2s all linear;\n    position: fixed;\n    z-index: 2000;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\r\n.wrappet .popup {\n        width: calc(100% - 28px);\n        height: 40vh;\n        margin: 0;\n        margin-bottom: 20px;\n}\r\n.wrappet .popup:first-child {\r\n    margin-left: 0;\n}\r\n.wrappet_active {\n    width: 46%;\n    top: 20vh;\n    left: 26.8vw;\n    margin: 0 auto;\n}\r\n.wrappet-options {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-transition: 0.2s all linear;\n    -o-transition: 0.2s all linear;\n    transition: 0.2s all linear;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\r\n.popup_closing {\n    width: 46%;\n    left: auto;\n}\r\n.popup_transition {\n    -webkit-transition: none;\n    -o-transition: none;\n    transition: none;\n}\r\n.popup_active {\n    width: 100%;\n    height: 50%;\n    padding: 21px;\n}\r\n.shade_hidden {\n    display: none;\n}\r\n.shade_active {\n    opacity: .5;\n}\r\n.options_close {\n    font-size: 18px;\n    height: calc(10vh - 21px * 2);\n    -webkit-transition: 0.2s all linear;\n    -o-transition: 0.2s all linear;\n    transition: 0.2s all linear;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    opacity: 0;\n    text-align: center;\n    padding: 21px;\n    border-radius: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\r\n.options_close_hidden {\n    display: none;\n}\r\n.options_close_active {\n    opacity: 1;\n}\r\n.options__close {\n    margin-right: 30px;\n    background: #fff;\n}\r\n.options__close::before {\r\n    display: block;\r\n    content: '\\417\\430\\43A\\440\\44B\\442\\44C';\n}\r\n.options__apply {\n    background: #ffd93e;\n}\r\n.options__apply::before {\r\n    display: block;\r\n    content: '\\41F\\440\\438\\43C\\435\\43D\\438\\442\\44C';\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url;
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
    }

    return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),

/***/ "./src/images/arrow_left.svg":
/*!***********************************!*\
  !*** ./src/images/arrow_left.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/arrow_left.svg";

/***/ }),

/***/ "./src/images/arrow_right.svg":
/*!************************************!*\
  !*** ./src/images/arrow_right.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/arrow_right.svg";

/***/ }),

/***/ "./src/images/arrow_top_double.svg":
/*!*****************************************!*\
  !*** ./src/images/arrow_top_double.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/arrow_top_double.svg";

/***/ }),

/***/ "./src/images/bg_main_1.png":
/*!**********************************!*\
  !*** ./src/images/bg_main_1.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/bg_main_1.png";

/***/ }),

/***/ "./src/images/cloud-drizzle.svg":
/*!**************************************!*\
  !*** ./src/images/cloud-drizzle.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/cloud-drizzle.svg";

/***/ }),

/***/ "./src/images/i_scheduled.svg":
/*!************************************!*\
  !*** ./src/images/i_scheduled.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/i_scheduled.svg";

/***/ }),

/***/ "./src/images/i_sun_active.svg":
/*!*************************************!*\
  !*** ./src/images/i_sun_active.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/i_sun_active.svg";

/***/ }),

/***/ "./src/images/i_sun_dactive.svg":
/*!**************************************!*\
  !*** ./src/images/i_sun_dactive.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/i_sun_dactive.svg";

/***/ }),

/***/ "./src/images/i_sun_w_max.svg":
/*!************************************!*\
  !*** ./src/images/i_sun_w_max.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/i_sun_w_max.svg";

/***/ }),

/***/ "./src/images/i_sun_w_min.svg":
/*!************************************!*\
  !*** ./src/images/i_sun_w_min.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/i_sun_w_min.svg";

/***/ }),

/***/ "./src/images/i_temperature_active.svg":
/*!*********************************************!*\
  !*** ./src/images/i_temperature_active.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/i_temperature_active.svg";

/***/ }),

/***/ "./src/images/i_temperature_dactive.svg":
/*!**********************************************!*\
  !*** ./src/images/i_temperature_dactive.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/i_temperature_dactive.svg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./styles/style.sss */ "./src/styles/style.sss");

__webpack_require__(/*! ./scripts/vertical-scroll */ "./src/scripts/vertical-scroll.js");

__webpack_require__(/*! ./scripts/scroll-slide */ "./src/scripts/scroll-slide.js");

__webpack_require__(/*! ./images/arrow_left.svg */ "./src/images/arrow_left.svg");

__webpack_require__(/*! ./images/arrow_right.svg */ "./src/images/arrow_right.svg");

__webpack_require__(/*! ./scripts/popup.js */ "./src/scripts/popup.js");

/***/ }),

/***/ "./src/scripts/popup.js":
/*!******************************!*\
  !*** ./src/scripts/popup.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    window.addEventListener('load', function (e) {
        var _ = document;
        var div = _.createElement('div');
        var body = document.body;

        var popupsElems = body.querySelectorAll('.device-info');
        var shade = body.querySelector('.shade');
        var state = true;

        function handler(event) {
            var element = this;

            var wrappet = div.cloneNode(false);
            var wrappetOptions = div.cloneNode(false);

            var closeOpt = div.cloneNode(false);
            closeOpt.classList.add('options_close');
            closeOpt.classList.add('options_close_hidden');

            var close = closeOpt.cloneNode(true);
            var apply = closeOpt.cloneNode(true);

            if (state) {
                wrappet.classList.add('wrappet');
                wrappetOptions.classList.add('wrappet-options');

                close.classList.add('options__close');
                close.addEventListener('click', function (e) {
                    toggle();
                    removeWrappet();
                });

                apply.classList.add('options__apply');
                apply.addEventListener('click', function (e) {
                    toggle();
                    removeWrappet();
                });

                var paste = element.previousElementSibling;
                var flag = 'afterEnd';

                if (!paste) {
                    flag = 'beforeBegin';
                    paste = element.nextElementSibling;
                }

                wrappetOptions.appendChild(close);
                wrappetOptions.appendChild(apply);

                wrappet.appendChild(element);
                wrappet.appendChild(wrappetOptions);

                paste.insertAdjacentElement(flag, wrappet);
            }

            toggle();

            function removeWrappet() {
                setTimeout(function () {
                    wrappet.removeChild(wrappetOptions);
                    var paste = wrappet.previousElementSibling;
                    var flag = 'afterEnd';
                    if (!paste) {
                        flag = 'beforeBegin';
                        paste = wrappet.nextElementSibling;
                    }

                    paste.insertAdjacentElement(flag, element);

                    var parent = wrappet.parentElement;
                    parent.removeChild(wrappet);
                }, 200);
            }

            function toggle() {
                element.classList.toggle('popup_active');
                if (state) {
                    element.removeEventListener('click', handler);
                } else {
                    element.addEventListener('click', handler);
                }

                fullRebase();
                state = !state;
            }

            function rebase(element, start, end) {
                var ms = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var hasStart = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
                var hasEnd = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;

                var s = [start, end];
                if (!state) {
                    ;

                    var _ref = [s[1], s[0]];
                    s[0] = _ref[0];
                    s[1] = _ref[1];
                }if (hasStart) {
                    element.classList.toggle(s[0]);
                }
                if (hasEnd) {
                    setTimeout(function () {
                        element.classList.toggle(s[1]);
                    }, ms);
                }
            }

            function fullRebase() {
                rebase(shade, 'shade_hidden', 'shade_active', state ? 0 : 200);
                rebase(close, 'options_close_hidden', 'options_close_active', 200);
                rebase(apply, 'options_close_hidden', 'options_close_active', 200);
                rebase(element, 'popup_active', 'popup');
                if (state) {
                    rebase(wrappet, 'wrappet', 'wrappet_active', 0, false);
                }
            }
        }

        popupsElems.forEach(function (popup, i, link) {
            popup.addEventListener('click', handler);
        });
    });
})();

/***/ }),

/***/ "./src/scripts/scroll-slide.js":
/*!*************************************!*\
  !*** ./src/scripts/scroll-slide.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    window.addEventListener('load', function (e) {
        var optionsList = document.body.querySelectorAll('.content-section_arrows');

        optionsList.forEach(function (block) {
            var options = block.querySelector('.content-options');
            var list = block.querySelector('.navigation-scrolls');
            var arrows = block.querySelector('.slide-arrows');

            var end = (200 + 30) * (list.classList.contains('navigation-list_grid') ? 4 : 0.9);
            var diff = 10;

            var arrowLeft = arrows.querySelector('.slide-arrows__arrow_left');
            arrowLeft.addEventListener('click', function (event) {
                var summ = 0;
                var scrolling = setInterval(function () {
                    if (summ >= end) clearInterval(scrolling);
                    list.scrollBy(-diff, 0);
                    summ += diff;
                }, 0);

                // list.scrollBy((200 + 15) * 4, 0);
            });

            var arrowRight = arrows.querySelector('.slide-arrows__arrow_right');
            arrowRight.addEventListener('click', function (event) {
                var summ = 0;
                var scrolling = setInterval(function () {
                    if (summ >= end) clearInterval(scrolling);
                    list.scrollBy(diff, 0);
                    summ += diff;
                }, 0);

                // list.scrollBy((200 + 15) * 4, 0);
            });

            function check() {
                var blockWidth = (200 + 15) * 3; // 200 - width; 15 - margin; 3 - amout of elems
                var step = list.scrollWidth / blockWidth | 0; // Math.floor

                var ac = 'slide-arrows__arrow_active'; // activeClass

                if (list.scrollLeft === 0) {
                    arrowLeft.classList.remove(ac);
                } else if (!arrowLeft.classList.contains(ac)) {
                    arrowLeft.classList.add(ac);
                }

                if (list.offsetWidth + list.scrollLeft >= list.scrollWidth) {
                    arrowRight.classList.remove(ac);
                } else if (!arrowRight.classList.contains(ac)) {
                    arrowRight.classList.add(ac);
                }
            }

            list.addEventListener('scroll', check);
            check();
        });
    });
})();

/***/ }),

/***/ "./src/scripts/vertical-scroll.js":
/*!****************************************!*\
  !*** ./src/scripts/vertical-scroll.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    window.addEventListener('load', function (e) {
        var rightBoard = document.body.querySelector('.board-part_right');

        var arrows = document.createElement('div');
        arrows.classList.add('arrows');
        arrows.addEventListener('click', function (event) {
            var _this = this;

            // this.parentElement.scrollBy(0, 270)
            var summ = 0;
            var end = 270;
            var diff = 10;
            var scrolling = setInterval(function () {
                if (summ >= end) clearInterval(scrolling);
                _this.parentElement.scrollBy(0, diff);
                summ += diff;
            }, 10);
        });

        rightBoard.insertAdjacentElement('afterBegin', arrows);

        rightBoard.addEventListener('scroll', function (event) {
            if (rightBoard.offsetHeight + rightBoard.scrollTop >= rightBoard.scrollHeight) {
                arrows.classList.add('arrows_hidden');
            } else if (arrows.classList.contains('arrows_hidden')) {
                arrows.classList.remove('arrows_hidden');
            }
        });
    });
})();

/***/ }),

/***/ "./src/styles/style.sss":
/*!******************************!*\
  !*** ./src/styles/style.sss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/src??postcss!./style.sss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/styles/style.sss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map