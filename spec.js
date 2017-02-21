describe('Test Suite', () => {
    it('Test Case', () => {
        browser.get('')
        let searchField = $("input[name='searchStr']")
        let searchRequest = 'The Lord'
        searchField.sendKeys(searchRequest)
        element(by.buttonText('Go!')).click()
        browser.sleep(5000)
        let movieCard = $('movie-card')
        let title = movieCard.$('h4 a').getText()
        expect(title).toContain(searchRequest, 'First search result should contain search string')

    })

})