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

import sauceDemoPage from "../pages/sauceDemoPage";
import page from "../pages/sauceDemoPage";

Cypress.Commands.add('assertModalField', (actualValue, expectedValue) => {
  cy.get('td').contains(actualValue).siblings('td').should('have.text', expectedValue);
});

// Custom command for login for per user
Cypress.Commands.add('login', (username, password) => {
  page.login(username, password);
});

// Custom logout command for per user 
Cypress.Commands.add("logout", () => {
  cy.get("#react-burger-menu-btn").click();
  cy.get("#logout_sidebar_link").click();
});

//custom command for login for all users
Cypress.Commands.add("loginAllUsers", () => {
  const password = Cypress.env("saucePassword");

  cy.fixture("saucedemo").then((users) => {
    //using for of loop as it goes one iteration at a time, 
    //respects the order of operations, that is important for cyress
    for (const key of Object.keys(users)) {
      const username = users[key];

      cy.visit(Cypress.env("sauceUrl")); // always start from login page
      //refactor yaha use vayo
      sauceDemoPage.login(username, password);
      sauceDemoPage.assertLoginResult(username);
      sauceDemoPage.logoutIfLoggedIn();
    }
  });
});

