class Browser{

    browserName : string ='chrome'

    launchBrowser(){
        console.log("Browser launched");
        
    }

}

class LoginPage extends Browser{

    login(){
        console.log('Logged in successfully');
        
    }
}

const single = new LoginPage()
console.log(single.browserName)
single.launchBrowser()
single.login()