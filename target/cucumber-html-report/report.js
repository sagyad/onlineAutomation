$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LandingPage.feature");
formatter.feature({
  "line": 1,
  "name": "I should be able to sign up",
  "description": "",
  "id": "i-should-be-able-to-sign-up",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10659977258,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I go to Mystore site",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage_StepDef.i_go_to_Mystore_site()"
});
formatter.result({
  "duration": 8314664529,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify My Store landing Page",
  "description": "",
  "id": "i-should-be-able-to-sign-up;verify-my-store-landing-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@suite"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I should get Your Logo a new experience image",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_StepDef.i_should_get_Your_Logo_a_new_experience_image()"
});
formatter.result({
  "duration": 297429233,
  "status": "passed"
});
formatter.after({
  "duration": 174053,
  "status": "passed"
});
formatter.before({
  "duration": 84656,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I go to Mystore site",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage_StepDef.i_go_to_Mystore_site()"
});
formatter.result({
  "duration": 2100178590,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "New user sign Up",
  "description": "",
  "id": "i-should-be-able-to-sign-up;new-user-sign-up",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@suite"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I click on Sign Up",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter my email address under create an account section",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Click on \"Create an account\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should be presented with Create an account form",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_StepDef.i_click_on_Sign_Up()"
});
formatter.result({
  "duration": 1550596893,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_StepDef.i_enter_my_email_address_under_create_an_account_section()"
});
formatter.result({
  "duration": 450584905,
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
  "duration": 328124841,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_StepDef.i_should_be_presented_with_Create_an_account_form()"
});
formatter.result({
  "duration": 135889224,
  "status": "passed"
});
formatter.after({
  "duration": 29121,
  "status": "passed"
});
formatter.before({
  "duration": 108360,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I go to Mystore site",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage_StepDef.i_go_to_Mystore_site()"
});
formatter.result({
  "duration": 1840255377,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Go back go home page",
  "description": "",
  "id": "i-should-be-able-to-sign-up;go-back-go-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@suite"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I click on Logo",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should get \"My Store\" title",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_StepDef.i_click_on_Logo()"
});
formatter.result({
  "duration": 2266632714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Store",
      "offset": 14
    }
  ],
  "location": "HomePage_StepDef.i_should_get_title(String)"
});
formatter.result({
  "duration": 3450581,
  "status": "passed"
});
formatter.after({
  "duration": 30476,
  "status": "passed"
});
});