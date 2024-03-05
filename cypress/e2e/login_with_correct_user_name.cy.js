///<reference types = "cypress"/>

import { loginPageObject } from "../page_objects/login_page_objects";

const loginpageobject= new loginPageObject();

describe('The Login tests with correct user name and password',()=>{
    it('Login',()=>{
        cy.visit('/login');
        cy.url('eq','login');
        loginpageobject.getLoginMailTextBox().type('qwertyuiop@sdfghjkl.com');
        
    });
});