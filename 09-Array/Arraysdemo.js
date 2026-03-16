
// =============================
// 1️⃣ Basic Array + Core Methods
// =============================
const nums = [1,2,3,4,5];
console.log("\nOriginal:", nums);

// map() :Creates a new array by transforming each element.
const doubled = nums.map(n => n * 2);
console.log("map doubled:", doubled);

// filter():Returns elements matching condition.
const even = nums.filter(n => n % 2 === 0);
console.log("filter even:", even);

// reduce():Combines array into single value.
const sum = nums.reduce((acc,n)=> acc + n,0);
console.log("reduce sum:", sum);

// find():Returns first matching element.
const found = nums.find(n => n > 3);
console.log("find >3:", found);

// =============================
// 2️⃣ Advanced Array Methods
// =============================

console.log("\nAdvanced Methods");

// some() : Checks if ANY match condition
 nums = [1,2,3,4];
console.log("some >4:", nums.some(n=>n>4)); //boolean

// every() :Checks if ALL match condition
console.log("every >0:", nums.every(n=>n>0));

// flat():Flatten nested arrays
const nested = [1,[2,3],[4,[5]]];
console.log("flat:", nested.flat());

// sort():Sort values
const unsorted = [10,5,8];
unsorted.sort((a,b)=>b-a);
console.log("sorted:", unsorted);

// =============================
// 3️⃣ Array Destructuring
// =============================
console.log("\nDestructuring");

const arr = [10,20,30];
const [a,b,c] = arr;
console.log(a,b,c);

// default value
const [x=1,y=2,z=3] = [100];
console.log("default:", x,y,z);//100,2,3

// skipping
const [first,,third] = [1,2,3];
console.log("skip:", first, third);

// swap
let p=5,q=10;
[p,q] = [q,p];
console.log("swap:", p,q);


// =============================
// 4️⃣ Spread Operator
// =============================
console.log("\nSpread");

// copy
nums = [1,2,3,4,5];
const copy = [...nums];
console.log("copy:", copy);
copy.push(20)
console.log("copy:", copy);
console.log("or:", nums); //does not chnage primitive data

// but in case object it works differently

const arr1 = [{ name: "Riya" }, { name: "Sam" }];

// Spread copy
const arr2 = [...arr1];

// Modify nested object
arr2[0].name = "Changed";

console.log(arr1);
console.log(arr2);


// merge
const merged = [...nums, ...unsorted];
console.log("merged:", merged);

// update immutably

nums = [1,2,3,4,5];
const updated = [...nums, 99];
console.log("updated:", updated);
console.log("original",nums)

// =============================
// 5️⃣ Rest Operator
// =============================
console.log("\nRest");

function total(...values){
    return values.reduce((a,b)=>a+b,0);
}
console.log("rest sum:", total(1,2,3,4));



// =============================
// 6️⃣ Array Creation Methods
// =============================
console.log("\nCreation Methods");

console.log("Array.of:", Array.of(1,2,3));

console.log("Array.from string:",
    Array.from("QA"));

console.log("New Array length:",
    new Array(3));

//     let arr = new Array(3);

// arr[0] = "A";
// arr[1] = "B";
// arr[2] = "C";

// console.log(arr);

//use fill

 arr = new Array(3).fill(0);
console.log(arr);

//use map

 arr = new Array(3)
            .fill(null)
            .map((_,i) => i+1);

console.log(arr);


// sequence generation
const sequence = Array.from({length:5},(_,i)=>i+1);
console.log("sequence:", sequence);



// =============================
// 7️⃣ Practical Exercises Demo
// =============================

// reverse
const reversed = [...nums].reverse();
console.log("\nreverse:", reversed);

// remove duplicates
const dup = [1,2,2,3,3];
const unique = [...new Set(dup)];
console.log("unique:", unique);

// max value
const max = Math.max(...nums);
console.log("max:", max);

// frequency count
const freq = {};
dup = [1,2,2,3,3];
dup.forEach(v => {
    freq[v] = (freq[v] || 0) + 1;
});
console.log("frequency:", freq);



// =============================
// 8️⃣ Performance Tip Demo
// =============================
console.log("\nPerformance Tip");

// caching length
for(let i=0,len=nums.length;i<len;i++){
    // body for for loop
}

// find vs filter
const single = nums.find(n=>n>2);
const many = nums.filter(n=>n>2);

console.log("find result:", single);
console.log("filter result:", many);


