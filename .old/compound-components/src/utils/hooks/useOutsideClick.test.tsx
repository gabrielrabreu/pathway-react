import React, { useRef } from "react";

import { render, fireEvent } from "@testing-library/react";

import { useOutsideClick } from "./useOutsideClick";

interface MockComponentProps {
  callback: () => void;
}

const MockComponent: React.FC<MockComponentProps> = ({ callback }) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, callback);
  return (
    <div ref={ref} data-testid="test-div">
      Test Div
    </div>
  );
};

describe("useOutsideClick hook", () => {
  const mockCallback = jest.fn();

  test("should call callback when a click is detected outside the ref element", () => {
    render(<MockComponent callback={mockCallback} />);

    fireEvent.mouseDown(document);
    expect(mockCallback).toHaveBeenCalled();
  });
});
