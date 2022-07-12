var Fan = /** @class */ (function () {
    function Fan(speed, radius, color, on) {
        if (on === void 0) { on = false; }
        // SLOW: number = 1;
        // MEDIUM: number = 2;
        // FASt: number = 3;
        this.speed = 1;
        this.radius = 5;
        this.color = 'blue';
        this.on = false;
        this.speed = speed;
        this.radius = radius;
        this.color = color;
        this.on = on;
    }
    Fan.prototype.getterRadius = function () {
        return this.radius;
    };
    Fan.prototype.getterColor = function () {
        return this.color;
    };
    Fan.prototype.getterOn = function () {
        return this.on;
    };
    Fan.prototype.getterSpeed = function () {
        return this.speed;
    };
    Fan.prototype.setterRadius = function (value) {
        return this.radius = value;
    };
    Fan.prototype.setterColor = function (value) {
        return this.color = value;
    };
    Fan.prototype.setterOn = function (value) {
        return this.on = value;
    };
    Fan.prototype.setterSpeed = function (value) {
        return this.speed = value;
    };
    Fan.prototype.toString = function () {
        if (this.on == true) {
            return "Fan is on";
        }
        else {
            return "Fan is off";
        }
    };
    return Fan;
}());
var speed;
(function (speed) {
    speed[speed["SLOW"] = 1] = "SLOW";
    speed[speed["MEDIUM"] = 2] = "MEDIUM";
    speed[speed["FAST"] = 3] = "FAST";
})(speed || (speed = {}));
var fan1 = new Fan(3, 10, "yellow", true);
fan1.toString();
console.log(fan1.toString());
