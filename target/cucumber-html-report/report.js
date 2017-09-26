$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/suite.feature");
formatter.feature({
  "line": 1,
  "name": "The test",
  "description": "",
  "id": "the-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "It works",
  "description": "",
  "id": "the-test;it-works",
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
  "name": "me alo",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "jeva me he kele",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "teva mala he milaale",
  "keyword": "Then "
});
formatter.match({
  "location": "suite.me_alo()"
});
formatter.result({
  "duration": 162537596,
  "status": "passed"
});
formatter.match({
  "location": "suite.jeva_me_he_kele()"
});
formatter.result({
  "duration": 76529,
  "status": "passed"
});
formatter.match({
  "location": "suite.teva_mala_he_milaale()"
});
formatter.result({
  "duration": 73820,
  "status": "passed"
});
});