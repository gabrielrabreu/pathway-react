import React from "react";

import { render, fireEvent, screen } from "@testing-library/react";

import * as hooks from "@/utils/hooks";

import Multiselect from "./Multiselect";

jest.mock("@/utils/hooks", () => ({
  useOutsideClick: jest.fn(),
}));

describe("Multiselect component", () => {
  const mockOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const mockOnChange = jest.fn();
  const mockOnQueryChange = jest.fn();

  test("should render correctly", () => {
    render(
      <Multiselect onChange={mockOnChange}>
        <Multiselect.Input>
          <Multiselect.Placeholder text="Multiselect..." />
          <Multiselect.Indicator />
        </Multiselect.Input>
        <Multiselect.Dropdown>
          <Multiselect.Filter
            placeholder="Search..."
            onQueryChange={mockOnQueryChange}
          />
          {mockOptions.map((option, index) => (
            <Multiselect.Option
              key={index}
              label={option.label}
              value={option.value}
            >
              {option.label}
            </Multiselect.Option>
          ))}
        </Multiselect.Dropdown>
      </Multiselect>
    );

    expect(screen.getByTestId("multiselect-container")).toBeInTheDocument();
    expect(screen.getByTestId("multiselect-toggle")).toBeInTheDocument();
    expect(screen.queryByTestId("multiselect-label")).not.toBeInTheDocument();
    expect(screen.queryByTestId("multiselect-remove")).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("multiselect-additional")
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("multiselect-placeholder")).toHaveTextContent(
      "Multiselect..."
    );
    expect(screen.getByTestId("multiselect-indicator")).toBeInTheDocument();
    expect(
      screen.queryByTestId("multiselect-dropdown")
    ).not.toBeInTheDocument();
  });

  test("should load useOutsideClick hook correctly", () => {
    render(<Multiselect onChange={mockOnChange}></Multiselect>);

    fireEvent.click(screen.getByTestId("multiselect-container"));

    expect(hooks.useOutsideClick).toHaveBeenCalled();
  });

  test("should render dropdown when click", () => {
    render(
      <Multiselect onChange={mockOnChange}>
        <Multiselect.Input>
          <Multiselect.Placeholder text="Multiselect..." />
          <Multiselect.Indicator />
        </Multiselect.Input>
        <Multiselect.Dropdown>
          <Multiselect.Filter
            placeholder="Search..."
            onQueryChange={mockOnQueryChange}
          />
          {mockOptions.map((option, index) => (
            <Multiselect.Option
              key={index}
              label={option.label}
              value={option.value}
            >
              {option.label}
            </Multiselect.Option>
          ))}
        </Multiselect.Dropdown>
      </Multiselect>
    );

    fireEvent.click(screen.getByTestId("multiselect-toggle"));
    expect(screen.queryByTestId("multiselect-dropdown")).toBeInTheDocument();
  });

  test("should set selected option on click when not selected yet", () => {
    render(
      <Multiselect onChange={mockOnChange}>
        <Multiselect.Input>
          <Multiselect.Placeholder text="Multiselect..." />
          <Multiselect.Indicator />
        </Multiselect.Input>
        <Multiselect.Dropdown>
          <Multiselect.Filter
            placeholder="Search..."
            onQueryChange={mockOnQueryChange}
          />
          {mockOptions.map((option, index) => (
            <Multiselect.Option
              key={index}
              label={option.label}
              value={option.value}
              data-testid={`multiselect-option-${index}`}
            >
              {option.label}
            </Multiselect.Option>
          ))}
        </Multiselect.Dropdown>
      </Multiselect>
    );

    fireEvent.click(screen.getByTestId("multiselect-toggle"));
    fireEvent.click(screen.getByTestId("multiselect-option-1"));
    expect(
      screen.queryByTestId("multiselect-option-1-label")
    ).toHaveTextContent(mockOptions[1].label);
    expect(mockOnChange).toHaveBeenCalledWith([mockOptions[1].value]);
  });

  test("should remove selected option on click when already selected", () => {
    render(
      <Multiselect onChange={mockOnChange}>
        <Multiselect.Input>
          <Multiselect.Placeholder text="Multiselect..." />
          <Multiselect.Indicator />
        </Multiselect.Input>
        <Multiselect.Dropdown>
          <Multiselect.Filter
            placeholder="Search..."
            onQueryChange={mockOnQueryChange}
          />
          {mockOptions.map((option, index) => (
            <Multiselect.Option
              key={index}
              label={option.label}
              value={option.value}
              data-testid={`multiselect-option-${index}`}
            >
              {option.label}
            </Multiselect.Option>
          ))}
        </Multiselect.Dropdown>
      </Multiselect>
    );

    fireEvent.click(screen.getByTestId("multiselect-toggle"));
    fireEvent.click(screen.getByTestId("multiselect-option-1"));
    fireEvent.click(screen.getByTestId("multiselect-option-1"));
    expect(
      screen.queryByTestId("multiselect-option-1-label")
    ).not.toBeInTheDocument();
    expect(mockOnChange).toHaveBeenCalledWith([]);
  });

  test("should remove selected option on click", () => {
    render(
      <Multiselect onChange={mockOnChange}>
        <Multiselect.Input>
          <Multiselect.Placeholder text="Multiselect..." />
          <Multiselect.Indicator />
        </Multiselect.Input>
        <Multiselect.Dropdown>
          <Multiselect.Filter
            placeholder="Search..."
            onQueryChange={mockOnQueryChange}
          />
          {mockOptions.map((option, index) => (
            <Multiselect.Option
              key={index}
              label={option.label}
              value={option.value}
              data-testid={`multiselect-option-${index}`}
            >
              {option.label}
            </Multiselect.Option>
          ))}
        </Multiselect.Dropdown>
      </Multiselect>
    );

    fireEvent.click(screen.getByTestId("multiselect-toggle"));
    fireEvent.click(screen.getByTestId("multiselect-option-1"));
    fireEvent.click(screen.getByTestId("multiselect-option-1-remove"));
    expect(
      screen.queryByTestId("multiselect-option-1-label")
    ).not.toBeInTheDocument();
    expect(mockOnChange).toHaveBeenCalledWith([]);
  });

  test("should call onQueryChange if change filter input", () => {
    render(
      <Multiselect onChange={mockOnChange}>
        <Multiselect.Input>
          <Multiselect.Placeholder text="Multiselect..." />
          <Multiselect.Indicator />
        </Multiselect.Input>
        <Multiselect.Dropdown>
          <Multiselect.Filter
            placeholder="Search..."
            onQueryChange={mockOnQueryChange}
          />
          {mockOptions.map((option, index) => (
            <Multiselect.Option
              key={index}
              label={option.label}
              value={option.value}
              data-testid={`multiselect-option-${index}`}
            >
              {option.label}
            </Multiselect.Option>
          ))}
        </Multiselect.Dropdown>
      </Multiselect>
    );

    fireEvent.click(screen.getByTestId("multiselect-toggle"));
    fireEvent.change(screen.getByTestId("multiselect-filter"), {
      target: { value: "Option 1" },
    });
    expect(mockOnQueryChange).toHaveBeenCalledWith("Option 1");
  });
});
