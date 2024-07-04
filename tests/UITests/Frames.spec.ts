import {test} from '@playwright/test'

test('Frames Handles Demo - With Name',async({page}) => {
    await page.goto('https://letcode.in/frame')
    const frameName = await page.frame('firstFr') 
    await frameName?.getByPlaceholder('Enter name').fill('Debasis')
    await frameName?.getByPlaceholder('Enter email').fill('debasis@rediff.com')
})

test('Frames Handles Demo - With URL',async({page}) => {
    await page.goto('https://letcode.in/frame')
    const frameName = page.frame({url:'https://letcode.in/frameUI'}) 
    await frameName?.getByPlaceholder('Enter name').fill('Debasis')
    await frameName?.getByPlaceholder('Enter email').fill('debasis@rediff.com')

    const frame2 = page.frame({url:'https://letcode.in/innerFrame'})
    await frame2?.getByPlaceholder('Enter email').fill('debasis@gmail.com')
})

test('Frames Handles Demo - With Framelocator',async({page}) => {
    await page.goto('https://letcode.in/frame')
    const frameName = page.frameLocator('#firstFr') 
    await frameName?.getByPlaceholder('Enter name').fill('Debasis')
    await frameName?.getByPlaceholder('Enter email').fill('debasis@rediff.com')
})