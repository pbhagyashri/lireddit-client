import { usePostQuery } from '@/views/hooks/useGetPost/useGetPost.generated';

export function useGetPost(postId: string) {
	const { data, loading, error } = usePostQuery({
		variables: {
			postId,
		},
	});

	return { post: data?.post, loading, error };
}
