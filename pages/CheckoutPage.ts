import { Locator, Page } from "@playwright/test";

class CheckoutPage{
    readonly page : Page
    readonly firstNameInput : Locator
    readonly lastNameInput : Locator
    readonly postCodeInput : Locator
    readonly continueButton : Locator
    constructor(page:Page){
        this.page = page
        this.firstNameInput = page.locator('#first-name')
        this.lastNameInput = page.locator('#last-name')
        this.postCodeInput = page.locator('#postal-code')
        this.continueButton = page.getByText('Continue')
    }

    async enterCheckOutInfo(firstName:string,lastName:string,zipCode:string){
        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.postCodeInput.fill(zipCode)
        return this
    }

    async clickOnContinue(){
        await this.continueButton.click()
        return this
    }
}

export default CheckoutPage