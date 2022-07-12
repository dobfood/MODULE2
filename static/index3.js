var Role;
(function (Role) {
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["Users"] = 2] = "Users";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.isAdmin = function () {
        if (this.role === 1) {
            console.log("Admin");
        }
        console.log("User");
    };
    User.prototype.getInfo = function () {
        return "".concat(this.name, " ").concat(this.email, " ").concat(this.role);
    };
    return User;
}());
var User1 = new User("Kiet", "kiet@mail.com", Role.Users);
console
    .log(User1.getInfo());
