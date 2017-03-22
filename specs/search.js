let HomePage = require('../pageObjects/HomePage.js').HomePage //HomePage class usage

describe('Search string', () => {

    let homePage // homePage variable
    let searchRequest = 'matrix' // Applied in Search field test (Test Case01)

    beforeEach(() => {
            homePage = new HomePage(); // New homePage object declaring

        })
        // Simple test for Search String usage, just search and compare first search result to inputted text
    it('should search for inputted text in db', () => {
        homePage.open();
        homePage.waitForResults();
        homePage.searchForMovie(searchRequest);
        homePage.waitForResults();
        homePage.getSearchResultsDisplayed();
        let movieTitle = homePage.searchMovieCards.$$('h4 a').first().getText().then(text => text.toLowerCase())
        expect(movieTitle).toContain(searchRequest, 'Search result contains wrong strings')
    })

    // Itteration through all array of search results titles
    it('should give only relevant results', () => {
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
    it('should show nothing if searched for non-existent', () => {

        homePage.open();
        homePage.searchForMovie('jjjjjjjjjjjjjjjj');
        homePage.getSearchResultsDisplayed();
        let searchResultsCount = homePage.searchMovieCards.$$('h3 + div').get(0).$$('h4 a').count()
        expect(searchResultsCount).toBe(0, 'First search result should not contain search string')
    })
})