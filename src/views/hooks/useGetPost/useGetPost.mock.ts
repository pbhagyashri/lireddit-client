import { PostFactory } from '~utils/test-mocks/PostFactory';
import { PostDocument } from './useGetPost.generated';

export const useGetPostRequestMock = {
	request: {
		query: PostDocument,
		variables: {
			postId: '1',
		},
	},
	result: {
		loading: false,
		data: {
			post: PostFactory.make(),
		},
	},
};
