import { Post } from '@/views/components/Posts/Post/';
import { DefaultLayout } from '@/views/DefaultLayout';

const post = () => {
	return <DefaultLayout children={<Post />} />;
};

export default post;
