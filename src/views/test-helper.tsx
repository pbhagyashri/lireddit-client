import { ReactElement, ReactNode } from 'react';
import { act, render, RenderOptions } from '@testing-library/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';
import { MockedProvider } from '@apollo/client/testing';
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

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
	render(ui, { wrapper: AllTheProviders, ...options });
	return { user: userEvent };
};

export async function waitForGraphQl(timeout?: number) {
	await act(async () => {
		await new Promise((resolve) => {
			setTimeout(resolve, timeout || 0);
		});
	});
}

export * from '@testing-library/react';
export { customRender as render, screen };
