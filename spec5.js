describe('Test Suite', () => {
        browser.get('')
        let i = 0;
        let scopeOfImages = $$('h3 + div').$$('img').then(images => images.length)
        expect(scopeOfImages).toBe(40, 'First search result should contain search string')
    })

})
