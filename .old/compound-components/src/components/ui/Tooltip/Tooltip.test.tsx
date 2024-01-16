import React from "react";

import { render, fireEvent, screen } from "@testing-library/react";

import Tooltip from "./Tooltip";

describe("Tooltip component", () => {
  test("should render correctly", () => {
    render(
      <Tooltip>
        <Tooltip.Trigger>
          <button>Hover me</button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <span>Tooltip text</span>
        </Tooltip.Content>
      </Tooltip>
    );

    expect(screen.getByTestId("tooltip-container")).toBeInTheDocument();
    expect(screen.getByTestId("tooltip-trigger")).toBeInTheDocument();
    expect(screen.getByTestId("tooltip-content")).toBeInTheDocument();
  });

  test("should show tooltip when mouse enter", () => {
    render(
      <Tooltip>
        <Tooltip.Trigger>
          <button>Hover me</button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <span>Tooltip text</span>
        </Tooltip.Content>
      </Tooltip>
    );

    const triggerElement = screen.getByTestId("tooltip-trigger");
    fireEvent.mouseEnter(triggerElement);

    const tooltipContent = screen.getByTestId("tooltip-content");
    expect(tooltipContent).toHaveTextContent("Tooltip text");
    expect(tooltipContent).toHaveClass("opacity-100");
  });

  it("should hide tooltip content on mouse leave", () => {
    render(
      <Tooltip>
        <Tooltip.Trigger>
          <button>Hover me</button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <span>Tooltip text</span>
        </Tooltip.Content>
      </Tooltip>
    );

    const triggerElement = screen.getByTestId("tooltip-trigger");
    fireEvent.mouseEnter(triggerElement);
    fireEvent.mouseLeave(triggerElement);

    const tooltipContent = screen.getByTestId("tooltip-content");
    expect(tooltipContent).toHaveClass("opacity-0");
  });
});
