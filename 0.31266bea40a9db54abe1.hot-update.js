webpackHotUpdate(0,{

/***/ 169:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExchangeRate = function (_React$Component) {
    _inherits(ExchangeRate, _React$Component);

    function ExchangeRate(props) {
        _classCallCheck(this, ExchangeRate);

        var _this = _possibleConstructorReturn(this, (ExchangeRate.__proto__ || Object.getPrototypeOf(ExchangeRate)).call(this, props));

        _this.state = {
            euro: null,
            loaded: false
        };
        return _this;
    }

    _createClass(ExchangeRate, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var apiURL = 'https://api.nbp.pl/api/exchangerates/tables/A/?format=json';
            fetch(apiURL).then(function (r) {
                return r.json();
            }).then(function (data) {
                console.log('fetch');
                var apiExchange = data[0].rates[7].mid;
                console.log(apiExchange);
                _this2.setState({
                    euro: apiExchange,
                    loaded: true
                });
                console.log(_this2.state.euro);
            });
        }
    }, {
        key: 'render',
        value: function render() {

            if (this.state.loaded === false) {
                return null;
            } else {
                var render = false;
                var stored = [];
                var storedTransactions = localStorage.getItem('newTransactions');
                if (storedTransactions) {
                    stored = JSON.parse(storedTransactions);
                    render = true;
                }
                var exchangeRate = this.state.euro;
                console.log(exchangeRate);

                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        _defineProperty({ className: 'exchangeRate' }, 'className', 'text-warning'),
                        '1 EURO costs ',
                        exchangeRate,
                        ' PLN'
                    ),
                    _react2.default.createElement(_AddTransaction2.default, { exchangeRate: exchangeRate, storedTransactions: stored, render: render })
                );
            }
        }
    }]);

    return ExchangeRate;
}(_react2.default.Component);

exports.default = ExchangeRate;

/***/ })

})