import { LoginDocument } from '@hooks/useLoginUser/useLoginUserMutation.generated';

export const useLoginUserRequestMock = {
	request: {
		query: LoginDocument,
		variables: {
			inputs: {
				username: 'test username',
				password: 'test password',
			},
		},
	},
	result: {
		loading: false,
		data: {
			login: {
				token: 'test token',
			},
		},
	},
};
