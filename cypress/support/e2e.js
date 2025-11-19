// Import commands.js using ES2015 syntax:
import './commands'

//ignoring the errors kinaki sometimes website you are testing throws random js errors
Cypress.on('uncaught:exception', () => {
    return false;
});