class Application{
    private name:string;
    static count:number = 0;
    constructor(name:string) {
        this.name = name;
        Application.count++
    }

}
console.log(Application.count)
let application = new Application("app one2")
console.log(application)
console.log(Application.count)
console.log(Application.count)