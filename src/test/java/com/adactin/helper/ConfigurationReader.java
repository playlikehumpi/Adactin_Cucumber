package com.adactin.helper;

import java.io.File;
import java.io.FileInputStream;

import java.util.Properties;



public class ConfigurationReader {
	public static Properties property;

	public ConfigurationReader() throws Throwable {
		File newfile = new File(
				"F:\\Eclipse Workarea\\AdactinCucumber\\src\\test\\java\\com\\adactin\\properties\\configuration.properties");
		FileInputStream inputStream = new FileInputStream(newfile);

		property = new Properties();

		property.load(inputStream);

	}

	
	public String getBrowser() {
		String browser = property.getProperty("browser");
		return browser;
		
	}
	
	public String getUrl() {
		
		String url = property.getProperty("url");
		return url;
	}
}
