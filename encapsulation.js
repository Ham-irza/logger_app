class BankAccount {
    // # makes the property private in modern JavaScript
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
        }
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("Insufficient funds!");
        } else {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}. Remaining: ${this.#balance}`);
        }
    }

    // Getter to allow viewing the balance without allowing direct modification
    get balance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(200); // Should fail
console.log(myAccount.balance); // 150