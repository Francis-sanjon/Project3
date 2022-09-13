const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

const xlsx = require('node-xlsx').default; 
const fs = require('fs'); // for file
const path = require('path'); // for file path
const readXlsx = require('./cypress/support/read-xlsx')

async function setupNodeEvents(on, config) {

  on('task', { parseXlsx({ filePath }) 
  { return new Promise((resolve, reject) =>
    { try 
     {
        const jsonData = xlsx.parse(fs.readFileSync(filePath)); 
        resolve(jsonData);
        } catch (e) 
        {
           reject(e);
        } });
      }}); 
     
      on('task', {
       'readXlsx': readXlsx.read
     })
     

  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: false,
    html: false,
    json: true,
  },
  

  e2e: {
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents,
  },
});