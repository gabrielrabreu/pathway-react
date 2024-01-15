describe("template spec", () => {
  it("passes", () => {
    cy.visitAndWaitFor("https://example.cypress.io", "specs-list-panel");
  });
});
