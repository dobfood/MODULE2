
// const  readline = require('readline-sync');


class Employee {
    firstName: string;
    lastName: string;
    birthDate: string;
    from: string;
    job: string;
    constructor(firstName: string, lastName: string,birthDate: string,from: string,job:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.from = from;
        this.job = job;
    }
}
class EmployeeManager extends Employee{
    static employee = [];
    constructor() {
        // @ts-ignore
        super();
    }
    getAll(){
        // readline.question('Dien thong tin vo')
        return EmployeeManager.employee
    }
    add(employee){
        EmployeeManager.employee.push(employee)
    }

}
let employee1 = new Employee("anh ","kiet","22/12/2000","quang nam ","rua bat")
let employee=new EmployeeManager()
employee.add(employee1)
console.log(employee.getAll())