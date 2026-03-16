// 3-custom-error-class.js

class ValidationError extends Error {
    constructor(message) {
        super(message);
        // this.name = "ValidationError";
    }
}

function validateEmail(email) {
    if (!email.includes("@")) {
        throw new ValidationError("Invalid email format");
    }
    return "Valid Email";
}

try {
    console.log(validateEmail("abc.com"));
} 

catch (error) {
    if (error instanceof ValidationError) {
        console.log("Validation Error:", error.name);
    } 
    else {
        console.log("Unknown Error:", error.message);
    }
}