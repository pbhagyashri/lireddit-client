import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, HttpLink, ApolloLink } from '@apollo/client';
import createEmotionCache from '@theme/createEmotionCache';
import theme from '@theme/theme';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { authState } from '@views/atoms';
import { setContext } from '@apollo/client/link/context';

// const httpLink = new HttpLink({ uri: '/graphql' }); // <-- add the link to the graphql server here
export const httpLink = new HttpLink({
	uri: 'http://localhost:4001/graphql',
	fetchOptions: {
		credentials: 'include',
	},
});

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export const unconfiguredClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache({
		// We implement this to merge paginated results as recomended by apollo.
		// Apollo will not merge paginated results by default.
		// It will look at the values of id, cursor, and limit and see that they are different and not merge them.
		typePolicies: {
			Query: {
				fields: {
					posts: {
						// Don't cache separate results based on any of this field's arguments.
						keyArgs: false,

						// Concatenate the incoming list items with
						// the existing list items.
						merge(existing = [], incoming, { args }) {
							return [...existing, ...incoming];
						},
						// // TODO: make this more robust
						// // TODO: implenet replay style node and edge based pagination
						// merge(existing = [], incoming) {
						// 	const test = incoming.slice(1, incoming.length);

						// 	return !existing.length ? [...existing, ...incoming] : [...existing, ...test];
						// },
					},
				},
			},
		},
	}),
});

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	const auth = useRecoilValue(authState);

	// console.log({ auth });

	// const authLink = setContext((_, { headers }) => {
	// 	console.log({ headers });

	// 	// return the headers to the context so httpLink can read them
	// 	return {
	// 		headers: {
	// 			...headers,
	// 			authorization: `Bearer ${auth}`,
	// 		},
	// 	};
	// });

	// unconfiguredClient.setLink(httpLink.concat(authLink));

	return (
		<RecoilRoot>
			<ApolloProvider client={unconfiguredClient}>
				<CacheProvider value={emotionCache}>
					<Head>
						<meta name='viewport' content='initial-scale=1, width=device-width' />
					</Head>

					<ThemeProvider theme={theme}>
						<CssBaseline />
						<main style={{ backgroundColor: theme.palette.primary.light }}>
							<Component {...pageProps} />
						</main>
					</ThemeProvider>
				</CacheProvider>
			</ApolloProvider>
		</RecoilRoot>
	);
}
