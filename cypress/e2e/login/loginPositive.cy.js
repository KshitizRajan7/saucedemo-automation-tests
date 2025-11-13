
//Positive Test
//testing login cases with valid username and passwords.

describe('Sauce Demo login tests', () => {  // this describes tthe block groups all related tests

  //using beforeEach hook than runs and open the end point before every single it.
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })


  //Standard user

  it('Standard user should login Successfully', () => {

    cy.get('#user-name').type("standard_user"); // valid username 

    cy.get('#password').type("secret_sauce"); // valid password

    cy.get('#login-button').click(); // click login button

    //no error is expected 
    //so assert that url will contain '/inventory.html' which means logged in successfully and loaded inventory page.
    cy.url().should('include', '/inventory.html')
  })

  //problem user
  it('Problem user should log in but may show app issues.', () => {
    cy.get("#user-name").type("problem_user"); // problem_user
    cy.get("#password").type("secret_sauce");
    cy.get('#login-button').click() //click login

    //assert 
    cy.url().should('include', '/inventory.html');
  })

  //performance Glitch User 
  it('Performance glitch use should log in but can be slow', () => {
    cy.get('#user-name').type('performance_glitch_user');
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click();

    //assert login
    cy.url().should('include', '/inventory.html');

    //waiting for 5 seconds to load the page
    cy.wait(5000);
    //assert 
    cy.get('.inventory_list').should('be.visible'); //within 5 seconds inventory list should be loaded
  })

  //visual user
  it('Visual user should be log in', () => {
    cy.get('#user-name').type('visual_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    //assert
    cy.url().should('include', '/inventory.html');
  })
})