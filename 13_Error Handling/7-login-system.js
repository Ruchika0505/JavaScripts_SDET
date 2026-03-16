// 7-login-system.js

class AuthenticationError extends Error {
    constructor(message) {
        super(message);
        this.name = "AuthenticationError";
    }
}

function login(username, password) {

    if (!username || !password) {
        throw new AuthenticationError("Username and Password required");
    }

    if (password !== "Ruchika") {
        throw new AuthenticationError("Invalid credentials");
    }

    if (password !== "admin123") {
        throw new AuthenticationError("Invalid credentials");
    }

    return "Login Successful";
}

try {
    let result = login("Ruchika", "wrongpass");
    console.log(result);
} catch (error) {
    if (error instanceof AuthenticationError) {
        console.log("Login Failed:", error.message);
    } else {
        console.log("Unexpected Error:", error.message);
    }
}