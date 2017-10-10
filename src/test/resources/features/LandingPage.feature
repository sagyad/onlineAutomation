@suite
Feature: Verify MyStore Home page and return back to home page by clicking on Logo.

  Background: Visit MyStore HomePage
    Given I go to Mystore site

  Scenario: Verify My Store landing Page
    Then I should get Your Logo a new experience image

  Scenario: New user sign Up
    And I click on Sign Up
    And I enter my email address under create an account section
    When I Click on "Create an account"
    Then I should be presented with Create an account form

  Scenario: Go back go home page
    When I click on Logo
    Then I should get "My Store" title