// Implicit Type Coercion

console.log(5 + "5");     // string
console.log(10 - "5");   // number
console.log(true + 1);   // 2
console.log(false + 1);  // 1

// Comparison coercion
console.log(5 == "5");    // true
console.log(5 === "5");  // false

// Explicit Type Coercion
var numStr = "100";
console.log(Number(numStr));
console.log(parseInt("50"));
console.log(String(200));
console.log(Boolean(1));
console.log(Boolean(0));

// Execution order
console.log("5" + 2 + 3);
console.log(5 + 2 + "3");
