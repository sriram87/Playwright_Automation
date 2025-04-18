import { test, expect} from '@playwright/test'
import { LoginPage } from '../PageObject/LoginPage'
// require('../PageObject/LoginPage')

const url= "https://rahulshettyacademy.com/client"
const userEmail= 'sriramramanujam87@gmail.com'
const userPassword= 'Test@123'

let loginPage

test.beforeEach(async({page})=>{
 loginPage= new LoginPage(page);
 await loginPage.LaunchURL(url);
})

test('Check the Login with Valid Credentials', async({ page})=>{

    await loginPage.validLogin(userEmail,userPassword)
    await loginPage.homepageIdentifier.waitFor();
})


test('Check the Login with Invalid Credentials', async({ page})=>{


    await loginPage.invalidLogin(userEmail,"userPassword");
    await expect(loginPage.errorMessage).toContainText('Incorrect email or password');
})
