webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Feature.js":
/*!*******************************!*\
  !*** ./components/Feature.js ***!
  \*******************************/
/*! exports provided: LeftFeature, RightFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftFeature", function() { return LeftFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightFeature", function() { return RightFeature; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_styles_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/Button */ "./components/styles/Button.js");

var _jsxFileName = "/Users/devnguyen/Programming/OSU/cs340/hawkins-library/components/Feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: ", ";;\n  flex: ", ";\n  overflow: hidden;\n  padding-left: ", ";\n  padding-right: ", ";\n  height: 360px;\n  width: 100%;\n  img {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    /* position: center; */\n    box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.3); /*tailwindcss large shadow*/\n  }\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  /* background-color: ", "; */\n  background-color: ", ";\n  flex: ", ";\n  color: ", ";\n  padding: 6.4rem;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  /* max-width: ", "; */\n  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1); /*tailwindcss large shadow*/\n  margin: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var StyledFeature = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (props) {
  return props.theme.maxWidth;
});
var StyledFeatureBody = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), function (props) {
  return props.theme.black;
}, function (props) {
  return props.bgColor;
}, function (props) {
  return props.size;
}, function (props) {
  return props.fontColor;
});
var StyledFeatureImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3(), function (props) {
  return props.theme.red;
}, function (props) {
  return props.size;
}, function (props) {
  return props.paddingLeft;
}, function (props) {
  return props.paddingRight;
});
var LeftFeature = function LeftFeature() {
  return __jsx(StyledFeature, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(StyledFeatureBody, {
    size: "2",
    bgColor: function bgColor(props) {
      return props.theme.white;
    },
    fontColor: function fontColor(props) {
      return props.theme.black;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "That perfect tranquility of life, which is nowhere to be found but in retreat, a faithful friend, and a good library."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ab iusto facere, minus non pariatur. Animi iste sunt omnis aliquid ipsam, recusandae, vero, mollitia illo totam odit."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_components_styles_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "See our collection ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("i", {
    className: "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "arrow_forward_ios")))), __jsx(StyledFeatureImage, {
    size: "1",
    paddingLeft: "2.4rem",
    paddingRight: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("img", {
    src: "/features/feature03.jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })));
};
var RightFeature = function RightFeature() {
  return __jsx(StyledFeature, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(StyledFeatureImage, {
    size: "1",
    paddingLeft: "0",
    paddingRight: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("img", {
    src: "/features/feature02.jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), __jsx(StyledFeatureBody, {
    size: "2",
    bgColor: function bgColor(props) {
      return props.theme.black;
    },
    fontColor: function fontColor(props) {
      return props.theme.white;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "There is no such thing as a child who hates to read; there are only children who have not found the right book."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "At our monthly reading clubs, pairs of volunteers read aloud to small groups of children, while their parents receive training on how to encourage their children to read at home."), __jsx(_components_styles_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Find out more ", __jsx("i", {
    className: "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "keyboard_arrow_right"))));
};

/***/ })

})
//# sourceMappingURL=index.js.48a676283553b49fab4c.hot-update.js.map