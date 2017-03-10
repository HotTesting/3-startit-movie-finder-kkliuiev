class AbstractPage {

    constructor() {
        this.URL = ''
    }
    open() {

        browser.get(this.URL)
        return this
    }
    waitTillPageOpen() {
        let waitForFirstElement = protractor.ExpectedConditions.presenceOf($('script'))
        browser.wait(waitForFirstElement, 1000, 'First search result is not visible')
        return this
    }
}

module.exports.AbstractPage = AbstractPage