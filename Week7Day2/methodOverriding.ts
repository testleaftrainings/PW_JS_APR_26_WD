class Browser4{
    launchBrowser(){
        console.log('Lauch chrome browser');
        
    }

}

class EdgeBrowser extends Browser4{
    lauchBrowser(){
        console.log("launch edge browser");
        
    }
}

class FirefoxBrowser extends EdgeBrowser{

    lauchBrowser(): void {
        console.log('launch firefox browser');
        
    }

}

// const obj4 = new EdgeBrowser()
// obj4.lauchBrowser()

const obj5 = new FirefoxBrowser()
obj5.lauchBrowser()