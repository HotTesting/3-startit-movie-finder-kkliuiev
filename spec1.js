describe('Test Suite', () => {
    it('Test Case', () => {
        browser.get('')
        let searchTitle = 'Action'
        element(by.linkText(searchTitle)).click();
        browser.sleep(5000);
        $('h4 a').click();
        browser.sleep(5000);
        let smallButton = element(by.className('label label-info m-r-md')).getText();
        expect(smallButton).toContain(searchTitle, 'Wrong page is shown!!')
    })

})