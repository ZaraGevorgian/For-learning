const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    globalUrl: 'http://87.249.49.66/testing/#/map/',
    allureResultsPath: "allure-results",
    
  },
});
