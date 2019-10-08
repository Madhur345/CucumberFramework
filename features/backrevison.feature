
Feature: Single Parameter


  Scenario: Test facebook login
    Given Open applicatioin
    When I enter "madhurvishal5@gmail.com" and ".v9661132"
    And I click on login button
    Then Validate if login is successfull

