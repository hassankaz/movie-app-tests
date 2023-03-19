import SearchPage from "../pages/SearchPage";
import ResultPage from "../pages/ResultPage";

describe('Search movie tests', () => {
  const searchMovie = new SearchPage();
  const result = new ResultPage();

 beforeEach(()=>{
  cy.visit("http://127.0.0.1:8080/");
  cy.title().should('eq','OMDb');
 });

//  afterEach(()=>{
//   cy.reload();
//  });

// a) validate doing a search work as expected
it('search works: default case',()=>{
  searchMovie.search('Avatar');
  result.checkAllTitle('Avatar');
}); 
it('search keyword is case insensitive',()=>{
  searchMovie.search('avatar');
  result.checkAllTitle('Avatar');
}); 
it('search with a phrase',()=>{
 searchMovie.search('puss in boots');
 result.checkAllTitle('Puss in Boots');
});
it('search result shows the nth movie',()=>{
  searchMovie.search('puss in'); 
  result.checkNthMovie(3,'Puss in Boots');
});
it('search works on a small screen',()=>{
  searchMovie.searchOnSmallScreen('Avatar');
  result.checkAllTitle('Avatar');
});
it('search works with hi-ascii characters', ()=>{
  searchMovie.search('Amélie');
  result.checkAllTitle('Amélie');
});
it('update search keyword retuns new results',()=>{
  searchMovie.updateSearchKeyword('Avatar','Pinocchio');
});
it('no result with movie search null string',()=>{
  searchMovie.searchWithNoKeyword();
  result.checkNoResult();
});

// shortest movie title - bug  
// it('movie search works with the shortest movie title ever made',()=>{
//   searchMovie.search('Z');
//   result.checkAllTitle('Z');
//  })

// longest movie title - bug
// it('movie search works with the longest movie title ever made',()=>{
//   searchMovie.search('Night of the Day of the Dawn of the Son of the Bride of the Return of the Revenge of the Terror of the Attack of the Evil, Mutant, Alien, Flesh Eating, Hellbound, Zombified Living Dead Part 2');
//    result.checkAllTitle('Night of the Day of the Dawn of the Son of the Bride of the Return of the Revenge of the Terror of the Attack of the Evil, Mutant, Alien, Flesh Eating, Hellbound, Zombified Living Dead Part 2');
//  })

// double byte title search - bug 
//it('search works with double-byte characters',()=>{
//  searchMovie.search('七人の侍');
//  result.checkAllTitle('七人の侍'); 
//  })

})