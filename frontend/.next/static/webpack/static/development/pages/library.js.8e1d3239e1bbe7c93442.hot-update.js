webpackHotUpdate("static/development/pages/library.js",{

/***/ "./pages/library.js":
/*!**************************!*\
  !*** ./pages/library.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _components_PageBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PageBanner */ "./components/PageBanner.js");
/* harmony import */ var _components_styles_PageContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/styles/PageContent */ "./components/styles/PageContent.js");
/* harmony import */ var _components_styles_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/styles/Button */ "./components/styles/Button.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Input */ "./components/Input.js");
/* harmony import */ var _components_Book__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Book */ "./components/Book.js");

var _jsxFileName = "/Users/devnguyen/Programming/OSU/cs340/hawkins-library/pages/library.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  /* background: red; */\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  /* display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap; */\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 2.4rem 2.4rem;\n  @media (max-width: 1100px) {\n    grid-template-columns: 1fr 1fr;\n  }\n  @media (max-width: ", ") {\n    grid-template-columns: 1fr;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var StyledLibraryContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (props) {
  return props.theme.screenSizeMed;
});
var StyledCheckoutInput = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
/**
 * When user clicks on '+', translate/transform to check mark.
 * Use state to keep track of books added and removed from 'cart'.
 * At bottom of page, have user type in user id, and click checkout button.
 * Send request to database to with changes.
 * Modal pop up confirming checkout successful.
 */

var Library = function Library() {
  return __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_components_PageBanner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    bannerUrl: "/banners/library-banner.jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_components_styles_PageContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    pageTitle: "Library",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(StyledLibraryContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_components_Book__WEBPACK_IMPORTED_MODULE_9__["default"], {
    bookTitle: "To Kill A Mockingbird",
    bookImgUrl: "/books/to-kill-a-mockingbird.jpg",
    bookAuthor: "Harper Lee",
    action: "{<i className=\"material-icons\">add</i>}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(_components_Book__WEBPACK_IMPORTED_MODULE_9__["default"], {
    bookTitle: "Pride and Prejudice",
    bookImgUrl: "/books/pride-and-prejudice.jpg",
    bookAuthor: "Jane Austen",
    action: "{<i className=\"material-icons\">add</i>}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(_components_Book__WEBPACK_IMPORTED_MODULE_9__["default"], {
    bookTitle: "The Hunger Games",
    bookImgUrl: "/books/hunger-games.jpg",
    bookAuthor: "Suzanne Collins",
    action: "{<i className=\"material-icons\">add</i>}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(_components_Book__WEBPACK_IMPORTED_MODULE_9__["default"], {
    bookTitle: "Harry Potter and The Sorcerer's Stone",
    bookImgUrl: "/books/harry-potter-sorcerers-stone.jpg",
    bookAuthor: "JK Rowling",
    action: "{<i className=\"material-icons\">add</i>}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(_components_Book__WEBPACK_IMPORTED_MODULE_9__["default"], {
    bookTitle: "The Fault In Our Stars",
    bookImgUrl: "/books/fault-in-our-stars.jpg",
    bookAuthor: "John Green",
    action: "{<i className=\"material-icons\">add</i>}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx(_components_Book__WEBPACK_IMPORTED_MODULE_9__["default"], {
    bookTitle: "The Elephant Tree",
    bookImgUrl: "/books/elephant-tree.jpg",
    bookAuthor: "John Green",
    action: "{<i className=\"material-icons\">add</i>}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(_components_Book__WEBPACK_IMPORTED_MODULE_9__["default"], {
    bookTitle: "The Book Thief",
    bookImgUrl: "/books/book-thief.jpg",
    bookAuthor: "RD Ronald",
    action: "{<i className=\"material-icons\">add</i>}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(_components_Book__WEBPACK_IMPORTED_MODULE_9__["default"], {
    bookTitle: "1984",
    bookImgUrl: "/books/1984.jpg",
    bookAuthor: "George Orwell",
    action: "{<i className=\"material-icons\">add</i>}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(_components_Book__WEBPACK_IMPORTED_MODULE_9__["default"], {
    bookTitle: "The Giving Tree",
    bookImgUrl: "/books/giving-tree.jpg",
    bookAuthor: "Shel Silverstein",
    action: "{<i className=\"material-icons\">add</i>}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(_components_Book__WEBPACK_IMPORTED_MODULE_9__["default"], {
    bookTitle: "The Alchemist",
    bookImgUrl: "/books/alchemist.jpg",
    bookAuthor: "Paulo Coelho",
    action: "{<i className=\"material-icons\">add</i>}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), __jsx(StyledCheckoutInput, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
    placeholder: "User ID",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx(_components_styles_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Check Out")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Library);

/***/ })

})
//# sourceMappingURL=library.js.8e1d3239e1bbe7c93442.hot-update.js.map