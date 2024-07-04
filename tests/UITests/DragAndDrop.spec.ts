import {test,expect} from '@playwright/test'

test('Drag and Drop test - Approach 1',async({page}) => {
    await page.goto('https://letcode.in/dropable')
    await page.getByText('Drag me to my target').hover()
    await page.mouse.down()
    await page.getByText('Drop here').hover()
    await page.mouse.up()
    await expect(page.getByText('Dropped!')).toHaveText('Dropped!')
})

test('Drag and Drop test - Approach 2',async({page}) => {
    await page.goto('https://letcode.in/dropable')
    await page.getByText('Drag me to my target').dragTo(page.getByText('Drop here'),{
        sourcePosition:{x:0,y:0},
        targetPosition:{x:15,y:30}
    })
    await expect(page.getByText('Dropped!')).toHaveText('Dropped!')
})