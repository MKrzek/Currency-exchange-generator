webpackHotUpdate(0,{

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(26);

var _react2 = _interopRequireDefault(_react);

var _AddTransaction = __webpack_require__(62);

var _AddTransaction2 = _interopRequireDefault(_AddTransaction);

var _TransactionItem = __webpack_require__(271);

var _TransactionItem2 = _interopRequireDefault(_TransactionItem);

var _reactBootstrap = __webpack_require__(400);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TransactionList = function (_React$Component) {
    _inherits(TransactionList, _React$Component);

    function TransactionList(props) {
        _classCallCheck(this, TransactionList);

        return _possibleConstructorReturn(this, (TransactionList.__proto__ || Object.getPrototypeOf(TransactionList)).call(this, props));
    }

    _createClass(TransactionList, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var transactionItems = this.props.transactions.map(function (transaction, index) {
                return _react2.default.createElement(_TransactionItem2.default, { key: index, name: transaction.name,
                    EURO: transaction.EURO,
                    PLN: transaction.PLN,
                    onDone: _this2.props.removeTransaction });
            });

            return _react2.default.createElement(
                'ol',
                { className: 'table table-striped table-hover ' },
                transactionItems
            );
        }
    }]);

    return TransactionList;
}(_react2.default.Component);

exports.default = TransactionList;

/***/ })

})