///<reference types = "cypress"/>

describe('Landing Page Tests',()=>{
    it('Verify Landing page title',()=>{
        cy.visit('/');
        cy.title().should('eq','Automation Exercise');
    });
});