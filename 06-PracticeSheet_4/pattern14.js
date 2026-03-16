// 1️⃣4 Hollow Pyramid
//    *
//   * *
//  *   *
// * * * *



const prompt = require("prompt-sync")();

let r = Number(prompt("Enter number of rows: "));
let c = Number(prompt("Enter number of columns: "));

for (let i = 1; i <= r; i++) {

    for (let j = 1; j <= c; j++) {

        if (i === r || (i + j) === r + 1 || (j - i) === r - 1) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }

    process.stdout.write("\n");
}
