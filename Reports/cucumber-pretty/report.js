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
  "duration": 5791211076,
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
  "duration": 3730369107,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.i_login()"
});
formatter.result({
  "duration": 3991152427,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.i_should_logout()"
});
formatter.result({
  "duration": 2267146069,
  "status": "passed"
});
formatter.after({
  "duration": 1558434012,
  "status": "passed"
});
formatter.before({
  "duration": 4387929266,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Go back go home page",
  "description": "",
  "id": "i-should-be-able-to-login-and-log-out-from-site;go-back-go-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I go to site",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I login",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should logout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Logo",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should get \"My Store\" title",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogout_StepDef.i_go_to_site()"
});
formatter.result({
  "duration": 3723907480,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.i_login()"
});
formatter.result({
  "duration": 4049925401,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogout_StepDef.i_should_logout()"
});
formatter.result({
  "duration": 2348353575,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_StepDef.i_click_on_Logo()"
});
formatter.result({
  "duration": 1982363096,
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
  "duration": 3607703,
  "status": "passed"
});
formatter.after({
  "duration": 1517033814,
  "status": "passed"
});
});