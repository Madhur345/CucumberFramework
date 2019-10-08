@FunctionalTest
Feature: Test Facebook Smoke Scenarios

  @SmokeTest
  Scenario: Failed Login
  Given Failed
    
   @SmokeTest @RegresstionTest
   Scenario: Blocked Login
   Given Blocked
   
   @RegresstionTest
   Scenario: Succesfull Login
   Given Passed
   
   Scenario: Login
   Given Test
    
    
    