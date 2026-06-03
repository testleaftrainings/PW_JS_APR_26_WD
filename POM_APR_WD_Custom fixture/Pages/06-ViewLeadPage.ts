import { CreateLeadPage } from "./05-createLeadPage";

export class ViewLeadPage extends CreateLeadPage{

    async verifyLead(){
        let FName= await this.lpage.locator('[id="viewLead_firstName_sp"]').innerText()
    console.log(FName);
    
    }
}