// 1️⃣3️⃣ Hollow Diamond
//    *         
//       *   *       
//     *       *     
//   *           *   
// *               * 
//   *           *   
//     *       *     
//       *   *       
//         * 

let n = 9;
let left = Math.floor(n / 2);
let right = Math.floor(n / 2);

for (let i = 0; i < n; i++) {

    for (let j = 0; j < n; j++) {

        if (j === left || j === right) {
            process.stdout.write("* ");
        } else {
            process.stdout.write("  ");
        }
    }

    process.stdout.write("\n"); // 

    if (i < Math.floor(n / 2)) {
        left--;
        right++;
    } else {
        left++;
        right--;
    }
}
