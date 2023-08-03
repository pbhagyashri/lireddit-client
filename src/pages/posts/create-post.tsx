import { DefaultLayout } from 'src/views/DefaultLayout';
import { CreatePost } from 'src/views/components/CreatePost';

const createPost = () => {
	return (
		<DefaultLayout>
			<CreatePost />
		</DefaultLayout>
	);
};

export default createPost;
