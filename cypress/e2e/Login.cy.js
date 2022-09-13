const {Given, When,And, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Login from './PageObjects/Login.spec'
import Hotels from './PageObjects/Hotels.spec'
import SelectHotesz from './PageObjects/SelectHotel.spec'
import BookHotel from './PageObjects/BookHotel.spec'

const lp=new Login();
let h=new Hotels();
const sh=new SelectHotesz();
let bh=new BookHotel();


describe('Test Suite',()=>{
before('Before',()=>{
  cy.log('this is before block')
  cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
   let rowsLength = rows.length;
    cy.writeFile("cypress/fixtures/xlsxData.json", {rows})
})
})
  
Given('User is at the login page', () => {
    cy.visit('https://adactinhotelapp.com/')
    cy.fixture('xlsxData').then((data)=>{
      for( let i=0;i==0;i++){
    
    lp.userName(data.rows[i].username)
    lp.password(data.rows[i].password)
    lp.loginButton()
    }
  })
})

When('User enters username as username and password as password', () => {
cy.fixture('xlsxData').then((data)=>{
for( let i=0;i==0;i++){
h.location(data.rows[i].Location)
h.hotel(data.rows[i].Hotels)
h.roomType(data.rows[i].RoomType)
h.numberOfRoom(data.rows[i].Number_of_rooms)
h.checkInDate(data.rows[i].Check_in_Date)
h.checkOutDate(data.rows[i].Check_out_Date)

h.adultsPerRoom(data.rows[i].Adults_per_room)
h.childrensPerRoom(data.rows[i].Childres_per_room)
h.searchButton()}
}) 
})


And('User clicks on login button', () => {
  cy.fixture('xlsxData').then((data)=>{
    for( let i=0;i==0;i++){
      for( let i=0;i==0;i++){
        sh.radioButton()
    sh.continueButton()}

    }})
})

Then('User is able to successfully login to the Website', () => {
  cy.fixture('xlsxData').then((data)=>{
    for( let i=0;i==0;i++){
      bh.firstName(data.rows[i].First_Name)
bh.lastName(data.rows[i].Last_Name)
bh.billingAddress(data.rows[i].Billing_Address)
bh.creditCardNo(data.rows[i].Credit_Card_No)
bh.creditCardType(data.rows[i].Credit_Card_type)
bh.expiryMonth(data.rows[i].Expiry_Month)

const year=data.rows[i].Expiry_Year
cy.log(year)
bh.expiryYear().select('2022')
bh.cvvNumber(data.rows[i].Cvv_Number)
bh.bookNow()
cy.wait(8000)
 
bh.orderID().should('be.disabled')
cy.get('#order_no').then(($d)=>{
  const val=$d.val()
  cy.log(val)})
      }


  }  )

})

})