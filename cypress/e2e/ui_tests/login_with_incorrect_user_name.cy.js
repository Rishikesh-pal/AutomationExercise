///<reference types = 'cypress'/>

import { homePageObjects } from "../page_objects/home_page_objects";
import { loginPageObject } from "../page_objects/login_page_objects";

const loginpageobject= new loginPageObject();
const homepageobject = new homePageObjects();

let testData;

describe('The Login tests with incorrect user name and password',()=>{

    before('Get Test data for testing from fixture',()=>{
        cy.fixture('accounts.json').then((data)=>{
            testData = data;
        });
    });

    it('Test',()=>{
        w
        homepageobject.getFeatureRotator().eq(0).should('be.visible');
        homepageobject.getLoginButton().click();
        cy.url('eq','login');
        loginpageobject.getLoginMailTextBox().type(testData.invalid.email);
        loginpageobject.getLoginPassword().type(testData.invalid.password);
        loginpageobject.getLoginButton().click();
        loginpageobject.getinvalidMessage().should('have.text','Your email or password is incorrect!');
    });

});