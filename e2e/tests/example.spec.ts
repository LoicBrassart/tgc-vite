import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:7000");
  });

  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle("Vite + React + TS");
  });

  test("has functional, dynamic-label button", async ({ page }) => {
    const button = page.locator('button:has-text("count is")');

    await expect(button).toHaveText("count is 0");

    await button.click();
    await expect(button).toHaveText("count is 1");

    await button.click();
    await expect(button).toHaveText("count is 2");
  });
});
