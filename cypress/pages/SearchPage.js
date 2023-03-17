class SearchPage{

    search(title){
        cy.get('input[id="search"]').type(title);
    }
    checkTextInputText(text){
        cy.get('input[id="search"]').invoke('val').should('eq',text);
    }
}

export default SearchPage;