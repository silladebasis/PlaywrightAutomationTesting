import {test as baseTest} from '@playwright/test'

type HooksFixture = {
    loginlogoutFixture : any
    loginFixure : any
}

export const test = baseTest.extend<HooksFixture>({
    loginlogoutFixture : async({page},use) => {
        const loginlogoutFixture = undefined
        //login
        await page.goto('https://www.saucedemo.com/')
        await page.locator('//input[@data-test="username"]').fill('standard_user')
        await page.locator('//input[@data-test="password"]').fill('secret_sauce')
        await page.locator('//*[@data-test="login-button"]').click()
        await use(loginlogoutFixture)

        //logout
        await page.getByRole('button',{name:'Open Menu'}).click()
        await page.getByRole('link',{name:'Logout'}).click()
    }
    
})