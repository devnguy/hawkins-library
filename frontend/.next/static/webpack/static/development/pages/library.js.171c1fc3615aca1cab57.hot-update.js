webpackHotUpdate("static/development/pages/library.js",{

/***/ "./components/nav/NavBar.js":
/*!**********************************!*\
  !*** ./components/nav/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavItem */ "./components/nav/NavItem.js");
/* harmony import */ var _hooks_useScrollFromTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useScrollFromTop */ "./components/hooks/useScrollFromTop.js");

var _jsxFileName = "/Users/devnguyen/Programming/OSU/cs340/hawkins-library/components/nav/NavBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  /* Transparent nav, active when at the top of page. */\n  .default-nav {\n    background: transparent;\n    box-shadow: inset 0 4rem 40px rgba(0,0,0,0.22);\n    a {\n      color: ", ";\n      :hover {\n        color: ", ";\n      }\n    }\n  }\n\n  /* Drop down menu on hover over admin nav item. */\n  .admin-dropdown {\n    position: relative;\n    display: inline-block;\n  }\n  .admin-dropdown-menu {\n    padding: 1rem 0;\n    background: ", ";\n    width: 200px;\n    display: none;\n    position: absolute;\n    /* vertical-align: baseline; */\n    transition: 200ms;\n    box-shadow: 0px 10px 15px -10px rgba(0,0,0,0.3); /*md shadow*/\n    li a {\n      color: ", ";\n      line-height: 1rem;\n      :hover {\n        color: ", ";\n      }\n    }\n  }\n  .admin-dropdown:hover .admin-dropdown-menu {\n    display: block;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  background-color: ", ";\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  z-index: 1;\n  margin: 0;\n  width: 100%;\n  /* height: 7rem; */\n  /* padding: 0 5%; */\n  box-shadow: 0px 4px 6px -1px rgba(0,0,0,0.1);\n  transition: 250ms;\n\n  ul {\n    text-decoration: none;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    font-size: 1.3rem;\n  }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 1em;\n  text-transform: uppercase;\n  line-height: 8rem;\n  padding: 0 .94rem;\n  height: 7rem;\n  a {\n    font-family: 'Raleway', sans-serif;\n    font-size: 3.2rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var StyledNavLogo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

var NavLogo = function NavLogo() {
  return __jsx(StyledNavLogo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "HAWKINS")));
};

var StyledNavBar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav(_templateObject2(), function (props) {
  return props.theme.white;
});
var StyledNavContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3(), function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.red;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.red;
});

var NavBar = function NavBar() {
  var isTop = Object(_hooks_useScrollFromTop__WEBPACK_IMPORTED_MODULE_5__["default"])();
  return __jsx(StyledNavContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(StyledNavBar, {
    className: isTop ? 'default-nav' : '',
    id: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(NavLogo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    className: "admin-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(_NavItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    route: "/",
    pageName: "Admin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx("div", {
    className: "admin-dropdown-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(_NavItem__WEBPACK_IMPORTED_MODULE_4__["AdminNavItem"], {
    route: "/admin/manage-books",
    pageName: "Manage Books",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx(_NavItem__WEBPACK_IMPORTED_MODULE_4__["AdminNavItem"], {
    route: "/manage-events",
    pageName: "Manage Events",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx(_NavItem__WEBPACK_IMPORTED_MODULE_4__["AdminNavItem"], {
    route: "/checkouts",
    pageName: "Manage Checkouts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), __jsx(_NavItem__WEBPACK_IMPORTED_MODULE_4__["AdminNavItem"], {
    route: "/",
    pageName: "Another",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }))), __jsx(_NavItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    route: "/library",
    pageName: "Library",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), __jsx(_NavItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    route: "/events",
    pageName: "Events",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx(_NavItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    route: "/return",
    pageName: "Return Books",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), __jsx(_NavItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    route: "/signup",
    pageName: "Sign Up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=library.js.171c1fc3615aca1cab57.hot-update.js.map