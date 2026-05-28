class BrowserNew{

    loadApplication(url:string):void
    loadApplication(url:string,browserName:string):void

    loadApplication(url:string,browserName?:string){
        if(browserName){
            console.log('lauch the' +url + 'in the browser' + browserName);
            
        }else{
            console.log('load '+ url);
            
        }
    }
}

let brNew = new BrowserNew()
brNew.loadApplication('www.google.com')
brNew.loadApplication('www.google.com','')