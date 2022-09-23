Feature: Booking

    Scenario: Booking hotel room in Adaction webpage

        Given User launch the Adactin Web Application
        Then User verify the Adactin Home page displayed
        When Start to type your When step here User enter the valid Username and valid password
        And User clicks login Button
        Then User verify the searh Hotel Home page displayed
        When User select the valid Hotel Location,Hotel Name,Room Type,Rooms,Check in date, Checkout Date,Adults Room
        And User clicks Search Button
        Then User verify the select Hotel Home page displayed
        And User clicks the radio Button
        And User Clicks Continue Button
        Then User verify the Book A Hotel Home page displayed
        When User enters First name,Last Name,Billing Address,Credit Card No,Credit Card Type,Expiry Month,Expiry Year,CVV Number
        And User Clicks the Book Now Button
        And User verifythe Booking order ID
