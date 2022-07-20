"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var Student_1 = require("./Student");
var StudentManager_1 = require("./StudentManager");
var studentmanager = new StudentManager_1.StudentManager;
function inputStudent() {
    var name = readline.question('Nhap ten:');
    var email = readline.question('Nhap email: ');
    var group = readline.question('Nhap ten nhom');
    return new Student_1.Student(name, email, group);
}
function showStudent() {
    var student = studentmanager.getAllStudent();
    for (var _i = 0, student_1 = student; _i < student_1.length; _i++) {
        var studentt = student_1[_i];
        console.table(" + Ten hoc sinh : ".concat(studentt.fullname, " \n + Email hoc sinh: ").concat(studentt.email, " \n + Nhom hoc sinh :  ").concat(studentt.group));
    }
}
function deleteStudent() {
    console.log('xoa hoc sinh');
    var value = +readline.question('nhap vi tri muon xoa:');
    studentmanager.deleteStudent(value);
}
function addStudent() {
    console.log("Them hoc sinh moi ");
    var student = inputStudent();
    studentmanager.addNewStudent(student);
}
function findStudentName() {
    console.log('1.Nhap Ten hoc sinh');
    var name = readline.question('nhap ten : ');
    var student = studentmanager.findsStudent(name);
    console.log(student);
}
function findStudentEmail() {
    console.log('2. nhap Email hoc sinh');
    var email = readline.question('nhap email : ');
    studentmanager.findsStudentemail(email);
}
function updateStudentt() {
    console.log('Thay doi hoc sinh ');
    var value = +readline.question('Nhap vi tri muon thay doi ');
    var student = inputStudent();
    studentmanager.updateStudent(value, student);
}
function findStudentGroup() {
    console.log('3. nhap Group hoc sinh ');
    var group = readline.question('nhap group : ');
    studentmanager.findsStudentgroup(group);
}
function findStudent() {
    var check2;
    do {
        menu2();
        check2 = +readline.question('Nhap lua chon : ');
        switch (check2) {
            case 1:
                findStudentName();
                break;
            case 2:
                findStudentEmail();
                break;
            case 3:
                findStudentGroup();
                break;
            case 0:
                break;
        }
    } while (check2 != 0);
}
function menu2() {
    console.log('1. Tim theo ten ');
    console.log('2. Tim theo email ');
    console.log('3. Tim theo group ');
    console.log('0. Thoat ');
}
function menu() {
    console.log('<---------------------->');
    console.log('1. Them hoc sinh');
    console.log('2. Xoa hoc sinh');
    console.log('3. Tim hoc sinh');
    console.log('4. Chinh sua hoc sinh');
    console.log('5. Hien thi hoc sinh');
    console.log('0. Thoat');
    console.log('<----------------------->');
}
var check;
do {
    menu();
    check = +readline.question('Nhap lua chon : ');
    switch (check) {
        case 1:
            addStudent();
            break;
        case 2:
            deleteStudent();
            break;
        case 3:
            findStudent();
            break;
        case 4:
            updateStudentt();
            break;
        case 5:
            showStudent();
            break;
        case 0:
            break;
    }
} while (check != 0);
