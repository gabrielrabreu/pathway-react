import React, { useRef } from "react";

import { render, act, screen } from "@testing-library/react";

import { useHover } from "./useHover";

interface MockComponentProps {}

const MockComponent: React.FC<MockComponentProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isHovering = useHover(ref);

  return (
    <div
      ref={ref}
      data-testid="hover-element"
      style={{
        width: "100px",
        height: "100px",
        background: isHovering ? "green" : "red",
      }}
    >
      Hover Me
    </div>
  );
};

describe("useHover hook", () => {
  test("should change isHovering when hover", () => {
    render(<MockComponent />);

    const hoverElement = screen.getByTestId("hover-element");
    expect(hoverElement).toHaveStyle("background: red");

    act(() => {
      hoverElement.dispatchEvent(
        new MouseEvent("mouseenter", { bubbles: true })
      );
    });
    expect(hoverElement).toHaveStyle("background: green");
  });
});
