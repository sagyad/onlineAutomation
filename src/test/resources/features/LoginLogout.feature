@wip
Feature: I should be able to login and log out from site


  Scenario: Login and Login
    Given I go to site
    When I login
    Then I should logout

  Scenario: Go back go home page
    Given I go to site
    And I login
    And I should logout
    When I click on Logo
    Then I should get "My Store" title


