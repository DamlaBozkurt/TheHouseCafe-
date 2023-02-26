Cypress.Commands.add('iletisim', (iletisim) => {
    cy.get('a[class="mega-menu-link"]').eq('14').click()
    cy.get('input[id="nf-field-1"]').click().type('Dams')
    cy.get('input[id="nf-field-2"]').click().type('Boz')
    cy.get('div[class="nf-field-element"]').eq('2').click()
    //cy.get('select[id="nf-field-25"]').select('option[value="izmir mavibahce"]').should('have.value', 'İzmir Mavi Bahçe').click()
    cy.get('select[id="nf-field-25"]').select('İzmir Mavi Bahçe').click()
})
    