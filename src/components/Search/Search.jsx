import PropTypes from "prop-types";
import React from "react";

function Search({ changeHandler }) {
  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Search 🔍
      </label>
      <input
        id="search"
        placeholder="Search 🔍"
        type="search"
        onChange={(e) => {
          changeHandler(e.target.value);
        }}
      />
    </div>
  );
}

Search.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};

export default Search;
