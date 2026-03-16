

// 1️⃣ Create a student object and print all properties dynamically
let student = {
    name: "Riya",
    age: 22,
    course: "QA"
};

console.log("\nPrint properties dynamically");
for (let key in student) {
    console.log(key, ":", student[key]);
}


// 2️⃣ Add a property dynamically and display updated object
student.city = "Delhi";
console.log("\nAfter adding property:", student);


// 3️⃣ Delete a property and verify removal
delete student.course;
console.log("\n After deletion:", student);


// 4️⃣ Count number of keys in an object
console.log("\nKey count:", Object.keys(student).length);


// 5️⃣ Check if a given key exists
console.log("\nKey exists (age):", "age" in student);


// 6️⃣ Clone using spread operator
const cloneSpread = { ...student };
console.log("\nSpread clone:", cloneSpread);


// 7️⃣ Clone using Object.assign()
const cloneAssign = Object.assign({}, student);
console.log("\nAssign clone:", cloneAssign);


// 8️⃣ Demonstrate reference vs copy behavior
const refCopy = student;
refCopy.name = "Changed";
console.log("\nReference copy changes original:", student.name);


// 9️⃣ Shallow copy & modify nested value

const shallowOriginal = {
    name: "John",
    address: { city: "Noida" }
};

const shallowCopy = { ...shallowOriginal };

shallowCopy.address.city = "Mumbai";
console.log("\nShallow copy affects original:",
    shallowOriginal.address.city);


// 🔟 Deep copy using JSON
const deepOriginal = {
    name: "Amit",
    address: { city: "Pune" }
};
const deepCopy = JSON.parse(JSON.stringify(deepOriginal));

deepCopy.address.city = "Chennai";
console.log("\n Deep copy original unchanged:",
    deepOriginal.address.city);


// 11️⃣ Print all keys
console.log("\nKeys:", Object.keys(student));


// 12️⃣ Print all values
console.log("\nValues:", Object.values(student));


// 13️⃣ Print entries
console.log("\n Entries:");
Object.entries(student).forEach(([k,v]) => console.log(k, v));


// 14️⃣ Convert object into array of keys
const keyArray = Object.keys(student);
console.log("\nKeys array:", keyArray);


// 15️⃣ Convert entries array back to object
const objFromEntries = Object.fromEntries(Object.entries(student));
console.log("\nObject recreated:", objFromEntries);


// 16️⃣ Merge two objects with overlapping keys
const obj1 = { a:1, b:2 };
const obj2 = { b:99, c:3 };

const merged = { ...obj1, ...obj2 };
console.log("\nMerged:", merged);


// 17️⃣ Reverse merge order and compare
const reverseMerged = { ...obj2, ...obj1 };
console.log("\nReverse merged:", reverseMerged);


// 18️⃣ Override specific properties while merging
const override = { ...obj1, ...obj2, b:500 };
console.log("\nOverride b:", override);


// 19️⃣ Freeze object and test modification
const frozen = Object.freeze({ x:10 });
frozen.x = 50;
console.log("\nFrozen object:", frozen.x);


// 20️⃣ Seal object and test property addition
const sealed = { y:20 };
Object.seal(sealed);

sealed.y = 99;      // allowed
sealed.z = 100;     // not allowed

console.log("\nSealed object:", sealed);


// 21️⃣ Extract properties using destructuring
const person = { name: "Riya", age: 25 };
const { name, age } = person;
console.log("\n", name, age);


// 22️⃣ Use default values in destructuring
const { city = "Delhi" } = person;
console.log("\nDefault city:", city);


// 23️⃣ Rename variables during destructuring
const { name: studentName } = person;
console.log("\nRenamed:", studentName);


// 24️⃣ Destructure nested object
const user = { id: 1, address: { state: "UP" } };
const { address: { state } } = user;
console.log("\nState:", state);


// 25️⃣ Extract array inside object
const objArr = { nums: [10,20,30] };
const { nums: [First] } = objArr;
console.log("\nFirst number:", first);


// 26️⃣ Swap values using destructuring
let a = 5, b = 10;
[a, b] = [b, a];
console.log("\nSwapped:", a, b);


// 27️⃣ Convert object to JSON string
const jsonObj = { x:1, y:2 };
const jsonStr = JSON.stringify(jsonObj);
console.log("\nJSON String:", jsonStr);


// 28️⃣ Parse JSON string to object
const parsed = JSON.parse(jsonStr);
console.log("\nParsed object:", parsed);


// 29️⃣ Remove fields before stringifying
const sensitive = { user:"test", pass:"1234" };
const { pass, ...safe } = sensitive;
console.log("\Safe JSON:", JSON.stringify(safe));


// 30️⃣ Deep clone using JSON
const original = { nested:{ v:1 } };
const deepClone = JSON.parse(JSON.stringify(original));
deepClone.nested.v = 99;
console.log("\nOriginal unaffected:", original.nested.v);


// 31️⃣ Create nested employee object


const employee = {
    name:"John",
    address:{
        city:"Noida",
        zip:201301

    },

};
console.log("\n", employee);


// 32️⃣ Update deeply nested property
employee.address.city = "Delhi";
console.log("\nUpdated city:", employee.address.city);


// 33️⃣ Safely access nested values

// Optional chaining allows you to safely access properties of an object that 
// might not exist — without causing an error.It prevents your program from crashing 
// when accessing nested values.

console.log("\nOptional chaining:",
    employee.contact?.phone);


// 34️⃣ Flatten one-level nested object
const nested = { a:1, b:{ c:2, d:3 }};
const flat = { ...nested, ...nested.b };
delete flat.b;
console.log("\nFlattened:", flat);


// 35️⃣ Merge nested structures
const n1 = { conf:{ timeout:100 }};
const n2 = { conf:{ retries:3 }};
const mergedNested = {
    conf: { ...n1.conf, ...n2.conf }
};
console.log("\nMerged nested:", mergedNested);


// 36️⃣ Find property with highest numeric value
const scores = { A:10, B:50, C:30 };
let maxKey = Object.keys(scores)
    .reduce((a,b)=> scores[a] > scores[b] ? a : b);
console.log("\nHighest:", maxKey);


// 37️⃣ Filter object based on condition
const filtered = Object.fromEntries(
    Object.entries(scores).filter(([k,v])=> v>20)
);
console.log("\nFiltered:", filtered);


// 38️⃣ Convert object values to uppercase
const textObj = { a:"hi", b:"test" };
const upper = Object.fromEntries(
    Object.entries(textObj)
    .map(([k,v])=>[k,v.toUpperCase()])
);
console.log("\nUppercase:", upper);


// 39️⃣ Reverse keys and values
const rev = Object.fromEntries(
    Object.entries({x:"1",y:"2"})
    .map(([k,v])=>[v,k])
);
console.log("\nReversed:", rev);


// 40️⃣ Count frequency of values
const freqObj = { a:1, b:2, c:1 };
const freq = {};
Object.values(freqObj).forEach(v=>{
    freq[v] = (freq[v]||0)+1;
});
console.log("\n Frequency:", freq);


// 41️⃣ Find duplicate values
const duplicates = Object.entries(freq)
    .filter(([k,v])=> v>1)
    .map(([k])=>k);
console.log("\nDuplicates:", duplicates);


// 42️⃣ Compare two objects for equality 
const o1 = { a:1, b:2 };
const o2 = { a:1, b:2 };
console.log("\nEqual:",
    JSON.stringify(o1) === JSON.stringify(o2));


// 43️⃣ Find missing keys
const base = { a:1, b:2, c:3 };
const compare = { a:1 };
const missing = Object.keys(base)
    .filter(k=> !(k in compare));
console.log("\nMissing keys:", missing);


// 44️⃣ Sort object by values
const sorted = Object.fromEntries(
    Object.entries(scores)
    .sort((a,b)=> a[1]-b[1])
);
console.log("\nSorted:", sorted);




