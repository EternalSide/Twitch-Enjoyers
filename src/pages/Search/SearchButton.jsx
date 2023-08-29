import { Pasti } from '../../materials/Pasti';
import { useDispatch } from 'react-redux';
import { setSearchResultsRedux } from '../../features/userFav.js';
const SearchButton = ({ text }) => {
	const dispatch = useDispatch();

	const getSearchResults = () => {
		const searchResults = Pasti.filter((pasta) => pasta.text.includes(text));
		return dispatch(setSearchResultsRedux(searchResults));
	};
	return (
		<button
			onClick={() => getSearchResults()}
			className='search__button'
		>
			{text}
		</button>
	);
};

export default SearchButton;
