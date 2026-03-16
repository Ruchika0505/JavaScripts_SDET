// 1️⃣2️⃣ Hollow Square
// * * * *
// *     *
// *     *
// * * * *


let num = 5;

for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
        if(i==1||j==1||i==num||j==num)
        process.stdout.write("* ");
     else
					process.stdout.write("  ")
    }
    process.stdout.write("\n"); // move to next line
}
