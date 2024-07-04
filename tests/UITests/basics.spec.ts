import {expect, test} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('https://practice.sdetunicorns.com/my-account/')
})

test('Login and Logout Test',async({page}) => {
    await page.locator('#username').fill('debasis@rediff.com')
    await page.locator('#password').fill('PracticePass1!')
    await page.getByRole('button',{name:'Log in'}).click()
    //await page.locator('nav.woocommerce-MyAccount-navigation ul li').filter({hasText:'Account details'}).click()
    //await page.locator('text="Account details"').click()
    
    await page.getByRole('listitem').filter({hasText:'Account details'}).click()
    await expect(page).toHaveURL(/.*edit-account/)
    await expect(page).toHaveTitle('My account – Practice E-Commerce Site')
    expect(await page.title()).toEqual('My account – Practice E-Commerce Site')
    await page.locator('li[class*="logout"]').click()
})

