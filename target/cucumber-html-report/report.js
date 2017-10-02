$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LandingPage.feature");
formatter.feature({
  "line": 1,
  "name": "I should be able to sign up",
  "description": "",
  "id": "i-should-be-able-to-sign-up",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11430535643,
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
  "location": "LandingPage_StepDef.i_go_to_Mystore_site()"
});
formatter.result({
  "duration": 166769044,
  "status": "passed"
});
formatter.match({
  "location": "LandingPage_StepDef.i_Your_Logo_a_new_experience_text()"
});
formatter.result({
  "duration": 58510202,
  "status": "passed"
});
});