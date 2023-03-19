import ResultPage from "./ResultPage";
const result = new ResultPage();

class SearchPage{
    search(searchKeyword){
        cy.get('input[id="search"]').type(searchKeyword);
    }
    updateSearchKeyword(searchKeyword,searchKeyWordNew){
        cy.get('input[id="search"]').type(searchKeyword);
        result.checkAllTitle(searchKeyword);
        cy.get('input[id="search"]').clear({ force: true }).type(searchKeyWordNew);
        result.checkAllTitle(searchKeyWordNew);      
    }
    searchOnSmallScreen(searchKeyword){
        cy.viewport('iphone-8');
        cy.reload();
        cy.get('input[id="search"]').type(searchKeyword);
    }
    checkTextInputText(text){
        cy.get('input[id="search"]').invoke('val').should('eq',text);
    }
    searchWithNoKeyword(){
        cy.get('input[id="search"]').invoke('val','').type('{enter}');
    }
}

export default SearchPage;