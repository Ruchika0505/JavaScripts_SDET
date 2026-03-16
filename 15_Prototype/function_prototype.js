// Prototype is the mechanism by which JavaScript 
// objects inherit properties and methods from other objects.

// Every JavaScript object has an internal link to 
// another object called its prototype.

// When you access a property:

// 1 JS checks the object itself
// 2 If not found → checks its prototype
// 3 Continues up the prototype chain

// Example
// const arr = [1,2,3];

// arr.p
// arr.push(4);  // Where did push come from?


// push() is not inside arr — it comes from:

// Array.prototype


// So JavaScript finds it through the prototype chain.


// in one line:
// Prototype enables inheritance in JavaScript by 
// allowing objects to share properties and methods 
// through the prototype chain.




// function student()
// {
// this.name="david",
// this.address="usa"
// }

// std1=new student()
// std1.age=30
// console.log(std1.name)
// console.log(std1.address)
// console.log(std1.age)


// std2=new student()
// std2.age=30
// console.log(std2.name)
// console.log(std2.address)
// console.log(std2.age) //undefine

//i want to create new proprty common for all object,this is possible with the
// prototype

//without prototype
function student()
{
this.name="david",
this.address="usa"
}

std1=new student()
std1.age=30
console.log(std1.name)
console.log(std1.address)
console.log(std1.age)

std2=new student()
console.log(std2.name)
console.log(std2.address)
console.log(std2.age) //undefine



//with prototype

function student()
{
this.name="david",
this.address="usa"
}
student.prototype.age=30

std1=new student()
std1.age=30
console.log(std1.name)
console.log(std1.address)
console.log(std1.age)//30

std2=new student()
console.log(std2.name)
console.log(std2.address)
console.log(std2.age) //30