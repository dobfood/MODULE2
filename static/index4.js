var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var readline = require('readline-sync');
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, birthDate, from, job) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.from = from;
        this.job = job;
    }
    return Employee;
}());
var EmployeeManager = /** @class */ (function (_super) {
    __extends(EmployeeManager, _super);
    function EmployeeManager() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    EmployeeManager.prototype.getAll = function () {
        readline.question('Dien thong tin vo');
        return EmployeeManager.employee;
    };
    EmployeeManager.prototype.add = function (employee) {
        EmployeeManager.employee.push(employee);
    };
    EmployeeManager.employee = [];
    return EmployeeManager;
}(Employee));
var employee1 = new Employee("anh ", "kiet", "22/12/2000", "quang nam ", "rua bat");
var employee = new EmployeeManager();
employee.add(employee1);
console.log(employee.getAll());
