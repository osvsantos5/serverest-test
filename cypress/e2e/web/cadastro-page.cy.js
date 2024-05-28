/// <reference types="cypress" />

import CadastroPage from '../../support/pages/cadastro.page'

describe('Funcionalidade: Cadastro - Usando Pages Objects', () => {
    beforeEach(() => {
        CadastroPage.visitarUrl()
    });

    it('Cadastro de usuário admin com sucesso', () => {
        var email = `OsvaldoSantos${Date.now()}@teste.com`
        CadastroPage.CadastroUsuarioAdmin('Osvaldo Santos teste Page', email, 'teste@123')
        cy.get('.lead',{timeout: 10000}).should('contain', 'Este é seu sistema para administrar seu ecommerce.')
    });

    it('Cadastro de usuário admin com sucesso ja cadastrado', () => {
        var email = `fulanodasilva@qa.com`
        CadastroPage.CadastroUsuarioAdmin('Osvaldo Santos teste Page', email, 'teste')
        cy.get('.alert',{timeout: 10000}).should('contain', 'Este email já está sendo usado')
        
    });
        
    it('Cadastro de usuário comum com sucesso', () => {
        var email = `OsvaldoSantos${Date.now()}@teste.com`
        CadastroPage.CadastroUsuarioComumn('Osvaldo Santos teste comum', email, 'teste@123')
    });

    it('Cadastro de usuário comum com sucesso ja cadastrado', () => {
        var email = `fabio@araujo.com`
        CadastroPage.CadastroUsuarioAdmin('Osvaldo Santos teste Page', email, 'teste')
        cy.get('.alert',{timeout: 10000}).should('contain', 'Este email já está sendo usado')
        
    });

    
    it('Deve validar a obrigatoriedade dos campos', () => {
        CadastroPage.btnCadastrar();
        cy.get('.form > :nth-child(3)').should('contain', 'Nome é obrigatório');
        cy.get('.form > :nth-child(4)').should('contain', 'Email é obrigatório');
        cy.get('.form > :nth-child(5)').should('contain', 'Password é obrigatório');
    });

    it('Link Entrar', () => {
        CadastroPage.linkEntrar();
        cy.get('.font-robot').should('contain', 'Login');
    });

});