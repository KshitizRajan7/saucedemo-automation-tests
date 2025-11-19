const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl: "https://demoqa.com", // default base URL
    env: {
      demoUrl: "https://demoqa.com",
      sauceUrl: "https://www.saucedemo.com",
      saucePassword: "secret_sauce"
    },
    setupNodeEvents(on, config) {
    },
  },
});
