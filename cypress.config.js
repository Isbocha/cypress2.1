const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "qsx236",
  e2e: {
  baseUrl: "http://qamid.tmweb.ru/",
//  retries: 1,
  },
});
