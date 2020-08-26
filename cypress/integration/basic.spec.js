/// <reference types="cypress" />

const wcaquino = 'https://wcaquino.me/cypress/componentes.html'
const local = 'http://localhost:3000'

describe('Cypress Basics', () => {
  it('visit', () => {
    cy.visit(local)

    cy.title().should('be.equal', 'Cy Playground')
    cy.title().should('contain', 'Cy')

    cy.title()
      .should('be.equal', 'Cy Playground')
      .and('contain', 'Cy')
  })
})

describe('Interact with elements', () => {
  it('click', () => {
    cy.visit(local)

    cy.get('#buttonBasic').should('have.value', 'ClickMe!')
    cy.get('#buttonBasic').click()
    cy.get('#buttonBasic').should('have.value', 'Thanks!')
  })
})