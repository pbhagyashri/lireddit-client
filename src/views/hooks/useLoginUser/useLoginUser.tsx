import { LoginMutationOptions, useLoginMutation } from './useLoginUserMutation.generated';

export function useLoginUser(options?: LoginMutationOptions) {
	const [loginMutation, { data, loading, error }] = useLoginMutation({
		...options,
	});

	return [loginMutation, { data, loading, error }] as const;
}
