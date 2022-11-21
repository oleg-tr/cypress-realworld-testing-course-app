/// <reference types="cypress" />

Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add("randEmail", () => {
    return cy.type("lalla"+"@"+"gmail.com")
})
