webpackHotUpdate(0,{

/***/ 92:
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

var _ExchangeRate = __webpack_require__(246);

var _ExchangeRate2 = _interopRequireDefault(_ExchangeRate);

var _BiggestTransaction = __webpack_require__(535);

var _BiggestTransaction2 = _interopRequireDefault(_BiggestTransaction);

var _CalculatedAmount = __webpack_require__(536);

var _CalculatedAmount2 = _interopRequireDefault(_CalculatedAmount);

var _TransactionSum = __webpack_require__(537);

var _TransactionSum2 = _interopRequireDefault(_TransactionSum);

var _reactBootstrap = __webpack_require__(247);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddTransaction = function (_React$Component) {
    _inherits(AddTransaction, _React$Component);

    function AddTransaction(props) {
        _classCallCheck(this, AddTransaction);

        var _this = _possibleConstructorReturn(this, (AddTransaction.__proto__ || Object.getPrototypeOf(AddTransaction)).call(this, props));

        _this.handleNameChange = function (event) {
            var nameVal = event.target.value;
            _this.setState({
                name: nameVal
            });
        };

        _this.handleAmountChange = function (event) {
            var EUROVal = event.target.value.replace("^-?(?!0.)\\d+$");
            _this.setState({
                EURO: EUROVal

            });
        };

        _this.handleAmountCalculate = function (e) {
            e.preventDefault();
            _this.setState({
                PLN: (_this.state.EURO * _this.props.exchangeRate).toFixed(2),
                calculatedRender: true
            });
        };

        _this.handleAdd = function (event) {
            event.preventDefault();
            var newTransaction = { name: _this.state.name, EURO: _this.state.EURO, PLN: _this.state.PLN };
            var newTransactions = [].concat(_toConsumableArray(_this.state.transactions), [newTransaction]);
            localStorage.setItem('newTransactions', JSON.stringify(newTransactions));

            _this.setState({
                transactions: newTransactions,
                render: true
            });
        };

        _this.handleRemoveTransaction = function (name) {
            console.log('remove function works');
            {/*this.setState({
                  transactions:this.state.transactions.filter( (transaction) => transaction.name !== name)
                }) */}
            var storedTransactions = JSON.parse(localStorage.getItem('newTransactions'));
            storedTransactions = storedTransactions.filter(function (transaction) {
                return transaction.name !== name;
            });
            localStorage.setItem('newTransactions', JSON.stringify(storedTransactions));
            _this.setState({
                transactions: storedTransactions
            });
        };

        _this.state = {
            name: '',
            EURO: '',
            PLN: '',
            render: _this.props.render,
            calculatedRender: false,
            transactions: _this.props.storedTransactions
        };

        return _this;
    }

    _createClass(AddTransaction, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'form',
                    { className: 'inputForm' },
                    _react2.default.createElement(
                        'label',
                        { className: 'inputName' },
                        'Name of the transaction:',
                        _react2.default.createElement('input', { type: 'text', value: this.state.name, onChange: this.handleNameChange })
                    ),
                    _react2.default.createElement(
                        'label',
                        { className: 'euroLabel' },
                        'Amount in Euros:',
                        _react2.default.createElement('input', { className: 'transactionEuroAmount', type: 'number', min: '0', value: this.state.EURO, onChange: this.handleAmountChange })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-primary', onClick: this.handleAmountCalculate },
                        'Calculate'
                    )
                ),
                this.state.calculatedRender ? _react2.default.createElement(_CalculatedAmount2.default, { PLN: this.state.PLN, handleAdd: this.handleAdd }) : null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_TransactionList2.default, { transactions: this.state.transactions, removeTransaction: this.handleRemoveTransaction })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_BiggestTransaction2.default, { transactions: this.state.transactions, render: this.state.render })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_TransactionSum2.default, { transactions: this.state.transactions, render: this.state.render })
                )
            );
        }
    }]);

    return AddTransaction;
}(_react2.default.Component);

exports.default = AddTransaction;

/***/ })

})