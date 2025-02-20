class loginPage {

    constructor(page){

        this.page = page;
        this.email = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        this.loginButton = page.locator('#login');
    }

    async goToURL(url){

        await this.page.goToURL(url);

    }

    async UserLogin(email,password) {

        await this.email.fill();
        await this.password.fill();
        await this.loginButton.click();
    }
}
module.exports = loginPage;