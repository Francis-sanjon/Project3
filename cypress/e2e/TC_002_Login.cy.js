const { When, Given, And, Then } = require("@badeball/cypress-cucumber-preprocessor")
const { default: Login } = require("./PageObjects/Login.spec")





describe('Login', () => {
  const lp = new Login();

  Given('User launch the Adactin webpage', () => {
    cy.visit('https://adactinhotelapp.com/')

  })
  When('User enters valid Username and valid password', () => {
    cy.fixture('xlsxData').then((data) => {
     // for (let i = 0; i == 0; i++) {

        lp.userName(data.rows[0].username)
        lp.password(data.rows[0].password)

     // }
    })

  })
  And('User clicks Login button', () => {
    lp.loginButton()

  })
  Then('User able to Adactin Homepage', () => {
    cy.title().should('eq', 'Adactin.com - Search Hotel')

  })


})