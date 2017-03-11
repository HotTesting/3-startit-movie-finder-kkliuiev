class AbstractPage {

    constructor() {
        this.URL = ''
    }
    open() {

        browser.get(this.URL)
        return this
    }
    // waitTillPageOpen() {
    //     let waitForEndElement = protractor.ExpectedConditions.presenceOf($('script'))
    //     browser.wait(waitForEndElement, 1000, 'First search result is not visible')
    //     return this
    // }
}

module.exports.AbstractPage = AbstractPage