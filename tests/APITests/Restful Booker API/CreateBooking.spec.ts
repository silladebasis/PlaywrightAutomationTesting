import {test,request, expect, APIRequestContext} from '@playwright/test'
import apiJson from '../../../testData/apiData.json'
import { json } from 'stream/consumers'
let requestContext: APIRequestContext

test.beforeAll(async() => {
    requestContext = await request.newContext({
        baseURL:'https://restful-booker.herokuapp.com',
        extraHTTPHeaders:{
            'Content-Type':'application/json',
            'Accept':"application/json"
        }
    })
})

test('Create Booking using payload from json file',async({request}) => {
    const response = await request.post('https://restful-booker.herokuapp.com/booking',{
        headers:{
            'Content-Type':'application/json',
            'Accept':"application/json" 
        },
        data:apiJson.postPayload
    })
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    console.log(jsonResponse.booking.bookingdates)
    console.log(apiJson.postPayload.bookingdates)
    expect(response.status()).toBe(200)
    expect(jsonResponse.booking).toMatchObject(apiJson.postPayload)
    expect(jsonResponse.booking.firstname).toEqual('Jim')
    expect(jsonResponse.booking.bookingdates).toMatchObject(apiJson.postPayload.bookingdates)
})

test('Create Booking',async() => {
    let payload = {
        "firstname" : "Jim",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2024-01-01",
            "checkout" : "2045-02-01"
        },
        "additionalneeds" : "Lunch"
    }
    const response = await requestContext.post('/booking',{data:payload})
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    expect(response.status()).toBe(200)
    expect(response.statusText()).toBe('OK')
    expect(jsonResponse.booking).toMatchObject({
        firstname: 'Jim',
        lastname: 'Brown',
        totalprice: 111,
        depositpaid: true,
        bookingdates: { checkin: '2024-01-01', checkout: '2045-02-01' },
        additionalneeds: 'Lunch'
      })
      expect(jsonResponse.booking.additionalneeds).toEqual('Lunch')
})