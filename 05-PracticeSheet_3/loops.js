// const prompt=require("prompt-sync")();
// Print Even Numbers – Print all even numbers between 1 and 50.

// const prompt=require("prompt-sync")();
// console.log("List of even numbers")
// let num=10;
// for(let i=0;i<=num;i++)
// {
// if(i%2!=0)
// {
   
//     process.stdout.write(i + " " )
// }
// }

// Sum of Natural Numbers – Input n and calculate the sum from 1 to n.

// let limit=prompt("Enter the Limit")
// let sum=0;
// for(let i=1;i<=limit;i++)
// {
//     sum+=i
// }
// console.log(sum)


// Factorial Calculator – Input a number and print its factorial.

// let num=prompt("enter the number");
// let fact=1;
// for(let i=1;i<=num;i++)
// {
//     fact*=i;
// }
// console.log(fact);

// Fibonacci Series – Print first n numbers of the Fibonacci series.
// let num1=0
// let num2=1
// var num3;
// let limit=prompt("enter the limit")

// if(limit===1)
// {
//     console.log(num1);
// }
// else if(limit===2)
// {
//     console.log(num1 + " " + num2)
// }
// else{
// // console.log(num1)
// // console.log(num2)
// for(let i=3;i<=limit;i++)
// {
// num3= num1+num2
//     // console.log(num3)
//     num1=num2
//     num2=num3
// }
// console.log(num3)
// }


// Reverse a Number – Input a number and print its reverse.

// let num=Number(prompt("Enter the number")) //121
// let temp=num
// let rev=0;
// while(num>0)
// {
//    let rem=num%10;
//    rev=(rev*10)+rem;
//    num=Math.floor(num/10);
// }
// console.log(rev)
// if(rev===temp)
// {
//     console.log("Palindrome No")
// }
// else{
//     console.log("Not palindrome Number")
// }


// Prime Number Checker – Input a number and check if it is prime.

// let num=Number(prompt("Enter the number"))
// let flag=true;
// if(num===0 || num===1)
// {
// flag=false
// }
// for(let i=2;i<=Math.sqrt(num);i++)
// {
//     if(num%i===0)
//     {
//         flag=false
//         break;
//     }

// }
// if(flag)
// {
//     console.log("Number is Prime")
// }

// else{
//     console.log("Number is NOT Prime")
// }

// Multiplication Table – Input a number and print its multiplication table up to 10.

// let num=Number(prompt("Enter the number : "))
// let limit=Number(prompt("Enter the limit : "))

// for(let i=1;i<=limit;i++)
// {
//     prod=num*i;
//     console.log(num + "*" + i + " " + "=" + prod)
// }


// Break on Condition – Print numbers 1 to 20, but stop when number equals 13.

// for (let i = 1; i <= 20; i++) {
//     if (i === 13) {
//         break;
//     }
//     console.log(i);
// }


// Skip Certain Numbers – Print numbers 1 to 15, skip multiples of 3 using continue.

// for (let i = 1; i <= 15; i++) {
//     if (i % 3 === 0) {
//         continue;
//     }
//     console.log(i);
// }


// Sum of Even Numbers Only – Input n and print the sum of all even numbers from 1 to n.

// let limit=Number(prompt("Enter the limit"))
// let sum=0;
// for(let i=1;i<=limit;i++)
// {
//     if(i%2===0)
//     {
//         sum+=i;
//     }
// }
// console.log("sum of even number within n" + sum)

// Count Digits in a Number – Input a number and print how many digits it contains.

// let digit=Number(prompt("Enter the Digit"))
// let count=0;
// while(digit>0)
// {
// let rem=digit%10;
// count+=1;
// digit=Math.floor(digit/10)

// }

// console.log(count)
// Check Armstrong Number – Input a number and check if it is an Armstrong number.

// let digit=Number(prompt("Enter the Digit"))
// let temp=digit;
// let count=0;
// while(digit>0)
// {
// let rem=digit%10;
// count+=1;
// digit=Math.floor(digit/10)
// }

// let sum=0;
// while(temp>0)
// {
//     let c=count;
//     let prod=1;
//     let rem=temp%10;
//     while(c>0)
//     {
// prod=prod*rem;
// c--;
//     }
// temp=Math.floor(temp/10)
// sum+=prod;
// }

// console.log(sum)

// Print Odd Numbers in Reverse – Print all odd numbers from 50 down to 1.

// for (let i = 50; i >= 1; i--) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }


// GCD of Two Numbers – Input two numbers and print their Greatest Common Divisor.

// let num1=Number(prompt("Enter first No"))
// let num2=Number(prompt("Enter second No"))
// //5 and 10
// let GCD=0;
// for(let i=0; i<=num1 && i<=num2 ;i++)
// {
// if(num1%i ==0 && num2% i ==0)
// {
//     GCD=i
// }
// }
// console.log(GCD)

// LCM of two Numbers
// let num1=Number(prompt("Enter first No"))
// let num2=Number(prompt("Enter second No"))
// let LCM=0;

// LCM= num1>num2?num1:num2;

// while(true)
// {
//     if(LCM%num1==0 && LCM%num2==0)
//         break;
//     LCM++;
// }

// console.log(LCM)

// Display Factors of a Number – Input a number and print all of its factors.

// let number=Number(prompt("Enter the number"))

// for(let i=1;i<=number;i++)
// {
// if(Number.isNaN(number))
// {
//     console.log("Enter the valid number")
// }
//    else if(number%i===0)
//     {
//         console.log(i)
//     }
    
// }

// for of---value
// let a=[10,20,30];

// for(let x in a)
// {
//     console.log(x);
// }


// const student=
// {
// name:"ruchika",
// address:"chandigarh",

// }

// for(let x of Object.values(student)) //values
// {

//     console.log(x);
// }

// student.name="ajay"
// for(let x of Object.values(student)) //values
// {

//     console.log(x);
// }
