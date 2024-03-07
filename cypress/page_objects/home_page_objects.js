export class homePageObjects{

    
    getLoginButton(){
        return cy.get('[href="/login"]');
    }

    getFeatureRotator(){
        return cy.get('.carousel-inner');
    }

    getUserName(){
        return cy.get('[class="nav navbar-nav"] li:nth-child(10)> a> b');
    }
} 