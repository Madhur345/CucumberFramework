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
        "vishal5@gmail.com",
        "kjhkhkkh"
      ],
      "line": 11,
      "id": "test-facebook-smoke-scenarios;test-login-with-login-credentials;;2"
    },
    {
      "cells": [
        "vifkk@gmail.com",
        "hgjjgjg"
      ],
      "line": 12,
      "id": "test-facebook-smoke-scenarios;test-login-with-login-credentials;;3"
    },
    {
      "cells": [
        "madhurvishal5@gmai.com",
        ".v9661132"
      ],
      "line": 13,
      "id": "test-facebook-smoke-scenarios;test-login-with-login-credentials;;4"
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
  "name": "I give valid \"vishal5@gmail.com\" and \"kjhkhkkh\"",
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
  "duration": 15397554693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vishal5@gmail.com",
      "offset": 14
    },
    {
      "val": "kjhkhkkh",
      "offset": 38
    }
  ],
  "location": "SmokeFacebookTest.i_give_valid_and(String,String)"
});
formatter.result({
  "duration": 315696632,
  "status": "passed"
});
formatter.match({
  "location": "SmokeFacebookTest.Login_should_be_successfull()"
});
formatter.result({
  "duration": 10315370773,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test Login With Login Credentials",
  "description": "",
  "id": "test-facebook-smoke-scenarios;test-login-with-login-credentials;;3",
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
  "name": "I give valid \"vifkk@gmail.com\" and \"hgjjgjg\"",
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
  "duration": 2362435095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vifkk@gmail.com",
      "offset": 14
    },
    {
      "val": "hgjjgjg",
      "offset": 36
    }
  ],
  "location": "SmokeFacebookTest.i_give_valid_and(String,String)"
});
formatter.result({
  "duration": 379856553,
  "status": "passed"
});
formatter.match({
  "location": "SmokeFacebookTest.Login_should_be_successfull()"
});
formatter.result({
  "duration": 6689678751,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Test Login With Login Credentials",
  "description": "",
  "id": "test-facebook-smoke-scenarios;test-login-with-login-credentials;;4",
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
  "duration": 2057334425,
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
  "duration": 313123974,
  "status": "passed"
});
formatter.match({
  "location": "SmokeFacebookTest.Login_should_be_successfull()"
});
formatter.result({
  "duration": 15608950077,
  "status": "passed"
});
});