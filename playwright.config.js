const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./e2e",

  use: {
    baseURL: "http://localhost:3000",
    headless: true,
    screenshot: "only-on-failure",
    trace: "on-first-retry",
  },

  webServer: {
    command: "npm start",
    url: "http://localhost:3000",
    reuseExistingServer: true,
  },

  reporter: "html",
});
