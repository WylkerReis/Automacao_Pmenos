/// <reference types ="Cypress"/>
import { login, loginInvalido, imprimeDsm, naoImprimeDsm } from "../functions/Funcoes";

describe('Painel de vendas', () =>{
describe('Login', () =>{
  it('Deve logar', ()=>{
      login().screenshot()
  })

  it('Não deve logar', () =>{
      loginInvalido().screenshot()
  })
})
describe('DSM', () =>{
  beforeEach(() => {
    login()
  })
  it('Imprimir DSM Ouro', () => {
    imprimeDsm()
  })
})

describe('Funcional',() => {
  beforeEach(() => {
    login()
  })
  it('CT 01 - Gerar pré-venda integrador PBM', () =>{
     naoImprimeDsm()
  })
})
})
