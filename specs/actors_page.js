let HomePage = require('../pageObjects/HomePage.js').HomePage //HomePage class usage

describe('Home Page', () => {

    let homePage // homePage variable
    let searchRequest = 'matrix' // Applied in Search field test (Test Case01)

    beforeEach(() => {
        homePage = new HomePage(); // New homePage object declaring

    })
    it('Search for an actor', () => {
        let i
        let FilmName
        let ActorName
        for (i = 0; i < 20; i++) {
            homePage.open()
            homePage.waitTillMovieCards(100000)
            $$('h4 a').get(i).click()
            homePage.waitTillThumbnails(10000)
            let FilmName = $$('h2').get(0).getText()
            let FilmRate = $$('small').get(0).getText()
            let FilmNameClean
            protractor.promise.all([FilmName, FilmRate]).then(results => {
                let longname = results[0]
                let rate = results[1]
                let rateLength = rate.length
                FilmNameClean = longname.slice(0, -rateLength)
                console.log(FilmNameClean)
                return FilmNameClean
            })
            let ActorName = $$('h6').$$('a').get(0).getText()
            $$('a[href*="actor"]').get(0).click()
            browser.sleep(5000)
            let allTitles = $$('h4 a').getText()
            expect(allTitles).toContain(FilmNameClean, 'Some films has no movie rates')

        }
    }, 100000)

})