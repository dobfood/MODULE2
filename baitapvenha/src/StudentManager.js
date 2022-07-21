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
    StudentManager.prototype.findsStudent = function (fulllname) {
        var index = -1;
        var flag = 0;
        StudentManager.student.forEach(function (value, index) {
            if (value.fullname == fulllname) {
                console.table(StudentManager.student[index]);
                flag++;
            }
        });
        if (index == -1) {
            return 'deo co';
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
    StudentManager.prototype.findsStudentage = function (age) {
        for (var i = 0; i < StudentManager.student.length; i++) {
            if (StudentManager.student[i].age === age) {
                console.log("".concat(StudentManager.student[i].age));
            }
            else {
                console.log('deo co');
            }
        }
    };
    StudentManager.prototype.sortAge = function () {
        var n = StudentManager.student.length;
        for (var i = 1; i < n; i++) {
            var key = StudentManager.student[i].age;
            var j = i - 1;
            while (j >= 0 && StudentManager.student[j].age > key) {
                StudentManager.student[j + 1] = StudentManager.student[j];
                j = j - 1;
            }
            StudentManager.student[j + 1].age = key;
            console.log(StudentManager.student[j]._age);
        }
        return StudentManager.student;
    };
    StudentManager.student = [];
    return StudentManager;
}());
exports.StudentManager = StudentManager;
