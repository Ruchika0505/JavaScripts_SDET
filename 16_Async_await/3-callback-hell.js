setTimeout(() => {
    console.log("Step 1");

    setTimeout(() => {
        console.log("Step 2");

        setTimeout(() => {
            console.log("Step 3");
        }, 10000);

    }, 5000);

}, 1000);

// pyramid problem.