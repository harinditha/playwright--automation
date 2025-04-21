// @ts-check
const { test, expect } = require('@playwright/test');
const loginPage = require('../pageObjects/LoginPage');
//const homePage = require('../pageObjects/homePage');

test('Successfull Login', async ({ page }) => {

    const LoginPage = new loginPage();
    //const HomePage = new homePage();

   const url = 'https://rahulshettyacademy.com/client/auth/login';
    const email = 'player_wrighter@gmail.com';
    const password = 'Player123@';

    await page.goto(url);
    await LoginPage.successLoginPageNavigation();
    await LoginPage.UserLogin(email, password);
    //await HomePage.SuccessLoginVerification();


});
