import { renderHook, waitFor } from '@testing-library/react';
import { apolloMockProviderWrapper } from '@views/test-helper';
import { useMe } from './useMe';
import { useMeRequestMock } from './useMe.mock';
import { MeFactory } from '~utils/test-mocks/MeFactory';

describe('useMe', () => {
	it('should return the logged in user', async () => {
		const { result } = renderHook(() => useMe(), {
			wrapper: apolloMockProviderWrapper(useMeRequestMock),
		});

		await waitFor(() =>
			expect(result.current).toEqual({
				error: undefined,
				loading: false,
				me: MeFactory.make(),
			}),
		);
	});
});
