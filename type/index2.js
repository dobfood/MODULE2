var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.setName = function (value) {
        this.name = value;
    };
    Staff.prototype.setEmail = function (value) {
        this.email = value;
    };
    Staff.prototype.setAge = function (value) {
        this.age = value;
    };
    return Staff;
}());
var staff = new Staff("kiet", "kiet@gmail.com", 22);
var nameStaff = staff.getName();
console.log(nameStaff);
staff.setName("deptrai");
var currentNameStaff = staff.getName();
console.log(currentNameStaff);
console.log(staff);
