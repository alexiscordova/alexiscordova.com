import { describe, it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

describe("Header Component", () => {
  it("renders the header with the correct title", () => {
    render(<Header />);

    // This test will fail initially since we haven't created the component yet
    // But it provides a pattern for component testing
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();

    const titleElement = screen.getByText(/Alexis Córdova/i);
    expect(titleElement).toBeInTheDocument();
  });
});
