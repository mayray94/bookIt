@db
  Feature: As a user, i should be access to My module

    Background:
      Given User is on sign on page
      When User enter the credentials:
        |nyablsley8g@nasa.gov|
        |huntdurand         |
      And Clicks sign in button


      Scenario: Verify three options under My module
        When User hover over My module
        Then User should able to displayed this modules:
        |self|
        |team|
        |sign out|







