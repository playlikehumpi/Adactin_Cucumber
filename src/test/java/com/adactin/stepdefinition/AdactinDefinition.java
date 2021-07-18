package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.helper.FileReaderManager;
import com.adactin.pom.Adactin_Search_POM;
import com.adactin.pom.BookHotel_POM;
import com.adactin.pom.SelectHotel_POM;
import com.adactin.pom.loginPage;
import com.adactin.runner.Runner;
import com.baseclass.com.BaseClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AdactinDefinition extends BaseClass {

	public static WebDriver driver = Runner.driver;

	// login POM

	loginPage loginPom = new loginPage(driver);
	Adactin_Search_POM searchPOM = new Adactin_Search_POM(driver);
	SelectHotel_POM selectHotel = new SelectHotel_POM(driver);
	BookHotel_POM book = new BookHotel_POM(driver);

	@Given("^User must launch the login page$")
	public void user_must_launch_the_login_page() throws Throwable {

		String url2 = FileReaderManager.getInstanceFR().getInstanceCR().getUrl();
		openURL(url2);
	}

	@When("^User enter the valid Username in the \"([^\"]*)\" field$")
	public void user_enter_the_valid_Username_in_the_field(String arg1) throws Throwable {
		methodToSendkeys(loginPom.getUsername(), arg1);
	}

	@When("^User enter the valid Password in the \"([^\"]*)\" field$")
	public void user_enter_the_valid_Password_in_the_field(String arg1) throws Throwable {
		methodToSendkeys(loginPom.getPassword(), arg1);
	}

	@Then("^User confirm it and navigated to the search page$")
	public void user_confirm_it_and_navigated_to_the_search_page() throws Throwable {
		methodToClick(loginPom.getLogin());
	}

// Search Page

	@Given("^User must launch the search page$")
	public void user_must_launch_the_search_page() throws Throwable {

	}

	@When("^User select the location from the dropdown$")
	public void user_select_the_location_from_the_dropdown() throws Throwable {
		boolean methodIsMultiple = methodIsMultiple(searchPOM.getLocation());

		if (methodIsMultiple == false) {
			methodToSelectByIndex(searchPOM.getLocation(), 3);
		}

		Thread.sleep(1000);
	}

	@When("^User select the Hotel from the dropdown$")
	public void user_select_the_Hotel_from_the_dropdown() throws Throwable {
		boolean IsMultipleHotel = methodIsMultiple(searchPOM.getHotels());

		if (IsMultipleHotel == false) {
			methodToSelectByIndex(searchPOM.getHotels(), 4);
		}
		Thread.sleep(2000);
	}

	@When("^User select the Room Type from the dropsdown$")
	public void user_select_the_Room_Type_from_the_dropsdown() throws Throwable {
		boolean isMultipleRoomType = methodIsMultiple(searchPOM.getRoom_type());

		if (isMultipleRoomType == false) {
			methodToSelectByIndex(searchPOM.getRoom_type(), 2);
		}

		Thread.sleep(2000);
	}

	@When("^User select the number of rooms from the dropdown$")
	public void user_select_the_number_of_rooms_from_the_dropdown() throws Throwable {
		boolean isMultipleRoomNos = methodIsMultiple(searchPOM.getRoom_nos());

		if (isMultipleRoomNos == false) {
			methodToSelectByIndex(searchPOM.getRoom_nos(), 2);
		}
		Thread.sleep(2000);
	}

	@When("^User select the adults per room from the dropdown$")
	public void user_select_the_adults_per_room_from_the_dropdown() throws Throwable {
		boolean isMultipleAdult = methodIsMultiple(searchPOM.getAdult_room());

		if (isMultipleAdult == false) {
			methodToSelectByIndex(searchPOM.getAdult_room(), 2);
		}
		Thread.sleep(2000);
	}

	@When("^User select the children per room from the dropdown$")
	public void user_select_the_children_per_room_from_the_dropdown() throws Throwable {
		boolean isMultipleChild = methodIsMultiple(searchPOM.getChild_room());

		if (isMultipleChild == false) {
			methodToSelectByIndex(searchPOM.getChild_room(), 1);
		}

		Thread.sleep(2000);
	}

	@Then("^User confirm the BookNow and ANNavigated to Select Hotel$")
	public void user_confirm_the_BookNow_and_ANNavigated_to_Select_Hotel() throws Throwable {
		methodToClick(searchPOM.getSubmit());
	}

	// Select a Hotel

	@Given("^User must launch the select hotel page$")
	public void user_must_launch_the_select_hotel_page() throws Throwable {

	}

	@When("^User click the radio button to continue$")
	public void user_click_the_radio_button_to_continue() throws Throwable {
		methodToClick(selectHotel.getRadiobutton());
		Thread.sleep(2000);
	}

	@Then("^User confirm the Continue and Navigated to Select Hotel$")
	public void user_confirm_the_Continue_and_Navigated_to_Select_Hotel() throws Throwable {

		methodToClick(selectHotel.getContinueClick());
	}

	// Book a Hotel
	@Given("^User enter the fistname in the firstname field$")
	public void user_enter_the_fistname_in_the_firstname_field() throws Throwable {
		methodToSendkeys(book.getFirstname(), "Judit");
	}

	@Given("^User enter the lastname in the lastname field$")
	public void user_enter_the_lastname_in_the_lastname_field() throws Throwable {
		methodToSendkeys(book.getLastname(), "Polgar");
		Thread.sleep(2000);
	}

	@Given("^User enter the address in the address field$")
	public void user_enter_the_address_in_the_address_field() throws Throwable {

		methodToSendkeys(book.getAddress(), "First main road, Chennai");
		Thread.sleep(2000);
	}

	@Given("^User enter the CC_Number in the \"([^\"]*)\" field$")
	public void user_enter_the_CC_Number_in_the_field(String arg1) throws Throwable {
		methodToSendkeys(book.getCc_num(), arg1);
		Thread.sleep(2000);
	}

	@Given("^User select the card type from the dropdown$")
	public void user_select_the_card_type_from_the_dropdown() throws Throwable {

		boolean isMultipleCardType = methodIsMultiple(book.getCardType());

		if (isMultipleCardType == false) {
			methodToSelectByIndex(book.getCardType(), 1);
		}

		Thread.sleep(2000);
	}

	@Given("^User select the Card Month from the dropdown$")
	public void user_select_the_Card_Month_from_the_dropdown() throws Throwable {
		boolean isMultipleMonth = methodIsMultiple(book.getMonth());

		if (isMultipleMonth == false) {
			methodToSelectByIndex(book.getMonth(), 6);
		}
		Thread.sleep(2000);
	}

	@Given("^User select the Card Year from the dropdown$")
	public void user_select_the_Card_Year_from_the_dropdown() throws Throwable {
		boolean isMultipleYear = methodIsMultiple(book.getYear());

		if (isMultipleYear == false) {
			methodToSelectByIndex(book.getYear(),10);
		}
		Thread.sleep(2000);
	}

	@Given("^User enter the valid CCV number in the \"([^\"]*)\" number field$")
	public void user_enter_the_valid_CCV_number_in_the_number_field(String arg1) throws Throwable {
		methodToSendkeys(book.getCVVNumber(),arg1);
		Thread.sleep(2000);
	}

	@Then("^User confirm the BookNow$")
	public void user_confirm_the_BookNow() throws Throwable {
		methodToClick(book.getBook_now());
		Thread.sleep(2000);
	}
	@Then("^User click Itinerary$")
	public void user_click_Itinerary() throws Throwable {
		methodToClick(book.getMy_itinerary());
	}

}
