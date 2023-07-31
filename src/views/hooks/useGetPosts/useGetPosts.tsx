import { usePostsQuery } from './useGetPosts.generated';

export function useGetPosts(limit: number, cursor?: string) {
	const { data, loading, error } = usePostsQuery({ variables: { limit, cursor } });

	return {
		posts: data?.posts,
		loading,
		error,
	};
}
