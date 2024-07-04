import {expect, test} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('//input[@data-test="username"]').fill('standard_user')
    await page.locator('//input[@data-test="password"]').fill('secret_sauce')
    await page.locator('//*[@data-test="login-button"]').click()
})

test('Add item to carts @UI',async({page}) => {
    await page.getByText('Sauce Labs Backpack').click()
    await page.getByRole('button',{name:'Add to cart'}).click()
    await page.locator('.shopping_cart_link').click()
    await expect(page.getByRole('link',{name:'Sauce Labs Backpack'})).toHaveText('Sauce Labs Backpack')
    await page.locator('#remove-sauce-labs-backpack').click()
    await expect(page.getByRole('link',{name:'Sauce Labs Backpack'})).not.toBeVisible()
})

test.only('Add item to carts',{tag:"@UI"},async({page}) => {
    await page.getByText('Sauce Labs Backpack').click()
    await page.getByRole('button',{name:'Add to cart'}).click()
    await page.locator('.shopping_cart_link').click()
    await expect(page.getByRole('link',{name:'Sauce Labs Backpack'})).toHaveText('Sauce Labs Backpack')
    await page.locator('#remove-sauce-labs-backpack').click()
    await expect(page.getByRole('link',{name:'Sauce Labs Backpack'})).not.toBeVisible()
})