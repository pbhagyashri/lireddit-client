import { render, screen } from '@views/test-helper';
import { Navbar } from '.';
import * as useMeHook from '@hooks/useMe';
import { MeFactory } from '~utils/test-mocks/MeFactory';

jest.mock('@hooks/useMe');

describe('<Navbar />', () => {
	const { useMe } = jest.mocked(useMeHook);
	beforeEach(() =>
		useMe.mockReturnValue({
			loading: false,
			error: undefined,
			me: MeFactory.make(),
		}),
	);

	it('should display navbar', () => {
		render(<Navbar />);

		// username must be displayed
		expect(screen.getByRole('link', { name: 'test username' })).toBeInTheDocument();
		// following navlinks should be displayed at all times
		expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Register' })).toBeInTheDocument();
	});

	describe('when user is logged in', () => {
		it('should display the Logout link', () => {
			render(<Navbar />);

			// logout link should be displayed
			expect(screen.getByText('Logout')).toBeInTheDocument();
			// login link should not be displayed
			expect(screen.queryByRole('link', { name: 'Login' })).not.toBeInTheDocument();
		});
	});

	describe('when user is logged out', () => {
		beforeEach(() =>
			useMe.mockReturnValue({
				loading: false,
				error: undefined,
				me: undefined,
			}),
		);

		it('should display the Login link', () => {
			render(<Navbar />);

			// login link should be displayed
			expect(screen.getByRole('link', { name: 'Login' })).toBeInTheDocument();
			// logout link should not be displayed
			expect(screen.queryByText('Logout')).not.toBeInTheDocument();
		});
	});
});
