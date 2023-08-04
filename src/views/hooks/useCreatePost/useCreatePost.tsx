import { PostsDocument } from '../useGetPosts/useGetPosts.generated';
import { useCreatePostMutation, CreatePostMutationOptions } from './useCreatePost.generated';

export function useCreatePost(options?: CreatePostMutationOptions) {
	const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
		...options,
		refetchQueries: [{ query: PostsDocument, variables: { limit: 6 } }],
	});

	return [createPostMutation, { data, loading, error }] as const;
}
