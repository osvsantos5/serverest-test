/// <reference types="cypress" />

import loginPage from '../../support/pages/login.page';
import CadastroPage from '../../support/pages/login.page'

describe('Funcionalidade: Login - Usando Pages Objects', () => {
    beforeEach(() => {
        loginPage.visitarUrl()
    });

    it('Login de usuário admin com sucesso', () => {
        loginPage.LoginUsuario('beltrane@qa.com.br','teste')
        cy.get('h1',{timeout: 10000}).should('contain', 'Bem Vindo')
    });

    it('Login de usuário comum com sucesso', () => {
        loginPage.LoginUsuario('Vicenta_Armstrong@marquis.com','12345')
        cy.get('h1',{timeout: 10000}).should('contain', 'Serverest')
    });

    it('Login campos em branco', () => {
       loginPage.btnEntrar()
       cy.get(':nth-child(3) > :nth-child(2)',{timeout: 10000}).should('contain', 'Email é obrigatório')
       cy.get(':nth-child(4) > :nth-child(2)',{timeout: 10000}).should('contain', 'Password é obrigatório')
      
    });
    it('Link Cadastrar', () => {
       loginPage.linkCadastrar()
       
    });

});