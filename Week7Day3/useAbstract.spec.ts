import test from "@playwright/test";
import { SBIBank } from "./abstract";

test('implementation of SBI',async({})=>{
    const bank = new SBIBank()

    bank.auditTrnx()
    bank.depositeMoney()
    bank.interestRatePolicy()
    bank.interestRatePolicy1()
    bank.openAccount()
    bank.withDrawAmount()
    bank.withDrawMoney1()
})