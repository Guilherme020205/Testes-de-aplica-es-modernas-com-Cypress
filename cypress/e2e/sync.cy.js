/// <reference types="cypress"/>

describe('Espera...', () => {
    before(() => {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html")
        cy.log('Página carregada no before')
    })

    beforeEach(() => {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html")
        cy.reload()
    })

    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    });

    it('Deve fazer retrys', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            .should('not.exist') 
            .should('exist')

    });

    it.only('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
         cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 2')
    });
})