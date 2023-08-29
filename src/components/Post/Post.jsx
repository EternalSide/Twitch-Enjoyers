import { useState } from 'react';
import './Post.css';
import { useDispatch } from 'react-redux';
import { setNewLength } from '../../features/userFav.js';
import { showLength } from '../../features/userFav.js';
import { useSelector } from 'react-redux';
import { setNewPosts } from '../../features/userFav.js';
import { showPosts } from '../../features/userFav.js';
const Post = ({ message, buttons, children, userPic, deleteButton }) => {
	// Мессаги на кнопке
	const [copyMessage, setCopyMessage] = useState('Скопировать');
	// Redux инфо
	const postsLength = useSelector(showLength);
	const dispatch = useDispatch();
	const posts = useSelector(showPosts);
	// Пост в избранном
	const buttonInFavourites = posts.some((post) => post === message);

	//Добавление в избранное
	const sendPastaToFavourites = () => {
		if (posts.some((post) => post.includes(message))) return;
		dispatch(setNewLength(postsLength + 1));
		const updatedAllPosts = [message, ...posts];
		dispatch(setNewPosts(updatedAllPosts));
		localStorage.setItem('posts', JSON.stringify(updatedAllPosts));
	};

	//При удаление мы перезаписываем посты в редаксе
	const deletePastaFromFavourites = () => {
		dispatch(setNewLength(postsLength - 1));
		const newFilteredMassive = [...posts.filter((item) => item !== message)];
		dispatch(setNewPosts(newFilteredMassive));
		localStorage.setItem('posts', JSON.stringify(newFilteredMassive));
	};

	// Скопировать пасту
	const copyPasta = () => {
		setCopyMessage('Скопировано ✓');
		navigator.clipboard.writeText(message);
		setTimeout(() => {
			setCopyMessage('Скопировать');
		}, 1000);
	};

	return (
		<div className='post'>
			<img
				src={
					userPic
						? userPic
						: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkx4UELudBuke52_WyI8nfW1BC5Jv8vFSNtRpGOAJBf-r6TJCssVi9ZPTIG7vzEdCW2Bc&usqp=CAU'
				}
				alt='Иконка перед постом'
				className='post__pic'
				onClick={() => window.open('https://github.com/EternalSide', '_blank')}
			/>
			{/* Пост с разметкой внутри или текстом */}
			<div className='post__container'>
				<div className='pasta '>
					<span className='post__pastabefore'>EternalSide:</span>
					{message ? message : children}
				</div>

				{/* Посты с кнопками */}
				{buttons && (
					<div className='post__buttons'>
						<div className='post__buttons-container'>
							<button
								onClick={copyPasta}
								type='button'
								className={copyMessage === 'Скопировано ✓' ? 'post__button post__button_green' : 'post__button'}
							>
								{copyMessage}
							</button>
							{deleteButton ? (
								<button
									type='button'
									onClick={deletePastaFromFavourites}
									className='post__button post__button_red'
								>
									Удалить
								</button>
							) : (
								<button
									type='button'
									disabled={buttonInFavourites ? true : false}
									onClick={sendPastaToFavourites}
									className={buttonInFavourites ? 'post__button post__button_green' : 'post__button'}
								>
									{buttonInFavourites ? 'В избранном ✓' : 'В избранное'}
								</button>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Post;
