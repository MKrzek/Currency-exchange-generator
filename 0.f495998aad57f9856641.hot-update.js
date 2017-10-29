webpackHotUpdate(0,{

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _TransactionList = __webpack_require__(193);

var _TransactionList2 = _interopRequireDefault(_TransactionList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TransactionItem = function (_React$Component) {
    _inherits(TransactionItem, _React$Component);

    function TransactionItem(props) {
        _classCallCheck(this, TransactionItem);

        var _this = _possibleConstructorReturn(this, (TransactionItem.__proto__ || Object.getPrototypeOf(TransactionItem)).call(this, props));

        _this.handleRemoveClick = function () {

            if (typeof _this.props.onDone === 'function') {
                _this.props.onDone(_this.props.name);
            }
            console.log('remove click works');
        };

        return _this;
    }

    _createClass(TransactionItem, [{
        key: 'render',
        value: function render() {
            var name = this.props.name;
            var EURO = this.props.EURO;
            var PLN = this.props.PLN;

            return _react2.default.createElement(
                'li',
                { className: 'transactionItem' },
                _react2.default.createElement(
                    'span',
                    { className: 'transactionItemName' },
                    name
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'transactionItemEuro' },
                    EURO,
                    '\u20AC'
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'transactionItemPln' },
                    PLN,
                    'PLN'
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'removeButtonSpan' },
                    _react2.default.createElement(
                        'button',
                        { className: 'removeButton', onClick: this.handleRemoveClick },
                        'X'
                    )
                )
            );
        }
    }]);

    return TransactionItem;
}(_react2.default.Component);

exports.default = TransactionItem;

/***/ })

})