// *
// * *
// * * *
// * * * *

n=5;
let star=1
let space=4

for(let i=0;i<5;i++)
{
    for(let j=0;j<space;j++)
{
    process.stdout.write(" ")
}
for(let j=0;j<star;j++)
{
    process.stdout.write("*")
}
process.stdout.write("\n")
star++
space--
}

