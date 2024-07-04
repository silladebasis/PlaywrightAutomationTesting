import {test} from '@playwright/test'

test('Press Sequentially tests',async({page}) => {
    await page.goto('https://ultimateqa.com/filling-out-forms/')
    await page.locator('#et_pb_contact_name_0').fill('Debasis')
    await page.locator('#et_pb_contact_message_0').fill('Learn Playwright today')

    await page.goto('https://google.co.in')
    await page.locator('#APjFqb').pressSequentially('Playwright')
    await page.getByText('Google Search').first().press('Enter')
})