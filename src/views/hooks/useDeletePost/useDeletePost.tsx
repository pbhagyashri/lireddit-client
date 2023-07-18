import { useDeletePostMutation } from '@hooks/useDeletePost/useDeletePost.generated';
import { PostsDocument } from '@hooks/useGetPosts/useGetPosts.generated';

export function useDeletePost() {
	const [deletePostMutation] = useDeletePostMutation();

	const deletePost = async (deletePostId: string) => {
		``;
		await deletePostMutation({
			variables: {
				deletePostId,
			},
			refetchQueries: [PostsDocument],
		});
	};

	return deletePost;
}
