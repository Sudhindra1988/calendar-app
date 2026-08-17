const { test, expect } = require("@playwright/test");

test.describe("Calendar App", () => {
  test("Launch Calendar App", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Calendar/);
  });

  test("Calendar should display the current month", async ({ page }) => {
    await page.goto("/");

    const monthYear = page.locator("#month-year");

    await expect(monthYear).toHaveText("August 2026");
  });

  test("Click Next should display the next month", async ({ page }) => {
    await page.goto("/");

    const monthYear = page.locator("#month-year");

    await expect(monthYear).toHaveText("August 2026");

    await page.getByRole("button", { name: ">" }).click();

    await expect(monthYear).toHaveText("September 2026");
  });

  test("Click Previous should display the previous month", async ({ page }) => {
    await page.goto("/");

    const monthYear = page.locator("#month-year");

    await expect(monthYear).toHaveText("August 2026");

    // Move to September
    await page.getByRole("button", { name: ">" }).click();

    await expect(monthYear).toHaveText("September 2026");

    // Move back to August
    await page.getByRole("button", { name: "<" }).click();

    await expect(monthYear).toHaveText("August 2026");
  });

  test("Today button should be visible", async ({ page }) => {
    await page.goto("/");

    const todayButton = page.getByRole("button", { name: "Today" });

    await expect(todayButton).toBeVisible();
  });

  test("Today button should return to the current month", async ({ page }) => {
    await page.goto("/");

    const monthYear = page.locator("#month-year");

    // Move to next month
    await page.getByRole("button", { name: ">" }).click();

    await expect(monthYear).toHaveText("September 2026");

    // Click Today
    await page.getByRole("button", { name: "Today" }).click();

    // Should return to August 2026
    await expect(monthYear).toHaveText("August 2026");
  });

  test("Current day should be highlighted", async ({ page }) => {
    await page.goto("/");

    const today = page.locator(".today");

    await expect(today).toBeVisible();
  });
});
