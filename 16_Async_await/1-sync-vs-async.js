console.log("Start");

function heavyTask() {
    // for (let i = 0; i < 10000; i++) {}
    // console.log("Heavy Task Done");

    setTimeout(()=>{
        console.log("Heavy Task Done")
    },5000)
}

heavyTask();
console.log("End");