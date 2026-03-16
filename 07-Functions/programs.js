// Write a function to check whether a number is even or odd.

// let fun = x => 
// {
// if(Math.floor(x%2===0))
//     console.log("even")
// else
//     console.log("odd")
// } 

// fun(4);


// 2️⃣ Write a function that returns the square of a number.

// let sq= x=> x*x
// console.log(sq(2))

// 3️⃣ Write a function that accepts two numbers and returns the larger value.

// let largest= (x,y) =>
// {
// if(x>y)
//     return x;
// else
//     return y;
// }

// console.log(largest(10,20))

// 4️⃣ Write a function that takes a string and returns its reverse.
// method-1
// function reverse(str)
// {
//     var StringReverse="";

//     for(let i=str.length-1;i>=0;i--)
//         StringReverse +=str[i]
//   console.log(StringReverse)
// }

// reverse("hello")

//method-2

// function reverse(str)
// {
//    console.log(str.split("").reverse().join(""))

    
// }

// reverse("hello")


// 5️⃣ Write a function that calculates the factorial of a number.

// let fact = function(n) {
//     if (n === 0 || n === 1)
//         return 1;

//     return n * fact(n - 1);
// };

// console.log(fact(5));



// 6️⃣ Write a function to check whether a number is prime.

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// // Example
// console.log(isPrime(7));  // true
// console.log(isPrime(10)); // false


// 7️⃣ Convert a function that adds two numbers into a function expression and an 
// arrow function.

// function add(a, b) {
//     return a + b;
// }


// const addExp = function(a, b) {
//     return a + b;
// };
// const addArrow = (a, b) => {
//     return a + b;
// };

// 8️⃣ Write an arrow function to compute the cube of a number.

// let cube= (a)=> a*a*a

// console.log(cube(2))


// 9️⃣ Create an arrow function that returns an object representing student details.

// let details= (myobj)=> myobj
// myobj={a:2,b:3,c:4}
// console.log(details(myobj))

// 🔟 Write code demonstrating the difference between this behavior in regular and arrow functions.

// const obj = {
//   name: "Ruchika",

//   regular: function () {
//     console.log("Regular:", this.name);
//   },

//   arrow: () => {
//     console.log("Arrow:", this.name);
//   }
// };

// obj.regular(); // Ruchika
// obj.arrow();   // undefined

// 1️⃣1️⃣ Write a function to calculate simple interest using a default rate value.
// function simpleInterest(p, t, r = 5) {
//   return (p * t * r) / 100;
// }

// console.log(simpleInterest(1000, 2));

// 1️⃣2️⃣ Write a function that accepts any number of numeric arguments and returns their sum.


// function sum(...nums) {
//   let total = 0;
//   for (let n of nums) total += n;
//   return total;
// }

// console.log(sum(1,2,3,4));

// 1️⃣3️⃣ Pass an array of values into a function using the spread operator.

// let sum=function(a,b)
// {

//     c=a+b
//     console.log(c) 
// }
// const arr=[1,2]
// sum(...arr)

// 1️⃣4️⃣ Write a function that prints a student’s name and unlimited marks using rest parameters.

function show(name, ...marks) {
  console.log("Name:", name);
  console.log("Marks:", marks);
}

show("Ruchika", 80,90,70.85);


// 1️⃣5️⃣ Create a function that accepts another function as an argument and executes it.

// function outer (fn)
// {
//     return fn;
// }

// function fn()
// {
//     console.log("Hello All")
// }

// outer(fn());

// 1️⃣6️⃣ Write a function operate(a,b,operation) that performs a calculation based on a callback function passed.

function operate(a,b,op) {
  return op(a,b);
}

const add = (x,y)=>x+y;

console.log(operate(3,4,add));



// 1️⃣8️⃣ Write code demonstrating global scope vs local scope using functions.

let x = 10;

function test(){
  let x = 20;
  console.log("Local:", x);
}

test();
console.log("Global:", x);

// 1️⃣9️⃣ Write a program showing block scope behavior using let.
if(true){
  let a = 5;
  console.log(a);
}
// console.log(a); // Error

// 2️⃣0️⃣ Create a closure-based counter that remembers how many times it was called.
// function outer()
// {
//     let count=0;
//     function inner()
//     {
//         count++
//         return count
//     }
//     return inner
// }

// let counter=outer()
// console.log(counter())
// console.log(counter())
// console.log(counter())
// 2️⃣1️⃣ Implement a private variable using closure (e.g., password validation system).

// function input()
//   {
//     let password="1111"

//     return function(input)
//     {
//           if(input===password)
//             console.log("password correct")
//         else
//             console.log("password not correct")
//     }

//   }

//   let chkpwd=input()
//   chkpwd("1111")
//   chkpwd("11")

// 2️⃣2️⃣ Write a function to find the GCD of two numbers.

// function GCD(num1,num2)
// {
//     console.log(`GCD for numbers ${num1} and  ${num2} are: `)
//     for(let i=1;i<=num1 && i <=num2;i++)
//     {
//         if(num1%i===0 && num2 %i ===0)
//         {
//             console.log(i)
//         }
//     }
// }
// GCD(5,10)

// 2️⃣3️⃣ Write a function that generates Fibonacci series up to n terms.

// function fib(n){
//   let a=0,b=1;
//   for(let i=0;i<n;i++){
//     console.log(a);
//     let temp=a+b;
//     a=b;
//     b=temp;
//   }
// }
// fib(5);


// 2️⃣4️⃣ Write a function that counts the number of vowels in a string.

// let str="ruchika"
// let count=0
// var vowel=function()
// {
//     count++;
//     for(const i of str.toLowerCase())
//     {
//         if("aeiou".includes(i))
//             count++
//     }
//     return count;
// }

// console.log(vowel(str))

// 2️⃣5️⃣ Write a function to determine if two strings are anagrams.

function anagram(str1,str2)
{
if(str1.split("").sort().join("") === str2.split("").sort().join(""))
    console.log("Strings are anagram")
else{
     console.log("Strings are NOT anagram")
}
}

anagram("care","race")



// 2️⃣8 Write a recursive function to compute power (xⁿ).

function power(x,n){
  if(n===0) return 1;
  return x*power(x,n-1);
}

// 2️⃣9️⃣ Write a function to simulate login validation using username and password inputs.

function validate(u,p){
  return (u==="admin" && p==="123") ?
    "Success":"Fail";
}


// 3️⃣0️⃣ Write a function factory that returns a discount calculator function.

function discount(rate){
  return function(price){
    return price - price*rate;
  }
}

let ten = discount(0.1);
console.log(ten(1000));


// 3️⃣1️⃣ Write a function that executes after a delay using setTimeout.
setTimeout(()=>{
  console.log("Executed later");
},2000);


// 3️⃣2️⃣ Use an IIFE to initialize configuration settings.

; (function(){
;   let config="Initialized";
;   console.log(config);
; })();


// ;  3️⃣3️⃣ Create a memoized function that caches previous results.

; function memo(){
;   let cache=0;

;   return function(n){
;     pow=n*n;
;     return pow;
;   }
 }

 let sq=memo();
 console.log(sq(5));
console.log(sq(5));

// 3️⃣5️⃣ Identify and correct a bug when using arguments inside an arrow function.

const test=()=>{
  console.log(arguments);
}
test()
function test(){
  console.log(arguments);
}

test(10,20,30)

// 3️⃣6️⃣ Fix a closure issue where loop index values are not captured correctly.

for(let i=0;i<3;i++){
  setTimeout(()=>console.log(i),100);
}
