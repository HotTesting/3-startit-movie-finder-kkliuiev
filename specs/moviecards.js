let HomePage = require('../pageObjects/HomePage.js').HomePage //HomePage class usage

describe('Home Page', () => {

    let homePage // homePage variable
    let searchRequest = 'matrix' // Applied in Search field test (Test Case01)

    beforeEach(() => {
        homePage = new HomePage(); // New homePage object declaring

    })

    //Test for Movie Cards contents. Each of the Movie Cards should contain movie images. Itterating through array of Genres
    it('Movie Cards should contain movie images', () => {
        homePage.open()
        let a = homePage.genreList.getText().then(texts => {
            texts.map(data => {
                element(by.linkText(data)).click();
                homePage.waitForResults();
                $$('h3').get(0).getText().then(title => {
                        console.log('Checking ' + title + ' page for movie images...')
                    }) //This adds onscreen logs
                let scopeOfImages = $$('h3 + div').$$('img').then(images => images.length)
                expect(scopeOfImages).toBe(20, 'Some films has no images')
            })
        })
    }, 100000)

    //Test for Movie Cards contents. Each of the Movie Cards should contain release dates. Itterating through array of Genres
    it('Movie Cards should contain release dates', () => {
        homePage.open()
        let a = homePage.genreList.getText().then(texts => {
            texts.map(data => {
                element(by.linkText(data)).click();
                homePage.waitForResults();
                $$('h3').get(0).getText().then(title => {
                        console.log('Checking ' + title + ' page for release dates...')
                    }) //This adds onscreen logs
                let scopeOfReleaseDates = $$('h3 + div').$$('div p:first-of-type').getText().then(dates => dates.length)
                expect(scopeOfReleaseDates).toBe(20, 'Some films has no release dates')
            })
        })
    }, 100000)

    //Test for Movie Cards contents. Each of the Movie Cards should contain movie rates. Itterating through array of Genres
    it('Movie Cards should contain movie rates', () => {
        homePage.open()
        let a = homePage.genreList.getText().then(texts => {
            texts.map(data => {
                element(by.linkText(data)).click();
                homePage.waitForResults();
                $$('h3').get(0).getText().then(title => {
                        console.log('Checking ' + title + ' page for movie rates...')
                    }) //This adds onscreen logs
                let scopeOfRatesOnBadgess = $$('h3 + div').$$('div small').getText().then(badges => (badges.length))
                expect(scopeOfRatesOnBadgess).toBe(20, 'Some films has no movie rates')
            })
        })
    }, 100000)

})