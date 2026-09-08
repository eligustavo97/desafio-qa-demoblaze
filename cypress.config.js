const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.demoblaze.com",
    specPattern: "cypress/e2e/features/*.feature",
    supportFile: false,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      const options = {
        webpackOptions: {
          resolve: {
            extensions: [".js", ".ts"],
            alias: {
              "@pages": path.resolve(__dirname, "cypress/pages"),
            },
          },
          module: {
            rules: [
              {
                test: /\.feature$/,
                use: [
                  {
                    loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                    options: config,
                  },
                ],
              },
            ],
          },
        },
      };

      on("file:preprocessor", webpack(options));

      return config;
    },
  },
});