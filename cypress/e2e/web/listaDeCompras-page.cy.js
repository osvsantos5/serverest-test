/// <reference types="cypress" />
import loginPage from '../../support/pages/login.page';
import ListarComprasPage from '../../support/pages/listarCompras.page';

describe('Funcionalidade: Lista de compras', () => {

  beforeEach(() => {

    loginPage.visitarUrl()
    loginPage.LoginUsuario('Vicenta_Armstrong@marquis.com','12345')
    cy.get('h1',{timeout: 10000}).should('contain', 'Serverest')
  });

  it('Validar entrada na lista de compras', () => {

    ListarComprasPage.visitarUrl();
    cy.get('h1').should('contain', 'Lista de Compras');
    cy.url().should('contain', 'minhaListaDeProdutos');
  });

});