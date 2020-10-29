/// <reference types ="Cypress"/>

export function assertModalDescontoManual() {
    assertModalDesconto()
    assertLblInformaFilial()
    assertCampoSaldoFilial()
    assertLblPercentualDesconto()
    assertCampoPercentualDesconto()
    assertDescontoManual()
    assertListaDeDesconto()
}

// Funções com asserts do modal Desconto manual 
export function assertModalDesconto() {cy.get('.ReactModal__Content').should('be.visible')} // Modal desconto manual
export function assertLblInformaFilial() {cy.get('.modal-title').should('contain.text', 'Saldo Filial')} // Label informa filial
export function assertCampoSaldoFilial() {cy.get('#saldoTotal').should('be.visible')} // Campo saldo filial
export function assertLblSaldoFilial() {cy.get(':nth-child(1) > .control-label > b').should('contain.text', 'Saldo Filial:')} // Label saldo filial
export function assertLblPercentualDesconto() {cy.get(':nth-child(2) > .control-label > b').should('be.text', 'Percentual Máx. Desconto no Item:')} // Label percentual desconto máximo no item 
export function assertCampoPercentualDesconto() {cy.get('#valordesconto').should('be.visible')} // Campo percentual desconto máximo no item
export function assertDescontoManual() {cy.get('.tabelaListagem > :nth-child(1) > b').should('contain.text', 'Desconto Manuais Aplicados no Mês')} // Label descontos manuais aplicados ao mês 
export function assertListaDeDesconto() {cy.get('.tabelaListagem').should('be.visible')} //Lista descontos aplicados no mês 

// Funções com chamadas de campos do modal Desconto manual 
export function assertModalDesconto() {cy.get('.ReactModal__Content')} // Modal desconto manual
export function assertCampoSaldoFilial() {cy.get('#saldoTotal')} // Campo saldo filial
export function assertCampoPercentualDesconto() {cy.get('#valordesconto')} // Campo percentual desconto máximo no item
export function assertListaDeDesconto() {cy.get('.tabelaListagem')} //Lista descontos aplicados no mês 