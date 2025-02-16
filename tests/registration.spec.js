// // @ts-check
// const { test, expect } = require('@playwright/test');

// async function RegisterPageNavigation(page) {

//   await page.goto('https://rahulshettyacademy.com/client');
//   await page.locator('.login-title').isVisible();
//   expect(page.locator('.login-title')).toBeVisible();

//   await page.locator('.login-wrapper-footer-text').click();
//   const registerText = await page.locator('.login-wrapper-footer-text').textContent();
//   console.log(registerText);
//   expect(page.locator('.login-title')).toContainText('Register');
  
// } 


// test('User Registration', async ({ page }) => {

//   const firstName = page.locator('#firstName');
//   const lastName = page.locator('#lastName');
//   const email = page.locator('#userEmail');
//   const phoneNo = page.locator('#userMobile');
//   const password = page.locator('#userPassword');
//   const confirmPassword = page.locator('#confirmPassword');
//   const ageCheckBox = page.locator('body > app-root > app-register > div.banner > section:nth-child(2) > div > div.login-wrapper.my-auto.p-5 > form > div:nth-child(5) > div.col-md-1 > input');
//   const registerBtn = page.locator('#login');
//   const SuccessMsg = page.locator('.headcolor');

//   await RegisterPageNavigation(page);

//   await firstName.fill('Player');
//   await lastName.fill('Wrighter');
//   await email.fill('player_wrighter@gmail.com');
//   await phoneNo.fill('1234567890');
//   await password.fill('Player123@');
//   await confirmPassword.fill('Player123@');
//   await ageCheckBox.check();

//   await registerBtn.click();
//   await page.waitForLoadState('domcontentloaded');

//   await SuccessMsg.isVisible();
//   console.log(await SuccessMsg.textContent());
//   await expect(SuccessMsg).toContainText('Successfully');

  
// });
