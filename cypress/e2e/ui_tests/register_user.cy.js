///<reference types = "cypress"/>


import { faker } from "@faker-js/faker"
import { LoginPageObject } from "../../page_objects/login_page_objects";
import { HomePageObjects } from "../../page_objects/home_page_objects";
import { SignupPageObject } from "../../page_objects/signup_page_object";


const loginPageObject = new LoginPageObject();
const homePageObject = new HomePageObjects();
const signupPageObject = new SignupPageObject();

describe('The register user tests', () => {

    before('Visit to base URL', () => {
        cy.visit('/');
    });

    it('Test', () => {
        homePageObject.getFeatureRotator().eq(0).should('be.visible');
        homePageObject.getLoginButton().click();
        cy.url('eq', 'login');
        loginPageObject.getSignupName().type(faker.internet.userName());
        loginPageObject.getSignupEmail().type(faker.internet.email());
        loginPageObject.clickSignupButton();
        signupPageObject.getHeader().should('have.text','Enter Account Information')
        signupPageObject.getGenderMale().check();
        signupPageObject.getName().should('not.have.value', '');
        signupPageObject.getEmail().should('be.disabled');
        signupPageObject.getPassword().type(faker.internet.password());
        signupPageObject.getDays().select(faker.number.int({ min: 1, max: 30 }));
        signupPageObject.getMonths().select(faker.date.month());
        signupPageObject.getYear().select(faker.number.int({ min: 1, max: 80 }));
        signupPageObject.getNewsLetter().check().should('be.checked');
        signupPageObject.getSpecialOffers().check().should('be.checked');
        signupPageObject.getFirstName().type(faker.person.firstName());
        signupPageObject.getLastName().type(faker.person.lastName());
        signupPageObject.getCompany().type(faker.company.buzzNoun());
        signupPageObject.getAddress1().type(faker.location.secondaryAddress());
        signupPageObject.getAddress2().type(faker.location.secondaryAddress());
        signupPageObject.getCountry().select(faker.number.int({ min: 0, max: 6 }));
        signupPageObject.getState().type(faker.location.state());
        signupPageObject.getCity().type(faker.location.city());
        signupPageObject.getZipCode().type(faker.location.zipCode());
        signupPageObject.getMobileNumber().type(faker.phone.number());
        signupPageObject.clickCreateAccount();
        signupPageObject.getAccountCreationText().should('be.visible');
        signupPageObject.getContinueButton().click();
        homePageObject.getLoginUser().should('include.text', 'Logged in as');
        homePageObject.getDeleteAcoount().click();
        signupPageObject.getAccountDeletedText().should('have.text','Account Deleted!');
        signupPageObject.getContinueButton().click();

    });
});