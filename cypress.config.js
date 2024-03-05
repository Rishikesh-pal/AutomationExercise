const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    pageLoadTimeout: 15000,
    defaultCommandTimeout: 7000,
    baseUrl: "https://automationexercise.com/",
    retries:{
      openMode:1,
      runMode:1
    },
    watchForFileChanges: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    videoCompression: 25
  },
});
