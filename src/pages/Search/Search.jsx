import { Pasti } from '../../materials/Pasti';
import Form from '../../components/Form/Form';
import Post from '../../components/Post/Post';
import './Search.css';

import { useSelector, useDispatch } from 'react-redux';
import { showSearchResults } from '../../features/userFav';
import { setSearchResultsRedux } from '../../features/userFav.js';
import SearchMenu from './SearchMenu';

const Search = () => {
	const dispatch = useDispatch();

	const data = useSelector(showSearchResults);

	const setSearchResults = (searchText) => {
		//поиск не чувствителен к регистру
		const searchResult = Pasti.filter((pasta) => pasta.text.toLowerCase().includes(searchText.toLowerCase()));
		return dispatch(setSearchResultsRedux(searchResult));
	};

	return (
		<>
			<Form
				placeholder='Введите запрос..'
				makeSubmit={(searchText) => setSearchResults(searchText)}
			/>
			<div className='messages search'>
				{data.length > 0 ? (
					<Post
						userPic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzlfJ9s2OXRYeoraa78-X8pNFgG-AWr5e2fGgCYOghzq11Qqa6URhC6jB8R6tG_FxMKw&usqp=CAU'
						message={`Совпадений: ${data?.length}`}
					/>
				) : (
					<Post
						userPic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzlfJ9s2OXRYeoraa78-X8pNFgG-AWr5e2fGgCYOghzq11Qqa6URhC6jB8R6tG_FxMKw&usqp=CAU'
						message='Ничего не найдено.'
					/>
				)}
				<Post>
					<SearchMenu />
				</Post>
			</div>
			<div className='search__container'>
				{data?.map((pasta) => {
					return (
						<Post
							userPic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzlfJ9s2OXRYeoraa78-X8pNFgG-AWr5e2fGgCYOghzq11Qqa6URhC6jB8R6tG_FxMKw&usqp=CAU'
							buttons={true}
							message={pasta.text}
							copyMessage='Скопировать'
						/>
					);
				})}
			</div>
		</>
	);
};
export default Search;
