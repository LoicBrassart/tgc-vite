import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:7000/");
  const header = page.getByRole("heading", { name: "Annonces récentes" });
  expect(header).toHaveText("Annonces récentes");

  await page.getByRole("link", { name: "Bike to sell 100 €" }).click();
  const priceField = await page.getByPlaceholder("Price");
  await page.getByRole("button", { name: "Éditer" }).click();
  await priceField.fill("1000");
  await page.getByRole("button", { name: "Valider" }).click();

  expect(priceField).toHaveValue("1000");
});
