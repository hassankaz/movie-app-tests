class SearchPage{

    search(title){
        cy.get('input[id="search"]').type(title);
    }
}

export default SearchPage;