/// <reference types="cypress" />

import React from "react";

import { mount } from "cypress-react-unit-test";

import FormComponent from "./FormComponent";

describe("Component Test Example", () => {
  it("should render FormComponent with props", () => {
    const props = {
      onSubmit: cy.stub(),
    };

    mount(<FormComponent {...props} />);

    // Assertions
    cy.get('[data-testid="name-input"]').should("exist");
    cy.get('[data-testid="email-input"]').should("exist");
    cy.get('[data-testid="message-input"]').should("exist");
    cy.get('[data-testid="submit-button"]').should("exist");
  });

  it("should call onSubmit when form is submitted", () => {
    const props = {
      onSubmit: cy.stub(),
    };

    mount(<FormComponent {...props} />);

    // Fill out the form fields
    cy.get('[data-testid="name-input"]').type("John Doe");
    cy.get('[data-testid="email-input"]').type("johndoe@example.com");
    cy.get('[data-testid="message-input"]').type("This is a test message");

    // Submit the form
    cy.get('[data-testid="submit-button"]').click();

    // Assertions
    expect(props.onSubmit).to.be.calledWith({
      name: "John Doe",
      email: "johndoe@example.com",
      message: "This is a test message",
    });
  });
});
