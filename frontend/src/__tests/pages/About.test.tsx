import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "../../pages/About";

test("displays something", async () => {
  render(<About />);
  expect(
    await screen.findByText("Lorem ipsum dolor sit", {
      exact: false,
    })
  ).toBeInTheDocument();
});
