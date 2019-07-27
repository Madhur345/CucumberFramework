package runner;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class BaseChrome {
	public static ChromeOptions options;
	public static WebDriver driver ;
	static{
		options = new ChromeOptions();
		options.addArguments("window-size=1366,768");
		options.addArguments("--disable-notifications");
		options.addArguments("--disable-geolocation");
		options.addArguments("--ignore-certificate-errors");
		System.setProperty("webdriver.chrome.driver","./driver/chromedriver.exe");
		driver = new ChromeDriver(options);
	}
}
