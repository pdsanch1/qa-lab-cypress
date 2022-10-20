/// <reference types="cypress" />


describe('visit Ada portal url and display courses and modules', () => {
    before(() => { 
        Cypress.env()
        cy.visit('/')
    })
    it('.should() - list all courses', () => {
        cy.login(Cypress.env('email'), Cypress.env('password'))
        cy.visit('/')
        cy.contains('All Courses')
    })

    it('.should() - display modules of a course', () => {
        cy.login(Cypress.env('email'), Cypress.env('password'))
        cy.visit('/')
        cy.get('[data-cy=course-card]').first().click()
        cy.get('[data-cy=module-tab]').should('have.length.at.least',2)
    })


})

