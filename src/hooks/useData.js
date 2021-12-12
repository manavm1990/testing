import ky from "ky";
import React from "react";

const URL = "http://hn.algolia.com/api/v1/search?query=react";

export const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case "SET_DATA":
      return {
        ...state,
        data: payload,
        error: null,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

function useData() {
  const [state, dispatch] = React.useReducer(reducer, {});

  React.useEffect(() => {
    ky.get(URL)
      .json()
      .then((data) => {
        dispatch({ type: "SET_DATA", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "SET_ERROR", payload: error.message });
      });
  }, []);

  return state;
}

export default useData;
