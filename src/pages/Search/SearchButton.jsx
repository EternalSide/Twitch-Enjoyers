import React, { useState } from "react";
import { Pasti } from "../../materials/Pasti";
import { useSelector, useDispatch } from "react-redux";
import { showSearchResults } from "../../features/userFav";
import { setSearchResultsRedux } from "../../features/userFav.js";
const SearchButton = ({ text }) => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          // Если делают тот же запрос отменяем
          const searchResults = Pasti.filter((pasta) => pasta.text.includes(text));

          dispatch(setSearchResultsRedux(searchResults));
        }}
        className="search__button"
      >
        {text}
      </button>
    </>
  );
};

export default SearchButton;
