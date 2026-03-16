// npm install prompt-sync


// Program to calculate simple interest using arithmetic and assignment operators.
// const prompt= require('prompt-sync') ();
// let princ= Number(prompt("enter the principal"))
// let rate= Number(prompt("enter the rate"))
// let time=Number(prompt("enter the time"))
// let SI=(princ*rate*time)/100;
// console.log(SI);


// Program to calculate area and perimeter of a circle using arithmetic operators.

// Perimeter=2×π×r
//Area=π×r×r

// const prompt= require('prompt-sync')();

// let r=prompt("enter the radius of circle ")
// let Perimeter=2*Math.PI*r;
// let Area=Math.PI*r*r;
// console.log("Perimeter of circle is " + Perimeter)
// console.log("Area of circle is " + Area)


// Program to convert Celsius to Fahrenheit using arithmetic operators.
// Celsius to Fahrenheit
// F=(C×59​)+32

// const prompt=require('prompt-sync')();

// let celsius = Number(prompt("Enter temperature in Celsius: "));
// let fahrenheit = (celsius * 9 / 5) + 32;
// console.log("Temperature in Fahrenheit:", fahrenheit);


// Program to check whether a year is a leap year using comparison and logical operators.

// const prompt=require('prompt-sync')();

// let year=Number(prompt("Enter the year"))
// if ((year%4==0 && year/100!=0) || (year%400==0))
// {
//     console.log("leap year")
// }
// else{
//    console.log("Not leap year")
// }



// Program to check whether a number is positive, negative, or zero using comparison operators.

// const prompt=require('prompt-sync')();

// let num=Number(prompt("Enter the number"));

// if(num<0)
// {
//     console.log("Number the Negative");
// }
// else if(num>0)
// {
//     console.log("Number the Positive");
// }
// else
// {
//     console.log("Number is Zero");
// }

// Program to find the largest of three numbers using comparison and logical operators.

// const prompt= require('prompt-sync')();
// let a=Number(prompt("Enter first numbers"))
// let b=Number(prompt("Enter second number"))
// let c=Number(prompt("Enter third number"))
// console.log(a + "" +b + "" + c);

// if(a>b && a>c)
// {
//     console.log("first number is greater")
// }
// else if(b>a && b>c)
// {
//     console.log("second number is greater")
// }
// else
    
//     {
//         console.log("third number is greater")
//     }



// Program to calculate total marks and percentage using arithmetic operators.

// const prompt=require('prompt-sync')();
// let maths=Number(prompt("Enter teh marks in Maths"));
// let phys=Number(prompt("Enter teh marks in physics"));
// let chem=Number(prompt("Enter teh marks in Chemistry"));

// let total_marks =(maths+phys+chem);
// let average =total_marks/3;

// console.log("average of the marks" , average )



// Program to check whether a student is passed or failed using comparison operators.

// const prompt = require('prompt-sync')();

// let marks = Number(prompt("Enter student marks: "));

// if (marks >= 40) {
//     console.log("Student is Passed");
// } else {
//     console.log("Student is Failed");
// }

// Program to calculate gross salary using arithmetic and assignment operators.

// const prompt = require('prompt-sync')();

// let basic = Number(prompt("Enter Basic Salary: "));
// let hra = Number(prompt("Enter HRA: "));
// let da = Number(prompt("Enter DA: "));
// let grossSalary = basic;
// grossSalary += hra;
// grossSalary += da;
// console.log("Gross Salary:", grossSalary);


// Program to check whether a number is even or odd using modulus operator.

// const prompt= require("prompt-sync")();
// let number= Number(prompt("Enter the Number : "));
// if(Number.isNaN(number))
// {
//     console.log("Enter Valid Number")
// }
// else if(number%2===0)
// {
//     console.log("Enetred Number is EVEN")
// }
// else
// {
//     console.log("Entered Number is ODD")
// }



// Program to compare two values using both == and === and display the result.

// let a = 10;
// let b = "10";

// console.log("Using == :", a == b);
// console.log("Using === :", a === b);


// Program to demonstrate pre-increment and post-increment operators.

// let a = 5;

// console.log("Pre-increment:", ++a); //6

// let b = 5;
// console.log("Post-increment:", b++); //5
// console.log("Value after post-increment:", b); //6


// Program to demonstrate pre-decrement and post-decrement operators.

// let a = 5;

// console.log("Pre-decrement:", --a);

// let b = 5;
// console.log("Post-decrement:", b--);
// console.log("Value after post-decrement:", b);


// Program to verify login conditions using logical AND and OR operators.


// const prompt = require("prompt-sync")();

// let username = prompt("Enter username: ");
// let password = prompt("Enter password: ");

// if ((username === "admin" && password === "1234") || (username === "user" && password === "abcd")) {
//     console.log("Login Successful");
// } else {
//     console.log("Login Failed");
// }


// Program to check whether a number lies within a given range using logical operators.

// const prompt = require("prompt-sync")();

// let number = Number(prompt("Enter a number: "));
// let lower = Number(prompt("Enter lower limit: "));
// let upper = Number(prompt("Enter upper limit: "));

// if (number >= lower && number <= upper) {
//     console.log("Number lies within the given range");
// } else {
//     console.log("Number does not lie within the given range");
// }


// Program to demonstrate type coercion during arithmetic operations.

let a = "10";
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

