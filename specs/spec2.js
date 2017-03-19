describe('Home Page', () => { 
    browser.ignoreSynchronization = true
     it('actorPage', () => {

        browser.get('')
        let getMoreButtonWait = protractor.ExpectedConditions.presenceOf($('#getMoreEvents'))
        browser.wait(getMoreButtonWait, 5000, 'First search result is not visible')
        $('#getMoreEvents').click();
        brow
        let Target = $$('.row5').$$('article').$$('.inner').$$('.title').getText().then(texts=>texts.map(text => {console.log(text)}));
        //let Click = $('btn-buy').click();
        expect(true).toBe(true)
     }
     )
}
)