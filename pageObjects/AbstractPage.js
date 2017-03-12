class AbstractPage {

    constructor() {
        this.URL = ''
    }
    open() {

        browser.get(this.URL)
        return this
    }
    waitForResults() {
        browser.sleep(4000);
        // let waitForEndElement = protractor.ExpectedConditions.presenceOf($('movie-card h4 a'))
        // browser.wait(waitForEndElement, 10000000, 'Page is not ready!')
        // return this
    }
    waitForBadges() {
        let waitForEndElement = protractor.ExpectedConditions.presenceOf(element(by.className('label label-info m-r-md')))
        browser.wait(waitForEndElement, 5000, 'Page is not ready!')
        return this
    }
    waitTillPageOpen() {
        let waitForEndElement = protractor.ExpectedConditions.presenceOf($('script'))
        browser.wait(waitForEndElement, 1000, 'Page is not ready!')
        return this
    }
}

module.exports.AbstractPage = AbstractPage