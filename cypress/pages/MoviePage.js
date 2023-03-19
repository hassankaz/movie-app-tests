class MoviePage{

    displayCard(movieTitle){
        cy.get('h3[class=""]').contains(movieTitle).first().click();
        cy.get('div[class="movie-card"]').should('have.length', 1).should('be.visible');
    }
    displayMovieTitle(title){
        cy.get('h2').should('contain',title);   
    }
    displayMovieImage(){
        cy.get('[class="img-container"]').should('be.visible');    
    }
}

export default MoviePage;