import React from "react";

import { render, fireEvent } from "@testing-library/react";

import FormComponent from "../FormComponent";

describe("FormComponent", () => {
  it("renders the form", () => {
    const { getByTestId } = render(<FormComponent />);
    const formElement = getByTestId("form");

    expect(formElement).toBeInTheDocument();
  });

  it("submits the form successfully with valid data", () => {
    const { getByTestId } = render(<FormComponent />);
    const nameInput = getByTestId("name-input");
    const emailInput = getByTestId("email-input");
    const submitButton = getByTestId("submit-button");
    const successMessage = getByTestId("success-message");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.click(submitButton);

    expect(successMessage).toBeInTheDocument();
  });

  it("displays an error message with invalid data", () => {
    const { getByTestId } = render(<FormComponent />);
    const submitButton = getByTestId("submit-button");
    const errorMessage = getByTestId("error-message");

    fireEvent.click(submitButton);

    expect(errorMessage).toBeInTheDocument();
  });

  it("displays error messages for both fields when both are empty", () => {
    const { getByTestId } = render(<FormComponent />);
    const submitButton = getByTestId("submit-button");
    const nameErrorMessage = getByTestId("name-error-message");
    const emailErrorMessage = getByTestId("email-error-message");

    fireEvent.click(submitButton);

    expect(nameErrorMessage).toBeInTheDocument();
    expect(emailErrorMessage).toBeInTheDocument();
  });

  it("displays error message for name field when it is empty", () => {
    const { getByTestId } = render(<FormComponent />);
    const submitButton = getByTestId("submit-button");
    const nameErrorMessage = getByTestId("name-error-message");

    fireEvent.change(nameInput, { target: { value: "" } });
    fireEvent.click(submitButton);

    expect(nameErrorMessage).toBeInTheDocument();
  });

  it("displays error message for email field when it is empty", () => {
    const { getByTestId } = render(<FormComponent />);
    const submitButton = getByTestId("submit-button");
    const emailErrorMessage = getByTestId("email-error-message");

    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.click(submitButton);

    expect(emailErrorMessage).toBeInTheDocument();
  });
});
