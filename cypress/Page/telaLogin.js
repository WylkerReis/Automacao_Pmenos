/// <reference types ="Cypress"/>

export function assertLogin() {
    assertAvatarLogin()
    assertImgLogin()
    assertLblMatriculaLogin()
    assertCampoMatriculaLogin()
    assertLblSenhaLogin()
    assertCampoSenhaLogin()
    assertBtnLogar()
}
// Funções com asserts dos componentes da tela
export function assertAvatarLogin() { cy.get('.avatar').should('be.visible') }
export function assertImgLogin() { cy.get('img').should('be.visible') }
export function assertLblMatriculaLogin() { cy.get(':nth-child(3) > .position-relative > .control-label').should('be.visible') }
export function assertCampoMatriculaLogin() { cy.get('#matricula').should('be.visible') }
export function assertLblSenhaLogin() { cy.get(':nth-child(4) > .position-relative > .control-label').should('be.visible') }
export function assertCampoSenhaLogin() { cy.get(':nth-child(4) > .position-relative > .form-control').should('be.visible') }
export function assertBtnLogar() { cy.get('.btn-block').should('be.visible') }

// Funções chamando os componentes da tela
export function avatarLogin() { cy.get('.avatar').should('be.visible') }
export function imgLogin() { cy.get('img').should('be.visible') }
export function lblMatriculaLogin() { cy.get(':nth-child(3) > .position-relative > .control-label').should('be.visible') }
export function campoMatriculaLogin() { cy.get('#matricula').should('be.visible') }
export function lblSenhaLogin() { cy.get(':nth-child(4) > .position-relative > .control-label').should('be.visible') }
export function campoSenhaLogin() { cy.get(':nth-child(4) > .position-relative > .form-control').should('be.visible') }
export function btnLogar() { cy.get('.btn-block').should('be.visible') }