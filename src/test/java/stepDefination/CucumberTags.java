//package stepDefination;
//
//import cucumber.api.java.After;
//import cucumber.api.java.Before;
//import cucumber.api.java.en.Given;
//
//public class CucumberTags {
//
//	@Before
//	public void beforeScenario(){
//		System.out.println("This will run before the Scenario");
//	} 
//
//	@After
//	public void afterScenario(){
//		System.out.println("This will run after the Scenario");
//	}
//
//	@Given("^Failed$")
//	public void failed() throws Throwable {
//		System.out.println("Failed");
//	}
//
//	@Given("^Blocked$")
//	public void blocked() throws Throwable {
//		System.out.println("Blocked");
//	}
//
//	@Given("^Passed$")
//	public void passed() throws Throwable {
//		System.out.println("Passed");
//	}
//	@Given("^Test$")
//	public void test() throws Throwable {
//		System.out.println("Test");
//	}
//}