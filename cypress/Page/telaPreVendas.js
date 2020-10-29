/// <reference types ="Cypress"/>
import * as telaInicial from "/Users/108466/Documents/Projetos_Cypress/Cypress_casa/cypress/Page/telaInicial";

export function assertTelaPreVendas() { //Função valida componentes tela de pré-vendas 
    telaInicial.assertCabecalho()
    telaInicial.assertProdutoClienteCesta()
    assertQtdesPreVendas()
    assertBuscaPrevendas()
    assertBotaoPrevendas()
    assertCabecalhoLista()
}

export function assertQtdesPreVendas() { //Função validação contadores
    cy.get(':nth-child(1) > :nth-child(1) > .cartao-borda').should('be.visible') // qtde Criados
    cy.get(':nth-child(2) > :nth-child(1) > .cartao-borda').should('be.visible') // qtde Impressos
    cy.get(':nth-child(3) > :nth-child(1) > .cartao-borda').should('be.visible') // qtde Separados
    cy.get(':nth-child(4) > :nth-child(1) > .cartao-borda').should('be.visible') // qtde Faturados
    cy.get(':nth-child(5) > :nth-child(1) > .cartao-borda').should('be.visible') // qtde Roteirizados
    cy.get(':nth-child(6) > :nth-child(1) > .cartao-borda').should('be.visible') // qtde Despachados
    cy.get(':nth-child(7) > :nth-child(1) > .cartao-borda').should('be.visible') // qtde Entregues 
    cy.get(':nth-child(8) > :nth-child(1) > .cartao-borda').should('be.visible') // qtde Cancelados
}

export function assertBuscaPrevendas() { // Função validação dos filtros de pré-venda
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

// Funções com os campos dos filtros da busca de pré-venda
export function campoCPF() { cy.get('.row > :nth-child(1) > .form-control') } // campo CPF 
export function campoNascimento() {cy.get(':nth-child(2) > .form-control')} // campo Nascimento 
export function campoLoja() {cy.get(':nth-child(3) > .form-control')} // campo loja
export function campoVendedorAtendente() {cy.get(':nth-child(4) > .form-control')} // campo Vendedor/Atendente 
export function campoComando() {cy.get(':nth-child(5) > .form-control')} // campo comanda
export function campoStatus() {cy.get(':nth-child(6) > .form-control')} // campo Status pré-venda
export function campoPeriodoInicial() {cy.get(':nth-child(7) > .form-control')} // campo período incial
export function campoPeriodoFinal() {cy.get(':nth-child(8) > .form-control')} // campo período final

export function assertBotaoPrevendas() { // assert botões da pré-venda 
    cy.get('.botao-secundario').should('be.visible') // botão limpar
    cy.get('.flex-column-reverse > .botao-primario').should('be.visible') // botão Pesquisar pré-venda
}

//Funções chamando botões pré-vendas 
export function btnLimparFiltros() {cy.get('.botao-secundario')} // botão limpar
export function btnPesquisarPreVenda() {cy.get('.flex-column-reverse > .botao-primario')} // botão Pesquisar pré-venda

 export function assertCabecalhoLista() { // assert cabeçalho da lista 
    cy.get('.titulo').should('have.text', 'Resutado da busca') // Label resultado
    cy.get('[alt="Gerar Orçamento"]').should('be.visibel') // botão Gerar orçamento
    cy.get('[alt="Registrar Ocorrência"]').should('be.visible') // botão Registrar ocorrência 
    cy.get('[alt="Editar"]').should('be.visible') // botão editar pré-venda
    cy.get('[alt="Reimprimir"] > .svg-inline--fa').should('be.visible') // botão imprimir pré-venda
    cy.get('.col-md-8 > .btn-danger').should('be.visible') // botão excluir pré-venda 
 }

 // Funções com os botões do cabeçalho da lista
 export function btnGerarOrcamento() {cy.get('[alt="Gerar Orçamento"]')} // botão Gerar orçamento
 export function btnRegistrarOcorrencia() {cy.get('[alt="Registrar Ocorrência"]')} // botão Registrar ocorrência 
 export function btnEditarPreVenda() {cy.get('[alt="Editar"]')('be.visible')} // botão editar pré-venda
 export function btnImprimirPreVenda() {cy.get('[alt="Reimprimir"] > .svg-inline--fa')} // botão imprimir pré-venda
 export function btnExcluirPreVenda() {cy.get('.col-md-8 > .btn-danger')} // botão excluir pré-venda 