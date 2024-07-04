import {expect, test} from '@playwright/test'

test('Handle Radio buttons and Checkbox',async({page}) => {
    await page.goto('https://rahulshettyacademy.com/client/auth/register')
    await page.locator('input[value="Male"]').click()

    await page.locator('input[type="checkbox"]').first().check()
    await expect(page.locator('input[type="checkbox"]')).toBeChecked()
})