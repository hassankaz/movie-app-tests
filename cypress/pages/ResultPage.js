class ResultPage{
   
    checkTitle(title){
        cy.get('h3[class = "movie-title"]').eq(0).should('contain', title);
    }
    checkAllTitle(searchKeyword){
        cy.get('h3[class = "movie-title"]').each(element => {
        if (element.text().trim().includes(searchKeyword)){
            expect(element.text().trim()).to.include(searchKeyword);
        }})
    }
    checkNoResult(){
        cy.get('h3[class = "movie-title"]').should('not.exist');
    }
    checkNthMovie(n,title){
        cy.get('h3[class = "movie-title"]').eq(n).should('contain',title);
    }
    checkYear(year){ //cypress has a bug that instead of showing the first item in the array eq(0)/first() shows the last item
        cy.get('h2[class = "movie-year"]').first().should('contain', year);
    }   
    checkYearText(text){
        cy.get('h5[class="movie-year-text"]').eq(0).should('contain', text);
    }
    checkImg(){
        cy.get('img[class="movie-img"]').eq(0).should('be.visible');
    }
    checkImgSize(){
        cy.get('img[class="movie-img"]').invoke('outerWidth').should('eq', 40);
    }
    checkTime(title){
        cy.get('h3[class = "movie-title"]',{timeout: 300}).contains(title).should('be.visible');
    }
    checkTitleAsText(title){
        cy.get('h3[class="movie-title"]').eq(0).should('have.text',title);
    }
    updateTitle(titleA, titleB){
        cy.get('h3[class="movie-title"]').eq(0).invoke('text').invoke('replace',titleA, titleB).should('eq', titleB);
    }

}

export default ResultPage;