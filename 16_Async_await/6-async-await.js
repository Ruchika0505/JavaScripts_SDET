// Example1

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(false) {
                resolve("User Data");
            } else {
                reject("err");
            }
        }, 10000);
    });
}

async function main() {
    console.log("Before");
    let data = await getUser();
    console.log(data);
    console.log("After");
}

main();



// Example2

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(false) {
                resolve("User Data");
            } 
            else {
                reject (new Error("Network request failed"));
            }
        }, 1000);
    });
}

async function main() {
    console.log("Before");
    try{
    let data = await getUser();
    console.log(data);
    }
    catch(error)
    {
     console.log(error)
    }
    console.log("After");
}

main();