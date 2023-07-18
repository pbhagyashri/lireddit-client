import { DefaultLayout } from 'src/views/DefaultLayout';
import { Post } from 'src/views/components/Posts/Post';

const post = () => {
	return <DefaultLayout children={<Post />} />;
};

export default post;
