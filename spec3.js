describe('Test Suite', () => {
    it('Test Case01', () => {

        //Test for Search field
        browser.get('')
        let genres = $$(".list-group-item").getText().map(text => {
        element(by.linkText(text)).getText().then(console.log);
        browser.sleep(5000);
        $('h4 a').click();
        browser.sleep(5000);
        let smallButton = element(by.className('label label-info m-r-md')).getText();
        expect(smallButton).toContain(text, 'Wrong page is shown!!')
    })

})
})