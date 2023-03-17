import SearchPage from "./SearchPage";
class ResultPage{
   

displayTitle(title){
cy.get('h3').first().should('contain', title);
}

displayYear(year){
    cy.get('[class = "movie-year"]').should('contain', year);
}
displayYearText(text){
     cy.get('[class="movie-year-text"]').should('contain', text);
}

displayImg(img){
    cy.get('[class="movie-img"]').should.be.visible();
}

checkImgSize(){
    cy.get('[class="movie-img"]').invoke('outerWidth').should('eq', 40);
}

displayTime(time){
    cy.get('[class = "movie-title"]',{timeout: 300}).should('be.visible');
}

}

export default ResultPage;