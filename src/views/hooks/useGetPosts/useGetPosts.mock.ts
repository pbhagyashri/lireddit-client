import { PostsDocument } from '@hooks/useGetPosts/useGetPosts.generated';
import { PostFactory } from '~utils/test-mocks/PostFactory';

export const useGetPostsRequestMock = {
	request: {
		query: PostsDocument,
		variables: {
			limit: 4,
		},
	},
	result: {
		data: {
			posts: PostFactory.make(10),
		},
	},
};
