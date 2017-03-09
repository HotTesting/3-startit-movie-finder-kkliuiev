let HomePage = require('../pageObjects/HomePage.js').HomePage

describe('Test Suite', () => {
    let homePage

    beforeEach(() => {
        homePage = new HomePage();

    })

    it('should contain movie titles', () => {
        homePage.open();
        let scopeOfTitles = $$('h3 + div').$$('h4 a').getText().then(titles => titles.length)
        expect(scopeOfTitles).toBe(40, 'Some films has no titles')

    })
})