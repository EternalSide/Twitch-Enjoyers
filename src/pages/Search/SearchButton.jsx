import React, { useState } from "react";
import { Pasti } from "../../materials/Pasti";
const SearchButton = ({ text, searchPasta, setSearchResults, Results }) => {
  return (
    <>
      <button
        onClick={() => {
          // Если делают тот же запрос отменяем
          const searchResults = Pasti.filter((pasta) =>
            pasta.text.includes(text)
          );
          setSearchResults(searchResults);
        }}
        className="search__button"
      >
        {text}
      </button>
    </>
  );
};

export default SearchButton;
