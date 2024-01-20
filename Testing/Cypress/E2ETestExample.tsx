/// <reference types="cypress" />

describe("E2E Test Example", () => {
  it("should fill out and submit the form", () => {
    // Visit the webpage with the form
    cy.visit("http://localhost:3000"); // Update with your app's URL

    // Fill out the form fields
    cy.get('[data-testid="name-input"]').type("John Doe");
    cy.get('[data-testid="email-input"]').type("johndoe@example.com");
    cy.get('[data-testid="message-input"]').type("This is a test message");

    // Submit the form
    cy.get('[data-testid="submit-button"]').click();

    // Assertions
    cy.get('[data-testid="success-message"]').should(
      "contain",
      "Form submitted successfully"
    );
  });

  it("should display an error message for empty fields", () => {
    // Visit the webpage with the form
    cy.visit("http://localhost:3000"); // Update with your app's URL

    // Submit the form without filling out any fields
    cy.get('[data-testid="submit-button"]').click();

    // Assertions
    cy.get('[data-testid="error-message"]').should(
      "contain",
      "Please fill out all fields"
    );
  });
});
