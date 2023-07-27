import { RegisterDocument } from '@hooks/useRegisterUser/useRegisterUserMutation.generated';

export const useRegisterUserRequestMock = {
	request: {
		query: RegisterDocument,
		variables: {
			inputs: {
				username: 'test username',
				password: 'test password',
			},
		},
	},
	result: {
		data: {
			register: {
				token: 'test token',
			},
		},
	},
};
