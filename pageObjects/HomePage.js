let AbstractPage = require('./AbstractPage.js').AbstractPage

class HomePage extends AbstractPage {
    
   constructor(url) {
        super()
        this.URL = ''

        this.searchField = $("input[name='searchStr']")
        this.goButton = element(by.buttonText('Go!')) //Button to launch search
        this.genreList = $$('.collapse.navbar-collapse.movies-cat').$$('.list-group-item')
        this.searchMovieCards = element.all(by.cssContainingText('movies div', 'Search Results')).get(0).$$('movie-card')
    }

    searchForMovie(searchRequest) {
        this.searchField.sendKeys(searchRequest)
        this.goButton.click()
    }    

    getSearchResults() {
        let waitForFirstMovieCard = protractor.ExpectedConditions.visibilityOf(this.searchMovieCards.first())
        browser.wait(waitForFirstMovieCard, 1000, 'First search result is not visible')
    }
    getSearchResultsDisplayed() {
        let waitForFirstMovieCard = protractor.ExpectedConditions.visibilityOf(element(by.cssContainingText('div','Search Results')).$$('movie-card').first())    
        browser.wait(waitForFirstMovieCard, 500, 'First search result is not visible')
    }

}

module.exports.HomePage = HomePage
