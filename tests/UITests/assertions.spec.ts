import  { test,expect } from '@playwright/test'

test('Auto retrying assertions',async({page}) => {
    await page.goto('https://www.saucedemo.com/')

    await expect(page.locator('#user-name')).toBeEditable()
    await expect(page.locator('#login-button')).toHaveCount(1)
    await expect(page.locator('#login-button')).toBeEnabled()
    await expect(page.getByText('Swag Labs')).toHaveText('Swag Labs')
    await expect(page.locator('#login-button')).toHaveAttribute('value','Login')

    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()
    await expect(page.getByTestId('shopping-cart-link')).toBeVisible()
})

test('Non-retrying assertions',async({page}) => {
    
})