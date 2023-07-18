import { DefaultLayout } from 'src/views/DefaultLayout';
import { CreatePost } from 'src/views/components/CreatePost';

const createPost = () => {
	return <DefaultLayout children={<CreatePost />} />;
};

export default createPost;
