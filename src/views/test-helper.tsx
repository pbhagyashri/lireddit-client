import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions, queries, within } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import theme from '@theme/theme';

jest.mock('next/router', () => ({
	useRouter: jest.fn().mockReturnValue({
		query: {},
		push: () => {},
	}),
}));

interface Props {
	children: ReactNode;
}

const AllTheProviders = ({ children }: Props) => (
	<ThemeProvider theme={theme}>
		<MockedProvider>{children}</MockedProvider>
	</ThemeProvider>
);

const customScreen = within(document.body, queries);
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
	render(ui, { wrapper: AllTheProviders, ...options });

export function apolloMockProviderWrapper(mocks: MockedResponse<Record<string, any>>) {
	const wrapper = ({ children }: Props) => (
		<MockedProvider mocks={[mocks]} addTypename={false}>
			{children}
		</MockedProvider>
	);
	return wrapper;
}

export * from '@testing-library/react';
export { customRender as render, customScreen as screen };

// resources: 
// https://dev.to/hugoliconv/testing-custom-apollo-hooks-with-react-testing-library-53k3