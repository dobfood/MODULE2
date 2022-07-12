"use strict";
exports.__esModule = true;
var index7_1 = require("./index7.");
var book1 = new index7_1.Book("nhung chu cuu Thao", "anh kiet", false);
var book2 = new index7_1.Book("nhung ke ngheo kho", "anh kiet", true);
var book3 = new index7_1.Book("nguoi yeu toi de thuong", "anh kiet", true);
var listbook = [];
listbook.push(book1, book2, book3);
for (var i = 0; i < listbook.length; i++) {
    var book = listbook[i];
    var bookinfo = book.title + "By" + book.author;
    if (book.already) {
        console.log('cuon sach' + bookinfo + "van con ");
    }
    else {
        console.log('cuon sach' + bookinfo + 'da het');
    }
}
