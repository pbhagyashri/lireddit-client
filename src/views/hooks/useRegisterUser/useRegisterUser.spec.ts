import { apolloMockProviderWrapper } from '@views/test-helper';
import { renderHook } from '@testing-library/react';
import { useRegisterUser } from './useRegisterUser';
import { useRegisterUserRequestMock } from '@hooks/useRegisterUser/useRegister.mock';

describe('useRegisterUser', () => {
	it('should register a user', async () => {
		const { result } = renderHook(() => useRegisterUser(), {
			wrapper: apolloMockProviderWrapper(useRegisterUserRequestMock),
		});
		const registerMutation = result.current[0];

		expect(registerMutation).toBeInstanceOf(Function);
		const response = await registerMutation({
			variables: { inputs: { username: 'test username', password: 'test password' } },
		});

		expect(response).toEqual({
			data: {
				register: {
					token: 'test token',
				},
			},
		});
	});
});
