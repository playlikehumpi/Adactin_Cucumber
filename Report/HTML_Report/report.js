$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Testing the booking functionality of Adactin Hotel Management application",
  "description": "",
  "id": "testing-the-booking-functionality-of-adactin-hotel-management-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User Checking the login functionality using the login username and password",
  "description": "",
  "id": "testing-the-booking-functionality-of-adactin-hotel-management-application;user-checking-the-login-functionality-using-the-login-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User must launch the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter the valid Username in the \"\u003cUsername\u003e\" field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter the valid Password in the \"\u003cPassword\u003e\" field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User confirm it and navigated to the search page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "testing-the-booking-functionality-of-adactin-hotel-management-application;user-checking-the-login-functionality-using-the-login-username-and-password;",
  "rows": [
    {
      "cells": [
        "Username",
        "",
        "Password"
      ],
      "line": 12,
      "id": "testing-the-booking-functionality-of-adactin-hotel-management-application;user-checking-the-login-functionality-using-the-login-username-and-password;;1"
    },
    {
      "cells": [
        "455",
        "",
        "451"
      ],
      "line": 13,
      "id": "testing-the-booking-functionality-of-adactin-hotel-management-application;user-checking-the-login-functionality-using-the-login-username-and-password;;2"
    },
    {
      "cells": [
        "4656",
        "",
        "5545"
      ],
      "line": 14,
      "id": "testing-the-booking-functionality-of-adactin-hotel-management-application;user-checking-the-login-functionality-using-the-login-username-and-password;;3"
    },
    {
      "cells": [
        "testnggit",
        "",
        "testng"
      ],
      "line": 15,
      "id": "testing-the-booking-functionality-of-adactin-hotel-management-application;user-checking-the-login-functionality-using-the-login-username-and-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "User Checking the login functionality using the login username and password",
  "description": "",
  "id": "testing-the-booking-functionality-of-adactin-hotel-management-application;user-checking-the-login-functionality-using-the-login-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User must launch the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter the valid Username in the \"455\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter the valid Password in the \"451\" field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User confirm it and navigated to the search page",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinDefinition.user_must_launch_the_login_page()"
});
formatter.result({
  "duration": 2548445500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "455",
      "offset": 38
    }
  ],
  "location": "AdactinDefinition.user_enter_the_valid_Username_in_the_field(String)"
});
formatter.result({
  "duration": 500440200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "451",
      "offset": 38
    }
  ],
  "location": "AdactinDefinition.user_enter_the_valid_Password_in_the_field(String)"
});
formatter.result({
  "duration": 96088400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_confirm_it_and_navigated_to_the_search_page()"
});
formatter.result({
  "duration": 338557900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User Checking the login functionality using the login username and password",
  "description": "",
  "id": "testing-the-booking-functionality-of-adactin-hotel-management-application;user-checking-the-login-functionality-using-the-login-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User must launch the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter the valid Username in the \"4656\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter the valid Password in the \"5545\" field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User confirm it and navigated to the search page",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinDefinition.user_must_launch_the_login_page()"
});
formatter.result({
  "duration": 347878500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4656",
      "offset": 38
    }
  ],
  "location": "AdactinDefinition.user_enter_the_valid_Username_in_the_field(String)"
});
formatter.result({
  "duration": 89435200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5545",
      "offset": 38
    }
  ],
  "location": "AdactinDefinition.user_enter_the_valid_Password_in_the_field(String)"
});
formatter.result({
  "duration": 100022500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_confirm_it_and_navigated_to_the_search_page()"
});
formatter.result({
  "duration": 433927600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User Checking the login functionality using the login username and password",
  "description": "",
  "id": "testing-the-booking-functionality-of-adactin-hotel-management-application;user-checking-the-login-functionality-using-the-login-username-and-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User must launch the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter the valid Username in the \"testnggit\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter the valid Password in the \"testng\" field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User confirm it and navigated to the search page",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinDefinition.user_must_launch_the_login_page()"
});
formatter.result({
  "duration": 391138500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testnggit",
      "offset": 38
    }
  ],
  "location": "AdactinDefinition.user_enter_the_valid_Username_in_the_field(String)"
});
formatter.result({
  "duration": 118305700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testng",
      "offset": 38
    }
  ],
  "location": "AdactinDefinition.user_enter_the_valid_Password_in_the_field(String)"
});
formatter.result({
  "duration": 111380700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_confirm_it_and_navigated_to_the_search_page()"
});
formatter.result({
  "duration": 2333917400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User checking the Search functionality by selecting location,Hotel ,  room type , number of rooms,Check-In date, Check-Out Date, Adults per room, Children per Room",
  "description": "",
  "id": "testing-the-booking-functionality-of-adactin-hotel-management-application;user-checking-the-search-functionality-by-selecting-location,hotel-,--room-type-,-number-of-rooms,check-in-date,-check-out-date,-adults-per-room,-children-per-room",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "User must launch the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User select the location from the dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User select the Hotel from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User select the Room Type from the dropsdown",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User select the number of rooms from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User select the adults per room from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User select the children per room from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User confirm the BookNow and ANNavigated to Select Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinDefinition.user_must_launch_the_search_page()"
});
formatter.result({
  "duration": 1316700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_select_the_location_from_the_dropdown()"
});
formatter.result({
  "duration": 1299631600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_select_the_Hotel_from_the_dropdown()"
});
formatter.result({
  "duration": 2310287900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_select_the_Room_Type_from_the_dropsdown()"
});
formatter.result({
  "duration": 2233776700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_select_the_number_of_rooms_from_the_dropdown()"
});
formatter.result({
  "duration": 2252393100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_select_the_adults_per_room_from_the_dropdown()"
});
formatter.result({
  "duration": 2240434300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_select_the_children_per_room_from_the_dropdown()"
});
formatter.result({
  "duration": 2221650000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_confirm_the_BookNow_and_ANNavigated_to_Select_Hotel()"
});
formatter.result({
  "duration": 933937300,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "User Cheking the Select Hotel functionality by Selecting the radio button to continue booking",
  "description": "",
  "id": "testing-the-booking-functionality-of-adactin-hotel-management-application;user-cheking-the-select-hotel-functionality-by-selecting-the-radio-button-to-continue-booking",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "User must launch the select hotel page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User click the radio button to continue",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User confirm the Continue and Navigated to Select Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinDefinition.user_must_launch_the_select_hotel_page()"
});
formatter.result({
  "duration": 877700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_click_the_radio_button_to_continue()"
});
formatter.result({
  "duration": 2074238900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_confirm_the_Continue_and_Navigated_to_Select_Hotel()"
});
formatter.result({
  "duration": 559591700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "User checking the Bookingh functionality by selecting location,Hotel ,  room type , number of rooms, Adult rooms, Child Rooms,",
  "description": "first name, last name, address , CC_Number, Card type, Card Month, Card Year , CVV Number",
  "id": "testing-the-booking-functionality-of-adactin-hotel-management-application;user-checking-the-bookingh-functionality-by-selecting-location,hotel-,--room-type-,-number-of-rooms,-adult-rooms,-child-rooms,",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "User must launch the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "User enter the fistname in the firstname field",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User enter the lastname in the lastname field",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User enter the address in the address field",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User enter the CC_Number in the \"\u003cCC_Number\u003e\" field",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User select the card type from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User select the Card Month from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User select the Card Year from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User enter the valid CCV number in the \"\u003cCCV\u003e\" number field",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User confirm the BookNow",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User click Itinerary",
  "keyword": "Then "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "testing-the-booking-functionality-of-adactin-hotel-management-application;user-checking-the-bookingh-functionality-by-selecting-location,hotel-,--room-type-,-number-of-rooms,-adult-rooms,-child-rooms,;",
  "rows": [
    {
      "cells": [
        "CC_Number",
        "",
        "CCV"
      ],
      "line": 55,
      "id": "testing-the-booking-functionality-of-adactin-hotel-management-application;user-checking-the-bookingh-functionality-by-selecting-location,hotel-,--room-type-,-number-of-rooms,-adult-rooms,-child-rooms,;;1"
    },
    {
      "cells": [
        "12345678901323456",
        "",
        "1234"
      ],
      "line": 56,
      "id": "testing-the-booking-functionality-of-adactin-hotel-management-application;user-checking-the-bookingh-functionality-by-selecting-location,hotel-,--room-type-,-number-of-rooms,-adult-rooms,-child-rooms,;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 56,
  "name": "User checking the Bookingh functionality by selecting location,Hotel ,  room type , number of rooms, Adult rooms, Child Rooms,",
  "description": "first name, last name, address , CC_Number, Card type, Card Month, Card Year , CVV Number",
  "id": "testing-the-booking-functionality-of-adactin-hotel-management-application;user-checking-the-bookingh-functionality-by-selecting-location,hotel-,--room-type-,-number-of-rooms,-adult-rooms,-child-rooms,;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "User must launch the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "User enter the fistname in the firstname field",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User enter the lastname in the lastname field",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User enter the address in the address field",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User enter the CC_Number in the \"12345678901323456\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User select the card type from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User select the Card Month from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User select the Card Year from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User enter the valid CCV number in the \"1234\" number field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User confirm the BookNow",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User click Itinerary",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinDefinition.user_must_launch_the_search_page()"
});
formatter.result({
  "duration": 2546400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_enter_the_fistname_in_the_firstname_field()"
});
formatter.result({
  "duration": 100726900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_enter_the_lastname_in_the_lastname_field()"
});
formatter.result({
  "duration": 2145518700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_enter_the_address_in_the_address_field()"
});
formatter.result({
  "duration": 2165456000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678901323456",
      "offset": 33
    }
  ],
  "location": "AdactinDefinition.user_enter_the_CC_Number_in_the_field(String)"
});
formatter.result({
  "duration": 2150058600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_select_the_card_type_from_the_dropdown()"
});
formatter.result({
  "duration": 2250908000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_select_the_Card_Month_from_the_dropdown()"
});
formatter.result({
  "duration": 2323131300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_select_the_Card_Year_from_the_dropdown()"
});
formatter.result({
  "duration": 2352435200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 40
    }
  ],
  "location": "AdactinDefinition.user_enter_the_valid_CCV_number_in_the_number_field(String)"
});
formatter.result({
  "duration": 2102524200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_confirm_the_BookNow()"
});
formatter.result({
  "duration": 2075041100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinDefinition.user_click_Itinerary()"
});
formatter.result({
  "duration": 246698500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#my_itinerary\"}\n  (Session info: chrome\u003d91.0.4472.164)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-BQF3QLV5\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.164, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:55715}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d5fbacb4162921465b0fe6da510e77cc\n*** Element info: {Using\u003did, value\u003dmy_itinerary}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.baseclass.com.BaseClass.methodToClick(BaseClass.java:40)\r\n\tat com.adactin.stepdefinition.AdactinDefinition.user_click_Itinerary(AdactinDefinition.java:214)\r\n\tat ✽.Then User click Itinerary(Adactin.feature:52)\r\n",
  "status": "failed"
});
});