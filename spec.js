describe('Test Suite', () => {
    let searchTitle = 'Action'
    it('Test Case', () => {
        browser.get('')
        let searchField = $("input[name='searchStr']")
        let searchRequest = 'The Lord of the'
        searchField.sendKeys(searchRequest)
        element(by.buttonText('Go!')).click()
        browser.sleep(5000)
        let movieCard = $('movie-card')
        let title = movieCard.$('h4 a').getText()
        expect(title).toContain(searchRequest, 'First search result should contain search string')

    })
    it('Test Case', () => {
        browser.get('')
            //let searchTitle = 'Action'
        element(by.linkText(searchTitle)).getText().click();
        browser.sleep(15000);
        let title = $('h3').getText()
        expect(title).toContain(searchTitle, 'Wrong page is shown!!')
    })
    it('Test Case', () => {
        browser.get('')
        element(by.linkText(searchTitle)).click();
        browser.sleep(5000);
        $('h4 a').click();
        browser.sleep(5000);
        let smallButton = element(by.className('label label-info m-r-md')).getText();
        expect(smallButton).toContain(searchTitle, 'Wrong page is shown!!')
    })

})