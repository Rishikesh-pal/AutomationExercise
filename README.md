# Automation Exercise Project

This project contains automated tests for the [automationexercise.com](https://www.automationexercise.com/) website. The tests cover both UI and API testing using Cypress.

## Table of Contents
- [Introduction](#introduction)
- [Setup](#setup)
- [Tech Stack](#tech-stack)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Test Cases](#Test-Cases)
- [Contributing](#contributing)

## Introduction

This project aims to automate testing of the `automationexercise.com` website to ensure its functionality, performance, and reliability. The tests are written using Cypress, a modern end-to-end testing framework.

## Setup

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/automation-exercise.git
    ```

2. Navigate to the project directory:

    ```bash
    cd automation-exercise
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Tech Stack

1. Cypress - 12.11.0
2. Faker
3. MochaAwesome reports

## Running Tests

To run the tests, execute the following command:

1. To run in UI mode

     ```bash
    npm run cypress:open 
    ```

2. To run in headless mode

    ```bash
    npm run cypress:run
     ```

## Project Structure
The project is structured as follows:
1. fixtures: Test data in form of key-value pairs for the tests are maintained here.
2. integration: Test cases for the framework are maintained here.
3. support: Reusable methods or customized commands, which can be utilised by test cases directly, without object creation are created here.
4. videos: Executed test steps are recorded in the form of videos and maintained here.
5. node_modules: Project dependencies from the npm are maintained in this folder. It is the heart of the Cypress project execution.
6. cypress.json: Default configurations are set in this folder. The values of the current configurations can be modified here, which overrules the default configurations.
7. package.json: Dependencies and scripts for the projects are maintained in this folder.

## Test Cases

### ***UI Tests :***

**Test Case 1: Register User**
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and email address
7. Click 'Signup' button
8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
9. Fill details: Title, Name, Email, Password, Date of birth
10. Select checkbox 'Sign up for our newsletter!'
11. Select checkbox 'Receive special offers from our partners!'
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Click 'Create Account button'
14. Verify that 'ACCOUNT CREATED!' is visible
15. Click 'Continue' button
16. Verify that 'Logged in as username' is visible
17. Click 'Delete Account' button
18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

**Test Case 2: Login with correct username and email**
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Delete Account' button
10. Verify that 'ACCOUNT DELETED!' is visible

**Test Case 3: Login with correct username and email**
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter incorrect email address and password
7. Click 'login' button
8. Verify error 'Your email or password is incorrect!' is visible


**Test case 4: Logout User**
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Logout' button
10. Verify that user is navigated to login page

 **Test Case 5: Place Order: Register while Checkout**
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Add products to cart
5. Click 'Cart' button
6. Verify that cart page is displayed
7. Click Proceed To Checkout
8. Click 'Register / Login' button
9. Fill all details in Signup and create account
10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
11. Verify ' Logged in as username' at top
12. Click 'Cart' button
13. Click 'Proceed To Checkout' button
14. Verify Address Details and Review Your Order
15. Enter description in comment text area and click 'Place Order'
16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
17. Click 'Pay and Confirm Order' button
18. Verify success message 'Your order has been placed successfully!'
19. Click 'Delete Account' button
20. Verify 'ACCOUNT DELETED!' and click 'Continue' button

### ***API Tests:***

**API 1: Get All Products List** 
- API URL: https://automationexercise.com/api/productsList
- Request Method: GET
- Response Code: 200
- Response JSON: All products list


**API 2:  Get All Brands List**
- API URL: https://automationexercise.com/api/brandsList
- Request Method: GET
- Response Code: 200
- Response JSON: All brands list

**API 3: POST To Search Product**
- API URL: https://automationexercise.com/api/searchProduct
- Request Method: POST
- Request Parameter: search_product (For example: top, tshirt, jean)
- Response Code: 200
- Response JSON: Searched products list

**API 4: POST To Verify Login with valid details**
- API URL: https://automationexercise.com/api/verifyLogin
- Request Method: POST
- Request Parameters: email, password
- Response Code: 200
- Response Message: User exists!

**API 5: POST To Create/Register User Account**
- API URL: https://automationexercise.com/api/createAccount
- Request Method: POST
- Request Parameters: name, email, password, title (for example: Mr, Mrs, Miss), birth_date, birth_month, birth_year, firstname,lastname, company, address1, address2, country, zipcode, state, city, mobile_number
- Response Code: 201
- Response Message: User created!

**API 6: DELETE METHOD To Delete User Account**
- API URL: https://automationexercise.com/api/deleteAccount
- Request Method: DELETE
- Request Parameters: email, password
- Response Code: 200
- Response Message: Account deleted!

## Contributing
If you wish to contribute to this project, you can follow these steps:

1. Fork the repository on GitHub.
2. Make the necessary changes or additions to the codebase.
3. Commit and push your changes to your forked repository.
4. Submit a pull request, explaining the changes you made and why they should be merged.