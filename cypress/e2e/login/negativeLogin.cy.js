describe("Sauce Demo Login Tests", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("sauceUrl")}`);
    })

    it("should check all invalid users", () => {
        cy.loginAllUsers();
    })
})