import userData from '../fixtures/userData.json'
import LoginPage from './../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()


describe('Login', () => {

  const selectorsList = {
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateImputIconField: ".oxd-date-input-icon",
    closeDateButton: '.--close',
    submitButton: "[type='submit']",
    genericComboBox:"[tabindex='0']",
    changeNationalityList: ":nth-child(25) > span",
    changeMaritalStatusList: ":nth-child(3) > span",
  };
  
  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    
    cy.get(selectorsList.firstNameField).clear().type('Craque')
    cy.get(selectorsList.middleNameField).clear().type('Garotinho')
    cy.get(selectorsList.lastNameField).clear().type('Neto')
    cy.get(selectorsList.genericField).eq(3).clear().type('teste')
    cy.get(selectorsList.genericField).eq(4).clear().type('teste 2')
    cy.get(selectorsList.genericField).eq(5).clear().type('teste 3')  
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-06-01')
    cy.get(selectorsList.closeDateButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('.oxd-toast-close')
    cy.get(selectorsList.genericComboBox).eq(0).click({force: true})
    cy.get(selectorsList.changeNationalityList).click()
    cy.get(selectorsList.genericComboBox).eq(1).click()
    cy.get(selectorsList.changeMaritalStatusList).click()
  })
  it ('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.wrongCredentialsAlert).contains('Invalid credentials')
  })
})