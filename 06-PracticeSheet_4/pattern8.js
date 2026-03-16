// Inverted Number Triangle
// 1 2 3 4
// 1 2 3
// 1 2
// 1


let num=5;
let star=5

for(let i=0;i<num;i++)
{ 
    let k=1
    for(let j=0;j<star;j++)
    {
       process.stdout.write(String(k))
       k++
       }
        
process.stdout.write("\n")

star--;
}