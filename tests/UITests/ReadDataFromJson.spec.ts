import {test,expect} from '@playwright/test'
import data from '../../testData/data.json'
import loginData from '../../testData/logindata.json'

test.beforeEach(async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill(loginData.username)
    await page.getByPlaceholder('Password').fill(loginData.password)
    await page.getByRole('button', { name: 'Login' }).click()
    await page.waitForLoadState('networkidle')
    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible()
})

test('Verify timesheet card navigation on dashboard page',async({page}) => {
    await expect(page.locator('#app')).toContainText('Quick Launch')
    await expect(page.getByRole('button',{name:'Timesheets'})).toBeVisible()
    await page.getByRole('link',{name:'Time'}).click()
    await expect(page.getByLabel('Topbar menu').getByRole('list')).toContainText('Timesheets')
})

data.forEach((testData) => {
    test.only(`Add Candidates for Recruitment ${testData.id}`, async({page}) => {
        await page.getByText('Recruitment').click()
        await page.getByText('Add').click()
        await expect(page.getByRole('heading',{name:'Add Candidate'})).toHaveText('Add Candidate')
        await page.getByPlaceholder('First Name').fill(testData.firstname)
        await page.getByPlaceholder('Last Name').fill(testData.lastname)
        await page.getByPlaceholder('Type here').first().fill(testData.email)
        await page.getByText('Save').click()
        await expect(page.getByText('Application Stage')).toBeVisible()
    })
})



// for(const testData of data){
//     test(`Add Candidates for Recruitment ${testData.id}`, async({page}) => {
//         await page.getByText('Recruitment').click()
//         await page.getByText('Add').click()
//         await expect(page.getByRole('heading',{name:'Add Candidate'})).toHaveText('Add Candidate')
//         await page.getByPlaceholder('First Name').fill(testData.firstname)
//         await page.getByPlaceholder('Last Name').fill(testData.lastname)
//         await page.getByPlaceholder('Type here').first().fill(testData.email)
//         //await page.getByText('Save').click()
//         //await expect(page.getByText('Application Stage')).toBeVisible()
//     })
// }
