describe('Test Suite', () => {
       it('should contain movie genres', () => { 
        browser.get('')
        let genresList = $$('.collapse.navbar-collapse.movies-cat').$$('.list-group-item').getText().then(genres => {console.log(genres)})
        
    })

})
