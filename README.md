#This repository contain Automation project on automationexercise.com that isan e-comerce website

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
- [License](#license)

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
3. Mochaawesome reports
4. 

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

## Contributing
If you wish to contribute to this project, you can follow these steps:

1. Fork the repository on GitHub.
2. Make the necessary changes or additions to the codebase.
3. Commit and push your changes to your forked repository.
4. Submit a pull request, explaining the changes you made and why they should be merged.