///<reference types = "cypress"/>

import { faker } from "@faker-js/faker"

const email = faker.internet.email();
let password = faker.internet.password();
let fakeUser;

describe('API test cases',()=>{
    
    it('API 1: Get All Products List',()=>{
        cy.request({
            method: 'GET',
            url: `/api/productsList`
        }).then((getResponse)=>{
            expect(getResponse.status).eq(200);
        });
    });

    it('API 2:  Get All Brands List',()=>{
        cy.request({
            method: 'GET',
            url: `/api/brandsList`,
            body: {
                "search_product" : "top"
            }
        }).then((getResponse)=>{
            expect(getResponse.status).eq(200);
        });
    });

    it('API 3: POST To Search Product',()=>{
        cy.request({
            method : 'POST',
            form: true, 
            body: {
                "search_product" : "jeans"
            },
            headers: {
                "content-type" : "multipart/form-data",
            },
            url: `/api/searchProduct`
        }).then((response)=>{
            expect(response.status).eq(200);      
        });
    });

    it('API 4: POST To Verify Login with valid details',()=>{
        cy.request({
            method : 'POST',
            form: true,
            headers: {
                "Content-Type" : "multipart/form-data"
            },
            url: `/api/verifyLogin`,
            body: {
                email: "Roshan",
                password: "hrx123"
            }   
        }).then((response)=>{
            expect(response.status).eq(200);
        });
    });

    it('API 5: POST To Create/Register User Account',()=>{
        cy.request({
            method : 'POST',
            form : true,
            headers : {
                "Content-Type" : "multipart/form-data"
            },
            url : `/api/createAccount`,
            body : 
            {
                name : faker.internet.userName(),
                email : email,
                password : password,
                title : "Mr",
                birth_date : faker.number.int({ min: 1, max: 30 }),
                birth_month : faker.date.month(),
                birth_year : faker.number.int({ min: 1, max: 80 }),
                firstname : faker.person.firstName(),
                lastname : faker.person.lastName(),
                company : faker.company.buzzNoun(),
                address1 : faker.location.secondaryAddress(),
                address2 : faker.location.secondaryAddress(),
                country : faker.location.country(),
                zipcode : faker.location.zipCode(),
                state : faker.location.state(),
                city : faker.location.city(),
                mobile_number : faker.phone.number()
            }
        }).then((response)=>{
            expect(response.status).eq(200);
        });
    });

    it('API 6: DELETE METHOD To Delete User Account',()=>{
        
        cy.request({
            method : 'DELETE',
            form : true,
            headers : {
                "Content-Type" : "multipart/form-data"
            },
            url : `/api/deleteAccount`,
            body : {
                email : email,
                password : password,
            }
        }).then((response)=>{
            expect(response.status).eq(200);   
        });
    });
});