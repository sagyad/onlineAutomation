
Feature:  As a new student, I should be able to create and account and apply for PG programe

  Scenario: New student create an account
    Given I go to ICL site
    And I click on Create an account link or button
    And I complete all my required fields
    When I click on Create Account button
    Then I should be take to "Welcome to ICL page"
    And I should see My account confirmation email

    Scenario: Complete an application
      Given I login
      And I click on Complete APplication
      Then I should



