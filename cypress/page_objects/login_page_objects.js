export class LoginPageObject{

    getLoginMailTextBox(){
        return cy.get('[data-qa="login-email"]');
    }

    getLoginPassword(){
        return cy.get('[data-qa="login-password"]');
    }

    getLoginButton(){
        return cy.get('[data-qa="login-button"]');
    }

    getinvalidMessage(){
        return cy.get('[action="/login"]> p');
    }

    getSignupName(){
        return cy.get('[data-qa="signup-name"]');
    }

    getSignupEmail(){
        return cy.get('[data-qa="signup-email"]');
    }

    clickSignupButton(){
        return cy.get('[data-qa="signup-button"]').click();
    }
}