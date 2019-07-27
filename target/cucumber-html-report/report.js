$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Test Facebook Smoke Scenarios",
  "description": "",
  "id": "test-facebook-smoke-scenarios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test Login With Login Credentials",
  "description": "",
  "id": "test-facebook-smoke-scenarios;test-login-with-login-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open firefox and Start Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I give valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Login should be successfull",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "test-facebook-smoke-scenarios;test-login-with-login-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "test-facebook-smoke-scenarios;test-login-with-login-credentials;;1"
    },
    {
      "cells": [
        "madhurvishal5@gmai.com",
        ".v9661132"
      ],
      "line": 11,
      "id": "test-facebook-smoke-scenarios;test-login-with-login-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Test Login With Login Credentials",
  "description": "",
  "id": "test-facebook-smoke-scenarios;test-login-with-login-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open firefox and Start Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I give valid \"madhurvishal5@gmai.com\" and \".v9661132\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Login should be successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeFacebookTest.Open_firefox_and_Start_Application()"
});
formatter.result({
  "duration": 11135580616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "madhurvishal5@gmai.com",
      "offset": 14
    },
    {
      "val": ".v9661132",
      "offset": 43
    }
  ],
  "location": "SmokeFacebookTest.i_give_valid_and(String,String)"
});
formatter.result({
  "duration": 1193288771,
  "status": "passed"
});
formatter.match({
  "location": "SmokeFacebookTest.Login_should_be_successfull()"
});
formatter.result({
  "duration": 12597874480,
  "status": "passed"
});
});