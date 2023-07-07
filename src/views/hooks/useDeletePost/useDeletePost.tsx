import { useDeletePostMutation } from '@/views/hooks/useDeletePost/useDeletePost.generated';
import { PostsDocument } from '@/views/hooks/useGetPosts/useGetPosts.generated';

export function useDeletePost() {
	const [deletePostMutation] = useDeletePostMutation();

	const deletePost = async (deletePostId: string) => {
		await deletePostMutation({
			variables: {
				deletePostId,
			},
			refetchQueries: [PostsDocument],
		});
	};

	return deletePost;
}
