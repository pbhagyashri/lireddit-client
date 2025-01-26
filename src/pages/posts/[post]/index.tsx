import { useRouter } from 'next/router';
import { DefaultLayout } from 'src/views/DefaultLayout';
import { Post } from '@components/Posts/Post';

const post = () => {
	const router = useRouter();
	const { limit } = router.query;
	console.log({ limit });

	return (
		<DefaultLayout>
			<Post />
		</DefaultLayout>
	);
};

export default post;
