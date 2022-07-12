"use strict";
exports.__esModule = true;
exports.BookManager = void 0;
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.books = [];
    }
    BookManager.prototype.add = function (book) {
        this.books.push(book);
    };
    BookManager.prototype.getList = function () {
        return this.books;
    };
    BookManager.prototype.findBook = function (ID) {
        var books = -1;
        this.books.forEach(function (book, index) {
            if (book.ID == ID) {
                books = index;
            }
        });
        return books;
    };
    return BookManager;
}());
exports.BookManager = BookManager;
