import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { authState } from '@views/atoms/authAtom';
import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import { httpLink, unconfiguredClient } from 'src/pages/_app';
import { DefaultLayout } from 'src/views/DefaultLayout';
import { Posts } from 'src/views/components/Posts';

export default function Home() {
	// set auth headers on every request
	// const auth = useRecoilValue(authState);
	// console.log({ auth });
	// const authLink = setContext((_, { headers }) => {
	// 	// console.log({ headers });

	// 	// return the headers to the context so httpLink can read them
	// 	return {
	// 		headers: {
	// 			...headers,
	// 			authorization: `Bearer ${auth}`,
	// 		},
	// 	};
	// });

	// unconfiguredClient.setLink(httpLink.concat(authLink));
	// unconfiguredClient.setLink(authLink.concat(httpLink));

	return (
		<>
			<Head>
				<title>Lireddit</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<DefaultLayout>
					<Posts />
				</DefaultLayout>
			</main>
		</>
	);
}
