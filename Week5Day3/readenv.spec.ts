import test from "@playwright/test";
import dotenv from 'dotenv'

//to read single env file
//dotenv.config({path:'Utils/qa.env'})

// to read multiple env file
let fileName = process.env.envFileName || "prod"
//here if i dont set the environment using the command $env:envFileName
//it's set as undefined in that scenario by default "prod" should be taken
dotenv.config({path:`Utils/${fileName}.env`})

test("Learn to read env file",async({page})=>{
    //console.log(process.env);
    await page.goto(process.env.L_url as string)
    await page.locator('#username').fill(process.env.L_userName as string)
    await page.locator('#password').fill(process.env.L_password as string)
    await page.locator('.decorativeSubmit').click()

})

/* 
command to check the environment
$env:envFile
command to set or change the environment
$env:envFile='qa'
command to unset the env
$env:envFile='' */