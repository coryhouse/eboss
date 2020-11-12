import Button from "./Button";
import { render, fireEvent } from "@testing-library/react";

it("should render child content", () => {
  const { getByText } = render(<Button>Content</Button>);
  getByText("Content"); // implied assertion
});

it("should apply an html id", () => {
  const { container } = render(<Button id="exampleid">Content</Button>);
  expect(container.querySelector("#exampleid")).toBeInTheDocument();
});

it("should call the onClick function", () => {
  const onClick = jest.fn(); // Create a mock function
  const { getByText } = render(<Button onClick={onClick}>Content</Button>);
  const button = getByText("Content");
  fireEvent.click(button); // simulates a button click
  expect(onClick).toHaveBeenCalledTimes(1);
});
