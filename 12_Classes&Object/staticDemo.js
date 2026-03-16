class staticdemo
{
    static a=10
    b=20;
   static m1()
   {
    console.log(this.a) //undefined
   }
    m2()
    {
        console.log("This is non static method")
    }
}


let s=new staticdemo()
console.log(staticdemo.a);
staticdemo.m1();
// staticdemo.m2()

//directly access static variables and methods
//we can access non static variables and methods
// static method access non-static variables