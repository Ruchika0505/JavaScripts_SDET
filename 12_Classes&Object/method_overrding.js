// Base class
class Bank {
  constructor(name) {
    this.name = name;
  }

  // Method meant to be overridden
  getInterestRate() {
    return 0; // default interest rate
  }

  calculateInterest(amount) {
    const rate = this.getInterestRate();
    return (amount * rate) / 100;
  }

  displayInterest(amount) {
    const interest = this.calculateInterest(amount);
    console.log(`${this.name} offers ${this.getInterestRate()}% interest.`);
    console.log(`Interest on $${amount} = $${interest}`);
  }
}

// Subclass 1
class SBI extends Bank {
  getInterestRate() {
    return 6.5;
  }
}

// Subclass 2
class HDFC extends Bank {
  getInterestRate() {
    return 7.2;
  }
}

// Subclass 3
class ICICI extends Bank {
  getInterestRate() {
    return 6.8;
  }
}

// Usage
const amount = 10000;

const sbi = new SBI("SBI Bank");
const hdfc = new HDFC("HDFC Bank");
const icici = new ICICI("ICICI Bank");

sbi.displayInterest(amount);
console.log("----------------");

hdfc.displayInterest(amount);
console.log("----------------");

icici.displayInterest(amount);