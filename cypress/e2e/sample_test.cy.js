describe('sample test', () => {
it('check header text', ()=>{
    cy.visit("https://www.creativelive.com/");
    cy.get('h1').contains('Do what you love.').should('be.visible');
})
});
