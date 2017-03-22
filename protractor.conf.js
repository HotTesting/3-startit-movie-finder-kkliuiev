module.exports.config = {
    specs: ['./specs/spec.js'],
    directConnect: true,
    //SELENIUM_PROMISE_MANAGER: false,
    //baseUrl:'https://dev.kasa.vareger.com/',
    baseUrl: 'https://movies-finder.firebaseapp.com/',
    onPrepare:() =>  {
    // let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
    // jasmine.getEnv().addReporter(
    //     new Jasmine2HtmlReporter({
    //       savePath: 'target/screenshots'
    //     })
    //   );    
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
