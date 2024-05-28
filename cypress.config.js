const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on);
    },
    baseUrl: 'https://front.serverest.dev/', 
    video: true, 
    chromeWebSecurity: false, 
    projectId: "928t4n", 
    env: {
      local: 'https://localhost/3000/',
      prod: 'https://serverest.dev/'
    },
  },
});
