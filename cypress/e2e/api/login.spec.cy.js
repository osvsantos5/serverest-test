/// <reference types="cypress" />

describe('API Login Test', () => {
  it('should successfully log in with valid credentials', () => {
    cy.request({
      method: 'POST',
      url: `https://serverest.dev/login`, // Usando baseUrlBack definido no cypress.config.js
      body: {
        email: 'fulanodasilva@qa.com',
        password: 'teste'
      }
    }).then((response) => {
      // Assert the response status code
      expect(response.status).to.eq(200);

      // Assert the response body contains the expected message
      expect(response.body).to.have.property('message', 'Login realizado com sucesso');

      // Assert the response body contains the authorization token
      expect(response.body).to.have.property('authorization');
      
      // Optionally, print the authorization token
      cy.log('Authorization Token:', response.body.authorization);
      
    });
  });
});
