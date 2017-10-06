$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LandingPage.feature");
formatter.feature({
  "line": 1,
  "name": "I should be able to sign up",
  "description": "",
  "id": "i-should-be-able-to-sign-up",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6439489545,
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
  "duration": 3766028947,
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
  "duration": 162289722,
  "status": "passed"
});
formatter.after({
  "duration": 82624,
  "status": "passed"
});
formatter.uri("features/SignUp.feature");
formatter.feature({
  "line": 1,
  "name": "As a user, I should be able to Sign Up to mystore.com and create my account",
  "description": "",
  "id": "as-a-user,-i-should-be-able-to-sign-up-to-mystore.com-and-create-my-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 56889,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I go to Mystore site",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage_StepDef.i_go_to_Mystore_site()"
});
formatter.result({
  "duration": 1504731597,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "New user sign Up",
  "description": "",
  "id": "as-a-user,-i-should-be-able-to-sign-up-to-mystore.com-and-create-my-account;new-user-sign-up",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@suite"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on Sign Up",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter my email address under create an account section",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Click on \"Create an account\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be presented with Create an account form",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_StepDef.i_click_on_Sign_Up()"
});
formatter.result({
  "duration": 1418097975,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_StepDef.i_enter_my_email_address_under_create_an_account_section()"
});
formatter.result({
  "duration": 284417258,
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
  "duration": 192576950,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_StepDef.i_should_be_presented_with_Create_an_account_form()"
});
formatter.result({
  "duration": 68246325,
  "status": "passed"
});
formatter.after({
  "duration": 25736,
  "status": "passed"
});
});