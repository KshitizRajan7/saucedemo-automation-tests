import loginPage from "../../pages/loginPage";

class loginActions {

    login(username, password) {
        loginPage.usernameInput().clear().type(username);
        loginPage.passwordInput().clear().type(password);
        loginPage.loginButton().click();
    }

    assertLoginResult(username) {
        if (username === "locked_out_user") {
            loginPage.errorMessage().should("be.visible")
                .and("contain", "Epic sadface: Sorry, loginPage user has been locked out.");
        } else {
            // Assert inventory page visible
            loginPage.assertInventoryPage();

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
        loginPage.errorMessage().should("be.visible").and("have.text", expectedMessage);
    }

    assertInventoryPage() {
        loginPage.inventoryContainer().should("be.visible");
    }

    getInventoryItemNames() {
        return loginPage.inventoryItemNames();
    }
}

export default loginActions