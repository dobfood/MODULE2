"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(fullname, email, group) {
        this._fullname = fullname;
        this._email = email;
        this._group = group;
    }
    get fullname() {
        return this._fullname;
    }
    set fullname(value) {
        this._fullname = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get group() {
        return this._group;
    }
    set group(value) {
        this._group = value;
    }
}
exports.Student = Student;
