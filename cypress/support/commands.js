// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('assertModalField', (actualValue, expectedValue) => {
  cy.get('td').contains(actualValue).siblings('td').should('have.text', expectedValue);
});

// Custom command for login
Cypress.Commands.add('login', (username, password) => {
  // Visit login page (optional if already on page)
  cy.visit('/login'); 

  // Fill username and password
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);

  // Click login button
  cy.get('button[type="submit"]').click();
});
