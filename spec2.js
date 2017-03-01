describe('Test Suite', () => {
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