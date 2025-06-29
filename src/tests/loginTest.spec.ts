// Test script using the Page Object Model
import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.fillUsername("zuveriabanu-el8b@force.com");
  await loginPage.fillPassword("Thisiszuveriasigningin06!");

  const homePage = await loginPage.clickLoginButton();
  await homePage.expectServiceTitleToBeVisible();
});