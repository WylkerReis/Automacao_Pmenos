/// <reference types ="Cypress"/>
import { login, loginInvalido, imprimeDsm, naoImprimeDsm } from "Funcoes.js";

describe('Painel de vendas', () =>{
describe('Login', () =>{
  it.only('Deve logar', ()=>{
    cy.invoke(login).screenshot
  })

  it('Não deve logar', () =>{
      cy.invoke(loginInvalido).screenshot
  })
})
describe('DSM', () =>{
  beforeEach(() => {
    cy.invoke(login)
  })
  it('Imprimir DSM Ouro', () => {
    cy.invoke(imprimeDsm)
  })
})

describe('Funcional',() => {
  beforeEach(() => {
    cy.invoke(login)
  })
  it('CT 01 - Gerar pré-venda integrador PBM', () =>{
      cy.invoke(naoImprimeDsm)
  })
})
})