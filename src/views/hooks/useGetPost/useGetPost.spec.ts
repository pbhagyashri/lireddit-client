import { Post } from '@components/Posts/Post';
import { useGetPost } from '@hooks/useGetPost';
import { useGetPostRequestMock } from '@hooks/useGetPost/useGetPost.mock';
import { renderHook, waitFor } from '@testing-library/react';
import { apolloMockProviderWrapper } from '@views/test-helper';
import { PostFactory } from '~utils/test-mocks/PostFactory';

describe('useGetPost', () => {
	it('should get a post', async () => {
		// render the hook with request mocks
		const { result } = renderHook(() => useGetPost('1'), {
			wrapper: apolloMockProviderWrapper(useGetPostRequestMock),
		});

		await waitFor(() =>
			expect(result.current).toEqual({
				error: undefined,
				loading: false,
				post: PostFactory.make(),
			}),
		);
	});
});
