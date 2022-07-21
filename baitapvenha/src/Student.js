"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(fullname, email, group, age) {
        this._fullname = fullname;
        this._email = email;
        this._group = group;
        this._age = age;
    }
    Object.defineProperty(Student.prototype, "fullname", {
        get: function () {
            return this._fullname;
        },
        set: function (value) {
            this._fullname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "group", {
        get: function () {
            return this._group;
        },
        set: function (value) {
            this._group = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
exports.Student = Student;
