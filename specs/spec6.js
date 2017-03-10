let HomePage = require('../pageObjects/HomePage.js').HomePage

describe('Home Page', () => {

    let homePage // homePage variable
    let searchRequest = 'matrix' // Applied in Search field test (Test Case01)
    let searchGenre = 'Crime'
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
    
    xit('Search should show nothing if searched for non-existent', () => {

            homePage.open();
            homePage.searchForMovie('jjjjjjjjjjjjjjjj');
            homePage.getSearchResults();
            let searchResultsCount =  homePage.movieCards.$$('h3 + div').get(0).$$('h4 a').count()
            expect(searchResultsCount).toBe(0, 'First search result should not contain search string')
        })
     it('Genre tab should redirect to relevant pages', () => {
            homePage.open()
            browser.sleep(15000);
            let a = homePage.genreList
            a.map(data => {console.log(data)})
            // $$('.collapse.navbar-collapse.movies-cat').$$('.list-group-item').element(by.linkText(searchGenre)).first().click();
            // homePage.waitTillPageOpen()
            // let title = $$('h3').get(0).getText()
            expect(title).toContain(searchGenre, 'Wrong page is shown!!')
        })   
})