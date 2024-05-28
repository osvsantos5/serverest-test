/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import dadosUsuario from '../../fixtures/usuarios.json';

import CadastroPage from '../../support/pages/cadastro.page';

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('cadastrarusuarios');
    });
    
    it('Deve fazer o cadastro com sucesso (usando método Date.Now)', () => {
        var email = 'fabio' + Date.now() + '@teste.com';
        cy.CadastroUsuarioComum('Fábio Araújo', email, 'teste@123');
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso');
    });

    it('Deve fazer o cadastro com sucesso (usando biblioteca Faker)', () => {
        cy.CadastroUsuarioComum(faker.person.fullName(), faker.internet.email(), faker.internet.password());
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso');
    });

    it.only('Deve validar campo de email inválido', () => {
        const invalidEmail = 'osvsantos5!hotmail.com';
        
        cy.get('[data-testid="email"]').clear().type(invalidEmail);
        cy.get('[data-testid="cadastrar"]').click();

        // Alternativa para validar a mensagem de erro
        cy.get('[data-testid="email"]').then(($input) => {
            // Verifica se o navegador suporta validationMessage
            if ('validationMessage' in $input[0]) {
                const validationMessage = $input[0].validationMessage;
                expect(validationMessage).to.equal("Please include an '@' in the email address. 'osvsantos5!hotmail.com' is missing an '@'.");
                cy.log(validationMessage + 'Usando validationMessage do navegador');
            }
        });
    });

    it('Deve fazer cadastro com sucesso com admin- usando comando Customizado', () => {
        cy.CadastroUsuarioAdmin('Fabio teste', faker.internet.email(), 'senha@123');
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso');
        cy.get('.lead', { timeout: 10000 }).should('contain', 'Este é seu sistema para administrar seu ecommerce.');
    });

    it('Deve fazer cadastro com sucesso sem admin usando comando Customizado', () => {
        cy.CadastroUsuarioComum('Fabio teste', faker.internet.email(), 'senha@123');
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso');
        cy.get('h1', { timeout: 10000 }).should('contain', 'Serverest Store');
    });

    it.skip('Cadastrar usuario com sucesso usando importação de dados', () => {
        cy.CadastroUsuarioComum(dadosUsuario[0].nome, dadosUsuario[0].email, dadosUsuario[0].senha); // deve inserir usuário novo no usuarios.json usuário [0]
        cy.get('h1', { timeout: 10000 }).should('contain', 'Serverest Store');
    });
});

