export function matricula(mat=108466) {
    return mat;
}

export function senha (sen="epm.2020") {
    return sen;
}

export function login(
) {
    cy.visit('http://k8shomo.pmenos.com.br/painelvendas/#/login')
    cy.get('#matricula').should('be.visible').type(matricula())
    cy.get('[type=password]').should('be.visible').type(senha())
    cy.get('button.btn-primary').should('be.visible').click()
    cy.url().should('not.eq', '/')
    return cy;
}

export function loginInvalido() {
    cy.visit('http://k8shomo.pmenos.com.br/painelvendas/#/login')
    cy.get('input#matricula').should('be.visible').type(matricula())
    cy.get('[type=password]').should('be.visible').type(senha("abc"))
    cy.get('button.btn-primary').should('be.visible').click()
    cy.url().should('not.eq', '/')
    return cy;
}

export function imprimeDsm() {
    cy.get('#pesquisaCliente').should('be.visible').type('06284679319')
    cy.get('#pesquisaProdutos').should('be.visible')   
    cy.get('div.input-group:last-child').get('button.botao-pesquisar:first-child').should('be.visible').click()
    cy.get('#impressoras').should('be.visible')
    cy.get('button.btn-danger').should('be.visible')
    cy.get('#matricula').should('be.visible').type(matricula())
    cy.get('button.btn-sucess').should('be.visible').click().screenshot()
    return cy;
}

export function naoImprimeDsm() {
    cy.get('#pesquisaCliente').should('be.visible').type('06284679319')
    cy.get('#pesquisaProdutos').should('be.visible')   
    cy.get('div.input-group:last-child').get('button.botao-pesquisar:first-child').should('be.visible').click()
    cy.get('#impressoras').should('be.visible')
    cy.get('button.btn-sucess').should('be.visible').click()
    cy.get('#matricula').should('be.visible')
    cy.get('button.btn-danger').should('be.visible')
    return cy;
}

/*
    cy.get('div.input-group:first-child').get('button.botao-pesquisar').should('be.visible').click()
    cy.get('[data-icon=chevron-circle-right]').click()
    cy.get('input#impressoras').should('be.visible')
    cy.get('input#matricula').should('be.visible')
    cy.get('button.btn-sucess:last-child').should('be.visible')
}*/