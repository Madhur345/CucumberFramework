package stepDefination;

import org.openqa.selenium.By;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import runner.BaseChrome;
import runner.BaseFireFox;

public class SmokeFacebookTest extends BaseChrome{


	@Given("^Open firefox and Start Application$")
	public void Open_firefox_and_Start_Application() throws Throwable {
		driver.get("https://www.facebook.com/");
	}

	@When("^I give valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_give_valid_and(String usename, String pass) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(usename);
		driver.findElement(By.id("pass")).sendKeys(pass);
	}

	@Then("^Login should be successfull$")
	public void Login_should_be_successfull() throws Throwable {
		Thread.sleep(5000);
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}
}
