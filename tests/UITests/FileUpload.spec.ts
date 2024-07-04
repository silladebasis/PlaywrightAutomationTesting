import {test} from '@playwright/test'

test('Practice file upload',async({page}) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    //single file upload
    await page.locator('input[type="file"]').setInputFiles('fileUpload/linkedin-icon.png')
    //multiple files upload
    await page.locator('input[type="file"]').setInputFiles(['fileUpload/linkedin-icon.png','fileUpload/sample.pdf'])
    //to remove or delete the files
    await page.locator('input[type="file"]').setInputFiles([])
})

test('File upload without input tag',async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload')
    const fileUploadPromise = page.waitForEvent('filechooser')
    await page.locator('#drag-drop-upload').click()
    const fileChooser = await fileUploadPromise
    await fileChooser.setFiles('fileUpload/sample.pdf')
})