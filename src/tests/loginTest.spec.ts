// Test script using the Page Object Model
import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { encrypt, decrypt } from '../utils/CryptojsUtil';
import { encryptEnvFile, decryptEnvFile } from '../utils/EncryptEnvFile';

test("test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  // await loginPage.fillUsername("zuveriabanu-el8b@force.com");
  // await loginPage.fillPassword("Thisiszuveriasigningin06!");
  await loginPage.fillUsername(process.env.userid!);
  await loginPage.fillPassword(process.env.password!);

  const homePage = await loginPage.clickLoginButton();
  await homePage.expectServiceTitleToBeVisible();
});

test.skip("Sample Test env", async ({page}) => {
  console.log(process.env.NODE_ENV);
  console.log(process.env.userid);
  console.log(process.env.password);
});

test.skip("Sample env test", async ({ page }) => {
  const plaintext = 'Hello, Mars!';

  const encryptedText = encrypt(plaintext);
  console.log('SALT:', process.env.SALT);
  console.log('Encrypted:', encryptedText);

  const decryptedText = decrypt(encryptedText);
  console.log('Decrypted:', decryptedText);

  encryptEnvFile(); // Uncomment if needed

  // Sample manual decryption
  console.log(decrypt("U2FsdGVkX18dD3Swfx9EA+j898ItO/RNAdt4DjXXBO5oSq3ZZdDPpYeCwS6JfuIA"));
});