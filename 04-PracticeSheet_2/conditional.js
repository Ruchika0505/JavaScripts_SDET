// 1.Take a year as input and print whether it is a leap year.

// const prompt=require("prompt-sync")();

// let year=Number(prompt("Enter the year to check: "));

// if((year%4==0 && year%100!=0) ||(year%400==0))
// {
//     console.log("Entered year is leap year");
// }
// else{
//      console.log("Entered year is NOT leap year");
// }

// 2.Input marks of a student and print grade (A, B, C, F) using if-else if-else.


// const prompt = require("prompt-sync")();

// let marks = Number(prompt("Enter student marks (0-100): "));

// if (marks >= 90 && marks <= 100) {
//     console.log("Grade: A");
// } else if (marks >= 75 && marks < 90) {
//     console.log("Grade: B");
// } else if (marks >= 50 && marks < 75) {
//     console.log("Grade: C");
// } else if (marks >= 0 && marks < 50) {
//     console.log("Grade: F");
// } else {
//     console.log("Invalid marks entered");
// }


// 3.Input a number and check if it lies between 10 and 50 and whether it is even.

// const prompt = require("prompt-sync")();

// let number = Number(prompt("Enter a number: "));

// if (number >= 10 && number <= 50 && number % 2 === 0) {
//     console.log("The number is even and lies between 10 and 50");
// } else {
//     console.log("The number does NOT satisfy the conditions");
// }


// 4.Take username and password, verify against predefined credentials, print success/failure.

// const prompt = require("prompt-sync")();

// Predefined credentials
// const correctUsername = "admin";
// const correctPassword = "1234";

// // Take input from user
// let username = prompt("Enter username: ");
// let password = prompt("Enter password: ");

// // Verification
// if (username === correctUsername && password === correctPassword) {
//     console.log("Login Successful");
// } else {
//     console.log("Login Failed");
// }

// 5.Input three numbers and print the largest.

// const prompt = require("prompt-sync")();

// // Take three numbers as input
// let num1 = Number(prompt("Enter first number: "));
// let num2 = Number(prompt("Enter second number: "));
// let num3 = Number(prompt("Enter third number: "));

// // Compare and find the largest
// if (num1 >= num2 && num1 >= num3) {
//     console.log("The largest number is:", num1);
// } else if (num2 >= num1 && num2 >= num3) {
//     console.log("The largest number is:", num2);
// } else {
//     console.log("The largest number is:", num3);
// }


// 6.Input a character and check if it is a vowel or consonant.


// const prompt = require("prompt-sync")();

// let char = prompt("Enter a single character: ").toLowerCase();

// // Check if input is a single alphabet
// if (char.length === 1 && char >= 'a' && char <= 'z') {
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         console.log("The character is a Vowel");
//     } else {
//         console.log("The character is a Consonant");
//     }
// } else {
//     console.log("Invalid input! Please enter a single alphabet character.");
// }


// 7.Input a number and print whether it is positive, negative, or zero.

// const prompt = require("prompt-sync")();

// let number = Number(prompt("Enter a number: "));

// if (number > 0) {
//     console.log("The number is Positive");
// } else if (number < 0) {
//     console.log("The number is Negative");
// } else {
//     console.log("The number is Zero");
// }


// 8.Input two numbers and an operator (+, -, *, /), print the result.


// const prompt = require("prompt-sync")();

// let num1 = Number(prompt("Enter first number: "));
// let num2 = Number(prompt("Enter second number: "));
// let operator = prompt("Enter operator (+, -, *, /): ");

// if (operator === "+") {
//     console.log("Result:", num1 + num2);
// } else if (operator === "-") {
//     console.log("Result:", num1 - num2);
// } else if (operator === "*") {
//     console.log("Result:", num1 * num2);
// } else if (operator === "/") {
//     if (num2 !== 0) {
//         console.log("Result:", num1 / num2);
//     } else {
//         console.log("Error: Division by zero!");
//     }
// } else {
//     console.log("Invalid operator");
// }

// 9. Input a day number (1–7) and print the day name using switch.

// const prompt = require("prompt-sync")();

// let dayNumber = Number(prompt("Enter day number (1-7): "));

// switch(dayNumber) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day number");
// }


// 10. Input total bill amount, apply discount if total > 1000, print final price.

// const prompt = require("prompt-sync")();

// let total = Number(prompt("Enter total bill amount: "));

// if (total > 1000) {
//     let discount = total * 0.1; // 10% discount
//     total = total - discount;
//     console.log("Discount applied. Final price:", total);
// } else {
//     console.log("No discount. Final price:", total);

// }




// console.log(`The addition of two numbers ${num1} and ${num2} is ${num2}`);


// let a=[10,20,30] 

// for(let x in a) //for of
// {
//     console.log(x)  //
// }

const student=
{
    name:"Ajay",
    age:"35"
}

for(let x of Object.entries(student) )//for of
{
    console.log(x)  //
}

student.name="XYZ"

