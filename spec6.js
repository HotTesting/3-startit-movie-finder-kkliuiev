describe('Test Suite', () => {
    it('should contain movie titles', () => {
        
        browser.get('')
       let scopeOfTitles = $$('h3 + div').$$('h4 a').getText().then(titles => titles.length)
            expect(scopeOfTitles).toBe(40, 'Some films has no titles')

    })
})
