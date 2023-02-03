describe('check login', () => {
    it('login', () => {
        cy.visit (Cypress.env('globalUrl'))
        cy.url().should('include', Cypress.env('globalUrl'))
        cy.get(':nth-child(1) > .form-control').type('tovmasyan@sigma-d.ru')
        cy.get(':nth-child(2) > .form-control').type('test_passs')
        cy.get('.signup').eq(1).click();
        cy.get('.map').should("be.visible");



    })
  })
