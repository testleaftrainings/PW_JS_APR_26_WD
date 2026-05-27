//constructor is a special method

class Employee3{

    payroll(){
        console.log('Employee payroll');
        
    }

    constructor(){
        console.log('This is a special method called default constructor');
        
    }
}

let obj = new Employee3()
obj.payroll()

//parameterized constructor

class Employee4{
    empName : string
    empId : string

    constructor(name:string,id:string){
console.log(`Parameterized constructor ${name} and id ${id}`);
this.empName = "yuvarani"
this.empId = id

// local variable value is assigned to global variable
    }
}

let obj2 = new Employee4('Hari','Emp456')
console.log(obj2.empId);
console.log(obj2.empName);

