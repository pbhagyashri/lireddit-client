import { useGetPostQuery } from '@hooks/useGetPost/useGetPost.generated';

export function useGetPost(postId: string) {
	const { data, loading, error } = useGetPostQuery({
		variables: {
			getPostId: postId,
		},
	});

	return { post: data?.getPost, loading, error };
}
