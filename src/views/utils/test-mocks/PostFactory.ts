import { factory } from 'node-factory';
import { Post } from 'src/generated/graphql-types';
import post from 'src/pages/posts/[post]';

export const PostFactory = factory<Partial<Post> | Partial<Post>[]>((fake) => ({
	id: 1,
	points: 0,
	creatorId: 1,
	title: 'test title',
	text: 'test body',
}));
