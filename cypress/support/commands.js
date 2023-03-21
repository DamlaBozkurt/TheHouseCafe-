Cypress.Commands.add('iletisim', (iletisim) => {
    cy.get('a[class="mega-menu-link"]').eq('14').click()
    cy.get('input[id="nf-field-1"]').click().type('Dams')
    cy.get('input[id="nf-field-2"]').click().type('Boz')
    cy.get('div[class="nf-field-element"]').eq('2').click()
    //cy.get('select[id="nf-field-25"]').select('option[value="izmir mavibahce"]').should('have.value', 'İzmir Mavi Bahçe').click()
    cy.get('select[id="nf-field-25"]').select('İzmir Mavi Bahçe')
    cy.get('input[id="nf-field-26-3"]').click()
    cy.get('input[class="ninja-forms-field nf-element"]').eq('7').click().type('dssd')
    cy.get('input[id="nf-field-31"]').click().type('sdfsf')
    cy.get('textarea[id="nf-field-3"]').click().type('fdfdfgdfgd')
    cy.get('input[id="nf-field-4"]').click( {force: true})
})
Cypress.Commands.add('menu',(menu) => {
    cy.get('div[id="menus"]')
    cy.get('a[class="mega-menu-link"]').eq('2').trigger('mouseover')
    cy.get('a[class="mega-menu-link"]').eq('3').click({force: true})
    cy.get('a[class="mega-menu-link"]').eq('3').click({force: true})
    cy.get('a[class="mega-menu-link"]').eq('5').click({force: true})
    cy.get('div[class="fp_inner_box"]').eq('9').click()
    
})
Cypress.Commands.add('subeler', (subeler) => {
    cy.get('a[class="mega-menu-link"').eq('7').click({force: true})
    cy.get('a[href="//thehousecafe.com/ortakoy/"]').eq('0').click()
    cy.get('a[href="//thehousecafe.com/akaretler/"]').eq('0').click()
    
})
Cypress.Commands.add('haberler', (haberler) => {
    cy.get('a[class="mega-menu-link"]').eq('12').click()
    cy.get('img[src="//thehousecafe.com/wp-content/uploads/2020/03/brandwallet-292x226.jpg"]').click({force: true})


})
    