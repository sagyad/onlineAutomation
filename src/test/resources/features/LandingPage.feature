Feature: I should be able to sign up


  Background:
    Given I go to Mystore site

  @suite
  Scenario: Verify My Store landing Page
    Then I should get Your Logo a new experience image

  @suite
  Scenario: New user sign Up
    And I click on Sign Up
    And I enter my email address under create an account section
    When I Click on "Create an account"
    Then I should be presented with Create an account form

    @suite
    Scenario: Go back go home page
      When I click on Logo
      Then I should get "My Store" title

