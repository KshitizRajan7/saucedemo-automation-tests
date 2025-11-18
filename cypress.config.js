const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com", // default base URL
    setupNodeEvents(on, config) {
    },
  },
});
