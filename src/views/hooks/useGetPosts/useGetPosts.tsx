import { useGetPostsQuery } from '@hooks/useGetPosts/useGetPosts.generated';

export function useGetPosts(limit: number, cursor?: string) {
	// const { data, loading, error, fetchMore } = useGetPostsQuery({ variables: { limit, cursor } });
	const { data, loading, error } = useGetPostsQuery({
		variables: {
			inputs: {
				limit,
				cursor,
			},
		},
	});

	return {
		posts: data?.getPosts.posts || [],
		loading,
		error,
	};
}
