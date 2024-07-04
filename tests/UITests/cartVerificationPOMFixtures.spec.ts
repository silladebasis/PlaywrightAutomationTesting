import {expect} from '@playwright/test'
import {test} from '../../fixtures/PageFixtures'

test('Verification of cart using fixtures',async({page,loginPage,homePage,cartPage,checkoutPage}) => {
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

test('Verification of cart using fixtures - Hooks',async({page,homePage,cartPage,checkoutPage,loginFixture,logoutFixture}) => {
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