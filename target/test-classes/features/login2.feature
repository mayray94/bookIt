Feature: user,user can see featute

  @smoke
Scenario: User should be able to login
Given User is on sign on page
When User enter the credentials:
|nyablsley8g@nasa.gov|
|huntdurand         |
And Clicks sign in button
Then User should see map on homepage