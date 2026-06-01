import { RBIPolicy, RBIRegulations } from "./interface";


abstract class Basebank implements RBIRegulations,RBIPolicy{
    
    auditTrnx(): void {
        console.log('Auditing all the accounts');
        
    }

    openAccount(): void {
        console.log('open account for 1000 application');
        
    }
    interestRatePolicy(): number {
        return 5
    }

    withDrawAmount(): void {
        console.log('amount can be withdraw');
        
    }
    abstract withDrawMoney1():void
    abstract interestRatePolicy1():void

    activateDebitCard(): void {
        console.log('Activate your debit card');
        
    }

}

export class SBIBank extends Basebank{


    withDrawMoney1(): void {
        console.log('withdrawal limit is 1000');
        
    }

    interestRatePolicy1(): void {
        console.log('7 precent interest rate');
        
    }
    depositeMoney(){
        console.log('money deposited limit 10000');
        
    }


}

class HDFC extends Basebank{
    interestRatePolicy1(): void {
        console.log('interest rate is 5 precent');
        
    }

    withDrawMoney1(): void {
        console.log("money withdraw limit is 20000");
        
    }

    depositeMoney(){
        console.log('money deposited limit is 50000');
        
    }
}

class Axis extends Basebank{

    withDrawMoney1(): void {
        console.log('money withdraw limit is 5000');
        
    }

    interestRatePolicy1(): void {
        console.log('interest rate is 7.5 precent');
        
    }
}

// inteface can have only rules unimplemented method
//abstract class can have both implemented as well as unimplemented methods
//class can have only implemented methods
//cant create object for abstract and interface