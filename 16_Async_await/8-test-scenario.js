function fetchData() {
    return new Promise((resolve,reject) => {
        let success=true;
        if(success)
        {
         return resolve ("data fetched ")
        }
        else{

             return reject ("Not Fetched")
        }
    //    setTimeout(() => reject("error"), 1000);
    });
}

// function testWrong() {
//     let data = fetchData();
//     console.log("Wrong Test:", data);
// }

// testWrong();


async function testCorrect() {
    let data = await fetchData();
    // console.log("Correct Test:", data);
    return data;
}

function test()
{
    console.log("always executes")
}
testCorrect()
.then((val)=>console.log(val))
.catch((err)=>console.log(err))
.finally(test)
.finally(console.log("hello")); // incorrect
// .finally(()=>console.log("hello")); // correct 
// .finally(test());////this is also incorrect
