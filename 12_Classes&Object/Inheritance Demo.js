// Single Inheritance: One child class inherits from one parent class.
// Example: Single Inheritance
class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

const d = new Dog();
d.eat();   // inherited
d.bark();  // own method

// Multilevel Inheritance:A class inherits from a class which itself inherits from another class.
// Example: Multilevel Inheritance
// class Animal {
//     eat() {
//         console.log("Animal is eating");
//     }
// }

// class Mammal extends Animal {
//     walk() {
//         console.log("Mammal is walking");
//     }
// }

// class Dog extends Mammal {
//     bark() {
//         console.log("Dog is barking");
//     }
// }

// const d = new Dog();
// d.eat();   // from Animal
// d.walk();  // from Mammal
// d.bark();  // from Dog


// Hierarchical Inheritance:Multiple child classes inherit from the same parent class.

// Parent → Child1
// Parent → Child2

// class Animal {
//     eat() {
//         console.log("Animal is eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Dog is barking");
//     }
// }

// class Cat extends Animal {
//     meow() {
//         console.log("Cat is meowing");
//     }
// }

// const d = new Dog();
// const c = new Cat();

// d.eat();  // from Animal
// c.eat();  // from Animal
// d.bark();
// c.meow();


// JavaScript does NOT support:

// Multiple Inheritance (one class extending two classes)

// This is NOT allowed:

// class C extends A, B {} // Error
