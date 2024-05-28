class LoginPage{

    visitarUrl() {
        cy.visit('')
    } 
    // Método para preencher o campo de email com o texto fornecido
    campoEmail(email) { 
        cy.get('[data-testid="email"]').clear().type(email) 
    }

    // Método para preencher o campo de senha com o texto fornecido
    campoSenha(senha) {
        cy.get('[data-testid="senha"]').clear().type(senha)
    }

    // Método para clicar no botão de entrar
    btnEntrar() {
        cy.get('[data-testid="entrar"]').click()
    }

    // Método para clicar no link de cadastrar
    linkCadastrar() {
        cy.get('[data-testid="cadastrar"]').click()
    }

    // Método para realizar o cadastro de um usuário admin
    LoginUsuario(email, senha) {
        this.campoEmail(email)
        this.campoSenha(senha)
        this.btnEntrar()
    }

}

// Exporta uma instância da classe CadastroPage
export default new LoginPage;