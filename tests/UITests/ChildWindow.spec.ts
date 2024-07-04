import {test} from '@playwright/test'

test('Handle New Page',{tag:['@SMOKE', '@SANITY']},async({context}) => {
    const page = await context.newPage()
    await page.goto('https://letcode.in/windows')
    const newTab = context.waitForEvent('page')
    await page.getByText('Open Home Page').click()
    const newOpenedTab = await newTab
    await newOpenedTab.waitForLoadState('networkidle')
    console.log(await newOpenedTab.title())    
})