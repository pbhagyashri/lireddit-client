import { useDeletePostMutation } from '@hooks/useDeletePost/useDeletePost.generated';

export function useDeletePost() {
	const [deletePostMutation, { data, error, loading }] = useDeletePostMutation();

	return [deletePostMutation, { data, error, loading }] as const;
}
