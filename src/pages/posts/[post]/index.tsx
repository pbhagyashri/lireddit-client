import { DefaultLayout } from 'src/views/DefaultLayout';
import { Post } from '@components/Posts/Post';

const post = () => {
	return (
		<DefaultLayout>
			<Post />
		</DefaultLayout>
	);
};

export default post;
