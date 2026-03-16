
// What is a Function?

// A function is a reusable block of code that performs a specific task.

// Importance of Functions in JavaScript

// Avoid code duplication
// Improve readability
// Easier maintenance
// Core building block for automation scripts

// 2️⃣ Function Declaration

// A function defined using the function keyword with a name.

// function functionName() {
//     // code
// }

// Syntax and Structure

// function greet() {
//     console.log("Hello JavaScript");
// }

// greet();

// Characteristics
// Hoisted
// Can be called before definition
// Named function

//Hosisting behaviour


// Hello I am a function"

// console.log(a) //undefined
// console.log(test)// reference
// test()//

// let a=10;
// function test()
// {
//     console.log("Hello I am a function")
// }





// Only function declarations are fully hoisted in JavaScript. 
// Function expressions and arrow functions are not.

// 3️⃣ Function Expression

// A function expression is when a function is stored inside a variable.
// The function is treated like a value and assigned to a variable.

// Syntax:

// greet() //Not hoisted

// let greet = function () {
//     console.log("Hello");
// };

// greet()


// This function expression can be:

// Anonymous
// Named

// Anonymous Functions

// let sum=function()
// {
//     return(10+20)
// }

// console.log(sum())

// Anonymous function cannot be called directly because it has no name.
// We either store it in a variable, execute it immediately, 
// or pass it as a callback

// exceute immediately

// console.log("hey functions");
// (function() {
//     console.log("Hello");
// })();

// No variable
//  No name
//  Runs immediately

//Pass as a Callback:Anonymous functions are often executed when 
// passed to another function.

// Example:

// setTimeout()

// setTimeout(function() {
//     console.log("Executed after 5 seconds");
// }, 5000);


// No name
// Executed automatically by setTimeout


// 4️⃣ Arrow Functions (ES6)

// Arrow functions were introduced in ES6 (2015).
// They provide a shorter and cleaner syntax for writing functions.

// Syntax Variations

// 1. Basic Arrow Function

// const greet = () => {
//     console.log("Hello");
// };

// greet()

// 2. Single Parameter (No Parentheses Needed)


// const square =  x=> {
//     return x * x;
// };

// console.log(square(2))

// 3. Multiple Parameters
// const add = (a, b) => {
//     return a + b;
// };

// console.log(add(2,2))


// 4. Implicit Return (Single Line)

// If only one expression, return keyword is not needed:

// const add = (a, b) => a + b;

// console.log(add(2,2))

// 5. Returning Object (Use Parentheses)

// const getUser = () => ({ name: "Alex", age: 25 })
// console.log(getUser())

// Differences from Regular Functions

// | Feature            | Regular Function                  | Arrow Function                        |
// | ------------------ | --------------------------------- | ------------------------------------- |
// | Syntax             | Longer                            | Shorter                               |
// | `this` keyword     | Has its own `this`                | Inherits `this` from parent (lexical) |
// | Hoisting           | Function declarations are hoisted | Not hoisted                           |
// | `arguments` object | Available                         | Not available                         |
// | Constructor usage  | Can be used with `new`            | Cannot be used as constructor         |

// function showArgs() {
//     console.log(arguments[0]); //array
// }

// showArgs(10, 20, 30);

// const showArgs = () => {
//     console.log(arguments);
// };

// showArgs(1,2,3); //error


// this Behavior--important concept

// Regular Function
// const obj = {
//     name: "David",
//     greet: function() {
//         console.log(this.name);
//     }
// };

   
// obj.greet();   // David

// Arrow Function

// let name="john";

// const obj = {
//     name: "David",
//     greet: () => {
//         console.log(this.name);
//     }
// };

// obj.greet();   // undefined


// Arrow function does NOT have its own this.
// It takes this from outer scope.

// When to Use Arrow Functions

// Short utility functions
// Callbacks (map, filter, setTimeout)
// Not used for Object methods
// No used for Constructors


// 5️⃣ Default Parameters
// Default parameters allow you to assign default values to function 
// parameters if no value (or undefined) is passed during the function call.



// function greet(name = "Guest") {
//     console.log("Hello " + name);
// }

// greet();        // Hello Guest
// greet("Ruchika"); // Hello Ruchika

// function sum(a=10,b=20)
// {
//     console.log("Addition is " + (a+b))
// }

// sum()

// Parameter Initialization: Default values are initialized only when the argument is 
// undefined.

// function demo(a = 10) {
//     console.log(a);
// }

// demo();          // 10  (no argument → default used)
// demo(undefined); // 10  (undefined → default used)
// demo(null);      // null (null is a value, so default NOT used)
// demo(5);         // 5

// Important Points
// Evaluated at function call time.
// Can use previous parameters.

// Use Cases


// 1. Avoid if checks inside function

// Instead of:

// function greet(name) {
//     if (!name) {
//         name = "Guest";
//     }
//     console.log(name);
// }


// Use:

// function greet(name = "Guest") {
//     console.log(name);
// }

// 2 Optional Configuration Object

// Common in testing frameworks (like Playwright, Cypress):

// function createUser(role = "tester") {
//     console.log("User role:", role);
// }

// createUser();          // tester
// createUser("admin");   // admin

// 3. API / Utility Functions
// function calculateTax(amount, taxRate = 0.18) {
//     return amount * taxRate;
// }

// console.log(calculateTax(1000)); // 180


// Key Points

// Introduced in ES6(ECMAScript version 6)
// Cleaner way to handle optional parameters
// Default works only for undefined
// Helpful in automation scripts & utility functions\
// If you want, I can also create a small classroom activity or 
// tricky interview question on default parameters 

// 6️⃣ Spread and  Rest Overview


// let maxValue=Math.max(1,3,7,6,2,3)  //any value we can pass
// console.log(maxValue)

// let myObj={}
// Object.assign(myObj,{a:1,b:2,c:3},{x:1,y:2,z:3}) // we ned to pass first value as empty
// console.log(myObj)

// function sumOne(a,b) //
// {
//     console.log(a+b)
// }

// //  sumOne(10,20) //30
// let arr=[100,200]
// // sumOne(arr) //error
// sumOne(...arr) //spread Concept


// function sumTwo(a,b,...args) //rest--arrays
// {
//     let multi=a*b;
//     let sum=0;
//     for(const i of args)
//     {
//         sum+=i
//     }
//     console.log(sum + " " + multi)
// }
// sumTwo(2,3,1,1,1)

// Rest Parameters

// Rest parameter allows a function to accept multiple arguments as an array.
// It collects remaining arguments into a single array.

// function demo(...args) {
//     console.log(args);
// }

// demo(1, 2, 3, 4); 
// [1, 2, 3, 4]

// Spread vs Rest Overview

// | Feature       | Rest                | Spread                          |
// | ------------- | ------------------- | ------------------------------- |
// | Purpose       | Collect values      | Expand values                   |
// | Used in       | Function parameters | Arrays, objects, function calls |
// | Converts into | Array               | Individual elements             |

// 7️⃣ Scope in JavaScript
// Scope defines where variables are accessible in your code.
// Global Scope
// A variable declared outside any function or block.
// It can be accessed from anywhere in the program.

// Example:
// let course = "JavaScript";

// function showCourse() {
//     console.log(course);
// }

// showCourse();        // JavaScript
// console.log(course); // JavaScript


// Key Points:
// Available everywhere
// Can cause conflicts if overused
// Avoid too many global variables in real projects

// Function Scope
// Variables declared inside a function using var, let or 
// const are accessible only inside that function.

// Example:
// function greet() {
//     let message = "Hello";
//     console.log(message);
// }

// greet(); // Hello
// console.log(message); // Error


// Key Points:

// Function creates its own scope
// Protects variables from outside access
// Used heavily in modular programming

// Block Scope(Introduced in ES6.)

// Variables declared with let and const inside { } are 
// accessible only inside that block.

// Example:

// function test()
// {
// if (true) {
//     let age = 25;
//     const city = "Chandigarh";
//     console.log(age);  // 25
// }

// console.log(age);  //Error

// Important: var is NOT block scoped
// function test()
// {
// if (true) {
//     let x = 10;
// }

// }

// console.log(x); // 10


// var ignores block boundaries.

// Quick Comparison Table
// Type	Declared With	            Accessible Where?
// Global	var / let / const	    Everywhere
// Function	var / let / const	    Inside function only
// Block	let / const	Inside       { } only


// // Important for Test Scripts

// In automation:
// Use let and const
// Avoid global pollution
// Use block scope in loops and conditions


// 8️⃣ Closures & Lexical Scope in JavaScript

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures

// What is Lexical Scope?
// Lexical = Based on where code is written

// In JavaScript, scope is determined by where functions are 
// physically written in the code, not where they are executed.

// Inner functions can access:
// Their own variables
// Parent function variables
// Global variables

// Example: Lexical Scope
// let course = "Playwright"; //global
// function outer() {
//     let topic = "Closures"; //function
  
//     function inner() {
//         let subject="JS"; //block
//         console.log(course); // Global -PlayWright
//         console.log(topic);  // Parent-Closures
//     }
//        inner();
// }

// outer();

//  Output:

// Playwright
// Closures

// Because inner() is written inside outer(), it has access to its variables.

// What is a Closure?

// A closure happens when:
// A function remembers and accesses variables from its outer (parent) 
// scope even after the outer function has finished executing.

// In simple words:
// Inner function + Remembered outer variables = Closure

// Example: Basic Closure

// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// const counter = outer();
// counter(); // 1
// counter(); // 2
// counter(); // 3



// Why?
// Even though outer() finished execution,
// inner() still remembers count.
// That memory is called a closure.


// Why Closures are Important in Testing & Automation

// Closures are heavily used in:

// Test frameworks
// Page Object Models
// Data encapsulation
// Private variables
// Timers & callbacks

// Practical Use Case 1: Counter in Test Execution

// function testCounter() {
//     let executed = 0;
//     return function () {
//         executed++;
//         console.log("Tests executed:", executed);
//     };
// }

// const runTest = testCounter();

// runTest(); 
// runTest();


// Used to track:
// Number of executed test cases
// Retry attempts
// API calls

// Practical Use Case 2: Creating Private Variables (Very Important)

// function createUser() {
//     let password = "12345";  // private

//     return {
//         checkPassword(input) {
//             return input === password;
//         }
//     };
// }

// const user = createUser();

// console.log(user.checkPassword("12345")); // true
// console.log(user.password); // undefined


//password is protected using closure.

// Used in:
// Secure token handling
// API key management
// Encapsulation in frameworks

// Practical Use Case 3: setTimeout (Common in Automation)

// function delayedMessage(msg) {
//     setTimeout(function () {
//         console.log(msg);
//     }, 2000);
// }

// delayedMessage("Test Completed");


// The inner function remembers msg.
// That’s closure in action.

// Lexical Scope vs Closure

// Concept	                    Meaning
// Lexical Scope	            Scope decided by code position
// Closure	                    Function remembers outer variables

// Lexical scope enables closure.


