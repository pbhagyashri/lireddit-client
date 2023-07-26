import { CreatePostDocument } from '@hooks/useCreatePost/useCreatePost.generated';
import { PostFactory } from '~utils/test-mocks/PostFactory';

export const useCreatePostRequestMock = {
	request: {
		query: CreatePostDocument,
		variables: {
			title: 'test title',
			text: 'test body',
		},
	},
	result: {
		data: {
			createPost: PostFactory.make(),
		},
	},
};
