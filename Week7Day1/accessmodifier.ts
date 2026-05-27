export class EmployeeSingnUp{

    public eName : string // global public access modifier
    public static eid : string
    protected readonly ePhno : number
    private eSalary : number

    constructor(){
this.eName = 'Yuva'
EmployeeSingnUp.eid ='Emp123'
this.ePhno = 567890
this.eSalary = 98677
    }

    printDetails(){
        console.log(`The Emp details ${this.eName} : ${EmployeeSingnUp.eid}
            : ${this.ePhno} : ${this.eSalary}`);
        
    }

    public get readData():number{ 
        // this block is to read data of a private access modifier property
        //return this.eSalary
        return this.ePhno
        
    }

    public set writeData(newSal:number){
        this.eSalary=newSal
    }
}

// const emp4 = new EmployeeSingnUp()
// emp4.printDetails()
// //console.log(emp4.readData) // esalary = 98677
// emp4.writeData=98756
// //console.log(emp4.readData); // newSalary =98756
// console.log(emp4.readData);


//emp4.writeData()