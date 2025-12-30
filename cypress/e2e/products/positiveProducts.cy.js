describe('Inventory page check', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.fixture('login').then((user)=>{
            cy.login(user.standard,Cypress.env('saucePassword'));
        })
    })

    it("product check", () => {

        //for visibility of product
        cy.get(".inventory_item").should("have.length.greaterThan", 0);
        cy.get(".inventory_item_name").first().should("be.visible");
        cy.get(".inventory_item_price").first().should("exist");

        // for the product details
        cy.get(".inventory_item").each(($el) => {
            cy.wrap($el).find(".inventory_item_name").should("not.be.empty");
            cy.wrap($el).find(".inventory_item_price").should("not.be.empty");
            cy.wrap($el).find("button").should("contain.text", "Add to cart");
        })
            // for cart functionality
            cy.contains(".inventory_item", "Sauce Labs Backpack")
                .find("button")
                .click();

        cy.get(".shopping_cart_badge").should("contain", "1");

        //menu button works
        cy.get("#react-burger-menu-btn").click();
        cy.get("#logout_sidebar_link").click();
        cy.location("pathname").should("eq", "/");
    });

})
