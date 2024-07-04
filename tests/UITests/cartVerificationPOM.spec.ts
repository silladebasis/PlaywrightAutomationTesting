import {expect, test} from '@playwright/test'
import LoginPage from '../../pages/LoginPage'
import HomePage from '../../pages/HomePage'
import CartPage from '../../pages/CartPage'
import CheckoutPage from '../../pages/CheckoutPage'

test('Verification of cart',async({page}) => {
    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)
    const cartPage = new CartPage(page)
    const checkoutPage = new CheckoutPage(page)
    await loginPage.openApplication()
    await loginPage.loginToApp('standard_user','secret_sauce')
    await expect(homePage.homePageHeading).toHaveText('Swag Labs')
    await homePage.clickOnAddToCart()
    await expect(homePage.removeButton).toBeVisible()
    await expect(homePage.cartLink).toHaveText('1')
    await homePage.navigateToCart()
    await expect(cartPage.checkOutButton).toBeVisible()
    await cartPage.clickOnCheckout();
    await (await checkoutPage.enterCheckOutInfo("Debasis", "Patro", "292901")).clickOnContinue()
    //await checkoutPage.clickOnContinue()
})