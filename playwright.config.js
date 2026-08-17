const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./e2e",

  testMatch: "**/*.spec.js",

  // Playwright test report
  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-report", open: "never" }],
  ],

  use: {
    baseURL: "http://localhost:3000",
    headless: true,
  },

  webServer: {
    command: "npm start",
    url: "http://localhost:3000",
    reuseExistingServer: true,
    timeout: 120 * 1000,
  },
});
