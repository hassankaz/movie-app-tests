describe('Merit Homepage tests', () =>{
    //open homepage
    beforeEach(()=>{
        cy.visit('https://www.merits.com/#');
    })
    
    
    //nav bar tests
    it('industries tests', ()=>{
        cy.get('#hhs-main-nav > div > div.hhs-nav-grid__menu.main-nav > nav > ul > li:nth-child(1) > a').contains("Industries").trigger('mouseover');
        cy.contains('Emergency Management').debug().click({ force: true });
        cy.get('h1').should('contain','Not Just Another Tool: Merit ReadyNow is The Solution');
        cy.go('back');
        cy.get('#hhs-main-nav > div > div.hhs-nav-grid__menu.main-nav > nav > ul > li:nth-child(1) > a').contains("Industries").trigger('mouseover');
        cy.contains('Education').debug().click({ force: true });
        cy.get('h1').should('contain','Bridging the Gap Separating Families from Critical Education Funding');
        
    })
    it('solutions', ()=>{
        cy.contains('Solutions').click();
        cy.get('h2').should('contain','Explore Merit’s Customized Solutions and Packages');
    
    })
    it('resources', ()=>{
        cy.contains('Resources').trigger('mouseover');
        cy.contains('Grants & Scholarship').click({ force: true });
        cy.get('p').should('contain','Grants & Scholarships: Case Studies');
    })
    
    //footer tests
    
    
    })
    describe('Login test', ()=>{
    
        beforeEach(()=>{
            cy.visit('https://www.merits.com/#');
        })
     //positive case
     //invalid email address - recapcha?
     //test forget password
    
    it('Login - correct error message appears', ()=>{
    cy.contains('Log In').invoke('removeAttr','target').click();
    cy.get('[data-testid ="loginHeader"]').should('contain','Log in to your account');
    cy.get('[data-testid ="emailInputField"]').type('iam@tester.com');
    cy.get('[data-testid ="passwordInputField"]').type('stupidpassword');
    cy.get('[data-testid="submitLoginButton"]').click();
    cy.get('[class="ant-form-explain"]').should('contain','The email or password you entered did not match our records. Please double-check and try again.');
    })
    
    it('Login using enter instead of button - correct error message appears', ()=>{
        cy.contains('Log In').invoke('removeAttr','target').click();
        cy.get('[data-testid ="loginHeader"]').should('contain','Log in to your account');
        cy.get('[data-testid ="emailInputField"]').type('iam@tester.com');
        cy.get('[data-testid ="passwordInputField"]').type('stupidpassword');
        cy.get('[data-testid="submitLoginButton"]').click();
        cy.get('[class="ant-form-explain"]').should('contain','The email or password you entered did not match our records. Please double-check and try again.');
        })
    })