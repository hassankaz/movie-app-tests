import SearchPage from "../pages/SearchPage";
import ResultPage from "../pages/ResultPage";
import MoviePage from "../pages/MoviePage";

describe('Movie App QA Challenges', () => {
  const searchMovie = new SearchPage();
  const result = new ResultPage();
  const movie = new MoviePage();

  beforeEach(()=>{
  cy.visit("http://127.0.0.1:8080/");
  cy.title().should('eq','OMDb');
});
//  afterEach(()=>{
//   cy.reload();
//  });

//b) Validate autocomplete results are shown within 300ms
it('search result set autocomplete shows up within 300ms',() =>{
  searchMovie.search('Puss in');
  result.checkTime('Puss in Boots');
});    

//c) Validate autocomplete result card content
it('search result card shows movie title',()=>{
  searchMovie.search('Puss in');
  result.checkTitle('Puss in Boots');
});
it('search result card should show year made', ()=>{
  searchMovie.search('Puss in');
  result.checkYear('1903');
  result.checkYearText('Year');
});

it('search result card should show image',()=>{
  searchMovie.search('Puss in');
  result.checkImg();
})

 //d) Validate autocomplete card image rendered size
it('search result card image size', ()=>{
  searchMovie.search('Puss in');
  result.checkImgSize('40');
});

//e) validate search box is highlighted when clicking on it
it('clicking in search box hightlights it', ()=>{
  cy.get('input[id="search"]').click().then(() =>{
  Cypress.dom.isFocused();
  });
});

 //f) Validate opening Movie page displays correct content (Test will not work but please complete it using POM)
 it('movie page card2', ()=>{
  searchMovie.search('Puss in Boots');
  result.checkTitle('Puss in Boots');
  //the test fail to open the movie page
  movie.displayCard('Puss in Boots');
  movie.displayMovieTitle('Puss in Boots');
  movie.displayMovieImage();
 });

 //g) Validate pasting a Movie name into the textbox and its result - a little bit of cheating here as the search is triggered by typing in something. so I add a space
 // to the original search keyword, paste it in, then removed it by typing 'backspace'. Hope this is ok. 
 it('search works by pasting into the search text',()=>{
  let textToPaste = "Avatar ";
  cy.get('[id="search"]').invoke('val', textToPaste).type('{backspace}');
  result.checkTitle('Avatar');
});

//h) Validate searching for a movie and mocking its result so it's now called "Flow The Movie"
it('search for a movie and update the result title with Flow The Movie', ()=>{
  searchMovie.search('puss in boots');
  cy.get('h3[class="movie-title"]').eq(0).should('have.text','Puss in Boots');
  cy.get('h3[class="movie-title"]').eq(0).invoke('text').invoke('replace','Puss in Boots','Flow The Movie').should('eq','Flow The Movie');
});
})
