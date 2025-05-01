// @ts-check
const { test, expect } = require('@playwright/test');
const {POManager} = require('../pageObjects/POManager');
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")));

test('Successfull Login', async ({ page }) => {

    const pom = new POManager(page);

    const LoginPage = pom.getLoginPage();
    const HomePage = pom.getHomePage();

    await LoginPage.goto(dataset.url);
    await LoginPage.successLoginPageNavigation();
    await LoginPage.UserLogin(dataset.email,dataset.password);
    await HomePage.SuccessLoginVerification();


});
