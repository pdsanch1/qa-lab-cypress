/// <reference types="cypress" />


describe('visitar url de test del portal de Ada', () => {
    before(() => { 
       // Run this hook only once
       // Asignar environment variables predefinidas
       // Para que haga el login automatico
        Cypress.env()
        cy.visit('/')
        cy.login(Cypress.env('email'), Cypress.env('password'))
    })
    // <article data-cy="course-card" class="css-1u27tmu">
    // <h3 class="chakra-heading css-1yvouuw">ADA - Pruebas de Software - Test ENV</h3>
    // <h3 class=""p class="css-1l4hp8n"> -- No disponible aún en tu idioma actual --</p>
    // </div></div><div class="css-15te6ai"></div></article>
    it('.should() - find Articles of data-cy = course-card', () => {
        // https://on.cypress.io/should
        //cy.get('[data-cy=course-card]')
        cy.visit('/')
        cy.contains('All Courses')
    })

})

