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
    cy.get('button.btn-primary').should('be.visible').click().screenshot()
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
    cy.get('.fa-search').should('be.visible') //botão pesquisa produto
    cy.get('.fa-user-plus').should('be.visible') // botão novo cliente
    cy.get('.fa-search-plus').should('be.visible') //botão pesquisa de cliente 
    cy.get('.fa-chevron-circle-right').should('be.visible').click() //botão pesquisa CPF
    //cy.get('#impressoras').should('be.visible')
    cy.get('#matricula').should('be.visible').type(matricula())
    cy.get('button.btn-sucess').should('be.visible').click() // botão imprime DSM
    cy.get('button.btn-danger').should('be.visible') // botão não imprime DSM
    return cy;
}

export function naoImprimeDsm() {
    cy.get('#pesquisaCliente').should('be.visible').type('06284679319')
    cy.get('#pesquisaProdutos').should('be.visible')
    cy.get('.fa-search').should('be.visible') //botão pesquisa produto
    cy.get('.fa-user-plus').should('be.visible') // botão novo cliente
    cy.get('.fa-search-plus').should('be.visible') //botão pesquisa de cliente 
    cy.get('.fa-chevron-circle-right').should('be.visible').click() //botão pesquisa CPF
    //cy.get('#impressoras').should('be.visible')
    cy.get('#matricula').should('be.visible')
    //cy.get('button.btn-sucess').should('be.visible') // botão imprime DSM
    cy.get('button.btn-danger:last-child').should('be.visible').click() // botão não imprime DSM
    cy.get('.fa-search').should('be.visible')
    cy.get('#pesquisaProdutos').should('be.visible').type('264717')
    cy.get('.fa-search').click()
    return cy;
}

/*
    cy.get('div.input-group:first-child').get('button.botao-pesquisar').should('be.visible').click()
    cy.get('[data-icon=chevron-circle-right]').click()
    cy.get('input#impressoras').should('be.visible')
    cy.get('input#matricula').should('be.visible')
    cy.get('button.btn-sucess:last-child').should('be.visible')
}*/