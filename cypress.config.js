const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 500,
  viewportHeight: 800,
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: "https://petgram-edelcid-estebandelcid.vercel.app/",
    setupNodeEvents(on, config) {},
  },
});
