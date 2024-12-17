describe('Login', () => {
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type("Admin")
    cy.get("[name='password']").type("admin123")
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index' )
    cy.get('.oxd-text--h6').contains('Dashboard')
  })
  it ('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type("wrong_username")
    cy.get("[name='password']").type("wrong_password")
    cy.get("[type='submit']").click()
    cy.get('.oxd-alert-content-text').contains('Invalid credentials')
  })
})