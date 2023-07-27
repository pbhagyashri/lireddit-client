import { useRouter } from 'next/router';
import { useGetPost } from '@hooks/useGetPost';
import { PostDetails } from './PostDetails';

export const Post = () => {
	const {
		query: { post: postId },
	} = useRouter();
	const { post } = useGetPost(`${postId}`);

	if (!post) return null;

	return <PostDetails post={post} />;
};
