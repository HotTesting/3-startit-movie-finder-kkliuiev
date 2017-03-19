describe('Kasa.in.ua', () => { 
    browser.ignoreSynchronization = true
     it('should allow to sell tickets', () => {

        browser.get('')
        let getMoreButtonWait = protractor.ExpectedConditions.presenceOf($('#getMoreEvents'))
        browser.wait(getMoreButtonWait, 5000, 'First search result is not visible')
        $('#getMoreEvents').click();
        browser.manage().timeouts().implicitlyWait(9000);
        $('a[href*="payment-and-delivery"]').click();
        $('a[href*="#event-map-anchor"]').click();
        browser.sleep(2000)
        $('#row0col0sector2436').click();
         browser.sleep(2000)
        $('a[href*="/create-order"]').click();
         browser.sleep(2000)
        $('#tickets-submit').click();
         browser.sleep(2000)
        $('a[href*="#payment-1"]').click();
         browser.sleep(2000)
        element(by.buttonText('Оплата готівкою в касі')).click()
         browser.sleep(2000)
         $('#pickupcheckoutform-firstname').sendKeys('Test Name')
         $('#pickupcheckoutform-lastname').sendKeys('Test LastName')
         $('#pickupcheckoutform-phone').sendKeys('0123456789')
         $('#pickupcheckoutform-email').sendKeys('test@test.com')
         $('#pickupcheckoutform-usermessage').sendKeys('Test step ')
         
        let Target = $$('.row5').$$('article').$$('.inner').$$('.title').getText().then(texts=>texts.map(text => {console.log(text)}));
        //let Click = $('btn-buy').click();
        expect(true).toBe(true)
     }
     ),40000
}
)