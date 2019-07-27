Feature: Test Facebook Smoke Scenarios

  Scenario Outline: Test Login With Login Credentials
    Given Open firefox and Start Application
    When I give valid "<username>" and "<password>"
    Then Login should be successfull
    
    
    Examples:
    | username               | password  |
    | madhurvishal5@gmai.com | .v9661132 |
