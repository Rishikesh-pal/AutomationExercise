export class loginPageObject{
    getLoginMailTextBox(){
        return cy.get('[data-qa="login-email"]');
    }
}