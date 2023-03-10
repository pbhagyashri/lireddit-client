import { CreatePost } from '@/views/components/CreatePost/CreatePost';
import { DefaultLayout } from '@/views/DefaultLayout';

const createPost = () => {
	return <DefaultLayout children={<CreatePost />} />;
};

export default createPost;
