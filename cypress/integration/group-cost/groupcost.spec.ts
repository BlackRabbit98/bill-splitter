describe('Group cost form', () => {
	before(() => {
		cy.visit('/');
		cy.get('[data-testid="input-0"]').type('Sum');
		cy.get('[data-testid="add-button"]').click();
		cy.get('[data-testid="input-1"]').type('Dibb');
		cy.get('[data-testid="next-button"]').click();
	});

	it('can see members name and cost field', () => {
		cy.get('[data-testid="second-page"]').should('be.visible');
		cy.get('[data-testid="input-0"]').should('be.visible');
		cy.get('[data-testid="input-1"]').should('be.visible');
	});

	it('can add cost', () => {
		cy.get('[data-testid="input-0"]').type('1200');
		cy.get('[data-testid="input-1"]').type('200');
	});

	it('can submit form and go to next page', () => {
		cy.get('[data-testid="next-button"]').click();
		cy.url().should('contain', 'individual');
	});
});
