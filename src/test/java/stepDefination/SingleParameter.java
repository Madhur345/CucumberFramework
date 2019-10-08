package stepDefination;

import org.openqa.selenium.By;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import runner.BaseChrome;

public class SingleParameter extends BaseChrome {
	@Given("^Open applicatioin$")
	public void open_applicatioin() throws Throwable {
		driver.get("https://www.facebook.com/");
	}

	@When("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_and(String username, String password) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(username);
		driver.findElement(By.id("pass")).sendKeys(password);
	}

	@When("^I click on login button$")
	public void i_click_on_login_button() throws Throwable {
		Thread.sleep(5000);
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("^Validate if login is successfull$")
	public void validate_if_login_is_successfull() throws Throwable {
		System.out.println(driver.getTitle());
	}

}
