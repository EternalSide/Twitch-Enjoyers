import { useEffect, useState, useRef } from 'react';
import { Pasti } from '../../materials/Pasti';
import Post from '../../components/Post/Post';

import Form from '../../components/Form/Form';
import './Random.css';
const Random = () => {
	//Возвращает рандом пасту из массива
	const getRandomPasta = () => Pasti[Math.floor(Math.random() * Pasti.length)].text;

	//Рандом паста
	const [randomPasta, setRandomPasta] = useState([]);

	const buttonRef = useRef();

	useEffect(() => {
		setRandomPasta(getRandomPasta());
	}, [buttonRef]);

	const changeRandom = () => setRandomPasta(getRandomPasta());

	return (
		<>
			<Form disabled />
			<Post>
				<button
					ref={buttonRef}
					type='button'
					className='random__change'
					onClick={() => changeRandom()}
				>
					RANDOM
				</button>
			</Post>
			<Post
				userPic='https://ih1.redbubble.net/image.1798075794.4772/st,small,507x507-pad,600x600,f8f8f8.jpg'
				buttons={true}
				message={randomPasta}
			/>
		</>
	);
};

export default Random;
