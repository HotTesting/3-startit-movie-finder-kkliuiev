describe('Test Suite', () => {
        it('should contain movie rates', () => {
            browser.get('')
            let i = 0;
            let scopeOfRatesOnBadgess= $$('h3 + div').$$('div small').getText().then(badges => (badges.length))
                    expect(scopeOfRatesOnBadgess).toBe(40, 'First search result should contain search string')
                })
})

