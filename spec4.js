describe('Test Suite', () => {
    it('should contain movie titles', () => {
        
        browser.get('')
       let scopeOfReleaseDates = await $$('h3 + div').$$('div p:first-of-type').getText().then(dates => dates.length)
            expect(scopeOfReleaseDates).toBe(40, 'Some films has no release dates')

    })
})
