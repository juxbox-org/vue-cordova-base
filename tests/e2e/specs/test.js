describe('My First Test', () => {
  it('should have the correct title', () => {
    cy.visit('http://localhost:8080');
    cy.title().should('eq', 'vue-cordova-base');
  });
});
