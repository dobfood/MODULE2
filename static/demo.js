class Instructor {
    constructor({ name, role = "assistant" } = {}) {
        this.role = role;
        this.name = name;
    }

    // Instance method
    renderDetails() {
        console.log(`${this.name} - ${this.role}`);
    }
    static helloword(){
        console.log("ec o ec")
    }
    static helluword(intructor){
        return (intructor.role==="classroom")
    }
}
let juniorInstructor = new Instructor({ 'name' : 'Brian' });
let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });

juniorInstructor.renderDetails();
seniorInstructor.renderDetails();
console.log(
    `${juniorInstructor.name} can teach: ${Instructor.helluword(juniorInstructor)}`
);