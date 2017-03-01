describe('Main page', () => {

    //common variables
    let searchRequest = 'matrix' // Applied in Search field test (Test Case01)
    let searchGenre = 'Crime' // Applied in Genre tests (Test Case02,Test Case03)
    let wrongText = 'lolooloolloollo' //Applied in Negative Search test case (Test Case 04)
    //Serch field tests   

    describe('Search field', () => {
        it('should search for inputted text in db', () => {

            //Test for Search field
            browser.get('')
            let searchField = $("input[name='searchStr']")
            searchField.sendKeys(searchRequest);
            element(by.buttonText('Go!')).click()
            browser.sleep(8000);
            let movieCard = $$('movie-card').first()
            let title = movieCard.$('h4 a').getText().then(text => text.toLowerCase())
            expect(title).toContain(searchRequest, 'First search result should contain search string')

        })

        it('should give only relevant results', () => {

            //Test for Search field (Negative)
            browser.get('')
            let searchField = $("input[name='searchStr']")
            searchField.sendKeys('lolool4444oolloollo');
            element(by.buttonText('Go!')).click()
            browser.sleep(8000);
            let searchResult = $$('h3 + div').get(0).$$('h4 a').getText().count()
            expect(searchResult).toBe(0, 'First search result should contain search string')
        })

        it('Test for Search field results (Will fail if result contains non relevant items)', () => {
            browser.get('');
            let searchField = $("input[name='searchStr']");
            searchField.sendKeys(searchRequest);
            element(by.buttonText('Go!')).click();
            browser.sleep(5000);
            let allArray = $$('h3 + div').get(0);
            let allText = allArray.$$("h4 a").getText().then(texts => {
                texts.map(text => {
                    expect(text.toLowerCase()).toContain(searchRequest, 'Search result contains wrong strings')
                })

            });

        })

    })

    describe('Genre redirection', () => {
        it('should redirect to relevant records', () => {
            // Test for correct Genre redirection 
            browser.get('')
            element(by.linkText(searchGenre)).getText().click();
            browser.sleep(15000);
            let title = $$('h3').getText()
            expect(title).toContain(searchGenre, 'Wrong page is shown!!')
        })
        
        let dataCollection = ["Action","Adventure","Animation","Comedy","Crime","Documentary","Drama","Family","Fantasy","History","Horror","Music","Mystery","Romance","Science Fiction","TV Movie","Thriller","War","Western"]
    dataCollection.map(data=> {
        
        it(`should redirect to items with relevant badges for ${data}`, () => {
            // Text for correct Genre badge on Movie page
            browser.get('')
            element(by.linkText(data)).click();
            browser.sleep(5000);
            $('h4 a').click();
            browser.sleep(5000);
            let smallButtons = element.all(by.className('label label-info m-r-md')).getText();
            expect(smallButtons).toContain(data, 'Wrong page is shown!!')
        })

    })

})