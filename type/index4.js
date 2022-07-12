var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(fullname, gender, birthday, email, phoneNumber) {
        this.gender = Gender.FEMALE;
        this.fullname = fullname;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return Employee;
}());
var employeeList = [];
employeeList.push(new Employee("Ngo Minh Ngoc", Gender.OTHER, new Date('1993/11/17'), 'ngocskit@gmail.com', '09123981'));
employeeList.push(new Employee("Pham Thanh Thao", Gender.MALE, new Date('1995/5/2'), 'thao@gmail.com', '01341415'));
employeeList.push(new Employee("Tran Anh Kiet", Gender.MALE, new Date('2000/10/20'), 'kiet@gmail.com', '01237524'));
function showEmployee(employee) {
    console.log(employee);
}
console.log(employeeList.forEach(showEmployee));
