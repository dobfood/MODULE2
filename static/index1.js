var Application = /** @class */ (function () {
    function Application(name) {
        this.name = name;
        Application.count++;
    }
    Application.count = 0;
    return Application;
}());
console.log(Application.count);
var application = new Application("app one2");
console.log(application);
console.log(Application.count);
console.log(Application.count);
