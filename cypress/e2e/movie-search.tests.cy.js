import SearchPage from "../pages/SearchPage"
import ResultPage from "../pages/ResultPage"



describe('Search tests', () => {
  const searchMovie = new SearchPage();
  const result = new ResultPage();

 beforeEach(()=>{
  //load the app
 cy.visit("http://127.0.0.1:8080/");
 // check if the homepage is correct
 cy.title().should('eq','OMDb');
 
 })
//  afterEach(()=>{
//  cy.reload();

//  })

// a) validate doing a search work as expected
it('search works: default case',()=>{
  searchMovie.search('Avatar');
  result.checkTitle('Avatar');
}); 

it('search text is case insensitive',()=>{
  searchMovie.search('avatar');
  result.checkTitle('Avatar');
}); 

it('search with multiple words',()=>{
 searchMovie.search('puss in boots');
 result.checkTitle('Puss in Boots');
})

it('search result shows the 3rd movie',()=>{
  searchMovie.search('puss in'); 
  result.checkNthMovie(3,'Puss in Boots');
})

it('search works with hi-ascii characters', ()=>{
searchMovie.search('Amélie');
result.checkTitle('Amélie');
});


//  it('movie search works with the shortest movie title ever made',()=>{
//   cy.get('[id="search"]').type('Z');
//   cy.get('h3').first().should('contain','Z');

//  })

//longest movie title = bug
// it('movie search works with the longest movie title ever made',()=>{
//   cy.get('[id="search"]').type('Night of the Day of the Dawn of the Son of the Bride of the Return of the Revenge of the Terror of the Attack of the Evil, Mutant, Alien, Flesh Eating, Hellbound, Zombified Living Dead Part 2');
//   cy.get('h3').first().should('contain','Night of the Day of the Dawn of the Son of the Bride of the Return of the Revenge of the Terror of the Attack of the Evil, Mutant, Alien, Flesh Eating, Hellbound, Zombified Living Dead Part 2');

//  })

// it('search works with double-byte characters')


//  })
//  it('movie search works with null title',()=>{



//  })


})