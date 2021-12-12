import ky from "ky";
import React from "react";
import List from "./List";

const url = "http://hn.algolia.com/api/v1/search?query=react";

const reducer = (state, { type, payload }) => {
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

function App() {
  const [state, dispatch] = React.useReducer(reducer, {});

  React.useEffect(() => {
    ky.get(url)
      .json()
      .then((data) => {
        dispatch({ type: "SET_DATA", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "SET_ERROR", payload: error.message });
      });
  }, []);

  if (state.error) {
    return <p className="text-red-500">{state.error}</p>;
  }

  return state.data ? (
    <List items={state.data.hits} />
  ) : (
    <p className="text-yellow-500">Loading...</p>
  );
}

export default App;
