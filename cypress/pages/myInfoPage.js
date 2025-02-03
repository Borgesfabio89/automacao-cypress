class MyInfoPage {
  selectorsList() {
    const selectors = {
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
    
    }
    
    return selectors
  
  }

  fillPersonalDetails(firstName,middleName, lastName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName)
    cy.get(this.selectorsList().middleNameField).clear().type(middleName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
  }

  fillEmployeeDetails(teste,teste2,teste3, date) {
    cy.get(this.selectorsList().genericField).eq(3).clear().type(teste)
    cy.get(this.selectorsList().genericField).eq(4).clear().type(teste2)
    cy.get(this.selectorsList().genericField).eq(5).clear().type(teste3)  
    cy.get(this.selectorsList().genericField).eq(6).clear().type(date)
    cy.get(this.selectorsList().closeDateButton).click()
  }

  submitForm() {
    cy.get(this.selectorsList().submitButton).eq(0).click()
    cy.get('.oxd-toast-close')
  }

  fillStatus() {
    cy.get(this.selectorsList().genericComboBox).eq(0).click({force: true})
    cy.get(this.selectorsList().changeNationalityList).click()
    cy.get(this.selectorsList().genericComboBox).eq(1).click()
    cy.get(this.selectorsList().changeMaritalStatusList).click()
  }

}

export default MyInfoPage