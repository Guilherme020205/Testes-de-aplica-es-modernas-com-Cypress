/// <reference types="cypress"/>
// https://www.wcaquino.me/cypress/componentes.html
describe('Trabalhe com elementos básicos', () => {
    it('text', () => {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html")

        cy.get('body').should('contain', 'Cuidado')

        cy.get('span').should('contain', 'Cuidado')
 
            // ".facilAchar" seria o indentificador
        cy.get('.facilAchar').should('contain', 'Cuidado') // Espera que tenha algo no meio "contain" espera "Cuidado"
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...') // Espera que seja "have.text" espera "Cuidado onde clica, muitas armadilhas..."
    
        
    })

    it.only('Links', () => { 
        cy.visit("https://www.wcaquino.me/cypress/componentes.html")
        cy.contains('a', 'Voltar').click()
        cy.get('#resultado').should('contain', 'Voltou!')
       
        cy.reload()
        
        cy.get('#resultado').should('have.not.text', 'Voltou!')

        cy.get('[href="#"]').click()
        cy.get('#resultado').should('contain', 'Voltou!')


    });
}) 