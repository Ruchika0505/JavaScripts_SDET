// num=5;
// for(let i=0;i<num;i++) //row
// {
//         let row = "";
//     for (let j = 0; j < num; j++) {  //col
//         row += "* ";
//     }
//     console.log(row); 
// }


let num = 5;

for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
        process.stdout.write("* ");
    }
    process.stdout.write("\n"); // move to next line
}
