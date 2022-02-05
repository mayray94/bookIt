@login
  Feature: Login as a user

    Scenario: User should be able to login
      Given User is on sign on page
      When User enter the credentials:
      |nyablsley8g@nasa.gov|
      |huntdurand         |
      And Clicks sign in button
      Then User should see map on homepage

