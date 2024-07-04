import {test} from '@playwright/test'

test('Handle select dropdown with value and visible text',async({page}) => {
    await page.goto('https://vins-udemy.s3.amazonaws.com/sb/visa/udemy-visa.html')
    await page.getByText('From Country').selectOption('Argentina')
    await page.getByText('From Country').selectOption('India')
    await page.getByText('From Country').selectOption('Belgium')

    await page.getByText('To Country').selectOption('Japan')

    //using key and value
    await page.getByText('To Country').selectOption({value:'Canada'})

    //using index
    await page.getByText('To Country').selectOption({index:15})
})

test('Multi-select dropdown',async({page}) => {
    await page.goto('https://demoqa.com/select-menu')
    //await page.locator('#cars').selectOption('Opel')

    await page.locator('#cars').selectOption(['Volvo','Audi'])
})

test('Get All country dropdown values',async({page}) => {
    await page.goto('https://vins-udemy.s3.amazonaws.com/sb/visa/udemy-visa.html')
    //const allOptions = page.locator('#input_46 option')
    const allOptions = await page.$$('#input_46 option')
    console.log(allOptions.length)
    
    for(const country of allOptions){
        const textCountry = await country.textContent()
        console.log(textCountry)
        if(textCountry === " India "){
            await page.selectOption('#input_46',{value:'India'})
            //await page.getByText('From Country').selectOption('India')
            break;
        }
        
    }
})