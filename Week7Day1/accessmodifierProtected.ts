import { EmployeeSingnUp } from "./accessmodifier";


class HR extends EmployeeSingnUp{
    dep:string

    constructor(){
        super()
        this.dep ='QA'
    }

    empUpdate(){
        console.log(this.ePhno, this.dep);
        
    }
}
const hr = new HR()
//hr.printDetails()
hr.empUpdate()