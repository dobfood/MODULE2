enum Gender {
    MALE,
    FEMALE,
    OTHER
}

class Employee {
    fullname: string;
    gender: Gender = Gender.FEMALE;
    birthday?: Date;
    email: string;
    phoneNumber: string;

    constructor(fullname: string, gender: Gender, birthday: Date, email: string, phoneNumber: string) {
        this.fullname = fullname;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}

let employeeList: Employee[] = [];

employeeList.push(new Employee("Ngo Minh Ngoc", Gender.OTHER, new Date('1993/11/17'), 'ngocskit@gmail.com', '09123981'))
employeeList.push(new Employee("Pham Thanh Thao", Gender.MALE, new Date('1995/5/2'), 'thao@gmail.com', '01341415'))
employeeList.push(new Employee("Tran Anh Kiet", Gender.MALE, new Date('2000/10/20'), 'kiet@gmail.com', '01237524'))


function showEmployee(employee: Employee) {
    console.log(employee)
}

console.log(employeeList.forEach(showEmployee))