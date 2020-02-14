webpackHotUpdate("static/development/pages/return.js",{

/***/ "./components/hooks/useScrollFromTop.js":
/*!**********************************************!*\
  !*** ./components/hooks/useScrollFromTop.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Hook returns true if currently at top of page.
 */

var useScrollFromTop = function useScrollFromTop() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isTop = _useState[0],
      setIsTop = _useState[1]; // Add scroll event listener when component mounts.


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var handleScroll = function handleScroll() {
      if (window.scrollY > 2) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener('scroll', handleScroll); // Remove event listener (subscription) on unmount.

    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return isTop;
};

/* harmony default export */ __webpack_exports__["default"] = (useScrollFromTop);

/***/ })

})
//# sourceMappingURL=return.js.994b202e2d7e9af3816c.hot-update.js.map