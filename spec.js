describe('Test Suite', () => {

    let searchRequest = 'Matrix' // Applied in Search field test (Test Case01)
    let searchGenre = 'Action' // Applied in Genre tests (Test Case02,Test Case03)
    let wrongText = 'lolooloolloollo' //Applied in Negative Search test case (Test Case 04)
    it('Test Case01', () => {

        //Test for Search field
        browser.get('')
        let searchField = $("input[name='searchStr']")
        searchField.sendKeys(searchRequest);
        element(by.buttonText('Go!')).click()
        browser.sleep(5000);
        let movieCard = $('movie-card')
        let title = movieCard.$('h4 a').getText()
        expect(title).toContain(searchRequest, 'First search result should contain search string')

    })
    it('Test Case02', () => {
        // Test for correct Genre redirection 
        browser.get('')
        element(by.linkText(searchGenre)).getText().click();
        browser.sleep(15000);
        let title = $$('h3').getText()
        expect(title).toContain(searchGenre, 'Wrong page is shown!!')
    })
    it('Test Case03', () => {
        // Text for correct Genre badge on Movie page
        browser.get('')
        element(by.linkText(searchGenre)).click();
        browser.sleep(5000);
        $('h4 a').click();
        browser.sleep(5000);
        let smallButton = element(by.className('label label-info m-r-md')).getText();
        expect(smallButton).toContain(searchTitle, 'Wrong page is shown!!')
    })
    it('Test Case04', () => {

        //Test for Search field (Negative)
        browser.get('')
        let searchField = $("input[name='searchStr']")
        searchField.sendKeys('lolooloolloollo');
        element(by.buttonText('Go!')).click()
        browser.sleep(5000);
        let searchResult = $$('h3 + div').get(0).$$('h4 a').getText().count()
        expect(searchResult).toBe(0, 'First search result should contain search string')

    })

})