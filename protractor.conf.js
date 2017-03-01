module.exports.config = {
    specs: ['spec.js'],
    directConnect: true,
    baseUrl: 'https://movies-finder.firebaseapp.com/',
    onPrepare:() =>  {
        
       let reporter = require('jasmine2-reporter')
       jasmine.getEnv().addReporter(reporter);
    }
}
