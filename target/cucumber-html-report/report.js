$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LandingPage.feature");
formatter.feature({
  "line": 1,
  "name": "I should be able to sign up",
  "description": "",
  "id": "i-should-be-able-to-sign-up",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8672996005,
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
  "duration": 5995148193,
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
  "duration": 246508277,
  "status": "passed"
});
formatter.after({
  "duration": 127323,
  "status": "passed"
});
formatter.before({
  "duration": 111746,
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
  "duration": 2390407318,
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
  "duration": 1633177182,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_StepDef.i_enter_my_email_address_under_create_an_account_section()"
});
formatter.result({
  "duration": 588838404,
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
  "duration": 315964168,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_StepDef.i_should_be_presented_with_Create_an_account_form()"
});
formatter.result({
  "duration": 131987595,
  "status": "passed"
});
formatter.after({
  "duration": 31831,
  "status": "passed"
});
});