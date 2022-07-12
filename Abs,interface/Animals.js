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
var Animals = /** @class */ (function () {
    function Animals() {
    }
    return Animals;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tiger.prototype.makesound = function () {
        return "Tiger:Grrereeeee!";
    };
    return Tiger;
}(Animals));
var Chicken = /** @class */ (function (_super) {
    __extends(Chicken, _super);
    function Chicken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chicken.prototype.makesound = function () {
        return "Chicken:cuc cu cuc cu!";
    };
    Chicken.prototype.howtoEat = function () {
        return "could ne fried";
    };
    return Chicken;
}(Animals));
var animals = [];
animals[0] = new Tiger();
animals[1] = new Chicken();
animals.forEach(function (item, index) {
    console.log(item.makesound());
    if (item instanceof Chicken) {
        console.log(item.howtoEat());
    }
});
