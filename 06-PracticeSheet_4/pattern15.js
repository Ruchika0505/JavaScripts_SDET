// 1️⃣6 Binary Triangle
// 1
// 0 1
// 1 0 1
// 0 1 0 1

num=5;
star=1;

for(let i=1;i<=num;i++)
{
    let k=i%2;
for(let j=0;j<star;j++)
{
process.stdout.write(String(k));
k=k?0:1
}

process.stdout.write("\n");
star++;
}