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
    // catching error message and assert it is visible and correct.
    cy.get('[data-test = "error"]').should('be.visible')
      .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
  })

})
