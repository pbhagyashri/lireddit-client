import { useRegisterMutation, RegisterMutationOptions } from './useRegisterUserMutation.generated';

export function useRegisterUser(options?: RegisterMutationOptions) {
	const [registerMutation, { data, loading, error }] = useRegisterMutation({
		...options,
	});

	return [registerMutation, { data, loading, error }] as const;
}
