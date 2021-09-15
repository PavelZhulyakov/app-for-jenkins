import 'cypress-iframe'
import "cypress-localstorage-commands"
import 'cypress-file-upload'
import './commands'

Cypress.Commands.add('clearSessionStorage', () => {
    cy.window().then((win) => {
        win.sessionStorage.clear()
    })
})