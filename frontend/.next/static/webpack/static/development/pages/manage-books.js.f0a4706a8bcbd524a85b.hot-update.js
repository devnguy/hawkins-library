webpackHotUpdate("static/development/pages/manage-books.js",{

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/Users/devnguyen/Programming/OSU/cs340/hawkins-library/components/Table.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var NoteApp = function NoteApp() {
  var notesReducer = function notesReducer(state, action) {
    switch (action.type) {
      case 'POPULATE_NOTES':
        return action.notes;

      case 'ADD_NOTE':
        return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state), [{
          title: action.title,
          body: action.body
        }]);

      case 'REMOVE_NOTE':
        return state.filter(function (note) {
          return note.title !== action.title;
        });

      default:
        return state;
    }
  };

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(notesReducer, []),
      notes = _useReducer[0],
      dispatch = _useReducer[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      body = _useState2[0],
      setBody = _useState2[1];

  var addNote = function addNote(e) {
    e.preventDefault();
    dispatch({
      type: 'ADD_NOTE',
      title: title,
      body: body
    });
    setTitle('');
    setBody('');
  };

  var removeNote = function removeNote(title) {
    dispatch({
      type: 'REMOVE_NOTE',
      title: title
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var notes = JSON.parse(localStorage.getItem('notes'));

    if (notes) {
      dispatch({
        type: 'POPULATE_NOTES',
        notes: notes
      });
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    localStorage.setItem('notes', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(notes));
  }, [notes]);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Notes"), notes.map(function (note) {
    return __jsx(Note, {
      key: note.title,
      note: note,
      removeNote: removeNote,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    });
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Add note"), __jsx("form", {
    onSubmit: addNote,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Title"), __jsx("input", {
    value: title,
    onChange: function onChange(e) {
      setTitle(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Body"), __jsx("input", {
    value: body,
    onChange: function onChange(e) {
      setBody(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "add note")));
};

var Note = function Note(_ref) {
  var note = _ref.note,
      removeNote = _ref.removeNote;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log('setting up effect running on notsdfe');
    return function () {
      console.log('cleaning up use EFFECT');
    };
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, note.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, note.body), __jsx("button", {
    onClick: function onClick() {
      return removeNote(note.title);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "x"));
}; //   const [count, setCount] = useState(0)
//   const [text, setText] = useState('')
//   useEffect(() => {
//     console.log('this should only run once');
//   }, [])
//   useEffect(() => {
//     console.log('use effect ran');
//     document.title = count
//   }, [count])
//   return (
//     <div>
//       <p>The {text || 'count'} is {count}</p>
//       <button onClick={() => setCount(count - 1)}>-1</button>
//       <button onClick={() => setCount(0)}>reset</button>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//     </div>
//   )
// }


/* harmony default export */ __webpack_exports__["default"] = (NoteApp);

/***/ })

})
//# sourceMappingURL=manage-books.js.f0a4706a8bcbd524a85b.hot-update.js.map