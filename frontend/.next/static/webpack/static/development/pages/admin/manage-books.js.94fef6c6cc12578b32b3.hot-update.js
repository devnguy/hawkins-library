webpackHotUpdate("static/development/pages/admin/manage-books.js",{

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
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavItem */ "./components/nav/NavItem.js");
/* harmony import */ var _hooks_useScrollFromTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useScrollFromTop */ "./components/hooks/useScrollFromTop.js");
/* harmony import */ var _NavLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavLogo */ "./components/nav/NavLogo.js");

var _jsxFileName = "/Users/devnguyen/Programming/OSU/cs340/hawkins-library/components/nav/NavBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  /* Transparent nav, active when at the top of page. */\n  .default-nav {\n    background: transparent;\n    box-shadow: inset 0 4rem 40px rgba(0,0,0,0.22);\n    a {\n      color: ", ";\n      :hover {\n        color: ", ";\n      }\n    }\n  }\n\n  /* Drop down menu on hover over admin nav item. */\n  .admin-dropdown {\n    position: relative;\n    display: inline-block;\n  }\n  .admin-dropdown-menu {\n    padding: 1rem 0;\n    background: ", ";\n    width: 200px;\n    display: none;\n    position: absolute;\n    /* vertical-align: baseline; */\n    transition: 200ms;\n    box-shadow: 0px 10px 15px -10px rgba(0,0,0,0.3); /*md shadow*/\n    li a {\n      color: ", ";\n      line-height: 1rem;\n      :hover {\n        color: ", ";\n      }\n    }\n  }\n  .admin-dropdown:hover .admin-dropdown-menu {\n    display: block;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  background-color: ", ";\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  z-index: 1;\n  margin: 0;\n  width: 100%;\n  /* height: 7rem; */\n  /* padding: 0 5%; */\n  box-shadow: 0px 4px 6px -1px rgba(0,0,0,0.1);\n  transition: 250ms;\n\n  ul {\n    text-decoration: none;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    font-size: 1.3rem;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var StyledNavBar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav(_templateObject(), function (props) {
  return props.theme.white;
});
var StyledNavContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), function (props) {
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
  var isTop = Object(_hooks_useScrollFromTop__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return __jsx(StyledNavContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(StyledNavBar, {
    className: isTop ? 'default-nav' : '',
    id: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_NavLogo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    className: "admin-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_NavItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    route: "/",
    pageName: "Admin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx("div", {
    className: "admin-dropdown-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_NavItem__WEBPACK_IMPORTED_MODULE_3__["AdminNavItem"], {
    route: "/admin/manage-books",
    pageName: "Manage Books",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx(_NavItem__WEBPACK_IMPORTED_MODULE_3__["AdminNavItem"], {
    route: "/manage-events",
    pageName: "Manage Events",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx(_NavItem__WEBPACK_IMPORTED_MODULE_3__["AdminNavItem"], {
    route: "/checkouts",
    pageName: "Manage Checkouts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx(_NavItem__WEBPACK_IMPORTED_MODULE_3__["AdminNavItem"], {
    route: "/",
    pageName: "Another",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), __jsx(_NavItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    route: "/library",
    pageName: "Library",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx(_NavItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    route: "/events",
    pageName: "Events",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx(_NavItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    route: "/return",
    pageName: "Return Books",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx(_NavItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    route: "/signup",
    pageName: "Sign Up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=manage-books.js.94fef6c6cc12578b32b3.hot-update.js.map