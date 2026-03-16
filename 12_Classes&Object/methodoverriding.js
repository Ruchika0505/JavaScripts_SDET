// Base class
class PaymentProcessor {
  constructor(amount) {
    this.amount = amount;
  }

  processPayment() {
    console.log(`Processing payment of $${this.amount}`);
  }

  generateReceipt() {
    return `Payment of $${this.amount} received.`;
  }
}
// Credit Card payment overrides behavior
class CreditCardPayment extends PaymentProcessor {
  constructor(amount, cardNumber) {
    super(amount);
    this.cardNumber = cardNumber;
  }

  // Overriding method
  processPayment() {
    console.log(`Charging credit card ending in ${this.cardNumber.slice(-4)}...`);
    console.log(`Amount: $${this.amount}`);
    console.log("Credit card payment processed successfully.");
  }
}

// PayPal payment overrides behavior differently
class PayPalPayment extends PaymentProcessor {
  constructor(amount, email) {
    super(amount);
    this.email = email;
  }

  // Overriding method
  processPayment() {
    console.log(`Redirecting to PayPal account: ${this.email}`);
    console.log(`Amount: $${this.amount}`);
    console.log("PayPal payment completed.");
  }
}

// Usage
const creditPayment = new CreditCardPayment(150, "1234567812345678");
const paypalPayment = new PayPalPayment(200, "user@example.com");

creditPayment.processPayment();
console.log(creditPayment.generateReceipt());

console.log("------------");

paypalPayment.processPayment();
console.log(paypalPayment.generateReceipt());