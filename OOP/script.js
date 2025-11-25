/* ===========================================
   OOP EXAMPLE: All Four Pillars
   =========================================== */

/* ---------- 1. Encapsulation ---------- */

class Animal {
  constructor(name) {
    this.name = name;   // property hidden inside class
  }

  speak() {             // method
    return this.name + " makes a sound.";
  }
}

/* ---------- 2. Inheritance ------------ */

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  /* ---------- 3. Polymorphism --------- */
  speak() {
    return this.name + " barks!";
  }
}

/* ---------- 4. Abstraction ------------ 
   User does not care HOW dog speaks,
   they just call speak()
----------------------------------------- */

/* ---- Usage ---- */

const dog = new Dog("Tommy", "Labrador");

console.log(dog.speak());   // Tommy barks!




/* ===========================================
   MINI PROJECT: Bank System (OOP)
   =========================================== */

class Account {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return "Deposited: $" + amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return "Not enough balance!";
    }
    this.balance -= amount;
    return "Withdrawn: $" + amount;
  }

  getInfo() {
    return this.owner + " | Balance: $" + this.balance;
  }
}

/* ----- Inheritance ----- */
class SavingsAccount extends Account {
  constructor(owner, balance, interestRate) {
    super(owner, balance);
    this.interestRate = interestRate;
  }

  /* ----- Polymorphism ----- */
  getInfo() {
    return (
      this.owner +
      " | Balance: $" +
      this.balance +
      " | Interest: " +
      this.interestRate + "%"
    );
  }
}

/* --- Usage --- */

const acc = new SavingsAccount("Ali", 500, 4);

console.log(acc.deposit(200));
console.log(acc.withdraw(100));
console.log(acc.getInfo());
