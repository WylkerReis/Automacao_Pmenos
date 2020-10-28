/// <reference types ="Cypress"/>
import * as teste from "../functions/Funcoes";
import * as telaInicial from "/Users/108466/Documents/Projetos_Cypress/Cypress_casa/cypress/Page/telaInicial";

describe('Painel de vendas', () =>{
describe('Login', () =>{
  it('Deve logar', () =>{
      teste.login()
  })
  it('Não deve logar', () =>{
      teste.loginInvalido()
  })
})

describe.only('DSM', () =>{
    beforeEach(() => {
      teste.login()
      telaInicial.assertInicio()

  })
  it('Imprimir DSM Ouro', () => {
    teste.imprimeDsm()
    telaInicial.assertInicioCPF()
  })
})

describe('Funcional',() => {
  beforeEach(() => {
    teste.login()
    telaInicial.assertInicio()
  })
  it('CT 01 - Gerar pré-venda integrador PBM', () =>{
     teste.naoImprimeDsm()
     telaInicial.assertInicioCPF()
  })
})
})
