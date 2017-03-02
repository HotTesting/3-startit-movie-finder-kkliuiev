describe('Test Suite', () => {


    it('should access first div', () => {
        browser.get('')
        let movieCards = $$('movie-card')
        let firstPic = movieCards.$$('div').then(divElements => {
            divElements.map(divElement => {
                divElement.$$('small').then(rates => {
                    rates.map(rate =>
                        expect(rate.isPresent()).toBe(true, 'No element!')
                    )
                })
            })
        })
    })
})
