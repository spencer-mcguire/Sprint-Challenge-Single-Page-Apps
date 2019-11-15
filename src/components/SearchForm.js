import React, { useState } from "react";

const SearchForm = ({ query, handleSearch }) => {
  return (
    <section className="search-form">
      <form>
        <input
          type="text"
          name="search"
          tabIndex="0"
          placeholder="search by character name"
          autoComplete="off"
          value={query}
          onChange={handleSearch}
        />
      </form>
    </section>
  );
};

export default SearchForm;
