/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {

    afterEach(() => {
        //Fazer algo depois de CADA cenário
        //cy.screenshot()
    });

    it('Deve fazer login com sucesso Usuário Comun', () => {
        cy.login('teste@teste.com','12345')
        cy.get('h1').should('contain' , 'Serverest Store')
        //cy.get('.lead').should('contain' , 'Este é seu sistema para administrar seu ecommerce.')
    });

    it('Deve validar mensagem de usuário inválido', () => {
        cy.login('dshfsdkfh@teste.com', 'teste@123')
        cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
    
    });

    it('Deve validar mensagem de senha inválida', () => {
        cy.login('fabio@araujo.com', 'tesdfdfte@123')
        cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
    });

    it('Deve fazer login Usuário Adm com sucesso usando fixture', () => {
        // login feito usando fixture, olhar o json na pasta cypress/fixtures
        cy.fixture('loginAdm').then((dadosLogin) =>{
            cy.login(dadosLogin.email, dadosLogin.senha)
        })
        cy.get('h1').should('contain' , 'Bem Vindo')

    });
    
});