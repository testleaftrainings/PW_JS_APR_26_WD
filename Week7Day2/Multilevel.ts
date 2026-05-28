class Browser1{

    browserName : string ='chrome'

    launchBrowser(){
        console.log("Browser launched");
        
    }

}

class LoginPage1 extends Browser1{

    login(){
        console.log('Logged in successfully');
        
    }
}

class HomePage extends LoginPage1{

    searchProduct(){
        console.log('Product searched');
        
    }
}

const multi = new HomePage()
console.log(multi.browserName)
multi.launchBrowser()
multi.login()
multi.searchProduct()
