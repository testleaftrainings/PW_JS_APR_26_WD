import { HomePage } from "./03-HomePage";

export class LeadPage extends HomePage{


    async ClickOnCreateLead(){
        await this.lpage.locator("//a[text()='Create Lead']").click()
    }
}