describe('Test Suite', () => {
    it('Test Case01', () => {

        browser.get('')
        let card = $$('h3 + div').$$('h4 a').getText().then(function(text) {
            expect(text).toContain('ddddddd')
});
   
})
})