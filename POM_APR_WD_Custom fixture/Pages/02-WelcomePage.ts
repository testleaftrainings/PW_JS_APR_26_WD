import { LoginPage } from "./01-LoginPage";

export class welcomePage extends LoginPage{

    async clickOnCRMSFA(){
        await this.lpage.locator('//div[@id="label"]').click()

    }
    async clickOnLogout(){
        await this.lpage.locator('.decorativeSubmit').click()
    }
}