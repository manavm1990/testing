import React from "react";
import renderer from "react-test-renderer";
import Search from "./Search";

describe("My Test Suite", () => {
  it("My Test Case", () => {
    expect(true).toBe(true);
  });
});

describe("Search", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<Search />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
