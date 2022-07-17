"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(fullnamme, numberhome, numberelectric) {
        this._fullnamme = fullnamme;
        this._numberhome = numberhome;
        this._numberelectric = numberelectric;
    }
    Object.defineProperty(Client.prototype, "Numberhome", {
        get: function () {
            return this._numberhome;
        },
        set: function (value) {
            this._numberhome = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "Fullname", {
        get: function () {
            return this._fullnamme;
        },
        set: function (value) {
            this._fullnamme = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "Numberelectric", {
        get: function () {
            return this._numberelectric;
        },
        set: function (value) {
            this._numberelectric = value;
        },
        enumerable: false,
        configurable: true
    });
    return Client;
}());
exports.Client = Client;
