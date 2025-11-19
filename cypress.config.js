const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://saucedemo.com", // default base URL
    env: {
      saucePassword: "secret_sauce"
    },
    setupNodeEvents(on, config) {
    },
  },
});
