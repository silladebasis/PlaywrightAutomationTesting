import {test as baseTest} from '@playwright/test'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'

type POMFixture = {
    loginPage : LoginPage
    homePage : HomePage
    cartPage : CartPage
    checkoutPage :CheckoutPage
    loginFixture : any
    logoutFixture : any
}

export const test = baseTest.extend<POMFixture>({
    loginPage : async({page},use) => {
        const loginPage = new LoginPage(page)
        await use(loginPage)
    },
    homePage : async({page},use) => {
        const homePage = new HomePage(page)
        await use(homePage)
    },
    cartPage : async({page},use) => {
        const cartPage = new CartPage(page)
        await use(cartPage)
    },
    checkoutPage : async({page},use) => {
        const checkoutPage = new CheckoutPage(page)
        await use(checkoutPage)
    },
    loginFixture : async({page},use) => {
        const loginFixture = undefined
        await page.goto('https://www.saucedemo.com/')
        await page.locator('//input[@data-test="username"]').fill('standard_user')
        await page.locator('//input[@data-test="password"]').fill('secret_sauce')
        await page.locator('//*[@data-test="login-button"]').click()
        await use(loginFixture)
    },
    logoutFixture : async({page},use) => {
        const logoutFixture = undefined
        await page.getByRole('button',{name:'Open Menu'}).click()
        await page.getByRole('link',{name:'Logout'}).click()
        await use(logoutFixture)
    }
})