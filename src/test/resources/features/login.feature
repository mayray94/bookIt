@login
  Feature: Login as a user

    Scenario: User should be able to login
      Given User is on sign on page
      When "Student" enters username "nyablsley8g@nasa.gov" and password "huntdurand"
      And clicks sign in button
      Then User should see map on homepage