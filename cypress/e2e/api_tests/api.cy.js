///<reference types = "cypress"/>

const url = 'https://automationexercise.com/';

describe('API test cases',()=>{
    it('API 1: Get All Products List',()=>{
        cy.request({
            method: 'GET',
            url: `${url}/api/productsList`
        }).then((getResponse)=>{
            expect(getResponse.status).eq(200);
        });
    });

    it('API 2:  Get All Brands List',()=>{
        cy.request({
            method: 'GET',
            url: `${url}/api/brandsList`,
            body: {
                "search_product" : "top"
            }
        }).then((getResponse)=>{
            expect(getResponse.status).eq(200);
        });
    });

    it('API 3: POST To Search Product',()=>{
        cy.request({
            headers: {
                "Content-Type" : "multipart/form-data",
            },
            url: `${url}/api/searchProduct`,
            body: {
                "search_product" : "jeans"
            }
        }).then((getResponse)=>{
            expect(getResponse.status).eq(200);  
            expect(getResponse.body.products,'exist');         
        });
    });

    it('API 4: POST To Verify Login with valid details',()=>{
        cy.request({
            headers: {
                "Content-Type" : "multipart/form-data"
            },
            url: `${url}/api/verifyLogin`,
            body: {
                email: "Test007@gmail.com",
                password: "test"
            }   
        }).then((getResponse)=>{
            expect(getResponse.status).eq(200);
            expect(getResponse.body.message).include('User exists!');
            expect(getResponse.body.responseCode).include(200);
        });
    });

    // it('')


});