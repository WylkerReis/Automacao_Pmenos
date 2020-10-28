/// <reference types ="Cypress"/>
import * as telaInicial from "/Users/108466/Documents/Projetos_Cypress/Cypress_casa/cypress/Page/telaInicial";

export function assertTelaPreVendas() {
    telaInicial.assertCabecalho()
    telaInicial.assertProdutoClienteCesta()
}

export function assertQtdesPreVendas() {
    cy.get(':nth-child(1) > :nth-child(1) > .cartao-borda').should('be.visible') // qtde Criados
    cy.get(':nth-child(2) > :nth-child(1) > .cartao-borda').should('be.visible') // qtde Impressos
    cy.get(':nth-child(3) > :nth-child(1) > .cartao-borda').should('be.visible') // qtde Separados
    cy.get(':nth-child(4) > :nth-child(1) > .cartao-borda').should('be.visible') // qtde Faturados
    cy.get(':nth-child(5) > :nth-child(1) > .cartao-borda').should('be.visible') // qtde Roteirizados
    cy.get(':nth-child(6) > :nth-child(1) > .cartao-borda').should('be.visible') // qtde Despachados
    cy.get(':nth-child(7) > :nth-child(1) > .cartao-borda').should('be.visible') // qtde Entregues 
    cy.get(':nth-child(8) > :nth-child(1) > .cartao-borda').should('be.visible') // qtde Cancelados
}

export function assertBuscaPrevendas() {
    cy.get(':nth-child(1) > .control-label').should('be', 'CPF') // label CPF
    cy.get('.row > :nth-child(1) > .form-control').should('be.visible')// campo CPF 
    cy.get(':nth-child(2) > .control-label').should('be', 'Nascimento') // label Nascimento 
    cy.get(':nth-child(2) > .form-control').should('be.visible') // campo Nascimento 
    cy.get(':nth-child(3) > .control-label').should('be', 'Loja') // label loja
    cy.get(':nth-child(3) > .form-control').should('be.visible') // campo loja
    cy.get(':nth-child(4) > .control-label').should('be', '') // label Vendedor/Atendente 
    cy.get(':nth-child(4) > .form-control').should('be.visible') // campo Vendedor/Atendente 
    cy.get(':nth-child(5) > .control-label').should('be.visible') // label comanda
    cy.get(':nth-child(5) > .form-control').should('be.visible') // campo comanda
    cy.get(':nth-child(6) > .control-label').should('be.visible') // label Status pré-venda
    cy.get(':nth-child(6) > .form-control').should('be.visible') // campo Status pré-venda
    cy.get(':nth-child(7) > .control-label').should('be.visible') // label período incial
    cy.get(':nth-child(7) > .form-control').should('be.visible') // campo período incial
    cy.get(':nth-child(8) > .control-label').should('be.visible') // label período final
    cy.get(':nth-child(8) > .form-control').should('be.visible') // campo período final
}