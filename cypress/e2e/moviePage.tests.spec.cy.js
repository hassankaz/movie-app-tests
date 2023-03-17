import SearchPage from "../pages/SearchPage"
import ResultPage from "../pages/ResultPage"
import MoviePage from "../pages/MoviePage"
//import { result } from "cypress/types/lodash";

describe('Movie Page tests', ()=>{
    const searchMovie = new SearchPage();
    const result = new ResultPage();
    const movie = new MoviePage();
    beforeEach(()=>{
       cy.visit("http://127.0.0.1:8080/");
       // check if the homepage is correct
       cy.title().should('eq','OMDb');
       
       })
    //f) validate opening movie page displays correct content

    it('movie page card', ()=>{
     searchMovie.search('Puss in Boots');
     result.displayTitle('Puss in Boots');
     //the test fail to open the movie page from here
     movie.displayCard();
     movie.displayMovieTitle('Puss in Boots: The Last Wish');
     movie.displayMovieImage();
    })


})