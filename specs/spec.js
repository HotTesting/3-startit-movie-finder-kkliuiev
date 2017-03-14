let HomePage = require('../pageObjects/HomePage.js').HomePage //HomePage class usage
//let ActorPage = require('./pageObjects/ActorPage.js').ActorPage

describe('Home Page', () => { 

    let homePage // homePage variable
    //let actorPage
    let searchRequest = 'matrix' // Applied in Search field test (Test Case01)

    beforeEach(() => {
       homePage = new HomePage(); // New homePage object declaring
       //actorPage = new ActorPage()
    })
// Simple test for Search String usage, just search and compare first search result to inputted text
    xit('Search string should search for inputted text in db', () => {
        homePage.open();
        homePage.waitForResults();
        homePage.searchForMovie(searchRequest);
        homePage.waitForResults();
        homePage.getSearchResultsDisplayed();
        let movieTitle = homePage.searchMovieCards.$$('h4 a').first().getText().then(text => text.toLowerCase())
        expect(movieTitle).toContain(searchRequest, 'Search result contains wrong strings')
    })

// Itteration through all array of search results titles
    xit('Search should give only relevant results', () => {
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

// Negative test, search for non-existent should result 0
    xit('Search should show nothing if searched for non-existent', () => {

        homePage.open();
        homePage.searchForMovie('jjjjjjjjjjjjjjjj');
        homePage.getSearchResultsDisplayed();
        let searchResultsCount = homePage.searchMovieCards.$$('h3 + div').get(0).$$('h4 a').count()
        expect(searchResultsCount).toBe(0, 'First search result should not contain search string')
    })

 // Genre redirection test, itterating through array of Genres   
    xit('Genre tab should redirect to relevant pages', () => {
        homePage.open()
        let a = homePage.genreList.getText().then(texts => {
            texts.map(data => {
                element(by.linkText(data)).click();
                homePage.waitForResults();
                $$('h4 a').first().click();
                homePage.waitForResults();
                $$('h2').get(0).getText().then(title => {
                    console.log('Checking ' + title + ' page')
                }) //This adds onscreen logs
                homePage.waitForBadges();
                let badges = element.all(by.className('label label-info m-r-md')).getText();
                expect(badges).toContain(data, 'Wrong page is shown!!')
            })
        })
    }, 200000)

//Test for Movie Cards contents. Each of the Movie Cards should contain movie titles. Itterating through array of Genres
    xit('Movie Cards should contain movie titles', () => {
        homePage.open()
        let a = homePage.genreList.getText().then(texts => {
            texts.map(data => {
                element(by.linkText(data)).click();
                homePage.waitForResults();
                $$('h3').get(0).getText().then(title => {
                    console.log('Checking ' + title + ' page for titles...')
                }) //This adds onscreen logs
                let scopeOfTitles = $$('h3 + div').$$('h4 a').getText().then(titles => titles.length)
                expect(scopeOfTitles).toBe(20, 'Some films has no titles')
            })
        })

    }, 100000)

//Test for Movie Cards contents. Each of the Movie Cards should contain movie images. Itterating through array of Genres
    xit('Movie Cards should contain movie images', () => {
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
    xit('Movie Cards should contain release dates', () => {
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
    xit('Movie Cards should contain movie rates', () => {
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
  
   
     it('actorPage', () => {
         let i   
    for (i=0;i<1000;i++) {
        browser.get('/actor/'+i)
        console.log(i)
        
        expect(true).toBe(true, 'Some films has no movie rates')}},1000000)
    
})
