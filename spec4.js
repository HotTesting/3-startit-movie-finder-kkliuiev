describe('Test Suite', () => {
    let searchRequest = 'matrix'
    it('should search for inputted text in db', () => {

        //Test for Search field
        browser.get('')
        let searchField = $("input[name='searchStr']")
        searchField.sendKeys(searchRequest);
        element(by.buttonText('Go!')).click()
        browser.sleep(8000);
        let i =0;
        let scopeOfTexts = $$('h3 + div').$$('h4 a').then(texts => texts.map(text => {
            console.log(i);
             i++;
            expect(text.isPresent()).toBe(true, 'First search result should contain search string')})

        )
    })
})
