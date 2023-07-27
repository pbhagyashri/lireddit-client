import { useMe } from '@hooks/useMe';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function useIsAuth() {
	const { me, loading } = useMe();
	const { replace } = useRouter();

	useEffect(() => {
		if (!loading && !me) {
			replace('/posts/login');
		}
	}, [loading, me]);
}
