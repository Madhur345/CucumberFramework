//package stepDefination;
//
//import java.util.List;
//
//import org.openqa.selenium.By;
//
//import cucumber.api.DataTable;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import runner.BaseChrome;
//
//public class CucumberDateTable extends BaseChrome{
//	
//	@Given("^Open firefox and Start Application$")
//	public void Open_firefox_and_Start_Application() throws Throwable {
//		driver.get("https://www.facebook.com/");
//	}
//
//	@When("^I give valid username and password$")
//	public void i_give_valid_and(DataTable credentials) throws Throwable {
//		List<List<String>> data =credentials.raw();
//		driver.findElement(By.id("email")).sendKeys(data.get(0).get(0));
//		driver.findElement(By.id("pass")).sendKeys(data.get(0).get(1));
//	}
//
//	@Then("^Login should be successfull$")
//	public void Login_should_be_successfull() throws Throwable {
//		Thread.sleep(5000);
//		driver.findElement(By.xpath("//input[@type='submit']")).click();
//		driver.close();
//	}
//}
