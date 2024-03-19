export class signupPageObject{

    getHeader(){
        return cy.get('.title.text-center');
    }

    getGenderMale(){
        return cy.get('#id_gender1');
    }

    getGenderFemale(){
        return cy.get('#id_gender2');
    }

    getName(){
        return cy.get('#name');
    }

    getEmail(){
        return cy.get('[data-qa="email"]');
    }

    getPassword(){
        return cy.get('#password');
    }

    getDays(){
        return cy.get('#days');
    }

    getMonths(){
        return cy.get('#months');
    }

    getYear(){
        return cy.get('#years');
    }

    getNewsLetter(){
        return cy.get('#newsletter');
    }

    getSpecialOffers(){
        return cy.get('#optin');
    }

    getFirstName(){
        return cy.get('#first_name');
    }

    getLastName(){
        return cy.get('#last_name');
    }

    getCompany(){
        return cy.get('#company');
    }

    getAddress1(){
        return cy.get('[data-qa="address"]');
    }

    getAddress2(){
        return cy.get('[data-qa="address2"]');
    }

    getCountry(){
        return cy.get('[data-qa="country"]');
    }

    getState(){
        return cy.get('#state');
    }

    getCity(){
        return cy.get('#city');
    }

    getZipCode(){
        return cy.get('#zipcode');
    }

    getMobileNumber(){
        return cy.get('[data-qa="mobile_number"]');
    }

    clickCreateAccount(){
        return cy.get('[data-qa="create-account"]').click();
    }
}