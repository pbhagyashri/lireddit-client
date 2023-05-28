import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMe } from '../hooks/useMeQuery/useMe';

export function useIsAuth() {
	const { me, loading } = useMe();
	const { replace, pathname } = useRouter();

	useEffect(() => {
		if (!loading && !me) {
			replace('/login?next=' + pathname);
		}
	}, [loading, me]);
}
