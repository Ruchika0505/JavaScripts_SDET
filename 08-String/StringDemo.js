// Strings in JavaScript
// What is a String?

// A string is a sequence of characters used to represent text.

let name = "Ruchika";
let msg = 'Hello';
let text = `Welcome`;


// JavaScript strings are: Immutable (cannot be changed directly)

// Indexed
// Iterable

// Primitive data type

console.log(typeof pname); // string

// 🔹 Ways to Create Strings
// 1️⃣ Double Quotes
let a = "Hello";

// 2️⃣ Single Quotes
let b = 'Hello';

// 3️⃣ Template Literals (ES6)
let c = `Hello`;


// Allows:

// ✔ Variable embedding
// ✔ Multi-line strings

// let name = "Ruchika";
console.log(`Hello ${name}`);

// 🔹 String Properties
// Length
let str = "JavaScript";
console.log(str.length);

// 🔹 Access Characters
str[0]
str.charAt(1)

// 🔹 Important String Methods
// Case Conversion
str.toUpperCase()
str.toLowerCase()

// Searching
str.includes("Script")
str.indexOf("a")
str.startsWith("Java")
str.endsWith("ipt")

// Extracting
str="welcome"
str.slice(0,4) //0-3
str.substring(0,4) //

// | Feature          | slice()     | substring()    |
// | ---------------- | ----------- | -------------- |
// | Negative indexes | ✅ Supported | ❌ Treated as 0 |
// | Swaps start/end  | ❌ No        | ✅ Yes          |
// | Modern usage     | ⭐ Preferred | Less flexible  |
// | Works on arrays  | ✅ Yes       | ❌ No           |

// Negative Index
// str= "ruchika" //
// console.log(str.slice(-4,-1)) //ali
// console.log(str.substring(-1,-4)) //0

// Swaps start/end 

// str= "ruchika" //
// console.log(str.slice(3,1)) //no
// console.log(str.substring(3,1)) //yes -

arr=[10,20,30,40,50]
// arr.substring(0,4)
console.log(arr.slice(0,3))


// Replace
str="java"
str.replace("Java","Type")

// Splitting
str.split("")

// Trimming
str.trim()

// Concatenation
"a" + "b"
"a".concat("b")


// Preferred modern way:

`${a}${b}`

// 🔹 String Immutability
let s = "Hello";
s[0] = "Y";

console.log(s); // Still "Hello"


// You must create a new string:

s = "Yello";


// 🔹 Loop Through String
str="welcome"
for(let ch of str){
  console.log(ch);
}

// 🔹 Conversion
// String → Number
Number("123")
parseInt("123")

// Number → String
String(123)

// 🔹 Real Automation Use Cases
// API Validation
response.includes("success")

// Dynamic Logs
console.log(`User ${id} created`)

// Data Parsing
csv.split(",")

// Cleaning Inputs
input.trim()


//frequency of character

// str="nitin";
// let visited={}
// for(let i=0;i<str.length;i++)
// {
//     let count =0;
//     c=str.charAt(i)
//     if(!visited[c])
//     {
//     for(let j=0;j<str.length;j++)
//     {  
//         if(str.charAt(i)===str.charAt(j))
//         {
//             count++;
//         }
    
// }
// console.log(str.charAt(i) + "" + count)
// visited[c]=true
// }
// }

