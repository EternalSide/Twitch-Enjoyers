import Post from '../../components/Post/Post';
import Form from '../../components/Form/Form';
import './News.css';

const News = () => {
	return (
		<div className='messages'>
			<Post userPic='https://i.pinimg.com/736x/ba/5a/1f/ba5a1fa3119cc2c880880184a8f1eada.jpg'>
				Первое обновление! Добавили:
				<ul>
					<li>1. 927 паст</li>
					<li>2. Рандомайзер</li>
					<li>3. Поиск </li>
					<li>4. Избранное</li>
				</ul>
			</Post>

			<Form disabled />
		</div>
	);
};

export default News;
