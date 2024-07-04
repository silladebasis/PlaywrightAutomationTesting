import {expect, test} from '@playwright/test'

test('Get All Products',async({request,page}) => {
    const response = await request.get('https://api.demoblaze.com/entries')
    console.log(await response.json())

    const responseJson = await response.json()
    console.log(responseJson.Items[0].title)
    expect(responseJson.Items[0].title).toEqual('Samsung galaxy s6')
    await page.goto('https://www.demoblaze.com/')
    await expect(page.getByRole('link',{name:'Samsung galaxy s6'})).toHaveText(responseJson.Items[0].title)
})