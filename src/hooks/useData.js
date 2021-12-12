import ky from "ky";
import React from "react";

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

function useData(search) {
  const [state, dispatch] = React.useReducer(reducer, {});

  const url = `http://hn.algolia.com/api/v1/search?query=${search}`;

  React.useEffect(() => {
    ky.get(url)
      .json()
      .then((data) => {
        dispatch({ type: "SET_DATA", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "SET_ERROR", payload: error.message });
      });
  }, [url]);

  return state;
}

export default useData;
