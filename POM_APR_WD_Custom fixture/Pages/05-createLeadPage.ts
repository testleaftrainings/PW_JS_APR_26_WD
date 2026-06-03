import { LeadPage } from "./04-leadPage";

export class CreateLeadPage extends LeadPage{

    async EnterMandatoryField(){
        await this.lpage.locator('//input[@id="createLeadForm_companyName"]').fill('Testleaf')
        await this.lpage.locator('//input[@id="createLeadForm_firstName"]').fill('Murali')
        await this.lpage.locator('//input[@id="createLeadForm_lastName"]').fill('Nagaraj')

    }

    async ClickonCreateLeadButton(){
        await this.lpage.locator('//input[@name="submitButton"]').click()
    }
}