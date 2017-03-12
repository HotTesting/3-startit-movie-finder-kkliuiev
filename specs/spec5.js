let HomePage = require('../pageObjects/HomePage.js').HomePage

describe('Test Suite', () => {
let homePage = new HomePage()
       it('should contain movie genres', () => { 
        browser.get('')
        homePage.getPageLoaded()
        // let waitForEndElement = protractor.ExpectedConditions.presenceOf($('script'))
        // browser.wait(waitForEndElement, 100, 'First search result is not visible')
        let searchField = $("input[name='searchStr']")
            searchField.sendKeys('Matrix');
            element(by.buttonText('Go!')).click()
        homePage.getSearchResultsDisplayed()    
        // let waitForFirstMovieCard = protractor.ExpectedConditions.visibilityOf(element(by.cssContainingText('div','Search Results')).$$('movie-card').first())    
        // browser.wait(waitForFirstMovieCard, 10000, 'First search result is not visible')
        let title = $$('movie-card').first().$('h4 a').getText().then(text => text.toLowerCase())
        expect(title).toContain('matrix', 'First search result should contain search string')
    })

})
