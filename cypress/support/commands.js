
import loginPage from "../pages/loginPage"; 
import page from "../pages/loginPage";

// Custom command for login for per user
Cypress.Commands.add('login', (username, password) => {
  page.login(username, password);
  loginPage.assertLoginResult(username);
});

// Custom logout command for per user 
Cypress.Commands.add("logout", () => {
  cy.get("#react-burger-menu-btn").click();
  cy.get("#logout_sidebar_link").click();
});

//custom command for login for all users
Cypress.Commands.add("loginAllUsers", () => {
  const password = Cypress.env("saucePassword");

  cy.fixture("login").then((users) => {
    //using for of loop as it goes one iteration at a time, 
    //respects the order of operations, that is important for cyress
    for (const key of Object.keys(users)) {
      const username = users[key];

      cy.visit('/'); // always start from login page
      //refactor yaha use vayo
      loginPage.login(username, password);
      loginPage.assertLoginResult(username);
      loginPage.logoutIfLoggedIn();
    }
  });

});

