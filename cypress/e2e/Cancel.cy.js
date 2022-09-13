const {Given, When,And, Then } = require("@badeball/cypress-cucumber-preprocessor");

import BookedIteration from './PageObjects/BookedIteration.spec'
import Login from './PageObjects/Login.spec'
const lp=new Login();
const bi=new BookedIteration();

describe('',()=>{


When('User navigate to Booked iteration page',()=>{
bi.bIteration()
})
And('User deselect all booked',()=>{
bi.checkBtn().check()
    
})

Then('User clicks cancel booked',()=>{
bi.cancelBk()
})



})

