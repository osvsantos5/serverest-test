class ListarComprasPage{

    visitarUrl() {
        cy.visit('minhaListaDeProdutos')
    }
  

}

// Exporta uma instância da classe CadastroPage
export default new ListarComprasPage;