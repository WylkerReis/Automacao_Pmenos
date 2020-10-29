/// <reference types ="Cypress"/>
import * as telaInicial from "/Users/108466/Documents/Projetos_Cypress/Cypress_casa/cypress/Page/telaInicial";

export function assertCliqueRetire() {
    cy.url().should('contain.text', '/delivery-pedidos-list')
    telaInicial.assertCabecalho() 
    assertLblNumeroPedido()
    assertCampoNumeroPedido()
    assertLblNumeroCpf()
    assertCampoCpf()
    assertLblNomeCliente()
    assertCampoNomeCliente()
    assertLblAtualizacaoAutomatica()
    assertListaCliqueRetire()
}

// Funções com assert dos campos da tela
export function assertLblNumeroPedido() {cy.get(':nth-child(2) > .form-group > .control-label').should('contain.text','Pedido')} // Label número pedido
export function assertCampoNumeroPedido() {cy.get('#numero-pedido').should('be.visible')} // Campo número pedido
export function assertLblNumeroCpf() {cy.get(':nth-child(3) > .form-group > .control-label').should('contain.text', 'CPF')} // Label número CPF
export function assertCampoCpf() {cy.get('#numero-cpf').should('be.visible')} // Campo CPF
export function assertLblNomeCliente() {cy.get('.col-sm-5 > .form-group > .control-label').should('have.text','Nome')} // Label nome cliente 
export function assertCampoNomeCliente() {cy.get('#nome-cliente').should('be.visible')} // Campo nome cliente
export function assertLblAtualizacaoAutomatica() {cy.get(':nth-child(1) > tr > .text-right').should('contain.text','Atualização automática')} // Label atualização automática
export function assertListaCliqueRetire() {cy.get('#painelProdutoCelular > .container-fluid > :nth-child(2)').should('not.be.empty')} // Lista pedidos clique e retire

// Funções com chamada de campos
export function assertCampoNumeroPedido() {cy.get('#numero-pedido')} // Campo número pedido
export function assertCampoCpf() {cy.get('#numero-cpf')} // Campo CPF
export function assertCampoNomeCliente() {cy.get('#nome-cliente')} // Campo nome cliente
export function assertListaCliqueRetire() {cy.get('#painelProdutoCelular > .container-fluid > :nth-child(2)')} // Lista pedidos clique e retire