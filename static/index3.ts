enum Role {
    Admin = 1,
    Users
}

class User {
    protected name: string;
    protected email: string;
    public role: Role

    constructor(name: string, email: string, role: Role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email
    }

    isAdmin() {
        if (this.role === 1) {
            console.log("Admin")
        }
        console.log("User")
    }

    getInfo() {
        return `${this.name} ${this.email} ${this.role}`

    }
}
    let
    User1 = new User("Kiet", "kiet@mail.com", Role.Users);
    console
    .log(User1.getInfo())