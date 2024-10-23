/// <reference types="cypress" />

describe('Cypress Basic', () => {
    it.only('Visita a pagina e faz uma asertiva no titulo', () => {
        // https://www.wcaquino.me/cypress/componentes.html
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        
        // const title = cy.title()
        // console.log(title)
        
        cy.pause()

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo').debug()
        
        cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .and('contain', 'Campo')

    });
 
    it('Deve encontrar e interagir com o elemento', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').click().should("have.value", "Obrigado!")
    });
})