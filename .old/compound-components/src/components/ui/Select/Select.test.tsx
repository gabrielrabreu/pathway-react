import React from "react";

import { render, fireEvent, screen } from "@testing-library/react";

import * as hooks from "@/utils/hooks";

import Select from "./Select";

jest.mock("@/utils/hooks", () => ({
  useOutsideClick: jest.fn(),
}));

describe("Select component", () => {
  const mockOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];
  const mockOnChange = jest.fn();
  const mockOnQueryChange = jest.fn();

  test("should render correctly", () => {
    render(
      <Select onChange={mockOnChange}>
        <Select.Input>
          <Select.Placeholder text="Select..." />
          <Select.Indicator />
        </Select.Input>
        <Select.Dropdown>
          <Select.Filter
            placeholder="Search..."
            onQueryChange={mockOnQueryChange}
          />
          {mockOptions.map((option, index) => (
            <Select.Option
              key={index}
              label={option.label}
              value={option.value}
            >
              {option.label}
            </Select.Option>
          ))}
        </Select.Dropdown>
      </Select>
    );

    expect(screen.getByTestId("select-container")).toBeInTheDocument();
    expect(screen.getByTestId("select-toggle")).toBeInTheDocument();
    expect(screen.queryByTestId("select-label")).not.toBeInTheDocument();
    expect(screen.queryByTestId("select-remove")).not.toBeInTheDocument();
    expect(screen.getByTestId("select-placeholder")).toHaveTextContent(
      "Select..."
    );
    expect(screen.getByTestId("select-indicator")).toBeInTheDocument();
    expect(screen.queryByTestId("select-dropdown")).not.toBeInTheDocument();
  });

  test("should load useOutsideClick hook correctly", () => {
    render(<Select onChange={mockOnChange}></Select>);

    fireEvent.click(screen.getByTestId("select-container"));

    expect(hooks.useOutsideClick).toHaveBeenCalled();
  });

  test("should render dropdown when click", () => {
    render(
      <Select onChange={mockOnChange}>
        <Select.Input>
          <Select.Placeholder text="Select..." />
          <Select.Indicator />
        </Select.Input>
        <Select.Dropdown>
          <Select.Filter
            placeholder="Search..."
            onQueryChange={mockOnQueryChange}
          />
          {mockOptions.map((option, index) => (
            <Select.Option
              key={index}
              label={option.label}
              value={option.value}
            >
              {option.label}
            </Select.Option>
          ))}
        </Select.Dropdown>
      </Select>
    );

    fireEvent.click(screen.getByTestId("select-toggle"));
    expect(screen.queryByTestId("select-dropdown")).toBeInTheDocument();
  });

  test("should set selected option on click when not the current selected", () => {
    render(
      <Select onChange={mockOnChange}>
        <Select.Input>
          <Select.Placeholder text="Select..." />
          <Select.Indicator />
        </Select.Input>
        <Select.Dropdown>
          <Select.Filter
            placeholder="Search..."
            onQueryChange={mockOnQueryChange}
          />
          {mockOptions.map((option, index) => (
            <Select.Option
              key={index}
              label={option.label}
              value={option.value}
              data-testid={`select-option-${index}`}
            >
              {option.label}
            </Select.Option>
          ))}
        </Select.Dropdown>
      </Select>
    );

    fireEvent.click(screen.getByTestId("select-toggle"));
    fireEvent.click(screen.getByTestId("select-option-1"));
    expect(screen.queryByTestId("select-label")).toHaveTextContent(
      mockOptions[1].label
    );
    expect(mockOnChange).toHaveBeenCalledWith(mockOptions[1].value);
  });

  test("should remove selected option on click when already selected", () => {
    render(
      <Select onChange={mockOnChange}>
        <Select.Input>
          <Select.Placeholder text="Select..." />
          <Select.Indicator />
        </Select.Input>
        <Select.Dropdown>
          <Select.Filter
            placeholder="Search..."
            onQueryChange={mockOnQueryChange}
          />
          {mockOptions.map((option, index) => (
            <Select.Option
              key={index}
              label={option.label}
              value={option.value}
              data-testid={`select-option-${index}`}
            >
              {option.label}
            </Select.Option>
          ))}
        </Select.Dropdown>
      </Select>
    );

    fireEvent.click(screen.getByTestId("select-toggle"));
    fireEvent.click(screen.getByTestId("select-option-1"));
    fireEvent.click(screen.getByTestId("select-option-1"));
    expect(screen.queryByTestId("select-label")).not.toBeInTheDocument();
    expect(mockOnChange).toHaveBeenCalledWith(undefined);
  });

  test("should remove selected option on click", () => {
    render(
      <Select onChange={mockOnChange}>
        <Select.Input>
          <Select.Placeholder text="Select..." />
          <Select.Indicator />
        </Select.Input>
        <Select.Dropdown>
          <Select.Filter
            placeholder="Search..."
            onQueryChange={mockOnQueryChange}
          />
          {mockOptions.map((option, index) => (
            <Select.Option
              key={index}
              label={option.label}
              value={option.value}
              data-testid={`select-option-${index}`}
            >
              {option.label}
            </Select.Option>
          ))}
        </Select.Dropdown>
      </Select>
    );

    fireEvent.click(screen.getByTestId("select-toggle"));
    fireEvent.click(screen.getByTestId("select-option-1"));
    fireEvent.click(screen.getByTestId("select-remove"));
    expect(screen.queryByTestId("select-label")).not.toBeInTheDocument();
    expect(mockOnChange).toHaveBeenCalledWith(undefined);
  });

  test("should call onQueryChange if change filter input", () => {
    render(
      <Select onChange={mockOnChange}>
        <Select.Input>
          <Select.Placeholder text="Select..." />
          <Select.Indicator />
        </Select.Input>
        <Select.Dropdown>
          <Select.Filter
            placeholder="Search..."
            onQueryChange={mockOnQueryChange}
          />
          {mockOptions.map((option, index) => (
            <Select.Option
              key={index}
              label={option.label}
              value={option.value}
              data-testid={`select-option-${index}`}
            >
              {option.label}
            </Select.Option>
          ))}
        </Select.Dropdown>
      </Select>
    );

    fireEvent.click(screen.getByTestId("select-toggle"));
    fireEvent.change(screen.getByTestId("select-filter"), {
      target: { value: "Option 1" },
    });
    expect(mockOnQueryChange).toHaveBeenCalledWith("Option 1");
  });
});
