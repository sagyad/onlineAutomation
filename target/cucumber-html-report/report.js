$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/SignUp.feature");
formatter.feature({
  "line": 1,
  "name": "As a user, I should be able to Sign Up to mystore.com and create my account",
  "description": "",
  "id": "as-a-user,-i-should-be-able-to-sign-up-to-mystore.com-and-create-my-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11886900863,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "New user sign Up",
  "description": "",
  "id": "as-a-user,-i-should-be-able-to-sign-up-to-mystore.com-and-create-my-account;new-user-sign-up",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I go to Mystore site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Sign Up",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter my email address \"student1@mailinator.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Click on \"Create an account\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be presented with Create an account form",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage_StepDef.i_go_to_Mystore_site()"
});
formatter.result({
  "duration": 242382479,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_StepDef.i_click_on_Sign_Up()"
});
formatter.result({
  "duration": 92783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student1@mailinator.com",
      "offset": 26
    }
  ],
  "location": "SignUp_StepDef.i_enter_my_email_address(String)"
});
formatter.result({
  "duration": 3095026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create an account",
      "offset": 12
    }
  ],
  "location": "SignUp_StepDef.i_Click_on(String)"
});
formatter.result({
  "duration": 62307,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_StepDef.i_should_be_presented_with_Create_an_account_form()"
});
formatter.result({
  "duration": 27090,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Enter user details",
  "description": "",
  "id": "as-a-user,-i-should-be-able-to-sign-up-to-mystore.com-and-create-my-account;enter-user-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "select \u003cTitle\u003e\u003cDD\u003e\u003cMonth\u003e\u003cYear\u003e\u003cState\u003e\u003cCountry\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \u003cFirstName\u003e\u003cLastName\u003e\u003cPassword\u003e\u003cAddress\u003e\u003cCity\u003e\u003cZIP\u003e\u003cMobile\u003e\u003cAddressAlias\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \"Register\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should get \"Welcome to your account. Here you can manage all of your personal information and orders.\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "as-a-user,-i-should-be-able-to-sign-up-to-mystore.com-and-create-my-account;enter-user-details;",
  "rows": [
    {
      "cells": [
        "Title",
        "FirstName",
        "LastName",
        "Password",
        "DD",
        "Month",
        "Year",
        "Address",
        "City",
        "State",
        "ZIP",
        "Country",
        "Mobile",
        "AddressAlias"
      ],
      "line": 19,
      "id": "as-a-user,-i-should-be-able-to-sign-up-to-mystore.com-and-create-my-account;enter-user-details;;1"
    },
    {
      "cells": [
        "Mr",
        "Lisa",
        "Mattis",
        "test1234",
        "01",
        "December",
        "1985",
        "Baker Street",
        "Dallas",
        "Hawaii",
        "12345",
        "United States",
        "01234567",
        "DallasCity"
      ],
      "line": 20,
      "id": "as-a-user,-i-should-be-able-to-sign-up-to-mystore.com-and-create-my-account;enter-user-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2000983365,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Enter user details",
  "description": "",
  "id": "as-a-user,-i-should-be-able-to-sign-up-to-mystore.com-and-create-my-account;enter-user-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "select Mr01December1985HawaiiUnited States",
  "matchedColumns": [
    0,
    4,
    5,
    6,
    9,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter LisaMattistest1234Baker StreetDallas1234501234567DallasCity",
  "matchedColumns": [
    1,
    2,
    3,
    7,
    8,
    10,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \"Register\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should get \"Welcome to your account. Here you can manage all of your personal information and orders.\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});