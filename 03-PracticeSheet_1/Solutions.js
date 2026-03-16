// Variables

// Program to declare and print a variable using var.
// console.log(a)
// var a=10;
// console.log(a);

// function testscope()
// {
//    b=100;

//     if(b>10)
//     {

//         var a=10;
//     }
//     console.log(a)
// }

// testscope()

// Program to declare and print a variable using let.

// Program to declare a constant using const.

// Program to reassign a value to a let variable.

// let a=10;
// console.log(a);
// a=20;
// console.log(a);

// Program to show redeclaration behavior of var.

// var a=10;
// var a=20;

// Program to demonstrate block scope using let.


// function test()
// {
//     if(true)
//     {
//         var a=10;
//     }

//     console.log(a);
// }

// test()
// Program to demonstrate function scope using var.

// Program to store and print multiple variables in one output.

// var name = "Ruchika";
// var age = 25;
// var city = "Chandigarh";

// console.log("Name: " + name + ", Age: " + age + ", City: " + city);



// Program to swap values of two variables.

// var a=10
// var b=20

// var c;
// console.log("Before swapping " + a + " " + b)
// c=a;
// a=b;
// b=c;

// console.log("After swapping " + a + " " + b) 

// Program to declare a variable without assigning a value.

// let a=10
// let b=20

// console.log("Before swapping " + a + " " + b)
// a=a+b;
// b=a-b;
// a=a-b;
// console.log("After swapping " + a + " " + b) 



// 🔹 Data Types

// Program to create and print a string variable.

// let a="ruchika";
// console.log(typeof(a));

// Program to create and print a number variable.

// Program to create and print a boolean variable.

// Program to check the data type of a variable using typeof.

// Program to store null in a variable and check its type.

// let a=null;
// console.log(typeof(a));
// Program to declare an undefined variable and print it.

// Program to create an array and print its values.

// let a=[10,20,30,40];
// console.log(a[0]);

// Program to create an object and print its properties.

// let student={ 
//     "name" :"ruchika",
//     "age"  :"25",
//     "job"  :"trainer"
// }
// console.log(student);
// student.name="eshan"
// student.job="business"
// console.log(student);




// Program to modify a value inside an object.

// Program to demonstrate dynamic typing in JavaScript.

// 🔹 Primitive vs Reference Types

// Program to show value copy behavior of primitive data types.

let a=10;
let b=a;
b=20;
console.log(a)
console.log(b)


// Program to show reference copy behavior of objects.

let object1={
    "city":"chandigarh"
}
let object2=object1;

console.log(object1.city)
object2.city="delhi";

console.log(object1.city)
console.log(object2.city)


// Program to compare two primitive values.

// Program to compare two objects with same data.

// Program to modify one reference variable and observe changes in another.

// 🔹 Type Checking & Conversion

// Program to convert a string number into a number.

// let s="123"
// let num=Number(s);
// console.log(num)


// Program to check the type before and after conversion.

// // Program to convert a number into a string.

// let num=123;
// let s=String(num);
// console.log(typeof(s))

// Program to demonstrate implicit type conversion.

//number +string

let sum=true +5; 
console.log(sum)


// Program to demonstrate explicit type conversion.