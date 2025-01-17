webpackHotUpdate("static/development/pages/baccarat/m.js",{

/***/ "./components/baccarat/game-counter.js":
/*!*********************************************!*\
  !*** ./components/baccarat/game-counter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sound */ "../node_modules/react-sound/lib/index.js");
/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_sound__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../libs/styleguide/colors */ "./libs/styleguide/colors.js");
/* harmony import */ var _libs_i18n_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../libs/i18n-util */ "./libs/i18n-util.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var GameCounter = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (_ref) {
  var baccarat = _ref.baccarat,
      modal = _ref.modal;
  return {
    baccarat: baccarat,
    modal: modal
  };
}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GameCounter, _React$Component);

  function GameCounter() {
    _classCallCheck(this, GameCounter);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameCounter).apply(this, arguments));
  }

  _createClass(GameCounter, [{
    key: "isPlaying",
    value: function isPlaying() {
      var countdown = this.props.countdown;

      switch (countdown) {
        case '00:06':
        case '00:05':
        case '00:04':
        case '00:03':
        case '00:02':
        case '00:01':
          return react_sound__WEBPACK_IMPORTED_MODULE_2___default.a.status.PLAYING;

        default:
          return react_sound__WEBPACK_IMPORTED_MODULE_2___default.a.status.STOPPED;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var styles = {
        root: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 68,
          textAlign: 'center',
          borderStyle: 'solid',
          borderColor: '#979797',
          borderRadius: 2,
          borderWidth: 1
        },
        time: {
          color: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_4__["default"].orangeYellow
        }
      };
      var countdown = this.props.countdown;
      var playStatus = this.isPlaying();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.root
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_sound__WEBPACK_IMPORTED_MODULE_2___default.a, {
        url: "/static/audio/5s.mp3",
        autoLoad: true,
        playStatus: playStatus
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object(_libs_i18n_util__WEBPACK_IMPORTED_MODULE_5__["default"])('open_time')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.time
      }, countdown));
    }
  }]);

  return GameCounter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class);
GameCounter.propTypes = {
  countdown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (GameCounter);

/***/ })

})
//# sourceMappingURL=m.js.23d6f9c0cd46b7ae207f.hot-update.js.map