$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LoginLogout.feature");
formatter.feature({
  "line": 2,
  "name": "I should be able to login and log out from site",
  "description": "",
  "id": "i-should-be-able-to-login-and-log-out-from-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.before({
  "duration": 14961045346,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login and Login",
  "description": "",
  "id": "i-should-be-able-to-login-and-log-out-from-site;login-and-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I go to site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should logout",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogout_StepDef.i_go_to_site()"
});
formatter.result({
  "duration": 8086293643,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.i_login()"
});
formatter.result({
  "duration": 6665524600,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.i_should_logout()"
});
formatter.result({
  "duration": 2128442878,
  "status": "passed"
});
