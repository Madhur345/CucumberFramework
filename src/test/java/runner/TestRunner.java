package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="features/backrevison.feature",
glue={"stepDefination"},
//tags={"@FunctionalTest"},
plugin={"pretty:target/cucumber-pretty.txt","html:target/cucumber-html-report","json:target/cucumber.json",
		"junit:target/cucumber-results.xml"},monochrome = true)
public class TestRunner {
}

