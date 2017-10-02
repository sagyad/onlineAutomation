Feature: As a user, I should be able to Sign Up to mystore.com and create my account

  @wip
  Scenario: New user sign Up
    Given  I go to Mystore site
    And I click on Sign Up
    And I enter my email address "student1@mailinator.com"
    When I Click on "Create an account"
    Then I should be presented with Create an account form

  @wip
  Scenario Outline: Enter user details
    And select <Title><DD><Month><Year><State><Country>
    And I enter <FirstName><LastName><Password><Address><City><ZIP><Mobile><AddressAlias>
    When I click on "Register"
    Then I should get "Welcome to your account. Here you can manage all of your personal information and orders."

    Examples:
      | Title | FirstName | LastName | Password | DD | Month    | Year | Address      | City   | State  | ZIP   | Country       | Mobile   | AddressAlias |
      | Mr    | Lisa      | Mattis   | test1234 | 01 | December | 1985 | Baker Street | Dallas | Hawaii | 12345 | United States | 01234567 | DallasCity   |

