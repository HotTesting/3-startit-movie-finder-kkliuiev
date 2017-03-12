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
        let movieTitle = homePage.movieCards.$$('h4 a').first().getText().then(text => text.toLowerCase())
                    expect(movieTitle).toContain(searchRequest, 'Search result contains wrong strings')
    })

    it('Search should give only relevant results', () => {
        homePage.open();
        homePage.waitForResults();
        homePage.searchForMovie(searchRequest);
        homePage.getSearchResultsDisplayed();
        let movieTitles = homePage.movieCards.$$('h4 a').getText().then(texts => {
                texts.map(text => {
                    expect(text.toLowerCase()).toContain(searchRequest, 'Search result contains wrong strings')
    })
})
    })
    
    it('Search should show nothing if searched for non-existent', () => {

            homePage.open();
            homePage.searchForMovie('jjjjjjjjjjjjjjjj');
            homePage.getSearchResultsDisplayed();
            let searchResultsCount =  homePage.movieCards.$$('h3 + div').get(0).$$('h4 a').count()
            expect(searchResultsCount).toBe(0, 'First search result should not contain search string')
        })
     it('Genre tab should redirect to relevant pages', () => {
            homePage.open()
            let a = homePage.genreList.getText().then(texts=>{texts.map(data => {
                //browser.get('')
                element(by.linkText(data)).click();
                homePage.waitForResults();
                $$('h4 a').first().click();
                homePage.waitForResults();
                $('h2').getText().then(title=>{console.log(title)})
                homePage.waitForBadges();
                let badges = element.all(by.className('label label-info m-r-md')).getText();
                expect(badges).toContain(data, 'Wrong page is shown!!')})})
        },200000)
              
})