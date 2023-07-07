import { useGetPost } from '@/views/hooks/useGetPost/useGetPost';
import { useRouter } from 'next/router';
import { PostDetails } from '@/views/components/Posts/Post/PostDetails';

export const Post = () => {
	const {
		query: { post: postId },
	} = useRouter();
	const { post } = useGetPost(`${postId}`);

	if (!post) return null;

	return <PostDetails post={post} />;
};
