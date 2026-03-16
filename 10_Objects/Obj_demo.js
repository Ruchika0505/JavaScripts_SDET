/******************************************************
JavaScript Training Demo File
Topics Covered:

1. Objects
2. JSON
3. Destructuring
4. Spread Operator
5. Template Literals
6. ES6 Features
7. OBJECT UTILITY METHODS
   ******************************************************/
// 1️⃣ OBJECTS 

// Object Literal
const loginPage = {
username: "#user",
password: "#pass",
loginBtn: "#login"
};

console.log("Locator Object:", loginPage);
// loginPage.defaultConfig2

let arr=[10,20]
arr.to

// Accessing properties
console.log("Username locator:", loginPage.username);

// Modifying
loginPage.timeout = 5000; //adding new filed
console.log("Updated Object:", loginPage.timeout);

// Constructor method
// const testUser = new Object();
// testUser.name = "Student";
// testUser.role = "Tester";
// console.log("Constructor Object:", testUser);

//prototype--concept
 testUser = new Object();
//  testUser.name = "Student";
// console.log((testUser.__proto__));
// console.log(testUser.hasOwnProperty("name"));

// Object.create()
const baseConfig = { browser: "chrome" }; //object
const runConfig = Object.create(baseConfig); //use of create method
runConfig.headless = true;
console.log("Prototype Property:", runConfig.browser);
console.log("Own Property:", runConfig.headless);


// 1️⃣ Create an object storing test user credentials
// 2️⃣ Modify an existing property
// 3️⃣ Add a new locator property to an object

console.log("\n===== 2️⃣ JSON =====");

// JavaScript object
const userObj = { id: 1, name: "API User" };

// Convert to JSON--object to json
const jsonStr = JSON.stringify(userObj);
console.log("Stringified JSON:", jsonStr);

// Parse back--json to object
const parsedObj = JSON.parse(jsonStr);
console.log("Parsed Object:", parsedObj);

// Simulated API Response Handling
const fakeApiResponse = `{"status":200,"data":{"token":"abc123"}}`;
const responseObj = JSON.parse(fakeApiResponse);
console.log("Token from response:", responseObj.data.token);//abc123

// Practice Exercises
// 1️⃣ Convert object to JSON
// 2️⃣ Parse JSON string
// 3️⃣ Extract value from parsed API response

console.log("\n===== 3️⃣ DESTRUCTURING =====");

// Array destructuring
const browsers = ["Chrome", "Firefox"];
const [b1, b2] = browsers;
console.log("Browsers:", b1, b2);

// Object destructuring
const tester = { name: "Riya", role: "QA"};
const { name, role } = tester;
console.log("Tester:", name, role);


// Default value + renaming
tester = { name: "Riya", role: "QA"};
const { city = "Delhi", role: job } = tester;
console.log("City:", city);
console.log("Renamed Role:", role);

// 1️⃣ Extract values from array
// 2️⃣ Rename destructured property
// 3️⃣ Use default value when missing

console.log("\n===== 4️⃣ SPREAD OPERATOR =====");


// Copy array
const arr1 = [1,2,3];
const arr2 = [...arr1];
console.log("Copied Array:", arr1);

// Merge objects
const defaultConfig2 = { timeout: 3000 };
const overrideConfig = { retries: 2, };
const finalConfig = { ...defaultConfig2, ...overrideConfig };
console.log("Merged Config:", finalConfig);

// Passing arguments
const numbers = [5, 10, 15];
console.log("Max value:", Math.max(...numbers));

// 1️⃣ Copy an array using spread
// 2️⃣ Merge two objects
// 3️⃣ Pass array values into function

console.log("\n===== 5️⃣ TEMPLATE LITERALS =====");

const testName = "Login Test";
const statuss = "PASSED";

// Interpolation
console.log(`Executing: ${testName} -> ${statuss}`);

// Multi-line string
const report = `
Test Report
-----------

Name: ${testName}
Result: ${statuss}
`;
console.log(report);

console.log("\n===== 6️⃣ ES6 FEATURES ====="); //ECMAscript 2015

// let & const
let counter = 0;
const baseURL = "https://testsite.com";
counter++;
console.log("Counter:", counter);
console.log("Base URL:", baseURL);

// Arrow Function
const multiply = (a,b) => a*b;
console.log("Multiply:", multiply(3,4));

// Default Parameter
function launchBrowser(browser="chrome"){
console.log("Launching:", browser);
}
launchBrowser();
launchBrowser("firefox");

// Promise Example
function asyncTask(){
return new Promise(resolve => {
setTimeout(() => resolve("Task Completed"), 1000);
});
}

asyncTask().then(msg => console.log(msg));

// Async/Await
async function runTest(){
const result = await asyncTask();
console.log("Await Result:", result);
}
runTest();

// Class Example (POM style)
class LoginPage {
constructor(url){
this.url = url;
}

open(){
console.log(`Opening ${this.url}`);
}
}

const page = new LoginPage(baseURL);
page.open();



console.log("\n===== OBJECT UTILITY METHODS DEMO =====");

// Sample object (Automation style test data)
const testUser = {
username: "student1",
role: "tester",
active: true
};

console.log("\nOriginal Object:", testUser);

/***********************
1️⃣ Object.keys()
************************/


console.log("\n--- Object.keys() ---");

const testUser = {
username: "student1",
role: "tester",
active: true
};

console.log("\nOriginal Object:", testUser);

const keys = Object.keys(testUser);
console.log("Keys:", keys);

// Example: Check if property exists
if (keys.includes("role")) {
console.log("Role field present");
}

/***********************
2️⃣ Object.values()
************************/
console.log("\n--- Object.values() ---");

const testUser = {
username: "student1",
role: "tester",
active: true
};

console.log("\nOriginal Object:", testUser);
const values = Object.values(testUser);
console.log("Values:", values);

// Loop through values
values.forEach(v => console.log("Value:", v));

/***********************
3️⃣ Object.entries()
************************/
console.log("\n--- Object.entries() ---");

const testUser = {
username: "student1",
role: "tester",
active: true
};
const entries = Object.entries(testUser);
console.log("Entries:", entries);

// Logging key-value pairs
entries.forEach(([key, value]) => {
console.log(`${key} -> ${value}`);
});

/***********************
4️⃣ Object.assign()
************************/
console.log("\n--- Object.assign() ---");

const defaultConfig = {
browser: "chrome",
timeout: 3000
};

const envConfig = {
timeout: 5000,
retries: 2
};

// Merge objects
finalConfig = Object.assign({}, defaultConfig, envConfig);
console.log("Merged Config:", finalConfig);

/***********************
5️⃣ Object.freeze()
************************/
console.log("\n--- Object.freeze() ---");

const frozenObj = { url: "test.com" };
Object.freeze(frozenObj);

frozenObj.url = "changed.com"; // Will not change
console.log("Frozen Object:", frozenObj);

/***********************
6️⃣ Object.seal()
************************/
console.log("\n--- Object.seal() ---");

const sealedObj = { env: "QA" };
Object.seal(sealedObj);

sealedObj.env = "PROD";        // Allowed
sealedObj.newProp = "test";    // Not added

console.log("Sealed Object:", sealedObj);

/***********************
7️⃣ Object.hasOwn()
************************/
console.log("\n--- Object.hasOwn() ---");

const testUser = {
username: "student1",
role: "tester",
active: true
};
const hasRole = Object.hasOwn(testUser, "role");
const hasCity = Object.hasOwn(testUser, "city");

console.log("Has role?", hasRole);//true
console.log("Has city?", hasCity); //false



/*******************************************************
JavaScript Copy Behaviour
1️⃣ Reference vs Copy
2️⃣ Shallow Copy
3️⃣ Deep Copy
*******************************************************/

console.log("\n===== 1️⃣ REFERENCE vs COPY =====");

// Original object
const original = { name: "Riya", score: 90 };

// Assignment → NO COPY (Reference)
const refCopy = original;

// Modify reference
refCopy.score = 50;

console.log("Original after modifying refCopy:", original);
console.log("refCopy:", refCopy);

/*
Both changed because:
original and refCopy point to SAME memory location
*/

console.log("\n===== 2️⃣ SHALLOW COPY =====");

const nestedObj = {
user: "David",
address: {
city: "Delhi"
}
};

// Create shallow copy using spread
const shallow = { ...nestedObj };
// Modify nested value
shallow.address.city = "Mumbai";
shallow.user="merry";
console.log("Original nested object:", nestedObj);
console.log("Shallow copy:", shallow);

/*
Nested object reference shared
Both objects affected
*/

// Show reference equality
console.log(
"Same nested reference?",
nestedObj.address === shallow.address
);

console.log("\n===== 3️⃣ DEEP COPY (JSON METHOD) =====");

const deepOriginal = {
user: "Anita",
address: { city: "Chennai" }
};

// Deep copy
const deep = JSON.parse(JSON.stringify(deepOriginal));

// Modify deep copy
deep.address.city = "Pune";

console.log("Deep Original:", deepOriginal);
console.log("Deep Copy:", deep);

/*
Original unchanged
Separate memory references
*/

// Reference comparison
console.log(
"Same nested reference?",
deepOriginal.address === deep.address
);

console.log("\n===== 4️⃣ DEEP COPY (Modern structuredClone) =====");

 deepOriginal = {
user: "Anita",
address: { city: "Chennai" }
};

const modernCopy = structuredClone(deepOriginal);
modernCopy.address.city = "Kolkata";

console.log("Original:", deepOriginal);
console.log("Modern Deep Copy:", modernCopy);


//optional chaining :

let student={
   name:"david",
   job:"QA",
   address:
   {
      city:"chd"
   },
age:45
}
console.log(student.age)
console.log(student.a)


// =
// No copy — just another name for same object

// assign() / spread--shallow
// Copy first layer only
// Nested objects still linked

// structuredClone()
// True deep copy
// Everything independent

// JSON method
// Deep copy hack
// Fails with functions, undefined, etc.