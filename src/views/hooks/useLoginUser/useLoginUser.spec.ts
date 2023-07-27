import { apolloMockProviderWrapper } from '@views/test-helper';
import { useLoginUser } from './useLoginUser';
import { renderHook } from '@testing-library/react';
import { useLoginUserRequestMock } from '@hooks/useLoginUser/useLoginUser.mock';

describe('useLoginUser', () => {
	it('should login a user', async () => {
		const { result } = renderHook(() => useLoginUser(), {
			wrapper: apolloMockProviderWrapper(useLoginUserRequestMock),
		});
		const loginMutation = result.current[0];

		expect(loginMutation).toBeInstanceOf(Function);
		const response = await loginMutation({
			variables: { inputs: { username: 'test username', password: 'test password' } },
		});

		expect(response.data?.login).toEqual({ token: 'test token' });
	});
});
