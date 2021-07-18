package com.adactin.helper;

public class FileReaderManager {

	private FileReaderManager() {

	}

	public static FileReaderManager getInstanceFR() {

		FileReaderManager fileReaderManager = new FileReaderManager();
		return fileReaderManager;

	}

	public ConfigurationReader getInstanceCR() throws Throwable {

		ConfigurationReader cReader = new ConfigurationReader();
		return cReader;

	}

}
