module.exports.config = {
    specs: ['spec.js'],
    directConnect: true,
    baseUrl: 'https://movies-finder.firebaseapp.com/',
    beforeAll:() =>  {
        
       let reporter = require('jasmine2-reporter')
       jasmine.getEnv().addReporter(reporter);
    }
}
