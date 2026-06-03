import {test as baseTest} from '@playwright/test'
import { LoginPage } from '../Pages/01-LoginPage'
import { welcomePage } from '../Pages/02-WelcomePage'
import { HomePage } from '../Pages/03-HomePage'
import{LeadPage} from '../Pages/04-leadPage'
import { CreateLeadPage } from '../Pages/05-createLeadPage'
import { ViewLeadPage } from '../Pages/06-ViewLeadPage'


type myFixture = {
    loginfix:LoginPage
    welfix:welcomePage
    homfix:HomePage
    leadfix:LeadPage
crleadfix:CreateLeadPage
vpfix:ViewLeadPage

}

//test1 is the new test runner instead of test
//const test1 ={existing test feature }=>page fixture+ extra 
// feature(creation of object)=>object fixture

 export const test1 = baseTest.extend<myFixture>({
    //fixtre function
//key:value
    loginfix:async({page},use)=>{
        const lp = new LoginPage(page)
        await use(lp)
        //here thi use() tell take this object and give it to the test case
    },
    welfix:async({page},use)=>{
        const wp = new welcomePage(page)
        await use(wp)
    },
    homfix:async({page},use)=>{
        const hp = new HomePage(page)
        await use(hp)
    },
    leadfix:async({page},use)=>{
        const leadp= new LeadPage(page)
        await use(leadp)
    },
    crleadfix:async({page},use)=>{
        const clp = new CreateLeadPage(page)
        await use(clp)
    },
    vpfix:async({page},use)=>{
        const vp = new ViewLeadPage(page)
        await use(vp)
    }

})