import { usePostsQuery } from './useGetPosts.generated';

export function useGetPosts() {
	const { data, loading, error } = usePostsQuery();

	return {
		posts: data?.posts,
		loading,
		error,
	};
}
