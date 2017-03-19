describe('Kasa.in.ua', () => { 
    browser.ignoreSynchronization = true
     it('should allow to sell tickets', () => {
        for (let i = 0; i< 10; i++) {
        browser.get('')
        let getMoreButtonWait = protractor.ExpectedConditions.presenceOf($('#getMoreEvents'))
        browser.wait(getMoreButtonWait, 9000, 'First search result is not visible')
        $('#getMoreEvents').click();
        browser.manage().timeouts().implicitlyWait(9000);
        $('a[href*="payment-and-delivery"]').click();
        $('a[href*="#event-map-anchor"]').click();
        browser.sleep(1000)
        $('#row0col0sector2436').click();
         browser.sleep(1000)
        $('a[href*="/create-order"]').click();
         browser.sleep(3000)
        $('#tickets-submit').click();
         browser.sleep(3000)
        $('a[href*="#payment-1"]').click();
         browser.sleep(3000)
        element(by.buttonText('Оплата готівкою в касі')).click()
         browser.sleep(2000)
         $('#pickupcheckoutform-firstname').sendKeys('Test Name' + i)
         $('#pickupcheckoutform-lastname').sendKeys('Test LastName' + i )
         $('#pickupcheckoutform-phone').sendKeys('0123456789')
         $('#pickupcheckoutform-email').sendKeys('test@test.com')
         $('#pickupcheckoutform-usermessage').sendKeys('Test step' + i)
         $('#pickupcheckoutform-acceptorder').click();
         browser.sleep(3000)
         element(by.buttonText('Підтвердити та оформити замовлення')).click()

        expect($('.col-sm-12').$$('.text-bold').get(0).getText()).toContain('Вітаємо!')}
     }
     ,50000)
}
)