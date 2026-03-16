
class Abstractclass{

  method()
  {
    throw new Error("Must implement")
  }
}

class concreteclass extends Abstractclass
{
  // method()
  // {
  //   console.log("Hello all")
  // }
  

}

let obj =new concreteclass()
// obj.method();