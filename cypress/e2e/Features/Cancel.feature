Feature: cancel

    Scenario: Canceling the bookings

        Given User is at the login page
        When User navigate to Booked iteration page
        And User deselect all booked 
        Then User clicks cancel booked 
       
           