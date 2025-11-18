import page from "../../../../pages/Practice.FormPage";

describe("Practice Form Negative", () => {

    beforeEach(() => {
        cy.visit("/automation-practice-form");
    });

    // testing form submit when required fields are empty
    it("Should show validation errors when form is submitted empty", () => {
        cy.get('#submit').click();

        //assert
        checkAllValidity(page.firstName)
        checkAllValidity(page.lastName)
        checkAllValidity(page.gender)
        checkAllValidity(page.phone)
    });

})

function checkAllValidity(label) {
    cy.get(label)
        .then(input => {
            expect(input[0].checkValidity()).to.be.false;
        });
}