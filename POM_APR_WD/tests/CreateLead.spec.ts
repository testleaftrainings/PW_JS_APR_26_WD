import test from "@playwright/test";
import { CreateLeadPage } from "../Pages/05-createLeadPage";
import { ViewLeadPage } from "../Pages/06-ViewLeadPage";

test('Create lead using POM',async({page})=>{

    //const CLP = new CreateLeadPage(page)
    const vl = new ViewLeadPage(page)
    await vl.LoadUrl('https://leaftaps.com/opentaps/control/login')
    await vl.EnterCredentials('demoCSR2','crmsfa')
    await vl.clickOnLogin()
    await vl.clickOnCRMSFA()
    await vl.ClickOnLeads()
    await vl.ClickOnCreateLead()
    await vl.EnterMandatoryField()
    await vl.ClickonCreateLeadButton()
    await vl.verifyLead()
})