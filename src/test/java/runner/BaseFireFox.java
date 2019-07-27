package runner;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;

public class BaseFireFox {
	public static WebDriver driver;
	public static FirefoxProfile profile;
	public static FirefoxOptions options;
	static{
		System.setProperty("webdriver.gecko.driver","./driver/geckodriver.exe");
		profile =new FirefoxProfile();
		profile.setPreference("geo.enabled", false);
		profile.setPreference("dom.webnotifications.enabled", false);
		profile.setPreference("dom.push.enabled", false);
		options=new FirefoxOptions();
		options.setProfile(profile);
		driver = new FirefoxDriver(options);
		driver.manage().window().maximize();
	}
}
