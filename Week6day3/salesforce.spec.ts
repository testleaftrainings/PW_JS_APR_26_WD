import test, { expect } from "@playwright/test";


let acc_Token: any
let ins_Url: any
let token_Type: any

let leadId: any

test.describe.serial('run in serial mode', () => {


    test('Genarate Token', async ({ request }) => {
        const response = await request.post(`https://login.salesforce.com/services/oauth2/token`,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                form: {
                    "client_id": "3MVG9dAEux2v1sLsRvdqMCBNvwP6WkblcP70V_xpRK5jeueAyURhV5.EcbUmH8rTcnkf0q2Ko.bpsQDul4vOG",
                    "client_secret": "926CE4EE9D6F27F1C1853ACCCAEE9A2902BC98C4848C7B6CEB2B1D936D48A5DD",
                    "grant_type": "password",
                    "username": "yuvarani.sekar@testleaf.com",
                    "password": "Testleaf@2027"
                    //Alt+sft+F
                }
            })
        const TokenResponse = await response.json()
        console.log(TokenResponse);

        acc_Token = TokenResponse.access_token
        ins_Url = TokenResponse.instance_url
        token_Type = TokenResponse.token_type

    })

    test('Create Lead using playwright with API', async ({ request }) => {
        const leadResponse = await request.post(`${ins_Url}/services/data/v65.0/sobjects/Lead`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token_Type} ${acc_Token}`
                },
                data: {
                    "Company": "Tcs",
                    "Salutation": "Mr",
                    "FirstName": "Balaji",
                    "LastName": "Ram"
                }
            })

            let leadResponseBody = await leadResponse.json()
            console.log(leadResponseBody);

            leadId = leadResponseBody.id
            console.log(leadId);

            console.log(leadResponse.status());
            console.log(leadResponse.statusText());
            
            

            expect(leadResponse.status()).toBe(201)
            expect(leadResponse.statusText()).toBe('Created')
            
    })
    test('Fetch Lead using playwright with API', async ({ request }) => {
        const fetchResponse = await request.get(`${ins_Url}/services/data/v65.0/sobjects/Lead/${leadId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token_Type} ${acc_Token}`
                }
            })

            let fetchResponseBody = await fetchResponse.json()
            console.log(fetchResponseBody);

            console.log(fetchResponse.status());
            console.log(fetchResponse.statusText());
            

            expect(fetchResponse.status()).toBe(200)
            expect(fetchResponse.statusText()).toBe('OK')
        })
})