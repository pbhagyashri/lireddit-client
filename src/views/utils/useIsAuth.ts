import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMe } from '../hooks/useMeQuery/useMe';

export function useIsAuth() {
	const { data, loading } = useMe();
	const { replace, pathname } = useRouter();

	useEffect(() => {
		if (!loading && !data?.me) {
			replace('/login?next=' + pathname);
		}
	}, [loading, data]);
}
