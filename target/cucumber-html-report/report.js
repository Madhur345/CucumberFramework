$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/backrevison.feature");
formatter.feature({
  "line": 2,
  "name": "Smoke testcase for facebook login",
  "description": "",
  "id": "smoke-testcase-for-facebook-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Test facebook login",
  "description": "",
  "id": "smoke-testcase-for-facebook-login;test-facebook-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Open applicatioin",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"madhurvishal5@gmail.com\" and \".v9661132\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Validate if login is successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "SingleParameter.open_applicatioin()"
});
formatter.result({
  "duration": 11753139300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "madhurvishal5@gmail.com",
      "offset": 9
    },
    {
      "val": ".v9661132",
      "offset": 39
    }
  ],
  "location": "SingleParameter.i_enter_and(String,String)"
});
formatter.result({
  "duration": 487583300,
  "status": "passed"
});
formatter.match({
  "location": "SingleParameter.i_click_on_login_button()"
});
formatter.result({
  "duration": 14256305300,
  "status": "passed"
});
formatter.match({
  "location": "SingleParameter.validate_if_login_is_successfull()"
});
formatter.result({
  "duration": 36550700,
  "status": "passed"
});
});