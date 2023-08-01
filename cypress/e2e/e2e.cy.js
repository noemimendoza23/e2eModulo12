/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')
import enderecoPage from '../support/page_objects/endereco.page'
const dadosEndereco = require ('../fixtures/endereco.json')

context('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Teste de ponta a ponta - Loja EBAC', () => {
            cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, { log: false })
            cy.get('.woocommerce-form > .button').click()
            cy.get('.page-title').should('contain', 'Minha conta')
            cy.addProdutos('Abominable Hoodie', 'M', 'Blue', 1)
            cy.addProdutos('Argus All-Weather Tank', 'S', 'Gray', 1)
            cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'M', 'Purple', 1)
            cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', 1)
            enderecoPage.EditarEnderecoFaturamento('Ana', 'Beatriz', 'Diversao', 'Brasil', 'R Amazonas', '300', 'Sao Paulo', 'Sao Paulo', '27866956', '22988898080', 'ana@beatriz.com')
            cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
           
        })

    });

})