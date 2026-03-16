// Example-1

function getUser(callback) {
    
    setTimeout(() => {
        console.log("hello")
        callback("User Data");
    }, 1000);
    console.log("bye")
}

console.log("Before");

function data(a)
{
    console.log(a);
}

getUser(data);

console.log("After");

// Example-2

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 10000);
}

function processData() {
    console.log("Processing data");
}
console.log("Start")
fetchData(processData);
console.log("stop")