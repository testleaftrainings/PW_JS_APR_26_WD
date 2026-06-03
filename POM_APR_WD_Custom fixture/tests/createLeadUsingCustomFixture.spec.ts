import { test1 } from "../Utility/customFixture";
import dotenv from 'dotenv'

dotenv.config({path:'data/prod.env'})

test1('create lead',async({vpfix})=>{

    await vpfix.LoadUrl(process.env.L_url as string)
    await vpfix.EnterCredentials(process.env.L_userName as string,process.env.L_password as string)
    await vpfix.clickOnLogin()
    await vpfix.clickOnCRMSFA()
    await vpfix.ClickOnLeads()
    await vpfix.ClickOnCreateLead()
    await vpfix.EnterMandatoryField()
    await vpfix.ClickonCreateLeadButton()
    await vpfix.verifyLead()

})