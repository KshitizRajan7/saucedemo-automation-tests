// negative
//testing login cases with invalid username and passwords.

describe('Sauce demo login test', () => {

  //using beforeEach hook than runs and open the end point before every single it.
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/")
  })

  //locked-user

  it('Locked out user should see error message', () => {
    cy.get('#user-name').type('locked_out_user') //locked out username
    cy.get('#password').type('secret_sauce') //valid password
    cy.get('#login-button').click() //click login

    //it will give the error message 
    // selecting error message and asserting it is visible and correct.
    cy.get('[data-test = "error"]').should('be.visible')
      .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
  })

  //invalid username with valid password
  it("Invalid username should show error message", () => {
    cy.get('#user-name').type('invalid_user') // invalid username
    cy.get('#password').type('secret_sauce') // valid password
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
  })

  //invalid password with valid username
  it('Invalid password should show error message', () => {
    cy.get('#user-name').type('standard_user'); // valid username
    cy.get('#password').type('invalidPassword'); // invalid password
    cy.get('#login-button').click();

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
  })

  //Empty Username and password field
  it('Empty username and password should show error', () => {
    cy.get('#login-button').click();

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain.text', 'Epic sadface: Username is required')
  })
})
