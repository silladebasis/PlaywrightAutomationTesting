import { Locator, Page } from "@playwright/test";

class LoginPage{

    readonly page : Page
    readonly userNameInput : Locator
    readonly passwordInput : Locator
    readonly loginButton : Locator

    constructor(page : Page){
        this.page = page
        this.userNameInput = page.getByPlaceholder('Username')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.getByText('Login')
    }

    async loginToApp(username:string,pass:string){
        await this.userNameInput.fill(username)
        await this.passwordInput.fill(pass)
        await this.loginButton.click()
    }

    async openApplication(){
        await this.page.goto('https://www.saucedemo.com/')
    }
}

export default LoginPage