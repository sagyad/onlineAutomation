$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/MyStore_SignUp.feature");
formatter.feature({
  "line": 1,
  "name": "I should be able to sign up",
  "description": "",
  "id": "i-should-be-able-to-sign-up",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5100938463,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Sign up to My Store",
  "description": "",
  "id": "i-should-be-able-to-sign-up;sign-up-to-my-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I go to Mystore site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter my details",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I sign up",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp.i_go_to_Mystore_site()"
});
formatter.result({
  "duration": 4985137105,
  "status": "passed"
});
formatter.match({
  "location": "SignUp.i_enter_my_details()"
});
formatter.result({
  "duration": 2272168,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat step_definitions.SignUp.i_enter_my_details(SignUp.java:27)\r\n\tat ✽.When I enter my details(features/MyStore_SignUp.feature:5)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "SignUp.i_sign_up()"
});
formatter.result({
  "status": "skipped"
});
});