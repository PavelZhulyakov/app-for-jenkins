describe('The Catalog main Page', () => {
    it('Successfully loads', () => {
        cy.visit('https://catalog.onliner.by/')
        cy.get('.fast-search__input').type('Iphone 12')
        //cy.frameLoaded('#iframe.modal-iframe')

        cy.enter('iframe.modal-iframe').then(onliner => {
            onliner().find('input[class="search__input"]').type('phone 12', {force:true})

            onliner().find('[src="//content2.onliner.by/catalog/device/header/bf14a99b6b00fa25711a3e8e7a87d23a.jpeg"]').first().should('exist')
            onliner().find('input.i-checkbox__real').each((element, index) => {
                if (index < 5 ) {
                    cy.get(element).check({force : true})
                }

            })
            onliner().find('[class="compare-button__sub compare-button__sub_main"]').click()
        cy.xpath('//tr[@class=\'product-table__row product-table__row_header product-table__row_top\']//span[@class=\'product-summary__caption\']').
        eq(1).click()
        cy.xpath('//div[@class=\'offers-description__control\']//a[@onclick]').click()
        })
        })
})