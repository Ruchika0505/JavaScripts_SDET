// 6-async-error-handling.js

async function fetchData() {
    try {
        console.log("Fetching data...");

        // Simulating error
        throw new Error("Network request failed");

        console.log("This will not execute");
    } catch (error) {
        console.log("Async Error Caught:", error.message);
    } finally {
        console.log("Cleanup completed");
    }
}

fetchData();