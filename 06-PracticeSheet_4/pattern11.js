// 1️⃣1️⃣ Diamond Pattern
//    *
//   * *
//  * * *
// * * * *
//  * * *
//   * *
//    *

let num = 5;
let star = 1;
let space = num - 1;


for (let i = 0; i < num; i++) {
    
    for (let j = 0; j < space; j++) {
        process.stdout.write("  ");
    }

    for (let j = 0; j < star; j++) {
        process.stdout.write("* ");
    }

    process.stdout.write("\n");

    star += 2;
    space--;
}

// console.log(star)
star = star-4;   // Adjust to avoid repeating middle row
space = 1;

for (let i = 0; i < num - 1; i++) {

    for (let j = 0; j < space; j++) {
        process.stdout.write("  ");
    }

    for (let j = 0; j < star; j++) {
        process.stdout.write("* ");
    }

    process.stdout.write("\n");

    star -= 2;
    space++;
}
