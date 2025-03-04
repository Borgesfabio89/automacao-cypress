class LoginPage {
  selectorsList() {
      const selectors = {
          usernameField: "[name='username']",
          passwordField: "[name='password']",
          submitButton: "[type='submit']",
          wrongCredentialsAlert: '.oxd-alert-content-text',
    }
    
    return selectors
  }
  accessLoginPage() {
    cy.visit('/auth/login')
   
  }
  loginWithUser(username, password) {
    cy.get(this.selectorsList().usernameField).type (username)
    cy.get(this.selectorsList().passwordField).type(password)
    cy.get(this.selectorsList().submitButton).click()
  } 
  checkAccessInvalid() { 
  cy.get(this.selectorsList().wrongCredentialsAlert)
  }  
}

export default LoginPage
                 
 