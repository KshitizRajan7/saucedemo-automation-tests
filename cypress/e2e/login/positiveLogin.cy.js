describe('Sauce Demo Login Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it(`should login all users`, () => {
        cy.loginAllUsers(); // using custom command 
    })
})
