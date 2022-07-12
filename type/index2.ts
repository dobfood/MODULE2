class Staff {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getAge() {
        return this.age;
    }

    setName(value: string): void {
        this.name = value;
    }

    setEmail(value: string): void {
        this.email = value;
    }

    setAge(value: number): void {
        this.age = value;
    }
}

let staff = new Staff("kiet", "kiet@gmail.com", 22);
let nameStaff = staff.getName()
console.log(nameStaff)
staff.setName("deptrai")
let currentNameStaff = staff.getName();
console.log(currentNameStaff)
console.log(staff)
