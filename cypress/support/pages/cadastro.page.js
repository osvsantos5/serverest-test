class CadastroPage {
    // Método para visitar a URL de cadastro de usuários
    visitarUrl() {
        cy.visit('cadastrarusuarios')
    } 

    // Método para preencher o campo de nome com o texto fornecido
    campoNome(nome) { 
        cy.get('[data-testid="nome"]').clear().type(nome) 
    }

    // Método para preencher o campo de email com o texto fornecido
    campoEmail(email) {
        cy.get('[data-testid="email"]').clear().type(email)
    }

    // Método para preencher o campo de senha com o texto fornecido
    campoSenha(senha) {
        cy.get('[data-testid="password"]').clear().type(senha)
    }

    // Método para marcar a caixa de seleção de admin
    checkAdmin() {
        cy.get('[data-testid="checkbox"]').check()
    }

    // Método para clicar no botão de cadastrar
    btnCadastrar() {
        cy.get('[data-testid="cadastrar"]').click()
    }

    // Método para clicar no link de entrar
    linkEntrar() {
        cy.get('[data-testid="entrar"]').click()
    }

    // Método para realizar o cadastro de um usuário admin
    CadastroUsuarioAdmin(nome, email, senha) {
        this.campoNome(nome)
        this.campoEmail(email)
        this.campoSenha(senha)
        this.checkAdmin()
        this.btnCadastrar()
    }

    // Método para realizar o cadastro de um usuário comum
    CadastroUsuarioComumn(nome, email, senha) {
        this.campoNome(nome)
        this.campoEmail(email)
        this.campoSenha(senha)
        this.btnCadastrar()
    }
}

// Exporta uma instância da classe CadastroPage
export default new CadastroPage;
