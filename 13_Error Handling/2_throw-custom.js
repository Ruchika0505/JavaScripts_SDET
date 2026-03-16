// 2-throw-custom-error.js

function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }
    return "Access Granted";
}

try {
    let result = checkAge(15);
    console.log(result);
} 

catch (error) {
    console.log("Custom Error Caught:");
    console.log(error.name);
}