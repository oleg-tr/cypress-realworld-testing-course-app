describe('wow much cypress', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000')
  })

  it('check h1', () => {
    cy.get("h1").contains("Testing Next.js Applications with Cypress")
  })

  it('check correct behaviour', () => {
    cy.get('dt').eq(0).contains('4 Courses')
  })

})
