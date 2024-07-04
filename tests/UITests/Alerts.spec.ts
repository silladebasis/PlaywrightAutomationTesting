import {expect, test} from '@playwright/test'

test('Handle Alert - Dialog pop up',async({page}) => {
    await page.goto('https://letcode.in/alert')

    page.on('dialog',dialog => {
        expect(dialog.type()).toEqual('alert')
        expect(dialog.message()).toEqual('Hey! Welcome to LetCode')
        console.log(dialog.message())
        dialog.accept()
    })
    await page.getByRole('button',{name:'Simple Alert'}).click()
    await page.getByText('Confirm Alert').click()
})

test('Handle Alert - Confirm dialog',async({page}) => {
    await page.goto('https://letcode.in/alert')

    page.on('dialog',dialog => {
        console.log(dialog.type())
        expect(dialog.type()).toEqual('confirm')
        expect(dialog.message()).toEqual('Are you happy with LetCode?')
        console.log(dialog.message())
        dialog.accept()
    })
    await page.getByText('Confirm Alert').click()
})

test('Handle Alert - Prompt dialog',async({page}) => {
    await page.goto('https://letcode.in/alert')

    page.on('dialog',dialog => {
        console.log(dialog.type())
        expect(dialog.type()).toEqual('prompt')
        dialog.accept("I am prompt alert")
    })
    await page.locator('#prompt').click()
    await expect(page.locator('#myName')).toBeVisible()
})