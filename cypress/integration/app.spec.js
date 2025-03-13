describe('App', () => {
  it('should display "Hello, World!"', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Hello, World!');
  });
});
