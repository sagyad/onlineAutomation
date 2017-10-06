Feature: I should be able to sign up


  Background:
    Given I go to Mystore site

  @suite
  Scenario: Verify My Store landing Page
    Then I should get Your Logo a new experience image


    @wip
    Scenario: Go back go home page
      When I click on Logo
      Then I should get "My Store" title