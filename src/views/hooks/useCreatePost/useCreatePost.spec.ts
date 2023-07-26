import { useCreatePost } from '@hooks/useCreatePost';
import { apolloMockProviderWrapper } from '@views/test-helper';
import { renderHook } from '@testing-library/react';
import { useCreatePostRequestMock } from '@hooks/useCreatePost/useCreatePost.mock';
import { PostFactory } from '~utils/test-mocks/PostFactory';

describe('useCreatePost', () => {
	it('should create a post', async () => {
		// render the hook with request mocks
		const { result } = renderHook(() => useCreatePost(), {
			wrapper: apolloMockProviderWrapper(useCreatePostRequestMock),
		});

		// make sure the hook returns a function that create a post
		expect(result.current[0]).toBeInstanceOf(Function);

		// execute the function returned by the hook with correct arguments
		const response = await result.current[0]({ variables: { title: 'test title', text: 'test body' } });

		// make sure a post was created with the correct data
		expect(response).toEqual({
			data: {
				createPost: PostFactory.make(),
			},
		});
	});
});
