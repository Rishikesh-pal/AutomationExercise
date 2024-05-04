export class HomePageObjects{
    
    getLoginButton(){
        return cy.get('[href="/login"]');
    }

    getFeatureRotator(){
        return cy.get('.carousel-inner');
    }

    getUserName(){
        return cy.get('[class="nav navbar-nav"] li:nth-child(10)> a> b');
    }

    getLoginUser(){
        return cy.get('li:nth-child(10)').children();
    }

    getDeleteAcoount(){
        return cy.get('.nav.navbar-nav li:nth-child(5)');
    }

    getCart(){
        return cy.get('li:nth-child(3)> a');
    }

    getProductToCart(){
        return cy.get('[data-product-id="1"]').eq(1).click();
    }
} 