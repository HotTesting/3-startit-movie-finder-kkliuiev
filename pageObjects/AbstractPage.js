class AbstractPage {

    constructor() {
        this.URL = ''
    }
    open() {

        browser.get(this.URL)
        return this
    }
}

module.exports.AbstractPage = AbstractPage