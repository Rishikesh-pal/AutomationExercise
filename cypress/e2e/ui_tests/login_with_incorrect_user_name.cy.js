///<reference types = 'cypress'/>

const { HomePageObjects } = require("../../page_objects/home_page_objects");
const { LoginPageObject } = require("../../page_objects/login_page_objects");

const loginpageobject= new LoginPageObject();
const homepageobject = new HomePageObjects();

let testData;

describe('The Login tests with incorrect user name and password',()=>{

    before('Get Test data for testing from fixture',()=>{
        cy.fixture('accounts.json').then((data)=>{
            testData = data;
        });
    });

    it('Test',()=>{
        cy.visit('/');
        homepageobject.getFeatureRotator().eq(0).should('be.visible');
        homepageobject.getLoginButton().click();
        cy.url('eq','login');
        loginpageobject.getLoginMailTextBox().type(testData.invalid.email);
        loginpageobject.getLoginPassword().type(testData.invalid.password);
        loginpageobject.getLoginButton().click();
        loginpageobject.getinvalidMessage().should('have.text','Your email or password is incorrect!');
    });

});