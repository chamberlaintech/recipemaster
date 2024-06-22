import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchFrom = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchRecipe = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-section">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search for recipes</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchRecipe}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchFrom;
