class LoginPage{

    constructor(page){
        this.page= page
        this.username= page.getByPlaceholder("email@example.com")
        this.password= page.getByPlaceholder("enter your passsword")
        this.loginButton= page.getByRole('button', {name:'Login'})
        this.homepageIdentifier= page.getByRole('button', {name:'HOME'})
        this.errorMessage= page.locator("#toast-container")
    }

    async LaunchURL(url)
    {
        await this.page.goto(url)
    }

    async validLogin(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click();
     }

    async invalidLogin(username, password){
        await this.username.fill(username)
        await this.password.fill(password) 
        await this.loginButton.click();
     }
}

module.exports= {LoginPage}