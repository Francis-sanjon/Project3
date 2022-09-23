Feature: New User Register

    Scenario: Register a new User in Adactin Webpage
        Given User launches the Adactin webpage
        When User clicks New User Register Here option
        And User enters Username,Password,Confirm Password,Full Name,Email Address
        Then User clicks check box
        Then User clicks Register Button