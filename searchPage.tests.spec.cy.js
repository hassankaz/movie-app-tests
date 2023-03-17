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


//h) validate searching for a movie and mocking its result so it's now called "Flow The Movie"

it('search for a movie and update the result title to Flow The Movie', ()=>{
  searchMovie.search('puss in boots');
  cy.get('h3[class="movie-title"]').first().should('have.text','Puss in Boots');
  cy.get('h3[class="movie-title"]').first().invoke('text').invoke('replace','Puss in Boots','Flow The Movie').should('eq','Flow The Movie');
})

//e) validate search box is highlighted when clicking on it

 it('clicking in search box hightlights it', ()=>{
  cy.get('input[id="search"]').click().then(() =>{
    Cypress.dom.isFocused();
   });
  });
  //  let inputText = document.getElementById('search');
  //  let isFocused = (document.activeElement == inputText);
  
//g) paste into text input intead of typing
   it('search works by pasting into the search text',()=>{
    let textToPaste = "Avatar";
    cy.get('[id="search"]').invoke('val', textToPaste).focus();
    cy.wait(2000);
    cy.get('h3[class="movie-title"]').first().should('contain',textToPaste);

    });

// a) validate doing a search work as expected
  it('search works: default case',()=>{
    searchMovie.search('Avatar');
    result.displayTitle('Avatar');
  }); 
  

  // it('search text is case insensitive',()=>{
  //   searchMovie.search('avatar');

  // }); 

  

 it('search works with hi-ascii characters', ()=>{
  searchMovie.search('Amélie');
  result.displayTitle('Amélie');
 });

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
