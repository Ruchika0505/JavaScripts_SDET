// Replace callback with Promise

//Example-1

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User Data");
        }, 1000);
    });
}

console.log("Before");

getUser()
    .then(data => console.log(data))
    .catch(err => console.log(err));

console.log("After");


//Example2

const p= new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve("User Data");
        }, 1000);
    });

function getUser() {
    return p;
}

console.log("Before");

getUser()
    .then(data => console.log(data))
    .catch(err => console.log(err));

console.log("After");


Example-3

const p1= new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve("User Data");
        }, 1000);
    });

const p2= new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve("User Data2");
        }, 10000);
    });



p1
    .then(data => console.log(data))
    .catch(err => console.log(err));

p2
    .then(data => console.log(data))
    .catch(err => console.log(err));

Example4

const promise=new Promise((resolve,reject)=>
{
      let success=false;
      if(success)
      {
         resolve ("API data")
      }
      else{

         reject ("Problem Occured")
      }

})

// promise.then((data)=>console.log(data)).catch((error)=> console.log(error))
function test()
{
    return promise
}


test().then((data)=>console.log(data)).catch((error)=> console.log(error))