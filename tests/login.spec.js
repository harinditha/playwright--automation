// @ts-check
const { test, expect } = require('@playwright/test');
const {POManager} = require('../pageObjects/POManager');

test('Successfull Login', async ({ page }) => {

    const pom = new POManager(page);

    const LoginPage = pom.getLoginPage();
    const HomePage = pom.getHomePage();

    const email = 'player_wrighter@gmail.com';
    const password = 'Player123@';


    await LoginPage.goto();
    await LoginPage.successLoginPageNavigation();
    await LoginPage.UserLogin(email, password);
    await HomePage.SuccessLoginVerification();


});
