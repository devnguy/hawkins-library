webpackHotUpdate("static/development/pages/library.js",{

/***/ "./components/Book.js":
/*!****************************!*\
  !*** ./components/Book.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/devnguyen/Programming/OSU/cs340/hawkins-library/components/Book.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 2rem 1rem 2rem 2rem;\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  h3, p {\n    margin: 0;\n  }\n  h3 {\n    font-size: 2.4rem;\n    line-height: 3.2rem;\n    font-weight: 400;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 150px;\n  overflow: hidden;\n  img {\n    /* object-fit: cover; */\n    width: 100%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 10px 12px -10px rgba(0,0,0,0.5); /*lg shadow*/\n  width: 320px;\n  margin-bottom: 3.6rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n.hvr-underline-reveal {\n  /* display: inline-block; */\n  vertical-align: middle;\n  -webkit-transform: perspective(1px) translateZ(0);\n  transform: perspective(1px) translateZ(0);\n  /* box-shadow: 0 0 1px rgba(0, 0, 0, 0); */\n  position: relative;\n  overflow: hidden;\n}\n.hvr-underline-reveal:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: ", ";\n  height: 0.8rem;\n  -webkit-transform: translateY(0.8rem);\n  transform: translateY(0.8rem);\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-duration: 250ms;\n  transition-duration: 250ms;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-underline-reveal:hover:before, .hvr-underline-reveal:focus:before, .hvr-underline-reveal:active:before {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var HoverStyles = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), function (props) {
  return props.theme.red;
});
var StyledBook = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var StyledBookImage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
var StyledBookInfo = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4());
var StyledAddIcon = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject5());

var Book = function Book(props) {
  return __jsx(HoverStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(StyledBook, {
    className: "hvr-underline-reveal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(StyledBookImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("img", {
    src: props.bookImgUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), __jsx(StyledBookInfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, props.bookTitle), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, props.bookAuthor)), __jsx(StyledAddIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("i", {
    className: "material-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "add")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Book);

/***/ })

})
//# sourceMappingURL=library.js.767b2e4c0731b555627c.hot-update.js.map