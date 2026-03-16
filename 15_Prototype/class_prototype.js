class Employee
{
    constructor(eid,name)
    {
        this.eid=eid;
        this.ename=name
    }
}

Employee.prototype.dept=50000

emp1obj=new Employee(101,"David");
console.log(emp1obj.eid,emp1obj.ename,emp1obj.sal)

emp2obj=new Employee(102,"John");
console.log(emp2obj.eid,emp2obj.ename,emp2obj.sal)


//similar we can also add functions like we added variables in function and class

// example

class Employee
{
    constructor(eid,name)
    {
        this.eid=eid;
        this.ename=name
    }
}

Employee.prototype.sal=50000
Employee.prototype.display=function()
{
console.log(this.eid,this.ename,this.sal)

}
emp1obj=new Employee(101,"David");
emp1obj.display();

emp2obj=new Employee(102,"John");
emp2obj.display();
