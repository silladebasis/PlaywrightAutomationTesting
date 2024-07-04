import {expect, test} from '@playwright/test'

test('Verify API with UI Verification',async({request}) => {
    let payload = {"id":"0ff24442-4153-ccee-a6d3-227047761a52","cookie":"user=a906bafe-eac1-1c2d-c72d-49896ac4f541","prod_id":2,"flag":false}
    const response = await request.post('https://api.demoblaze.com/addtocart',{data:payload})
    expect(response.status()).toBe(200)
})