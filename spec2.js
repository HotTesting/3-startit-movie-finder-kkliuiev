describe('Test Suite', () => {
    it('Test Case01', () => {
        browser.get('');
        let searchField = $("input[name='searchStr']");
        let searchRequest = 'Matrix';
        searchField.sendKeys(searchRequest);
        element(by.buttonText('Go!')).click();
        browser.sleep(5000);
        let allArray = $$('h3 + div').get(0);
        let allText = allArray.$$("h4 a").getText();
        allText.map(text => {
        expect(text).toContain('Matrix','Search result contains wrong strings')
    });

})
})