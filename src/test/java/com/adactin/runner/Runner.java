package com.adactin.runner;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;


import com.adactin.helper.FileReaderManager;
import com.baseclass.com.BaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = "src\\test\\java\\com\\adactin\\feature", glue = "com\\adactin\\stepdefinition",
////monochrome = true, dryRun=false, strict =true, 
		plugin = { "html:Report/HTML_Report", "pretty", "html:report",
				"com.cucumber.listener.ExtentCucumberFormatter:Reports/ExtentReport.html" })

public class Runner {
	public static WebDriver driver;

	@BeforeClass
	public static void setUp() throws Throwable {
		String browser = FileReaderManager.getInstanceFR().getInstanceCR().getBrowser();

		driver = BaseClass.browserLaunch(browser);

	}

}
