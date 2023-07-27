import { factory } from 'node-factory';
import { Post } from 'src/generated/graphql-types';

export const PostFactory = factory<Post>((fake) => ({
	id: 1,
	points: 0,
	creatorId: 1,
	title: 'test title',
	text: 'test body',
}));
