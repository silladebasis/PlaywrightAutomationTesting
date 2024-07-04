import {test} from '@playwright/test'

test('Mouse Hover Test',async({page}) => {
    await page.goto('https://demo.opencart.com/')
    await page.getByRole('link',{name:'Components'}).hover()
    await page.getByRole('link',{name:'Show All Components'}).click()
})