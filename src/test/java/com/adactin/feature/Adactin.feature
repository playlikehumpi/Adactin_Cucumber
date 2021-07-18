Feature: Testing the booking functionality of Adactin Hotel Management application

Scenario Outline: User Checking the login functionality using the login username and password

Given  User must launch the login page
When User enter the valid Username in the "<Username>" field
And User enter the valid Password in the "<Password>" field
Then User confirm it and navigated to the search page


Examples: 
|Username||Password|
|455||451|
|4656||5545|
|testnggit||testng|


Scenario: User checking the Search functionality by selecting location,Hotel ,  room type , number of rooms,Check-In date, Check-Out Date, Adults per room, Children per Room
 

Given User must launch the search page
When User select the location from the dropdown
And User select the Hotel from the dropdown
And User select the Room Type from the dropsdown
And User select the number of rooms from the dropdown
And User select the adults per room from the dropdown
And User select the children per room from the dropdown
Then User confirm the BookNow and ANNavigated to Select Hotel
 


Scenario: User Cheking the Select Hotel functionality by Selecting the radio button to continue booking

Given User must launch the select hotel page
When User click the radio button to continue
Then User confirm the Continue and Navigated to Select Hotel


Scenario Outline: User checking the Bookingh functionality by selecting location,Hotel ,  room type , number of rooms, Adult rooms, Child Rooms, 
first name, last name, address , CC_Number, Card type, Card Month, Card Year , CVV Number

Given User must launch the search page
When User enter the fistname in the firstname field
And User enter the lastname in the lastname field
And User enter the address in the address field
And User enter the CC_Number in the "<CC_Number>" field
And User select the card type from the dropdown
And User select the Card Month from the dropdown
And User select the Card Year from the dropdown
And User enter the valid CCV number in the "<CCV>" number field
And User confirm the BookNow 
Then User click Itinerary

Examples:
|CC_Number||CCV|
|12345678901323456||1234|



















