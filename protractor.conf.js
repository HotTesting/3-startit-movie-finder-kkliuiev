module.exports.config = {
    specs: ['spec2.js'],
    directConnect: true,
    baseUrl: 'https://movies-finder.firebaseapp.com/'
    onPrepare: function () {
       let reporter = require('jasmine2-reporter')
       jasmine.getEnv().addReporter(reporter);}
}