describe('Sauce Demo Login Tests', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("sauceUrl")}`);
    })

    it(`should login all users`, () => {
        cy.loginAllUsers(); // using custom command 
    })
})
