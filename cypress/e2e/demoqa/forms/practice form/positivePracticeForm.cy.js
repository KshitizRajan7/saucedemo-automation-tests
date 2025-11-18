//importing the object that contains all the selectors for the form fields
import page from '../../../../pages/Practice.FormPage';

//grouping related test to practice form 
describe("Practice Form positive", () => {

  //visiting the practice form page for once before all
  before(() => {
    cy.visit("/automation-practice-form");
  });

  //testing all the filling forms and submit button
  it("Should fill the form and submit", () => {

    //loading data from fixture file kinaki we dont hardcode values in the test
    cy.fixture("practiceFormData").then((data) => {

      // getting the respective selectors from page object
      // typing the json data i.e in the fixture folder.
      cy.get(page.firstName).type(data.firstName);
      cy.get(page.lastName).type(data.lastName);
      cy.get(page.email).type(data.email);
      cy.get(page.genderMale).click();
      cy.get(page.phone).type(data.phone);

      // clicking the form then selecting all text inside the form
      // typing date string in the DOB input and pressing enter key
      cy.get(page.dob).click().type(`{selectall}${data.dob}{enter}`);
      cy.get(page.subjects).type(`${data.subject}{enter}`);
      cy.get(page.hobbiesSports).click();

      // Uploading picture using cypress command .attachFile() provided by a plugin i.e cypress-file-upload
      cy.get(page.picture).attachFile("dummy.png");

      cy.get(page.address).type(data.address);

      // State and city dropdowns
      // first clicking the dropdown
      cy.get(page.state).click();
      // then using selector to pick the option with text
      cy.get(page.dropdownOption).contains(data.state).click();

      cy.get(page.city).click();
      cy.get(page.dropdownOption).contains(data.city).click();

      // Submit form
      cy.get(page.submit).click();

      //assertion 

      //checking if the submission modal appeared on screen
      cy.get('.modal-content').should('be.visible');

      //for each field we can find table row label i.e td  and checking its sibling value
      // Assert that the modal contains the respective data using function from command.js

      cy.assertModalField('Student Name', `${data.firstName} ${data.lastName}`);
      cy.assertModalField('Student Email', data.email);
      cy.assertModalField('Gender', 'Male');
      cy.assertModalField('Mobile', data.phone);
      cy.assertModalField('Date of Birth', data.dob);
      cy.assertModalField('Subjects', data.subject);
      cy.assertModalField('Hobbies', 'Sports');
      cy.assertModalField('Picture', 'dummy.png');
      cy.assertModalField('Address', data.address);
      cy.assertModalField('State and City', `${data.state} ${data.city}`);
    });
  });
});

// creating function to assert the value of table row in the submission model
// asserts that the text of the sibling matches the expected value.
// not in use
// function assertModalField(actualValue, expectedValue) {
//   cy.get('td').contains(actualValue).siblings('td').should('have.text', expectedValue);
// }