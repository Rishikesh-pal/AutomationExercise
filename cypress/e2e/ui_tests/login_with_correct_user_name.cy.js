///<reference types = "cypress"/>

import { HomePageObjects } from "../../page_objects/home_page_objects";
import { LoginPageObject } from "../../page_objects/login_page_objects";

const loginpageobject= new LoginPageObject();
const homepageobject = new HomePageObjects();

let testData;

describe('The Login tests with correct user name and password',()=>{

    before('Get Test data for testing from fixture',()=>{
        cy.fixture('accounts.json').then((data)=>{
            testData = data;
        });
    });

    it('Login',()=>{
        cy.visit('/');
        homepageobject.getFeatureRotator().eq(0).should('be.visible');
        homepageobject.getLoginButton().click();
        cy.url('eq','login');
        loginpageobject.getLoginMailTextBox().type(testData.valid.email);
        loginpageobject.getLoginPassword().type(testData.valid.password);
        loginpageobject.getLoginButton().click();
        homepageobject.getUserName().should('include.text',testData.valid.userName);
    });
});