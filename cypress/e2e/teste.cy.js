/// <reference types="cypress" />

describe("Teste de Login", () => {

    it.skip('Testando login + logout', () => {
        cy.visit('https://192.168.1.123:9090/flextotal/login')
        cy.get('#mat-input-0').click().type('Flexmobile')
        cy.get('#mat-input-1').click().type('30352311')
        cy.get('.mdc-button__label').click()
        cy.get('.mat-mdc-button-touch-target').click()
        cy.contains('LOGOUT').click()
    });

    it('Testando acao C23', () => {
        cy.visit('https://192.168.1.123:9090/flextotal/login')
        cy.get('#mat-input-0').click().type('Flexmobile')
        cy.get('#mat-input-1').click().type('30352311')
        cy.get('.mdc-button__label').click() //.wait(20000)
        cy.get('.mat-mdc-autocomplete-trigger').click().type('C23{ENTER}')
        cy.get('#mat-input-6') //.click // Não estou conseguindo clicar no campo
    });

})   