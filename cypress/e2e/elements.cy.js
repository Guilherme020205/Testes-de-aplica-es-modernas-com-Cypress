/// <reference types="cypress"/>
// https://www.wcaquino.me/cypress/componentes.html

describe('Trabalhe com elementos básicos', () => {

    before(() => {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html")
        cy.log('Página carregada no before')
    })

    // beforeEach(() => {
    //     cy.visit("https://www.wcaquino.me/cypress/componentes.html")
    //     cy.reload()
    // })

    it('text', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {
        cy.contains('a', 'Voltar').click()
        cy.get('#resultado').should('contain', 'Voltou!')

        cy.reload()

        cy.get('#resultado').should('not.contain', 'Voltou!')

        cy.get('[href="#"]').click()
        cy.get('#resultado').should('contain', 'Voltou!')
    })

    it('TextFields', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')

        cy.get('#elementosForm\\:sugestoes')
            .type('Text area')
            .should('have.value', 'Text area')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('Text input')
            .should('have.value', 'Text input')

        cy.get('[data-cy="dataSobrenome"]')
            .type('12345{backspace}{backspace}')
            .should('have.value', '123')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectAll}acerto', { delay: 100 })
            .should('have.value', 'acerto')

    })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')
        cy.get('#formSexoMasc')
            .should('not.checked')

        cy.get("[name= 'formSexo']").should('have.length', 2)
    });

    it('CheckBOx', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')

        cy.get('[name=formComidaFavorita]')
            .click({ multiple: true })

        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaCarne').should('be.checked')
        cy.get('#formComidaFrango').should('be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')
    });

    it('Combo', () => {
        cy.get('[data-test="dataEscolaridade"]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')


        cy.get('[data-test="dataEscolaridade"]')
            .select('1graucomp')
            .should('have.value', '1graucomp')

    });

    it.only('Combo multiplo', () => {
        cy.get('[data-testid="dataEsportes"]')
            .select(['Karate', 'Corrida'])
        
         
    })

        

})
