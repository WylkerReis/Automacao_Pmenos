/// <reference types ="Cypress"/>

export function assertConfigDesconto() {
    assertModalConfigDesconto()
    assertLblConfigDesconto()
    assertBtnFecharModalConfigDesconto()
    assertTableConfigDesconto()
    assertBtnFecharConfigDesconto()
}

//Funções com assert do modal Configura Desconto
export function assertModalConfigDesconto() {cy.get('.ReactModal__Content').should('be.visible')} //modal configuração desconto 
export function assertLblConfigDesconto() {cy.get('.modal-title').should('contain.text','Configuração Aplicação Desconto Manual:')} // Label configuração aplicação de desconto
export function assertBtnFecharModalConfigDesconto() {cy.get('.close').should('be.visible')} // Botão X
export function assertTableConfigDesconto() {cy.get('.modal-loja-body').should('not.be.empty')} // Tabela com configurações de desconto,
export function assertBtnFecharConfigDesconto() {cy.get('.modal-footer > .btn').should('be.visible')} // Botão Fechar

//Funções com chamadas do modal Configura Desconto
export function btnFecharModalConfigDesconto() {cy.get('.close')} // Botão X
export function btnFecharConfigDesconto() {cy.get('.modal-footer > .btn')} // Botão Fechar