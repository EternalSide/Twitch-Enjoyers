import SearchButton from './SearchButton';

const SearchMenu = () => {
	return (
		<div className='pasta'>
			Поиск среди всех паст в базе
			<div className='popular__options'>
				<h3 className='popular__title'>Популярные запросы:</h3>
				<div className='popular__buttons'>
					<SearchButton text='Папич' />
					<SearchButton text='Стример' />
					<SearchButton text='Чат' />
					<SearchButton text='Лох' />
					<SearchButton text='zxc' />
					<SearchButton text='кабан' />
				</div>
			</div>
		</div>
	);
};
export default SearchMenu;
