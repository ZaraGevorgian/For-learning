describe('Gis', () => {
    it('open Gis', () => {
        cy.visit ('http://87.249.49.66/testing/#/map/')
        cy.url().should('include', 'http://87.249.49.66/testing/#/map/')
        cy.get('.logo').should('be.exist');
        cy.get('.authorise').then(($form)=>{
            
         expect($form).to.contain('Войти')
        })
     
    })
  })
