describe('sample test', () => {
    cy.visit("https://www.creativelive.com/");
it('check header text', ()=>{
    cy.get('h1').contains('Do what you love.').should('be.visible');
})
});
