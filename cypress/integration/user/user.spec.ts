describe('User form', () => {
	before(() => {
		cy.visit('/');
	});

	it('can see user form and a field is present', () => {
		cy.get('[data-testid="first-page"]').should('be.visible');
		cy.get('[data-testid="input-0"]').should('be.visible');
	});

	it('shows error if clicked next without any users', () => {
		cy.get('[data-testid="next-button"]').click();
		cy.get('[data-testid="error-0"]')
			.should('be.visible')
			.contains('This is required');
	});

	it('can add more users', () => {
		cy.get('[data-testid="input-0"]').type('Sum');
		cy.get('[data-testid="add-button"]').click();
		cy.get('[data-testid="input-1"]').should('be.visible');
		cy.get('[data-testid="input-1"]').type('Dibb');
	});

	it('can submit form and go to next page', () => {
		cy.get('[data-testid="next-button"]').click();
		cy.get('[data-testid="error-0"]').should('not.exist');
		cy.get('[data-testid="error-1"]').should('not.exist');
		cy.url().should('contain', 'group');
	});

	it('')
});
