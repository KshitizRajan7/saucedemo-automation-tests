class SauceDemoPage {
    // --- Login Page Elements ---
    usernameInput() {
        return cy.get("#user-name");
    }

    passwordInput() {
        return cy.get("#password");
    }

    loginButton() {
        return cy.get("#login-button");
    }

    errorMessage() {
        return cy.get('[data-test="error"]');
    }

    // --- Inventory Page Elements ---
    inventoryContainer() {
        return cy.get(".inventory_list");
    }

    inventoryItemNames() {
        return cy.get(".inventory_item_name");
    }

    // --- Action oriented  ---
    visit() {
        cy.visit("/"); // Uses baseUrl from config
    }

    login(username, password) {
        this.usernameInput().clear().type(username);
        this.passwordInput().clear().type(password);
        this.loginButton().click();
    }

    assertLoginResult(username) {
        if (username === "locked_out_user") {
            this.errorMessage().should("be.visible")
                .and("contain", "Epic sadface: Sorry, this user has been locked out.");
        } else{
            // Assert inventory page visible
            this.assertInventoryPage();

            // Assert URL includes /inventory.html
            cy.url().should("include", "/inventory.html");
        }
    }
    


    logoutIfLoggedIn() {
        cy.get("body").then(($body) => {
            if ($body.find("#react-burger-menu-btn").length) {
                // Open the menu first
                cy.get("#react-burger-menu-btn").click();
                // Wait until the logout link is visible and click
                cy.get("#logout_sidebar_link").should("be.visible").click();
            }
        });
    }

    //yo chai refactor ko laagi

    assertErrorMessage(expectedMessage) {
        this.errorMessage().should("be.visible").and("have.text", expectedMessage);
    }

    assertInventoryPage() {
        this.inventoryContainer().should("be.visible");
    }

    getInventoryItemNames() {
        return this.inventoryItemNames();
    }
}

export default new SauceDemoPage();
