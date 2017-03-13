let HomePage = require('../pageObjects/HomePage.js').HomePage

describe('Home Page', () => {

    let homePage // homePage variable
    let searchRequest = 'matrix' // Applied in Search field test (Test Case01)
    let searchGenre = 'Crime'

    beforeEach(() => {
        homePage = new HomePage();

    })

    it('Search string should search for inputted text in db', () => {
        homePage.open();
        homePage.waitForResults();
        homePage.searchForMovie(searchRequest);
        homePage.waitForResults();
        homePage.getSearchResultsDisplayed();
        let movieTitle = homePage.searchMovieCards.$$('h4 a').first().getText().then(text => text.toLowerCase())
        expect(movieTitle).toContain(searchRequest, 'Search result contains wrong strings')
    })

    it('Search should give only relevant results', () => {
        homePage.open();
        homePage.waitForResults();
        homePage.searchForMovie(searchRequest);
        homePage.getSearchResultsDisplayed();
        let movieTitles = homePage.searchMovieCards.$$('h4 a').getText().then(texts => {
            texts.map(text => {
                expect(text.toLowerCase()).toContain(searchRequest, 'Search result contains wrong strings')
            })
        })
    })

    it('Search should show nothing if searched for non-existent', () => {

        homePage.open();
        homePage.searchForMovie('jjjjjjjjjjjjjjjj');
        homePage.getSearchResultsDisplayed();
        let searchResultsCount = homePage.searchMovieCards.$$('h3 + div').get(0).$$('h4 a').count()
        expect(searchResultsCount).toBe(0, 'First search result should not contain search string')
    })
    it('Genre tab should redirect to relevant pages', () => {
        homePage.open()
        let a = homePage.genreList.getText().then(texts => {
            texts.map(data => {
                element(by.linkText(data)).click();
                homePage.waitForResults();
                $$('h4 a').first().click();
                homePage.waitForResults();
                $$('h2').get(0).getText().then(title => {
                    console.log('Checking ' + title + ' page')
                })
                homePage.waitForBadges();
                let badges = element.all(by.className('label label-info m-r-md')).getText();
                expect(badges).toContain(data, 'Wrong page is shown!!')
            })
        })
    }, 200000)

    it('Movie Cards should contain movie titles', () => {
        homePage.open()
        let a = homePage.genreList.getText().then(texts => {
            texts.map(data => {
                element(by.linkText(data)).click();
                homePage.waitForResults();
                $$('h3').get(0).getText().then(title => {
                    console.log('Checking ' + title + ' page for titles...')
                })
                let scopeOfTitles = $$('h3 + div').$$('h4 a').getText().then(titles => titles.length)
                expect(scopeOfTitles).toBe(20, 'Some films has no titles')
            })
        })

    }, 100000)

    it('Movie Cards should contain movie images', () => {
        homePage.open()
        let a = homePage.genreList.getText().then(texts => {
            texts.map(data => {
                element(by.linkText(data)).click();
                homePage.waitForResults();
                $$('h3').get(0).getText().then(title => {
                    console.log('Checking ' + title + ' page for movie images...')
                })
                let scopeOfImages = $$('h3 + div').$$('img').then(images => images.length)
                expect(scopeOfImages).toBe(20, 'Some films has no images')
            })
        })
    }, 100000)

    it('Movie Cards should contain release dates', () => {
        homePage.open()
        let a = homePage.genreList.getText().then(texts => {
            texts.map(data => {
                element(by.linkText(data)).click();
                homePage.waitForResults();
                $$('h3').get(0).getText().then(title => {
                    console.log('Checking ' + title + ' page for release dates...')
                })
                let scopeOfReleaseDates = $$('h3 + div').$$('div p:first-of-type').getText().then(dates => dates.length)
                expect(scopeOfReleaseDates).toBe(20, 'Some films has no release dates')
            })
        })
    }, 100000)

    it('Movie Cards should contain movie rates', () => {
        homePage.open()
        let a = homePage.genreList.getText().then(texts => {
            texts.map(data => {
                element(by.linkText(data)).click();
                homePage.waitForResults();
                $$('h3').get(0).getText().then(title => {
                    console.log('Checking ' + title + ' page for movie rates...')
                })
                let scopeOfRatesOnBadgess = $$('h3 + div').$$('div small').getText().then(badges => (badges.length))
                expect(scopeOfRatesOnBadgess).toBe(20, 'Some films has no movie rates')
            })
        })
    }, 100000)

})