import test, { expect } from "@playwright/test";

let token = 'YWRtaW46VDNSRUF2OGdAbG9A'

let id:any

/* let username = 'admin'
let password = 'T3REAv8g@lo@'
let login = `${username}:${password}`
let value = btoa(login)
console.log(value); */
test.describe.serial('run in serial mode',()=>{


test('create incident using playwright with API',async({request})=>{

    let response = await request.post('https://dev304842.service-now.com/api/now/table/incident',
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Basic ${token}`
            },
            data:{
                "short_description": "Network issue created through Playwright"
            }
        }
    )
    let resp1 = await response.json()
    console.log(resp1);

    let status = response.status()
    console.log(status);

    expect(status).toBe(201)
console.log(response.statusText());

    expect(response.statusText()).toBe('Created')   

    id = resp1.result.sys_id
console.log(id);

})

test('fetch incident using playwright API',async({request})=>{
    let fetchResponse = await request.get(`https://dev304842.service-now.com/api/now/table/incident/${id}`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Basic ${token}`
            }
        }
    )

    let resp2 = await fetchResponse.json()
    console.log(resp2);
    expect(fetchResponse.status()).toBe(200)
    expect(fetchResponse.statusText()).toBe('OK')
    console.log(fetchResponse.status());
    console.log(fetchResponse.statusText());
    

})
test('Update incident using playwright API',async({request})=>{
    let patchResponse = await request.patch(`https://dev304842.service-now.com/api/now/table/incident/${id}`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Basic ${token}`
            },
            data:{
                "short_description": "Network issue updated through Playwright with API"
            }
        }
    )
    let resp3 = await patchResponse.json()
    console.log(resp3);

    console.log(patchResponse.status());
    console.log(patchResponse.statusText());
    
    expect(patchResponse.status()).toBe(200)
expect(patchResponse.statusText()).toBe('OK')    
})
test('Delete incident using playwright API',async({request})=>{
    let deleteResponse = await request.delete(`https://dev304842.service-now.com/api/now/table/incident/${id}`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Basic ${token}`
            }
            
        }
    )

    console.log(deleteResponse.status());
    console.log(deleteResponse.statusText());

    expect(deleteResponse.status()).toBe(204)
    expect(deleteResponse.statusText()).toBe('No Content')
    
    
})


})