import './App.css';
import Menu from './containers/Menu';
import Container from './containers/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserMobile } from './features/userFav';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from 'react-redux';
import { setUserMobile } from './features/userFav';
function App() {
	const isMobile = useSelector(isUserMobile);
	const dispatch = useDispatch();
	return (
		<Router>
			<div className='app__container'>
				<Menu />
				<div className={`main__container ${isMobile && 'main__container_mobile'}`}>
					<div className='main-block '>
						{isMobile && (
							<ArrowBackIcon
								className='arrow-back'
								onClick={() => dispatch(setUserMobile(false))}
							/>
						)}
						<Container />
					</div>
					<div className='fakeheight' />
				</div>
			</div>
		</Router>
	);
}

export default App;
