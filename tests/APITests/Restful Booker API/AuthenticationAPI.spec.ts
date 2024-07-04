import {test,expect} from '@playwright/test'

let payload = {
    "firstname" : "Playwright",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Dinner"
}
let tokenValue: string

test.beforeAll('Create token',(async({request}) => {
    const response = await request.post('https://restful-booker.herokuapp.com/auth',{
        headers:{
            'Content-Type':'application/json'
        },
        data:{
            "username" : "admin",
            "password" : "password123"
        }    
    })
    console.log(await response.json())
    const tokenResponse = await response.json()
    console.log(tokenResponse.token)
    tokenValue = tokenResponse.token
}))
test('Authentication API using API key',async({request}) => {
    const response = await request.put('https://restful-booker.herokuapp.com/booking/1',{
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':'Basic YWRtaW46cGFzc3dvcmQxMjM='
        },
        data:payload
    })
    expect(response.status()).toBe(200)
})

test('Create Token',async({request}) => {
    //Update booking using the above token 
    const updateResponse = await request.put('https://restful-booker.herokuapp.com/booking/1',{
        headers:{
            'Content-Type':'application/json',
            'Cookie':'token=' + tokenValue
        },
        data:payload
    })
    expect(updateResponse.status()).toBe(200)
    const jsonResponse = await updateResponse.json()
    expect(jsonResponse.firstname).toEqual('Playwright')
})