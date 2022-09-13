const report=require("multiple-cucumber-html-reporter")
report.generate({
    jsonDir:"mochawesome-report/",
    reportPath:"cypress/Output/cucumber-html-reports.html"
    /*jsonDir: './path-to-your-json-output/',
	reportPath: './path-where-the-report-needs-to-be/',*/
})