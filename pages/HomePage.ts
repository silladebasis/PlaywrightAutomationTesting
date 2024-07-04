import { Locator, Page } from "@playwright/test";

class HomePage{
    readonly page:Page
    readonly homePageHeading : Locator
    readonly addToCartButton : Locator
    readonly removeButton : Locator
    readonly cartLink : Locator
    constructor(page:Page){
        this.page = page
        this.homePageHeading = page.getByText('Swag Labs')
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.cartLink = page.locator('.shopping_cart_link')
    }

    async clickOnAddToCart(){
        await this.addToCartButton.click()
    }

    async navigateToCart(){
        await this.cartLink.click()
    }
}

export default HomePage