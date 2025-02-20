// @ts-check
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pageObjects/LoginPage');
const loginPage = require('../pageObjects/LoginPage');

test('Successfull Login', async ({ page }) => {

    const loginPage = new LoginPage();

    await loginPage.goToURL();
    await page.locator('.login-title').isVisible();
    expect(page.locator('.login-title')).toBeVisible();

    const email = page.locator('#userEmail');
    const pword = page.locator('#userPassword');
    const loginBtn = page.locator('#login');

    await email.fill('player_wrighter@gmail.com');
    await pword.fill('Player123@');
    await loginBtn.click();

    await page.waitForLoadState('domcontentloaded');
    const a = await page.locator('.card-body b').nth(0);
    const productName = await a.textContent();
    console.log(productName);





});
