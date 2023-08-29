import { Pasti } from '../../materials/Pasti';
import Post from '../../components/Post/Post';
import Form from '../../components/Form/Form';
import './All.css';

const All = () => {
	return (
		<>
			<Form disabled />
			{Pasti.reverse().map((pasta, i) => (
				<Post
					key={i}
					buttons={true}
					message={pasta.text}
				/>
			))}
		</>
	);
};

export default All;
