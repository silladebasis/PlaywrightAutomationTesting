import {expect, test} from '@playwright/test'

test.describe('Login App Tests',async() => {
    //test.skip() - skips the entire tests inside describe block
    //test.skip(({ browserName }) => browserName === 'chromium')
    test('Title verification',async({page}) => {
        await page.goto('https://www.saucedemo.com/')
        await expect(page).toHaveTitle('Swag Labs')
    })
    
    test('Login verification',{tag:"@Login"},async({page}) => {
        //test.slow()
        await page.goto('https://www.saucedemo.com/')
        await page.locator('//input[@data-test="username"]').fill('standard_user')
        await page.locator('//input[@data-test="password"]').fill('secret_sauce')
        await page.locator('//*[@data-test="login-button"]').click()
        await expect(page.locator('.shopping_cart_link')).toBeVisible()
    })
    
    test('Invalid Login',{tag:"@InvalidLogin"},async({page}) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator('//input[@data-test="username"]').fill('standard_user1')
        await page.locator('//input[@data-test="password"]').fill('secret_sauce')
        await page.locator('//*[@data-test="login-button"]').click()
        await expect(page.locator('.shopping_cart_link')).toBeVisible()
    })

    test.only('Orange hrm login test',{tag:"@E2E"},async({page}) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // await page.getByPlaceholder('Username').fill('Admin')
        // await page.getByPlaceholder('Password').fill('admin123')
        // await page.getByRole('button', { name: 'Login' }).click()
        await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible()
        await page.waitForLoadState('networkidle')
        await expect(page.locator('div[title="Timesheets"] p')).toHaveText('Timesheets')
    })
})
