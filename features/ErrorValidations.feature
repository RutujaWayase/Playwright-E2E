Feature: Ecommerce validations
@Validation
@foo

Scenario Outline: Placing the Order
Given a login to Ecommerce2 application with "<username>" and "<password>"
Then Verify Error message is displayed

Examples:
| username          | password    |
#| rahulshettyacademy | Learning@830$3mK2 |
| anshika@gmail.com | Iamking@000 |
| hello@123.com     | Iamhello@12 |


#Scenario: Placing the Order
#Given a login to Ecommerce2 application with "anshika@gmail.com" and "Iamking@000"
#Then Verify Error message is displayed

#Parameterization, parallel, html, rerun failed tests
