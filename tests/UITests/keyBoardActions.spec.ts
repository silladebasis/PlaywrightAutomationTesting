import {test} from '@playwright/test'

test('Keyboard Actions in Playwright',async({page}) => {
    await page.goto('https://letcode.in/edit')
    const getMe = page.locator('#getMe')
    await getMe.press('Control+a')
    await getMe.press('Backspace')
    await getMe.press("A+B+C")
    await getMe.press('Control+a+x')
    await page.locator('#fullName').press('Control+v')
    await page.keyboard.press('Tab')
    //await page.keyboard.press('Delete')
    await page.locator('#join').press('Delete')
})