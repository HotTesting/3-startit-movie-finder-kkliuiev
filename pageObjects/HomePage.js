let AbstractPage = require('./AbstractPage.js').AbstractPage

class HomePage extends AbstractPage {
    
   constructor(url) {
        super()
        this.URL = ''

        this.searchField = $("input[name='searchStr']")
        this.goButton = element(by.buttonText('Go!')) //Button to launch search
        this.genreList = $$('.collapse.navbar-collapse.movies-cat').$$('.list-group-item')
        this.movieCards = element.all(by.cssContainingText('movies div', 'Search Results')).get(0).$$('movie-card')
    }

    searchForMovie(searchRequest) {
        this.searchField.sendKeys(searchRequest)
        this.goButton.click()
    }    

    getSearchResults() {
        let waitForFirstMovieCard = protractor.ExpectedConditions.visibilityOf(this.movieCards.first())
        browser.wait(waitForFirstMovieCard, 1000, 'First search result is not visible')
    }
    getSearchResultsDisplayed() {
        let waitForFirstMovieCard = protractor.ExpectedConditions.visibilityOf(element(by.cssContainingText('div','Search Results')).$$('movie-card').first())    
        browser.wait(waitForFirstMovieCard, 500, 'First search result is not visible')
    }

    // with returning Promise object 
    // searchForMovie(searchRequest) {
    //     this.searchField.sendKeys(searchRequest)
    //     this.goButton.click()

    //     return browser.wait($('movie_card').isPresent(), 5000)
    // }


    // search with default wait or custom wait
    // searchForMovie(searchRequest, waitForResults) {
    //     this.searchField.sendKeys(searchRequest)
    //     this.goButton.click()

    //     if (waitForResults == undefined) {
    //         browser.sleep(5000)
    //     } else {
    //         waitForResults()
    //     }
    // }


}

module.exports.HomePage = HomePage
