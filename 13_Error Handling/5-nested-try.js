// 5-nested-try.js

try {
    console.log("Outer try started");

    try {
        console.log("Inner try started");
        throw new Error("Inner error occurred");
    } 
    catch (innerError) {
        console.log("Inner catch handled:", innerError.message);
    }

    console.log("Outer try continues");

} 
catch (outerError) {
    console.log("Outer catch handled:", outerError.message);
}