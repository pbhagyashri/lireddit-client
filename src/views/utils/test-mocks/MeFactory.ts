import { factory } from 'node-factory';
import { User } from 'src/generated/graphql-types';

export const MeFactory = factory<User>(() => ({
	id: 1,
	username: 'test username',
}));
