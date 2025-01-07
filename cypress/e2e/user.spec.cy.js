import userData from '../fixtures/userData.json'

describe('Login', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    submitButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-text--h6',
    dashboradGrid: '.orangehrm-dashboard-grid',
    wrongCredentialsAlert: '.oxd-alert-content-text',
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateImputIconField: ".oxd-date-input-icon",
    closeDateButton: '.--close',
    submitButton: "[type='submit']",
  };
  
  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.submitButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index' )
    cy.get(selectorsList.dashboradGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Craque')
    cy.get(selectorsList.middleNameField).clear().type('Neto')
    cy.get(selectorsList.lastNameField).clear().type('Garotinho')
    cy.get(selectorsList.genericField).eq(3).clear().type('teste')
    cy.get(selectorsList.genericField).eq(4).clear().type('teste 2')
    cy.get(selectorsList.genericField).eq(5).clear().type('teste 3')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-06-01')
    cy.get(selectorsList.closeDateButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('.oxd-toast-close')

  })
  it ('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.wrongCredentialsAlert).contains('Invalid credentials')
  })
})