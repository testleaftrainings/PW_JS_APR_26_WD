
class Employee{

    empName :string ='Hari' //property of the class used to store data

    payroll(){// method are actionables
        console.log(`Employee payroll process of ${this.empName}`);
        // this keyword refers to current instance of the class
    }
}

const emp = new Employee()

emp.payroll()



//methods with parameter

export class Employee1{

    empName1 = 'Yuva'// hard coding the values in global variable
    empId1 = 'Emp123'

    empDetails(empName:string,empId:string){
        console.log(`Employee Name is ${empName} id is ${empId}` );
        console.log(`Employee name ${this.empName1}`);
        
        }

}

// const emp1 = new Employee1()
// emp1.empDetails('yuvarani','Emp234')
// console.log(emp1.empName1);
// console.log(emp1.empId1);

