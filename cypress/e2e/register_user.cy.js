///<reference types = "cypress"/>

import { homePageObjects } from "../page_objects/home_page_objects";
import { loginPageObject } from "../page_objects/login_page_objects";
import { faker } from "@faker-js/faker"
import { signupPageObject } from "../page_objects/signup_page_object";

const loginpageobject = new loginPageObject();
const homepageobject = new homePageObjects();
const signuppageobject = new signupPageObject();

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'New User Signup!' is visible
// 6. Enter name and email address
// 7. Click 'Signup' button
// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
// 9. Fill details: Title, Name, Email, Password, Date of birth
// 10. Select checkbox 'Sign up for our newsletter!'
// 11. Select checkbox 'Receive special offers from our partners!'
// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
// 13. Click 'Create Account button'
// 14. Verify that 'ACCOUNT CREATED!' is visible
// 15. Click 'Continue' button
// 16. Verify that 'Logged in as username' is visible
// 17. Click 'Delete Account' button
// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button



describe('The register user tests', () => {

    before('Get Test data for testing from fixture', () => {
        cy.visit('/');
    });

    it('Test', () => {
        homepageobject.getFeatureRotator().eq(0).should('be.visible');
        homepageobject.getLoginButton().click();
        cy.url('eq', 'login');
        loginpageobject.getSignupName().type(faker.internet.userName());
        loginpageobject.getSignupEmail().type(faker.internet.email());
        loginpageobject.clickSignupButton();
        // signuppageobject.getHeader().eq(0).children().should('have.css','<b>');
        signuppageobject.getGenderMale().check();
        signuppageobject.getName().should('not.have.value', '');
        signuppageobject.getEmail().should('be.disabled');
        signuppageobject.getPassword().type(faker.internet.password());
        signuppageobject.getDays().select(faker.number.int({ min: 1, max: 30 }));
        signuppageobject.getMonths().select(faker.date.month());
        signuppageobject.getYear().select(faker.number.int({ min: 1, max: 80 }));
        signuppageobject.getNewsLetter().check().should('be.checked');
        signuppageobject.getSpecialOffers().check().should('be.checked');
        signuppageobject.getFirstName().type(faker.person.firstName());
        signuppageobject.getLastName().type(faker.person.lastName());
        signuppageobject.getCompany().type(faker.company.buzzNoun());
        signuppageobject.getAddress1().type(faker.location.secondaryAddress());
        signuppageobject.getAddress2().type(faker.location.secondaryAddress());
        signuppageobject.getCountry().select(faker.number.int({ min: 0, max: 6 }));
        signuppageobject.getState().type(faker.location.state());
        signuppageobject.getCity().type(faker.location.city());
        signuppageobject.getZipCode().type(faker.location.zipCode());
        signuppageobject.getMobileNumber().type(faker.phone.number());
        signuppageobject.clickCreateAccount();

    });
});