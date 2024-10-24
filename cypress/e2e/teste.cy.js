/// <reference types="cypress" />

describe("Teste de Logn", () => {

    it('Testando login + logout', () => {
        cy.visit('https://192.168.1.123:9090/flextotal/login')
        cy.get('#mat-input-0').click().type('Flexmobile')
        cy.get('#mat-input-1').click().type('')
        cy.get('.mdc-button__label').click()
        cy.get('.mat-mdc-button-touch-target').click()
        cy.contains('LOGOUT').click()
    });
})   