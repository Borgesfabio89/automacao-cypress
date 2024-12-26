const selectorsList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  submitButton: "[type='submit']",
  sectionTitleTopBar: '.oxd-text--h6',
  dashboradGrid: ".orangehrm-dashboard-grid",
  wrongCredentialsAlert: '.oxd-alert-content-text',
  
 
};


describe('Login', () => {
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type("Admin")
    cy.get(selectorsList.passwordField).type("admin123")
    cy.get(selectorsList.submitButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index' )
    cy.get(selectorsList.dashboradGrid)
  })
  it ('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type("wrong_username")
    cy.get(selectorsList.passwordField).type("wrong_password")
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.wrongCredentialsAlert).contains('Invalid credentials')
  })
})