describe('Webform tests',() =>{
    it('Test text input positive case',()=>{
       cy.visit('https://www.selenium.dev/selenium/web/web-form.html');
       cy.get('my-text-id').type('kazuewatanabe');
       cy.get('body > main > div > form > div > div:nth-child(1) > label:nth-child(2) > input').type('mypassword1');
       cy.get('body > main > div > form > div > div:nth-child(1) > label:nth-child(3) > textarea').type('hello');
       cy.get('body > main > div > form > div > div:nth-child(2) > button').click();
      cy.get('h1').contains('form submitted');
  
       
    })
  
   })