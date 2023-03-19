class MoviePage{

displayCard(movieTitle){
cy.get('h3').contains(movieTitle).first().click();
cy.get('div[class="movie-card"]').should('be.visible');
}
displayMovieTitle(title){
cy.get('h2').should('contain',title);
}
displayMovieImage(){
cy.get('[class="img-container"]').should('be.visible');    
}
}

export default MoviePage;