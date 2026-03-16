// 6️⃣ Floyd’s Triangle
// 1
// 2 3
// 4 5 6
// 7 8 9 10

let num=5;
let star=1;
let k=1
for(let i=0;i<num;i++)
{ 
    for(let j=0;j<star;j++)
    {
       
         process.stdout.write(String(k))
         k++
    }
process.stdout.write("\n")

star++;
}