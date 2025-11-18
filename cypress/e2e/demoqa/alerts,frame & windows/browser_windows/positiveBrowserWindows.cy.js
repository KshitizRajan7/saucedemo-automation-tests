
describe("Browser Windows testing.", () => {
    before(() => {
        cy.visit('/browser-windows');
    })

    it("Clicking on New Tab button should redirect to another page.", () => {
        cy.get('#tabButton').invoke('removeAttr', 'target') // remove target="_blank"
            .click();

        // assert 
        cy.url({timeout : 10000}).should('eq', `${Cypress.config('baseUrl')}/sample`);
    })
})