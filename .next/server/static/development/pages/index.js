module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/oscarhermawan/Desktop/portofolio/react-touring/components/Header.js";



var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Oscar"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "vendor/fontawesome-free/css/all.min.css",
    rel: "stylesheet",
    type: "text/css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat:400,700",
    rel: "stylesheet",
    type: "text/css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Kaushan+Script",
    rel: "stylesheet",
    type: "text/css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic",
    rel: "stylesheet",
    type: "text/css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700",
    rel: "stylesheet",
    type: "text/css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
var _jsxFileName = "/Users/oscarhermawan/Desktop/portofolio/react-touring/components/Layout.js";





var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2019066093",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2019066093" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2019066093",
    css: "body{overflow-x:hidden;font-family:'Roboto Slab',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';}p{line-height:1.75;}a{color:#fed136;}a:hover{color:#fec503;}.text-primary{color:#fed136 !important;}h1,h2,h3,h4,h5,h6{font-weight:700;font-family:'Montserrat',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';}section{padding:100px 0;}section h2.section-heading{font-size:40px;margin-top:0;margin-bottom:15px;}section h3.section-subheading{font-size:16px;font-weight:400;font-style:italic;margin-bottom:75px;text-transform:none;font-family:'Droid Serif',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';}@media (min-width:768px){section{padding:150px 0;}}.btn{font-family:'Montserrat',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';font-weight:700;}.btn-xl{font-size:18px;padding:20px 40px;}.btn-primary{background-color:#fed136;border-color:#fed136;}.btn-primary:active,.btn-primary:focus,.btn-primary:hover{background-color:#fec810 !important;border-color:#fec810 !important;color:white;}.btn-primary:active,.btn-primary:focus{-webkit-box-shadow:0 0 0 0.2rem rgba(254,209,55,0.5) !important;box-shadow:0 0 0 0.2rem rgba(254,209,55,0.5) !important;}::-moz-selection{background:#fed136;text-shadow:none;}::selection{background:#fed136;text-shadow:none;}img::-moz-selection{background:transparent;}img::selection{background:transparent;}img::-moz-selection{background:transparent;}#mainNav{background-color:#212529;}#mainNav .navbar-toggler{font-size:12px;right:0;padding:13px;text-transform:uppercase;color:white;border:0;background-color:#fed136;font-family:'Montserrat',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';}#mainNav .navbar-brand{color:#fed136;font-family:'Kaushan Script',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';}#mainNav .navbar-brand.active,#mainNav .navbar-brand:active,#mainNav .navbar-brand:focus,#mainNav .navbar-brand:hover{color:#fec503;}#mainNav .navbar-nav .nav-item .nav-link{font-size:90%;font-weight:400;padding:0.75em 0;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;color:white;font-family:'Montserrat',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';}#mainNav .navbar-nav .nav-item .nav-link.active,#mainNav .navbar-nav .nav-item .nav-link:hover{color:#fed136;}@media (min-width:992px){#mainNav{padding-top:25px;padding-bottom:25px;-webkit-transition:padding-top 0.3s,padding-bottom 0.3s;-webkit-transition:padding-top 0.3s,padding-bottom 0.3s;transition:padding-top 0.3s,padding-bottom 0.3s;border:none;background-color:transparent;}#mainNav .navbar-brand{font-size:1.75em;-webkit-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}#mainNav .navbar-nav .nav-item .nav-link{padding:1.1em 1em !important;}#mainNav.navbar-shrink{padding-top:0;padding-bottom:0;background-color:#212529;}#mainNav.navbar-shrink .navbar-brand{font-size:1.25em;padding:12px 0;}}header.masthead{text-align:center;color:white;background-image:url(\"/static/img/header-bg.jpg\");background-repeat:no-repeat;background-attachment:scroll;background-position:center center;background-size:cover;}header.masthead .intro-text{padding-top:150px;padding-bottom:100px;}header.masthead .intro-text .intro-lead-in{font-size:22px;font-style:italic;line-height:22px;margin-bottom:25px;font-family:'Droid Serif',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';}header.masthead .intro-text .intro-heading{font-size:50px;font-weight:700;line-height:50px;margin-bottom:25px;font-family:'Montserrat',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';}@media (min-width:768px){header.masthead .intro-text{padding-top:300px;padding-bottom:200px;}header.masthead .intro-text .intro-lead-in{font-size:40px;font-style:italic;line-height:40px;margin-bottom:25px;font-family:'Droid Serif',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';}header.masthead .intro-text .intro-heading{font-size:75px;font-weight:700;line-height:75px;margin-bottom:50px;font-family:'Montserrat',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';}}.service-heading{margin:15px 0;text-transform:none;}#portfolio .portfolio-item{right:0;margin:0 0 15px;}#portfolio .portfolio-item .portfolio-link{position:relative;display:block;max-width:400px;margin:0 auto;cursor:pointer;}#portfolio .portfolio-item .portfolio-link .portfolio-hover{position:absolute;width:100%;height:100%;-webkit-transition:all ease 0.5s;-webkit-transition:all ease 0.5s;transition:all ease 0.5s;opacity:0;background:rgba(254,209,54,0.9);}#portfolio .portfolio-item .portfolio-link .portfolio-hover:hover{opacity:1;}#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content{font-size:20px;position:absolute;top:50%;width:100%;height:20px;margin-top:-12px;text-align:center;color:white;}#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content i{margin-top:-12px;}#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h3,#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h4{margin:0;}#portfolio .portfolio-item .portfolio-caption{max-width:400px;margin:0 auto;padding:25px;text-align:center;background-color:#fff;}#portfolio .portfolio-item .portfolio-caption h4{margin:0;text-transform:none;}#portfolio .portfolio-item .portfolio-caption p{font-size:16px;font-style:italic;margin:0;font-family:'Droid Serif',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';}#portfolio *{z-index:2;}@media (min-width:767px){#portfolio .portfolio-item{margin:0 0 30px;}}.portfolio-modal{padding-right:0px !important;}.portfolio-modal .modal-dialog{margin:1rem;max-width:100vw;}.portfolio-modal .modal-content{padding:100px 0;text-align:center;}.portfolio-modal .modal-content h2{font-size:3em;margin-bottom:15px;}.portfolio-modal .modal-content p{margin-bottom:30px;}.portfolio-modal .modal-content p.item-intro{font-size:16px;font-style:italic;margin:20px 0 30px;font-family:'Droid Serif',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';}.portfolio-modal .modal-content ul.list-inline{margin-top:0;margin-bottom:30px;}.portfolio-modal .modal-content img{margin-bottom:30px;}.portfolio-modal .modal-content button{cursor:pointer;}.portfolio-modal .close-modal{position:absolute;top:25px;right:25px;width:75px;height:75px;cursor:pointer;background-color:transparent;}.portfolio-modal .close-modal:hover{opacity:0.3;}.portfolio-modal .close-modal .lr{z-index:1051;width:1px;height:75px;margin-left:35px;-webkit-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);background-color:#212529;}.portfolio-modal .close-modal .lr .rl{z-index:1052;width:1px;height:75px;-webkit-transform:rotate(90deg);-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);background-color:#212529;}.timeline{position:relative;padding:0;list-style:none;}.timeline:before{position:absolute;top:0;bottom:0;left:40px;width:2px;margin-left:-1.5px;content:'';background-color:#e9ecef;}.timeline>li{position:relative;min-height:50px;margin-bottom:50px;}.timeline>li:after,.timeline>li:before{display:table;content:' ';}.timeline>li:after{clear:both;}.timeline>li .timeline-panel{position:relative;float:right;width:100%;padding:0 20px 0 100px;text-align:left;}.timeline>li .timeline-panel:before{right:auto;left:-15px;border-right-width:15px;border-left-width:0;}.timeline>li .timeline-panel:after{right:auto;left:-14px;border-right-width:14px;border-left-width:0;}.timeline>li .timeline-image{position:absolute;z-index:100;left:0;width:80px;height:80px;margin-left:0;text-align:center;color:white;border:7px solid #e9ecef;border-radius:100%;background-color:#fed136;}.timeline>li .timeline-image h4{font-size:10px;line-height:14px;margin-top:12px;}.timeline>li.timeline-inverted>.timeline-panel{float:right;padding:0 20px 0 100px;text-align:left;}.timeline>li.timeline-inverted>.timeline-panel:before{right:auto;left:-15px;border-right-width:15px;border-left-width:0;}.timeline>li.timeline-inverted>.timeline-panel:after{right:auto;left:-14px;border-right-width:14px;border-left-width:0;}.timeline>li:last-child{margin-bottom:0;}.timeline .timeline-heading h4{margin-top:0;color:inherit;}.timeline .timeline-heading h4.subheading{text-transform:none;}.timeline .timeline-body>ul,.timeline .timeline-body>p{margin-bottom:0;}@media (min-width:768px){.timeline:before{left:50%;}.timeline>li{min-height:100px;margin-bottom:100px;}.timeline>li .timeline-panel{float:left;width:41%;padding:0 20px 20px 30px;text-align:right;}.timeline>li .timeline-image{left:50%;width:100px;height:100px;margin-left:-50px;}.timeline>li .timeline-image h4{font-size:13px;line-height:18px;margin-top:16px;}.timeline>li.timeline-inverted>.timeline-panel{float:right;padding:0 30px 20px 20px;text-align:left;}}@media (min-width:992px){.timeline>li{min-height:150px;}.timeline>li .timeline-panel{padding:0 20px 20px;}.timeline>li .timeline-image{width:150px;height:150px;margin-left:-75px;}.timeline>li .timeline-image h4{font-size:18px;line-height:26px;margin-top:30px;}.timeline>li.timeline-inverted>.timeline-panel{padding:0 20px 20px;}}@media (min-width:1200px){.timeline>li{min-height:170px;}.timeline>li .timeline-panel{padding:0 20px 20px 100px;}.timeline>li .timeline-image{width:170px;height:170px;margin-left:-85px;}.timeline>li .timeline-image h4{margin-top:40px;}.timeline>li.timeline-inverted>.timeline-panel{padding:0 100px 20px 20px;}}.team-member{margin-bottom:50px;text-align:center;}.team-member img{width:225px;height:225px;border:7px solid #fff;}.team-member h4{margin-top:25px;margin-bottom:0;text-transform:none;}.team-member p{margin-top:0;}section#contact{background-color:#212529;background-image:url(\"/static/img/map-image.png\");background-repeat:no-repeat;background-position:center;}section#contact .section-heading{color:#fff;}section#contact .form-group{margin-bottom:25px;}section#contact .form-group input,section#contact .form-group textarea{padding:20px;}section#contact .form-group input.form-control{height:auto;}section#contact .form-group textarea.form-control{height:248px;}section#contact .form-control:focus{border-color:#fed136;-webkit-box-shadow:none;box-shadow:none;}section#contact::-webkit-input-placeholder{font-weight:700;color:#ced4da;font-family:'Montserrat',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';}section#contact:-moz-placeholder{font-weight:700;color:#ced4da;font-family:'Montserrat',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';}section#contact::-moz-placeholder{font-weight:700;color:#ced4da;font-family:'Montserrat',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';}section#contact:-ms-input-placeholder{font-weight:700;color:#ced4da;font-family:'Montserrat',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';}footer{padding:25px 0;text-align:center;}footer span.copyright{font-size:90%;line-height:40px;text-transform:none;font-family:'Montserrat',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';}footer ul.quicklinks{font-size:90%;line-height:40px;margin-bottom:0;text-transform:none;font-family:'Montserrat',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';}ul.social-buttons{margin-bottom:0;}ul.social-buttons li a{font-size:20px;line-height:50px;display:block;width:50px;height:50px;-webkit-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;color:white;border-radius:100%;outline:none;background-color:#212529;}ul.social-buttons li a:active,ul.social-buttons li a:focus,ul.social-buttons li a:hover{background-color:#fed136;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vc2Nhcmhlcm1hd2FuL0Rlc2t0b3AvcG9ydG9mb2xpby9yZWFjdC10b3VyaW5nL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVV1QixBQUcyQixBQUtELEFBSUgsQUFJQSxBQUlXLEFBU1QsQUFLQSxBQUlELEFBTUEsQUFVRyxBQUtpTCxBQUtwTCxBQUtVLEFBS1csQUFNK0IsQUFLaEQsQUFLQSxBQUtJLEFBSUEsQUFJQSxBQUlFLEFBSVYsQUFXRCxBQUtBLEFBSUEsQUFTQSxBQUtLLEFBUUEsQUFLWSxBQUdmLEFBS0csQUFNRCxBQVVBLEFBS0gsQUFRQSxBQVNLLEFBSUgsQUFPQSxBQVNILEFBS04sQUFLVSxBQVFBLEFBVVIsQUFJSyxBQVdFLEFBS1IsQUFJTyxBQVFQLEFBS00sQUFPTCxBQUtRLEFBS1csQUFJakIsQUFLSSxBQUtGLEFBS0ssQUFJSixBQU9GLEFBS00sQUFJSixBQUlHLEFBVU4sQUFLQyxBQVlBLEFBVUssQUFNQSxBQVdBLEFBTUosQUFLSCxBQUlPLEFBUVAsQUFPQSxBQU9PLEFBY0gsQUFNSCxBQU1ELEFBT0EsQUFPSyxBQUlILEFBS08sQUFLSixBQUtMLEFBR1EsQUFJTixBQU1GLEFBTU0sQUFLSCxBQVFLLEFBR0csQUFHUixBQUtHLEFBS0ssQUFNSCxBQUdTLEFBR2QsQUFLSSxBQUdVLEFBS1QsQUFLUCxBQU1JLEFBTUgsQUFJWSxBQU9kLEFBSVEsQUFLTixBQUlELEFBSUMsQUFJUSxBQU1MLEFBTUEsQUFNQSxBQU1BLEFBTUQsQUFLRCxBQU9BLEFBUUUsQUFJRCxBQWNVLFFBM2NULENBMkNsQixBQVlzQixBQXVOcEIsQUFhYyxDQXBRaEIsQUE0Q0EsQ0FzSEEsQUFZYSxBQU9BLEFBaUNBLEFBT0EsQUFpQ0MsQUE4RmQsQ0FsU2tCLEFBaURsQixBQXFHeUIsQUErREksQUFjWixBQXNCQSxBQWtCRixBQW9DZixDQXJScUIsQUE0QlQsQUFZQSxBQTRHSSxBQXlHaEIsQUFvQkEsQUFRQSxDQTdsQkEsQUFJQSxBQTBHeU0sQUFLek0sQUFJa0IsQUFTbEIsQUFxQnFCLEFBK0RDLEFBZ0dELEFBeUZQLEFBdVBLLEFBT0EsQ0FqbkJKLEFBTUcsQUFvQkUsQUErQ1YsQUE0RVUsQUFRRixBQWFJLEFBT0YsQUF5Q0EsQUFpQ0EsQUF3Q0EsQUFnQnBCLEFBNkdtQixBQWdFRSxBQXdCQSxBQTZHRCxBQXdCRCxDQXRvQmtMLEFBS3JNLEFBb0JFLEFBOE5jLEFBeUJkLEFBY2tCLEFBcUtwQixBQWNBLEFBc0VFLEFBbUJnQixBQTRDRixBQU1BLEFBTUEsQUFNQSxBQTBCaEIsQ0F2cEJBLEFBeUl3QixBQVFRLEFBYWIsQUFxR25CLEFBMk93QixBQTZCdEIsQUFzQkEsQ0F0aUJvTSxBQXlLeEwsQUFVUyxBQXNCRSxBQThCVCxBQVFILEFBMkdGLEFBcUNDLEFBTUosQUFXVSxBQWVKLEFBc0JBLENBbldLLEFBS0EsQUEyT25CLEFBZ0JBLEFBdU9vQixBQWdDcEIsQ0FuSEEsQUE2Q0UsQUFhQSxDQXhDMkIsQUFNWixBQTRHUyxDQWxNQSxBQU9BLEFBaUNBLEFBT0EsQ0EzWDFCLEFBSUEsQUFJQSxBQVNlLEFBNlBELEFBWUEsQ0FuSmQsQUFtS1csQ0FyWFgsQUFpRHVCLEFBc0N2QixBQSthc0IsQUFzQkEsQUFrQkUsQUFlNEIsQUFnR3BELENBdlJBLEFBa0pFLEFBV0EsQ0F6TlcsQUF1SWIsQ0E5YnFCLEFBZ1JyQixBQTRFa0IsQ0FyT2hCLEFBcUZZLEFBMENkLEFBcUJBLENBOUttQixBQXlDaUMsQUF3R3JDLEFBOElGLEFBc0JKLEFBMkw0TCxBQU1BLEFBTUEsQUFNQSxDQXpsQmpMLEFBcUhTLEFBa0NWLEFBb0JFLEFBeWJDLEFBT0osQ0FqZmhCLEFBb0VnQixBQXNHbEIsQUFzSGtCLEFBZ0VFLEFBd0JBLEFBeUNFLEFBNEZOLENBbm1CaEIsQUEySG1CLEFBcUJFLEFBZ0RYLEFBaUNDLEFBK0JYLEFBU3FCLEFBZ0VULEFBa1FaLENBM2FBLEFBMkZBLEFBd0ZxQixBQThHQyxDQXBKSCxBQWFlLEFBa0ZoQixDQW5ZZ0IsQUFZbEMsQUFLQSxBQXNCMkIsQ0FpQ2tDLEFBd1NoRCxBQTZEWCxBQXFCa0IsQUFpRHBCLENBOU5hLENBeEtiLEFBc0JFLEVBdUNpQyxBQWN0QixBQWtLWSxDQWpJNkssQ0FibEwsQUFxSFIsQUFnSlYsQUFzQkEsQ0E3S0YsQ0ExT3dCLEFBb2ROLENBeGlCbEIsQUFzV3NCLEFBT0EsQUFpQ0EsQUFPQSxBQWlDRCxBQXlLUixDQTduQmIsQUE2RnFCLEFBOGJyQixBQXNGc0IsQ0FwZEQsQUFvQkUsQUFtQlAsQUErTUYsQUFhZCxBQWdFRSxBQXdCQSxDQWxmbUIsQUFrVFAsQ0FuS08sQUFxQkUsQ0E0UHZCLEFBb01xTSxDQS9ZdkwsQUF3RXdMLEFBcUNwSyxBQW1KaEMsQUFzRUYsQ0E3THFCLEFBU3JCLEFBd0hFLEdBMVdBLENBbWdCWSxHQTFPRSxDQTFVRixBQXFLVSxBQTBFUCxBQThRakIsQ0FsWWlCLENBZ1JmLENBN2EyRCxBQW9MMUMsQUFpS0QsRUFRbEIsQUFPQSxBQWlDQSxBQU9BLENBdFJxTSxBQW9CRSxBQWtLN0ssQUE4UjJLLENBM21CL0ssQUE0QlIsQ0FtSHdMLEFBcUJFLEFBb2QxSyxHQTFSakIsQ0ExUkYsQ0FrSWdCLEFBd01QLENBcUpVLENBaFBDLENBcEgvQixHQWxLQSxBQWtHOEIsQUF3UDlCLENBaktvQixDQWpKTyxDQW9LM0IsQUFzSDJCLENBN0JELElBalU0SyxJQThZeEwsQ0EzU3VDLEFBUW5ELElBNmdCb0IsRUFsYVIsSUE2VWUsQ0FwSkYsQ0E1RjNCLEVBOU9xTSxDQTBEdEssQUFnTy9CLEdBeElBLFNBdExBLFNBK1dxQixDQW9KckIsRUE5VlksS0F0RXdCLEdBMUN0QixFQWlIdUIsR0FrYnZCLEdBeE9hLEdBcEVBLENBdFAwSyxLQW1pQmhMLFdBeFRNLEdBak1ILEVBaVJ4QixDQTFNQSxFQXNJQSxBQTZTZSxRQWhuQkcsS0FpbkJTLElBMWYzQixBQWlNQSxJQS9OZ0IsR0F0SGhCLEFBOEJBLEVBK0RBLENBdkhBLE1BaUppQyxLQWdlakMsQUFNQSxBQU1BLEFBTUEsQUFzQ0EsYUF6WUEsUUErV0EsRUF2VUEsQ0F0TEUsYUFpREYsQUFvQkUsQUFnY0YsR0E1ZEEsQUFxQkUsbUJBbktGLGtCQXFFQSw2Q0FrQkEiLCJmaWxlIjoiL1VzZXJzL29zY2FyaGVybWF3YW4vRGVza3RvcC9wb3J0b2ZvbGlvL3JlYWN0LXRvdXJpbmcvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcidcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWRlci8+XG4gICAgPE5hdmJhci8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMS43NTtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjZmVkMTM2O1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmZWM1MDM7XG4gICAgICB9XG5cbiAgICAgIC50ZXh0LXByaW1hcnkge1xuICAgICAgICBjb2xvcjogI2ZlZDEzNiAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICBoMSxcbiAgICAgIGgyLFxuICAgICAgaDMsXG4gICAgICBoNCxcbiAgICAgIGg1LFxuICAgICAgaDYge1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiAxMDBweCAwO1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uIGgyLnNlY3Rpb24taGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbiBoMy5zZWN0aW9uLXN1YmhlYWRpbmcge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNzVweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRHJvaWQgU2VyaWYnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNTBweCAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5idG4ge1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB9XG5cbiAgICAgIC5idG4teGwge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgICAgIH1cblxuICAgICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZDEzNjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmVkMTM2O1xuICAgICAgfVxuXG4gICAgICAuYnRuLXByaW1hcnk6YWN0aXZlLCAuYnRuLXByaW1hcnk6Zm9jdXMsIC5idG4tcHJpbWFyeTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWM4MTAgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmVjODEwICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgLmJ0bi1wcmltYXJ5OmFjdGl2ZSwgLmJ0bi1wcmltYXJ5OmZvY3VzIHtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNTQsIDIwOSwgNTUsIDAuNSkgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjU0LCAyMDksIDU1LCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIDo6LW1vei1zZWxlY3Rpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmVkMTM2O1xuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOjpzZWxlY3Rpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmVkMTM2O1xuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cblxuICAgICAgaW1nOjotbW96LXNlbGVjdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICBpbWc6OnNlbGVjdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICBpbWc6Oi1tb3otc2VsZWN0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgICNtYWluTmF2IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcbiAgICAgIH1cblxuICAgICAgI21haW5OYXYgLm5hdmJhci10b2dnbGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgcGFkZGluZzogMTNweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWQxMzY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcbiAgICAgIH1cblxuICAgICAgI21haW5OYXYgLm5hdmJhci1icmFuZCB7XG4gICAgICAgIGNvbG9yOiAjZmVkMTM2O1xuICAgICAgICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJywgJ05vdG8gQ29sb3IgRW1vamknO1xuICAgICAgfVxuXG4gICAgICAjbWFpbk5hdiAubmF2YmFyLWJyYW5kLmFjdGl2ZSwgI21haW5OYXYgLm5hdmJhci1icmFuZDphY3RpdmUsICNtYWluTmF2IC5uYXZiYXItYnJhbmQ6Zm9jdXMsICNtYWluTmF2IC5uYXZiYXItYnJhbmQ6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2ZlYzUwMztcbiAgICAgIH1cblxuICAgICAgI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBwYWRkaW5nOiAwLjc1ZW0gMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG4gICAgICB9XG5cbiAgICAgICNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlLCAjbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmZWQxMzY7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAjbWFpbk5hdiB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBwYWRkaW5nLXRvcCAwLjNzLCBwYWRkaW5nLWJvdHRvbSAwLjNzO1xuICAgICAgICAgIHRyYW5zaXRpb246IHBhZGRpbmctdG9wIDAuM3MsIHBhZGRpbmctYm90dG9tIDAuM3M7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgICNtYWluTmF2IC5uYXZiYXItYnJhbmQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS43NWVtO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgIH1cbiAgICAgICAgI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gICAgICAgICAgcGFkZGluZzogMS4xZW0gMWVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgI21haW5OYXYubmF2YmFyLXNocmluayB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcbiAgICAgICAgfVxuICAgICAgICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXZiYXItYnJhbmQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBoZWFkZXIubWFzdGhlYWQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pbWcvaGVhZGVyLWJnLmpwZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICB9XG5cbiAgICAgIGhlYWRlci5tYXN0aGVhZCAuaW50cm8tdGV4dCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICAgICAgfVxuXG4gICAgICBoZWFkZXIubWFzdGhlYWQgLmludHJvLXRleHQgLmludHJvLWxlYWQtaW4ge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRHJvaWQgU2VyaWYnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG4gICAgICB9XG5cbiAgICAgIGhlYWRlci5tYXN0aGVhZCAuaW50cm8tdGV4dCAuaW50cm8taGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGhlYWRlci5tYXN0aGVhZCAuaW50cm8tdGV4dCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwMHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIubWFzdGhlYWQgLmludHJvLXRleHQgLmludHJvLWxlYWQtaW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0Ryb2lkIFNlcmlmJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJywgJ05vdG8gQ29sb3IgRW1vamknO1xuICAgICAgICB9XG4gICAgICAgIGhlYWRlci5tYXN0aGVhZCAuaW50cm8tdGV4dCAuaW50cm8taGVhZGluZyB7XG4gICAgICAgICAgZm9udC1zaXplOiA3NXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDc1cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNlcnZpY2UtaGVhZGluZyB7XG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgI3BvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0ge1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbWFyZ2luOiAwIDAgMTVweDtcbiAgICAgIH1cblxuICAgICAgI3BvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0gLnBvcnRmb2xpby1saW5rIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgI3BvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0gLnBvcnRmb2xpby1saW5rIC5wb3J0Zm9saW8taG92ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UgMC41cztcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC41cztcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTQsIDIwOSwgNTQsIDAuOSk7XG4gICAgICB9XG5cbiAgICAgICNwb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIC5wb3J0Zm9saW8tbGluayAucG9ydGZvbGlvLWhvdmVyOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgI3BvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0gLnBvcnRmb2xpby1saW5rIC5wb3J0Zm9saW8taG92ZXIgLnBvcnRmb2xpby1ob3Zlci1jb250ZW50IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG5cbiAgICAgICNwb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIC5wb3J0Zm9saW8tbGluayAucG9ydGZvbGlvLWhvdmVyIC5wb3J0Zm9saW8taG92ZXItY29udGVudCBpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEycHg7XG4gICAgICB9XG5cbiAgICAgICNwb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIC5wb3J0Zm9saW8tbGluayAucG9ydGZvbGlvLWhvdmVyIC5wb3J0Zm9saW8taG92ZXItY29udGVudCBoMyxcbiAgICAgICNwb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIC5wb3J0Zm9saW8tbGluayAucG9ydGZvbGlvLWhvdmVyIC5wb3J0Zm9saW8taG92ZXItY29udGVudCBoNCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgI3BvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0gLnBvcnRmb2xpby1jYXB0aW9uIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIH1cblxuICAgICAgI3BvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0gLnBvcnRmb2xpby1jYXB0aW9uIGg0IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgI3BvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0gLnBvcnRmb2xpby1jYXB0aW9uIHAge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LWZhbWlseTogJ0Ryb2lkIFNlcmlmJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJywgJ05vdG8gQ29sb3IgRW1vamknO1xuICAgICAgfVxuXG4gICAgICAjcG9ydGZvbGlvICoge1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgI3BvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0ge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDMwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnBvcnRmb2xpby1tb2RhbCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAucG9ydGZvbGlvLW1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgICB9XG5cbiAgICAgIC5wb3J0Zm9saW8tbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAxMDBweCAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5wb3J0Zm9saW8tbW9kYWwgLm1vZGFsLWNvbnRlbnQgaDIge1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIH1cblxuICAgICAgLnBvcnRmb2xpby1tb2RhbCAubW9kYWwtY29udGVudCBwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIH1cblxuICAgICAgLnBvcnRmb2xpby1tb2RhbCAubW9kYWwtY29udGVudCBwLml0ZW0taW50cm8ge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMzBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdEcm9pZCBTZXJpZicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcbiAgICAgIH1cblxuICAgICAgLnBvcnRmb2xpby1tb2RhbCAubW9kYWwtY29udGVudCB1bC5saXN0LWlubGluZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICB9XG5cbiAgICAgIC5wb3J0Zm9saW8tbW9kYWwgLm1vZGFsLWNvbnRlbnQgaW1nIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIH1cblxuICAgICAgLnBvcnRmb2xpby1tb2RhbCAubW9kYWwtY29udGVudCBidXR0b24ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5wb3J0Zm9saW8tbW9kYWwgLmNsb3NlLW1vZGFsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgIHJpZ2h0OiAyNXB4O1xuICAgICAgICB3aWR0aDogNzVweDtcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAucG9ydGZvbGlvLW1vZGFsIC5jbG9zZS1tb2RhbDpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgIH1cblxuICAgICAgLnBvcnRmb2xpby1tb2RhbCAuY2xvc2UtbW9kYWwgLmxyIHtcbiAgICAgICAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAgICAgei1pbmRleDogMTA1MTtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzVweDtcbiAgICAgICAgLyogSUUgOSAqL1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICAgICAgfVxuXG4gICAgICAucG9ydGZvbGlvLW1vZGFsIC5jbG9zZS1tb2RhbCAubHIgLnJsIHtcbiAgICAgICAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAgICAgei1pbmRleDogMTA1MjtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICAvKiBJRSA5ICovXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XG4gICAgICB9XG5cbiAgICAgIC50aW1lbGluZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnRpbWVsaW5lOmJlZm9yZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMS41cHg7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgICAgfVxuXG4gICAgICAudGltZWxpbmUgPiBsaSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgIH1cblxuICAgICAgLnRpbWVsaW5lID4gbGk6YWZ0ZXIsIC50aW1lbGluZSA+IGxpOmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICB9XG5cbiAgICAgIC50aW1lbGluZSA+IGxpOmFmdGVyIHtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICB9XG5cbiAgICAgIC50aW1lbGluZSA+IGxpIC50aW1lbGluZS1wYW5lbCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4IDAgMTAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIC50aW1lbGluZSA+IGxpIC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogLTE1cHg7XG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMTVweDtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgICB9XG5cbiAgICAgIC50aW1lbGluZSA+IGxpIC50aW1lbGluZS1wYW5lbDphZnRlciB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAtMTRweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNHB4O1xuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgICAgIH1cblxuICAgICAgLnRpbWVsaW5lID4gbGkgLnRpbWVsaW5lLWltYWdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiA3cHggc29saWQgI2U5ZWNlZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZDEzNjtcbiAgICAgIH1cblxuICAgICAgLnRpbWVsaW5lID4gbGkgLnRpbWVsaW5lLWltYWdlIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgIH1cblxuICAgICAgLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWwge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweCAwIDEwMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICAudGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogLTE1cHg7XG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMTVweDtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgICB9XG5cbiAgICAgIC50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IC0xNHB4O1xuICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE0cHg7XG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICAudGltZWxpbmUgPiBsaTpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgLnRpbWVsaW5lIC50aW1lbGluZS1oZWFkaW5nIGg0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICB9XG5cbiAgICAgIC50aW1lbGluZSAudGltZWxpbmUtaGVhZGluZyBoNC5zdWJoZWFkaW5nIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC50aW1lbGluZSAudGltZWxpbmUtYm9keSA+IHVsLFxuICAgICAgLnRpbWVsaW5lIC50aW1lbGluZS1ib2R5ID4gcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAudGltZWxpbmU6YmVmb3JlIHtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLnRpbWVsaW5lID4gbGkge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50aW1lbGluZSA+IGxpIC50aW1lbGluZS1wYW5lbCB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgd2lkdGg6IDQxJTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAzMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIC50aW1lbGluZSA+IGxpIC50aW1lbGluZS1pbWFnZSB7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgICAgICAgfVxuICAgICAgICAudGltZWxpbmUgPiBsaSAudGltZWxpbmUtaW1hZ2UgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgcGFkZGluZzogMCAzMHB4IDIwcHggMjBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAudGltZWxpbmUgPiBsaSB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpbWVsaW5lID4gbGkgLnRpbWVsaW5lLXBhbmVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwcHggMjBweDtcbiAgICAgICAgfVxuICAgICAgICAudGltZWxpbmUgPiBsaSAudGltZWxpbmUtaW1hZ2Uge1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNzVweDtcbiAgICAgICAgfVxuICAgICAgICAudGltZWxpbmUgPiBsaSAudGltZWxpbmUtaW1hZ2UgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwcHggMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgIC50aW1lbGluZSA+IGxpIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxNzBweDtcbiAgICAgICAgfVxuICAgICAgICAudGltZWxpbmUgPiBsaSAudGltZWxpbmUtcGFuZWwge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4IDEwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50aW1lbGluZSA+IGxpIC50aW1lbGluZS1pbWFnZSB7XG4gICAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgICAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC04NXB4O1xuICAgICAgICB9XG4gICAgICAgIC50aW1lbGluZSA+IGxpIC50aW1lbGluZS1pbWFnZSBoNCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgfVxuICAgICAgICAudGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbCB7XG4gICAgICAgICAgcGFkZGluZzogMCAxMDBweCAyMHB4IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRlYW0tbWVtYmVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAudGVhbS1tZW1iZXIgaW1nIHtcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xuICAgICAgICBoZWlnaHQ6IDIyNXB4O1xuICAgICAgICBib3JkZXI6IDdweCBzb2xpZCAjZmZmO1xuICAgICAgfVxuXG4gICAgICAudGVhbS1tZW1iZXIgaDQge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnRlYW0tbWVtYmVyIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uI2NvbnRhY3Qge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltZy9tYXAtaW1hZ2UucG5nXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24jY29udGFjdCAuc2VjdGlvbi1oZWFkaW5nIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24jY29udGFjdCAuZm9ybS1ncm91cCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24jY29udGFjdCAuZm9ybS1ncm91cCBpbnB1dCxcbiAgICAgIHNlY3Rpb24jY29udGFjdCAuZm9ybS1ncm91cCB0ZXh0YXJlYSB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24jY29udGFjdCAuZm9ybS1ncm91cCBpbnB1dC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24jY29udGFjdCAuZm9ybS1ncm91cCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICAgICAgICBoZWlnaHQ6IDI0OHB4O1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uI2NvbnRhY3QgLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZlZDEzNjtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uI2NvbnRhY3QgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICNjZWQ0ZGE7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbiNjb250YWN0IDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICNjZWQ0ZGE7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbiNjb250YWN0IDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjY2VkNGRhO1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24jY29udGFjdCA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICNjZWQ0ZGE7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIHtcbiAgICAgICAgcGFkZGluZzogMjVweCAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciBzcGFuLmNvcHlyaWdodCB7XG4gICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIHVsLnF1aWNrbGlua3Mge1xuICAgICAgICBmb250LXNpemU6IDkwJTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG4gICAgICB9XG5cbiAgICAgIHVsLnNvY2lhbC1idXR0b25zIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgdWwuc29jaWFsLWJ1dHRvbnMgbGkgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICAgICAgfVxuXG4gICAgICB1bC5zb2NpYWwtYnV0dG9ucyBsaSBhOmFjdGl2ZSwgdWwuc29jaWFsLWJ1dHRvbnMgbGkgYTpmb2N1cywgdWwuc29jaWFsLWJ1dHRvbnMgbGkgYTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWQxMzY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXX0= */\n/*@ sourceURL=/Users/oscarhermawan/Desktop/portofolio/react-touring/components/Layout.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/oscarhermawan/Desktop/portofolio/react-touring/components/Navbar.js";


var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-dark fixed-top",
    id: "mainNav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-brand js-scroll-trigger",
    href: "#page-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Start Bootstrap"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "navbar-toggler navbar-toggler-right",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarResponsive",
    "aria-controls": "navbarResponsive",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Menu", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-bars",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarResponsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-nav text-uppercase ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link js-scroll-trigger",
    href: "#services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Services")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link js-scroll-trigger",
    href: "#portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Portfolio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link js-scroll-trigger",
    href: "#about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link js-scroll-trigger",
    href: "#team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Team")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link js-scroll-trigger",
    href: "#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Contact"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/Users/oscarhermawan/Desktop/portofolio/react-touring/pages/index.js";




var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "masthead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "intro-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "intro-lead-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Welcome To Our Studio!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "intro-heading text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "It's Nice To Meet You"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-primary btn-xl text-uppercase js-scroll-trigger",
    href: "#services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Tell Me More")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "section-heading text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Services"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "section-subheading text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fa-stack fa-4x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-circle fa-stack-2x text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-shopping-cart fa-stack-1x fa-inverse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "service-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "E-Commerce"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fa-stack fa-4x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-circle fa-stack-2x text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-laptop fa-stack-1x fa-inverse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "service-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Responsive Design"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fa-stack fa-4x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-circle fa-stack-2x text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-lock fa-stack-1x fa-inverse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "service-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Web Security"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "bg-light",
    id: "portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "section-heading text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Portfolio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "section-subheading text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 col-sm-6 portfolio-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "portfolio-link",
    "data-toggle": "modal",
    href: "#portfolioModal1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-hover-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus fa-3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-fluid",
    src: "/static/img/portfolio/01-thumbnail.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Threads"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Illustration"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 col-sm-6 portfolio-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "portfolio-link",
    "data-toggle": "modal",
    href: "#portfolioModal2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-hover-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus fa-3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-fluid",
    src: "/static/img/portfolio/02-thumbnail.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Explore"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Graphic Design"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 col-sm-6 portfolio-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "portfolio-link",
    "data-toggle": "modal",
    href: "#portfolioModal3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-hover-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus fa-3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-fluid",
    src: "/static/img/portfolio/03-thumbnail.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Finish"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Identity"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 col-sm-6 portfolio-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "portfolio-link",
    "data-toggle": "modal",
    href: "#portfolioModal4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-hover-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus fa-3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-fluid",
    src: "/static/img/portfolio/04-thumbnail.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Lines"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Branding"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 col-sm-6 portfolio-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "portfolio-link",
    "data-toggle": "modal",
    href: "#portfolioModal5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-hover-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus fa-3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-fluid",
    src: "/static/img/portfolio/05-thumbnail.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Southwest"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Website Design"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 col-sm-6 portfolio-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "portfolio-link",
    "data-toggle": "modal",
    href: "#portfolioModal6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-hover-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus fa-3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-fluid",
    src: "/static/img/portfolio/06-thumbnail.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Window"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Photography")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "section-heading text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "section-subheading text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "timeline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded-circle img-fluid",
    src: "/static/img/about/1.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "2009-2011"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "subheading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Our Humble Beginnings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "timeline-inverted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded-circle img-fluid",
    src: "/static/img/about/2.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "March 2011"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "subheading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "An Agency is Born")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded-circle img-fluid",
    src: "/static/img/about/3.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "December 2012"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "subheading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "Transition to Full Service")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "timeline-inverted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded-circle img-fluid",
    src: "/static/img/about/4.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "July 2014"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "subheading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "Phase Two Expansion")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "timeline-inverted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeline-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, "Be Part", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }), "Of Our", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }), "Story!")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "bg-light",
    id: "team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "section-heading text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, "Our Amazing Team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "section-subheading text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-member",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "mx-auto rounded-circle",
    src: "/static/img/team/1.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, "Kay Garland"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, "Lead Designer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-inline social-buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-facebook-f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-linkedin-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-member",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "mx-auto rounded-circle",
    src: "/static/img/team/2.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, "Larry Parker"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, "Lead Marketer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-inline social-buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-facebook-f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-linkedin-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "team-member",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "mx-auto rounded-circle",
    src: "/static/img/team/3.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, "Diana Pertersen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, "Lead Developer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-inline social-buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-facebook-f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-linkedin-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-8 mx-auto text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "large text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 col-sm-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-fluid d-block mx-auto",
    src: "/static/img/logos/envato.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 col-sm-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-fluid d-block mx-auto",
    src: "/static/img/logos/designmodo.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 col-sm-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-fluid d-block mx-auto",
    src: "/static/img/logos/themeforest.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 col-sm-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-fluid d-block mx-auto",
    src: "/static/img/logos/creative-market.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "section-heading text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, "Contact Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "section-subheading text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    id: "contactForm",
    name: "sentMessage",
    noValidate: "novalidate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    id: "name",
    type: "text",
    placeholder: "Your Name *",
    required: "required",
    "data-validation-required-message": "Please enter your name.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "help-block text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    id: "email",
    type: "email",
    placeholder: "Your Email *",
    required: "required",
    "data-validation-required-message": "Please enter your email address.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "help-block text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    id: "phone",
    type: "tel",
    placeholder: "Your Phone *",
    required: "required",
    "data-validation-required-message": "Please enter your phone number.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "help-block text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    className: "form-control",
    id: "message",
    placeholder: "Your Message *",
    required: "required",
    "data-validation-required-message": "Please enter a message.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "help-block text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "sendMessageButton",
    className: "btn btn-primary btn-xl text-uppercase",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, "Send Message")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: this
  }, "Copyright \xA9 Your Website 2018")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-inline social-buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-facebook-f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-linkedin-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-inline quicklinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: this
  }, "Privacy Policy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  }, "Terms of Use"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-modal modal fade",
    id: "portfolioModal1",
    tabIndex: "-1",
    role: "dialog",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "close-modal",
    "data-dismiss": "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-8 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    },
    __self: this
  }, "Project Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "item-intro text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-fluid d-block mx-auto",
    src: "/static/img/portfolio/01-full.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: this
  }, "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: this
  }, "Date: January 2017"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: this
  }, "Client: Threads"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }, "Category: Illustration")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    "data-dismiss": "modal",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453
    },
    __self: this
  }), "Close Project")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-modal modal fade",
    id: "portfolioModal2",
    tabIndex: "-1",
    role: "dialog",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "close-modal",
    "data-dismiss": "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-8 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475
    },
    __self: this
  }, "Project Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "item-intro text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-fluid d-block mx-auto",
    src: "/static/img/portfolio/02-full.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478
    },
    __self: this
  }, "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: this
  }, "Date: January 2017"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481
    },
    __self: this
  }, "Client: Explore"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: this
  }, "Category: Graphic Design")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    "data-dismiss": "modal",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485
    },
    __self: this
  }), "Close Project")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-modal modal fade",
    id: "portfolioModal3",
    tabIndex: "-1",
    role: "dialog",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "close-modal",
    "data-dismiss": "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-8 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: this
  }, "Project Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "item-intro text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-fluid d-block mx-auto",
    src: "/static/img/portfolio/03-full.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510
    },
    __self: this
  }, "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512
    },
    __self: this
  }, "Date: January 2017"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513
    },
    __self: this
  }, "Client: Finish"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    },
    __self: this
  }, "Category: Identity")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    "data-dismiss": "modal",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517
    },
    __self: this
  }), "Close Project")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-modal modal fade",
    id: "portfolioModal4",
    tabIndex: "-1",
    role: "dialog",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "close-modal",
    "data-dismiss": "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-8 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540
    },
    __self: this
  }, "Project Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "item-intro text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-fluid d-block mx-auto",
    src: "/static/img/portfolio/04-full.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543
    },
    __self: this
  }, "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545
    },
    __self: this
  }, "Date: January 2017"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546
    },
    __self: this
  }, "Client: Lines"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547
    },
    __self: this
  }, "Category: Branding")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    "data-dismiss": "modal",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
    },
    __self: this
  }), "Close Project")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-modal modal fade",
    id: "portfolioModal5",
    tabIndex: "-1",
    role: "dialog",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "close-modal",
    "data-dismiss": "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-8 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573
    },
    __self: this
  }, "Project Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "item-intro text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-fluid d-block mx-auto",
    src: "/static/img/portfolio/05-full.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576
    },
    __self: this
  }, "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578
    },
    __self: this
  }, "Date: January 2017"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579
    },
    __self: this
  }, "Client: Southwest"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580
    },
    __self: this
  }, "Category: Website Design")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    "data-dismiss": "modal",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583
    },
    __self: this
  }), "Close Project")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-modal modal fade",
    id: "portfolioModal6",
    tabIndex: "-1",
    role: "dialog",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "close-modal",
    "data-dismiss": "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-8 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606
    },
    __self: this
  }, "Project Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "item-intro text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-fluid d-block mx-auto",
    src: "/static/img/portfolio/06-full.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609
    },
    __self: this
  }, "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611
    },
    __self: this
  }, "Date: January 2017"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612
    },
    __self: this
  }, "Client: Window"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613
    },
    __self: this
  }, "Category: Photography")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    "data-dismiss": "modal",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616
    },
    __self: this
  }), "Close Project")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/jquery/jquery-3.2.1.slim.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/jquery/popper.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/jquery/bootstrap.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map