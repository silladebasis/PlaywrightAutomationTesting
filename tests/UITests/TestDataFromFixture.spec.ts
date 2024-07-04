import {test} from '../../fixtures/TestDataFixture'
import {expect} from '@playwright/test'

test.beforeEach(async({page,loginData}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill(loginData.username)
    await page.getByPlaceholder('Password').fill(loginData.password)
    await page.getByRole('button', { name: 'Login' }).click()
    await page.waitForLoadState('networkidle')
    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible()
})

test('Add Candidates for Recruitment', async({page,testData}) => {
    await page.getByText('Recruitment').click()
    await page.getByText('Add').click()
    await expect(page.getByRole('heading',{name:'Add Candidate'})).toHaveText('Add Candidate')
    await page.getByPlaceholder('First Name').fill(testData[0].firstName)
    await page.getByPlaceholder('Last Name').fill(testData[0].lastName)
    await page.getByPlaceholder('Type here').first().fill(testData[0].email)
    await page.getByText('Save').click()
    await expect(page.getByText('Application Stage')).toBeVisible()
})