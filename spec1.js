describe('Test Suite', () => {
    it('Test Case01', () => {
        browser.get('')
        let searchField = $("input[name='searchStr']")
        searchField.sendKeys(searchRequest);
        element(by.buttonText('Go!')).click()
        browser.sleep(5000)
        let movieCard = $('movie-card')
        let title = movieCard.$('h4 a').getText()
        expect(title).toContain(searchRequest, 'First search result should contain search string')

    })

})