import userData from '../fixtures/userData.json'
import LoginPage from './../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Login', () => {

it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.string({ length: 10 }),chance.natural({min: 1, max: 10}),chance.natural(), '2025-02-03'),
    myInfoPage.fillStatus()
    myInfoPage.submitForm()
    

  })
  
})