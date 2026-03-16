const p=new Promise((resolve,reject)=>
{
    p.then(res=>console.log(res))
    // setTimeout(()=>{resolve("promise return value");},10000);
});


const p1=new Promise((resolve,reject)=>
{
    
    setTimeout(()=>{resolve("promise return value");},5000);
});
// async function getData()  //return a promise
// {
//     return "ruchika";
// }

async function getData()  //return a promise
{
    return p;
}

// // let data=getData()
// // p.then((res)=>console.log(res)) //this is will return data

// // function getData()
// // {
// //     p.then(res=>console.log(res));
// //     console.log("hello")
// // }
// // getData()
// console.log("hello")
// async function getData()
// {
//    const val1= await p;
//    console.log("Hello1")
//    console.log(val1)

//     const val2= await p1;
//    console.log("Hello2")
//    console.log(val2)
   
// }
// getData()



// function greet(name, callback) {
//     console.log("Hello", name);
//     callback();
// }

// function sayBye() {
//     console.log("Goodbye");
// }

// greet("Ruchika", sayBye);

//promise

let promise =new Promise(function(resolve,reject){
 resolve(56)
 console.log("hello promise")
})
console.log("hello")
setTimeout(function(){
    console.log("hello in  2 sec")
},2000);
console.log("bye")
console.log(promise)

//fetch google.com homepage==>console.log("google.com home page done")
//fetch data from data api
//fetch pictures from server
//print downloading
//rest of the script

//promise are mainly used for  for parallel execution

const pro=new Promise(function(r,rj){
    console.log("This is pending")
    setTimeout(()=>{
   console.log("This is promise fullfilled")
    r(true)
    },2000)
}
)

const pro1=new Promise(function(r,rj){
    console.log("This is pending")
    setTimeout(()=>{
   console.log("This is promise not com[pleted")
    
    rj(new Error("This is error"))

    },5000)
}
)
// console.log(pro,pro1)
pro.then(value=> console.log(value)).catch((error)=>console.log("This is Error occureed"))
pro1.then((value)=>console.log(value)).catch((error)=>console.log(error))

function heavyTask() {
    let start = Date.now();
    while (Date.now() - start < 5000) {}
}
console.log(new Date());
heavyTask();
console.log("End");


function a() {
    // console.log("a")
    b();
     console.log("a")
}
function b() {
   
    c();
     console.log("b")
}
function c() {
    console.log("Inside C");
}
a();


console.log("Start");
setTimeout(() => {
    console.log("Timeout");
}, 0);
console.log("End");


function greet(name) {
    console.log("Hello", name);
    Bye();
}
function sayBye() {
    console.log("Goodbye");
}

function Bye() {
    console.log("love");
}

greet("Ruchika");

function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 done");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 done");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 done");
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed");
        });
    });
});


console.log("Start");
setTimeout(() => {
    console.log("Inside timeout");
}, 2000);
console.log("End");

let promisee= new Promise((resolve,reject)=>
{
    reject=true
    // if()
    // {
    //     console.log("success")
    // }
    // else
    // {
    //     console.log("fail")
    // }
})


promisee.then(console.log("this is done")).catch("not done")

console.log("Hello")
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           reject("error");
        }, 5000);
    });
}
fetchData()
    .then(data => console.log(data))
    .catch(err => console.log(err));

    console.log("Hello1")
     console.log("Hello2")


    function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data loaded"), 2000);
    });
}
async function getData() {
    console.log("Start");
    let data = await fetchData();
    console.log(data);
    console.log("End");
}
getData();
console.log("first line")

function eshan()
{
    return new Promise((resolve,reject)=>
    {
        sucess=true
        if(sucess)
            return resolve("data")
        else
           return reject("not")
    })
}

async function ruchika()
{
return await(eshan());
}
console.log("2nd")
console.log("3nd")

let r=ruchika()
r.then((value)=>console.log(value)).catch((err)=>console.log(err)).finally("ohh god")

console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

 async function test()
{
    return await fetchData();
}

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data"), 2000);
    });
}

let data=test();
data.then((val)=>console.log(val))


function getUser() {
    setTimeout(() => {
        resolve ("User Data");
    }, 1000);
}

function getUser(callback) {
    setTimeout(() => {
        callback("User Data");
    }, 1000);
}


getUser().then(data => console.log(data));

const P1= new Promise((resolve,reject)=>{
          let success=true
          if(true)
          {
            return resolve ("hello")
          }
          else
          {
            return reject("bye")
          }
})

async function test()
{
    return P1;

}

// console.log(test())
let t=test();
t.then((value)=>console.log(value)).catch((err)=>console.log(err))