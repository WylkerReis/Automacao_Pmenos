/// <reference types ="Cypress"/>

const { verify } = require("cypress/types/sinon")

console.log ('Quantas vezes dejesa ')
var M ='108466'
var S ='epm.2020'
describe('Painel de vendas', () =>{
  beforeEach(() => {
    cy.visit('http://k8shomo.pmenos.com.br/painelvendas/#/login')
  })
describe('Login', () =>{
  it('Deve logar', ()=>{
      cy.get('input#matricula').should('be.visible')
      cy.get('[type=password]').should('be.visible')
      cy.get('button.btn-block.btn.btn-primary').should('be.visible')
      cy.invoke.Login
      cy.get('input#matricula').type(M)
      cy.get('input#matricula').should('contain.value', '108466')
      cy.get('[type=password]').type(S)
      cy.get('[type=password]').should('contain.value','epm.2020')
      cy.get('button.btn-block.btn.btn-primary').click()
      cy.screenshot()
      cy.url().should('not.eq', '/')
  })

  it('Não deve logar', () =>{
      cy.get('input#matricula').should('be.visible')
      cy.get('[type=password]').should('be.visible')
      cy.get('button.btn-block.btn.btn-primary').should('be.visible')
      cy.get('input#matricula').type(M)
      cy.get('input#matricula').should('contain.value', '108466')
      cy.get('[type=password]').type('abc')
      cy.get('[type=password]').should('contain.value','abc')
      cy.get('button.btn-block.btn.btn-primary').click()
      cy.screenshot()
  })
})
describe('DSM', () =>{
  it('Imprimir DSM Ouro', () => {
      cy.get('input#matricula').type(M)
      cy.get('[type=password]').type(S)
      cy.get('button.btn-block.btn.btn-primary').click()
      cy.url().should('eq', 'http://k8shomo.pmenos.com.br/painelvendas/#/')
      //cy.get('input#pesquisaProdutos').should('be.visible')
      cy.get('input#pesquisaCliente').should('be.visible')
      //cy.get('[class=svg-inline--fa fa-search fa-w-16 text-primary]').should('exist')
      //cy.get('[class="svg-inline--fa fa-chevron-circle-right fa-w-16 text-primary]'). should('exist')
      cy.get('input#pesquisaCliente').type('06284679319')
      //cy.get('input#pesquisaProduto').type('264717')
      cy.get('[data-icon=chevron-circle-right]').click()
      //cy.get('input#impressoras').should('be.visible')
      cy.get('input#matricula').should('be.visible')
      cy.screenshot()
      //cy.get('[class=onHover btn-danger btn btn-secondary]').should('be.visible')
  })
})

describe('Funcional',() => {
  it('CT 01 - Gerar pré-venda integrador PBM', () =>{
      cy.get('input#matricula').type(M)
      cy.get('[type=password]').type(S)
      cy.get('button.btn-block.btn.btn-primary').click()
      cy.url().should('eq', 'http://k8shomo.pmenos.com.br/painelvendas/#/')
      //cy.get('input#pesquisaProdutos').should('be.visible')
      cy.get('input#pesquisaCliente').should('be.visible')
      //cy.get('[class=svg-inline--fa fa-search fa-w-16 text-primary]').should('exist')
      //cy.get('[class=svg-inline--fa fa-chevron-circle-right fa-w-16 text-primary]'). should('exist')
      cy.get('input#pesquisaCliente').type('06284679319')
      //cy.get('input#pesquisaProduto').type('264717')
      cy.get('[data-icon=chevron-circle-right]').click()
      cy.screenshot()
  })
})
})