import SearchPage from "../pages/SearchPage"
import ResultPage from "../pages/ResultPage"

describe('Result Page tests', ()=>{
const searchMovie = new SearchPage();
const result = new ResultPage();

    beforeEach(()=>{
        cy.visit("http://127.0.0.1:8080/");
       // check if the homepage is correct
       cy.title().should('eq','OMDb');
       
       })
    //    afterEach(()=>{
    //    cy.reload();
      
    //    })


//b) Validate autocomplete results are shown within 300ms
it('search result set shows up within 300ms',() =>{
    searchMovie.search('Avatar');
    result.displayTime('300ms');
 })      
 //c) validate autocomplete result card content

 it('search result card shows movie title',()=>{
   searchMovie.search('Avatar');
   result.displayTitle('Avatar');
 })

 it('search result card should show year made', ()=>{
    searchMovie.search('Avatar');
    result.displayYear('2022');
    result.displayYearText('YEAR');
  
  })

//d) Validate autocomplete card Image rendered size : I see width is set to 40px in the style so I tested the width here and not the height which varies

it('search result card image size', ()=>{
  searchMovie.search('Avatar');
  result.checkImgSize('40');
})




})