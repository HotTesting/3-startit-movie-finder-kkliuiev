module.exports.config = {
    specs: ['./specs/new_suite.js'],
    directConnect: true,
    //SELENIUM_PROMISE_MANAGER: false,
    baseUrl: 'https://movies-finder.firebaseapp.com/',
    onPrepare:() =>  {
        
       let Jasmine2Reporter = require('jasmine2-reporter').Jasmine2Reporter
        jasmine.getEnv().addReporter(new Jasmine2Reporter());
    },
    afterEach:()=> {
    browser.get('/');    
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
    browser.manage().deleteAllCookies();
}
}
