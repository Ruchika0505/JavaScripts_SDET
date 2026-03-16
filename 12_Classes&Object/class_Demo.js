class student
{

    constructor(name,id)
    {
       this.name=name
       this.id=id
    }
    showData()
    {
        console.log(this.name)
        console.log(this.id)
    }
}
let stu=new student("david",102)
console.log(student.rollno)
stu.showData()
