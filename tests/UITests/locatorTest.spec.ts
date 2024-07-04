import test, { expect } from '@playwright/test'

test.only('Locators practice using xpath',async({page,browserName}) => {
    test.skip(browserName === 'chromium')
    await page.goto('https://www.saucedemo.com/')
    await page.locator('//input[@data-test="username"]').fill('standard_user')
    await page.locator('//input[@data-test="password"]').fill('secret_sauce')
    await page.locator('//*[@data-test="login-button"]').click()

    //Get products total count
    const count = await page.locator('.inventory_list .inventory_item').count()
    console.log('Total product count is : ' +count)
    expect(count).toEqual(6)

    const productText = await page.locator('.inventory_item .inventory_item_name ').allInnerTexts()
    console.log('Product Text are : ' + productText)
    await page.locator('text=Sauce Labs Backpack').click()
    await page.locator('id=add-to-cart').click()
})

test('Get all product texts',async({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('//input[@data-test="username"]').pressSequentially('standard_user')
    await page.locator('//input[@data-test="password"]').fill('secret_sauce')
    await page.locator('//*[@data-test="login-button"]').click()

    //Get products total count
    await expect(page.getByRole('listitem')).toHaveCount(6)
})

test('Practice locators with options',async({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('.form_group',{has:page.locator('id=user-name')}).click()
    await page.locator('.form_group',{has:page.locator('id=user-name')}).pressSequentially('standard_user')
    await page.locator('.form_group',{has:page.locator('id=password')}).click()
    await page.locator('.form_group',{has:page.locator('id=password')}).pressSequentially('secret_sauce')
    await page.locator('//*[@data-test="login-button"]').click()

    //await page.locator('//a',{hasText:'Sauce Labs Backpack'}).click()
    await page.locator('.inventory_item_name ',{hasNotText:/Sauce.*/}).click()
})


test('ARIA Locators',async({page}) => {
    await page.goto('https://demo.nopcommerce.com/login')
    await page.getByLabel('Email').fill('debasis@rediff.com')
    await page.getByLabel('Password:').fill('test@1234')
    //await page.getByRole('button',{name:'Log in'}).click()

    console.log(await page.getByText('New Customer').textContent())
    await page.getByPlaceholder('Search store').fill('Computers')
    await page.getByAltText('nopCommerce demo store').click()

    const getByTitleText = page.getByTitle('Show products in category Electronics')
    console.log(await getByTitleText.first().textContent())

    await page.getByRole('link',{name:'Register'}).click()
    await page.getByRole('button',{name:'Register'}).click()

    await page.goto('https://www.saucedemo.com/')
    await page.getByTestId('username').fill('standard_user')
    await page.getByTestId('password').fill('secret_sauce')
})