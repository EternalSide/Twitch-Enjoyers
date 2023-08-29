import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserMobile } from '../../features/userFav';
import { useMediaQuery } from '@mui/material';

function MenuItem({ isLink, name, info, icon, url }) {
	const dispatch = useDispatch();
	const mobileResolution = useMediaQuery('(max-width:620px)');

	const setMobileResolution = () => {
		if (mobileResolution) dispatch(setUserMobile(true));
	};

	return (
		<NavLink
			onClick={() => setMobileResolution()}
			target={isLink && '_blank'}
			to={url}
			className={({ isActive }) =>
				`left-menu__item ${isActive && 'left-menu__item_type_chosen'} ${isLink && 'left-menu__item_type_link'}`
			}
		>
			<img
				src={icon}
				alt={name}
				className='left-menu__img'
			/>
			<div>
				<h2 className='left-menu__title'>{name}</h2>
				{!isLink && <p className='left-menu__subtitle'>{info}</p>}
			</div>
		</NavLink>
	);
}

export default MenuItem;
