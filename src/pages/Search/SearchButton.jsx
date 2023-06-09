import { Pasti } from "../../materials/Pasti";
import { useDispatch } from "react-redux";
import { setSearchResultsRedux } from "../../features/userFav.js";
const SearchButton = ({ text }) => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
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
