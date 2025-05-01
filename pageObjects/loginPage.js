const{expect} = require ('@playwright/test')
class loginPage {

    constructor(page){

        this.page = page;
        this.email = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        this.loginButton = page.locator('#login');
        this.loginTitle = page.locator('.login-title');
    }

    async goto(url){

        await this.page.goto(url);

    }

    async successLoginPageNavigation(){

        await this.loginTitle.isVisible();
        expect(this.loginTitle).toBeVisible();
    }

    async UserLogin(email,password) {

        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    SuccessLoginVerification(){

    }
}
module.exports = { loginPage };