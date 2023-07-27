import { MeDocument } from '@hooks/useMe/useMeQuery.generated';

export const useMeRequestMock = {
	request: {
		query: MeDocument,
	},
	result: {
		data: {
			me: {
				id: 1,
				username: 'test username',
			},
		},
	},
};
