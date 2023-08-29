import './Menu.css';
import MenuItem from '../components/MenuItem/MenuItem';
import HeaderInfo from '../components/HeaderInfo/HeaderInfo';

//Общее Число паст
import { lengthOfPasti } from '../materials/Pasti';

//Redux
import { useSelector } from 'react-redux';
import { showLength } from '../features/userFav';
import { isUserMobile } from '../features/userFav';
import { useMemo } from 'react';
function Menu() {
	const userFavLength = useSelector(showLength);
	const isUserMob = useSelector(isUserMobile);

	const routes = useMemo(() => {
		return [
			{
				url: '/',
				name: 'Все пасты',
				info: `Паст добавлено: ${lengthOfPasti}`,
				icon: 'https://cdn.iconscout.com/icon/free/png-256/free-twitch-11-461838.png?f=webp',
			},
			{
				url: '/news',
				name: 'Новости',
				info: `Выпустили первую версию!`,
				icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkx4UELudBuke52_WyI8nfW1BC5Jv8vFSNtRpGOAJBf-r6TJCssVi9ZPTIG7vzEdCW2Bc&usqp=CAU',
			},
			{
				url: '/random',
				name: 'Рандом',
				info: `опять работа?`,
				icon: 'https://ih1.redbubble.net/image.1798075794.4772/st,small,507x507-pad,600x600,f8f8f8.jpg',
			},
			{
				url: '/search',
				name: 'Поиск',
				info: `Найди свою любимую пасту <3`,
				icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzlfJ9s2OXRYeoraa78-X8pNFgG-AWr5e2fGgCYOghzq11Qqa6URhC6jB8R6tG_FxMKw&usqp=CAU',
			},
			{
				url: '/fav',
				name: 'Избранное',
				info: `Паст в избранном: ${userFavLength}`,
				icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFvDAtbG-cpaYDEhbIy0Bw5ALqYxD2n2yWgrdwLkLZorBnb5ORwfj-_IDU5QXabOCJYg&usqp=CAU',
			},
		];
	}, [userFavLength]);

	return (
		<div className={isUserMob ? 'left-menu none' : 'left-menu'}>
			<div className={isUserMob ? 'left-menu__test none' : 'left-menu__test'}>
				<HeaderInfo />
				{routes.map((route) => (
					<MenuItem
						key={route.url}
						url={route.url}
						name={route.name}
						info={route.info}
						icon={route.icon}
					/>
				))}
				<MenuItem
					isLink={true}
					name='Github'
					url='https://github.com/EternalSide'
					icon='https://icones.pro/wp-content/uploads/2021/06/icone-github-orange.png'
				/>
			</div>
		</div>
	);
}

export default Menu;
