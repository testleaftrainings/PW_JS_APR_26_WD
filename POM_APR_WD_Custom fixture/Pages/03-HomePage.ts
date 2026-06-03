import { welcomePage } from "./02-WelcomePage";

export class HomePage extends welcomePage{

    async ClickOnLeads(){
        await this.lpage.locator("//a[text()='Leads']").click()
    }

    async ClickOnContacts(){
        await this.lpage.locator("//a[text()='Contacts']").click()
    }
    async ClickOnAccounts(){
        await this.lpage.locator("//a[text()='Accounts']").click()
    }
}