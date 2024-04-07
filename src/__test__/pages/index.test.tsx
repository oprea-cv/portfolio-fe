import PreviewPage from "@pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

// Mock ResizeObserver
global.ResizeObserver = jest.fn(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Your test suite
describe("PreviewPage", () => {
  it("renders the correct content", () => {
    render(<PreviewPage />);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });
});
