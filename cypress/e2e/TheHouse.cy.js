describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://thehousecafe.com/')
    cy.iletisim()
    cy.menu()
    cy.subeler()
    cy.haberler()
  })

})