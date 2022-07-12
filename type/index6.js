var Cirle = /** @class */ (function () {
    function Cirle(color, radius) {
        this.color = "green";
        this.radius = 20;
        this.color = color;
        this.radius = radius;
    }
    return Cirle;
}());
// let cirle2= new Cirle("yellow",20);
var cirlelist = [];
cirlelist.push(new Cirle("red", 20));
cirlelist.push(new Cirle("blue", 30));
function showcirle(cirle) {
    console.log("hinh tron nay co duong kinh" + cirle.radius + "hinh tron nay co mau " + cirle.color);
}
console.log(cirlelist.forEach(showcirle));
