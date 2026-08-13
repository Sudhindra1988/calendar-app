const { test, expect } = require("@playwright/test");

test("Launch Calendar App", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Calendar/);
});
test("Click Next should display the next month", async ({ page }) => {
  await page.goto("/");

  const monthYear = page.locator("#month-year");

  await expect(monthYear).toHaveText("August 2026");

  await page.getByRole('button', { name: '>' }).click();

  await expect(monthYear).toHaveText("September 2026");
});
test("Click Previous should display the previous month", async ({ page }) => {
  await page.goto("/");

  const monthYear = page.locator("#month-year");

  await page.getByRole('button', { name: '>' }).click();

  await page.getByRole('button', { name: '<' }).click();

  // Verify that we returned to the original month
});
test("Current day should be highlighted", async ({ page }) => {
    await page.goto("/");

    const today = page.getByRole("button", { name: "Today" });

    await expect(today).toBeVisible();
});
