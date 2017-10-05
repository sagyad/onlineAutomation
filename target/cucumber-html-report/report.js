$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LandingPage.feature");
formatter.feature({
  "line": 1,
  "name": "I should be able to sign up",
  "description": "",
  "id": "i-should-be-able-to-sign-up",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13682222837,
  "status": "passed"
});
formatter.before({
  "duration": 1694163406,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify My Store landing Page",
  "description": "",
  "id": "i-should-be-able-to-sign-up;verify-my-store-landing-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@suite"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I go to Mystore site",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I Your Logo a new experience text",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_StepDef.i_go_to_Mystore_site()"
});
formatter.result({
  "duration": 247474032,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_StepDef.i_Your_Logo_a_new_experience_text()"
});
formatter.result({
  "duration": 84048564,
  "status": "passed"
});
formatter.after({
  "duration": 20995,
  "status": "passed"
});
formatter.after({
  "duration": 19640,
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
  "duration": 1510467213,
  "status": "passed"
});
formatter.before({
  "duration": 1465159970,
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
      "name": "@suite"
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
  "name": "I enter my email address under create an account section",
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
  "location": "HomePage_StepDef.i_go_to_Mystore_site()"
});
formatter.result({
  "duration": 66427236,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_StepDef.i_click_on_Sign_Up()"
});
formatter.result({
  "duration": 1493431705,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_StepDef.i_enter_my_email_address_under_create_an_account_section()"
});
formatter.result({
  "duration": 292267922,
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
  "duration": 251541586,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_StepDef.i_should_be_presented_with_Create_an_account_form()"
});
formatter.result({
  "duration": 94206613,
  "status": "passed"
});
formatter.after({
  "duration": 16254,
  "status": "passed"
});
formatter.after({
  "duration": 36572,
  "status": "passed"
});
});