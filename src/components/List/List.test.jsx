import { reducer } from "../../hooks/useData";

describe("My Test Suite", () => {
  it("My Test Case", () => {
    expect(true).toBe(true);
  });
});

describe("reducer", () => {
  const LIST = [
    { objectID: "1", title: "test1", url: "http://url1.com" },
    { objectID: "2", title: "test2", url: "http://url2.com" },
  ];

  it("should return the initial state", () => {
    // We pass in initial state as we would if using `useReducer`
    expect(reducer({})).toEqual({});
  });

  it("should handle SET_DATA", () => {
    expect(reducer({}, { type: "SET_DATA", payload: LIST })).toEqual({
      data: LIST,
      error: null,
    });
  });

  it("should handle SET_ERROR", () => {
    expect(reducer({}, { type: "SET_ERROR", payload: "Error" })).toEqual({
      error: "Error",
    });
  });

  it("should reset the error if data is set", () => {
    expect(
      reducer(
        {
          error: "Error",
        },
        { type: "SET_DATA", payload: LIST }
      )
    ).toEqual({
      data: LIST,
      error: null,
    });
  });
});
