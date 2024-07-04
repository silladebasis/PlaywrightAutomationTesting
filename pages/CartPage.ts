import { Locator, Page } from "@playwright/test";

class CartPage{
    readonly page:Page
    readonly checkOutButton : Locator
    constructor(page:Page){
        this.page = page
        this.checkOutButton = page.getByRole('button',{name:'Checkout'})
    }

    async clickOnCheckout(){
        await this.checkOutButton.click()
    }
}

export default CartPage