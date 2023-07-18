import { usePostQuery } from './useGetPost.generated';

export function useGetPost(postId: string) {
	const { data, loading, error } = usePostQuery({
		variables: {
			postId,
		},
	});

	return { post: data?.post, loading, error };
}
