import ResultPage from "./ResultPage";

class MoviePage extends ResultPage{

displayCard(){
cy.get('h3').contains(movieTitle).first().click();
cy.get('div[class="movie-card"]').should('be.visible');
}
displayMovieTitle(title){
cy.get('h2').should('contain',title);
}
displayMovieImage(){
cy.get('[class="img-container"]').should('be.visible');    
}
displaySearchText(text){
cy.get('[id="search"]').invoke('placeholder').should('contain', text);    
}


}

export default MoviePage;