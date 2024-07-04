import {test,request, expect, APIRequestContext} from '@playwright/test'

let reqContext2: APIRequestContext;

test.beforeAll(async() => {
    reqContext2 = await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{
            Accept:"application/json"
        }
    })
})

test('Get All Booking IDs',async({request}) => {
    const response = await request.get('https://restful-booker.herokuapp.com/booking',{
        headers:{Accept:"application/json"}
    })
    console.log(await response.json())
})

test('Get All Booking IDs 3',async({}) => {
    // const reqContext = await request.newContext({
    //     baseURL:"https://restful-booker.herokuapp.com"
    // })
    const response = await reqContext2.get('/booking')
    console.log(await response.json())
})

test('Get Specific Booking',async({request}) => {
    const response = await request.get('https://restful-booker.herokuapp.com/booking/58',{
        headers:{Accept:"application/json"}
    })
    console.log(await response.json())
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    expect(await response.json()).toMatchObject({
        firstname: 'Josh',
        lastname: 'Allen',
        totalprice: 111,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'super bowls'
      })
      const jsonResponse = await response.json()
      expect(await jsonResponse.firstname).toEqual('Josh')
})

test('Get Specific Booking based on query parameters',async({request}) => {
    const response = await request.get('https://restful-booker.herokuapp.com/booking',{
        headers:{Accept:"application/json"},
        params:{
            firstname:'John',
            lastname:'Smith'
        }
    })
    console.log(await response.json())
})

test('Fetch and validate Response Header',async({request}) => {
    const response = await request.get('https://restful-booker.herokuapp.com/booking/1',{
        headers:{
            'Accept':'application/json'
        }
    })
    const headersResponse = response.headers()
    console.log(headersResponse)
    expect(headersResponse.server).toEqual('Cowboy')
    expect(headersResponse['content-type']).toContain('application/json')

    //headersArray method
    const headersArrayResponse = response.headersArray()
    console.log('====================================================')
    //console.log(headersArrayResponse)
    //expect(headersArrayResponse.length).toBe(11)
    headersArrayResponse.forEach((header) => {
        console.log(header.name + ":" + header.value)
    })
})