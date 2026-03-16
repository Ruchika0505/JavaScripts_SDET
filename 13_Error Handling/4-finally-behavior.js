// 4-finally-behavior.js

function testFinally() {
    try {
        console.log("Inside try");
        return "Returning from try";
    }
     catch (error) {
        console.log("Inside catch");
    } 
    finally {
        console.log("Inside finally (always executes)");
    }
}

let result = testFinally();
console.log("Function returned:", result);