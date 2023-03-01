import { useMeQuery } from './useMeQuery.generated';

export function useMe() {
	const { data, loading, error } = useMeQuery({ fetchPolicy: 'no-cache' });

	return { data, loading, error };
}
