import { useGetPosts } from '@hooks/useGetPosts/useGetPosts';
import { useGetPostsRequestMock } from '@hooks/useGetPosts/useGetPosts.mock';
import { renderHook, waitFor } from '@testing-library/react';
import { apolloMockProviderWrapper } from '@views/test-helper';

describe('useGetPosts', () => {
	it('should get a post', async () => {
		// render the hook with request mocks
		const { result } = renderHook(() => useGetPosts(4), {
			wrapper: apolloMockProviderWrapper(useGetPostsRequestMock),
		});

		await waitFor(() => expect(result.current.posts).toHaveLength(10));
	});
});
