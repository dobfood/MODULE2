"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(ID, name) {
        this.name = name;
        this.ID = ID;
    }
    Book.prototype.getName = function () {
        return this.name;
    };
    Book.prototype.setName = function (name) {
        this.name = name;
    };
    Book.prototype.getID = function () {
        return this.ID;
    };
    return Book;
}());
exports.Book = Book;
