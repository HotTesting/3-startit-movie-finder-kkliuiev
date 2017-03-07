describe('Test Suite', () => {
    it('should contain movie titles', () => {
        
        browser.get('')
        let b = 0 

        async function asyncAction() {
        b =  await $$('h3 + div').$$("h4 a").getText().length
        return b    
    }
    
       expect(await $$('h3 + div').$$("h4 a").getText().length).toBe(110,"Bug Bug Bug")
    })
})
