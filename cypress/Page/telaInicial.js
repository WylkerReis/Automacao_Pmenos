/// <reference types ="Cypress"/>
 
export function assertInicio() {
    assertConsultaProduto()
    assertBtnBuscaProduto()
    assertBtnConsultaCliente()
    assertBtnConsultaCliente()
    assertBtnCadastroCliente()
    assertCestaProdutos()
    assertMenuOpcoes()
}
export function assertInicioCPF() {
    assertLogoPmenos()
    assertLblPmenos()
    assertConsultaProduto()
    assertBtnBuscaProduto()
    assertBtnConsultaCliente()
    assertBtnConsultaCliente()
    assertBtnCadastroCliente()
    assertCestaProdutos()
    assertMenuOpcoes()
    assertBotaoImprimirDSM()
    assertImagemPainel()
}

export function assertCabecalho() {
    assertLogoPmenos()
    assertLblPmenos()
    assertMenuOpcoes()    
}

export function assertProdutoClienteCesta() {
    assertConsultaProduto()
    assertBtnBuscaProduto()
    assertConsultaCliente()
    assertBtnConsultaCliente()
    assertBtnBuscaCliente()
    assertBtnCadastroCliente()
    assertCestaProdutos()
}

// Funções com asserts da tela inicial
export function assertLogoPmenos() {cy.get('#go-home > img').should('be.visible')} //Logo Pmenos
export function assertLblPmenos() {cy.get('.hidden-xs').should('contain', ' | Painel de Vendas v')} // Painel de vendas
export function assertMenuOpcoes() {cy.get('#dropdown-custom-1').should('be.visible')} // Dropdown menu opções 
export function assertConsultaProduto() {cy.get('#pesquisaProdutos').should('be.visible')} // Campo Inserir produtos
export function assertBtnBuscaProduto() {cy.get('.col-md-7 > .input-group > .botao-pesquisar').should('be.visible')} // Botão buscar produto
export function assertConsultaCliente() {cy.get('#pesquisaCliente').should('be.visible')} // Campo inserir clientes
export function assertBtnConsultaCliente() {cy.get('#pesquisaProdutos').should('be.visible')} // Botão consulta cliente
export function assertBtnBuscaCliente() {cy.get('[title="Pesquisa de clientes"]').should('be.visible')} // Botão busca cliente
export function assertBtnCadastroCliente() {cy.get('[title="Novo cliente"]').should('be.visible')} // Botão cadastra cliente
export function assertCestaProdutos() {cy.get('.text-center > .onHover').should('be.visible')} // Cesta de produtos  
export function assertBotaoImprimirDSM() {cy.get('#botao-imprimir').should('be.visible')} // botão imprimir DSM fora do modal 
export function assertLabelDsmPsico() {cy.get(':nth-child(1) > .list-quantidade-medicamento-controlado > .badge-nenhum-medicamento').should('be.visible')} // Label DSM com psicotrópico
export function assertImagemPainel() {cy.get('.text-center > img').should('be.visible')} // Imagem painel de vendas 

//Funções chamando componentes na tela 
export function consultaProduto() {cy.get('#pesquisaProdutos')} // Campo Inserir produtos
export function btnBuscaProduto() {cy.get('.col-md-7 > .input-group > .botao-pesquisar')} // Botão buscar produto
export function consultaCliente() {cy.get('#pesquisaCliente')} // Campo inserir clientes
export function btnConsultaCliente() {cy.get('#pesquisaProdutos')} // Botão consulta cliente
export function btnBuscaCliente() {cy.get('[title="Pesquisa de clientes"]')} // Botão busca cliente
export function btnCadastroCliente() {cy.get('[title="Novo cliente"]')} // Botão cadastra cliente
export function CestaProdutos() {cy.get('.text-center > .onHover')} // Cesta de produtos
export function menuOpcoes() {cy.get('#dropdown-custom-1')} // Dropdown menu opções 
export function botaoImprimirDSM() {cy.get('#botao-imprimir')} // botão imprimir DSM fora do modal 
export function labelDsmPsico() {cy.get(':nth-child(1) > .list-quantidade-medicamento-controlado > .badge-nenhum-medicamento')} // Label DSM com psicotrópico
export function imagemPainel() {cy.get('.text-center > img')} // Imagem painel de vendas 