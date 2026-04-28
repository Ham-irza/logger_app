class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getInfo() {
        return `${this.name} (${this.email})`;
    }
}

class Admin extends User {
    constructor(name, email, permissions) {
        // 'super' calls the constructor of the parent User class
        super(name, email);
        this.permissions = permissions;
    }

    deleteUser(user) {
        console.log(`Admin ${this.name} is deleting user: ${user.name}`);
    }
}

const admin = new Admin("Ali", "ali@tech.com", ["edit", "delete"]);
console.log(admin.getInfo()); // Inherited method