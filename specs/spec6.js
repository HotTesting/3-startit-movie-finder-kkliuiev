let HomePage = require('../pageObjects/HomePage.js').HomePage

describe('Home Page', () => {

    let homePage // homePage variable
    let searchRequest = 'matrix' // Applied in Search field test (Test Case01)
    
    beforeEach(() => {
        homePage = new HomePage();

    })
    xit('Search string should search for inputted text in db', () => {
        homePage.open();
        homePage.searchForMovie(searchRequest);
        homePage.getSearchResults();
        let movieTitle = homePage.movieCards.$$('h4 a').first().getText().then(text => text.toLowerCase())
                    expect(movieTitle).toContain(searchRequest, 'Search result contains wrong strings')
    })

    xit('Search should give only relevant results', () => {
        homePage.open();
        homePage.searchForMovie(searchRequest);
        homePage.getSearchResults();
        let movieTitles = homePage.movieCards.$$('h4 a').getText().then(texts => {
                texts.map(text => {
                    expect(text.toLowerCase()).toContain(searchRequest, 'Search result contains wrong strings')
    })
})
    })
    
    it('Search should show nothing if searched for non-existent', () => {

            homePage.open();
            homePage.searchForMovie('jjjjjjjjjjjjjjjj');
            //homePage.getSearchResults();
            let searchResultsCount =  homePage.movieCards.$$('h3 + div').get(0).$$('h4 a').count()
            expect(searchResultsCount).toBe(0, 'First search result should not contain search string')
        })
})