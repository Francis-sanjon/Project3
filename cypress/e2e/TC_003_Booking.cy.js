const { Given, When, And, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Login from './PageObjects/Login.spec'
import Hotels from './PageObjects/Hotels.spec'
import SelectHotesz from './PageObjects/SelectHotel.spec'
import BookHotel from './PageObjects/BookHotel.spec'

const lp = new Login();
let h = new Hotels();
const sh = new SelectHotesz();
let bh = new BookHotel();

before('Before', () => {
  cy.log('this is before block')
  cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
    let rowsLength = rows.length;
    cy.writeFile("cypress/fixtures/xlsxData.json", { rows })
  })
})
describe('Booking Hotel Room', () => {


  Given('User launch the Adactin Web Application', () => {
    cy.visit('https://adactinhotelapp.com/')
  })

  Then('User verify the Adactin Home page displayed', () => {
    cy.title().should('eq', 'Adactin.com - Hotel Reservation System')
  })
  When('Start to type your When step here User enter the valid Username and valid password', () => {
    cy.fixture('xlsxData').then((data) => {
      for (let i = 0; i == 0; i++) {

        lp.userName(data.rows[i].username)
        lp.password(data.rows[i].password)
      }
    })
  })
  And('User clicks login Button', () => {
    lp.loginButton()
  })
  Then('User verify the searh Hotel Home page displayed', () => {
    cy.title().should('eq', 'Adactin.com - Search Hotel')
  })
  When('User select the valid Hotel Location,Hotel Name,Room Type,Rooms,Check in date, Checkout Date,Adults Room', () => {
    cy.fixture('xlsxData').then((data) => {
      for (let i = 0; i == 0; i++) {
        h.location(data.rows[i].Location)
        h.hotel(data.rows[i].Hotels)
        h.roomType(data.rows[i].RoomType)
        h.numberOfRoom(data.rows[i].Number_of_rooms)
        h.checkInDate(data.rows[i].Check_in_Date)
        h.checkOutDate(data.rows[i].Check_out_Date)

        h.adultsPerRoom(data.rows[i].Adults_per_room)
        h.childrensPerRoom(data.rows[i].Childres_per_room)

      }
    })
  })
  And('User clicks Search Button', () => {
    h.searchButton()
  })
  Then('User verify the select Hotel Home page displayed', () => {
    cy.title().should('eq', 'Adactin.com - Select Hotel')
  })
  And('User clicks the radio Button', () => {
    cy.fixture('xlsxData').then((data) => {
      sh.radioButton()

    })
  })
  And('User Clicks Continue Button', () => {
    sh.continueButton()
  })

  Then('User verify the Book A Hotel Home page displayed', () => {
    cy.title().should('eq', 'Adactin.com - Book A Hotel')
  })

  When('User enters First name,Last Name,Billing Address,Credit Card No,Credit Card Type,Expiry Month,Expiry Year,CVV Number', () => {
    cy.fixture('xlsxData').then((data) => {
      for (let i = 0; i == 0; i++) {
        bh.firstName(data.rows[i].First_Name)
        bh.lastName(data.rows[i].Last_Name)
        bh.billingAddress(data.rows[i].Billing_Address)
        bh.creditCardNo(data.rows[i].Credit_Card_No)
        bh.creditCardType(data.rows[i].Credit_Card_type)
        bh.expiryMonth(data.rows[i].Expiry_Month)

        const year = data.rows[i].Expiry_Year
        cy.log(year)
        bh.expiryYear().select('2022')
        bh.cvvNumber(data.rows[i].Cvv_Number)
      }
    })
  })
    And('User Clicks the Book Now Button', () => {
      bh.bookNow()
      cy.wait(8000)
    })

    And('User verifythe Booking order ID', () => {
      bh.orderID().should('be.disabled')
      cy.get('#order_no').then(($d) => {
        const val = $d.val()
        cy.log(val)
      })
    })
})