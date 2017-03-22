let HomePage = require('../pageObjects/HomePage.js').HomePage //HomePage class usage

describe('Genre redirection', () => {

    let homePage // homePage variable

    beforeEach(() => {
        homePage = new HomePage(); // New homePage object declaring

    })

    // Genre redirection test, itterating through array of Genres   
    it('Genre tab should redirect to relevant pages', () => {
        homePage.open()
        let a = homePage.genreList.getText().then(texts => {
            texts.map(data => {
                element(by.linkText(data)).click();
                homePage.waitForResults();
                $$('h4 a').first().click();
                homePage.waitForResults();
                $$('h2').get(0).getText().then(title => {
                        console.log('Checking ' + title + ' page')
                    }) //This adds onscreen logs
                homePage.waitForBadges();
                let badges = element.all(by.className('label label-info m-r-md')).getText();
                expect(badges).toContain(data, 'Wrong page is shown!!')
            })
        })
    }, 200000)
})