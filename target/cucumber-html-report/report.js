$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/test.feature");
formatter.feature({
  "line": 1,
  "name": "The test WIP tests",
  "description": "",
  "id": "the-test-wip-tests",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "It works",
  "description": "",
  "id": "the-test-wip-tests;it-works",
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
  "name": "I am",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I do",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I get",
  "keyword": "Then "
});
formatter.match({
  "location": "test.i_am()"
});
formatter.result({
  "duration": 162284983,
  "status": "passed"
});
formatter.match({
  "location": "test.i_do()"
});
formatter.result({
  "duration": 75175,
  "status": "passed"
});
formatter.match({
  "location": "test.i_get()"
});
formatter.result({
  "duration": 132063,
  "status": "passed"
});
});