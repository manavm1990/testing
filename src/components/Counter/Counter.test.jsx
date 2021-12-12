import React from "react";
import renderer from "react-test-renderer";
import Counter from "./Counter";

describe("My Test Suite", () => {
  it("My Test Case", () => {
    expect(true).toBe(true);
  });
});

describe("Counter", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<Counter count={1} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
