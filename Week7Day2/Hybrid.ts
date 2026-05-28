class Browser2{

    browserName : string ='chrome'

    launchBrowser(){
        console.log("Browser launched");
        
    }

}

class LoginPage2 extends Browser2{

    login(){
        console.log('Logged in successfully');
        
    }
}

class HomePage1 extends LoginPage2{

    searchProduct(){
        console.log('Product searched');
        
    }
}

class reportPage extends Browser2{

    report(){
        console.log('report opened');
        
    }
}


const hybrid = new HomePage1()
console.log(hybrid.browserName)
hybrid.launchBrowser()
hybrid.login()
hybrid.searchProduct()

const rep = new reportPage()
console.log(rep.browserName)
rep.launchBrowser()
rep.report()
