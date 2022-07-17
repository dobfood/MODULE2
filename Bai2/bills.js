"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bill = void 0;
var Bill = /** @class */ (function () {
    function Bill(index, indexnews, money, Client) {
        this._index = index;
        this._indexnews = indexnews;
        this._money = money;
        this._client = Client;
    }
    Object.defineProperty(Bill.prototype, "Index", {
        get: function () {
            return this._index;
        },
        set: function (value) {
            this._index = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "Indexnews", {
        get: function () {
            return this._indexnews;
        },
        set: function (value) {
            this._indexnews = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "Money", {
        get: function () {
            return this._money;
        },
        set: function (value) {
            this._money = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "Client", {
        get: function () {
            return this._client;
        },
        set: function (value) {
            this._client = value;
        },
        enumerable: false,
        configurable: true
    });
    return Bill;
}());
exports.Bill = Bill;
