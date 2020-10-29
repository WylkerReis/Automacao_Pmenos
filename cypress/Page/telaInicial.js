/// <reference types ="Cypress"/>
 
export function assertInicio() { // Função com todos os asserts da tela incial 
    assertConsultaProduto()
    assertBtnBuscaProduto()
    assertBtnConsultaCliente()
    assertBtnCadastroCliente()
    assertCestaProdutos()
    assertMenuOpcoes()
    

}
export function assertInicioCPF() { // Função com todos os asserts da tela incial após a inserção do CPF
    assertCabecalho()
    assertConsultaProduto()
    assertBtnBuscaProduto()
    assertBtnConsultaCliente()
    assertBtnCadastroClienteCpf()
    assertCestaProdutos()
    assertMenuOpcoes()
    assertBotaoImprimirDSM()
    assertImagemPainel()
    assertContainerInfoCliente()
}

export function assertCabecalho() { // Função com todos os asserts do cabeçalho
    assertLogoPmenos()
    assertLblPmenos()
    assertMenuOpcoes()    
}

export function assertProdutoClienteCesta() { // Função com todos os asserts da div da cesta 
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
export function assertBtnCadastroCliente() {cy.get('[title="Novo cliente"] > .svg-inline--fa').should('be.visible')}
export function assertBtnCadastroClienteCpf() {cy.get('.input-group > .btn-danger').should('be.visible')}

 // Botão cadastra cliente
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
export function campoCadastroCliente() {cy.get('[title="Novo cliente"] > .svg-inline--fa').should('be.visible')} // botão cadastro cliente 

//Dropdown menu locators 
export function menuPreVendas() {cy.get('.super-colors > div > :nth-child(1) > a')}
export function menuCliqueRetire() {cy.get('div > :nth-child(2) > a')}
export function menuDescontoManual() {cy.get('div > :nth-child(3) > a')}
export function menuConfiguracaoDesconto() {cy.get('div > :nth-child(5) > a')}
export function menuDesativarOcorrencia() {cy.get('div > :nth-child(7) > a')}
export function menuSair() {cy.get('div > :nth-child(8) > a')}

// Funções com asserts após inserir CPF
export function assertContainerInfoCliente() {
    assertlblNomeCliente()
    assertCampoCelularCliente()
    assertCampoEmailCliente()
    assertBtnSalvarCliente()
}

// Funções com assert após inserção de CPF 
export function assertlblNomeCliente() {cy.get('.colunaNomebarra > .row > .onHover').should('be.visible').and('not.be.empty')} // Label nome cliente 
export function assertCampoCelularCliente() {cy.get('#celular').should('be.visible')} // campo celular cliente
export function assertCampoEmailCliente() {cy.get('.emailbarra').should('be.visible')} // campo e-mail cliente 
export function assertBtnSalvarCliente() {cy.get('.btnSalvarBarra > .btn').should('be.visible')} // botão salvar dados cliente 

// container informações cliente 
export function imgMedalhaOuro() {cy.get('.medal-ouro > .svg-inline--fa > path').should('be.visible')} // medalha ouro
export function lblNomeCliente() {cy.get('.colunaNomebarra > .row').should('not.be.empty')} // Label nome cliente
/*export function  {cy.get('.row > .onHover > h4').should('not.be.empty')} // label aniversário cliente 
export function {cy.get('#celular').should('not.be.empty')} // Campo número do cleinte 
export function {cy.get('.emailSalvarBarra > .ajusteAlturabarra > :nth-child(1) > .svg-inline--fa > path').should('contain', '@')} //Botão e-mail
export function {cy.get('.emailbarra').should('be.visible')} // Campo e-mail
export function {cy.get('.btnSalvarBarra > .btn').should('be.visible')} // Botão salvar*/