import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import createEmotionCache from '@theme/createEmotionCache';
import theme from '@theme/theme';
import { Post } from 'src/generated/graphql-types';

const httpLink = createHttpLink({
	uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					posts: {
						keyArgs: false,

						// TODO: make this more robust
						// TODO: implenet replay style node and edge based pagination
						merge(existing = [], incoming) {
							const test = incoming.slice(1, incoming.length);
							return !existing.length ? [...existing, ...incoming] : [...existing, ...test];
						},
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
	return (
		<ApolloProvider client={client}>
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
	);
}
