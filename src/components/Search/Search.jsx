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
          setTimeout(() => {
            changeHandler(e.target.value);
          }, 200);
        }}
      />
    </div>
  );
}

Search.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};

export default Search;
