/// <reference types="cypress" />

describe("Teste de Logn", () => {

    it('Testando erro de login sem senha e usuario', () => {
        cy.visit('https://192.168.1.123:9090/flextotal/login')
    });
})