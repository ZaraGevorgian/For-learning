describe('Gis', () => {
    it('open Gis', () => {
        cy.visit (Cypress.env('globalUrl'))
        cy.url().should('include', Cypress.env('globalUrl'))
        cy.get('.logo').should('be.exist');
        cy.get('.authorise').then(($form)=>{
            
         expect($form).to.contain('Войти')
        })
     
    })
  })
