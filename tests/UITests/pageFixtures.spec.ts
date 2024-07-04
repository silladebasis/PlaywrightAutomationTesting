import test, { firefox, webkit } from "@playwright/test"

test.only('Login and Logout Test using browser fixture',async({browser}) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://practice.sdetunicorns.com/my-account/')
    await page.locator('#username').fill('debasis@rediff.com')
    await page.locator('#password').fill('PracticePass1!')
    await page.getByRole('button',{name:'Log in'}).click()
    await page.locator('nav.woocommerce-MyAccount-navigation').filter({hasText:'Account details'}).click()
    await page.locator('li[class*="logout"]').click()
})

test('Login and Logout Test using context fixture',async({}) => {
    const browser = await webkit.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://practice.sdetunicorns.com/my-account/')
    await page.locator('#username').fill('debasis@rediff.com')
    await page.locator('#password').fill('PracticePass1!')
    await page.getByRole('button',{name:'Log in'}).click()
    await page.locator('nav.woocommerce-MyAccount-navigation').filter({hasText:'Account details'}).click()
    await page.locator('li[class*="logout"]').click()
})