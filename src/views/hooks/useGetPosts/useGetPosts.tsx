import { usePostsQuery } from './useGetPosts.generated';

export function useGetPosts() {
	const { data, loading, error } = usePostsQuery();
	console.log(data);
	return {
		posts: data?.posts,
		loading,
		error,
	};
}
