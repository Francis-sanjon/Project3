const report=require("multiple-cucumber-html-reporter")
report.generate({
    jsonDir:"cypress/cucumber-json/",
    reportPath:"cypress/cucumber-json/",
    "metadata": {
        "browser": {
          "name": "chrome",
          "version": "81"
        },
        "device": "Local test machine",
        "platform": {
          "name": "Windows",
          "version": "10"
        }
      }
})