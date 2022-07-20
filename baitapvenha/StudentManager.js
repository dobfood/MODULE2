"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManager = void 0;
var StudentManager = /** @class */ (function () {
    function StudentManager() {
    }
    StudentManager.prototype.getAllStudent = function () {
        return StudentManager.student;
    };
    StudentManager.prototype.addNewStudent = function (student) {
        StudentManager.student.push(student);
    };
    StudentManager.prototype.updateStudent = function (value, student) {
        StudentManager.student[value] = student;
    };
    StudentManager.prototype.deleteStudent = function (value) {
        StudentManager.student.splice(value, 1);
    };
    StudentManager.prototype.findsStudent = function (fullname) {
        var index = -1;
        for (var i = 0; i < StudentManager.student.length; i++) {
            if (StudentManager.student[i].fullname === fullname) {
                index = i;
                break;
            }
        }
        if (index == -1) {
            return 'deo co';
        }
        else {
            return ("".concat(StudentManager.student[index].fullname, " + ").concat(StudentManager.student[index].email, "+ ").concat(StudentManager.student[index].group));
        }
    };
    StudentManager.prototype.findsStudentemail = function (email) {
        for (var i = 0; i < StudentManager.student.length; i++) {
            if (StudentManager.student[i].email == email) {
                console.log("".concat(StudentManager.student[i].email));
            }
            else {
                console.log('deo co');
            }
        }
    };
    StudentManager.prototype.findsStudentgroup = function (group) {
        for (var i = 0; i < StudentManager.student.length; i++) {
            if (StudentManager.student[i].group == group) {
                console.log("".concat(StudentManager.student[i].group));
            }
            else {
                console.log('deo co');
            }
        }
    };
    StudentManager.student = [];
    return StudentManager;
}());
exports.StudentManager = StudentManager;
