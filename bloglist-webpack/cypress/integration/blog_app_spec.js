describe('Blog app', function() {

    beforeEach(function() {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        const user = {
          name: 'Cypress',
          username: 'Cypress',
          password: 'Cypress'
        }
        cy.request('POST', 'http://localhost:3003/api/users/', user)
        cy.visit('http://localhost:3000')
        cy.wait(200)
      })

    it('front page can be opened',  function() {
      cy.contains('Log in')
    })

    it('can log in',  function() {
        cy.get('input:first')
            .type('Cypress')
        cy.get('input:last')
            .type('Cypress')
        cy.contains('Login')
            .click()
      })
      
    it('can go to users',  function() {
        //cy.get('input:first').type('Cypress')
        //cy.get('input:last').type('Cypress')
        //cy.contains('Login').click()
        cy.contains('Users').click()
        cy.contains('blogs created')
      })

    it('can go to create blogs',  function() {
        cy.get('input:first').type('Cypress')
        cy.get('input:last').type('Cypress')
        cy.contains('Login').click()
        cy.contains('Create Blog').click()
        cy.contains('Title')
        cy.contains('Author')
        cy.contains('URL')
      })

      it('can create blogs',  function() {
        cy.get('input:first').type('Cypress')
        cy.get('input:last').type('Cypress')
        cy.contains('Login').click()
        cy.contains('Create Blog').click()
        cy.contains('Title').type("Cypress Test")
        cy.contains('Author').type("Cypress")
        cy.contains('URL').type("Cypress.com")
        cy.get('form').find('button').click()
        cy.contains("Cypress Test")
      })
  })