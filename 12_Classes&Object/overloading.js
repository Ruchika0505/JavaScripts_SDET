
//way like in java and C++
class overload
{
   
   sum(a,b)
   {
      this.a=a
      this.b=b
    return this.a+this.b
   }
   sum(a,b,c)
   {
    return a+b+c
   }

}

let obj=new overload();
console.log(obj.sum(10,20))

//correct way in JS

class Overload {
  sum(...args) {  // accept variable number of arguments
    if (args.length === 2) {
      return args[0] + args[1];
    } else if (args.length === 3) {
      return args[0] + args[1] + args[2];
    } else {
      return 0;
    }
  }
}

let obj1= new Overload();
console.log(obj1.sum(10, 20));       // 30
console.log(obj1.sum(10, 20, 30));   // 60