Feature: As a user, I should be able to Sign Up to mystore.com and create my account

  Background:
    Given I go to Mystore site

  @suite
  Scenario: New user sign Up
    And I click on Sign Up
    And I enter my email address under create an account section
    When I Click on "Create an account"
    Then I should be presented with Create an account form


