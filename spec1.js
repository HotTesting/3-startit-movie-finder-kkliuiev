describe('Test Suite', () => {
    it('Test Case', () => {
        browser.get('')
        let searchTitle = 'Action'
        element(by.linkText(searchTitle)).getText().click();
        browser.sleep(5000);
        $('h4 a').click();
        browser.sleep(5000);

    })

})