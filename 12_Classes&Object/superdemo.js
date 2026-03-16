// In JavaScript, the super keyword is used to access properties and methods of a parent (superclass). It is mainly used in class inheritance.

// There are two common uses of super:
// Calling the parent class constructor
// Calling parent class methods

// 1️⃣ Using super to Call Parent Constructor

// When a class extends another class, you must call super() inside the child
// class constructor before using this.
class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name); 
    this.breed = breed;
  }
}
const myDog = new Dog("Buddy", "Golden");
console.log(myDog.name);  
console.log(myDog.breed); 

// What happens here:
// Dog inherits from Animal
// super(name) calls the Animal constructor
// Without super(), JavaScript throws an error

// 2️⃣ Using super to Call Parent Methods

// You can use super.methodName() to call a method from the parent class.

class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}
class Dog extends Animal {
  speak() {
    
    console.log("Dog barks");
    super.speak();
     
  }
}
const d = new Dog();
d.speak();
// Output:
// Animal makes a sound
// Dog barks

// 3️⃣ Using super in Object Literals (ES6)

// super can also be used inside object methods to call methods 
// from the object's prototype.

// Object.setPrototypeOf() is a JavaScript method used to change the 
// prototype (parent object) of another object.

// In simple words:

// It tells JavaScript:
// “Make this object inherit from that object.”

const person = {
  greet() {
    return "Hello";
  }
};

const student = {
  greet() {
    return super.greet() + ", I am a student";
  }
};

Object.setPrototypeOf(student, person);

console.log(student.greet());

// Important Rules

// super() must be called before using this in a subclass constructor.

// super only works inside:

// Class constructors

// Class methods

// Object literal methods (not regular functions)

// You can’t use super in non-inherited classes.