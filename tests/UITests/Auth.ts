import {test,expect} from '@playwright/test'

test('Login setup',async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible()
    await page.waitForLoadState('networkidle')
    //await expect(page.getByTitle('Timesheets')).toHaveText('Timesheets')
    await page.context().storageState({path:'./playwright/auth/globalSetupAuth.json'})
})