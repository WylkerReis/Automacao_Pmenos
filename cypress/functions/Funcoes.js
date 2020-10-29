import * as telaLogin from "/Users/108466/Documents/Projetos_Cypress/Cypress_casa/cypress/Page/telaLogin";
import * as telaInicial from "/Users/108466/Documents/Projetos_Cypress/Cypress_casa/cypress/Page/telaInicial";

export function matricula(mat=108466) { // Função com a matrícula 
    return mat;
}

export function senha (sen="epm.2020") { // Função com a senha 
    return sen;
}

function baseUrl() { // Função com URL inicial
    cy.visit('http://localhost:3000/#/login')
}

export function login() { // Função realiza Login
    baseUrl()
    telaLogin.assertLogin()
    cy.get('#matricula').type(matricula())
    cy.get('[type=password]').type(senha())
    cy.get('button.btn-primary').click()
    cy.wait
    cy.screenshot()
    cy.url().should('not.eq', baseUrl)
    return cy;
}

export function loginInvalido() { // Função não realiza login
    baseUrl()
    telaLogin.assertLogin()
    cy.get('input#matricula').type(matricula())
    cy.get('[type=password]').type(senha("abc"))
    cy.get('button.btn-primary').click()
    cy.screenshot()
    cy.url().should('contain', '/login')
    return cy;
}

export function imprimeDsm() { // Função para imprimir DSM 
    cy.wait(500)
    telaInicial.assertCabecalho()
    telaInicial.assertProdutoClienteCesta()
    cy.get('#pesquisaCliente').should('be.visible').type('06284679319')
    cy.get('#pesquisaProdutos').should('be.visible')   
    cy.get('.fa-search').should('be.visible') //botão pesquisa produto
    cy.get('.fa-user-plus').should('be.visible') // botão novo cliente
    cy.get('.fa-search-plus').should('be.visible') //botão pesquisa de cliente 
    cy.get('.fa-chevron-circle-right').should('be.visible').click() //botão pesquisa CPF
    cy.wait(2000)
    cy.get('#impressoras').should('be.visible')
    cy.get('#matricula').should('be.visible').type(matricula())
    cy.get('button.btn-danger').should('be.visible') // botão não imprime DSM
    cy.get('button.btn-sucess').should('be.visible')//.click() // botão imprime DSM
    telaInicial.assertInicioCPF
    return cy;
}

export function naoImprimeDsm() { // Função não imprime DSM
    cy.wait(500)
    telaInicial.assertCabecalho()
    telaInicial.assertProdutoClienteCesta()
    cy.get('#pesquisaCliente').should('be.visible').type('06284679319')
    cy.get('#pesquisaProdutos').should('be.visible')
    cy.get('.fa-search').should('be.visible') //botão pesquisa produto
    cy.get('.fa-user-plus').should('be.visible') // botão novo cliente
    cy.get('.fa-search-plus').should('be.visible') //botão pesquisa de cliente 
    cy.get('.fa-chevron-circle-right').should('be.visible').click() //botão pesquisa CPF
    cy.wait(2000)
    cy.get('#impressoras').should('be.visible')
    cy.get('#matricula').should('be.visible')
    cy.get('button.btn-sucess').should('not.be.visible') // botão imprime DSM
    cy.get('button.btn-danger:last-child').should('be.visible').click() // botão não imprime DSM
    cy.get('.fa-search').should('be.visible')
    telaInicial.assertInicioCPF()
    return cy;
}
