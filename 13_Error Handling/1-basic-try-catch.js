// 1-basic-try-catch.js

console.log("Program started");

try {
    console.log("Inside try block");
    console.log(x); // x is not defined (ReferenceError)
    console.log("This line will not execute");
} 

catch (e) {
    console.log("Error caught successfully!");
    console.log("Error Name:", e.name);
    console.log("Error Message:", e.message);
}


console.log("Program ended");