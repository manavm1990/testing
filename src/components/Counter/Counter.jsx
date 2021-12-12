import PropTypes from "prop-types";
import React from "react";

function Counter({ count }) {
  return <p className="font-semibold text-lg text-blue-700">{count}</p>;
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;
